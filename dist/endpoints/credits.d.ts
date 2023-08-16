import { BaseEndpoint } from './base';
import { CreditResponse } from '../types/credits';
export declare class CreditsEndpoint extends BaseEndpoint {
    protected readonly accessToken: string;
    constructor(accessToken: string);
    getById(id: string): Promise<CreditResponse>;
}
