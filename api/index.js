const ProductRouter = require('./routes/Products');
const Category = require('./routes/Category');
const StoreManager = require('./routes/StoreManager');

const conn = require('./db/connection')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const express =  require('express')
const app = express()

app.use(bodyParser());


//connect to mongo db
mongoose.connect(conn.database,{useNewUrlParser:true,useCreateIndex:true});
const connection = mongoose.connection;
connection.once('open',()=>{
  console.log("Mongodb database connection established successfully");
})
//


//products section
 app.use('/products',ProductRouter);
// //
//
// //Category section
 app.use('/category',Category);
// //
//
// //StoreManager section
 app.use('/storemanager',StoreManager);
// //



//Server connection
app.listen(conn.port, (err)=>{
    if(err){
      console.error(err);
    }
    console.log('Connected to port '+ conn.port)
  });


