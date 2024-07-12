//database in model venam oranam ollunki oru model .korem endaki oru folder endaka n athil new files models endaka 
//import mongoose .mongoose venam 
var mongoose=require("mongoose");
//schema creaton database il egane save akon schema 
var schema=mongoose.Schema(
    {
        name:String,
        //first letter capital
        age:Number,
        place:String,
        hobbies:String,
        fathersname:String
    }
)
//model creation
var credModel=mongoose.model('sample',schema)
//sample collection name ann evide singular database il plural database inde akath olla username id ennakoyan collection enn udeshukyane sample enn cagabe oru collection
//export
module.exports=credModel
