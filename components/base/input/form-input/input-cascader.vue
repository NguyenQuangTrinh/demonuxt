<template>
  <el-form-item
      :label="label"
      :size="size"
      :error="error"
      :required="required"
  >
    <el-cascader
        :value="value"
        @input="onInput"
        @blur="onBlur"
        :type="type"
        :placeholder="placeholder"
        :autosize="autosize"
        :disabled="disabled"
    />
  </el-form-item>
</template>
<script lang="ts">
import {defineComponent, PropType} from '@nuxtjs/composition-api'
import inputMixin from "~/components/base/input/form-input/mixins/inputMixin";

export default defineComponent({
  mixins: [inputMixin]
})
</script>