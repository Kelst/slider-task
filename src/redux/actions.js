import { CHANGE_SWITCH, CHANGE_VIEW, FETCH_GALLERY, REQUEST_GALLERY } from "./types";

export function fetchImage() {
    return {
      type: REQUEST_GALLERY
    }
  }
  export function changeSwitch(){
      return {
          type:CHANGE_SWITCH
      }
  }
  export function changeView(){
    return {
        type:CHANGE_VIEW
    }
}

  export function fetchGallery(){
    return async dispatch=>{
      const response = await fetch('https://my-json-server.typicode.com/Kelst/server/Photos');
      const json=await response.json();
      dispatch({type:FETCH_GALLERY,payload:json})


    }
  }
