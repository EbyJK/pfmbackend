// const express=require('express')
// const cors=require('cors')
// const morgan=require('morgan')
// const dotenv=require('dotenv')
// const colors=require('colors')
// const connectDb = require('./config/connectDb')
// const userRoute = require('./routes/userRoute');

// // config dot env file
// dotenv.config();
// //database call
// connectDb();
// //rest object
// const app=express()



// //middlewares
// app.use(morgan('dev'))
// app.use(cors())
// app.use(express.json())


// //routes
// // app.get('/',(req,res)=>{

// //         res.send('<h1>Hello From server</h1>')

// // })


// app.use('/api/v1/users',require('./routes/userRoute'));
// //port
// const PORT=8090|| process.env.PORT

// //listen server
// app.listen(PORT,()=>{
//     console.log(`Server running on port ${PORT}`)
// })

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDb = require('./config/connectDb');
const userRoute = require('./routes/userRoute');
const portfinder = require('portfinder');

// config dot env file
dotenv.config();

//database call
connectDb();

//rest object
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//routes
app.use('/api/v1/users', require('./routes/userRoute'));

// Use portfinder to get an available port
portfinder.basePort = process.env.PORT || 8090;
portfinder.getPort((err, port) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    // Start the server on the found port
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
});
