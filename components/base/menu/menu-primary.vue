<template>
  <el-drawer
      custom-class="drawer-app-menu"
      :visible="visible"
      @close="$emit('close')"
      direction="ltr"
      size="300px"
      class="wrapper-app-menu"
      z-index="3"
  >
    <div class="container-app-menu">
      <div class="header-app-menu">
        <label class="m-0">{{ $t('select') }}</label>
        <el-button class="border-0" icon="el-icon-s-tools"/>
      </div>
      <el-divider class="m-0"/>
      <el-scrollbar class="body-app-menu">
        <el-menu unique-opened background-color="#f8f8f8">
          <el-submenu
              v-for="(item, indexParent) in listMenu"
              :index="`'${indexParent}'`"
              :key="indexParent"
          >
            <template slot="title">
              <i :class="item.icon"></i>
              <span class="pl-2">{{ item.text }}</span>
            </template>
            <el-menu-item
                v-if="item.child"
                v-for="(itemChild , indexChild) in item.child"
                :index="`${indexParent}-${indexChild}`"
                :key="indexChild"
                @click="$router.push(itemChild.path); $emit('close')"
            >
              {{ itemChild.text }}
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-scrollbar>
    </div>
  </el-drawer>
</template>
<script lang="ts">
import {computed, defineComponent, getCurrentInstance, useRoute, useStore} from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    visible: Boolean,
  },
  setup() {
    const store = useStore()
    const route = useRoute()
    const listMenu = computed(() => {
      return []
    })
    const instance = getCurrentInstance()

    return {
      listMenu,
    }
  }
})
</script>
<style lang="scss">
.wrapper-app-menu {
  position: fixed !important;
  top: $height-app-header !important;

  .el-drawer__header {
    display: none;
  }

  .el-drawer__body {
    overflow-y: hidden;
  }

  .container-app-menu {
    height: calc(100vh - 103px);

    .header-app-menu {
      background-color: white;
      width: 100%;
      padding-left: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .body-app-menu {
      background-color: #f8f8f8;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
    }

    //.footer-app-menu {
    //  display: flex;
    //  justify-content: right;
    //  padding: 0 10px;
    //}

  }
}
</style>