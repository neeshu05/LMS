const mongoose = require("mongoose")
const nodemailer = require("nodemailer")
const otpSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    otp:{
        type:Number,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        required:true,
        expires:5*1000,
    }
})

otpSchema.pre("save",async function(){
    try{
        let transporter = nodemailer.createTransport({
            host:"smtp.gmail.com",
            auth:{
                user:"neeshumaini55@gmail.com",
                pass:"bklw faex qdwp cdss"
            }
        })

        const info = transporter.sendMail({
            from:"Study Notion",
            to:this.email,
            subject:"Study Notion verfication Email",
            html:`${this.otp}`,
        })
    }
    catch(err){
        console.log("error occured while sending otp to mail", err)
    }
})


module.exports = mongoose.model("OTP", otpSchema)