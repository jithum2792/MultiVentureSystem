const mongoose = require('mongoose');
const schema = mongoose.Schema;
const  user = new schema({
    name: {type:String,required:true},
    email: {type:String,required:true, unique: true},
    password: {type:String,required:true},
    phone_number: {type:Number},
    wallet:{type:Number},
    refferalcode: {type:String},
    refferedby: String,
    cart: Array,
    wishlist: Array
});
const User = mongoose.model('users',user);
module.exports = User
