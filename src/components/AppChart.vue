<template>
  <div id="chart">
    <VueApexCharts
      type="area"
      height="350"
      :options="chartOptions"
      :series="series"
    ></VueApexCharts>
  </div>
</template>

<script setup>
import VueApexCharts from 'vue3-apexcharts'
import ru from 'apexcharts/dist/locales/ru'
import { reactive } from 'vue'

const props = defineProps({
  arrMeter: Object,
  arrDate: Object,
  colors: Object,
  text: String,
})
const series = reactive(props.arrMeter)
const chartOptions = reactive({
  chart: {
    height: 350,
    locales: [ru],
    defaultLocale: 'ru',
    type: 'area',
    zoom: {
      enabled: false,
    },
  },
  fontFamily: 'YS Text Regular Regular, Arial, Helvetica, sans-serif',
  legend: {
    position: 'top',
    fontFamily: 'YS Text Regular Regular, Arial, Helvetica, sans-serif',
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },
  colors: props.colors,
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.1,
      opacityTo: 0,
      stops: [0, 90, 100, 100],
    },
  },
  xaxis: {
    type: 'datetime',
    categories: props.arrDate,
    labels: {
      datetimeUTC: false,
      style: {
        fontSize: '12px',
        fontFamily: 'YS Text Regular Regular, Arial, Helvetica, sans-serif',
      },
      format: 'dd MMM HH:mm',
    },
    title: {
      text: 'Время, мин',
      offsetX: 0,
      offsetY: 4,
      style: {
        fontSize: '12px',
        fontFamily: 'YS Text Regular Regular, Arial, Helvetica, sans-serif',
        fontWeight: 600,
        cssClass: 'apexcharts-yaxis-title',
      },
    },
  },
  yaxis: {
    title: {
      text: props.text,
      labels: {
        style: {
          fontSize: '12px',
          fontFamily: 'YS Text Regular Regular, Arial, Helvetica, sans-serif',
        },
      },
      rotate: -90,
      offsetX: 0,
      offsetY: 0,
      style: {
        fontSize: '12px',
        fontFamily: 'YS Text Regular Regular, Arial, Helvetica, sans-serif',
        fontWeight: 600,
        cssClass: 'apexcharts-yaxis-title',
      },
    },
  },
  tooltip: {
    x: {
      format: 'dd MMMM HH:mm',
    },
  },
})
</script>
