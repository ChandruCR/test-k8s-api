/*
const express = require('express');
const httpProxy = require('express-http-proxy')
const request = require('request');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

const userServiceProxy = httpProxy('add.chandru:8080')

app.use((req, res, next) => {
    console.log("authentication")
    next()
})

app.post('/add', (req, res, next) => {
    console.log("request")
    console.log(req);
    userServiceProxy(req, res, next)
})

console.log("Listening on 3000")
app.listen(3000);
*/

const express = require("express")
const request = require("request")
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

const addService = "add.chandru:8080"

app.route("/add")
    .post( (req, res) => {
        console.info("authentication here")
        request.post(addService, req, (error, response, body) => {
            console.info(body)
            res.statusCode = 201
            res.json(body)
        })
    })