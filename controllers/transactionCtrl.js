
// const transactionModel=require('../models/transactionModel')
// const moment= require('moment')
// const getAllTransaction=async(req,res)=>{
//         try{    

//                 const {frequency,selectedDate,userid,type} = req.body //destructure
//                 const transactions=await transactionModel.find({
//                     // date:{
//                     //     $gt: moment().subtract(Number(frequency),'d').toDate(),
//                     // },
//                     ...(frequency !== 'custom'? {
//                         date:{
//                                 $gt: moment().subtract(Number(frequency),'d').toDate(),
//                             },

//                     }:{
//                         date:{
//                             $gte: selectedDate[0],
//                             $lte: selectedDate[1],
//                          },

//                     }),
//                     userid:req.body.userid,
//                     ...(type !== 'all' && {type})
//                 });
//                 res.status(200).json(transactions);
//         }
//         catch(error){
//                 console.log(error);
//                 res.status(500).json(error)
//         }
// }

// const editTransaction=async(req,res)=>{
//     try{
//         await transactionModel.findOneAndUpdate({_id:req.body.transactionId},req.body.payload);
//         res.status(200).send('Edit Successfully')


//     }
//     catch(error){
//         console.log(error);
//             res.status(500).json(error);

//     }
// }

// const addTransaction=async(req,res)=>{
//     try{
//         const newTransaction=new transactionModel(req.body)
//         await newTransaction.save()
//         res.status(201).send('transaction created')
//     }
//     catch(error){
//             console.log(error);
//             res.status(500).json(error);

//     }

// };
// module.exports={getAllTransaction,addTransaction,editTransaction}



const transactionModel = require('../models/transactionModel');
const moment = require('moment');

const getAllTransaction = async (req, res) => {
  try {
    const { frequency, selectedDate, userid, type } = req.body;

    let dateFilter = {};

    if (frequency !== 'custom') {
      dateFilter = {
        date: {
          $gt: moment().subtract(Number(frequency), 'd').toDate(),
        },
      };
    } else {
      dateFilter = {
        date: {
          $gte: moment(selectedDate[0]).startOf('day').toDate(),
          $lte: moment(selectedDate[1]).endOf('day').toDate(),
        },
      };
    }

    const transactions = await transactionModel.find({
      userid,
      ...dateFilter,
      ...(type !== 'all' && { type }),
    });

    res.status(200).json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
const deleteTransaction =async(req,res)=>{
    try{
                await transactionModel.findOneAndDelete({_id:req.body.transactionId})
                res.status(200).send('transaction deleted');
    }
     catch(error){
        console.log(error);
        res.status(500).json(error);
     }

}
const getAllUserTransactions = async (req, res) => {
  try {
    const transactions = await transactionModel.find();
    res.status(200).json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching all user transactions' });
  }
};

const editTransaction = async (req, res) => {
  try {
    await transactionModel.findOneAndUpdate({ _id: req.body.transactionId }, req.body.payload);
    res.status(200).send('Edit Successfully');
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const addTransaction = async (req, res) => {
  try {
    const newTransaction = new transactionModel(req.body);
    await newTransaction.save();
    res.status(201).send('Transaction created');
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { getAllTransaction, addTransaction, editTransaction,deleteTransaction,getAllUserTransactions  };
