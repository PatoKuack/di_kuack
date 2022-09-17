import React from 'react';
import { NavLink } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';
import { BlogIcon } from '../components/BlogIcon';

function BlogTopicItem(props) {
  const { topicFavorite, favoriteList } = React.useContext(BlogContext);

  const onFavorite = () => {
    topicFavorite(props.topic);
  }
  let color;
  let selected = "";
  if(!(favoriteList.includes(props.topic))) {
    color = "#32697f50";
  }else {
    color = "#b0def0";
    selected = "icon-container__selected";
  }

  let url = `${props.topic.toLowerCase().replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i').replaceAll('ó', 'o').replaceAll('ú', 'u').replaceAll('ü', 'u').replaceAll('ñ', 'n').replaceAll(' ', '_')}`;
  
  return (
    <React.Fragment>
      <li className='topic-item'>
        {/* <span 
          className={`topic-favorite ${!(favoriteList.includes(props.topic)) && 'transparent'}`}
          onClick = { onFavorite }
        >
          &#9889;
        </span>  */}
        <BlogIcon 
          type={"check"}
          colorA={color}
          selected={selected}
          onClick={onFavorite}
        />
        <NavLink to={ `/blog/${url}` }>
          { ` ${props.topic}` }
        </NavLink>
      </li>
    </React.Fragment>
  );
}

export { BlogTopicItem }