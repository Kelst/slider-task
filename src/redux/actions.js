import { CHANGE_SWITCH, CHANGE_VIEW, FETCH_GALLERY, HIDE_ALERT, HIDE_LOADER, REQUEST_GALLERY, SHOW_ALERT, SHOW_LOADER } from "./types";

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
export function showLoader(){
  return {
    type:SHOW_LOADER
  }
}
export function hideLoader(){
  return {
    type:HIDE_LOADER
  }
}
export function showAlert(text) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    })

    setTimeout(() => {
      dispatch(hideAlert())
    }, 3000)
  }
}
export function hideAlert(){
  return {
    type:HIDE_ALERT
  }
}

  // export function fetchGallery(){
  //   return async dispatch=>{
  //     const response = await fetch('https://my-json-server.typicode.com/Kelst/server/Photos');
  //     const json=await response.json();
  //     dispatch({type:FETCH_GALLERY,payload:json})


  //   }
  // }
