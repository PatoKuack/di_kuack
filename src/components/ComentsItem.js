import React from 'react';
import { CreateButton } from '../components/CreateButton';
import { ModalDelComent } from "./ModalDelComent";
import { BlogIcon } from '../components/BlogIcon';
import { BlogProvider, BlogContext } from  "../context/BlogContext";

function ComentsItem(props) {
  /* let color;
  if(props.select) {
    color = "#b0def0";
  }else {
    color = "#32697f50";
  } */
  return(
  <BlogProvider>
      <BlogContext.Consumer>
        {({
          openModal,
          setOpenModal,
          deletComent,
          topicSelect
        }) => {
          
          const onVerifyDelete = () => {
            setOpenModal(true);
          }
          function showModal() {
            onVerifyDelete();
          }
          const onCancelDelete = () => {
            setOpenModal(false);
          }
          const onConfirmDelete = () => {
            deletComent(props.id)
            setOpenModal(false);
          }
          return (
            <li className={`coments-item ${(props.topic !== topicSelect().topic) && 'hide'}`} >
              <p className='coments-item__text'>{props.text}</p>
              <div className='coments-item__reaction'>
                <CreateButton 
                  content = "&#129311; Someone love it"
                  onAction = { props.onLove }
                  type = "button"
                  class={`no-styles-button coments-reaction__loved ${props.loved && 'coments-reaction__color'}`}
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
                onAction = { showModal }
                class = "no-styles-button coments-item__close"
              />
        
              {!!openModal && (

                <ModalDelComent>
                  <div className='modal-background' onClick={onCancelDelete}>
                    <div className='modal'>
                      <p className='modal-text__ask'>Confirma que quieres eliminar este comentario:</p>
                      <p className='modal-text__verify'>{props.text}</p>
                      <CreateButton 
                        content="Cancelar" 
                        type="button" 
                        onAction = { onCancelDelete } 
                        class="modal-button__cancel"
                      />
                      <CreateButton 
                        content="Confirmar" 
                        type="button" 
                        onAction = { onConfirmDelete } 
                        class="modal-button__accept"
                      />
                    </div>
                  </div>
                </ModalDelComent>
              )}
            </li>
          );
        }}
      </BlogContext.Consumer>
    </BlogProvider>
  );
}

export { ComentsItem }