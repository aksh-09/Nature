const Community=require('../model/Community');
async function postEmail(req,res){
try{
    const {email}=req.body;
    const community=await Community({
        email
    })
    await community.save();
    res.send(community);
}catch(error){
    res.status(400).send(`${error}`)
}
}
module.exports={postEmail}