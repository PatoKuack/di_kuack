import React from 'react';

function CreateButton(props) {
  return (
    <React.Fragment>
      <button 
        className={`button ${props.classN}`} 
        onClick={props.onAction}
        type = {props.type}
        title = {props.title}
      >
        {props.content}
      </button>
    </React.Fragment>
  );
}

export { CreateButton }