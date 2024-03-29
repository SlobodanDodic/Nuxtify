<template>
  <v-app-bar :elevation="3" class="py-1">
    <h2 class="ms-5 text-blue-grey-darken-3">Fake Shop API</h2>
    <v-spacer />
    <v-app-bar-nav-icon @click="drawer = !drawer" />
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary>
    <v-list-item
      prepend-avatar="@/assets/images/avatar.webp"
      title="Donnie Darko"
      subtitle="donniedarko@gmail.com"
      class="pt-7 pb-5"
    />

    <v-divider></v-divider>

    <v-list density="compact" nav class="d-flex flex-column">
      <NuxtLink to="/">
        <v-list-item prepend-icon="mdi-home" title="Home" value="home" />
      </NuxtLink>

      <NuxtLink to="/products">
        <v-list-item prepend-icon="mdi-cart" title="Products" value="products" />
      </NuxtLink>

      <NuxtLink to="/about">
        <v-list-item prepend-icon="mdi-forum" title="About" value="about" />
      </NuxtLink>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(null);
</script>

<script>
export default {
  data: () => ({ drawer: null }),
};
</script>

<style>
a {
  text-decoration: none;
  color: #37474f;
}
</style>
