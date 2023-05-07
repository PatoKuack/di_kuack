import React from 'react';

function ComentsForm({children}) {
  

  // const onChange = (event) => {
  //   setNewComentValue(event.target.value);
  // }

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

export { ComentsForm }