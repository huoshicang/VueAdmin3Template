<template>
  <a-breadcrumb :style="{ margin: '16px 0' }">
    <a-breadcrumb-item>首页</a-breadcrumb-item>
    <a-breadcrumb-item v-if="pinia.Breadcrumb === '发布广告' || pinia.Breadcrumb === '历史记录'">广告设置</a-breadcrumb-item>
    <a-breadcrumb-item>{{ pinia.Breadcrumb }}</a-breadcrumb-item>
  </a-breadcrumb>
</template>
<script setup>
import {useCounterStore} from "@/pinia";
const pinia = useCounterStore()
</script>

<style scoped>

</style>
