import BaseService from "~/services/base";
import { Store } from "vuex";
import { Context } from "@nuxt/types";
import CacheKeyConst from "~/constant/cacheKey";
import ThemeConst from "~/constant/theme";
import { MutationTypes } from "~/store/modules/theme";
import DefaultValueConst from "~/constant/defaultValue";
const cookieparser = process.server ? require('cookieparser') : undefined
import Cookies from "js-cookie";

class InitSetupBuilder extends BaseService {

    private _store: Store<RootState>
    private _context: Context

    constructor(store: Store<RootState>, context: Context) {
        super()
        this._store = store
        this._context = context
    }


    public getOrCreateConfig(
        keyName: string,
        defaultData: string = DefaultValueConst.STRING
    ) {
        const cookie = cookieparser.parse(this._context?.req?.headers?.cookie ?? DefaultValueConst.STRING)
        if (!cookie[keyName]) {
            this._context.$cookies.set(CacheKeyConst.THEME, defaultData)
            return defaultData
        }
        return cookie[keyName]
    }


    public prepareAccessToken() {
        return this
    }

    public prepareThemeBackground() {
        const themeCache = this.getOrCreateConfig(
            CacheKeyConst.THEME,
            ThemeConst.LIGHT
        )
        this._store.commit(MutationTypes.CHANGE_THEME, themeCache)
        return this
    }

    public logDataConfig() {
    }
}

export default InitSetupBuilder