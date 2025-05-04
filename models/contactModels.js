const mongoose=require("mongoose");  

const contactSchema=mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",

    },
    name:{
        type:String,
        required:[true,"Please enter the name"],
    },
    phone:{
        type:String,
        required:[true,"Please enter the phone number"],
    },
    email:{
        type:String,
        required:[true,"Please enter the email is"],
    },
},{
    timestamps:true,
});
module.exports=mongoose.model("Conact",contactSchema);