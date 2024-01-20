import gql from 'graphql-tag'

export const SUBSCRIBE_METERING = gql`
  subscription {
    newSample {
      totalP
      totalQ
      totalS
      insertedAt
    }
  }
`
