const Feedback = require('../model/Feedback');
async function postData(req,res){
  try{
    const {name,email,feedback}=req.body;
    const user=new Feedback({
        name,
        email,
        feedback
    })
    await user.save();
    res.status(200).json({message:'feedback submitted'})
  }catch(error){
    res.status(400).json({message:`${error}`})
  }
}
module.exports={postData}