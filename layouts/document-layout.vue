<template>
  <el-container class="wrapper-layout-document">
    <el-container class="container-layout-document ">
      <el-header class="border-bottom">
      </el-header>
      <el-container class="w-100">
        <el-aside :width="widthAside">
          <menu-document/>
        </el-aside>
        <div class="w-100">
          <nuxt/>
        </div>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from '@vue/composition-api'
import MenuDocument from "~/components/base/menu/menu-document.vue";

export default defineComponent({
  components: {MenuDocument},
  setup() {
    const state = reactive({
      widthAside: "300px",
    })

    return {
      ...toRefs(state)
    }
  },
})
</script>
<style lang="scss">
.wrapper-layout-document {
  display: flex;
  justify-content: center;
  align-items: center;

  .container-layout-document {
    max-width: 1400px;
    width: 100%;
  }
}

</style>
