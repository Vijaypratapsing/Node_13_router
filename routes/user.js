const express=require("express");
const usercontroller=require('../controllers/usercontroller');
const router=express.Router();


router.get('/user',(req,res)=>{
    usercontroller.getAlluser(req,res);
})
module.exports=router;