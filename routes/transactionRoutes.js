const express=require('express');
const { getAllTransaction, addTransaction,editTransaction,deleteTransaction,getAllUserTransactions} = require('../controllers/transactionCtrl');


//router object
const router=express.Router()

//routes
//add transaction POST METHOD
router.post('/add-transaction',addTransaction)

//edit transaction
router.post('/edit-transaction',editTransaction)
//get mehod transaction
router.post('/get-transaction',getAllTransaction)

//delete transaction

router.post('/delete-transaction',deleteTransaction)
router.get('/all-user-transactions', getAllUserTransactions);
module.exports=router;