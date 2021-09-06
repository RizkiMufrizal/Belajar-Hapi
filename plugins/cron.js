var cron = require("node-cron");
const appRoot = require("app-root-path");

const { logger } = require(appRoot + "/config/logger");

exports.plugin = {
    name: "cron-plugin",
    version: "1.0.0",
    register: async (server, options, next) => {
        cron.schedule("* * * * *", () => {
            logger.info("running a task every minute");
        });
    }
};
