const request = require("supertest");
const axios = require("axios");
const appRoot = require("app-root-path");
const { logger } = require(appRoot + "/config/logger");
const { init } = require("../server");

jest.mock("axios");

let server;

beforeAll(async () => {
    server = await init();
});

afterAll(async () => {
    await server.stop();
});

describe("GET /api/v1/httpbin", () => {
    it("return httpbin response and code 200", async () => {
        const responseHttpBin = {
            data: {
                uuid: "87de87d8-5089-4a53-a2d7-2dab62f1a5e4"
            }
        };

        axios.get.mockResolvedValue(responseHttpBin);

        await request(server.listener)
            .get("/api/v1/httpbin")
            .expect("Content-Type", /json/)
            .expect(200)
            .then((response) => {
                expect(response.body.uuid).toEqual(
                    "87de87d8-5089-4a53-a2d7-2dab62f1a5e4"
                );
            })
            .catch((err) => logger.error(err));
    });
});
