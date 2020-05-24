let  Product = require('../models/Product');
var uuid = require('uuid');
const express =  require('express')
const app = express();
var fileupload = require('express-fileupload');
var  cloudinary = require('cloudinary').v2;

app.use(fileupload({useTempFiles:true}));

cloudinary.config({                        //cloud configuration

   cloud_name : 'zerobugs',
   api_key : '563784119216219',
   api_secret : 'rfY6hZAkyurP3oJRGkDNMt8DzeU'
});

//find   Store Manager  Products
 exports.Find_Product = (req,res,next)=>{
    Product.find({
      'stockmanagerid': req.params.stockmanagerid})
    .then(Products => res.json(Products))
    .catch(err=>res.status(400).json("Error:"+err))

}

    // find Product
  exports.Find_Edit_Product = (req,res,next)=>{    
     Product.find({'productid':req.params.productid})
     .then(Productfind=>res.json(Productfind))
     .catch(err=>res.status(400).json("Error:"+err))
  
  }




  //find all products
  exports.Find_All_Product = (req,res,next)=>{

    Product.find()
    .then(products => res.json(products))
     .catch(err=>res.status(400).json('Error :'+err));

  };



       //Add Products to db

 exports.Store_Product = (req,res,next)=>{

    const  productid  = "P-"+ uuid.v4();
    const description = req.body.description;
    const  maincategory = req.body.maincategory;
    const  subcategory = req.body.subcategory;
    const  price = Number(req.body.price);
    const  quantity = Number(req.body.quantity);
    const  discount = Number(req.body.discount);
    const stockmanagerid = req.body.stockmanagerid;

   const  newProduct = new Product({
    productid,   
    description,
    maincategory,
    subcategory,
    price,
    quantity,
    discount,
    stockmanagerid,
   });

   if(req.file){

      //save images in cloud 
  cloudinary.uploader.upload(req.file.path,function(err,result){    //save images in cloud 
      console.log(result)
   
       newProduct.image=result.url;
       console.log(newProduct.image);
       newProduct.save()
   .then(()=>res.json('Product Added!'))
    .catch(err=>res.status(400).json("Error:"+err));
      })
   }
   console.log(newProduct);
  
   
}


          //update the product

 exports.Update_Product = (req,res,next)=>{
       
     Product.findOne({'productid':req.params.productid})
     .then(product =>{
        // product.productid  = req.body.productid;
         product.description = req.body.description;
         product.maincategory = req.body.maincategory;
         product.subcategory  = req.body.subcategory;
         product.price = Number(req.body.price); 
         product.quantity =Number(req.body.quantity);
         product.discount =Number(req.body.discount);
         product.stockmanagerid =req.body.stockmanagerid;

            
         if(req.file){

            cloudinary.uploader.upload(req.file.path,function(err,result){
                console.log(result)
                 product.image=result.url;
                 console.log(product.image);
                 product.save()
             .then(()=>res.json('Product Updated!'))
              .catch(err=>res.status(400).json("Error:"+err));
                })
             }
     })
     .catch(err=> res.status(400).json('Err'+err)) 
     
 }

       //Delete the product

exports.Delete_Product = (req,res,next)=>{
       Product.findOneAndDelete({'productid':req.params.productid})
       .then(()=>res.json('Product Deleted'))
       .catch(err=>res.status(400).json('Error'+err))

}