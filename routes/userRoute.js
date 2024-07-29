const express=require('express')
const userModel = require('../models/userMOdel'); 
const { loginController, registerController } = require('../controllers/userController')

//router object
const router=express.Router()
const userController = require('../controllers/userController');

//routers
//POST|| LOGIN
router.post('/login',loginController)

//POST||REGISTER USER
router.post('/register',registerController)
router.get('/', async (req, res) => {
    try {
      const users = await userModel.find({});
      res.json(users);
    } catch (error) {
      res.status(500).send('Server Error');
    }
  });

module.exports=router