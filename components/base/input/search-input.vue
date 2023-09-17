<template>
  <el-input
      :placeholder="placeholder"
      :value="value"

  />
</template>

<script lang="ts">
import {computed, defineComponent, reactive, toRefs} from '@nuxtjs/composition-api'
import inputMixin from "~/components/base/input/form-input/mixins/inputMixin";

export default defineComponent({
  props: {
    placeholder: String,
  },
  mixins: [inputMixin]
})

</script>