<template>
  <div class="wrapper-app-header">
    <div class="d-flex justify-content-center align-items-center">
      <div class="wrapper-logo">
        <img
            :src="logoImage.src"
            :width="logoImage.width"
            :height="logoImage.height"
            @click="actions['onBackHome']"
            alt="image-logo"
        />
      </div>
    </div>
    <div class="d-flex align-items-center px-3">
      <el-button
          class="border-0 mr-4"
          circle
          @click="isVisibleNotify = true"
      >
        <el-badge :value="0" class="d-flex justify-content-center align-items-center">
          <i class="el-icon-message-solid icon-notification"/>
        </el-badge>
      </el-button>
      <dropdown-profile/>
      <el-avatar :size="40">NL</el-avatar>
    </div>
    <drawer-notify
        :visible="isVisibleNotify"
        @close="isVisibleNotify = false"
    />
  </div>
</template>
<script lang="ts">
import {computed, defineComponent, reactive, toRefs, useRouter} from '@nuxtjs/composition-api'
import DrawerNotify from "~/components/header/drawer-notify.vue";
import DropdownProfile from "~/components/header/dropdown-profile.vue";

export default defineComponent({
  components: {DropdownProfile, DrawerNotify},
  props: {},
  setup() {
    const router = useRouter()
    const state = reactive({
      isVisibleNotify: false,
      isLoading: false,
    })
    const logoImage = computed(() => {
      return {
        src: "/images/img_logo.png",
        width: '120px',
        height: '60px',
      }
    })
    const actions = {
      'onBackHome': () => router.push('/')
    }

    return {
      ...toRefs(state),
      actions,
      logoImage,
    }
  }
})
</script>

<style lang="scss" scoped>
.wrapper-app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: $height-app-header;
  border-bottom: solid 1px $border-color;
  background: white;
  width: 100%;
  top: 0;
  position: fixed;
  z-index: 5;

  .wrapper-logo {
    width: $width-logo-header;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.icon-notification {
  font-size: 20px;
  cursor: pointer;
}

</style>