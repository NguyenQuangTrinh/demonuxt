<template>
  <div
      :class="$style['wrapper-item-dropdown-profile']"
      class="d-flex align-items-center justify-content-between w-100 p-2"
      @click="actions['onClick']"
      :style="{height}"
  >
    <div class="d-flex justify-content-center align-items-center" style="width:50px">
      <slot name="icon"/>
      <i v-if="icon" :class="icon" style="font-size:20px;   color: #909398;"/>
    </div>
    <div class="pl-2 w-100">
      <slot name="title"/>
      <p class="mb-1" v-if="title">{{ title }}</p>
    </div>
    <i v-if="isArrowButton" class="el-icon-arrow-right"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api'
import EmitterConst from "~/constant/emitter";

export default defineComponent({
  props: {
    isArrowButton: Boolean,
    title: String,
    icon: String,
    height: {
      type: String,
      default: "50px",
    },

  },
  setup(props, {emit}) {
    const actions = {
      'onClick': () => emit(EmitterConst.CLICK)
    }

    return {
      actions,
    }
  }
})

</script>
<style module lang="scss">
.wrapper-item-dropdown-profile {
  cursor: pointer;

  &:hover {
    background-color: whitesmoke;
  }
}
</style>
