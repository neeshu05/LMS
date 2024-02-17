const jwt = require("jsonwebtoken")

exports.isAdmin = async function(req,res,next){
    try{
        const role = req.role
        if(role === "admin"){
            next()
            console.log("validation successfull for an admin")
        }
        else{
            return res.status(403).json({
                message:"user not authorized to edit the code",
                success:false
            })
        }
    }

    catch(err){
        console.log("Error in validating whether the user is not an Admin: ", err)
    }
}