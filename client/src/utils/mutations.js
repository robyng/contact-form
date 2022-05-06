import { gql } from '@apollo/client';

export const ADD_MESSAGE = gql`
  mutation addMessage($username: String!, $email: String!, $messageText: String!) {
    addMessage(username: $username, email: $email, messageText: $messageText) {
      _id
      createdAt
      username
      email
      messageText
    }
  }
`;