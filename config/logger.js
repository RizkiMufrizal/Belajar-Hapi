"use strict";

const log4js = require("log4js");
const appRoot = require("app-root-path");

log4js.configure({
    appenders: {
        out: {
            type: "stdout",
            layout: {
                type: "pattern",
                pattern: "%[[%d{yyyy-MM-dd hh:mm:ss}] [%p] -%] %m"
            }
        },
        filelog: {
            type: "dateFile",
            filename: appRoot + "/logs/logs.log",
            pattern: ".yyyy-MM-dd",
            compress: true,
            daysToKeep: 7
        }
    },
    categories: {
        default: { appenders: ["filelog", "out"], level: "info" }
    }
});

module.exports = {
    logger: log4js.getLogger()
};
