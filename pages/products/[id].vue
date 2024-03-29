<template>
  <div class="sheet d-flex flex-column flex-sm-row justify-center align-center border-s border-e rounded-xl">
    <div class="w-75 w-sm-50 ma-6 ps-7 pt-7">
      <v-img class="cols w-100" :src="product.image" contain />
    </div>

    <div class="ma-6 pe-7 pt-7 text-end w-75 w-sm-50">
      <h2 class="font-weight-bold pb-3">{{ product.title }}</h2>
      <p class="font-weight-bold text-caption pb-3">Price - $ {{ product.price }}</p>

      <p class="font-weight-medium text-caption pb-1">Product Description:</p>
      <v-divider />
      <p class="text-blue-grey-darken-3 text-caption pt-2">{{ product.description }}</p>

      <v-card-text class="d-flex justify-end text-grey text-caption pt-3 pe-0">
        <v-rating :model-value="product.rating.rate" color="amber" density="compact" size="small" half-increments readonly />
        <p class="ms-2">{{ product.rating.rate }} / {{ product.rating.count }}</p>
      </v-card-text>
    </div>
  </div>
</template>

<script setup>
const id = useRoute().params.id;
const config = useRuntimeConfig();

const { data: product } = await useFetch(`${config.public.apiURL}/${id}`);
</script>

<style>
.sheet {
  width: 90vw;
  max-width: 900px;
}
</style>
