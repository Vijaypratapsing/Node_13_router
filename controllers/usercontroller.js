const user=require('../user.json');
function getAlluser(req,re){
    try{
        res.json(user)
    }catch(err){

    }
}

module.exports={
    getAlluser
}