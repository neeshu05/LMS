const express = require('express')
const app = express()

app.use(express.json())

const router = require("./routes/route")
app.use(router)

const dbConnect = require("./config/database")
dbConnect()

app.listen(4000,() => {
    console.log("server is up and running on port 4000")
})