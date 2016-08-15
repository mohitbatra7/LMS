var express = require("express");
var app = express();
app.use(express.static(__dirname + '/public')); //http://localhost:1234/pages/index.html
//app.use('/amit', express.static('public')); // give virtual name of public directory
// http://localhost:1234/amit/pages/index.html
app.get('/login', function (req, res) {
    res.send('Hello Express!');
});
app.post('/hello',function(req,res){
    //res.write()
   res.send("Welcome ");
});

app.listen(process.env.PORT || 1234, function () {
    console.log('Example app listening on port 1234!');
});
