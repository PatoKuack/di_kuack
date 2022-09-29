import React from 'react';

function ComentError({error}) {
  return (
    <React.Fragment>
      <p className='loading'>{ error }</p>
    </React.Fragment>
  );
}

export { ComentError }