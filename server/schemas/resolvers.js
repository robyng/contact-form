const { Message } = require('../models');

const resolvers = {
    // Query: {
    //   helloWorld: () => {
    //     return 'Hello world!!!!';
    //   }
    // }
    Query: {
      messages: async () => {
        return Message.find().sort({ createdAt: -1 });
      }
    },
    
    Mutation: {
      addMessage: async (parent, args) => {
        
        const message = await Message.create({...args});
  
        return message;

        
      }
    }
   
  };
  
  module.exports = resolvers;