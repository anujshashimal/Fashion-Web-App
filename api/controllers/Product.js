let  Product = require('../models/Product');


//find   Store Manager  Products
 exports.Find_Product = (req,res,next)=>{
    Product.find({
      'stockmanagerid': req.params.stockmanagerid})
    .then(Products => res.json(Products))
    .catch(err=>res.status(400).json("Error:"+err))

}


       //Add Products to db

 exports.Store_Product = (req,res,next)=>{

    //const productid = req.body.productid;
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
    stockmanagerid,
   });

   if(req.file){
       newProduct.image = req.file.path
   }
   newProduct.save()
   .then(()=>res.json('Product Added!'))
   .catch(err=>res.status(400).json("Error:"+err));

}


          //update the product

 exports.Update_Product = (req,res,next)=>{
       
     Product.findByIdAndUpdate(req.params.productid)
     .then(product =>{
         product.description = req.body.description;
         product.maincategory =  req.body.maincategory;
         product.subcategory  =   req.body.subcategory;
         product.price  =  Number(req.body.price); 
         product.quantity = Number(req.body.quantity);

         if(req.file){
            newProduct.image = req.file.path
        }

         product.save()
         .then(()=>res.json('Product Updated'))
         .catch(err=>res.status(400).json('Error'+err));
     })
     .catch(err=> res.status(400).json('Err'+err));
     
 }

       //Delete the product

exports.Delete_Product = (req,res,next)=>{

       Product.findOneAndDelete({'productid':req.params.productid})
       .then(()=>res.json('Product Deleted'))
       .catch(err=>res.status(400).json('Error'+err))

}