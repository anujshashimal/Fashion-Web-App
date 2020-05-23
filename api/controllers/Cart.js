let Order = require('../models/PlaceOrder');
let Product = require('../models/Product')
const nodeailer = require("nodemailer");
const process = require('process');
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
let WatchListItems = require('../models/WatchList')

const path = require('path');
const ABSPATH = path.dirname(process.mainModule.filename)
console.log(ABSPATH)
let transporter = nodeailer.createTransport({
    service: "gmail",
    auth: {
        user: "sliitfashionwebapp@gmail.com",
        pass: "sliit@123"
    },
});

exports.Find_All_OrderDetails = (req,res,next)=>{

    Order.find()
        .then(products => res.json(products))
        .catch(err=>res.status(400).json('Error :'+err));

};


exports.Find_All_OrderDetails_User = (req,res,next)=>{
    Order.find({'fullname':req.params.fullname})
        .then(orderDetails => {
            res.json(orderDetails)
            res.json(orderDetails.forEach(key => {
                let sentinfo = {
                    from: 'sanduntharaka258@gmail.com',
                    to: key.email,
                    subject: "Your Order Delivered",
                    html:
                        '<form style="background-color: #ffffff" ' +
                        '<h2> Hi ' + key.fullname + '</h2>' +
                        ', </h1> <br /> <br />' +' <img src="cid:Design01" style="width: 500px" /> ' +' <br /> <br />'+
                        '<p> Thank you very much for the Order. Your payment is successfully completed. Your order has been received and is now being processed. Your Order details are shown below for your references Thank you very much!  </p>' +
                        '<h2> Payment Info </h2>' +'</br>'+
                        '<h3> Your Total Amount of Payment is: : ' + key.TotalCost + '</h3>'+
                        '<h3> Your Order ID is : #' + key.OrderId + '</h3>'+
                        '<h3> Your Tracking ID is : ' + key.TrackingNum  + '</h3>' +
                        '<h2> Customer Details </h2>' +'</br>'+
                        '<h3> Full Name :' + key.fullname+ '</h3>'+'</br>'+
                        '<h3> Email :' + key.email+ '</h3>'+'</br>'+
                        '<h3> Tel :' + key.contactNo+ '</h3>'+'</br>'+
                        '<h2> Shipping Address </h2>' +'</br>'+
                        '<h3> Full Name :' + key.state+ '</h3>'+'</br>'+
                        '<h3> Email :' + key.address+ '</h3>'+'</br>'+
                        '<h3> Tel :' + key.address1+ '</h3>'+'</br>'+
                        '</form>',
                    attachments: [{
                        filename: 'Design01.png',
                        path: ABSPATH + "/Design01.png",
                        cid: 'Design01'
                    }]
                }
                transporter.sendMail(sentinfo, (err, object) => {
                    if (err) {
                        console.log(err);
                    } else {
                        function messageCallback(error, res) {
                            if (error === null) {
                                console.log(`Messaging response for messaging phone number:`);
                            } else {
                                console.error("Unable to send message. " + error);
                            }
                        }
                    }
                });
                }


            ))}).catch(err=>res.status(400).json("Error:"+err))
}


exports.Find_Watchlist_Items = (req,res,next)=>{
    WatchListItems.find({'userID':req.params.userID})
        .then(orderDetails => {
            res.send(orderDetails)
            console.log(orderDetails)
        })

}


exports.Delete_WatchList_Items = (req,res,next)=>{
    WatchListItems.findOneAndDelete({'_id':req.params._id})
        .then(()=>res.json('Item Deleted'))
        .catch(err=>res.status(400).json('Error'+err))
}


exports.Update_WatchList_Items = (req,res,next)=>{
    Product.findOne({'productid':req.params.productid})
        .then(product =>{
            product.quantity = product.quantity - 1
        }).then(()=>res.json('Item Updated'))
        .catch(err=> res.status(400).json('Err'+err))}


exports.GET_Watchlist_Items = (req,res,next)=>{
    WatchListItems.find()
        .then(products => res.json(products))
        .catch(err=>res.status(400).json('Error :'+err));

}