import { BaseEndpoint } from './base';
import { MultiSearchResult, Search } from '../types/search';
import { Collection, Company, Movie, Person, TV } from '../types';
export interface SearchOptions {
    query: string;
    page?: number;
}
export interface MovieSearchOptions extends SearchOptions {
    include_adult?: boolean;
    year?: number;
    primary_release_year?: number;
}
export interface TvSearchOptions extends SearchOptions {
    include_adult?: boolean;
    first_air_date_year?: number;
}
export interface PeopleSearchOptions extends SearchOptions {
    include_adult?: boolean;
}
export interface MultiSearchOptions extends SearchOptions {
    include_adult?: boolean;
}
export declare class SearchEndpoint extends BaseEndpoint {
    protected readonly accessToken: string;
    constructor(accessToken: string);
    companies(options: SearchOptions): Promise<Search<Company>>;
    collections(options: SearchOptions): Promise<Search<Collection>>;
    keywords(options: SearchOptions): Promise<Search<{
        id: string;
        name: string;
    }>>;
    movies(options: MovieSearchOptions): Promise<Search<Movie>>;
    people(options: PeopleSearchOptions): Promise<Search<Person>>;
    tvShows(options: TvSearchOptions): Promise<Search<TV>>;
    multi(options: MultiSearchOptions): Promise<Search<MultiSearchResult>>;
}
