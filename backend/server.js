import cors from "cors"
import express from "express"

//app config
const app=express()
const port=4000

//middleware
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("API is working")
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})


// useful String
//mongodb+srv://21ucs192:<password>@cluster0.um2rnbl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0