"use strict";

const { simpanBarang, ambilBarang } = require("./barang.controller");

const baseUrl = "/v1";

module.exports = (server) => {
    server.route({
        method: "POST",
        path: baseUrl + "/barang",
        config: simpanBarang
    });

    server.route({
        method: "GET",
        path: baseUrl + "/barang",
        config: ambilBarang
    });
};
