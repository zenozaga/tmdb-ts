import { BaseEndpoint } from './base';
export interface Genres {
    genres: Array<{
        id: number;
        name: string;
    }>;
}
export declare class GenreEndpoint extends BaseEndpoint {
    protected readonly accessToken: string;
    constructor(accessToken: string);
    movies(): Promise<Genres>;
    tvShows(): Promise<Genres>;
}
