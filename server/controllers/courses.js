const Courses = require("../models/Courses")
const User = require("../models/User")
const Tags = require("../models/Tags")
const {
    uploadHandler
} = require("../utils/uploadHandler")
const {
    showAllTags
} = require("./showAllTags")

const fileType = (file) => {
    const fileArray = file.name.split('.')
    const TypeOfFile = fileArray[fileArray.length - 1]
    return TypeOfFile
}

exports.UploadImageToCloudinary = async (req,res) => {
    
    const getMeMyFile = req.files.file
    const supportedTypes = ["jpg", "png", "jpeg"]

    const getCurrentTypeofFile = fileType(getMeMyFile)

    if (!supportedTypes.includes(getCurrentTypeofFile)) {
        return {
            message: "File type is not supported",
            success: false
        }
    } else {
        const pushingFileToCloudinary = await uploadHandler(getMeMyFile, "MegaSever", 10)

        return res.status(200).json({
            data: pushingFileToCloudinary.secure_url,
            success: true,
            message: "Finally uploaded the file to cloudinary"
        })   
    }
}




exports.createCourse = async (req, res) => {
    try {
        const {
            courseName,
            courseDescription,
            whatWillYouLearn,
            price,
            tag
        } = req.body
        
        // const getMeMyFile = req.files
        // console.log("Files: ",getMeMyFile)

        const InstructorEmail = req.email
        console.log(InstructorEmail)
        if (!courseName || !courseDescription || !price || !tag ) {
            return res.status(500).json({
                message: "Fill in all the neccessary details to create a course",
                success: false
            })
        } else {
            const getInstructor = await User.findOne({
                email: InstructorEmail
            })
            console.log(getInstructor)
            const tags = await Tags.findOne({
                name:tag
            })
            console.log(tags)
            if (getInstructor.length === 0) {
                return res.status(403).json({
                    message: "User is not authorized to create a course",
                    success: false
                })
            }
            if (tags.length === 0) {
                return res.status(403).json({
                    message: "please select a valid tag for this course",
                    success: false
                })
            } else {
                // const resultAboutFileUploadToCloudinary = await UploadImageToCloudinary(getMeMyFile)
                // if (resultAboutFileUploadToCloudinary.success === false) {
                //     return res.status(400).json({
                //         message: "Some error occured while getting url from cloudinary",
                //         success: false
                //     })
                // } else {
                    // const {
                    //     data
                    // } = resultAboutFileUploadToCloudinary
                    const creatingCourse = await Courses.create({
                        courseName,
                        courseDescription,
                        whatWillYouLearn,
                        price,
                        tag: tags._id,
                        // thumbnail: data,
                        instructor: getInstructor._id
                    })

                    const re = await User.updateOne({email : InstructorEmail} , {$push : { courses : creatingCourse._id }}, {new:true})
                    console.log(re)
                    return res.status(200).json({
                        message: "Your course is being created succesfully",
                        success: true,
                        data: creatingCourse
                    })
                }
        }

    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false,
            message: "Error occured while creating a new course"
        })
    }
}