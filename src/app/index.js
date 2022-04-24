#!/usr/bin/env node

import express from "express";
const app = express();
import cors from "cors";
import http from "http";
import { clientMarkup } from "./views/clientView.js";
import { createdb } from "./dbschema/strings.js";
import * as sqlite3pkg from "sqlite3";
const basePath = '/incubator';

const sqlite3 = sqlite3pkg.default;
const port = 30031;
const server = http.createServer(app);

app.use(cors());

var db = new sqlite3.Database('local.db');

db.serialize(function () {
    db.run(createdb);

    var stmt = db.prepare("INSERT INTO val VALUES (?)");
    for (var i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }
    stmt.finalize();

    db.each("SELECT rowid AS id, info FROM val", function (err, row) {
        // console.log(row.id + ": " + row.info);
    });
});

db.close();

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

app.get(basePath + '/auth/user', (req, res) => {
    res.status(200).json({ 'success': true });
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
