const express=require('express');
const { getAllTransaction, addTransaction } = require('../controllers/transactionCtrl');


//router object
const router=express.Router()

//routes
//add transaction POST METHOD
router.post('/add-transaction',addTransaction)
//get mehod transaction
router.post('/get-transaction',getAllTransaction)

module.exports=router;