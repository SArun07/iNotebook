const mongoose= require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook";

const connetcToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully")
    })
}

module.exports = connetcToMongo;