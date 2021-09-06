"use strict";

const appRoot = require("app-root-path");

const helloWorldRouteV1 = require(appRoot + "/routes/api/v1/hello-world");
const helloWorldRouteV2 = require(appRoot + "/routes/api/v2/hello-world");
const barangRouteV1 = require(appRoot + "/routes/api/v1/barang");
const httpbinRouteV1 = require(appRoot + "/routes/api/v1/httpbin");

exports.plugin = {
    name: "route-plugin",
    version: "1.0.0",
    register: async (server, options, next) => {
        helloWorldRouteV1(server);
        helloWorldRouteV2(server);
        barangRouteV1(server);
        httpbinRouteV1(server);
    }
};
