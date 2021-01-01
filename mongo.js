const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;
// same due to destructuring
const { MongoClient } = mongodb;

const databaseName = "task-manager";

MongoClient.connect(
    process.env.MONGODB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error, client) => {
        if (error) {
            return console.log("Unable to connect to DB.");
        }
        console.log("Connected");
        const db = client.db(databaseName);

        // db.collection("users").findOne({ name: "Dwij", age: 1 }, (error, user) => {
        //   if (error) {
        //     return console.log("Unable to fetch");
        //   }

        //   console.log(user);
        // });

        // db.collection("users")
        //   .find({ age: "19" })
        //   .toArray((error, users) => {
        //     console.log(users);
        //   });

        // db.collection("tasks").findOne({ _id: 1 }, (error, task) => {
        //   if (error) {
        //     return console.log("Unable to fetch");
        //   }

        //   console.log(task);
        // });

        db.collection("tasks")
            .find({ completed: false })
            .toArray((error, tasks) => {
                console.log(tasks);
            });
    }
);
