import React from 'react';

function ComentsItem({children}) {
  /* let color;
  if(props.select) {
    color = "#b0def0";
  }else {
    color = "#32697f50";
  } */
  
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

export { ComentsItem }