const userModel = require('../model/user.model')
const crypto = require('crypto');
const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken')


async function addUser(data){
    let resultData =""
    let userdata = data
    userdata.password = await encryptPassword(userdata.password)
    userdata.refferalcode =await refferalcodeGenerate(userdata.name);
    xuser = new userModel(userdata);
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
function refferalcodeGenerate(value){  
        var res = value.slice(0, 4);
        const upercaseString = res.toUpperCase()
     const referalCode = upercaseString + crypto.randomBytes(4).toString('hex');
     return referalCode;
    }
    



async function loginUser(data){
let resultData = ""
let userdata = data
let fetchData = ""
await userModel.findOne({email : userdata.email}).then(result=>{
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
            refferalcode: resultData.refferalcod
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

async function getUser(data){
//console.log(data)
resultData = ""
await userModel.findOne({email :data },function(err,result){
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




exports.getUser = getUser
exports.addUser = addUser;
exports.loginUser = loginUser;