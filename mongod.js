const mClient = require("mongodb").MongoClient;

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbname = "schooldb";

// Use connect method to connect to the server
mClient.connect(url, (err, client) => {
  if (err) console.log(err);
  const db = client.db(dbname);
  console.log("connected");
  const michael = { name: "Micahel", age: 15, gender: "M" };
  db.collection("student").insertOne(michael, (err, result) => {
    if (err) console.log("Unable to insert student", err);
    console.log(result);
    client.close();
  });
});
