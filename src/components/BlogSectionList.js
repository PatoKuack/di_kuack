import React from 'react';

function BlogSectionList(props) {

  return (
    <li 
    className={`section-item ${props.select && 'section-item__selected'}`} 
    id={`${props.id}`}
    onClick={props.onSelected}
    >
      {props.name}
    </li>
  );
}

export { BlogSectionList }