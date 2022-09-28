import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/main.scss';

function ModalDelComent( {children} ) {
  return ReactDOM.createPortal(
    <React.Fragment>
      { children }
    </React.Fragment>,
    document.getElementById('modal')
  );
}

export { ModalDelComent }