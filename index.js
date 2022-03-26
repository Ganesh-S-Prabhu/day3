const express=require("express")
const app=express();

app.use(allbooks)

app.get("/books/:name",(req,res) => {
//    console.log("harry potter",req.params['name'])
req.name = req.params.name 
     res.send({bookName: req.name})
});

function allbooks(req,res,next)
{
   
    next();
    console.log ( "Fetching all books")
    
}
app.listen(5000,() =>{
    console.log("listening on port 5000")
})