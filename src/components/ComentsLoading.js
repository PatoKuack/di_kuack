import React from 'react';
import { CreateButton } from '../components/CreateButton';
import { BlogIcon } from '../components/BlogIcon';

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
            content = "&#129311; Someone love it"
            type = "button"
            class={`no-styles-button coments-reaction__loved`}
          />
        </div>
        
        <CreateButton 
          content = {
            <BlogIcon 
              type={"delete-button"}
              colorA={"red"}
              classN={"coments-item__close__icon"}
            />
          }
          class = "no-styles-button coments-item__close"
        />
      </div>
    </React.Fragment>
  );
}

export { ComentsLoading }