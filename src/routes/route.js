const express = require('express');
const router = express.Router();
const UserController = require("../controllers/userController")
// const internController=require("../controllers/internController")

router.post('/register', UserController.CreateUser)


module.exports = router