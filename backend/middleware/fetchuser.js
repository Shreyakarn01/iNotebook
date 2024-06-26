const jwt = require('jsonwebtoken');
const JWT_SECRET="shreyaisagoodg$irl";

const fetchuser = (req,res,next)=>{
    try {
        //Get the user from the JWT token and add id to the req object
        const token=req.header('auth-token');
        if(!token){
            res.status(401).send({error:"Please authenticate using a valid token"})
        }
        const data=jwt.verify(token,JWT_SECRET);
        req.user=data.user;
        next();
    } catch (error) {
      console.error(error.message);
      res.status(401).send({error:"Please authenticate using a valid token"});
    }
    
}

module.exports=fetchuser;