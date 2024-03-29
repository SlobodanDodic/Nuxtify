<template>
  <v-row>
    <v-col v-for="(item, i) in items" :key="i" cols="12" sm="4">
      <v-card class="mx-auto pa-4" max-width="400" elevation="3">
        <div class="text-body text-blue-grey-darken-3">
          <b>{{ item.raw.price }}$</b>
        </div>

        <v-img class="align-end" height="200" :src="item.raw.image" contain>
          <v-card-title class="text-center text-white">
            {{ item.raw.category }}
          </v-card-title>
        </v-img>

        <v-card-subtitle class="text-center pt-3">
          {{ item.raw.title }}
        </v-card-subtitle>

        <v-card-text class="d-flex justify-center text-grey text-caption pt-1 pb-5">
          <v-rating :model-value="item.raw.rating.rate" color="amber" density="compact" size="small" half-increments readonly />
          <p class="ms-2">{{ item.raw.rating.rate }} / {{ item.raw.rating.count }}</p>
        </v-card-text>

        <div class="d-flex justify-center">
          <NuxtLink :to="`/products/${item.raw.id}`" class="text-blue-grey-darken-3">
            <v-btn prepend-icon="mdi-arrow-right-drop-circle-outline"> Details </v-btn>
          </NuxtLink>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
const { items } = defineProps(["items"]);
</script>
