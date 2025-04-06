const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")
const KafkaConfig  = require("./config/kafkaConfig")
dotenv.config() 
const Port = process.env.PORT || 8000
app.use(cors({
   allowedHeaders: ["*"],
   origin: "*"
}));
const kafka = new KafkaConfig()
kafka.consume("transcode", (value)=>{
    console.log("message from kafka produce..... ", value)
})
app.listen(Port,()=> console.log(`started service on ${Port}`))