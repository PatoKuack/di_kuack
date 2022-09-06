import React from 'react';

function ComentsList(props) {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
}

export { ComentsList }