const Courses = require("../models/Courses")
const Section = require("../models/Section")

exports.createSection = async (req,res) => {
    try{

        const { name, courseId } = req.body
        if(!name || !courseId){
            return res.status(500).json({
                message:"Please enter all the neccesary code and try again",
                success: false,
            })
        }
        else{
            const sectionId = await Section.create({name})
            const findCourse = await Courses.findByIdAndUpdate(
                courseId ,
                {
                    $push: {
                        CourseContent:sectionId._id
                    }
                },
                {new: true}
            )

            return res.status(200).json({
                success: true,
                message: "successfully created a section",
                data:findCourse
            })
        }
    }
    catch(err){
        return res.status(400).json({
            message:"error encountered while creating the section",
            secuss:false,
            data:err.message
        })
    }
}

exports.updateSections = async (req,res) => {
    try{
        const { sectionName, sectionId } = req.body
        if(!sectionName || !sectionId){
            return res.status(500).json({
                message:"Please provide all neccessary details to update your section",
                success: false
            })
        } else{
            const updatedSection = await Section.findByIdAndUpdate(
                sectionId,
                {
                    name:sectionName
                },
                {
                    new:true
                }
            )
            return res.status(200).json({
                message:"data was successfully validated and updated",
                success:true,
                data:updatedSection
            })
        }
    } catch(err){
        return res.status(400).json({
            success:false,
            message:"Some error occured while updating the section record"
        })
    }
}

exports.deleteSection = async (req,res) => {
    try{
        const { sectionId } = req.params
        const deletedSection = await Section.findByIdAndDelete(sectionId)
        // const deletedSectionForCourse = await Courses.find
        return res.status(200).json({
            message:"Successfully deleted the section",
            success:true,
        })
    } catch(err){
        return res.status(400).json({
            message:"Some error occured while deleting a section"
        })
        
    }
}