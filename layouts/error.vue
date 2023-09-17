<template>
  <div  class="d-flex w-100 h-100 justify-content-center align-items-center">
    <el-result
        :title="result.title"
        :icon="result.icon"
        :sub-title="result.subTitle"
    >
      <template slot="extra">
        <el-button @click="$router.push('/')">
          Trở lại trang chủ
        </el-button>
      </template>
    </el-result>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "@nuxtjs/composition-api";

interface Result {
  title: string,
  icon: 'success' | 'warning' | 'info' | 'error'
  subTitle: string
}

export default defineComponent({
  props: {
    error: Object as PropType<{ statusCode: number }>
  },
  layout: 'default-element',
  setup(props, {emit}) {
    const result = computed<Result>(() => {
      switch (props.error?.statusCode) {
        case 404:
          return {
            icon: "warning",
            title: "Oops! Không tìm thấy trang",
            subTitle: "Không tìm thấy trang hoặc bạn không có quyền truy cập !"
          }
        default:
          return {
            title: "Oops! Lỗi hệ thống",
            icon: 'error',
            subTitle: "Không kết nối được với dịch vụ !"
          }
      }
    })

    return {
      result
    }
  }
})
</script>