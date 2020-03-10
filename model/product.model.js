const mongoose = require('mongoose');
const schema = mongoose.Schema;
const  product = new schema({
    name: {type:String,required:true},
    product_id: {type:String, unique: true},
    discription: {type:String},
    price: {type:Number},
    discount_price: {type:Number},
    discount_persentage:Number,
    colours: Array,
    size:Array,
    emi_option:String,
    images:Array
   
});
const Product = mongoose.model('product',product);
module.exports = Product
