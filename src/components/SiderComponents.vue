<template>
  
  <a-layout-sider breakpoint="xl">
    
    <div class="logo"/>
    <!--  &lt;!&ndash;@menu-item-click="onClickMenuItem"&ndash;&gt;-->
    <a-menu
      :default-open-keys="['1']"
      :default-selected-keys="['0_3']"
      :style="{ width: '100%' }"
    >
      <n-menu
        v-model:value="selectedKey"
        :options="options"
        :default-expanded-keys="defaultExpandedKeys"
        @update:value="showOption"
      />
    </a-menu>
  </a-layout-sider>
</template>
<script setup>
import {reactive, ref, h} from "vue";
import { RouterLink } from "vue-router";
import { useCounterStore } from "@/pinia";
const pinia = useCounterStore()
const showOption = (key) => {
  pinia.Breadcrumb = key
}
const options = [
  // {
  //   label: () => h(
  //     RouterLink,
  //     {
  //       to: {
  //         path: "/one",
  //       }
  //     },
  //     { default: () => "数据概览" }
  //   ),
  //   key: "数据概览数据概览",
  // },
  //
  //
  
  
  
  {
    label: "数据概览",
    key: "数据概览",
  },
  {
    label: "门店管理",
    key: "门店管理",
  },
  {
    label: "设备管理",
    key: "设备管理",
  },
  {
    label: "信息管理",
    key: "信息管理",
  },
  {
    label: "订单管理",
    key: "订单管理",
  },
  {
    label: "支付记录",
    key: "支付记录",
  },
  {
    label: "广告设置",
    key: "广告设置",
    children: [
      {
        label: "发布广告",
        key: "发布广告"
      },
      {
        label: "历史记录",
        key: "历史记录"
      },
    ]
  },
  {
    label: "系统设置",
    key: "系统设置",
  },
]
const selectedKey = ref("DataOverview");



const defaultExpandedKeys = reactive(['AdvertisingManagement', 'people'],)
</script>
<style scoped>

</style>
