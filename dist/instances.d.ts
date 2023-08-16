declare class Instances {
    private static storage;
    static get<T>(key: string): T | undefined;
    static put(key: string, value: any): void;
}
export default Instances;
