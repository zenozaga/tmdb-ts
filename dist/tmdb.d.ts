import { AccountEndpoint, CertificationEndpoint, ChangeEndpoint, CreditsEndpoint, GenreEndpoint, MoviesEndpoint, SearchEndpoint, TvShowsEndpoint, ConfigurationEndpoint, DiscoverEndpoint, PeopleEndpoint, ReviewEndpoint, TrendingEndpoint, FindEndpoint, KeywordsEndpoint, CollectionsEndpoint, TvSeasonsEndpoint, TvEpisodesEndpoint } from './endpoints';
import { Language } from './types/languages';
export declare class TMDB {
    private readonly accessToken;
    constructor(accessToken: string);
    setLanguage(language: Language): void;
    get language(): string;
    get account(): AccountEndpoint;
    get configuration(): ConfigurationEndpoint;
    get certifications(): CertificationEndpoint;
    get changes(): ChangeEndpoint;
    get credits(): CreditsEndpoint;
    get search(): SearchEndpoint;
    get genres(): GenreEndpoint;
    get movies(): MoviesEndpoint;
    get tvShows(): TvShowsEndpoint;
    get tvEpisode(): TvEpisodesEndpoint;
    get discover(): DiscoverEndpoint;
    get people(): PeopleEndpoint;
    get review(): ReviewEndpoint;
    get trending(): TrendingEndpoint;
    get find(): FindEndpoint;
    get keywords(): KeywordsEndpoint;
    get collections(): CollectionsEndpoint;
    get tvSeasons(): TvSeasonsEndpoint;
}
