const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName:{
        type:String, 
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile"
    },
    accountType:{
        type:String,
        enum:["student","admin","instructor"]
    },
    courses:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
        }
    ],
    courseProgress:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Progress"
        }
    ],
    image:{
        type:String
    }
})

module.exports = mongoose.model("User",userSchema)