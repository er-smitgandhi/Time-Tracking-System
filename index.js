const express = require("express")
const sessioncontroller = require("./controller/session-controller")


const app = express()


app.get("/login",sessioncontroller.login)
app.get("/signup",sessioncontroller.signup)


app.get("/",function(req,res){
    res.write("welcome...")
    res.end()
})




app.listen(3000,function(){
    console.log("server started on 3000");
})