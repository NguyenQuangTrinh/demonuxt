<template>
  <layout-action @back="onBack" :span-left="8">
  </layout-action>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, useRouter } from '@nuxtjs/composition-api'
import LayoutAction from "~/components/base/layout-action.vue";
import AppTable from "~/components/base/table/app-table.vue";

interface State {
  data: object[],
  fields: any[],
}

export default defineComponent({
  components: { AppTable, LayoutAction },
  props: {},
  setup() {
    const router = useRouter()
    const onBack = () => router.back()
    const state = reactive<State>({
      data: [],
      fields: [],
    })

    return {
      onBack,
      ...toRefs(state),
    }
  }
})

</script>