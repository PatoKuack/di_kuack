import React from 'react';

function Theme( props ) {

  let themeSon;
  let themeGrandson;

  if(props.theme==="cosmos") {
    themeSon = 'space';
    themeGrandson = 'stars';
  } else if(props.theme==="planet") {
    themeSon = 'flora';
    themeGrandson = 'fauna';
  }

  return (
    <React.Fragment>
      <div className={`${props.theme}`} id={`${props.theme}`}>
        {/* <div className='extra' id='extra'></div> */}

        <div className={`${themeSon}`} id={`${themeSon}`}>
          <div className={`${themeGrandson}`} id={`${themeGrandson}`}></div>
          <div className={`${themeGrandson}`} id={`${themeGrandson}`}></div>
          <div className={`${themeGrandson}`} id={`${themeGrandson}`}></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { Theme }