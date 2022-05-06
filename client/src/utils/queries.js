import { gql } from '@apollo/client';

export const QUERY_MESSAGES = gql`
  query messages($username: String, $email: String, $messageText: String) {
    thoughts(username: $username, email: $email, messageText: $messageText) {
      _id
      createdAt
      username
      email
      messageText
    }
  }
`;

export const QUERY_THOUGHT = gql`
  query message($id: ID!) {
    message(_id: $id) {
        _id
        createdAt
        username
        email
        messageText
    }
  }
`;