//Import
const express = require("express")
require('./connection')
var proModel = require('./Model/Product')
var stModel = require("./Model/User")
var cors = require('cors')

//Initialise
const app = express()

//mid
app.use(express.json());
app.use(cors())

//API creation
app.get('/', (req, res) => {
  res.send('Hello World')
})

//ADD api
app.post("/add", async(req,res) =>{
    try{
        await proModel(req.body).save()
        res.send({message:" Data added!"})
    }catch (error) {
        console.log(error)
    }
})


//ADD api for USER
app.post("/", async(req,res) =>{
    try{
        await stModel(req.body).save()
        res.send({message:" Signed Up successfully!"})
    }catch (error) {
        console.log(error)
    }
})

//Login api for user
app.post("/log", async(req,res) =>{
    try {
        var user = await stModel.findOne({ Email : req.body.Email})
        if(!user) {
            return res.send("User not found")
        }
        if(user.password === req.body.password) {
           return res.send("Logged In Successfully") 
        }
        else {
           return res.send("Invalid Crendentails")
        }
    } catch (error) {
        console.log(error)
        return res.send("An error occured!")
    }
})

//VIEW api
app.get("/view", async(req,res) =>{
    try{
        const data = await proModel.find()
        res.send(data);
    }catch (error) {
        console.log(error)
    }
})

//VIEW api
app.get("/vu", async(req,res) =>{
    try{
        const data = await stModel.find()
        res.send(data);
    }catch (error) {
        console.log(error)
    }
})

//DELETE api
app.delete("/del/:id", async(req,res) =>{
    try{
        await proModel.findByIdAndDelete(req.params.id)
        res.send({message : "Data deleted!"});
    }catch (error) {
        console.log(error)
    }
})

//UPDATE api
app.put("/up/:id", async(req,res) =>{
    try{
        const update = await proModel.findByIdAndUpdate(req.params.id,req.body,)
        //res.json(update);[This is for showing in the reponse terminal that which data has been updated.]
        res.send({message:"Data updated!"});
       
    }catch (error) {
        console.log(error)
    }
})

//Port setting
app.listen(3000,()=>{
    console.log("Port is running")
})