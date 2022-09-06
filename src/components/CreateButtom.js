import React from 'react';

function CreateButtom() {
  return (
    <React.Fragment>
      <button className='button' onClick={() => console.log('clic')}>
        -&#62;
      </button>
    </React.Fragment>
  );
}

export { CreateButtom }