/**
 * @author NghiemLe <nghiemlehong98@gmail.com>
 */

import {ActionTree, MutationTree} from 'vuex'
import LanguageConst from "~/constant/language";
import Cookies from "js-cookie";
import CacheKeyConst from "~/constant/cacheKey";
import DefaultValueConst from "~/constant/defaultValue";

export interface I18nState {
    locales: SelectOption[],
    locale: string,
}

export const state: I18nState = {
    locale: LanguageConst.VIETNAMESE,
    locales: [
        {
            label: "Viet Nam",
            value: LanguageConst.VIETNAMESE
        },
        {
            label: "English",
            value: LanguageConst.ENGLISH
        },
    ]
}

export enum MutationTypes {
    CHANGE_LANGUAGE = 'changeLanguage'
}

export const mutations: MutationTree<I18nState> = {
    [MutationTypes.CHANGE_LANGUAGE](state, payload: string) {
        state.locale = payload
        const configApp = JSON.parse(Cookies.get(CacheKeyConst.CONFIG_APP)
            ?? DefaultValueConst.JSON_STRING)
        configApp.locale = payload
        Cookies.set(CacheKeyConst.CONFIG_APP, JSON.stringify(configApp))
    },
}

export enum ActionsType {

}

export const actions: ActionTree<I18nState, RootState> = {}
export default {state, mutations, actions}