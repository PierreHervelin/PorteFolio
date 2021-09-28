import React from "react";
import {Switch,Route,Redirect} from 'react-router-dom';
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Beaproject from "./pages/Beaproject";
import Payangar from "./pages/Payangar";

const App=()=>{
  return(
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/projectbea' component={Beaproject}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/payangar' component={Payangar}/>
      <Redirect to='/'/>
    </Switch>
  );
};

export default App;