<template>
  <layout-center
      :view-class="['w-100 h-100 d-flex justify-content-center',$style['wrapper-action']]"
      v-loading.fullscreen.lock="loading"
      :max-width="widthLayout"
  >
    <el-row :class="$style['container-order-action']">
      <el-col
          class="d-flex align-items-center height-col"
          :class="$style['height-col']"
          :span="spanLeft"
      >
        <el-scrollbar class="h-100 w-100">
          <div :class="$style['wrapper-side-left']">
            <slot name="left"/>
          </div>
        </el-scrollbar>
      </el-col>
      <el-col class="px-2 height-col" :span="24-spanLeft" :class="$style['height-col']">
        <el-scrollbar class="h-100">
          <div :class="$style['wrapper-side-right']">
            <slot name="right"/>
          </div>
        </el-scrollbar>
      </el-col>
      <el-col :span="24" :class="$style['empty-col']"/>
    </el-row>
    <div 
      :class="['d-flex justify-content-end align-items-center p-3', $style['wrapper-footer-action-order']]"
      >
      <el-button  @click="onBack">
        {{$t('back')}}
      </el-button>
      <el-button
        type="primary"
        native-type="button"
        @click="onSubmit"
        :disabled="disabledButtonSave"
      >
        {{ $t('save') }}
      </el-button>
    </div>
  </layout-center>
</template>

<script lang="ts">
import {defineComponent} from "@nuxtjs/composition-api";
import LayoutCenter from "~/components/base/layout-center.vue";
import EmitterConst from "~/constant/emitter";

export default defineComponent({
  components: {
    LayoutCenter,
  },
  props: {
    disabledButtonSave: Boolean,
    loading: Boolean,
    widthLayout: {
      type: String,
      default: "1200px"
    },
    labelButtonSave: {
      type: String,
      default: "Save"
    },
    spanLeft: {
      type: Number,
      default: 14,
    }
  },
  setup(props, {emit}) {
    const onBack = () => emit(EmitterConst.BACK)
    const onSubmit = () => emit(EmitterConst.SUBMIT)
    return {
      onBack,
      onSubmit,
    }
  }
});
</script>
<style lang="scss" module>
.wrapper-action {
  position: relative;
  justify-content: center;

  .container-order-action {
    width: 100%;
  }

  .height-col {
    height: calc(100% - 40px);
  }

  .wrapper-footer-action-order {
    z-index: 2;
    position: fixed;
    height: 60px;
    max-width: 1200px;
    width: 100%;
    border-radius: 2px;
    box-shadow: 0px 2px 10px rgba(124, 141, 181, 0.12);
    background-color: white;
    border: solid 1px $border-color;
    bottom: 0;
  }
}

.empty-col {
  height: 40px;
  width: 100%
}

.wrapper-side-right {
  width: 97%;
  position: relative;
}
</style>