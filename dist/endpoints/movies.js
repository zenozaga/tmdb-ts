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
exports.MoviesEndpoint = void 0;
const base_1 = require("./base");
const BASE_MOVIE = '/movie';
class MoviesEndpoint extends base_1.BaseEndpoint {
    constructor(accessToken) {
        super(accessToken);
        this.accessToken = accessToken;
    }
    details(id, appendToResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                append_to_response: appendToResponse
                    ? appendToResponse.join(',')
                    : undefined,
            };
            return yield this.api.get(`${BASE_MOVIE}/${id}`, options);
        });
    }
    alternativeTitles(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_MOVIE}/${id}/alternative_titles`);
        });
    }
    changes(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_MOVIE}/${id}/changes`, options);
        });
    }
    credits(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_MOVIE}/${id}/credits`);
        });
    }
    externalIds(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_MOVIE}/${id}/external_ids`);
        });
    }
    images(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_MOVIE}/${id}/images`);
        });
    }
    keywords(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_MOVIE}/${id}/keywords`);
        });
    }
    lists(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_MOVIE}/${id}/lists`, options);
        });
    }
    recommendations(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_MOVIE}/${id}/recommendations`, options);
        });
    }
    releaseDates(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_MOVIE}/${id}/release_dates`);
        });
    }
    reviews(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_MOVIE}/${id}/reviews`, options);
        });
    }
    similar(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_MOVIE}/${id}/similar`, options);
        });
    }
    translations(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_MOVIE}/${id}/translations`);
        });
    }
    videos(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_MOVIE}/${id}/videos`);
        });
    }
    /**
     * Powered by JustWatch
     * @param id
     */
    watchProviders(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_MOVIE}/${id}/watch/providers`);
        });
    }
    latest() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_MOVIE}/latest`);
        });
    }
    nowPlaying(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_MOVIE}/now_playing`, options);
        });
    }
    popular(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_MOVIE}/popular`, options);
        });
    }
    topRated(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_MOVIE}/top_rated`, options);
        });
    }
    upcoming(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_MOVIE}/upcoming`, options);
        });
    }
}
exports.MoviesEndpoint = MoviesEndpoint;
