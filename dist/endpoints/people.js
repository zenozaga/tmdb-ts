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
exports.PeopleEndpoint = void 0;
const base_1 = require("./base");
const BASE_PERSON = '/person';
class PeopleEndpoint extends base_1.BaseEndpoint {
    constructor(accessToken) {
        super(accessToken);
    }
    details(id, appendToResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                append_to_response: appendToResponse
                    ? appendToResponse.join(',')
                    : undefined,
            };
            return yield this.api.get(`${BASE_PERSON}/${id}`, options);
        });
    }
    changes(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_PERSON}/${id}/changes`, options);
        });
    }
    movieCredits(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_PERSON}/${id}/movie_credits`);
        });
    }
    tvShowCredits(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_PERSON}/${id}/tv_credits`);
        });
    }
    combinedCredits(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_PERSON}/${id}/combined_credits`);
        });
    }
    externalId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_PERSON}/${id}/external_ids`);
        });
    }
    images(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_PERSON}/${id}/images`);
        });
    }
    taggedImages(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_PERSON}/${id}/tagged_images`, options);
        });
    }
    translation(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_PERSON}/${id}/translations`);
        });
    }
    latest() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_PERSON}/latest`);
        });
    }
    popular(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_PERSON}/popular`, options);
        });
    }
}
exports.PeopleEndpoint = PeopleEndpoint;
