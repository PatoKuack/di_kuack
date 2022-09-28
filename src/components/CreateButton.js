import React from 'react';

function CreateButton(props) {
  return (
    <React.Fragment>
      <button 
        className={`button ${props.class}`} 
        onClick={props.onAction}
        type = {props.type}
      >
        {props.content}
      </button>
    </React.Fragment>
  );
}

export { CreateButton }