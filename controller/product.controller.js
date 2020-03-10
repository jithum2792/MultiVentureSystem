const productModel = require('../model/product.model')
const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.addProduct =async (data)=>{
    let resultData =""
    let userdata = data    
    
    xuser = new productModel(userdata);
    await xuser.save().then(result=>{
        console.log("==",result)
        resultData = result
    }).catch(err=>{
        console.log("error",err)
       resultData = "error"
    })
    return resultData
}