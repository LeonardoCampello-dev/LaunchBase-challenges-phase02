const express = require('express')
const nunjucks = require('nunjucks') 

const server = express()

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})  

server.get("/", (req, res) => {    
    res.render("page-home")
})

server.get("/content-page", (req, res) => {    
    res.render("content-page")
})

server.use(function(req, res) {
    res.status(404).render("not-found");
})

server.listen(5000, () => {
    console.log("Server ON")
})