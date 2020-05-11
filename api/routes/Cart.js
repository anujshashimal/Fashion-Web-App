const router = require('express').Router();
const Cart = require('../models/Cart');
const PlaceOrder = require('../models/PlaceOrder')
const CartControlller = require('../controllers/Cart')
var uuid = require('uuid');

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


router.route('/PlaceOrder').post((req,res)=>{

    const fullname = req.body.fullname;
    const email = req.body.email;
    const address = req.body.address;
    const contactNo = req.body.contactNo;
    const OrderId = "ORDER-"+ uuid.v1();
    const TrackingNum = "TRACK-" + uuid.v1();
    const TotalCost = req.body.TotalCost;
    const cardNumber = req.body.cardNumber;
    const cvv = req.body.cvv;
    const expireDate = req.body.expireDate;


    const Cartdet = new PlaceOrder({
        fullname,
        email,
        address,
        contactNo,
        OrderId,
        TotalCost,
        cardNumber,
        cvv,
        expireDate,
        TrackingNum
    });

    Cartdet.save()
        .then(()=>res.json('Order Plased!'))
        .catch(err=>res.status(400).json("Error:"+err));
});

router.get('/findOrder',CartControlller.Find_All_OrderDetails);
router.get('/findUserOrder/:fullname',CartControlller.Find_All_OrderDetails_User);


module.exports = router;
