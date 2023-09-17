<template>
  <section :class="$style.wrapper">
    <el-scrollbar 
    :class="[$style.container, 'overflow-hidden']" 
    :style="{ maxWidth, backgroundColor }"
    :view-class="viewClass"
    >
      <slot />
    </el-scrollbar>
  </section>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    maxWidth: {
      type: String,
      default: "100%"
    },
    backgroundColor: {
      type: String,
      default: "white"
    },
    overflowY: {
      type: String,
      default: 'auto'
    },
    viewClass: {
      type: [String, Array],
      default: "w-100 h-100"
    }
  }
})
</script>
<style lang="scss" module>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  position: relative;
}

.container {
  width: 100%;
  border: solid 1px $border-color;
  border-radius: 5px;
  overflow-x: hidden;
  height: 100%;
}
</style>