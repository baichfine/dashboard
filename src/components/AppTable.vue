<template>
  <v-table
    rounded="lg"
    elevation="3"
  >
    <thead>
      <tr>
        <th
          class="text-center font-weight-bold"
          v-for="item in fetch.value.chartData.header"
          :key="item"
        >
          {{ item }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in fetch.value.arrMetering"
        :key="item.insertedAt"
      >
        <td
          v-for="property in fetch.value.chartData.table"
          :key="property"
          class="text-center"
        >
          {{
            property === 'insertedAt'
              ? fetch.value.newDate(new Date(item[property]), 'hour')
              : item[property]
          }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
defineProps({
  fetch: Object,
})
</script>
