import {combineReducers} from 'redux'
import { appReducer } from './appReducer'
import {galleryReducer} from './galleryReducer'

export const rootReducer = combineReducers({
  galleryaArrays: galleryReducer,
  app:appReducer
  
})
