<template>
  <div class="wrapper-sub-app-header">
    <menu-primary
        :visible="isVisibleMenu"
        @close="onCloseMenu"
    />
    <div class="d-flex justify-content-center align-items-center">
      <menu-button @click="isVisibleMenu=!isVisibleMenu"/>
      <breadcrumb :breadcrumbs="breadcrumbs"/>
    </div>
    <div class="wrapper-notify">
      <el-button class="border-0">
        <i class="el-icon-search"/>
      </el-button>
    </div>
  </div>

</template>
<script lang="ts">
import {defineComponent, reactive, toRefs} from '@nuxtjs/composition-api'
import MenuButton from "~/components/base/button/menu-button.vue";
import Breadcrumb from "~/components/base/breadcrumb.vue";
import MenuPrimary from "~/components/base/menu/menu-primary.vue";

export default defineComponent({
  components: {MenuPrimary, MenuButton, Breadcrumb},
  props: {
    breadcrumbs: Array
  },
  setup() {
    const state = reactive({
      isVisibleMenu: false,
    })
    const actions = {
      'onCloseMenu': () => state.isVisibleMenu = false
    }
    return {
      ...toRefs(state),
      ...actions
    }
  }
})
</script>
<style lang="scss" scoped>
.wrapper-sub-app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: $height-app-header;
  background-color: white;
  width: 100%;
  border-bottom: solid 1px $border-color;
  padding: 0 10px;
  position: fixed;
  z-index: 4;
}
</style>