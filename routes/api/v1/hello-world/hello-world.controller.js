"use strict";

module.exports = {
    showHelloWorld: {
        handler: (request, h) => {
            const message = "Hello World";
            return h.response(message).header("x-custom", "12345").code(200);
        }
    }
};
