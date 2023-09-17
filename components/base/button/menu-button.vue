<template>
  <el-button
      icon="el-icon-s-fold"
      @click="onClick"
      class="border-0"
  >
    {{$t('menu')}}
  </el-button>
</template>
<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api'
import EmitterConst from "~/constant/emitter";

export default defineComponent({
  setup(props, {emit}) {
    const onClick = () => emit(EmitterConst.CLICK)
    return {
      onClick
    }
  }
})
</script>