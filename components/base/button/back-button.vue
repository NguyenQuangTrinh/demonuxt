<template>
  <el-button
      class="button-back w-100"
      icon="el-icon-back"
      @click="$router.back()"
      type="text"
  >
    {{ label }}
  </el-button>
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    label: String,
  }
})

</script>
<style lang="scss">
.button-back {
  font-size: 16px;
  &:hover {
    background-color: #f8f8f8;
    border: 1px solid #dadce0;
    border-radius: 5px;
  }
}
</style>