const client = require("mongodb").MongoClient;
client.connect("mongodb://localhost:27017/school", (err, db) => {
  if (err) console.log(err);
  console.log("connected : " + db);
  const michael = {name: 'Micahel', age: 15, gender: 'M'}
  db.collection('student').insert(michael)
  db.close();
});
