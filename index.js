const AppVersion = require("./version");
const { DuaGram, terminal, lessLog } = require("./core/duagram");
const Helper = require('./utils');

class duaGram extends DuaGram {
    constructor(options) {
        super(options);
        this.Helper = Helper;
    }

    get version() {
        return AppVersion;
    }
}

module.exports = {
    duaGram, terminal, lessLog, Helper
};