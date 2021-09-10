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
function App() {
 
 const dispatch = useDispatch()

//   const [SliderData,setList]=useState([]);
//   useEffect(() => {
//  fetch('http://localhost:3006/Photos')
// .then(response => response.json())
// .then(json => setList([...json]))
    
// }, [])
useEffect(() => {
  dispatch(fetchGallery())
    
}, [])
  return (
    <div className="conatiner">
    <Router>
     <Header />
     
     <Switch>
     <Route exact path="/slider-task/">
                 <Slider />
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
