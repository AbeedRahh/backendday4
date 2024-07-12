//importing express
var express=require("express")
//connecting to connection.js which contain database
require('./connection')
var sampleModel=require('./model')

var app=express();
//middleware
app.use(express.json());

//api
//to ad data 
//post add chyan

app.post('/add', async (req,res)=>{
    try {
        await sampleModel(req.body).save()
        res.send("data added")
        //samoleModel prakaean mulla data varanaki req body enn dtabasseil savd chyanam
        //asyn js syn language an athone async akan asyn await
    } catch (error) {
       console.log(error) 
    }
})
//api too view data
app.get('/view', async (req,res)=>{
    try {
       var output= await sampleModel.find();
       res.send(output);
    } catch (error) {
        console.log(error)
        
    }
})
//api to delete
app.delete('/remove/:a', async(req,res)=>{
try {
    var id=req.params.a
    console.log(id)
await sampleModel.findByIdAndDelete(id)
    res.send("data deleted")
} catch (error) {
    console.log(error)
    
}
})
//update api
app.put('/update/:b',async(req,res)=>{
    try {
        var id=req.params.b
       var output= await sampleModel.findByIdAndUpdate(id,req.body)
       res.send({message:"updated",output})
    } catch (error) {
        console.log(error)
        
    }
})
//port assiging
app.listen('3098',()=>{
    console.log("port is up and running");
})