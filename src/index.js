const mongoose = require('mongoose');
const app = require('./app.js');
require("dotenv").config();
mongoose.connect(process.env.mongo_url)
.then(()=>{
    console.log("connected to database")
})
let port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log("port is running successfully")
})