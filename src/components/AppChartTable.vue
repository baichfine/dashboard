<template>
  <v-container class="chartContainer">
    <AppCardChart
      v-for="item in fetch.value.chartObject"
      :key="item"
      :fetch="fetch"
      :dataArr="fetch.value.arrChart[item.dataArr]"
      :colors="item.colors"
      :text="item.text"
      :title="item.title"
      :classCart="item.classCart"
    ></AppCardChart>
  </v-container>
</template>
<script setup>
import AppCardChart from './AppCardChart.vue'

defineProps({
  fetch: Object,
})
</script>
