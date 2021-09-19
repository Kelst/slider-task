import React ,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import ArrowNav from './ArrowNav';
import GridItem from './GridItem';
import NoFoud from './NoFoud';
import ToolNav from './ToolNav';
export default function GridImage({slider,setNewCurrent,currentImage,prevSlide,nextSlide}) {
    const [listImage, setlistImage] = useState([]);
    const toggleView = useSelector(state => state.galleryaArrays.toggleView);
   
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
            <div className="arrowWraper"><ArrowNav prevSlide={prevSlide} nextSlide={nextSlide}/></div>
             
             <ToolNav toggleView={toggleView} findByText={findByText} prevSlide={prevSlide} nextSlide={nextSlide}/>
        
        <div className="container">
          <div className={!toggleView?"grid-list":"grid-container"}>
             {
            listImage.length!=0? listImage.map((element,index)=>{
             return <GridItem currentImage={currentImage}
                         index={index}
                         setNewCurrent={setNewCurrent}
                         element={element}
                         toggleView={toggleView}/>
            }):<NoFoud/>}
                 </div> 
             </div>
        </div>
    )
}
