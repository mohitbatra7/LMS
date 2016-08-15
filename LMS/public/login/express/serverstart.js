var express = require("express");
var app = express();
/*app.use(express.static('../'));*/
app.get("/",function(request,response){
    response.send("Hello this is get request");
});
// show post on postman
app.post("/welcome",function(request,response){
   response.send("Hello this is post request");
});
app.listen(process.env.PORT||1234,function(){
    console.log("Server Start...");
})