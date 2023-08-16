import { ChangeOption, Changes, Credits, ExternalIds, Images, LanguageOption, TvSeasonChangeValue, SeasonDetails, SeasonSelection, Translations, Videos, AppendToResponseTvSeasonKey, AppendToResponse } from '..';
import { BaseEndpoint } from './base';
export declare class TvSeasonsEndpoint extends BaseEndpoint {
    constructor(accessToken: string);
    details<T extends AppendToResponseTvSeasonKey[] | undefined>(seasonSelection: SeasonSelection, appendToResponse?: T, options?: LanguageOption): Promise<AppendToResponse<SeasonDetails, T, "tvSeason">>;
    aggregateCredits(seasonSelection: SeasonSelection, options?: LanguageOption): Promise<Credits>;
    changes(seasonId: number, options?: ChangeOption): Promise<Changes<TvSeasonChangeValue>>;
    credits(seasonSelection: SeasonSelection, options?: LanguageOption): Promise<Credits>;
    externalIds(seasonSelection: SeasonSelection, options?: LanguageOption): Promise<ExternalIds>;
    images(seasonSelection: SeasonSelection, options?: LanguageOption): Promise<Images>;
    videos(seasonSelection: SeasonSelection, options?: LanguageOption): Promise<Videos>;
    translations(seasonSelection: SeasonSelection, options?: LanguageOption): Promise<Translations>;
}
