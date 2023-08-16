"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscoverEndpoint = void 0;
const base_1 = require("./base");
const BASE_DISCOVER = '/discover';
class DiscoverEndpoint extends base_1.BaseEndpoint {
    constructor(accessToken) {
        super(accessToken);
    }
    movie(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_DISCOVER}/movie`, options);
        });
    }
    tvShow(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_DISCOVER}/tv`, options);
        });
    }
}
exports.DiscoverEndpoint = DiscoverEndpoint;
