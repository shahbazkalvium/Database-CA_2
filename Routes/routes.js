const express = require('express');
const RestaurantSchema = require("../models/RestSchema");

const router =express.Router();

router.post("/addItems",async(req,res)=>{
    try{
        const Item = ({name,location,cuisine,rating,menu}=req.body);
        if(!name||!location||!cuisine||!rating||!menu){
            res.status(400).json({message:`Validation failed: ${Item} is required`})
        }
        res.status(201).json({message:'Restaurant is created'})
        Item.save()
    }catch(err){
        console.log(err)
    }
})

router.get("/getItem",async(req,res)=>{
    try{
        const Item = RestaurantSchema.find()
        res.status(201).json({message:"Restaurant Retrieved",Item})
    }catch(err){
        console.log({err:"Restaurant not found"})
    }
})
router.get("/getItem",async(req,res)=>{
    try{
    const Item = RestaurantSchema.findById();
    res.status(201).json({message:"Restaurant Retrieved"})
    }catch(err){
        console.log(err)
        res.status(404).json({error:"Restaurant not found"})
    }
})

router.put("UpdateItem/:id",async(req,res)=>{
    try{
        const {name,location,cuisine,rating,menu}=req.body;
        const UpdateItem = Restaurant.findByIdAndUpdate(req.params.id,{
            name,
            location,
            cuisine,
            rating,
            menu,
        })
        res.status(201).json("updated successfully",UpdateItem)
    }catch(err){
        console.log(err)
    }
})

router.delete("/deleteItem",async(req,res)=>{
   await RestaurantSchema.findByIdAndDelete();
   res.status(201).json({message:"Restaurant deleted"})
})

module.exports = router;