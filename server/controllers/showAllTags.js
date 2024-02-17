const Tags = require("../models/Tags")

exports.showAllTags = async (req,res) => {
    try{
        const getAllTags = await Tags.find({}, {name:true,description:true})
        return res.status(200).json({
            message:"fetched all the tags",
            success:true,
        })
    }
    catch(err){
        return res.status(500).json({
            message:err.message,
            success:false
        })
    }
}