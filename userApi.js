const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const secretKey="nature";
const User=require('../model/User');
async function loginUser(req,res){
    try{
        const user=await User.findOne({email:req.body.email});
        if(!user){
            res.status(400).json(`user not found`)
        }
        else{
            const isEqual=await bcrypt.compare(req.body.password,user.password);
            if(isEqual){
                const payload={
                    userId:user._id,
                    userEmail:user.email
                }
                const token=jwt.sign(payload,secretKey);
                console.log(token);
                res.status(200).json({
                    message:"Login user successfully",
                    user:{id:user._id,email:user.email,name:user.name},
                    token
                })
            }else{
                res.status(400).json("password or login does not match")
            }
        }
    }catch(error){
        res.send(`${error}`);
    }
}
async function registerUser(req,res){
    try{
        const user=await User.findOne({email:req.body.email});
        if(!user){
             const salt=await bcrypt.genSalt(10);
            const {name,email,password}=req.body;
            const user=new User({
                name,
                email,
                password
            })
            user.password=await bcrypt.hash(user.password,salt);
            await user.save();
            res.status(200).json("user registered successfully");
        }else{
            res.status(400).json({ message: "User Already Exist" });
        }
    }catch(error){
        res.send(`${error}`)
    }
}

  
module.exports={loginUser,registerUser}