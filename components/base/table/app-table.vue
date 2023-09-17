<template>
  <el-table
      ref="dataTableRef"
      :data="items"
      :height="tableHeight"
      @sort-change="$emit('onSort')"
      @row-click="$emit('onRowClick')"
      @selection-change="val=>$emit('selectionChange', val)"
      style="width: 100%; z-index: 1"
      v-loading="loading"
      :highlight-current-row="highlightCurrentRow"
      @current-change="val=>$emit('onCurrentChange', val)"
      @cell-dblclick="val=>$emit('onCellClick', val)"
      :size="size"
      :border="border"
      :tree-props="treeProps"
      :header-cell-class-name="headerCellClassName"
      :cell-class-name="cellClassName"
      :row-class-name="rowClassName"
      :lazy="lazy"
  >
    <el-table-column
        v-for="(field, index) in fields"
        v-bind="field"
        :key="`data-table-column-${field.prop || index}`"
        :label="field.label.toString()"
        :prop="field.prop"
        class-name="label-value-table "
        :align="field.align"
        :show-overflow-tooltip="field.showOverflowTooltip"
    >
      <template v-slot="scope">
        <slot :name="field.prop" :row="scope.row" :field="field">
          {{ getAttribute(field.prop, scope.row) }}
        </slot>
      </template>
    </el-table-column>
<!--    <el-table-column-->
<!--        label="Thao tác"-->
<!--        class-name="label-value-table"-->
<!--        width="100px"-->
<!--        v-if="dropdowns&&dropdowns.filter(x=>x.isShow).length>0"-->
<!--        :fixed="fixedActions?'right' : undefined"-->
<!--    >-->
<!--      <template v-slot="scope">-->
<!--        <div class="d-flex justify-content-center">-->
<!--          <dropdown-action :dropdowns="dropdowns" :item="scope.row"/>-->
<!--        </div>-->
<!--      </template>-->
<!--    </el-table-column>-->
    <el-table-column
        v-if="selection"
        type="selection"
        fixed="right"
    >
    </el-table-column>
  </el-table>
</template>
<script lang="ts">
import {defineComponent, PropType} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppTable',
  components: {},
  props: {
    items: Array,
    fields: Array as PropType<FieldTable[]>,
    menu: Array,
    tableHeight: String,
    loading: Boolean,
    highlightCurrentRow: Boolean,
    isExpand: Boolean,
    border: Boolean,
    treeProps: Object,
    headerCellClassName: String,
    cellClassName: String,
    rowClassName: Function,
    size: {
      type: String,
      default: "medium"
    },
    fixedActions: Boolean,
    selection: Boolean,
    lazy: Boolean,
    identifier: String,
  },
  setup() {
    const numberFormat = new Intl.NumberFormat()
    const getAttribute = (prop: string, data: any) => {
      let result = data
      const prop_arr = prop.split(".")
      for (let i = 0; i < prop_arr.length; i++) {
        if (result && result.hasOwnProperty(prop_arr[i])) {
          result = result[prop_arr[i]]
        } else {
          return ""
        }
      }
      return result
    }
    return {
      getAttribute,
      numberFormat
    }
  },
})
</script>
<style>
.el-table .border-black {
  border: 1px solid black !important;
}

.el-table .no-expand .el-icon {
  display: none;
}

.no-expand .el-table__expand-icon {
  pointer-events: none;
}
</style>