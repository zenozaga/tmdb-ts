import { Episode, EpisodeSelection, LanguageOption, ChangeOption, TvEpisodeCredit, ExternalIds, Images, TvEpisodeTranslations, Videos, AppendToResponse, Changes, AppendToResponseTvEpisodeKey } from '..';
import { BaseEndpoint } from './base';
export declare class TvEpisodesEndpoint extends BaseEndpoint {
    constructor(accessToken: string);
    details<T extends AppendToResponseTvEpisodeKey[] | undefined>(episodeSelection: EpisodeSelection, appendToResponse?: T, options?: LanguageOption): Promise<AppendToResponse<Omit<Episode, "show_id">, T, "tvEpisode">>;
    changes(episodeID: number, options?: ChangeOption): Promise<Changes<unknown>>;
    credits(episodeSelection: EpisodeSelection, options?: LanguageOption): Promise<TvEpisodeCredit>;
    externalIds(episodeSelection: EpisodeSelection): Promise<ExternalIds>;
    images(episodeSelection: EpisodeSelection): Promise<Images>;
    translations(episodeSelection: EpisodeSelection): Promise<TvEpisodeTranslations>;
    videos(episodeSelection: EpisodeSelection, options?: LanguageOption): Promise<Videos>;
}
