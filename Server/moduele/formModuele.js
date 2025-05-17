const mongoose=require('mongoose');
const dbSchema= mongoose.Schema({
    name:{required:true, type:String},
    email:{required:true, type:String},
    phone:{required:true,type:String},
    gender:{required:true,type:String},
    country:{required:true,type:String},

})
const newSchema=mongoose.model('newSchema',dbSchema)
module.exports=newSchema;