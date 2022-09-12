import React from 'react';
import { BlogContext } from '../context/BlogContext';

function ComentsList(props) {
  const { topicSelect } = React.useContext(BlogContext);
  let hideAllComents = false;
  if(topicSelect().topic === "Not Found"){
    hideAllComents = true;
  }
  return (
    <section 
      className={`coments ${hideAllComents && 'hide'}`}
    >
      {props.children}
    </section>
  );
}

export { ComentsList }