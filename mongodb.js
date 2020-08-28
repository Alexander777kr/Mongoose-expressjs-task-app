// CRUD Create Read Update Delete

// const mongodb = require('mongodb');

// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongo.ObjectId;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database');
    }
    const db = client.db(databaseName);

    db.collection('tasks')
      .deleteOne({
        description: 'Task 1',
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));

    // db.collection('users')
    //   .deleteMany({
    //     age: 27,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => console.log(error));

    // db.collection('tasks')
    //   .updateMany(
    //     {},
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // const updatePromise = db.collection('users').updateOne(
    //   { _id: ObjectID('5f48cfa8670e09130061c00b') },
    //   {
    //     $set: {
    //       name: 'Mike',
    //     },
    //   }
    // );

    // updatePromise
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection('users').findOne(
    //   { _id: ObjectID('5f48d16e64d530186442dd48') },
    //   (error, user) => {
    //     if (error) {
    //       return console.log('Unable to fetch');
    //     }

    //     console.log(user);
    //   }
    // );

    // db.collection('users')
    //   .find({ age: 27 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection('users')
    //   .find({ age: 27 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    // db.collection('tasks').findOne(
    //   { _id: ObjectID('5f48ddc830e4af2048c29a6c') },
    //   (error, task) => {
    //     console.log(task);
    //   }
    // );

    // db.collection('tasks')
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     console.log(tasks);
    //   });

    // db.collection('users').insertOne(
    //   {
    //     _id: id,
    //     name: 'Andrew',
    //     age: 27,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection('users').insertMany(
    //   [
    //     {
    //       name: 'Jen',
    //       age: 28,
    //     },
    //     {
    //       name: 'Gunther',
    //       age: 27,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert users');
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection('tasks').insertMany(
    //   [
    //     {
    //       description: 'Task 1',
    //       completed: true,
    //     },
    //     {
    //       description: 'Task 2',
    //       completed: true,
    //     },
    //     {
    //       description: 'Task 3',
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert documents');
    //     }

    //     console.log(result.ops);
    //   }
    // );
  }
);
