import { Context } from "@nuxt/types";
import DefaultValueConst from "~/constant/defaultValue";

const cookieparser = process.server ? require('cookieparser') : undefined

class CookieService {
    private _keyName: string
    private _context: Context

    constructor(keyName: string, context: Context) {
        this._keyName = keyName
        this._context = context
    }

    public getOrCreateConfig(
        keyName: string,
        defaultData: string = DefaultValueConst.STRING
    ) {
        const cookie = cookieparser.parse(this._context?.req?.headers?.cookie ?? DefaultValueConst.STRING)
        if (cookie[keyName]) return JSON.parse(cookie[keyName])
        return defaultData
    }


    public get() {

    }

    public save() {

    }

    public update() {

    }

    public getOrCreate() {

    }
}
export default CookieService