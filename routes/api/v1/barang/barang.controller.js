"use strict";

const Joi = require("joi");
const appRoot = require("app-root-path");
const { cache, isExis } = require(appRoot + "/config/cache");
const { logger } = require(appRoot + "/config/logger");

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
    },
    ambilBarang: {
        handler: async (request, h) => {
            let barangs;
            if (isExis("barang")) {
                barangs = cache.get("barang");
                logger.info("cache is exist");
            } else {
                barangs = await request.getModel("Belajar", "Barang").findAll();
                cache.set("barang", barangs);
                logger.info("cache not exist");
            }

            const message = {
                Success: true,
                Message: barangs
            };

            return h.response(message).code(201);
        }
    }
};
