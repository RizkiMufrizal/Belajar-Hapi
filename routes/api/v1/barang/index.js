"use strict";

const { simpanBarang } = require("./barang.controller");

const baseUrl = "/v1";

module.exports = (server) => {
    server.route({
        method: "POST",
        path: baseUrl + "/barang",
        config: simpanBarang
    });
};
