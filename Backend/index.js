const express = require("express");
const app = express();
const bodyparser= require("body-parser");
const mongoose=require("mongoose");
app.use(bodyparser());
mongoose.connect("mongodb://localhost:27017/userposts")
const Userpost =require("./model/postSchema");

app.get('/gallary', async(req, res)=>{
    try{
        const data= await Userpost.find();
        // console.log(data);
        res.json(data);
    }catch(e){
        res.json({
            status:failed,
            message:e.message
        })
    }
})

app.post("/",async (req, res)=>{
    try{
        console.log(req.body);
        const post=await Userpost.create(req.body);
        res.json({
            status:"success",
            data:post
        })
    }catch(err){
        res.status(400).json({
            status:"fail",
            message:err.message
        })
    }

})

app.listen(3000 ,()=>{
    console.log('server is live at 3000');
});