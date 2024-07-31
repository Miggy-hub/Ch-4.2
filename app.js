const express = require('express')
const app = express()
let url = require('url');


app.get('/hello', function(req, res){
    var q = url.parse(req.url, true).query;
    res.send("Name : Kawinpop Auenukroh <br/>Login Date : 31 July 2024")
    })
    

app.listen(9999,function(){
 console.log("Server is running on PORT 9999")
})
