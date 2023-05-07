import React from 'react';
import { CreateButton } from '../CreateButton';
import { BlogIcon } from '../BlogIcon';

function ComentsLoading( props ) {
  return (
    <React.Fragment>
      <div className='loading-coments__item'>
        <div className='loading-animation'>
          <div className='loading-animation__light'></div>
        </div>
        <div className='loading-coments__text'></div>
        <div className='coments-item__reaction'>
          <CreateButton 
            content = "&#129311; Someone loves it"
            type = "button"
            classN={`no-styles-button coments-reaction__loved`}
          />
        </div>
        
        <CreateButton 
          content = {
            <BlogIcon 
              type={"delete-button"}
              colorA={"red"}
              classN={""}
            />
          }
          classN = "no-styles-button coments-item__close"
        />
      </div>
    </React.Fragment>
  );
}

export { ComentsLoading }