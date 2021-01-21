const express = require('express');
const mongoose=require('mongoose');
const User =require('../model/user')
const Router =express.Router();


Router.post('/createuser',(req,res)=>{
     const {name,email,currentblance}=req.body; 
     const user = new User({
         name,
         email,
         currentblance
     })
     user.save()
     .then(user=>{
        res.json({message:"saved successfully"})
     })
    .catch(err=>{
           console.log(err);
        })
 });
 Router.get('/user',(req,res)=>{
       User.find()
       .then((user)=>{
           res.send(user);
       })
       .catch((err)=>{
           res.send({err :"not get user"});
       })
 });
 Router.get('/user/:id',(req ,res)=>{
     User.find( {_id :{$ne: req.params.id}})
     .then((user)=>{
            res.json(user)
     })
     .catch(err=>{
         res.send("user not find ");
     })
 })
 Router.put('/user/:id1/:id2',  (req,res)=>{
        User.find({_id : req.params.id1}) 
        .then(  (user)=>{
           const blance = user[0].currentblance;
          if(blance >= req.body.blance)
          {
              user[0].currentblance= (blance - req.body.blance);
                    user[0].save();
            //   res.json(user);
            User.find({_id : req.params.id2})
            .then(user2 =>{
               const blance = user2[0].currentblance;
              user2[0].currentblance = blance + Number(req.body.blance);
              user2[0].save();
              res.json("payment successful"); 
            })
          }
          else{
              res.send("unsufficent amount ");
          }
           
        }) 
     
 })
 module.exports=Router;