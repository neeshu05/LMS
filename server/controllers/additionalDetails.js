const User = require("../models/User");
const Profile = require("../models/Profile");

exports.addProfileData = async (req, res) => {
    try {
        const { contactNumber, about, dateOfBirth, gender } = req.body;
        const email = req.email;
        console.log(email);

        if (email.length === 0) {
            return res.status(404).json({
                message: "Email not found, user is anonymous",
                success: false
            });
        }

        const response = await Profile.create({
            contactNumber,
            about,
            dateOfBirth,
            gender
        });

        const getUserfromDatabase = await User.findOneAndUpdate(
            email,
            { additionalDetails: response._id },
            { new: true }
        );

        return res.status(200).json({
            message: "Additional details for the user successfully entered in the database",
            data: getUserfromDatabase
        });
    } catch (error) {
        console.error("Error in addProfileData:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};

exports.updateProfileData = async (req,res) => {
    try{
    const { contactNumber, about, dateOfBirth, gender } = req.body;
        const email = req.email;
        console.log(email);

        if (email.length === 0) {
            return res.status(404).json({
                message: "Email not found, user is anonymous",
                success: false
            });
        }

        const user = await User.find({email})
        const id = user.additionalDetails
        const response = await Profile.findByIdAndUpdate(
            id,
            {
                contactNumber,
                about,
                dateOfBirth,
                gender
            },
            { new: true }
        );

        return res.status(200).json({
            message: "Additional details for the user successfully updated in the database",
            data: response
        });
    } catch (error) {
        console.error("Error in addProfileData:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
}