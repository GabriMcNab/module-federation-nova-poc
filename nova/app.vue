<template>
  <div>
    <AppHeader />
    <div class="wrapper">
      <AppSidebar
        :show="sidebarIsOpen"
        :nav-elements="data"
        @click:collapsing="handleCollapse"
      />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>
<script setup lang="ts">
import AppSidebar, {
  NavElement,
} from "@/components/App/AppSidebar/AppSidebar.vue";
const sidebarIsOpen = ref(false);
function handleCollapse() {
  sidebarIsOpen.value = !sidebarIsOpen.value;
}

const data: NavElement[] = [
  {
    icon: "ticket",
    title: "Experiences",
    path: "/",
  },
];
</script>
<style scoped lang="scss">
.wrapper {
  padding-top: var(--header-height);
  display: grid;
  grid-template-columns: auto 1fr auto;

  .page {
    height: 100%;
  }
}
</style>
