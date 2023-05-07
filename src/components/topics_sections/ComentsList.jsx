import React from 'react';

function ComentsList({children}) {
  /* let hideAllComents = false;
  if(topicSelect().topic === "Not Found"){
    hideAllComents = true;
  } */
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

export { ComentsList }