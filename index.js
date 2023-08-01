const express = require("express");
const app = express();
const helperController = require("./controller/helper.controller");
const UserModel = require("./model/user.model");
const { v4 } = require("uuid");

let user = [];
// Middleware
app.use(express.json()); // Get the body in a POST API
app.use(express.urlencoded({ extended: false }));

// Custom  Middleware
// Authentication Token
// 10 APIS
// Login / SignUp
// 9 APIs -> Token
// helper.js

//Username
//password
//role -> admin or normal user

// username, password, role -> evyan123

// evyan123 -> username, password, role
// JWT, Oauth

const tokenFunction = function (req, res, next) {
  // if(url !=login){

  // }
  req["headers"] = "abcd1234";
  //   res.status("202"); // res.send
  console.log("Middleware", req.headers);
  next();
};
app.use(tokenFunction);

app.get("/", (req, res) => {
  //   let num1 = 10;
  //   let num2 = 20;
  //   let sum = helperController.add(num1, num2);
  //   res.render("home.ejs", {
  //     num1: num1,
  //     num2: num2,
  //     sum: sum,
  //   });
  res.render("home.ejs");
});

// Validation
app.post("/login", async (req, res) => {
  console.log(v4());
  try {
    let { username, password, phone } = req.body;
    let newUser = new UserModel({
      username: username,
      password: password,
      phone: phone,
    });
    await newUser.validate();
    user.push(newUser);
    res.send(`Success. Your entry is updated. Refer code is ${v4()}`);
  } catch (err) {
    res.send(err.message);
  }
});

// MVC Architecture
// Model
// View
// Controller

// Mongoose MERN -> MongoDB

// class User
// private string userName;
// private string password;

// <input minlength="8"/>
// if(name.length <8){} else{}
// backend

app.listen(8081);
