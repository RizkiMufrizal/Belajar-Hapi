"use strict";

const Joi = require("joi");
const axios = require("axios");
const appRoot = require("app-root-path");
const { logger } = require(appRoot + "/config/logger");

module.exports = {
    getUuid: {
        handler: async (request, h) => {
            const responseAxios = await axios
                .get("https://httpbin.org/uuid")
                .then(function (response) {
                    logger.info(response.data);
                    return response.data;
                })
                .catch(function (error) {
                    logger.error(error);
                });

            return h
                .response(responseAxios)
                .header("x-custom", "12345")
                .code(200);
        }
    }
};
