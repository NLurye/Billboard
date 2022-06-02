    const express = require('express');
    const app = express();
    app.get('/screen=:num', function(req, res){
        res.sendFile(__dirname +'/index.html');
        console.log(req.params.num);
       exports.sNum = function (){return req.params.num;}
    });
    app.listen(8080);