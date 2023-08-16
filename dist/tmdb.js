"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TMDB = void 0;
const endpoints_1 = require("./endpoints");
const instances_1 = __importDefault(require("./instances"));
const languages_1 = require("./types/languages");
class TMDB {
    constructor(accessToken) {
        this.accessToken = accessToken;
    }
    setLanguage(language) {
        instances_1.default.put("language", language);
    }
    get language() {
        var _a;
        return (_a = instances_1.default.get("language")) !== null && _a !== void 0 ? _a : languages_1.Language.ENGLISH;
    }
    get account() {
        return new endpoints_1.AccountEndpoint(this.accessToken);
    }
    get configuration() {
        return new endpoints_1.ConfigurationEndpoint(this.accessToken);
    }
    get certifications() {
        return new endpoints_1.CertificationEndpoint(this.accessToken);
    }
    get changes() {
        return new endpoints_1.ChangeEndpoint(this.accessToken);
    }
    get credits() {
        return new endpoints_1.CreditsEndpoint(this.accessToken);
    }
    get search() {
        return new endpoints_1.SearchEndpoint(this.accessToken);
    }
    get genres() {
        return new endpoints_1.GenreEndpoint(this.accessToken);
    }
    get movies() {
        return new endpoints_1.MoviesEndpoint(this.accessToken);
    }
    get tvShows() {
        return new endpoints_1.TvShowsEndpoint(this.accessToken);
    }
    get tvEpisode() {
        return new endpoints_1.TvEpisodesEndpoint(this.accessToken);
    }
    get discover() {
        return new endpoints_1.DiscoverEndpoint(this.accessToken);
    }
    get people() {
        return new endpoints_1.PeopleEndpoint(this.accessToken);
    }
    get review() {
        return new endpoints_1.ReviewEndpoint(this.accessToken);
    }
    get trending() {
        return new endpoints_1.TrendingEndpoint(this.accessToken);
    }
    get find() {
        return new endpoints_1.FindEndpoint(this.accessToken);
    }
    get keywords() {
        return new endpoints_1.KeywordsEndpoint(this.accessToken);
    }
    get collections() {
        return new endpoints_1.CollectionsEndpoint(this.accessToken);
    }
    get tvSeasons() {
        return new endpoints_1.TvSeasonsEndpoint(this.accessToken);
    }
}
exports.TMDB = TMDB;
