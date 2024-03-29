<template>
  <v-data-iterator :items="products" :items-per-page="itemsPerPage" class="ma-4">
    <template v-slot:header="{ page, pageCount, prevPage, nextPage }">
      <h1 class="text-h4 font-weight-bold d-flex justify-space-between mb-4 align-center">
        <div class="text-truncate">Products</div>

        <div class="d-flex align-center">
          <v-btn class="me-8" variant="text" @click="onClickSeeAll()">
            <span class="text-decoration-underline text-none">
              {{ itemsPerPage === 3 ? "See all" : "See less" }}
            </span>
          </v-btn>

          <div class="d-inline-flex">
            <v-btn
              :disabled="page === 1"
              class="me-2"
              icon="mdi-arrow-left"
              size="small"
              variant="tonal"
              @click="prevPage"
            ></v-btn>

            <v-btn :disabled="page === pageCount" icon="mdi-arrow-right" size="small" variant="tonal" @click="nextPage"></v-btn>
          </div>
        </div>
      </h1>
    </template>

    <template v-slot:default="{ items }">
      <ProductItem :items="items" />
    </template>

    <template v-slot:footer="{ page, pageCount }">
      <v-footer class="justify-space-between text-body-2 mt-4 py-4 rounded" color="blue-grey-darken-3">
        Total products: {{ products?.length }}

        <div>Page {{ page }} of {{ pageCount }}</div>
      </v-footer>
    </template>
  </v-data-iterator>
</template>

<script setup>
const config = useRuntimeConfig();
const { data: products } = await useFetch(config.public.apiURL);
const itemsPerPage = ref(3);

function onClickSeeAll() {
  itemsPerPage.value = itemsPerPage.value === 3 ? products._rawValue.length : 3;
}
</script>

<style>
.v-main {
  max-width: 1200px;
  margin: 30px auto !important;
}
.v-main .v-img__img {
  object-fit: contain;
  padding: 10px;
}
</style>
