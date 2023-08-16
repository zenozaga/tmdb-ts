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
exports.TvShowsEndpoint = void 0;
const base_1 = require("./base");
const BASE_TV = '/tv';
class TvShowsEndpoint extends base_1.BaseEndpoint {
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
            return yield this.api.get(`${BASE_TV}/${id}`, options);
        });
    }
    alternativeTitles(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_TV}/${id}/alternative_titles`);
        });
    }
    changes(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_TV}/${id}/changes`, options);
        });
    }
    contentRatings(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_TV}/${id}/content_ratings`);
        });
    }
    credits(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_TV}/${id}/credits`);
        });
    }
    season(tvId, seasonNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_TV}/${tvId}/season/${seasonNumber}`);
        });
    }
    episodeGroups(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_TV}/${id}/episode_groups`);
        });
    }
    externalIds(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_TV}/${id}/external_ids`);
        });
    }
    images(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_TV}/${id}/images`);
        });
    }
    keywords(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_TV}/${id}/keywords`);
        });
    }
    recommendations(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_TV}/${id}/recommendations`, options);
        });
    }
    reviews(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_TV}/${id}/reviews`, options);
        });
    }
    screenedTheatrically(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_TV}/${id}/screened_theatrically`);
        });
    }
    similar(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_TV}/${id}/similar`, options);
        });
    }
    translations(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_TV}/${id}/translations`);
        });
    }
    videos(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_TV}/${id}/videos`);
        });
    }
    /**
     * Powered by JustWatch
     * @param id
     */
    watchProviders(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_TV}/${id}/watch/providers`);
        });
    }
    latest() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_TV}/latest`);
        });
    }
    onTheAir() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_TV}/on_the_air`);
        });
    }
    airingToday(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_TV}/airing_today`, options);
        });
    }
    popular(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_TV}/popular`, options);
        });
    }
    topRated(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_TV}/top_rated`, options);
        });
    }
}
exports.TvShowsEndpoint = TvShowsEndpoint;
