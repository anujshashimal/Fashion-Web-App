require('dotenv').config();
const  StoreManager = require('../models/StoreManager');
var nodemailer = require('nodemailer');


exports.Find_StoreManager = (req,res,next)=>{
    StoreManager.find({'smId':req.params.smId})
        .then(storeManager => res.json(storeManager))
        .catch(err=>res.status(400).json("Error:"+err))
}

exports.getAllStoreManager=(req,res,next)=>{
    StoreManager.find().then(storeManager=>res.json(storeManager))
        .catch(err=>res.status(400).json("error:"+err))
}


// router.route('/addCategory').post((req,res)=>{
//     const Category_ID = req.body.Category_ID;
//     const CategoryName = req.body.CategoryName;
//     const  MainCategory = req.body.MainCategory;
//     const  Admin = req.body.Admin;
//
//     const  newCategory = new Category({
//         Category_ID,
//         CategoryName,
//         MainCategory,
//         Admin
//     });
//
//     newCategory.save()
//         .then(()=>res.json('Category Added!'))
//         .catch(err=>res.status(400).json("Error:"+err));
//
// });

exports.SaveStoreManager = (req,res,next)=>{

    const smId = req.body.smId;
    const UserName = req.body.UserName;
    const  Email = req.body.Email;
    const  Password = req.body.Password;
    const  RePassword = req.body.RePassword;
    const  Admin = req.body.Admin;



    var transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:456,

        service: 'gmail',
        auth: {
            user: 'sliitfashionwebapp@gmail.com',
            pass: 'sliit@123'
        }
    });

    var mailOptions = {
        from: 'sliitfashionwebapp@gmail.com',
        to: Email,
        subject: 'Congratulation !! You were added as a Store Manager in SLIIT Fashion Web app by '+Admin,
        text: ' Email :'+Email+' User Name :'+UserName+' Password : '+Password+' please click this link to go loging page http://54.84.43.211/Storemanagerlogin'
    };

    console.log(Email);

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    const  newStoreManager = new StoreManager({
        smId,
        UserName,
        Email,
        Password,
        RePassword,
        Admin
    });


    newStoreManager.save()
        .then(()=>res.json('Store Manager Added!'))
        .catch(err=>res.status(400).json("Error:"+err));

}

exports.Update_StoreManger = (req,res,next)=>{

    StoreManager.findOne({'smId':req.body.smId})
        .then(storemanager =>{
            storemanager.UserName = req.body.UserName;
            storemanager.Email =  req.body.Email;
            storemanager.Password = req.body.Password;
            storemanager.RePassword = req.body.RePassword;
            storemanager.Admin  =   req.body.Admin;

            storemanager.save()
                .then(()=>res.json('store Manger Updated'))
                .catch(err=>res.status(400).json('Error'+err));
        })
        .catch(err=> res.status(400).json('Err'+err));

}


exports.Delete_StoreManager = (req,res,next)=>{

    StoreManager.findOneAndDelete({'smId':req.params.smId})
        .then(()=>res.json('store Manager Deleted'))
        .catch(err=>res.status(400).json('Error'+err))

}



exports.Find_StoreManager_byname = (req,res,next)=>{
   
    StoreManager.find({'UserName':req.params.storemanagerusername})
    .then(storeManager => res.json(storeManager))
    .catch(err=>res.status(400).json("Error:"+err))

}

