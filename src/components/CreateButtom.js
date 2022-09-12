import React from 'react';

function CreateButtom(props) {
  return (
    <React.Fragment>
      <button 
        className='button' 
        onClick={props.onAction}
        type = {props.type}
      >
        {props.content}
      </button>
    </React.Fragment>
  );
}

export { CreateButtom }