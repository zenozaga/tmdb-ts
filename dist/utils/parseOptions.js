"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseOptions = void 0;
function parseOptions(options) {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    return options ? new URLSearchParams(Object.entries(options)).toString() : '';
}
exports.parseOptions = parseOptions;
