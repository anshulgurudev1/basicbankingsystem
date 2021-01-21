import React, { useEffect, useState } from 'react';
import {useHistory,Link,useParams}   from 'react-router-dom'
import axios from 'axios';
import '../style/Adduser.css'
import Adduser from './Adduser';

const Transfer2 = () => {
    const[user ,setUser]=useState([]);
    const history=useHistory();
    const{id1}=useParams();
 useEffect(()=>{
     console.log("hello");
      axios.get(`/user/${id1}`)
      .then(user=>{
          console.log(user.data);
          setUser(user.data)
      })
 },[])
const adduser=(item)=>{
   history.push(`/${id1}/${item}`);
}

    return (
        <div className="container">
        <header>
            <h3>Transfer To</h3>
          </header>
        <div className="table-wrapper">
            <table className="table-users">
                <tr>
                   <th className="th1">First Name</th> 
                   <th className="th1">Email</th> 
                   <th className="th1">currentblance</th> 
                   <th className="th1">Transfer</th> 
                </tr>
              
                {
                       user.map((item)=>{
                          return(
                           
                            
                                 <tr >
                                  <td className='td1'> {item.name}</td>   
                                  <td className='td1' > {item.email}</td>
                                  <td className='td1'> {item.currentblance}</td>
                                  
                                  <button className="btn btn-add" onClick={()=>adduser(item._id)}>Transfer To</button>
                                 
                                </tr>
                          
                           
                          
                            //  
                          )
                       })
                    
                }
              
            </table>
           
            </div>

          


        </div> 
       
    );
};

export default Transfer2;