import { BaseEndpoint } from './base';
import { Configuration } from '../types/configuration';
export declare class ConfigurationEndpoint extends BaseEndpoint {
    protected readonly accessToken: string;
    constructor(accessToken: string);
    getCurrent(): Promise<Configuration>;
}
