const express = require("express")

const router = express.Router()


const { sendOTP, signUp, login } = require("../controllers/Auth")
const { auth } = require("../middlewares/auth")
const { addProfileData } = require("../controllers/additionalDetails")
const { resetPassword } = require("../controllers/resetPassword")
const { isAdmin } = require("../middlewares/isAdmin")
const { createTags } = require("../controllers/createTags")
const { createCourse } = require("../controllers/courses")
const { isInstructor } = require("../middlewares/isInstructor")

router.post("/otp",sendOTP)
router.post("/user",signUp)
router.post("/login",login)
router.put("/additionalDetails", auth, addProfileData)
router.put("/resetPassword",auth,resetPassword)
router.post("/createTags",auth, isAdmin,createTags)
router.post("/createCourse",auth,isInstructor,createCourse)
module.exports = router