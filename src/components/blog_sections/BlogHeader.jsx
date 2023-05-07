import React from 'react';
// import '../styles/sass/components/_header.scss';

function BlogHeader(props) {
  return (
    <header className='header'>
      <h1>{props.title}</h1>
    </header>
  );
}

export { BlogHeader }