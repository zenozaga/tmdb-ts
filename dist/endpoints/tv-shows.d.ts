import { BaseEndpoint } from './base';
import { AlternativeTitles, AppendToResponse, AppendToResponseTvKey, ChangeOption, Changes, ContentRatings, Credits, EpisodeGroups, ExternalIds, Images, Keywords, LanguageOption, LatestTvShows, OnTheAir, PageOption, PopularTvShows, Recommendations, RegionOption, Reviews, ScreenedTheatrically, SeasonDetails, SimilarTvShows, TopRatedTvShows, Translations, TvShowChangeValue, TvShowDetails, TvShowsAiringToday, Videos, WatchProviders } from '../types';
export declare class TvShowsEndpoint extends BaseEndpoint {
    protected readonly accessToken: string;
    constructor(accessToken: string);
    details<T extends AppendToResponseTvKey[] | undefined>(id: number, appendToResponse?: T): Promise<AppendToResponse<TvShowDetails, T, "tvShow">>;
    alternativeTitles(id: number): Promise<AlternativeTitles>;
    changes(id: number, options?: ChangeOption): Promise<Changes<TvShowChangeValue>>;
    contentRatings(id: number): Promise<ContentRatings>;
    credits(id: number): Promise<Credits>;
    season(tvId: number, seasonNumber: number): Promise<SeasonDetails>;
    episodeGroups(id: number): Promise<EpisodeGroups>;
    externalIds(id: number): Promise<ExternalIds>;
    images(id: number): Promise<Images>;
    keywords(id: number): Promise<Keywords>;
    recommendations(id: number, options?: PageOption): Promise<Recommendations>;
    reviews(id: number, options?: PageOption): Promise<Reviews>;
    screenedTheatrically(id: number): Promise<ScreenedTheatrically>;
    similar(id: number, options?: PageOption): Promise<SimilarTvShows>;
    translations(id: number): Promise<Translations>;
    videos(id: number): Promise<Videos>;
    /**
     * Powered by JustWatch
     * @param id
     */
    watchProviders(id: number): Promise<WatchProviders>;
    latest(): Promise<LatestTvShows>;
    onTheAir(): Promise<OnTheAir>;
    airingToday(options?: PageOption & LanguageOption & RegionOption): Promise<TvShowsAiringToday>;
    popular(options?: PageOption & LanguageOption & RegionOption): Promise<PopularTvShows>;
    topRated(options?: PageOption & LanguageOption & RegionOption): Promise<TopRatedTvShows>;
}
