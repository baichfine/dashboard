<template>
  <v-skeleton-loader
    v-if="fetch.value.loadMetering"
    :loading="true"
    :class="classCart"
    rounded="lg"
    elevation="3"
    type="heading,subtitle,image"
  >
  </v-skeleton-loader>
  <v-card
    v-else
    :class="classCart"
    rounded="lg"
    elevation="3"
    :title="title"
    subtitle="Данные за последний час"
  >
    <AppChart
      :arrMeter="dataArr"
      :arrDate="fetch.value.arrChart.insertedAt"
      :colors="colors"
      :text="text"
    ></AppChart>
  </v-card>
</template>
<script setup>
import AppChart from './AppChart.vue'

defineProps({
  fetch: Object,
  dataArr: Object,
  colors: Object,
  text: String,
  title: String,
  subtitle: String,
  classCart: String,
})
</script>
