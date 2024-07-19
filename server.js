const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const dotenv=require('dotenv')
const colors=require('colors')
const connectDb = require('./config/connectDb')
// config dot env file
dotenv.config();
//database call
connectDb();
//rest object
const app=express()



//middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())


//routes
app.get('/',(req,res)=>{

        res.send('<h1>Hello From server</h1>')

})
//port
const PORT=8088 || process.env.PORT

//listen server
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})