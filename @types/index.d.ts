import { NuxtAxiosInstance } from "@nuxtjs/axios";
import { Store } from "vuex";
import { NuxtCookies } from "cookie-universal-nuxt";
import { I18nState } from "~/store/modules/i18n";
import { InitAppState } from "~/store/modules/initApp";
import { ThemeState } from "~/store/modules/theme";
import { OneDataResponse } from "./responseAPI";

declare module 'vue/types/vue' {
    interface Vue {
        $api: NuxtAxiosInstance
        $cookies: NuxtCookies
    }
}

declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $api: NuxtAxiosInstance
        $cookies: NuxtCookies
    }

    interface Context {
        $api: NuxtAxiosInstance
        $cookies: NuxtCookies
    }
}

declare global {
    var $api: NuxtAxiosInstance;
    var $store: Store<RootState>
    interface RootState {
        i18n: I18nState
        initApp: InitAppState
        theme: ThemeState
    }
    interface SelectOption {
        value: any,
        label: string,
        children?: SelectOption[]
    }
    interface Breadcrumb {
        path: string,
        namePage: string,
    }
    interface ApiInstance<T> {
        findAll: (params?: any) => Promise<OneDataResponse<T[]>>
        findOne: (id: string) => Promise<OneDataResponse<T>>
        create: (body: any) => Promise<OneDataResponse<any>>
        delete: (id: string) => Promise<OneDataResponse<any>>
        update: (id: string, body: any) => Promise<OneDataResponse<any>>
    }
}

