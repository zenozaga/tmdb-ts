import {
    Episode,
    EpisodeSelection,
    LanguageOption,
    PageOption,
    ChangeOption,
    TvEpisodeChanges,
    TvEpisodeCredit,
    ExternalIds,
    Images,
    TvEpisodeTranslations,
    Videos,
    AppendToResponseMovieKey,
    AppendToResponse,
  } from '..';
  import { BaseEndpoint } from './base';
  
  const BASE_EPISODE = (episodeSelection: EpisodeSelection): string => {
    return `/tv/${episodeSelection.tvShowID}/season/${episodeSelection.seasonNumber}/episode/${episodeSelection.episodeNumber}`;
  };
  
  export class TvEpisodesEndpoint extends BaseEndpoint {
    constructor(accessToken: string) {
      super(accessToken);
    }
  
    async details<T extends AppendToResponseMovieKey[] | undefined>(
      episodeSelection: EpisodeSelection,
      appendToResponse?: T,
      options?: LanguageOption
    ) {
      const combinedOptions = {
        append_to_response: appendToResponse
          ? appendToResponse.join(',')
          : undefined,
        ...options,
      };
  
      return await this.api.get<
        AppendToResponse<Omit<Episode, 'show_id'>, T, 'movie'>
      >(`${BASE_EPISODE(episodeSelection)}`, combinedOptions);
    }
  
    async changes(episodeID: number, options?: PageOption & ChangeOption) {
      return await this.api.get<TvEpisodeChanges>(
        `/tv/episode/${episodeID}/changes`,
        options
      );
    }
  
    async credits(episodeSelection: EpisodeSelection, options?: LanguageOption) {
      return await this.api.get<TvEpisodeCredit>(
        `${BASE_EPISODE(episodeSelection)}/credits`,
        options
      );
    }
  
    async externalIds(episodeSelection: EpisodeSelection) {
      return await this.api.get<ExternalIds>(
        `${BASE_EPISODE(episodeSelection)}/external_ids`
      );
    }
  
    async images(episodeSelection: EpisodeSelection) {
      return await this.api.get<Images>(
        `${BASE_EPISODE(episodeSelection)}/images`
      );
    }
  
    async translations(episodeSelection: EpisodeSelection) {
      return await this.api.get<TvEpisodeTranslations>(
        `${BASE_EPISODE(episodeSelection)}/translations`
      );
    }
  
    async videos(episodeSelection: EpisodeSelection, options?: LanguageOption) {
      return await this.api.get<Videos>(
        `${BASE_EPISODE(episodeSelection)}/videos`,
        options
      );
    }
  }
  