"use strict";

const Joi = require("joi");

module.exports = {
    simpanBarang: {
        handler: async (request, h) => {
            const barang = await request.getModel("Belajar", "Barang").create({
                namaBarang: request.payload.NamaBarang
            });

            const message = {
                Success: true,
                Message: barang
            };

            return h.response(message).code(201);
        },
        validate: {
            payload: Joi.object({
                NamaBarang: Joi.string().required()
            }),
            failAction: (request, h, err) => {
                return err;
            }
        }
    }
};
