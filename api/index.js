const express =  require('express')
const conn = require('./db/connection')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
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
const ProductRouter = require('./routes/Products');
app.use('/products',ProductRouter);
//



//Server connection
app.listen(conn.port, (err)=>{
    if(err){
      console.error(err);
    }
    console.log('Connected to port '+ conn.port)
  });


