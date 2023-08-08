<template>
  <a-layout class="layout-demo">
    <SiderComponents/>
    <a-layout>
      <HeaderComponents/>
      <a-layout style="padding: 0 24px;">
        <BreadcrumbComponents/>
        <ContentComponents/>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script setup>
import HeaderComponents from "@/components/HeaderComponents.vue";
import SiderComponents from "@/components/SiderComponents.vue";
import BreadcrumbComponents from "@/components/BreadcrumbComponents.vue";
import ContentComponents from "@/components/ContentComponents.vue";
</script>
<style scoped lang="less">
.layout-demo {
  height: 100vh;
  background: var(--color-fill-2);
  border: 1px solid var(--color-border);
}

.layout-demo :deep(.arco-layout-sider) .logo {
  height: 64px;
  background: rgba(255, 255, 255, 0.2);
}

.layout-demo :deep(.arco-layout-sider-light) .logo {
  background: var(--color-fill-2);
}

.layout-demo :deep(.arco-layout-header) {
  height: 64px;
  line-height: 64px;
  background: var(--color-bg-3);
}

.layout-demo :deep(.arco-layout-content) {
  font-weight: 400;
  font-size: 14px;
  background: var(--color-bg-3);
}

.layout-demo :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}
</style>
