import React from 'react';

function Theme( props ) {

  let themeSon;
  let themeGrandson;

  if(props.theme==="cosmos") {
    themeSon = 'space';
    themeGrandson = 'stars';
  } else if(props.theme==="planet") {
    themeSon = `flora__${props.planetType}`;
    themeGrandson = `fauna__${props.planetType}`;
  }

  return (
    <React.Fragment>
      <div className={`${props.theme} ${props.planetType && props.planetType}`} id={`${props.theme}`}>
        {/* <div className='extra' id='extra'></div> */}

        <div className={themeSon} id={themeSon}>
          <div className={themeGrandson} id={themeGrandson}></div>
          <div className={themeGrandson} id={themeGrandson}></div>
          <div className={themeGrandson} id={themeGrandson}></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { Theme }