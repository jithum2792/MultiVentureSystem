const express = require('express')
const routes = express.Router();
const userController = require('../controller/user.controller');

routes.post('/register',async (req, res)=>{
    let data =await userController.addUser(req.body);
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
    let data =await userController.loginUser(req.body);
    if(data){
        console.log("logdata1",data)  
    }else{
        console.log("logdata2",data)
    }
   
})

routes.get('/get/:email',async (req,res)=>{
    //console.log(req.params.name)
   let resposd = await userController.getUser(req.params.email)
   if(resposd == "not found"){
    res.status(500).json({
        message : "fail" , result : resposd
    }) 
   }else{
    res.status(201).json({
        message : "success" , result : resposd
    })   
   }
 
})
exports.route = routes