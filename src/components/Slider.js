import React,{useState} from 'react'
import GridImage from './GridImage';
import {useSelector} from 'react-redux'
import GalleryItem from './GalleryItems';
import Loader from './Loader';
import { Alert } from './Alert';

export default function Slider() {
    const list = useSelector(state => state.galleryaArrays.imageLists)
    const loading=useSelector(state=>state.app.loading)
    const alerts=useSelector(state=>state.app.alert)
    const [current,setCurrent]=useState(0);
    const length=list.length;
    const nextSlide=()=>{
        setCurrent(current===length-1?0:current+1);
    }
    const prevSlide=()=>{
        setCurrent(current===0?length-1:current-1);
    }
    const setNewCurrent=(event)=>{
        setCurrent(+event.target.id);
}

if (loading===true||alerts){
  return <Loader/>
  }
  if(alerts){
    return <Alert text={alerts.toString()}/>
  }

    return (
        <section className="banner">
            <div className="wrapper">
            <section className="slider">   
          <div class="slide">
          {
                list.map((item,index)=>{
                  return  (<GalleryItem index={index} current={current} item={item}/>)
                })
            }
          </div>
            </section>
           
        </div>
       <GridImage slider={list} 
       currentImage={current} 
       setNewCurrent={setNewCurrent} 
       nextSlide={nextSlide} 
       prevSlide={prevSlide}/>
   </section>
    )
}
