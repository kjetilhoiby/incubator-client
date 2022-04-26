#!/usr/bin/env node

import express from "express";
const app = express();
import cors from "cors";
import http from "http";
import { clientMarkup } from "./views/clientView.js";
import { Database } from "./database/index.js";
import { getDevice, getStatus } from "./utils.js";

const basePath = '/incubator';
const port = 30031;
const server = http.createServer(app);
const db = new Database('test.db');

app.use(cors());
app.use(express.json());

const status = getStatus();

app.get(basePath + '/', (req, res) => {
    res.status(200).send(clientMarkup)
});

app.post(basePath + '/register', (req, res) => {
    console.log(req.body);

    const {
        device, 
        emeterRealtime
    } = req.body;

    updateEmeterStatus(device, emeterRealtime)

    res.json(status);
});

app.get(basePath + '/status', (req, res) => {
    status.runTime = Math.round((
        new Date().getTime() 
        - new Date(status.startTime).getTime()) / 1000);
    res.json(status);
});

app.get(basePath + '/client', (req, res) => {
    res.status(200).send(clientMarkup);
});

app.use(
    basePath + '/dist/src/client',
    express.static("./dist/src/client")
);

app.use(
    basePath + '/dist/snowy-deps',
    express.static("./dist/snowy-deps")
);

server.listen(port, () => { console.log(`listening to ${port}`)});

async function updateEmeterStatus(device, emeterRealtime) {

    const deviceStatus = getDevice(status, device, emeterRealtime);
    const unfinishedJobs = await db.unfinished(device.alias);

    if (unfinishedJobs.length) {
        // Det finnes uavsluttede jobber i databasen.
    }

    const { 
        activeJob, 
        history 
    } = deviceStatus;

    db.insertObservation({
        device: device.alias, 
        value: emeterRealtime.power_mw
    }, null)

    const currentDevice = deviceStatus;
    const treshold = currentDevice.milliwattThreshold

    let oldStatus = status.devices[device.alias];
    
    let newStatus = {
        alias: device.alias,
        milliwatts: emeterRealtime.power_mw,
        session: {
            startTime: new Date(),
            min: 10000,
            max: 0,
            updates: 0,
            average: 0
        },
    }

    if ( // start session
        newStatus.milliwatts > treshold
        && (oldStatus.milliwatts < treshold || oldStatus.milliwatts == undefined)
    ) {
        console.log('start!', device.alias);

        message(device.alias + ' har startet')
        
        newStatus.session = {
            startTime: new Date(),
            min: 10000,
            max: 0,
            updates: 0,
            average: 0
        }

    } else if ( // end session
        newStatus.milliwatts < treshold
        && oldStatus.milliwatts > treshold
    ) {
        console.log('end!', device.alias);

        message(device.alias + ' er ferdig')

        oldStatus.session.endTime = new Date();
        oldStatus.session.duration = Math.round((oldStatus.session.endTime.getTime() - oldStatus.session.startTime.getTime()) / 1000);
        oldStatus.session.device = device.alias;

        if (oldStatus.session.duration > 300) {
            status.sessions.push(oldStatus.session);
            status.numberofSessions++;
        } else {

        }

    } else if ( // maintain
        newStatus.milliwatts > treshold
        && oldStatus.milliwatts > treshold
    ) {
        newStatus = oldStatus;
        newStatus.milliwatts = emeterRealtime.power_mw;
        newStatus.session.updates++;

        newStatus.buffer = newStatus.buffer.filter(reading => reading.timestamp > Date.now() - 600*1000)

        newStatus.buffer.push({
            timestamp: Date.now(),
            milliwatts: emeterRealtime.power_mw,
        })

        newStatus.session.average = Math.round(
            ((oldStatus.session.average * oldStatus.session.updates) + oldStatus.milliwatts)
            / (oldStatus.session.updates + 1)
        );

        if (newStatus.milliwatts > oldStatus.session.max) {
            newStatus.session.max = emeterRealtime.power_mw;
        }

        if (newStatus.milliwatts > oldStatus.session.max) {
            newStatus.session.min = emeterRealtime.power_mw;
        }


    } else {
        // no session 
        // console.log('no session!', device.alias);

    }

    status.devices[device.alias] = newStatus;
}
