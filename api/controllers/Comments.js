let  Comments = require('../models/Comments');

//Find Comment--------------------------------------------------
 exports.Find_Comments = async (req,res,next)=>{
   try{

      const rate = await Comments.find({productId : req.params.productId});

//   console.log('item',rate)
      let sum = 0;
      let noOfRatings = 0;
      let totrate = 0;
      let avg = 0;
      let avgRate = 0;
      for (let value of rate) {
         // console.log('value',value.rate)
         noOfRatings++;
         sum = sum + value.rate;
      }

      // avg = (sum/noOfRatings)
      totrate = noOfRatings * 5;
      avgRate = Math.round((sum / totrate) * 5)
      // console.log('avg',avg)
      // console.log('tot rate',totrate)
      // console.log('sum',sum)
      // console.log('a rate',avgRate)
  
      // const avgs = sum /item.ratings.length;
      // const avg = avgs.toFixed(2);
      
  
      res.json({avg: avgRate})
  } catch(e){

  }
}


//Find Comment--------------------------------------------------
exports.Find_CommentsByProducts = (req,res,next)=>{
   User.find({
     'productId': req.params.productId})
   .then(User => res.json(User))
   .catch(err=>res.status(400).json("Error:"+err))
}


  //find all Comments------------------------------------------
  exports.Find_All_Comments = (req,res,next)=>{

    Comments.find()
    .then(Comments => res.json(Comments))
     .catch(err=>res.status(400).json('Error :'+err));

  };



// Add Comment to Database---------------------------------------
 exports.Add_Comments = (req,res,next)=>{
    console.log('body data',req.body)
    const username = req.body.username;
    const productId = req.body.productId;
    const Comment = req.body.Comment;
    const rate = Number(req.body.rate);

    const newComments = new Comments({
        username,
        productId,
        Comment,
        rate,
    });
    console.log('newComments',newComments);

   newComments.save()
   .then(()=>res.json('Comment Added!'))
   .catch(err=>res.status(400).json("Error:"+err));

//    console.log(Comments);
}



// Update the Comments----------------------------------------------
 exports.Update_Comments = (req,res,next)=>{
    Comments.findByIdAndUpdate(req.params._id)
     .then(Comments =>{
        Comments.Comment = req.body.Comment;
        Comments.rate = req.body.rate;
        Comments.save()
        .then(()=>res.json('Comment Updated'))
        .catch(err=>res.status(400).json('Error'+err));
     })
     .catch(err=> res.status(400).json('Err'+err));
 }


// Delete the Comment------------------------------------------------------------
exports.Delete_Comments = (req,res,next)=>{
    Comments.findOneAndDelete({'_id':req.params._id})
       .then(()=>res.json('Comment Deleted'))
       .catch(err=>res.status(400).json('Error'+err))
}