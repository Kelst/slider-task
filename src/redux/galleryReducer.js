import {CHANGE_SWITCH, CHANGE_VIEW, FETCH_GALLERY} from './types'

const initialState = {
  toggle:true,
  toggleView:true,
  imageLists: [],
  
}


export const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GALLERY:
      return { ...state, imageLists: action.payload }
      case CHANGE_SWITCH:
        return {...state,toggle:!state.toggle}
        case CHANGE_VIEW:return {...state,toggleView:!state.toggleView}
    default: return state
  }
}
