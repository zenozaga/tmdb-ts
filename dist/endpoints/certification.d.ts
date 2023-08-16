import { BaseEndpoint } from './base';
import { Certifications } from '../types/certification';
export declare class CertificationEndpoint extends BaseEndpoint {
    protected readonly accessToken: string;
    constructor(accessToken: string);
    movies(): Promise<Certifications>;
    tvShows(): Promise<Certifications>;
}
