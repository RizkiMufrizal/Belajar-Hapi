"use strict";

const Hapi = require("@hapi/hapi");
const Sequelize = require("sequelize");

require("dotenv").config();

const { logger } = require("./config/logger");
const routes = require("./routes");

const init = async () => {
    const server = Hapi.Server({
        port: process.env.PORT,
        routes: {
            cors: true
        }
    });

    await server.register(
        [
            {
                plugin: require("hapi-sequelizejs"),
                options: [
                    {
                        name: "Belajar",
                        models: [__dirname + "/models/**/*.js"],
                        sequelize: new Sequelize(
                            process.env.DB_NAME,
                            process.env.DB_USERNAME,
                            process.env.DB_PASSWORD,
                            {
                                logging: false,
                                host: process.env.DB_HOSTNAME,
                                port: process.env.DB_PORT,
                                dialect: "postgres"
                            }
                        ),
                        sync: true,
                        forceSync: false
                    }
                ]
            },
            routes
        ],
        {
            routes: {
                prefix: process.env.ROUTE_PREFIX
            }
        },
        (err) => {
            if (err) throw err;
        }
    );

    await server.start();
    logger.info("Server running on %s", server.info.uri);

    return server;
};

process.on("unhandledRejection", (err) => {
    logger.error(err);
    process.exit(1);
});

exports.init = init;
