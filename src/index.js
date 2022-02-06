class Sensor {
    constructor(deviceId) {
        this.deviceId = deviceId;
        this.powerStatus = 'off';
        this.status;
        this.reportingInterval = 10000;
    }
    turn(pwstatus) {
        if (this.powerStatus === 'off') {
            if (pwstatus === 'on') {
                this.powerStatus = 'on';
                this.status = 'idle';
                setTimeout(() => {
                    this.status = 'sensingDistance';
                    setTimeout(() => {
                        this.status = 'reportingData';
                        setTimeout(() => {
                            this.status = 'idle';
                        }, 1000);
                    }, 500);
                }, this.reportingInterval);
            }
        } else if (this.powerStatus === 'on') {
            if (pwstatus === 'on') {
                throw new Error('이미 켜져 있습니다!');
            } else if (pwstatus === 'off') {
                this.powerStatus = 'off';
            }
        }
    }
}

class IotServer {
    constructor() {
        this.sensors = [];
    }
    start([sensor]) {
        this.sensors.push(sensor);
    }
    publish({ deviceId, actionId, payload }) {
        if (this.sensors[0].powerStatus === 'on') {
            this.sensors[0].deviceId = deviceId;
            this.sensors[0].actionId = actionId;
            this.sensors[0].payload = payload;
            this.sensors[0].reportingInterval = payload;
        }
    }
}

module.exports = {
    Sensor,
    IotServer,
};

const sensor = new Sensor('id1');

sensor.turn('on');

const server = new IotServer();
server.start([sensor]);

server.publish({
    deviceId: 'id1',
    actionId: 'CHANGE_REPORTING_INTERVAL',
    payload: 3000,
});
console.log(server);
