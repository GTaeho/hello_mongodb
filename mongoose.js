const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/testdb");

const db = mongoose.connection;

db.on("error", () => {
  console.log("Connection failed!");
});

db.once("open", () => {
  console.log("Connected!");
});

// Schema 생성
const student = mongoose.Schema({
  name: "string",
  address: "string",
  age: "number",
});

const Student = mongoose.model("testdb", student);

const newStudent = new Student({ name: "Taeho", address: "Busan", age: 38 });

newStudent.save((err, data) => {
  if (err) console.log(err);
  console.log("Saved!");
});
