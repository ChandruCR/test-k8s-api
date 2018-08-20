console.log("Running app.js")
const express = require('express');
const request = require('request');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

const signUpService = "signup.hermes"

app.route('/')
    .get(function (req, res) {
        console.log(req)
        var result = {
            "test": "Hello World"
        }
        res.json(result)
    })
app.route('/signup')
    .post(function (req, res) {
        console.log("request")
        console.log(req);
        request.post(signUpService ).on('response', function(res1) {
            res1.on('data', function(data1) {
                res.json(data1)
            })
        })
    })

console.log("Listening on 3000")
app.listen(3000);