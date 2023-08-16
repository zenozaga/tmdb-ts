"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEndpoint = void 0;
const api_1 = require("../api");
class BaseEndpoint {
    constructor(accessToken) {
        this.accessToken = accessToken;
        this.api = new api_1.Api(accessToken);
    }
}
exports.BaseEndpoint = BaseEndpoint;
