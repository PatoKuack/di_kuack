import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/main.scss';

function ModalDelComent({ children }) {
  return ReactDOM.createPortal(
    <div className='modal'>
      { children }
    </div>,
    document.getElementById('modal')
  );
}

export { ModalDelComent }