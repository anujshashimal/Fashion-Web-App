let  User = require('../models/User');

//Find User--------------------------------------------------
 exports.Find_User = (req,res,next)=>{
    User.find({
      'username': req.params.username})
    .then(User => res.json(User))
    .catch(err=>res.status(400).json("Error:"+err))
}



  //find all products
  exports.Find_All_Users = (req,res,next)=>{

    User.find()
    .then(User => res.json(User))
     .catch(err=>res.status(400).json('Error :'+err));

  };


// Add User to Database---------------------------------------
 exports.Add_User = (req,res,next)=>{
    console.log('body data',req.body)
    const userid = req.body.userid;
    const username = req.body.username;
    const email = req.body.email;
    const address = req.body.address;
    const contactno = req.body.contactno;
    const gender = req.body.gender;
    const password = req.body.password;

    const newUser = new User({
        username,
        email,
        address,
        contactno,
        gender,
        password,
    });
    console.log('newuser',newUser);

   const user = newUser.save()
   .then(()=>res.json('User Added!'))
   .catch(err=>res.status(400).json("Error:"+err));

   console.log(user);
}


// exports.Add_User = ('/', async (req, res) => {
//     const post = new Post({
//         userid: req.body.userid,
//         username: req.body.username,
//         email: req.body.email,
//         address: req.body.address,
//         contactno: Number(req.body.contactno),
//         gender: req.body.gender,
//         password: req.body.password
//     });

//     try{
//     const savedPost = await post.save();
//     res.json(savedPost);
//     }catch (err){
//         res.json({ message: err });
//     }
// });



// Update the User----------------------------------------------
 exports.Update_User = (req,res,next)=>{
     User.findByIdAndUpdate(req.params.userid)
     .then(user =>{
        user.userid = req.body.userid;
        user.username = req.body.username;
        user.email = req.body.email;
        user.address = req.body.address;
        user.contactno = Number(req.body.contactno);
        user.gender = req.body.gender;
        user.password = req.body.password;

        user.save()
        .then(()=>res.json('User Updated'))
        .catch(err=>res.status(400).json('Error'+err));
     })
     .catch(err=> res.status(400).json('Err'+err));
 }


// Delete the User------------------------------------------------------------
exports.Delete_User = (req,res,next)=>{
       User.findOneAndDelete({'userid':req.params.userid})
       .then(()=>res.json('User Deleted'))
       .catch(err=>res.status(400).json('Error'+err))
}