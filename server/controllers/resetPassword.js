const User = require("../models/User")

exports.resetPassword = async (req,res) => {
    try{
        const email = req.email
        const { newPassword } = req.body
    
        const newUserData = await User.findOneAndUpdate(
            {email},
            {password:newPassword},
            {new:true}
        )
        return res.status(200).json({
            message:"succefully updated the password for the new user",
            data:newUserData 
        })
    }
    catch(err){
        console.log("Error Occured While updating the record with the new password", err)
    }
}  