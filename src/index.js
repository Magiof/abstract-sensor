class Sensor {
    constructor(name) {
        this.name = name;
        this.powerStatus = 'off';
        this.status;
        this.reportingInterval = 10000;
    }
    turn(pwstatus) {
        if (this.powerStatus === 'off') {
            if (pwstatus === 'on') {
                this.powerStatus = 'on';
                this.status = 'idle';
            }
        } else if (this.powerStatus === 'on') {
            if (pwstatus === 'on') {
                throw new Error('이미 켜져 있습니다!');
            } else if (pwstatus === 'off') {
                this.powerStatus = 'off';
            }
        }
    }
    advanceTimersByTime(waitingTime) {
        setTimeout(() => {this.status = 'sensingDistance'}, waitingTime);
    }
}

class IotServer {}

module.exports = {
    Sensor,
    IotServer,
};

// const sensor = new Sensor('id1');
// sensor.turn('on');
// sensor.advanceTimersByTime(sensor.reportingInterval);
