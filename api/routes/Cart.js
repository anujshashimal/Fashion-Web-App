const router = require('express').Router();
const Cart = require('../models/Cart');

router.route('/addToCart').post((req,res)=>{

    const Product_ID = req.body.Product_ID;
    const User_ID = req.body.User_ID;
    const Quntity = req.body.Quntity;
    const Price = req.body.Price;

    const Cartdet = new Cart({
        Product_ID,
        User_ID,
        Quntity,
        Price
    });

    Cartdet.save()
        .then(()=>res.json('Added to Cart!'))
        .catch(err=>res.status(400).json("Error:"+err));

});

module.exports = router;
