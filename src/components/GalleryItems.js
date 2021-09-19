import React from 'react'

function GalleryItem({index,current,item}) {
    return (
        
           <div className={index===current?"slide active":"slide"} key={index}> 
             {index===current && <img src={item.url} alt="im" className="image"/>}
          </div>
    )
}
export default GalleryItem
