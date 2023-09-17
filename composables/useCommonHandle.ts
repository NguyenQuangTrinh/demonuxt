/**
 * @author NghiemLe <nghiemlehong98@gmail.com>
 */

import { OneDataResponse } from "~/@types/responseAPI";
import { getCurrentInstance, reactive, UnwrapRefSimple } from "@nuxtjs/composition-api";
import { errorHandle } from "~/api/common";
import { Message } from "element-ui"
import MessageConst from "@/constant/message";
import TimeoutConst from "@/constant/timeout";

export interface StateCommon<T> {
    item: T | null,
    items: T[],
    isVisibleAdd: boolean
    isVisibleUpdate: boolean
    isLoading: boolean,
    params: object,
}

const useCommonHandle = <T>(apiInstance: ApiInstance<T>) => {
    const instance = getCurrentInstance()
    const state = reactive<StateCommon<T>>({
        isVisibleAdd: false,
        items: [],
        isVisibleUpdate: false,
        item: null,
        isLoading: false,
        params: {},
    })

    const onFind = async () => {
        state.isLoading = true
        setTimeout(async () => {
            try {
                const result = await apiInstance.findAll({ ...state.params })
                state.items = result.data as UnwrapRefSimple<T[]>
                return state.items
            } catch (e) {
                errorHandle(e)
            } finally {
                state.isLoading = false
            }
        }, TimeoutConst.TIME_LOADING)
    }


    const onSubmitAdd = async (body: any, callback: (result: OneDataResponse<T>) => void) => {
        try {
            const result = await apiInstance.create(body)
            if (result.status) {
                state.isVisibleAdd = false
                callback(result)
                Message.success(MessageConst.SAVE_DATA_SUCCESS)
            }
        } catch (e) {
            errorHandle(e)
        }
    }

    const onSubmitUpdate = async (body: any, callback: (result: OneDataResponse<T>) => void) => {
        try {
            const result = await apiInstance.update(body.id, body)
            if (result.status) {
                state.isVisibleUpdate = false
                callback(result)
                Message.success(MessageConst.UPDATE_DATA_SUCCESS)
            }
        } catch (e) {
            errorHandle(e)
        }
    }

    const onDelete = async (id: string, callback: (result: OneDataResponse<any>) => void) => {
        instance?.proxy.$confirm("Do you want to delete?", 'Delete', {
            title: "Danger",
            iconClass: 'el-icon-warning',
            confirmButtonText: "Yes",
            cancelButtonText: "Cancel"
        })
            .then(async () => {
                try {
                    const result = await apiInstance.delete(id)
                    callback(result)
                    Message.success(MessageConst.DELETE_DATA_SUCCESS)
                } catch (e) {
                    errorHandle(e)
                }
            })
            .catch(() => {
            })
    }


    return {
        state,
        onFind,
        onSubmitAdd,
        onSubmitUpdate,
        onDelete,
    }

}
export default useCommonHandle