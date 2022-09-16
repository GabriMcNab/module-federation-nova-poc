<template>
  <div class="Dashboard">
    <div class="Dashboard__wrapper">
      Welcome to nova

      <NovaVueApp />
      <div id="react"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, onMounted } from "vue";
import { mount } from "nova_react_app/ReactApp";

onMounted(() => {
  mount(document.getElementById("react"));
});

const NovaVueApp = defineAsyncComponent(() => import("nova-vue-app/VueApp"));
</script>

<style scoped lang="scss">
@import "@/assets/scss/utilities";

.Dashboard {
  background: var(--color-grey-80);
  padding: rem(23px) rem(12px);
  height: 100%;

  &__wrapper {
    max-width: 1240px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>
