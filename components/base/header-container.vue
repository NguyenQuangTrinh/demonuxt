<template>
  <div class="d-flex justify-content-between align-items-center">
    <h6 class="flex-grow-1 w-100 mb-0 text-secondary">
      {{ title }}
    </h6>
    <div class="d-flex justify-content-end align-items-center w-100">
      <el-input
          :class="['mr-2', $style.inputHeaderContainer]"
          :placeholder="placeholder"
          :value="value"
          @input="onInput"
          prefix-icon="el-icon-search"
      />
      <el-button
          @click="onAddNew"
          :icon="iconButton"
          v-if="isShowAdd"
          type="primary"
      >
        {{ titleButton }}
      </el-button>
      <slot name="append"/>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api'
import EmitterConst from '~/constant/emitter';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    isShowAdd: {
      type: Boolean,
      default: false,
    },
    iconButton: {
      type: String,
      default: "el-icon-plus"
    },
    titleButton: {
      type: String,
      default: '',
    }
  },
  setup(props, {emit}) {
    const onInput = (newValue: string) => emit(EmitterConst.INPUT, newValue)
    const onAddNew = () => emit(EmitterConst.ADD_NEW)
    return {
      onInput,
      onAddNew,
    }
  }
})
</script>
<style module lang="scss">
.inputHeaderContainer {
  max-width: 300px;
  width: 100%;
}
</style>
