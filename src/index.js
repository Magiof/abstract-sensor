class Sensor {
    constructor() {
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
        this.status = 'sensingDistance';
        setTimeout('', waitingTime);
        this.status = 'sensingDistance';
    }
}

class IotServer {}

module.exports = {
    Sensor,
    IotServer,
};
