const express = require("express")
const Cart =require("../models/Cart")
const Product = require("../models/Product")
const {authMiddleware} = require("../middleware/authMiddleware")
const router =express.Router()

router.post("/add",authMiddleware,async (req,res)=>{
    try{
        if(req.user.role==="admin"){
            return res.status(403).json({"message":"Unauthorized to add product to cart"})
        }
        const {productId}=req.body
        const product=await Product.findById(productId)
        if(!product){
            return res.status(400).json({"message":"Product not found"})
        }
        let cart =await Cart.findOne({userId:req.user.id})
        if(cart){
            const existingProduct=cart.products.find(p=>p.productId.toString()===productId)
            if(existingProduct)
                existingProduct.quantity+=1
            else{
                cart.products.push({productId})
            }
        }
        else{
            cart =new Cart({userId:req.user.id,products:[{productId}]})
        }
        await cart.save()
        res.status(201).json({"message":"Add to cart successful"})
    }
    catch(err){
        return res.status(500).json({"message":"Server error in cart add"})
    }
})

module.exports=router