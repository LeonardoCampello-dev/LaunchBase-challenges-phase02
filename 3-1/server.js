const express = require('express')
const nunjucks = require('nunjucks') 

const server = express()
const courses = require('./courses-data')

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false
})  

server.get("/", (req, res) => {    

    res.render("about")
})

server.get("/courses-page", (req, res) => {    
    res.render("courses-page", { items: courses })
})

server.use(function(req, res) {
    res.status(404).render("not-found");
})

server.listen(5000, () => {
    console.log("Server: on")
})