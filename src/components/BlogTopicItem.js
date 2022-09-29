import React from 'react';
import { NavLink } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';
// import { BlogIcon } from '../components/BlogIcon';

function BlogTopicItem(props) {
  const { topicFavorite, favoriteList } = React.useContext(BlogContext);

  const onFavorite = () => {
    topicFavorite(props.topic);
  }
  /* let color;
  let selected = "";
  if(!(favoriteList.includes(props.topic))) {
    color = "#32697f50";
  }else {
    color = "#b0def0";
    selected = "icon-container__selected";
  } */

  let url = `${props.topic.toLowerCase().replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i').replaceAll('ó', 'o').replaceAll('ú', 'u').replaceAll('ü', 'u').replaceAll('ñ', 'n').replaceAll(' ', '_')}`;
  
  return (
    <React.Fragment>
      <li className='topic-item'>
        <input 
          type={'checkbox'} 
          className='topic-item__input' 
          id='topic-input'
          onClick = { onFavorite }
          checked={(favoriteList.includes(props.topic)) && "true"}
        ></input>
        <span className='topic-item__favorite'>
          <svg 
            width="100%" 
            height="100%" 
            viewBox="-1 -1 11 11"
            className={`topic-favorite__svg ${(favoriteList.includes(props.topic)) && 'topic-favorite__fill'}`}
          >
            <polygon points="4.55,0 5.95,2.85 9.1,3.3 6.82,5.52 7.36,8.65 4.55,7.17 1.74,8.65 2.27,5.52 0,3.3 3.14,2.85 " stroke='currentColor'/>
          </svg>
        </span>
        
      
        <NavLink to={ `/blog/${url}` } className="topic-item__a">
          { ` ${props.topic}` }
        </NavLink>
      </li>
    </React.Fragment>
  );
}

export { BlogTopicItem }