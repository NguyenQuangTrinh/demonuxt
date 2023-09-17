<template>
  <div class="wrapper-profile">
    <div class="profile">
      <el-avatar :size="60" :src="urlAvatar"></el-avatar>
      <p class="m-0 text-center">
        {{ name }}
      </p>
    </div>
    <el-divider class="m-0"/>
    <p>Select Brach</p>
    <el-divider class="m-0"/>
    <div class="wrapper-menu">
      <p class="item-menu">
        <i class="el-icon-user"/>
        Profile</p>
      <p class="item-menu">
        <i class="el-icon-lock"></i>
        Log-out
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    name: {
      type: String,
      default: "Admin"
    },
    urlAvatar: {
      type: String,
      default: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    }

  }
})
</script>
<style lang="scss" scoped>
.wrapper-profile {
  width: 300px;

  .profile {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 0;
    flex-direction: column;
  }

  .wrapper-menu {
    .item-menu {
      margin: 8px;
      padding-left: 5px;
      cursor: pointer;
    }
  }
}
</style>