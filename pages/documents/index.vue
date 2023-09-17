<template>
  <layout-center view-class="w-100 d-flex justify-content-center">
    <header-container
    />
  </layout-center>
</template>
<script lang="ts">
import {defineComponent, reactive} from "@vue/composition-api";
import layoutCenter from "~/components/base/layout-center.vue";
import {useStore} from "@nuxtjs/composition-api";
import HeaderContainer from "~/components/base/header-container.vue";

export default defineComponent({
  components: {HeaderContainer, layoutCenter},
  setup() {
    const store = useStore<RootState>()
    const {locale} = store.state.i18n
    const state = reactive({
      data: store.state.i18n.locale,
    });

    return {
      locale,
    };
  },
});
</script>
