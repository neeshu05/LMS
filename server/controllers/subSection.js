const Section = require("../models/Section")
const subSection = require("../models/subSection")
const { uploadHandler } = require("../utils/uploadHandler")

exports.createSubSection = async (req,res) =>{
    try{
        const {sectionId, title, timeDuration, description } = req.body

        const myVideoUrl = req.files.file

        if(!sectionId || ! title || !timeDuration || !description || !myVideoUrl){
            return res.status(403).json({
                message:"please enter all the valid details",
                success:false
            })
        }
        else{
            const fileUplodader = await uploadHandler(myVideoUrl,megaVideo,10)
            const createdSubsection = await subSection.create({
                title,
                timeDuration,
                description,
                videoUrl : myVideoUrl
            })

            const updateSection = await Section.findByIdAndUpdate(sectionId,{
                $push : {
                    subSection : createdSubsection._id
                }
            },
            {new : true}
            )

            return res.status(200).json({
                message:"succesfully created the subsection",
                success:true,
                data:updateSection
            })
        }
    }
    catch(err){
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}