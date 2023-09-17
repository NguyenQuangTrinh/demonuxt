import {Plugin} from '@nuxt/types'
import {Message} from "element-ui";


const api: Plugin = (context, inject) => {
    const $api = context.$axios.create({
        timeout: 30000, // 30s
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
        baseURL: process.env.BASE_URL,
    })

    $api.interceptors.response.use(
        (response: any) => response,
        (error: any) => {
            if (error && error.response && error.response.status === 401) {
                Message.error('Bạn không có quyền truy cập')
                if (process.client) {
                }
            }
            return Promise.reject(error);
        }
    );

    $api.onRequest((config) => {
        const accessToken = context.app.$cookies.get('accessToken');
        const deviceId = context.app.$cookies.get('uniqueDeviceId');
        $api.defaults.headers.common['device-id'] = deviceId
        $api.defaults.headers.common['access-token'] = accessToken
    })
    global.$api = $api
    inject('$api', $api)
}

export default api