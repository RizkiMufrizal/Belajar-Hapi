"use strict";

const Joi = require("joi");

module.exports = {
    showHelloWorld: {
        handler: (request, h) => {
            const message = "Hello World";
            return h.response(message).header("x-custom", "12345").code(200);
        }
    },
    postMessage: {
        handler: (request, h) => {
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
