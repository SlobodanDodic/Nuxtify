<template>
  <div>
    <v-app id="inspire" class="typo">
      <Navbar />
      <v-main class="ma-5">
        <slot />
      </v-main>
      <Footer />
    </v-app>
  </div>
</template>

<style>
.typo {
  font-family: "Montserrat", sans-serif;
  color: #37474f;
}
</style>
