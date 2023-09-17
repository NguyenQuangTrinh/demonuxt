import {getCurrentInstance} from "@nuxtjs/composition-api";

const useTranslate = () => {
    const instance = getCurrentInstance()

    const getText = (key: string): string => instance?.proxy.$i18n.tc(key) as string ?? ""
    return getText
}

export default useTranslate
