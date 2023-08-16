import { BaseEndpoint } from './base';
import { BelongingMovies, Keyword, KeywordsOptions } from '../types';
export declare class KeywordsEndpoint extends BaseEndpoint {
    constructor(accessToken: string);
    details(keywordId: number): Promise<Keyword>;
    belongingMovies(keywordId: number, options?: KeywordsOptions): Promise<BelongingMovies>;
}
