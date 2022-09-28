import React from 'react';
import { BlogIcon } from '../components/BlogIcon';
import { CreateButton } from '../components/CreateButton';

function BlogSectionList(props) {
  let color;
  if(props.select) {
    color = "#b0def0";
  }else {
    color = "#32697f50";
  }

  return (
    <li 
      className={`sections-item ${props.select && 'sections-item__selected'}`} 
      onClick={props.onSelected}
    >
      <BlogIcon 
        type={"check"}
        colorA={color}
        selected={"sections-item__spotlight"}
      />
      <CreateButton 
        content = {props.name}
        type = "button"
        class = "no-styles-button sections-item__button"
      />
      {/* <span className='sections-item__text'>{props.name}</span> */}
    </li>
  );
}

export { BlogSectionList }