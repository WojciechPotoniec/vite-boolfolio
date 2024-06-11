<template>
  <HeaderComponent />
  <main class="container">
    <router-view></router-view>
  </main>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
  },
};
</script>

<style lang="scss" scoped></style>
