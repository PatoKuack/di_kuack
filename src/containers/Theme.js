import React from 'react';

function Theme({children}) {
  return (
    <React.Fragment>
      <div className='layout-theme'>
        {children}
      </div>
    </React.Fragment>
  );
}

export { Theme }