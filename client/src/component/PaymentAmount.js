import React, { useEffect, useState } from 'react';
import {useHistory,Link,useParams}   from 'react-router-dom'
import axios from 'axios';
import M from "materialize-css";
import '../style/Plususer.css'

const PaymentAmount = () => {
    const[blance,setCurrentblance]=useState(0);
    const history=useHistory();
    const{id1,id2}=useParams();
    const user ={blance}
    const submit=(e)=>{
        e.preventDefault();
        axios.put(`/user/${id1}/${id2}`, user)
        .then(res=>{
          console.log(res.data);
          M.toast({html: res.data ,classes :"green"});
          setTimeout(()=>{
              history.push('/');
            }, 4000);
        })
      
    }
    return (
        <div className="paycontainer">
             <div class="model-body amount"><h3>Enter Amount</h3>
             </div>
             <div>
                    <form  class="form" autocomplete="off" onSubmit={(e)=>submit(e)}>
                      
                        <input type="number" required name="phone" placeholder="Amount "
                         value={blance}
                         onChange={(e)=>setCurrentblance(e.target.value)}/>
                        <button class="btn " type="submit">submit</button>
                    </form>
                    </div>
        </div>
    );
};

export default PaymentAmount;