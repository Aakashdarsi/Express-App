const express = require('express');

const app = express();

app.use(express.urlencoded({extended:true}))
app.use('/xyz',express.static(__dirname + '/public'));

app.get("/hello",(req,res)=>{
    let user = "Guest"
    if(req.query.user){
        user = req.query.user;
    }
    res.send("Hello World "+user);
})


app.listen(3451,(req,res)=>{
    console.log("http://localhost:3451/xyz");
})

