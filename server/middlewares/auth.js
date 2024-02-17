const jwt = require("jsonwebtoken")

exports.auth = async function(req,res,next){
    try{
        const { token } = req.body
        if(!token){
            return res.status(404).json({
                message:"User not loggedIn",
                success:false
            })
        }
        else{
            const decode = jwt.verify(token,"StudyNotion",(err, decoded) => {
                if (err) {
                  // Handle verification error
                  console.error('JWT verification failed:', err);
                  return err
                } else {
                  // The token is verified, and the payload is available in the 'decoded' object
                  console.log('Decoded JWT payload:', decoded);
                  return decoded
                }
            })
            if(!decode){
                return res.status(404).json({
                    message:"Decode not found"
                })
            }
            console.log("checking for decoded Object: ", decode)

            req.email = decode.email
            req.role = decode.role
            next()
            console.log("Validation was successful")
        }
    }
    catch(err){
        console.log("Error in validating whether the user is loggedIn: ", err)
    }
}