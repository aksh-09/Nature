const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const categoryRouter=require('../case study/router/categoryRouter')
const userRouter=require('../case study/router/userRouter')
const feedbackRouter=require('../case study/router/feedbackRouter')
const contactUsRouter=require('../case study/router/contactUsRouter');
const communityRouter=require('../case study/router/communityRouter')
require("dotenv").config({ path: `.env` });
let Path = process.env.DB;
mongoose.connect(Path,{
    useNewUrlParser:true,
}).then(()=>{
    const app=express();
    const corsOption={
      origin:'http://localhost:4200',
      Credential:true
    }
    app.use(cors(corsOption));
    app.use(express.json());
    app.use('/nature',categoryRouter);
    app.use('/nature',userRouter);
    app.use('/nature',feedbackRouter);
    app.use('/nature',contactUsRouter);
    app.use('/nature',communityRouter);
    app.listen(3000,()=>{
        console.log(`connect at port 3000`);
    })
})