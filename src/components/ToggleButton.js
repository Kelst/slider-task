import styled from 'styled-components'
export const ToggleButton=styled.div`
        display: inline-block;
        width: 62px;
        height: 24px; 
        border-radius: 12px;
        background: ${props=>props.toggleView ? "#bfbfbf":"#fff"} ; 
        z-index: 0;
        margin: 0;
        padding: 0;
        border: none;
        cursor: pointer;
        position: relative;
        transition-duration: 300ms;
    &:after{
        content: "";
        color: white;
        height: 36px; 
        width: 36px; 
        border-radius: 18px;
        background:${props=>props.toggleView ? "#fff" : "rgb(49, 48, 48)" };  ; 
        top: -6px; 
        left: ${props=>props.toggleView ? "-6px" : "30px" }; 
        transition-duration: 300ms; 
        box-shadow:${props=>props.toggleView ? "0 0 10px 0 #999999":"box-shadow: inset 0 0 10px 0 #999999"}; 
        position: absolute;
        z-index: 1;
    }

`

