const mongoose=require("mongoose");
const useresquema= mongoose.Schema({
    nombre:{ type:String,require:true},
    edad: { type:Number,require:true},
    email:{ type:String,require:true},
    
})
module.exports=mongoose.model("user",useresquema);
