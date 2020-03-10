const express = require('express')
const routes = express.Router();
const selllerController = require('../controller/seller.controller');


routes.post('/register',async (req, res)=>{
    let data =await selllerController.addseller(req.body);
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
  
routes.post('/login',async (req,res)=>{
    
    let data =await selllerController.loginSeller(req.body);
     req.session = data
     console.log("session",req.session)
    console.log("logdata",data)
})

routes.get('/get/:name',async (req,res)=>{
    //console.log(req.params.name)
   let respond = await selllerController.getSeller(req.params.name)
   if(respond == "not found"){
    res.status(500).json({
        message : "fail" , result : respond
    }) 
   }else{
    res.status(201).json({
        message : "success" , result : respond
    })   
   }
 
})
exports.route = routes