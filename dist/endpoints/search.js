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
exports.SearchEndpoint = void 0;
const base_1 = require("./base");
const BASE_SEARCH = '/search';
class SearchEndpoint extends base_1.BaseEndpoint {
    constructor(accessToken) {
        super(accessToken);
        this.accessToken = accessToken;
    }
    companies(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_SEARCH}/company`, options);
        });
    }
    collections(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_SEARCH}/collection`, options);
        });
    }
    keywords(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_SEARCH}/keyword`, options);
        });
    }
    movies(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_SEARCH}/movie`, options);
        });
    }
    people(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_SEARCH}/person`, options);
        });
    }
    tvShows(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_SEARCH}/tv`, options);
        });
    }
    multi(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_SEARCH}/multi`, options);
        });
    }
}
exports.SearchEndpoint = SearchEndpoint;
