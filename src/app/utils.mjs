import util from 'util';

export const deviceSettings = {
    'Tørketrommel': {
        milliwattThreshold: 4500
    }, 
    'Vaskemaskin': {
        milliwattThreshold: 4500
    }
}

export const getStatus = () => ({
    startTime: new Date(),
    runTime: 0,
    devices: {},
    sessions: [],
    activeSessions: [],
    numberofSessions: 0,
});

export const logEvent = (
    eventName, 
    device, 
    state) => {
    
    const stateString = state != null ? util.inspect(state) : '';
    console.log(
        `${new Date().toISOString()}: [${
            eventName}] ${
            device.alias} ${
            device.host}:${
            device.port
        } ${stateString}`
    );
};

export const getDevice = (
    status, 
    device, 
    emeterRealtime
    ) => {

    const { devices } = status;
    const { alias } = device;
    const { power_mw } = emeterRealtime;

    if (!devices[alias]) {
        devices[alias] = {
            alias,
            discovered: new Date(),
            milliwatts: power_mw,
            buffer: [],
            session: {
                min: power_mw,
                max: power_mw,
                updates: 1,
                average: power_mw
            },
        }
        logEvent('add device', device);
    }
    return devices[alias];

}