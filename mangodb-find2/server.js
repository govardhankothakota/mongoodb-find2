const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

let app = express();
app.use(cors());

let employeeSchema = new mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  age: Number,
  country: String,
  department: String,
  profilepic: String,
});
let Employee = new mongoose.model("employees", employeeSchema);

app.get("/employees", async (req, res) => {
  let employeesArray = await Employee.find()
    .skip(100)
    .limit(500)
// .sort("first_name last_name")  
.select("-last_name -_id")
//   .distinct("country")
//   .and([
//     { country: "China" },
//     { gender: "Male" },
//     { age: { $gte: 18, $lte: 60 } },
//   ])
//   .or([
//       { country: "China" },
//       { gender: "Male" },
//       { age: { $gte: 18, $lte: 60 } },
//     ])
// .count();

  res.json(employeesArray);
});
app.listen(7799, () => {
  console.log("Listening to port 7799");
});

let connectToMDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://govardhank:govardhank@brnstudent.z5qymfc.mongodb.net/BRNinfotech?retryWrites=true&w=majority&appName=brnstudent"
    );
    console.log("Successfully connected to MDB");
  } catch (error) {
    console.log("Unable to connect to MDB");
  }
};
connectToMDB();
