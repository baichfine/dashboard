import gql from 'graphql-tag'

export const GET_METERING_QUERY = gql`
  query ($startDate: NaiveDateTime!, $endDate: NaiveDateTime!) {
    metering(
      filter: { sampleBetween: { startDate: $startDate, endDate: $endDate } }
    ) {
      frequency
      insertedAt
      totalApEnergy
      totalP
      totalQ
      totalS
      irmsL1
      irmsL2
      irmsL3
      urmsL1
      urmsL2
      urmsL3
    }
  }
`
// frequency
// irmsL1
// irmsL2
// irmsL3
// mrid
// totalApEnergy
// urmsL1
// urmsL2
// urmsL3
