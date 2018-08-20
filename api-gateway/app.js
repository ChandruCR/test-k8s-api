console.log("Running app.js")
const express = require('express');
const httpProxy = require('express-http-proxy')
const request = require('request');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

const userServiceProxy = httpProxy('signup.hermes:8080')

app.use((req, res, next) => {
    console.log("authentication")
    next()
})

app.post('/signup', (req, res, next) => {
    console.log("request")
    console.log(req);
    userServiceProxy(req, res, next)
})

console.log("Listening on 3000")
app.listen(3000);