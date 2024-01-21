import { createStore } from 'vuex'
import { consts } from '@/store/consts'

export default createStore({
  state() {
    return {
      jwtToken: '',
      arrMetering: [],
      arrChart: [[], [], [], [], [], [], [], [], [], []],
      arrChartNew: {},
    }
  },
  getters: {
    jwtToken(state) {
      return state.jwtToken
    },
    arrMetering(state) {
      return state.arrMetering
    },
    arrChart(state) {
      return state.arrChart
    },
    arrChartNew(state) {
      return state.arrChartNew
    },
  },
  mutations: {
    setValue(state, payload) {
      switch (payload.type) {
        case consts.SET_VAL_JWT_TOKEN: {
          state.jwtToken = payload.value
          break
        }
        default: {
          console.log('Invalid choice')
          break
        }
      }
    },
    setState(state, payload) {
      switch (payload.type) {
        case consts.SET_STATE_WIDGETS: {
          state.stWidgets = payload.value
          break
        }
        default: {
          console.log('Invalid choice')
          break
        }
      }
    },
    setMeteringArr(state, payload) {
      state.arrMetering = Object.values(payload).reverse()
      console.log(Object.values(payload).reverse())
    },
    setChartArr(state, payload) {
      payload.forEach((item, key) => {
        let date = new Date(item['insertedAt'])
        let newDate = date.setHours(date.getHours() + 3)
        state.arrChart[0][key] = newDate
        state.arrChart[1][key] = item['irmsL1'].toFixed(2)
        state.arrChart[2][key] = item['irmsL2'].toFixed(2)
        state.arrChart[3][key] = item['irmsL3'].toFixed(2)
        state.arrChart[4][key] = item['totalP'].toFixed(2)
        state.arrChart[5][key] = item['totalQ'].toFixed(2)
        state.arrChart[6][key] = item['totalS'].toFixed(2)
        state.arrChart[7][key] = item['urmsL1'].toFixed(2)
        state.arrChart[8][key] = item['urmsL2'].toFixed(2)
        state.arrChart[9][key] = item['urmsL3'].toFixed(2)
      })

      state.arrChartNew = {
        insertedAt: state.arrChart[0],
        irmsL: [
          {
            name: 'Фаза A',
            data: state.arrChart[1],
          },
          {
            name: 'Фаза B',
            data: state.arrChart[2],
          },
          {
            name: 'Фаза C',
            data: state.arrChart[3],
          },
        ],
        total: [
          {
            name: 'Активная (кВт)',
            data: state.arrChart[4],
          },
          {
            name: 'Реактивная (кВАр)',
            data: state.arrChart[5],
          },
          {
            name: 'Полная (ВА)',
            data: state.arrChart[6],
          },
        ],
        urmsL: [
          {
            name: 'Фаза A',
            data: state.arrChart[7],
          },
          {
            name: 'Фаза B',
            data: state.arrChart[8],
          },
          {
            name: 'Фаза C',
            data: state.arrChart[9],
          },
        ],
      }
    },
  },
  actions: {},
})
