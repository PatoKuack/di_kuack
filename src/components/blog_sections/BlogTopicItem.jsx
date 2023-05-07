import React from 'react';
import { NavLink } from 'react-router-dom';
// import { BlogIcon } from '../components/BlogIcon';

function BlogTopicItem(props) {

  const onFavorite = () => {
    props.topicFavorite(props.topic);
  }
  /* let color;
  let selected = "";
  if(!(favoriteList.includes(props.topic))) {
    color = "#32697f50";
  }else {
    color = "#b0def0";
    selected = "icon-container__selected";
  } */
  
  return (
    <React.Fragment>
      <li className='topic-item'>
        <span className='topic-item__favorite'>
          <input 
            type = {'checkbox'} 
            className = 'topic-item__input' 
            id = 'topic-input'
            onChange = { onFavorite }
            checked = {(props.favoriteList.includes(props.topic)) && true}
          ></input>
          <svg 
            width="100%" 
            height="100%" 
            viewBox="-1 -1 11 11"
            className={`topic-favorite__svg ${(props.favoriteList.includes(props.topic)) && 'topic-favorite__fill'}`}
          >
            <polygon points="4.55,0 5.95,2.85 9.1,3.3 6.82,5.52 7.36,8.65 4.55,7.17 1.74,8.65 2.27,5.52 0,3.3 3.14,2.85 " stroke='currentColor'/>
          </svg>
        </span>
        
      
        <NavLink to={ `/blog/${props.slug}` } className="topic-item__a">
          { ` ${props.topic}` }
        </NavLink>
      </li>
    </React.Fragment>
  );
}

export { BlogTopicItem }