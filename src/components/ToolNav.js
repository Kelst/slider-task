import React from 'react'
import { ToggleButton } from './ToggleButton';
import { changeView } from '../redux/actions';
import { useDispatch} from 'react-redux'
import { SearchInput } from './SearchInput';

export default function ToolNav({findByText,toggleView,prevSlide,nextSlide}) {
    const dispatch = useDispatch();
    return (
        <div className="tool"> <div className="toolNav">
      <div>  
          <SearchInput onChange={(event)=>{findByText(event.target.value)}} placeholder="search ..." type="text"/></div>
          <ToggleButton toggleView={toggleView} onClick={()=>dispatch(changeView())} />
     </div></div>
       
    )
}
