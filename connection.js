//import
var mongoose=require("mongoose")

//connecting with db
//mongoose.connect("copy paste from mangodb database connct drive sting copy past e chya ennat password type chya")
mongoose.connect(
    "mongodb+srv://user1:abeed@cluster0.rfmtpxb.mongodb.net/baackendday4?retryWrites=true&w=majority&appName=Cluster0"
)
    .then(()=>{
        console.log("connected to db")
    }).catch(()=>{
        console.log(err)
    })