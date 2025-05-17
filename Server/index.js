const express=require('express')
const app=express()
const port=process.env.PORT || 3000;
const mongoose=require('mongoose')
const cors=require('cors')
const bodyParser = require('body-parser')
const routes=require('./router/routes')
const newSchema=require('./moduele/formModuele')

app.use(cors({
    origin: 'https://form-and-its-data-saved-in-data-base-braf.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))
app.use(express.json())
app.use(bodyParser.json())
app.use('',routes)
app.get('/',async(req,res)=>{
    try {
        const data= await newSchema.find()
        if(!data){
            return res.status(400).json({message:"data not found"})

        }
        res.status(200).json({data})
        console.log(data)

    } catch (error) {
        console.log(error)
    }
})

const connectDb=async()=>{
    try {
       await mongoose.connect('mongodb+srv://gulbadan128:UN31BzSeAonQTN25@cluster1.e2mckdr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
   
}
connectDb()



app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
