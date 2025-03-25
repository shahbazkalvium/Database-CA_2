// const mongoose = require('mongoose')
const connectDB = async(url)=>{
    try{
        await connectDB(url);
        console.log("Database connected successfuly")
    }catch(err){
        console.log(err)
    }
}
module.exports = connectDB;