import React from 'react';

function BlogSectionList(props) {

  const toSection = () => {
    console.log(props.section);
  }

  return (
    <li 
    className={`section-item ${props.select && 'section-item__selected'}`} 
    id={`${props.id}`}
    onClick={toSection}
    >
      <p>{props.section}</p>
    </li>
  );
}

export { BlogSectionList }