import React from 'react';
import '../styles/main.scss'
import { Theme } from "./Theme";

function Layout({children}) {
  return (
    <div className='layout'>

      <Theme />

      {children}
      
    </div>
  );
}

export { Layout }