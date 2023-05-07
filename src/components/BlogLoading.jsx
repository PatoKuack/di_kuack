import React from 'react';
import { Theme } from "../containers/Theme";

function BlogLoading( props ) {
  return (
    <React.Fragment>
      <div className='loading'>
        <Theme 
          theme = "cosmos"
          planetType = {null} 
        />
        <div className={`loading-planet ${props.planetType}`}></div>
        <div className={`loading-planet__earth ${props.planetType}`}></div>
        <div className={`loading-spacecraft ${props.loadType}`}>
          <div className='spacecraft__front'>
            <div className='arm'></div>
            <div className='arm'></div>
            <div className='leg'></div>
            <div className='leg'></div>
            <div className='trunk'></div>
            <div className='propulsion'></div>
            <div className='propulsion'></div>
          </div>
          <div className='spacecraft__side'>
            <div className='leg'></div>
            <div className='arm'></div>
            <div className='trunk'></div>
            <div className='propulsion'></div>
            <div className='propulsion'></div>
          </div>
        </div>
        <p className='loading-text'>Cargando ...</p>
      </div>
    </React.Fragment>
  );
}

export { BlogLoading }