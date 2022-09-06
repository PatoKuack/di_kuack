import React from 'react';
import { NavLink } from 'react-router-dom';

function BlogTopicItem(props) {
  return (
    <React.Fragment>
      <li><NavLink to="/blog">{ props.topic }</NavLink></li>
    </React.Fragment>
  );
}

export { BlogTopicItem }