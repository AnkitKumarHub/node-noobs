//Middleware and Error Handlers

const express = require("express");
const app = express();
const connectDb = require("./src/config/dB.js");
const User = require("./src/models/user.js");

//Route Handler => "use" can be used for all types of requests wether it is get, post, put, delete

// app.use("/user", (req, res, next)=>{
//     console.log("Request to /user");
//     next();
//     // res.send("User Page");
// }, (req, res, next)=>{
//     console.log("Request to /user2 !!");
//     // res.send("User Page 2nd !!");
//     next();
// });

//Handle Auth Middleware for all GET, POST, PUT, DELETE requests
// const {adminAuth, userAuth} = require("./middleware/Auth.js");

// app.use("/admin", adminAuth);

// app.get("/admin/getAllData", (req, res)=>{
//   res.send("Admin Page of all data send ");
// });
// app.get("/admin/deleteData", (req, res)=>{
//   res.send("Admin Page of delete data ");
// });

// app.get("/user", userAuth,  (req, res)=>{
//   res.send("Admin Page of all data send ");
// });

//*********************** DATABASE SCHEMA & MODELS MONGOOSE **********************/

app.use(express.json()); // to read the json data from the body of the request

app.post("/signup", async (req, res) => {
  // creating a new instance of the User Model
  const user = new User(req.body);
  console.log(req.body);

  try {
    await user.save();
    res.send("User Created Successfully !!");
  } catch (error) {
    res.status(400).send("Error in creating user !!" + error.message);
  }
});

//finding one user by email
app.get("/user", async (req, res) => {
  const userEmail = req.body.email;
  try {
    const user = await User.find({ email: userEmail });
    if (user.length === 0) {
      res.status(404).send("User Not Found !!");
    } else {
      res.send(user);
    }
  } catch (error) {
    res.status(404).send("Error in finding user !!");
  }
});

//Feed API - GET /feed - get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(404).send("Error in finding user !!");
  }
});

//Delete a User from the database by ID
app.delete("/user", async (req, res) => {
  const userId = req.body._id;

  try {
    await User.findByIdAndDelete(userId);
    res.send("User Deleted Successfully !!");
  } catch (error) {
    res.status(404).send("Error in deleting user !!");
  }
});

//Update data of a User from the database by ID
app.patch("/user", async (req, res) => {
  const userId = req.body._id;
  const updateData = req.body;
  // console.log(updateData);


  try {
    const ALLOWED_UPDATES = ["photoUrl", "about", "skills", "age"];
    const isUpdateAllowed = Object.keys(updateData).every((update) =>
      ALLOWED_UPDATES.includes(update)
    );
    if (!isUpdateAllowed) {
      throw new Error("Invalid Update !!");
    }

    if(data?.skills?.length > 10){
      throw new Error("Skills should be less than 10 !!");
    }
    
    await User.findByIdAndUpdate(userId, updateData, {
      runValidators: true,
    });
    res.send("User Updated Successfully !!");
  } catch (error) {
    res.status(400).send("Error in updating user !!" + error.message);
  }
});

connectDb()
  .then(() => {
    console.log("Database Connected");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Error in connecting database", err);
  });
