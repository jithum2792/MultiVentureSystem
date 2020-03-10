const sellerModel = require('../model/seller.model')

const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken')


exports.addseller =async (data)=>{
    let resultData =""
    let userdata = data
    userdata.password = await encryptPassword(userdata.password)
    
    xuser = new sellerModel(userdata);
    await xuser.save().then(result=>{
        //console.log("==",result)
        resultData = result
    }).catch(err=>{
       // console.log("error",err)
       resultData = "error"
    })
    return resultData
}
async function encryptPassword(password){
    const encryptPassword = await bcrypt.hash(password,10)
    return encryptPassword
    }


exports.loginSeller =async (data)=>{

    let resultData = ""
    let userdata = data
    let fetchData = ""
    await sellerModel.findOne({name : userdata.name}).then(result=>{
        //console.log(result)
        if(result == null){
              resultData = "not registerd with this mail" 
        }else{
            fetchData = result
            return bcrypt.compare(userdata.password,result.password) 
        }
    }).then(result=>{
        //console.log(result)
        if(result == true){
    
            resultData = fetchData
            
            const token =jwt.sign({
            name: resultData.name,
                email: resultData.email, userId: resultData._id,
                
            }, 'secret_this_should_be_lonnger', {
                expiresIn: '1hr'
            })
            resultData =token
    
        }else{
            resultData = "password not matched"
        }
    })
    
    return resultData
}


exports.getSeller =async (data)=>{
//console.log(data)
resultData = ""
await sellerModel.findOne({name :data },function(err,result){
    if(result == null){
       //console.log("==",err)
      return   resultData = "not found"
    }else{
        //console.log("--",result)
        return   resultData = result
        
    } 
})
return resultData
}


