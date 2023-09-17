/**
 * @author NghiemLe <nghiemlehong98@gmail.com>
 */

import { ActionTree, MutationTree } from 'vuex'
import CacheKeyConst from "~/constant/cacheKey";
import ThemeConst from '~/constant/theme';
import Cookies from 'js-cookie';


export interface ThemeState {
    currentTheme: string,
    themes: SelectOption[]
}

export const state: ThemeState = {
    currentTheme: '',
    themes: [
        {
            label: ThemeConst.LIGHT,
            value: ThemeConst.LIGHT
        },
        {
            label: ThemeConst.DARK,
            value: ThemeConst.DARK
        }
    ]
}

export enum MutationTypes {
    CHANGE_THEME = 'changeTheme'
}

export const mutations: MutationTree<ThemeState> = {
    [MutationTypes.CHANGE_THEME](state, payload: string) {
        state.currentTheme = payload
        Cookies.set(CacheKeyConst.THEME, payload)
    },
}

export enum ActionsType {

}

export const actions: ActionTree<ThemeState, RootState> = {}
export default { state, mutations, actions }