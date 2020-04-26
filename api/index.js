const Category = require('./routes/Category');
const StoreManager = require('./routes/StoreManager');
const User = require('./routes/User');

const conn = require('./db/connection')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const express =  require('express')
const app = express();
const  cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());



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
 app.use('/uploads',express.static('uploads'));
// //
//
// //Category section
 app.use('/category',Category);
// //
//
// //StoreManager section
 app.use('/storemanager',StoreManager);
// //

// //User section
app.use('/user',User);
// //



//Server connection
app.listen(conn.port, (err)=>{
    if(err){
      console.error(err);
    }
    console.log('Connected to port '+ conn.port)
  });






















const Cart = require('./routes/Cart');
app.use('/cart',Cart);

