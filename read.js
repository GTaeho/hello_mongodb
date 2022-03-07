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

  const cursor = db.collection("student").find();
  cursor.forEach((err, doc) => {
    if (err) console.log(err);

    if (doc != null) {
      console.log(doc);
      client.close();
    }
  });
});
