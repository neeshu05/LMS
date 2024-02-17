const cloudinary = require("cloudinary").v2

exports.cloudinaryConnect = () => {
    try {
        cloudinary.config({
            cloud_name: "dyawhaki1",
            api_key: "768615981163732",
            api_secret: "dUYQbqXIbcDGnpWPELHmIf8FmnI"
        })
    } catch (err) {
        console.log(err)
    }
}