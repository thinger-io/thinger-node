import { Configuration } from '../configuration.js'

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

export const HTTP_ERROR_RESPONSES = {
    "400": "bad request",
    "401": "unauthorized",
    "403": "forbidden",
    "404": "not found",
    "405": "method not allowed",
    "408": "request timeout",
    "409": "conflict",
    "422": "unprocessable entity",
    "426": "upgrade required",
    "429": "too many requests",
    "500": "internal server error",
    "501": "not implemented",
    "502": "bad gateway",
    "503": "service unavailable",
};

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPIRequestFactory {

    constructor(protected configuration: Configuration) {
    }
};

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    override name: "RequiredError" = "RequiredError";
    constructor(public api: string, public method: string, public field: string) {
        super("Required parameter " + field + " was null or undefined when calling " + api + "." + method + ".");
    }
}
