import React, { useEffect, useState } from 'react';
import {useHistory}   from 'react-router-dom'
import axios from 'axios';
import '../style/Plususer.css'

const Plususer = () => {
      const history =useHistory();
      const[name,setName]=useState('')
      const[email,setEmail]=useState('')
      const[currentblance,setCurrentblance]=useState(0)
       const user ={name ,email,currentblance}
    const submit=(e)=>{
    //    console.log(user);
        e.preventDefault();
        axios.post('/createuser',user)
        .then(res=>{
            // console.log(res);
        })
        history.push('/');
    }
    return (
        <div class="add-model model-wrapper">
        <div class="model">
            <div class="model-header">
                <div class="model-body"><h3>Add New user</h3></div>
                    <form  class="form" autocomplete="off" onSubmit={(e)=>submit(e)}>
                        <input type="text" required name="firstname" placeholder="First Name"
                         value={name}
                         onChange={(e)=>setName(e.target.value)}/>
                        <input type="email" required name="email" placeholder="Email"
                         value={email}
                         onChange={(e)=>setEmail(e.target.value)}/>
                        <input type="number" required name="phone" placeholder="Current Blance "
                         value={currentblance}
                         onChange={(e)=>setCurrentblance(e.target.value)}/>
                        <button class="btn " type="submit">submit</button>
                    </form>
                </div>
              </div>
        </div>
      
    );
};

export default Plususer;