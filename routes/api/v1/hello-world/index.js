"use strict";

const { showHelloWorld } = require("./hello-world.controller");
const baseUrl = "/v1";

module.exports = (server) => {
    server.route({
        method: "GET",
        path: baseUrl + "/hello",
        config: showHelloWorld
    });
};
