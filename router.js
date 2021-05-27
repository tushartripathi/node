
const express = require("express");
const router = express.Router();

const credential = {
    email:"admin@gmail.com",
    password:"admin"
}
// login user

router.post('/login',(req,res)=>{
    res.end("Login successful")
        // if(req.body.email == credential.email && req.body.password == credential.password)
        // {
        //         req.session.user = req.body.email;
        //       //  res.redirect("/dashboard")
        //       res.end("Login successful")
        // }
        // else
        // {
        //     res.end("invalid username")          
        // }
})

module.exports = router