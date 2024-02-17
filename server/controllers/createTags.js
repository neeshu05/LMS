const Tags = require("../models/Tags")

exports.createTags = async (req,res) => {
    try{
        const { name, description } = req.body
        if(!name || !description){
            return res.json(404).json({
                message:"please enter all neccessary details",
                success:false
            })
        }
        const response = await Tags.create({
            name,
            description
        })
        return res.status(200).json({
            message:"Succefully created the tag",
            data:response
        })
    }
    catch(err){
        console.log("Error encountered while creating the tag", err)
        process.exit(1)
    }
}