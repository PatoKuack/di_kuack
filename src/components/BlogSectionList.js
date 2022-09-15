import React from 'react';

function BlogSectionList(props) {

  return (
    <li 
      className={`section-item ${props.select && 'section-item__selected'}`} 
      onClick={props.onSelected}
    >
      <span>{props.name}</span>
    </li>
  );
}

export { BlogSectionList }