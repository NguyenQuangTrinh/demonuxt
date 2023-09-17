<template>
  <el-dropdown :hide-on-click="false" trigger="click" v-loading.fullscreen="isLoading">
    <div class="d-flex justify-content-center align-items-center">
      <div class="container-fluid">
        <p class="font-weight-bold mb-1">Ho Chi Minh City</p>
        <p class="mb-1">Nghiem Le</p>
      </div>
    </div>
    <el-dropdown-menu slot="dropdown" :visible-arrow="false" class="dropdown-profile" @input="onInputDropdown">
      <div v-if="!isVisibleExpandTab">
        <item-dropdown-profile class="border-bottom">
          <template slot="icon">
            <el-avatar :size="35"> NL</el-avatar>
          </template>
          <template slot="title">
            <p class="m-0 font-weight-bold">
              Le hong nghiem
            </p>
            <p class="m-0">
              Company Admin
            </p>
          </template>
        </item-dropdown-profile>
        <item-dropdown-profile icon="fa fa-globe" :is-arrow-button="true" @click="onChangeTabLanguage">
          <template slot="title">
            <p class="m-0">
              {{ $t('language') }}
            </p>
            <p class="m-0 font-italic font-weight-light font-sm">
              {{ $t(locale) }}
            </p>
          </template>
        </item-dropdown-profile>
        <item-dropdown-profile icon="fa fa-adjust" :is-arrow-button="true" @click="onChangeTabTheme">
          <template slot="title">
            <p class="m-0">
              {{ $t('theme') }}
            </p>
            <p class="m-0 font-italic font-weight-light font-sm">
              {{ $t(currentTheme) }}
            </p>
          </template>
        </item-dropdown-profile>
        <item-dropdown-profile icon="fa fa-key" :title="$tc('changePassword')" :is-arrow-button="false"
          @click="onChangePassword" />
        <item-dropdown-profile icon="fa fa-sign-out" :title="$tc('signOut')" :is-arrow-button="false" @click="onLogOut" />
      </div>
      <div v-show="isVisibleExpandTab" class="extra-tab">
        <div class="d-flex align-items-center p-2 border-bottom pointer-cursor" @click="onBack">
          <i class="el-icon-arrow-left mr-2 is-hover" />
          <p class="mb-0">{{ $t(title) }}</p>
        </div>
        <!-- Language Tab -->
        <div v-if="typeExpand.isLanguage">
          <radio-check-input :value="locale" :options="locales" @input="onChangeLanguage" />
        </div>
        <!-- Tab theme -->
        <div v-if="typeExpand.isTheme">
          <radio-check-input :value="currentTheme" :options="listThemes" @input="onChangeTheme" />
        </div>
      </div>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance, reactive, toRefs, useContext, useStore } from '@nuxtjs/composition-api'
import ItemDropdownProfile from "~/components/header/item-dropdown-profile.vue";
import RadioCheckInput from "~/components/base/input/radio-check-input.vue";
import DefaultValue from "~/constant/defaultValue";
import { LocaleObject } from "@nuxtjs/i18n";
import Timeout from "~/constant/timeout";
import useTranslate from "~/composables/useTranslate";
import { MutationTypes } from '~/store/modules/theme';


export default defineComponent({
  props: {},
  components: { RadioCheckInput, ItemDropdownProfile },
  setup() {
    const instance = getCurrentInstance()
    const t = useTranslate()
    const store = useStore<RootState>()
    const { theme } = store.state
    const currentTheme = computed(() => theme.currentTheme)
    const listThemes = computed(() => theme.themes)
    const state = reactive({
      isVisibleExpandTab: DefaultValue.BOOLEAN,
      title: DefaultValue.STRING,
      type: DefaultValue.STRING,
      locales: computed(() => instance?.proxy.$i18n.locales?.map((lc: LocaleObject | string) => {
        if (typeof (lc) !== 'string')
          return {
            label: lc.name,
            value: lc.code,
          }
        else return []
      })),
      locale: computed(() => instance?.proxy.$i18n.locale || DefaultValue.STRING),
      isLoading: false
    })

    const TypeExpandTabConst = Object.freeze({
      LANGUAGE: "LANGUAGE",
      THEME: "THEME",
    })

    const typeExpand = computed(() => {
      return {
        isLanguage: state.type === TypeExpandTabConst.LANGUAGE,
        isTheme: state.type === TypeExpandTabConst.THEME,
      }
    })

    const actions = {
      'onBack': () => {
        state.type = DefaultValue.STRING
        state.isVisibleExpandTab = DefaultValue.BOOLEAN
        state.title = DefaultValue.STRING
      },

      'onChangePassword': () => {
      },

      'onChangeTabLanguage': () => {
        state.isVisibleExpandTab = true
        state.title = 'selectLanguage'
        state.type = TypeExpandTabConst.LANGUAGE
      },

      'onChangeLanguage': (value: string) => {
        state.isLoading = true
        setTimeout(() => {
          instance?.proxy.$i18n.setLocale(value)
          state.isLoading = false
        }, Timeout.TIME_LOADING)
      },

      'onChangeTabTheme': () => {
        state.isVisibleExpandTab = true
        state.title = 'selectLanguage'
        state.type = TypeExpandTabConst.THEME
      },

      'onChangeTheme': (theme: string) =>
        store.commit(MutationTypes.CHANGE_THEME, theme),

      'onLogOut': () => {
        instance?.proxy.$confirm(t('doYouWantToSignOutOfTheApp'), t('signOut'), {
          title: t("warning"),
          iconClass: 'el-icon-warning',
          confirmButtonText: t("yes"),
          cancelButtonText: t("cancel")
        }).then(() => {
        })

      },

      'onInputDropdown': (value: boolean) => {
        if (!value) state.isVisibleExpandTab = false
      }
    }
    return {
      ...actions,
      ...toRefs(state),
      TypeExpandTabConst,
      typeExpand,
      currentTheme,
      listThemes,
    }
  }
})

</script>
<style lang="scss">
.dropdown-profile {
  width: 320px;
  border-radius: 8px !important;
  padding: 0 !important;

  //.extra-tab {
  //  animation: fadeInRight 0.2s ease-in-out;
  //}
}
</style>