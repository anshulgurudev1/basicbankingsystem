const express=require('express');
const mongoose = require('mongoose');
const user=require('./router/user')
const path =require('path');
const cors = require('cors')
require('dotenv').config();
const app =express();
const port=process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const uri =" mongodb+srv://anshul:bankingsystem@cluster0.3zyjf.mongodb.net/<dbname>?retryWrites=true&w=majority"
mongoose.connect(process.env.ATLAS_URI || uri ,{useNewUrlParser: true ,useUnifiedTopology: true});

mongoose.connection.on('connected',()=>{
    console.log('conected successfully');
})
mongoose.connection.on('error',(err)=>{
    console.log('not connected ',err);
})

app.use('/',user);

if(process.env.NODE_ENV === "production")
{
    app.use(express.static(path.join("client/bulid")));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client/build','index.html'));
    })
    
}

app.listen(port,()=>{
    console.log("server running successfully");
});