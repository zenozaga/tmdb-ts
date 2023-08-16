import { TrendingMediaType, TimeWindow, TrendingResults } from '../types';
import { BaseEndpoint } from './base';
export declare class TrendingEndpoint extends BaseEndpoint {
    constructor(accessToken: string);
    trending<T extends TrendingMediaType>(mediaType: T, timeWindow: TimeWindow): Promise<TrendingResults<T>>;
}
