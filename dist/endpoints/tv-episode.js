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
exports.TvEpisodesEndpoint = void 0;
const base_1 = require("./base");
const BASE_EPISODE = (episodeSelection) => {
    return `/tv/${episodeSelection.tvShowID}/season/${episodeSelection.seasonNumber}/episode/${episodeSelection.episodeNumber}`;
};
class TvEpisodesEndpoint extends base_1.BaseEndpoint {
    constructor(accessToken) {
        super(accessToken);
    }
    details(episodeSelection, appendToResponse, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const combinedOptions = Object.assign({ append_to_response: appendToResponse
                    ? appendToResponse.join(',')
                    : undefined }, options);
            return yield this.api.get(`${BASE_EPISODE(episodeSelection)}`, combinedOptions);
        });
    }
    changes(episodeID, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`/tv/episode/${episodeID}/changes`, options);
        });
    }
    credits(episodeSelection, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_EPISODE(episodeSelection)}/credits`, options);
        });
    }
    externalIds(episodeSelection) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_EPISODE(episodeSelection)}/external_ids`);
        });
    }
    images(episodeSelection) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_EPISODE(episodeSelection)}/images`);
        });
    }
    translations(episodeSelection) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_EPISODE(episodeSelection)}/translations`);
        });
    }
    videos(episodeSelection, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.get(`${BASE_EPISODE(episodeSelection)}/videos`, options);
        });
    }
}
exports.TvEpisodesEndpoint = TvEpisodesEndpoint;
