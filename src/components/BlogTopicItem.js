import React from 'react';
import { NavLink } from 'react-router-dom';

function BlogTopicItem(props) {

  let url = `/blog/${props.topic.toLowerCase().replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i').replaceAll('ó', 'o').replaceAll('ú', 'u').replaceAll('ü', 'u').replaceAll('ñ', 'n').replaceAll(' ', '_')}`;
  
  return (
    <React.Fragment>
      <li>
        <NavLink to={ url }>
          { props.topic }
        </NavLink>
      </li>
    </React.Fragment>
  );
}

export { BlogTopicItem }