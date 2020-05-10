let Order = require('../models/PlaceOrder');
exports.Find_All_OrderDetails = (req,res,next)=>{

    Order.find()
        .then(products => res.json(products))
        .catch(err=>res.status(400).json('Error :'+err));

};


exports.Find_All_OrderDetails_User = (req,res,next)=>{
    Order.find({'fullname':req.params.fullname})
        .then(orderDetails => res.json(orderDetails))
        .catch(err=>res.status(400).json("Error:"+err))
}

