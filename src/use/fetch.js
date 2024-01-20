import { onMounted, computed, ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { consts } from '@/store/consts'
import { useMutation, useLazyQuery } from '@vue/apollo-composable'
import { GET_TOKEN_MUTATION } from '../graphql/queries/mutations'
import { GET_METERING_QUERY } from '../graphql/queries/queries'

function createObj() {
  const store = useStore()
  //Attributes
  const arrMetering = computed(() => store.getters.arrMetering)
  const arrChart = computed(() => store.getters.arrChartNew)
  const loading = ref(true)
  const errorStr = ref({ value: '', error: false })
  const startDate = subtractHours(new Date(), 1)
  const endDate = new Date()
  const chartData = ref(consts.CHART_DATA)
  const chartObject = ref(consts.CHART_OBJECT)

  const variables = reactive({
    startDate: startDate,
    endDate: endDate,
  })
  //Graphql
  const jwtToken = useMutation(GET_TOKEN_MUTATION)
  const metering = useLazyQuery(GET_METERING_QUERY, variables)
  //Hooks
  onMounted(() => {
    initialisation()
  })
  //Functions
  const initialisation = async () => {
    loading.value = true
    await sendToken()
    metering.load()
  }
  const sendToken = async () => {
    await jwtToken.mutate()
    jwtToken.onDone
  }
  const getMetering = async () => {
    if (errorStr.value.error === true) sendToken()
    loading.value = true
    if (errorStr.value.error === false) {
      await metering.refetch()
      metering.onResult
    }
  }
  jwtToken.onDone((res) => {
    errorStr.value = { value: '', error: false }
    store.commit(consts.SET_VALUE, {
      type: consts.SET_VAL_JWT_TOKEN,
      value: res.data.signin.token,
    })
  })
  jwtToken.onError((error) => {
    errorStr.value = {
      value: error,
      error: true,
    }
  })
  metering.onResult((res) => {
    if (!res.loading) {
      store.commit(consts.SET_METERING_ARR, res.data.metering)
      store.commit(consts.SET_CHART_ARR, res.data.metering)
      loading.value = false
    }
  })
  function newDate(date, type) {
    if (type === 'hour') date.setHours(date.getHours() + 3)
    var datestring =
      ('0' + date.getDate()).slice(-2) +
      '.' +
      ('0' + (date.getMonth() + 1)).slice(-2) +
      ' ' +
      ('0' + date.getHours()).slice(-2) +
      ':' +
      ('0' + date.getMinutes()).slice(-2)
    return datestring
  }
  function subtractHours(date, hours) {
    date.setHours(date.getHours() - hours)
    return date
  }

  return {
    loadMetering: loading,
    arrMetering,
    arrChart,
    chartData,
    chartObject,
    errorStr,
    sendToken,
    getMetering,
    newDate,
  }
}
export function useFetch(init = {}) {
  const fetch = reactive({})

  for (const [key] of Object.entries(init)) {
    fetch[key] = createObj()
  }
  return fetch
}
