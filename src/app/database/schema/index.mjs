export const createJobDB = `
    CREATE TABLE IF NOT EXISTS job (
        id INT,
        jobId VARCHAR(64),
        deviceId VACHAR(64),
        jobLabel VARCHAR(64),
        firstRegisteredTime DATETIME,
        startTime DATETIME,
        lastRegisteredTime DATETIME,
        endTime DATETIME,
        dayOfWeek CHAR(1),
        hourOfDay CHAR(1)
    )`;

export const createObservationDB = `
    CREATE TABLE IF NOT EXISTS observation (
        id INT,
        jobid VARCHAR(64),
        deviceId VACHAR(64),
        timestamp DATETIME,
        value INT,
        elapsed INT
    )`;


export default {
    createJobDB, createObservationDB
}