const ContactUs=require('../model/ContactUs');
async function postMessage(req,res){
    try{
        const {name,email,phone,message}=req.body;
    const contactUs=await ContactUs({
        name,
        email,
        phone,
        message
    })
    await contactUs.save();
    res.send(contactUs);
    }catch(error){
        res.status(400).send(`Something went wronge ${error}`);
    }
}
module.exports={postMessage};