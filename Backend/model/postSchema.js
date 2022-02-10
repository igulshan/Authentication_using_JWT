const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postschema = new Schema({
    name:{type:String,required:true},
    location:{ type:String,required:true},
    likes:{ type:String,required:true},
    description:{ type:String,required:true},
    PostImage:{ type:String,required:true},
    date:{ type:String,required:true},

});

const postSchema = mongoose.model("Userpost",postschema);

module.exports = postSchema;