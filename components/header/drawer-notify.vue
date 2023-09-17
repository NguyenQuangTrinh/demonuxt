<template>
  <el-drawer
      title="Notification"
      :visible="visible"
      direction="rtl"
      @close="actions['onCloseDrawer']"
      :z-index="ComponentConst.Z_INDEX"
      class="notify-drawer"
  >
    <el-empty/>
  </el-drawer>
</template>
<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api'
import EmitterConst from "~/constant/emitter";

export default defineComponent({
  props: {
    visible: Boolean,
  },
  setup(props, {emit}) {
    const ComponentConst = Object.freeze({
      DIRECTION: 'rtl',
      Z_INDEX: '3',
    })
    const actions = {
      'onCloseDrawer': () => emit(EmitterConst.CLOSE)
    }
    return {
      ComponentConst,
      actions,
    }
  }
})
</script>
<style lang="scss" scoped>
.notify-drawer {
  position: fixed;
  overflow: hidden;
}
</style>
