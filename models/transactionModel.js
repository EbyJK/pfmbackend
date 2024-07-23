const mongoose=require('mongoose');
const transactionSchema=new mongoose.Schema({       
        userid:{
                type:String,
                required:[true,'userid is required']
        },

         amount:{
            type: Number,
            required:[true,'amount is required']
         },
         type:{
                type:String,
                required:[true,'type is required']
         },
         category:{
                type:String,
                required:[true,'category is required']
         },
         date:{
                type:Date,
                required:[true,'date is required'],
                default:Date.now
         },
            description:{
                type:String,
                required:[true,'description is required']
            }

},{timestamp:true})
const transactionModel=mongoose.model('transactions',transactionSchema)

module.exports= transactionModel;