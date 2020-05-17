const router = require('express').Router();
const Cart = require('../models/Cart');
const PlaceOrder = require('../models/PlaceOrder')
const CartControlller = require('../controllers/Cart')
var uuid = require('uuid');

router.route('/addToCart').post((req,res)=>{

    const Product_ID = req.body.Product_ID;
    const Quntity = req.body.Quntity;
    const Price = req.body.Price;

    const Cartdet = new Cart({
        Product_ID,
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
    const deliverHome = req.body.deliverHome;
    const address1 = req.body.address1;
    const state = req.body.state;
    const postalCode = req.body.pos

    const Cartdet = new PlaceOrder({
        fullname,
        email,
        address,
        address1,
        state,
        postalCode,
        contactNo,
        OrderId,
        TotalCost,
        cardNumber,
        cvv,
        expireDate,
        TrackingNum,
        deliverHome
    });

    Cartdet.save()
        .then(()=>res.json('Order Plased!'))
        .catch(err=>res.status(400).json("Error:"+err));
});

router.get('/findOrder',CartControlller.Find_All_OrderDetails);
router.get('/findUserOrder/:fullname',CartControlller.Find_All_OrderDetails_User);


module.exports = router;
