<template>
  <v-footer class="bg-blue-grey-darken-3 py-5">
    <v-row justify="center" no-gutters>
      <NuxtLink to="/" class="text-white">Home</NuxtLink>
      <NuxtLink to="/products" class="text-white mx-5">Products</NuxtLink>
      <NuxtLink to="/about" class="text-white">About</NuxtLink>

      <v-col class="text-center mt-4" cols="12"> {{ new Date().getFullYear() }} - Fake Shop API </v-col>
    </v-row>
  </v-footer>
</template>
