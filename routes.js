"use strict";

const helloWorldV1 = require("./routes/api/v1/hello-world");
const helloWorldV2 = require("./routes/api/v2/hello-world");

exports.plugin = {
    name: "route-plugin",
    version: "1.0.0",
    register: function (server, options, next) {
        helloWorldV1(server);
        helloWorldV2(server);
    }
};
