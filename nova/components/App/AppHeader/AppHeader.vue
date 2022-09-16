<template>
  <div class="container">LOGO</div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/utilities/rem";

.container {
  position: fixed;
  z-index: var(--z-index-header);
  padding: 0 rem(15);
  width: 100%;
  height: var(--header-height);
  background: var(--color-white);
  border-bottom: var(--border-default);
  display: flex;
  align-items: center;
}
</style>
