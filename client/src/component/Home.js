import React, { useEffect, useState } from 'react';
import {useHistory}   from 'react-router-dom'
import axios from 'axios';
import "../style/Home.css"
import image from "../style/pic/images.png"
import transfer from "../style/pic/transfer.jpg"
import interest from "../style/pic/interest.jpg"



const Home = () => {
    const history=useHistory()
    
const plususer=()=>{
   
    history.push('/adduser');
  }
  const transfer1=()=>{
   
    history.push('/transfer1');
  }
    return (
        <div className="main-container">
            <div className="Navbar">
                 <div className="logo">Spark</div>
                 <div className="menu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/adduser">CreateUser</a></li>
                        <li><a href="/transfer1">Transfer</a></li> 
                     </ul>
                 </div>
                
            </div>
            <div className="Greating">
                     <h1>Welcome to </h1>
                     <h3>Spark Bank </h3>
                 </div>
             <div className="footer">
                 <div className="adduser">
                       <div className="img" >
                           <img src={image} className="img1"></img>
                       </div>
                       <button onClick={()=>plususer()}> Add user</button>
                 </div>
                 <div className="adduser">
                         <div className="img">
                         <img src={transfer} className="img1"></img>
                         </div>
                         <button onClick={()=>transfer1()}> transfer</button>
                 </div>
                 <div className="adduser">
                         <div className="img">
                         <img src={interest} className="img1"></img>
                         </div>
                         <button > about interest</button>
                 </div>
             </div>    
          
        </div>
    );
};

export default Home;