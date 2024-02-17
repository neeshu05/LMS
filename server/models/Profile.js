const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
    gender:{
        type:String,
    },
    contactNumber:{
        type:Number,
        required:true,
    },
    about:{
        type:String,
    },
    dateOfBirth:{
        type:String,
        trim:true,
    }
})

module.exports = mongoose.model("Profile", profileSchema)