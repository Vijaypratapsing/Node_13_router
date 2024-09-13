const express=require('express')
const user=require('./routes/user');
const app=express();

app.use(user)

app.listen(3000,(err)=>{
    console.log("is 3000");
    
})