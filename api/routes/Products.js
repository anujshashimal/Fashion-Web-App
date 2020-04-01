const router = require('express').Router();
const multer = require('multer');

let  Product = require('../models/Product');

router.route('/:id').get((req,res)=>{
    Product.find()
    .then(Products => res.json(Products))
    .catch(err=>res.status(400).json("Error:"+err))
});

router.route('/add').post((req,res)=>{
    const productid = req.body.productid;
    const description = req.body.description;
    const  maincategory = req.body.maincategory;
    const  subcategory = req.body.subcategory;
    const  price = Number(req.body.price);
    const  quantity = Number(req.body.quantity);
    const stockmanagerid = req.body.stockmanagerid;

   const  newProduct = new Product({
    productid,
    description,
    maincategory,
    subcategory,
    price,
    quantity,
    stockmanagerid
   });

   newProduct.save()
   .then(()=>res.json('Product Added!'))
   .catch(err=>res.status(400).json("Error:"+err));

});

module.exports = router;
