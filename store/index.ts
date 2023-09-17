/**
 * @author NghiemLe <nghiemlehong98@gmail.com>
 */
// store/index.ts
import Vuex, { StoreOptions } from 'vuex';
import Vue from "vue";
import i18n from './modules/i18n'
import initApp from './modules/initApp'
import theme from './modules/theme'

Vue.use(Vuex)
const storeOption: StoreOptions<RootState> = {
    modules: {
        i18n,
        theme,
        // @ts-ignore
        initApp,
    }
}

const store = () => {
    return new Vuex.Store<RootState>(storeOption)
}

export default store
