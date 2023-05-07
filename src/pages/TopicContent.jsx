import React, { useEffect, useState } from 'react';
import { BlogContent } from "../components/topics_sections/BlogContent";
import { ComentsForm } from "../components/topics_sections/ComentsForm";
import { ComentsItem } from "../components/topics_sections/ComentsItem";
import { ComentsList } from "../components/topics_sections/ComentsList";
import { BlogError } from '../components/BlogError';
import { BlogLoading } from '../components/BlogLoading';
import { ComentsLoading } from '../components/topics_sections/ComentsLoading';
import { CreateButton } from '../components/CreateButton';
import { BlogIcon } from '../components/BlogIcon';
import { Modal } from "../components/Modal";
import { Theme } from "../containers/Theme";
import { useBlog } from "../hooks/useBlog";
import { useTopics } from "../hooks/useTopics";
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/main.scss';

function TopicContent({theme, changeTheme}) {
  
  const { slug } = useParams();
  const navigate = useNavigate();
  const {
    wait,
    sections,
  } = useBlog();
  const {
    totalTopicComents,
    textCountComents,
    comentLoved,
    deletComent,
    addComent,
    countedComents,
    setCountedComents,
    openModal,
    setOpenModal,
    newComentValue,
    setNewComentValue,
    comentValues,
    setComentValues,
    comentsLoading,
    comentsError,
  } = useTopics();

  const currentTopicData = sections[sections.findIndex(section => section.name.toLowerCase().replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i').replaceAll('ó', 'o').replaceAll('ú', 'u').replaceAll('ü', 'u').replaceAll('ñ', 'n').replaceAll(' ', '_') === `${slug}`.split("-")[0])].list.find(data => data.slug === slug);

  const onSubmitComent = (event) => {
    event.preventDefault();
    if(!!newComentValue){
      addComent(newComentValue, currentTopicData.title);
      setNewComentValue('');
    }
  }
  const onConfirmDelete = (itemId) => {
    deletComent(itemId)
    setOpenModal(false);
  }
  const returnToHome = () => {
    navigate('/blog');
  }
  useEffect(()=>{
    textCountComents(currentTopicData.title);
  }, [newComentValue, openModal, comentsLoading]);
  
  useEffect(()=>{
    changeTheme(currentTopicData.planet);
  }, []);

  return (
    <React.Fragment>
      {wait && <BlogLoading 
        loadType = "loading-arriving" 
        planetType = {theme} 
      />}

      {!wait && <>
        <Theme 
          theme = "planet" 
          planetType = {theme} 
        />
        <BlogContent 
          currentTopicData={currentTopicData}
        />

        {currentTopicData && <ComentsList>
          <section className='coments'>
            <CreateButton 
              content = {
                <BlogIcon 
                  type={"return"}
                  classN={""}
                />
              }
              onAction = { returnToHome }
              classN = "no-styles-button content-return__button"
              title = "regresar"
            />
            
            <ComentsForm>
              <form onSubmit={onSubmitComent} className='coments-form'>
                <textarea 
                  value = { newComentValue }
                  onChange = { (event) => {setNewComentValue(event.target.value)} }
                  placeholder = "Ingresa tu retroalimentación o aporte del tema =D"
                  className='coments-form__textarea'
                  rows={3}
                />
                <CreateButton 
                  content = {<BlogIcon 
                    type = {"send-button"} 
                    classN = {""}
                  />}
                  type = "submit" 
                  classN = 'coments-form__button'
                  title = "Enviar"
                />
              </form>
            </ComentsForm>

            <p className='coments-counter'>{countedComents}</p>
            
            <ul className='coments-list'>
              {/* {comentsError && <BlogError error={comentsError} />}
              {comentsLoading && <BlogLoading loadType="loading-arriving" />} */}
              {comentsError && <BlogError error={comentsError} />}
              {comentsLoading && <ComentsLoading />}
              {(!comentsLoading && (countedComents==="¡Escribe el primer comentario!")) && <p className='coments-warningtext'>Los mensajes se guardarán en tu navegador y sólo los podrás ver tú, así que <b><u>puedes utilizarlos</u></b> para crear <b><u>notas personales</u></b> hasta que yo sepa cómo conectarlos en línea =P</p>}
              {comentValues.map( comented => {
                if(comented.topic === currentTopicData.title){
                  return(
                    <ComentsItem
                      key={comented.id}
                    >
                      <li className={'coments-item'} >
                        <p className='coments-item__text'>{comented.text}</p>
                        <div className='coments-item__reaction'>
                          <CreateButton 
                            content = "&#129311; Someone loves it"
                            onAction = { () => comentLoved(comented.id) }
                            type = "button"
                            classN = {`no-styles-button coments-reaction__loved ${comented.loved && 'coments-reaction__color'}`}
                            title = "Botón 'me gusta'"
                          />
                        </div>
                        
                        <CreateButton 
                          content = {
                            <BlogIcon 
                              type = {"delete-button"}
                              colorA = {"red"}
                              classN = {""}
                            />
                          }
                          onAction = { ()=>setOpenModal(true) }
                          classN = "no-styles-button coments-item__close"
                          title = "Eliminar comentario"
                        />

                        {!!openModal && 
                          <Modal>
                            <div className='modal-background' onClick={()=>setOpenModal(false)}>
                            <div className='modal'>
                                <p className='modal-text__ask'>Confirma que quieres eliminar este comentario:</p>
                                <p className='modal-text__verify'>{comented.text}</p>
                                <CreateButton 
                                  content = "Cancelar" 
                                  type = "button" 
                                  onAction = { ()=>setOpenModal(false) } 
                                  classN = "modal-button__cancel"
                                  title = "Cancelar eliminación"
                                />
                                <CreateButton 
                                  content = "Confirmar" 
                                  type = "button" 
                                  onAction = { ()=>onConfirmDelete(comented.id) } 
                                  classN = "modal-button__accept"
                                  title = "Confirmar eliminación"
                                />
                              </div>
                            </div>
                          </Modal>
                        }
                      </li>
                    </ComentsItem>
                  );
                }
              })}
            </ul>
          </section>
        </ComentsList>}
        </>}
  
    </React.Fragment>
  );
}

export { TopicContent }