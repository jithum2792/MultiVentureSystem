const express = require('express')
const routes = express.Router();
const productController = require('../controller/product.controller');

routes.post('/register',async (req, res)=>{
    let data =await productController.addProduct(req.body);
    //console.log(data)
    if(data!="error"){
        res.status(201).json({
            message : "success" , result : data
        })
    }else{
        res.status(500).json({
            message : "fail" , result : "already register with this mail"
        }) 
    }    
  })

  module.exports.route = routes