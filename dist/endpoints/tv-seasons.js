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
exports.TvSeasonsEndpoint = void 0;
const base_1 = require("./base");
const BASE_SEASON = (seasonSelection) => {
    return `/tv/${seasonSelection.tvShowID}/season/${seasonSelection.seasonNumber}`;
};
class TvSeasonsEndpoint extends base_1.BaseEndpoint {
    constructor(accessToken) {
        super(accessToken);
    }
    details(seasonSelection, appendToResponse, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const combinedOptions = Object.assign({ append_to_response: appendToResponse
                    ? appendToResponse.join(',')
                    : undefined }, options);
            return yield this.api.get(`${BASE_SEASON(seasonSelection)}`, combinedOptions);
        });
    }
    aggregateCredits(seasonSelection, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_SEASON(seasonSelection)}/aggregate_credits`, options);
        });
    }
    changes(seasonId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`/tv/season/${seasonId}/changes`, options);
        });
    }
    credits(seasonSelection, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_SEASON(seasonSelection)}/credits`, options);
        });
    }
    externalIds(seasonSelection, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_SEASON(seasonSelection)}/external_ids`, options);
        });
    }
    images(seasonSelection, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_SEASON(seasonSelection)}/images`, options);
        });
    }
    videos(seasonSelection, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_SEASON(seasonSelection)}/videos`, options);
        });
    }
    translations(seasonSelection, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_SEASON(seasonSelection)}/translations`, options);
        });
    }
}
exports.TvSeasonsEndpoint = TvSeasonsEndpoint;
