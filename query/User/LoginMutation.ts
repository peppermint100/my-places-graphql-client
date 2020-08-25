import { gql } from "@apollo/client"

export const LoginMutation = gql`
mutation login($data: LoginRequest!) {
  login(data: $data) {
    email
    username
  }
}
`
