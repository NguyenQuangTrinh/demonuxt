/**
 * @author NghiemLe <nghiemlehong98@gmail.com>
 */

import {defineComponent, PropType} from '@nuxtjs/composition-api'
import EmitterConst from "~/constant/emitter";

type ValueInput = string | string[] | object | object[] | null

type AutoSize = {
    minRows: number,
    maxRows: number
} | boolean

export default defineComponent({
    props: {
        required: Boolean,
        label: String,
        size: String,
        error: String,
        value: [String, Array, Object, Number],
        type: String,
        placeholder: String,
        autosize: [Object, Boolean] as PropType<AutoSize>,
        disabled: Boolean,
        rows: Number
    },
    setup(props, {emit}) {
        const onInput = (value: ValueInput) => emit(EmitterConst.INPUT, value)
        const onBlur = () => emit(EmitterConst.BLUR)
        const onChange = (value: ValueInput) => emit(EmitterConst.CHANGE, value)
        return {
            onInput,
            onBlur,
            onChange,
        }
    }
})