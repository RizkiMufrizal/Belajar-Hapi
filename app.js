"use strict";

const Hapi = require("@hapi/hapi");

require("dotenv").config();

const routes = require("./routes");

const init = async () => {
    const server = Hapi.Server({
        port: process.env.PORT,
        routes: {
            cors: true
        }
    });

    await server.register(
        [routes],
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
    console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(1);
});

init();
