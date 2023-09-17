<template>
  <div class="default-element-layout overflow-hidden">
    <app-header/>
    <sub-header :breadcrumbs="breadcrumbs"/>
    <div :class="$style.wrapperLayout">
      <nuxt/>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, reactive, toRefs} from "@nuxtjs/composition-api";
import AppHeader from "~/components/header/app-header.vue";
import SubHeader from "~/components/header/sub-header.vue";

interface State {
  breadcrumbs: Breadcrumb[]
}

export default defineComponent({
  components: {SubHeader, AppHeader},
  setup() {
    const state = reactive<State>({
      breadcrumbs: []
    })
    return {
      ...toRefs(state),
    }
  },
})

</script>
<style lang="scss" module>
.wrapperLayout {
  width: 100%;
  margin-top: 100px;
  padding: 10px;
  position: relative;
  height: calc(100vh - 100px);
  background-color: whitesmoke;
}
</style>
