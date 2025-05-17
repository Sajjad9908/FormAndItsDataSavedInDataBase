const express= require('express')
const router=express.Router()
const mongoose=require('mongoose')
const newSchema= require('../moduele/formModuele')
const bodyParser = require('body-parser')

router.use(express.json())
router.use(bodyParser.json())

router.get('/',(req,res)=>{
    res.send('Hello from the server')
})
router.post('/form',async (req,res)=>{
    try {

         const {name,email,gender,phone,country}=req.body
    if(!name || !email || ! phone || !gender || !country){
    return res.status(400).json({message:"all fields are required"})}
    const newForm= await new newSchema({
        name,
        email,gender,
        phone,country})

        await newForm.save()
        res.status(200).json({message:"data saved successfully"})
    
    }
    
     catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error"})
        
    }
    })
   module.exports=router