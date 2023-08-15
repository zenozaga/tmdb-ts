class Instances {

    private static storage = new Map<string, any>();
    
    static get<T>(key:string) : T | undefined  {
        return this.storage.get(key);
    }


    static put(key:string, value:any) {
        this.storage.set(key, value);
    }
    
}


export default Instances;