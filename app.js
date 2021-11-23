const express = require("express");
const { dirname } = require("path");
const app = express();
const path = require('path')
const port =3030
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (res, resp)=> resp.sendFile(path.join(__dirname,"/views/home.html")))
app.get("/register.html", (res, resp)=> resp.sendFile(path.join(__dirname,"/views/register.html")))
app.get("/login.html", (res, resp)=> resp.sendFile(path.join(__dirname,"/views/login.html")))

app.listen(process.env.PORT||3030,()=>{console.log("servidor activo")})

