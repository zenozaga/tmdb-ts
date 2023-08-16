"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Instances {
    static get(key) {
        return this.storage.get(key);
    }
    static put(key, value) {
        this.storage.set(key, value);
    }
}
Instances.storage = new Map();
exports.default = Instances;
