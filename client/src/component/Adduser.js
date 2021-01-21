import React, { useEffect, useState } from 'react';
import {useHistory}   from 'react-router-dom'
import axios from 'axios';
import '../style/Adduser.css'

const Adduser = () => {
      const[user ,setUser]=useState([]);
       const history=useHistory();
    useEffect(()=>{
         axios.get('/user')
         .then(user=>{
            //  console.log(user.data);
             setUser(user.data)
         })
    },[])
  const adduser=()=>{
      history.push('/plususer');
  }

    return (
    <div className="container">
        <header>
            <h3>user list</h3>
          </header>
        <div className="table-wrapper">
            <table className="table-users">
                <tr>
                   <th className="th1">First Name</th> 
                   <th className="th1">Email</th> 
                   <th className="th1">currentblance</th> 
                </tr>
                
                {
                       user.map((item)=>{
                          return(
                              
                              <tr >
                                  <td className='td1'> {item.name}</td>
                                  <td className='td1' > {item.email}</td>
                                  <td className='td1'> {item.currentblance}</td>
                              </tr>
                          )
                       })
                    
                }
              
            </table>
            <button className="btn btn-add" onClick={()=>adduser()}>Add user</button> 
            </div>

          


        </div>
   
    );
};

export default Adduser;