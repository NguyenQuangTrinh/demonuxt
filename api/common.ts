import axios from "axios";
import { OneDataResponse } from "~/@types/responseAPI";
import MessageConst from "~/constant/message";
import { Message } from 'element-ui';


export const errorHandle = (error: unknown) => {
    if (axios.isAxiosError(error)) {
        const errorResponse = error.response?.data as OneDataResponse<any>
        Message.error(errorResponse.message)
    } else {
        // @ts-ignore
        Message.error(error?.message ?? MessageConst.INTERNAL_ERROR)
        console.log(error)
    }
}
