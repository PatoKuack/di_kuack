import React from 'react';
import { NavLink } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';

function BlogTopicItem(props) {
  const { topicFavorite, favoriteList } = React.useContext(BlogContext);

  const onFavorite = () => {
    topicFavorite(props.topic);
  }

  let url = `${props.topic.toLowerCase().replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i').replaceAll('ó', 'o').replaceAll('ú', 'u').replaceAll('ü', 'u').replaceAll('ñ', 'n').replaceAll(' ', '_')}`;
  
  return (
    <React.Fragment>
      <li>
        {/* <label 
          className={`topic-label__favorite ${!(favoriteList.includes(props.topic)) && 'transparent'}`}
          for = {`topic-favorite__${url}`}
        >
          &#9889;
        </label> */}
        {/* <input 
          className = 'topic-input__favorite'
          onClick = { onFavorite } 
          id = {`topic-favorite__${url}`}
          type = "checkbox"
        /> */}
        <span 
          className={`topic-favorite ${!(favoriteList.includes(props.topic)) && 'transparent'}`}
          onClick = { onFavorite }
        >
          &#9889;
        </span> 
        <NavLink to={ `/blog/${url}` }>
          { props.topic }
        </NavLink>
      </li>
    </React.Fragment>
  );
}

export { BlogTopicItem }