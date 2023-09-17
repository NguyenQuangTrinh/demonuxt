<template>
    <el-table-column

    />
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

export default defineComponent({
    props: {
        item: {
            type: Object as PropType<FieldTable>,
            default: () => { }
        }
    },
    setup() {
        return {

        }
    }
})
</script>