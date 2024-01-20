export const consts = {
  //Mutations
  SET_VALUE: 'setValue',
  SET_VAL_JWT_TOKEN: 'setJwtToken',
  SET_METERING_ARR: 'setMeteringArr',
  SET_CHART_ARR: 'setChartArr',
  //Data states
  CHART_DATA: {
    header: [
      'Время',
      'Ток фазы A',
      'Ток фазы B',
      'Ток фазы C',
      'Мощность активная',
      'Мощность реактивная',
      'Мощность полная',
      'Напряжение фазы A',
      'Напряжение фазы B',
      'Напряжение фазы C',
    ],
    table: [
      'insertedAt',
      'irmsL1',
      'irmsL2',
      'irmsL3',
      'totalP',
      'totalQ',
      'totalS',
      'urmsL1',
      'urmsL2',
      'urmsL3',
    ],
  },
  CHART_OBJECT: [
    {
      dataArr: 'total',
      colors: ['#ff7e67', '#68b0ab', '#87b650'],
      text: 'Мощность, кВт',
      title: 'График мощности',
      classCart: 'chart1',
    },
    {
      dataArr: 'irmsL',
      colors: ['#4e89ae', '#ed6663', '#ffa372'],
      text: 'Электрический ток, А',
      title: 'График силы электрического тока',
      classCart: 'chart1',
    },
    {
      dataArr: 'urmsL',
      colors: ['#008FFB', '#00E396', '#FEB019'],
      text: 'Напряжение, В',
      title: 'График электрического напряжения',
      classCart: 'chart2',
    },
  ],
}
