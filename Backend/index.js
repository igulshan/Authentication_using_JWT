const express = require("express");
const app = express();
const bodyparser= require("body-parser");
const mongoose=require("mongoose");
app.use(bodyparser());
mongoose.connect("mongodb://localhost:27017/userposts")
const Userpost =require("./model/postSchema");
const User = require("./model/userSchema");



app.post('/delete/:id',async(req,res)=>{
    console.log(req.params);
    try{
        const post = await Userpost.findById(req.params.id);
        if(!post){
            return res.json({
                status:"failed",
                message:"post doesn't exist"
            })
        }
        await Userpost.deleteOne({_id:req.params.id});
        res.json({
            status:"success",
            message:"post deleted",
            data:post
        })
    }catch(e){
        console.log(e);
        res.json({
            status:"failed",
            message:e.message
        })
    }  
})

// app.post('/register',async(req,res)=>{
//     console.log(req.body);
//     if(!req.body.email || !req.body.password){
//         res.json({
//             status:400,
//             message:"empty inputs"
//         })
//     }
//     try{
//         const user = await User.findOne(req.body.email);
//         if (user){
//             res.json({
//                 status:400,
//                 message:"user already exist"
//             })
//         }else{
//             await User.createOne(req.body);
//             req.json({
//                 message:"user registered successfully"
//             })
//         }
//     }catch(e){
//         console.log(e);
//         res.json({
//             status:400,
//             message:e.message
//         });
//     }
// })




// app.get('/gallary', async(req, res)=>{
//     try{
//         const data= await Userpost.find();
//         // console.log(data);
//         res.json(data);
//     }catch(e){
//         res.json({
//             status:failed,
//             message:e.message
//         })
//     }
// })

// app.post("/",async (req, res)=>{
//     try{
//         console.log(req.body);
//         const post=await Userpost.create(req.body);
//         res.json({
//             status:"success",
//             data:post
//         })
//     }catch(err){
//         res.status(400).json({
//             status:"fail",
//             message:err.message
//         })
//     }

// })



app.listen(3000 ,()=>{
    console.log('server is live at 3000');
});