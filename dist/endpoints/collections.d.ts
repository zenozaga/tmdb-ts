import { DetailedCollection, ImageCollection, LanguageOption, Translations } from '../types';
import { BaseEndpoint } from './base';
export declare class CollectionsEndpoint extends BaseEndpoint {
    protected readonly accessToken: string;
    constructor(accessToken: string);
    details(id: number, options?: LanguageOption): Promise<DetailedCollection>;
    images(id: number, options?: LanguageOption): Promise<ImageCollection>;
    translations(id: number, options?: LanguageOption): Promise<Translations>;
}
