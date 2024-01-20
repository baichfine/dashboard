<template>
  <v-container class="meteringTable">
    <v-skeleton-loader
      v-if="fetch.value.loadMetering"
      :loading="true"
      class="meteringTable"
      rounded="lg"
      elevation="3"
      type="heading,  table-tbody"
    >
    </v-skeleton-loader>

    <v-card
      v-else
      rounded="lg"
      elevation="3"
    >
      <AppTable :fetch="fetch"></AppTable>
    </v-card>
  </v-container>
</template>

<script setup>
import AppTable from './AppTable.vue'

defineProps({
  fetch: Object,
})
</script>
