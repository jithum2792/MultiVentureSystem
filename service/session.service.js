const express = require('express');
const session = require('express-session');
const app = express();
var cookieParser = require('cookie-parser');

 app.use(cookieParser()); 
// app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use(session({key:"user",secret:"sssh", saveUninitialized : true, resave : true}));

