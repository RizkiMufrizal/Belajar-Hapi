"use strict";

const { getUuid } = require("./httpbin.controller");
const baseUrl = "/v1";

module.exports = (server) => {
    server.route({
        method: "GET",
        path: baseUrl + "/httpbin",
        config: getUuid
    });
};
