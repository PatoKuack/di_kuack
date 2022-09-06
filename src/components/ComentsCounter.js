import React from 'react';

function ComentsCounter({ loves, total }) {
  
  return (
    <React.Fragment>
      <p>Retroalimentaciones:</p>
      <label>Hay {total} comentarios</label>
      <textarea placeholder="Ingresa tu retroalimentación o aporte =D."></textarea>
    </React.Fragment>
  );
}

export { ComentsCounter }