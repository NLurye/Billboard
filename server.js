const express = require('express');
//const html = require("./index.html");
fs = require('fs');

    const app = express();
    app.get('/screen=:num', function(req, res){

        fs.readFile(__dirname +'/index.html', 'utf8', function (err,data) {
            replace =  "let Snum = "+ req.params.num;
            let result = data.replace(/let Snum = 0/g, replace);

            fs.writeFile(__dirname +'/index.html', result, 'utf8', function (err) {

                res.sendFile(__dirname +'/index.html');
                console.log(req.params.num);

            });
        });


    });

    app.get('/templateA.html', function(req, res){
        res.sendFile(__dirname +'/templateA.html');
    });
    app.get('/templateB.html', function(req, res){
        res.sendFile(__dirname +'/templateB.html');
    });
    app.get('/templateC.html', function(req, res){
        res.sendFile(__dirname +'/templateC.html');
    });

    app.listen(8080);
