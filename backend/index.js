const express=require("express")
const app=express()
const cors =require("cors")
require("dotenv").config()
const port =process.env.PORT 
const connectDB =require("./config/db")
const authRoutes =require("./routes/auth")
const adminRoutes=require("./routes/adminAuth")
app.use(cors())
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())
connectDB()
app.use("/api/auth",authRoutes)
app.use("/api/admin",adminRoutes)

app.listen(port,()=>console.log("Server is running on port:",port))