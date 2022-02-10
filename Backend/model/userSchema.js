const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    "email":{ type:"String", require:"true",unique:"true"},
    "password":{type:"String",require:"true"}
})

const User = mongoose.model('instauser',userSchema);
module.exports = User;