"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const utils_1 = require("./utils");
const instances_1 = __importDefault(require("./instances"));
const languages_1 = require("./types/languages");
const BASE_URL_V3 = 'https://api.themoviedb.org/3';
class Api {
    constructor(accessToken) {
        this.accessToken = accessToken;
        this.accessToken = accessToken;
    }
    get(path, options) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            /// get store language
            const language = (_a = instances_1.default.get("language")) !== null && _a !== void 0 ? _a : languages_1.Language.ENGLISH;
            const opts = Object.assign({ language }, (options !== null && options !== void 0 ? options : {}));
            const params = (0, utils_1.parseOptions)(opts);
            const response = yield (0, cross_fetch_1.default)(`${BASE_URL_V3}${path}?${params}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${this.accessToken}`,
                    'Content-Type': 'application/json;charset=utf-8',
                },
            });
            return (yield response.json());
        });
    }
}
exports.Api = Api;
