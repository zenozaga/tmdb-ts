export declare class Api {
    private accessToken;
    constructor(accessToken: string);
    get<T>(path: string, options?: Record<string, any>): Promise<T>;
}
