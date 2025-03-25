const express = require('express')
const dotenv = require('dotenv')
const connectDB=require("./Database/db")
const router = require("./Routes/routes")
const cors = require('cors')

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())

const port = process.env.PORT || 5000;
const url = process.env.MONGO_URI;

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.use('/route',router)

app.listen(port,async(req,res)=>{
    try{
        await connectDB(url);
        console.log(`Server is running on ${PORT}`)
    }catch(err){
        console.log(err)
    }
})