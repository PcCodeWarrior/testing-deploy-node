var express        = require("express"),
    app            = express(),
    indexRoutes    = require("./routes/index");




app.set("view engine","ejs");



app.use("/",indexRoutes);


app.listen( 3000,  function(){
        console.log("Server is listening on port: 3000");
    });

