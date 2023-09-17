<template>
  <div class="wrapper-breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <i class="el-icon-s-home mr-1"/>
        {{ $t('homePage.title') }}
      </el-breadcrumb-item>
      <el-breadcrumb-item
          v-for="(item, index) in breadcrumbs"
          :to="item.path"
          :key="index"
      >
        {{ $t(item.namePage) }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>

</template>
<script lang="ts">
import {defineComponent, onMounted, PropType} from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    namePage: String,
    breadcrumbs: {
      type: Array as PropType<Breadcrumb[]>,
      default: [],
    }
  },
})
</script>
<style lang="scss" scoped>
.wrapper-breadcrumb {
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  top: $height-app-header;
}
</style>