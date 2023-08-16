import { BaseEndpoint } from './base';
import { AlternativeTitles, AppendToResponse, AppendToResponseMovieKey, ChangeOption, Changes, Credits, ExternalIds, Images, Keywords, LanguageOption, LatestMovie, MovieChangeValue, MovieDetails, MovieLists, MoviesPlayingNow, PageOption, PopularMovies, Recommendations, RegionOption, ReleaseDates, Reviews, SimilarMovies, TopRatedMovies, Translations, UpcomingMovies, Videos, WatchProviders } from '../types';
export declare class MoviesEndpoint extends BaseEndpoint {
    protected readonly accessToken: string;
    constructor(accessToken: string);
    details<T extends AppendToResponseMovieKey[] | undefined>(id: number, appendToResponse?: T): Promise<AppendToResponse<MovieDetails, T, "movie">>;
    alternativeTitles(id: number): Promise<AlternativeTitles>;
    changes(id: number, options?: ChangeOption): Promise<Changes<MovieChangeValue>>;
    credits(id: number): Promise<Credits>;
    externalIds(id: number): Promise<ExternalIds>;
    images(id: number): Promise<Images>;
    keywords(id: number): Promise<Keywords>;
    lists(id: number, options?: LanguageOption | PageOption): Promise<MovieLists>;
    recommendations(id: number, options?: PageOption): Promise<Recommendations>;
    releaseDates(id: number): Promise<ReleaseDates>;
    reviews(id: number, options?: PageOption): Promise<Reviews>;
    similar(id: number, options?: PageOption): Promise<SimilarMovies>;
    translations(id: number): Promise<Translations>;
    videos(id: number): Promise<Videos>;
    /**
     * Powered by JustWatch
     * @param id
     */
    watchProviders(id: number): Promise<WatchProviders>;
    latest(): Promise<LatestMovie>;
    nowPlaying(options?: PageOption & LanguageOption & RegionOption): Promise<MoviesPlayingNow>;
    popular(options?: PageOption): Promise<PopularMovies>;
    topRated(options?: PageOption & LanguageOption & RegionOption): Promise<TopRatedMovies>;
    upcoming(options?: PageOption & LanguageOption & RegionOption): Promise<UpcomingMovies>;
}
