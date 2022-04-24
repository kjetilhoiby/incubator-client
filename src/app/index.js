#!/usr/bin/env node

import express from "express";
const app = express();
import cors from "cors";
import http from "http";
import { clientMarkup } from "./views/clientView.js";

const basePath = '/incubator';
const port = 30031;
const server = http.createServer(app);

app.use(cors());

const status = {
    startTime: new Date(),
    runTime: 0,
    devices: {},
    sessions: [],
    activeSessions: [],
    numberofSessions: 0,
};

app.get(basePath + '/', (req, res) => {
    res.status(200).send(clientMarkup)
})

app.get(basePath + '/status', (req, res) => {
    status.runTime = Math.round((new Date().getTime() - new Date(status.startTime).getTime()) / 1000);
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
