import { BaseEndpoint } from './base';
import { AccountDetails } from '../types/account';
export declare class AccountEndpoint extends BaseEndpoint {
    constructor(accessToken: string);
    details(): Promise<AccountDetails>;
}
