<template>
  <v-container class="buttonChart"
    ><v-card
      class="chart1"
      :loading="fetch.value.loadMetering"
      rounded="lg"
      elevation="3"
      title="Мониторинг режимов работы системы электропитания"
      :subtitle="
        fetch.value.loadMetering
          ? 'Авторизация...'
          : 'Успешно! Данные актуальны на ' +
            fetch.value.newDate(new Date(), 'no')
      "
      ><div class="buttonMetering">
        <v-btn
          :disabled="fetch.value.loadMetering"
          @click="fetch.value.getMetering"
          v-if="!fetch.value.errorStr.error"
          >Обновить</v-btn
        >
        <div
          v-else
          class="failed"
        >
          <div class="v-card-subtitle">
            Ошибка! {{ fetch.value.errorStr.value }}
          </div>
          <v-btn @click="fetch.value.getMetering">Попробовать еще раз</v-btn>
        </div>
      </div>
    </v-card></v-container
  >
</template>

<script setup>
defineProps({
  fetch: Object,
})
</script>
