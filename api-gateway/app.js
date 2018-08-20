const express = require('express');
const request = require('request');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

const signUpService = "http://signup.hermes:8080"

app.route('/signup')
    .post(function (req, res) {
        request.post(signUpService ).on('response', function(res1) {
            res1.on('data', function(data1) {
                res.json(data1)
            })
        })
    })

app.listen(3000);