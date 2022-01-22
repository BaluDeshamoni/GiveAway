import mongoose from "mongoose";
import Product from "./models/productModel.js"
import Order from "./models/orderModel.js"
import User from "./models/userModel.js"
import users from './data/users.js'
import products from './data/products.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const importData= async()=>{
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers=await User.insertMany(users)
        const adminUser=createdUsers[0]._id
        const prods=products.map(p=>{return {...p,user:adminUser} })
        await Product.insertMany(prods)

        console.log("Data imported")
        process.exit()
    }catch(err){
        console.error(error)
        process.exit(1)
    }
}

const destroyData= async()=>{
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log("Data destroyed")
        process.exit()
    }catch(err){
        console.error(error)
        process.exit(1)
    }
}

process.argv[2]==='-d'?destroyData():importData()