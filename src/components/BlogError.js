import React from 'react';

function BlogError({error}) {
  return (
    <React.Fragment>
      <p className='loading'>{ error }</p>
    </React.Fragment>
  );
}

export { BlogError }