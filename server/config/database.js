const mongoose = require("mongoose")

const dbConnect = () => {
    mongoose.connect("mongodb://0.0.0.0:27017/MegaServer").then(() =>{
        console.log("succesfully connected with the database")
    }).catch((err) =>{
        console.log(err)
    })
}

module.exports = dbConnect