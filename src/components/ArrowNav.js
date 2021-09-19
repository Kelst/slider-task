import React from 'react'
import  "./styles/ArrowNav.css";
function ArrowNav({prevSlide,nextSlide}) {
    return (
        <div className="arrow">
        <div className="arrow-hover-left" onClick={prevSlide}><div></div></div>
        <div className="arrow-hover-right" onClick={nextSlide}><div></div></div>
        </div>
    )
}

export default ArrowNav
