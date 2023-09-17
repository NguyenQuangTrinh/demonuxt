<template>
  <layout-center>
    <header-container
        class="w-100 p-3"
        :title="titleHeader"
        :is-show-add="isShowAdd"
        :placeholder="placeholder"
        :title-button="titleButton"
        v-model="keyword"
    />
    <el-divider class="m-0"/>
    <app-table
        :fields="fieldsTable"
        :items="itemsTable"
    />
  </layout-center>
</template>

<script lang="ts">
import {computed, defineComponent, reactive, ref, toRefs} from "@nuxtjs/composition-api";
import LayoutCenter from "~/components/base/layout-center.vue";
import HeaderContainer from "~/components/base/header-container.vue";
import useTranslate from "~/composables/useTranslate";
import DefaultValue from "~/constant/defaultValue";
import AppTableColumn from "~/components/base/table/app-table-column.vue";
import AppTable from "~/components/base/table/app-table.vue";

export default defineComponent({
  components: {AppTable, AppTableColumn, HeaderContainer, LayoutCenter},
  head: {
    title: "Home Page - NuxtJS Skeleton",
  },
  setup() {
    const getText = useTranslate()
    const state = reactive({
      titleHeader: computed(() => getText('homePage.title')),
      isShowAdd: computed(() => true),
      titleButton: computed(() => getText('addNew')),
      placeholder: computed(() => getText('search')),
      keyword: DefaultValue.STRING,
    })
    const fieldsTable = ref<FieldTable[]>([
      {
        label: 'Index',
        prop: 'index'
      },
      {
        label: 'Production Name',
        prop: 'production_name'
      },
      {
        label: 'Price',
        prop: 'price'
      }
    ])

    const itemsTable = ref([
    ])
    return {
      ...toRefs(state),
      fieldsTable,
      itemsTable,
    }
  }
});
</script>