import { computed } from 'vue'
import store from '../store'
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloLink,
  concat,
  split,
} from '@apollo/client/core'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { getMainDefinition } from '@apollo/client/utilities'

const appJWTToken = computed(() => store.getters.jwtToken)
const authMiddleware = new ApolloLink((operation, forward) => {
  if (appJWTToken.value) {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${appJWTToken.value}`,
      },
    })
  }
  return forward(operation)
})
const httpLink = createHttpLink({
  uri: 'https://test.fescom.space/api',
})
const wsLink = new GraphQLWsLink(
  createClient({
    url: 'wss://test.fescom.space/api/graphql-ws',
    options: {
      reconnect: true,
      lazy: true,
      timeout: 30000,
      inactivityTimeout: 30000,
      connectionParams: {
        authToken: `Bearer ${appJWTToken.value}`,
      },
    },
  })
)
const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink
)
const cache = new InMemoryCache()
const apolloClient = new ApolloClient({
  link: concat(authMiddleware, link),
  cache,
})
export { apolloClient }
