import React from 'react';
import '../styles/main.scss'

function Layout({children}) {
  return (
    <div className='layout' id='layout'>

      {children}
      
    </div>
  );
}

export { Layout }