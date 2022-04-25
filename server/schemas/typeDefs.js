// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Query {
  messages: [Message] 
}
type Message {
_id: ID
username: String
email: String
messageText: String
createdAt: String
  }

`;



// export the typeDefs
module.exports = typeDefs;