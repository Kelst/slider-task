
import React ,{useState,useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { changeView } from '../redux/actions';

export default function GridImage({slider,setNewCurrent,currentImage,prevSlide,nextSlide}) {
    const [listImage, setlistImage] = useState([]);
    const toggleView = useSelector(state => state.galleryaArrays.toggleView);
    const dispatch = useDispatch();
    useEffect(() =>{
    setlistImage(slider)
     },[slider]);
     function findByText(str){
        if(str==="")
        {
            setlistImage(slider)
        } else{
       const filter = slider.filter(item=>{
           return item.title.toLowerCase().includes(str);
       });
       setlistImage(filter);
        }
   }
   
    return (
        
        <div  className="wrapper">
             <div className="wrapper">
            <div className="arrow">
                <div className="arrow-hover" onClick={prevSlide}>
                    <div></div>
                </div>
                <div className="arrow-hover-right"  onClick={nextSlide}>
                    <div></div>
                </div>
            </div>
            <div className="d7">
                <div><input type="text"onChange={(event)=>{findByText(event.target.value)}} placeholder="search ..."/></div> 
                <div className="nav-toggle"><span>Grid/List</span><div className={toggleView?"switch-btn":"switch-btn switch-on"} onClick={()=>dispatch(changeView())} ></div></div>
                
                 </div>
        </div>
             <div className="container">
             <div className={!toggleView?"grid-list":"grid-container"}>
             {
                
            listImage.length!=0? listImage.map((element,index)=>{
             return (
                 
             <div className="grid-items" onClick={setNewCurrent} key={index}><div><img className="image-min grid-items" style={{border:currentImage===index?"1px solid black":""}} src={element.url} id={index} alt="im" /> </div>
               
               <div style={toggleView?{display:'none'}:{display:'block'}} className="text-title">
               <p >{element.title}</p>
               </div>
               
               </div>)
            }):<h1>no matches</h1>}
                 </div> 
             </div>
        </div>
    )
}
