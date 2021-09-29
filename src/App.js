import React, { useEffect } from "react";
import {Switch,Route,Redirect} from 'react-router-dom';
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Beaproject from "./pages/Beaproject";
import Payangar from "./pages/Payangar";

const App=()=>{
  useEffect(() => {
    const inViewport=(entries,observer)=>{
        entries.forEach(entry=>{
            entry.target.classList.toggle('is-inViewport',entry.isIntersecting);
        });
    };
    const Obs=new IntersectionObserver(inViewport);
    const obsOptions={};

    const Els_inViewport=document.querySelectorAll('[data-inviewport]');
    Els_inViewport.forEach(El=>{
        Obs.observe(El,obsOptions);
    });
  }, [])
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