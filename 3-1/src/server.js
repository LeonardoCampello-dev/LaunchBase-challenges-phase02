const express = require('express')
const nunjucks = require('nunjucks') 
const routes = require('./routes')

const server = express()

server.use(express.static("public"))
server.use(routes)
server.use((req, res) => {
    res.status(404).render("not-found")
})

server.set("view engine", "njk")

nunjucks.configure("src/app/views", {
    express: server,
    autoescape: false,
    noCache: false
})  

server.listen(5000, () => {
    console.log("Running")
})