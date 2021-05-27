const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const {v4:uuidv4} = require('uuid')

const router = require("./router")
const app = express()

const port = process.env.PORT || 3000;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(session({
    secreat:uuidv4(),
    resave:false,
    saveUninitialized:true
}))

app.set("view engine","ejs")

// load static css assets    
app.use("/static",express.static(path.join(__dirname,"public")))
app.use("/assets",express.static(path.join(__dirname,"public/assets")))
app.use("/route",router)


//home route
app.get('/',(req,res)=>{
     res.render("base",{tile:"Login System"})
})

app.post('/login',(req,res)=>{
    res.end("Login successful")
})

app.listen(port, ()=>{
    console.log("Server working on http://localhost:3000")
})