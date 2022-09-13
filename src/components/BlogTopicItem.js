import React from 'react';
import { NavLink } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';

function BlogTopicItem(props) {
  const { topicFavorite, favoriteList } = React.useContext(BlogContext);

  const onFavorite = () => {
    topicFavorite(props.topic);
  }
  /* const onDeletFavorite = () => {
    deletFavorite(props.topic);
  } */

  let url = `/blog/${props.topic.toLowerCase().replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i').replaceAll('ó', 'o').replaceAll('ú', 'u').replaceAll('ü', 'u').replaceAll('ñ', 'n').replaceAll(' ', '_')}`;
  
  return (
    <React.Fragment>
      <li>  	
        <span 
          className={`topic-favorite ${!(favoriteList.includes(props.topic)) && 'transparent'}`}
          onClick = { onFavorite }
        >
          &#9889;
        </span> 
        <NavLink to={ url }>
          { props.topic }
        </NavLink>
      </li>
    </React.Fragment>
  );
}

export { BlogTopicItem }