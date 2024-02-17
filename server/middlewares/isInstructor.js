
exports.isInstructor = async function(req,res,next){
    try{
        const role = req.role
        if(role === "instructor"){
            next()
            console.log("validation successfull for an instructor")
        }
        else{
            return res.status(403).json({
                message:"user not authorized to edit the code",
                success:false
            })
        }
    }

    catch(err){
        console.log("Error in validating whether the user is not an Instructor: ", err)
    }
}