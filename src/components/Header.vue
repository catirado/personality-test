<template>
  <header class="header">
    <img class="header__logo" alt="Comunícate" src="@/assets/logo.svg" />
    <div class="header__title">
      <slot name="title"></slot>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import router, { Routes } from '@/router';

@Component({
  components: {},
})
export default class Header extends Vue {

  public goToHome(): void {
    router.push({ name: Routes.Home });
  }
}
</script>


<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  display: flex;
  background-color: transparent;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 100;
  user-select: none;
  transition: all 400ms ease-in-out;

  &--white {
    background-color: var(--white);
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .12);
  }

  &__logo {
    height: 40px;
  }

  &__actions {
    font-size: var(--letter-3xl);
  }

  &__title {
    display: flex;
    align-items: center;
  }
}
</style>
