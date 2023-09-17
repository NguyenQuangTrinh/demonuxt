<template>
  <el-radio-group
      class="w-100 wrapper-radio-check-input"
      @input="onInput"
      :value="value"
      :disabled="disabled"
  >
    <div class="w-100">
      <el-radio
          v-for="(item, index) in options"
          :label="item.value"
          :value="item.value"
          :key="index"
          class="w-100 px-2 py-1"
      >
        <div class="d-flex justify-content-between align-items-center w-100">
          <p class="m-0">{{ $t(item.label) }}</p>
          <i class="el-icon-check is-checked" v-if="item.value === value"/>
        </div>
      </el-radio>
    </div>
  </el-radio-group>
</template>

<script lang="ts">
import {defineComponent, PropType} from '@nuxtjs/composition-api'
import DefaultValueConst from "~/constant/defaultValue";
import EmitterConst from "~/constant/emitter";

export default defineComponent({
  props: {
    options: {
      type: Array as PropType<SelectOption[]>,
      default: DefaultValueConst.ARRAY
    },

    value: {
      type: [Array, String, Number, Object] as PropType<any>,
      default: DefaultValueConst.STRING
    },

    disabled: {
      type: Boolean as PropType<boolean>,
      default: DefaultValueConst.BOOLEAN
    }
  },
  setup(props, {emit}) {
    return {
      onInput: (value: any) => emit(EmitterConst.INPUT, value)
    }
  }
})

</script>

<style lang="scss">
.wrapper-radio-check-input {
  .el-radio__input {
    display: none;
  }

  .el-radio__label {
    width: 100%;
  }
}
</style>