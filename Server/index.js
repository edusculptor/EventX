import e from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import dns from 'node:dns'


dotenv.config() 
let app =e()
let PORT= process.env.PORT||5000
dns.setServers(['8.8.8.8'])

async function mongo(){
let db = await mongoose.connect(process.env.URL)
if(db){
    console.log("database connected")
}
}
mongo()

app.listen(PORT,()=>{
    console.log('server is running')
})