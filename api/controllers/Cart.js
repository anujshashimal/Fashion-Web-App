let Order = require('../models/PlaceOrder');
const nodeailer = require("nodemailer");
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

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
                        '<form style="background-color: #a643dd " ' +
                        '<h5> Hi '+ key.fullname + ', </h5>' +' <img src="cid:uniqueID@create.ee" style="width: 500px" /> ' +
                        '<p> Thank you very much for the Order. Your payment is successfully completed. Your Ordered Item will receive Asap. Below include the Order informations you confirmed! Thank you very much!  </p>' +
                        '<h3> Your Total Amount of Payment is: : ' + key.TotalCost + '</h3>'+
                        '<h3> Your Order ID is : ' + key.OrderId + '</h3>'+
                        '<h3> Your Tracking ID is : ' + key.TrackingNum  + '</h3>' +
                        '</form>',
                    attachments: [{
                        filename: 'shop.gif',
                        path: 'C:/shop.gif',
                        cid: 'uniqueID@create.ee'
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


            ))
            }



        )
        .catch(err=>res.status(400).json("Error:"+err))


}

