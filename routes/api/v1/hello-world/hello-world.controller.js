"use strict";

const Joi = require("joi");
const appRoot = require("app-root-path");
const { logger } = require(appRoot + "/config/logger");

module.exports = {
    showHelloWorld: {
        handler: async (request, h) => {
            const message = "Hello World";
            logger.info(message);
            return h.response(message).header("x-custom", "12345").code(200);
        }
    },
    postMessage: {
        handler: async (request, h) => {
            const message = {
                Success: true,
                Message: request.payload
            };

            return h.response(message).code(200);
        },
        validate: {
            payload: Joi.object({
                name: Joi.string().required()
            }),
            failAction: (request, h, err) => {
                return err;
            }
        }
    }
};
