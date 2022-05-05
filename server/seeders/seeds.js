const { faker } = require('@faker-js/faker')
const db = require('../config/connection');
const { Thought, User, Message } = require('../models');


db.once('open', async () => {
  await Thought.deleteMany({});
  await User.deleteMany({});
  await Message.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 20; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create friends
  for (let i = 0; i < 100; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { _id: userId } = createdUsers.ops[randomUserIndex];

    let friendId = userId;

    while (friendId === userId) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      friendId = createdUsers.ops[randomUserIndex];
    }

    await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
  }

  // create messages RMG
  let createdMessages = [];
  for (let i =0; i < 20; i+= 1){
    const username = faker.internet.userName();

    const email = faker.internet.email(username);

    const messageText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    await Message.create({ username, email, messageText });
  }
  // create thoughts
  let createdThoughts = [];
  for (let i = 0; i < 100; i += 1) {
    const thoughtText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdThought = await Thought.create({ thoughtText, username });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { thoughts: createdThought._id } }
    );

    createdThoughts.push(createdThought);
  }

  // create reactions
  for (let i = 0; i < 100; i += 1) {
    const reactionBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username } = createdUsers.ops[randomUserIndex];

    const randomThoughtIndex = Math.floor(Math.random() * createdThoughts.length);
    const { _id: thoughtId } = createdThoughts[randomThoughtIndex];

    await Thought.updateOne(
      { _id: thoughtId },
      { $push: { reactions: { reactionBody, username } } },
      { runValidators: true }
    );
  }

  console.log('all done!');
  process.exit(0);
});

// const messages =  [ {
//     username: "Robyn Graham",
//     email: "rob@gmail.com",
//     messageText: "hey how are you",
//     createdAt: "Apr 24th, 2022 at 10:15 pm"
// }, 
// {
//     username: "Robyn Graham2",
//     email: "robb@gmail.com",
//     messageText: "I have a question!",
//     createdAt: "Apr 24th, 2022 at 10:005 pm"
// }


// ]
 



// it('does something', async done => {
//   // Add users to the database
//   for (const u of messages) {
//     const message = new Message(u)
//     await message.save()
//   }

//   // Create the rest of your test here
// })
