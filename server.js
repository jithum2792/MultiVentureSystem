const express = require('express')
const app = express()
require('dotenv').config();
require('./service/db.service')
require('./service/session.service')
const userRouter = require('./router/user.router')
const sellerRouter = require('./router/seller.router')
const productRouter = require('./router/product.router')
const port = process.env.PORT;

app.use(express.json());

app.use('/api/user',userRouter.route)
app.use('/api/seller',sellerRouter.route)
app.use('/api/product',productRouter.route)




app.listen(port,()=>{
    console.log(`App listening on port ${port}!`)       
})