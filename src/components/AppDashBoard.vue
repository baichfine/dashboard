<template>
  <AppButton :fetch="fetch"></AppButton>
  <AppChartTable :fetch="fetch"></AppChartTable>
  <AppMeteringTable :fetch="fetch"></AppMeteringTable>
</template>

<script setup>
import AppButton from './AppButton.vue'
import AppChartTable from './AppChartTable.vue'
import AppMeteringTable from './AppMeteringTable.vue'
import { useFetch } from '@/use/fetch'

const fetch = useFetch({
  value: {},
})
</script>
