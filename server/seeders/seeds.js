const messages =  [ {
    username: "Robyn Graham",
    email: "rob@gmail.com",
    messageText: "hey how are you",
    createdAt: "Apr 24th, 2022 at 10:15 pm"
}, 
{
    username: "Robyn Graham2",
    email: "robb@gmail.com",
    messageText: "I have a question!",
    createdAt: "Apr 24th, 2022 at 10:005 pm"
}


]

const Message = require('../models/Message') // Link to User model 

it('does something', async done => {
  // Add users to the database
  for (const u of messages) {
    const message = new Message(u)
    await message.save()
  }

  // Create the rest of your test here
})
