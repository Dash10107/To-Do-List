const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const items = ["Finish Homework","Don't Eat Junk"];
const workItems = [];

app.set("view engine","ejs"); //view as list.ejs

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));  // for static things like images css etc

app.get("/",function(req,res){
    
   const day =  date.getDate();


    res.render("list",{        
        listTitle:day,
        newListItems: items
    });


});

app.post("/",function(req,res){

    const item = req.body.newItem;

    if (req.body.list === "Work") {
       workItems.push(item);
       res.redirect("/work"); 
        
    }else{

items.push(item);
 
res.redirect("/");
    };

});


// /work Route

app.get("/work",function(req,res){
    res.render("list",{
        listTitle: "Work List",
        newListItems: workItems
    });
});
app.post("/work",function(req,res){
    const item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});



//about
app.get("/about",function(req,res){
    res.render("about");
});









app.listen(3000,function(){
    console.log("Server is up and running 3000");
});

