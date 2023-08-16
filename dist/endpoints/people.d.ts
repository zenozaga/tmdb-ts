import { AppendToResponse, AppendToResponsePersonKey, ChangeOption, ExternalIds, PageOption, PeopleImages, PersonTranslations, PersonCombinedCredits, PersonDetails, PersonMovieCredit, PersonTvShowCredit, PopularPersons, TaggedImages, Changes, PersonChangeValue } from '../types';
import { BaseEndpoint } from './base';
export declare class PeopleEndpoint extends BaseEndpoint {
    constructor(accessToken: string);
    details<T extends AppendToResponsePersonKey[] | undefined>(id: number, appendToResponse?: T): Promise<AppendToResponse<PersonDetails, T, "person">>;
    changes(id: number, options?: ChangeOption): Promise<Changes<PersonChangeValue>>;
    movieCredits(id: number): Promise<PersonMovieCredit>;
    tvShowCredits(id: number): Promise<PersonTvShowCredit>;
    combinedCredits(id: number): Promise<PersonCombinedCredits>;
    externalId(id: number): Promise<ExternalIds>;
    images(id: number): Promise<PeopleImages>;
    taggedImages(id: number, options?: PageOption): Promise<TaggedImages>;
    translation(id: number): Promise<PersonTranslations>;
    latest(): Promise<PersonDetails>;
    popular(options?: PageOption): Promise<PopularPersons>;
}
