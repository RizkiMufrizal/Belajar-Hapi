"use strict";

const { showHelloWorld, postMessage } = require("./hello-world.controller");
const baseUrl = "/v1";

module.exports = (server) => {
    server.route({
        method: "GET",
        path: baseUrl + "/hello",
        config: showHelloWorld
    });

    server.route({
        method: "POST",
        path: baseUrl + "/hello",
        config: postMessage
    });
};
