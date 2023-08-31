const express = require("express")
const app = express()
const mongoose = require("mongoose")
const tasks = require("./routes/task")


//Database connection
mongoose.connect("mongodb://localhost/TASK-MANAGER")
    .then(() => console.log("Connect to MongoDB..."))
    .catch(err => console.error("Could not connect to MongoDB", err))

//middleware
app.use(express.static('./public'))
app.use(express.json())

//Routes
app.use('/api/v1/tasks', tasks)

//Port
const port = 5000
app.listen(port, console.log(`Server is listenig on port ${port}...`))