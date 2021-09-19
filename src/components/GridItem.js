import React from 'react'

export default function GridItem({currentImage,index,setNewCurrent,element,toggleView}) {
    return (
        <div className="grid-items" 
             style={{transform:currentImage===index?"scale(1.05)":""}}
              onClick={setNewCurrent} key={index}>
                  <img className="image-min grid-items" 
                   src={element.url} id={index} alt="im" /> 
                 <div style={toggleView?{display:'none'}:{display:'block'}} 
               className="text-title">
               <p>{element.title}</p>
               </div>
               </div>)
            }
    
