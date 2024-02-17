const User = require("../models/User")
const OTP = require("../models/otp")
const otpGenerator = require("otp-generator")
const jwt = require("jsonwebtoken")


exports.sendOTP = async (req, res) => {
    try {
        const {
            email
        } = req.body;

        const checkForUser = await User.find({
            email
        })


        if (checkForUser.length !== 0) {
            res.status(400).json({
                message: "User already exist",
                success: false
            })
        } else {
            var otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false
            })

            //check unique otp

            var checkOtp = await OTP.find({
                otp: otp
            })

            while (checkOtp.length !== 0) {
                var otp = otpGenerator.generate(6, {
                    upperCaseAlphabets: false,
                    lowerCaseAlphabets: false,
                    specialChars: false
                })
                checkOtp = await Otp.find({
                    otp: otp
                })
            }

            const otpPayload = await OTP.create({
                email: email,
                otp: otp
            })
            res.json({
                message: otp,
                success: true,
            })
        }

    } catch (err) {
        console.log("Error occured while finding the user", err)
    }

}

exports.signUp = async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        accountType,
        otp
    } = req.body

    console.log("OTP", otp)
    //validation
    if (!firstName || !lastName || !email || !password || !confirmPassword || !otp) {
        return res.status(403).json({
            message: "Please fill all the necessary details",
            success: false,
        })
    }

    if (password !== confirmPassword) {
        return res.status(400).json({
            message: "Password does not matches"
        })
    }

    const existingUser = await User.findOne({
        email
    })

    if (existingUser) {
        res.send("user already exist")
    }

    
    const recentOtp = await OTP.find({
        email
    })

    console.log(recentOtp[0].otp)
    
    if (recentOtp.length === 0) {
        return res.send("Otp not found")
    } else if (recentOtp[0].otp !== otp) {
        return res.status(403).json({
            message: "Please enter the correct otp",
            success: false,
        })
    } else {
        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password,
            accountType,
        })
        res.status(200).json({
            data:newUser,
            message:"User succefully signUp in the study notion"
        })
    }
}


exports.login = async (req,res) => {
    try{
        const {email,password} = req.body
        if(!email || !password){
            return res.send("please enter all the neccessary details")
        }
        
        const findUserInDB = await User.find({email})
        if(findUserInDB.length === 0){
            res.status(403).json({
                message:"Data not found in DB"
            })
        }
        else{
            const getUser = await User.find({email})
            console.log(getUser[0].password)
            if(getUser[0].password !== password){
                return res.status(400).json({
                    message:"Password does matches in Database"
                })
            }
            else{
                const payload = {
                    email:getUser[0].email,
                    role:getUser[0].accountType
                }
                const token = jwt.sign(payload,"StudyNotion")
                getUser[0] = getUser[0].toObject();
                getUser[0].token = token
                return res.cookie("token",token).json({
                    message:"Welcome back to Study Notion",
                    success:true,
                    token,
                    getUser,
                })
            }
        }
    }
    catch(err){
        console.log("Error occured during login the individual: ", err)
    }
}