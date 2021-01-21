import React  from 'react'
import {BrowserRouter ,Route,Switch}    from "react-router-dom"
import './App.css';
import Home from './component/Home';
import Adduser from './component/Adduser'
import Plususer from './component/Plususer'
import Transfer1 from './component/Transfer1'
import Transfer2 from './component/Transfer2'
import PaymentAmount from './component/PaymentAmount'
import Result from './component/Result'

const Routing=()=>{
  return(
  <Switch>
    <Route exact path='/'>
      <Home/>
    </Route>
    <Route exact path='/adduser'>
      <Adduser/>
    </Route>
    <Route exact path='/plususer'>
      <Plususer/>
    </Route>
    <Route exact path='/transfer1'>
      <Transfer1/>
    </Route>
    <Route exact path='/user/:id1'>
      <Transfer2/>
    </Route>
    <Route exact path='/:id1/:id2'>
      <PaymentAmount/>
    </Route>
    <Route exact path='/result'>
      <Result/>
    </Route>
  </Switch>
  )}
function App() {
  
  return (
    <div className="app">
   <BrowserRouter>
       <Routing/>
   </BrowserRouter>
    </div>
  );
}

export default App;
