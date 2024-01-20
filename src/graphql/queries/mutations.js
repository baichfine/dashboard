import gql from 'graphql-tag'

export const GET_TOKEN_MUTATION = gql`
  mutation {
    signin(username: "test", password: "Z6sYLydFhm") {
      token
    }
  }
`
