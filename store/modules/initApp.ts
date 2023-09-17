import {Store} from "vuex";
import {Context} from "@nuxt/types"
import InitSetupBuilder from "~/services/initSetupBuilder";

export interface InitAppState {
}

export enum ActionTypes {
    NUXT_SERVER_INIT = 'nuxtServerInit'
}

const actions = {
    [ActionTypes.NUXT_SERVER_INIT](store: Store<RootState>, context: Context) {
        new InitSetupBuilder(store, context)
            .prepareAccessToken()
            .prepareThemeBackground()
            .logDataConfig()
    },
}

export default {
    actions
};