const mongoose = require('mongoose');
const schema = mongoose.Schema;
const  user = new schema({
    name: {type:String,required:true},
    email: {type:String, unique: true},
    password: {type:String,required:true},
    phone_number: {type:Number},
   
});
const Seller = mongoose.model('seller',user);
module.exports = Seller
