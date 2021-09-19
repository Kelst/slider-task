import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import React,{useState,useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import {useDispatch, useSelector} from 'react-redux'
  import {fetchImage,changeSwitch, fetchGallery} from './redux/actions'
  import { Alert } from './components/Alert';
function App() {
 
 const dispatch = useDispatch()
 const alerts=useSelector(state=>state.app.alert)
  useEffect(() => {
  dispatch(fetchImage())
  }, [])
  if(alerts){
    return <Alert text={alerts.toString()}/>
    
  }

  return (
    <div>
      
    <Router>
     <Header />
     <Switch>
     <Route exact path="/slider-task/">
                {alerts?<Alert text={alerts.toString()}/>: <Slider />}
          </Route>
          <Route path="/slider-task/about">
                 <About/>
          </Route>
          <Route path="/slider-task/contact">
                 <Contact/>
          </Route>
     </Switch>
    </Router>
    </div>
  );
}

export default App;
