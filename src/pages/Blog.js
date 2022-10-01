import React from 'react';
import { BlogContent } from "../components/BlogContent";
import { ComentsForm } from "../components/ComentsForm";
import { ComentsItem } from "../components/ComentsItem";
import { ComentsList } from "../components/ComentsList";
import { ComentError } from '../components/ComentError';
import { ComentLoading } from '../components/ComentLoading';
import { Theme } from "../containers/Theme";
// import { ComentEmpty } from '../components/ComentEmpty';
import { BlogProvider, BlogContext } from  "../context/BlogContext";
import '../styles/main.scss';

function Blog() {
  return (
    <BlogProvider>
      <BlogContext.Consumer>
        {({
          totalTopicComents, 
          comentValues, 
          comentLoved, 
          comentsError, 
          comentsLoading,
        }) => {

          function plural() {
            let textCounter;
            switch(totalTopicComents()){
              case 0:
                textCounter = '¡Escribe el primer comentario!:';
                break;
              case 1:
                textCounter = 'Hay 1 comentario:';
                break;
              default:
                textCounter = `Hay ${totalTopicComents()} comentarios:`;
                break;
            }
            return(textCounter);
          }

          return(
            <React.Fragment>
              <Theme
                theme = "planet"
              />

              <BlogContent />
              <ComentsList>
                <ComentsForm />
                <p className='coments-counter'>{plural()}</p>
                <ul className='coments-list'>
                  
                  {comentsError && <ComentError error={comentsError} />}
                  {comentsLoading && <ComentLoading />}
                  {(!comentsLoading && !(totalTopicComents()) ) && <p className='coments-warningtext'>Los mensajes se guardarán en tu navegador y sólo los podrás ver tú, así que <b><u>puedes utilizarlos</u></b> para crear <b><u>notas personales</u></b> hasta que yo sepa cómo conectarlos en línea =P</p>}
                  {comentValues.map( comented => (
                    <ComentsItem 
                      key={comented.id} 
                      id={comented.id} 
                      text={comented.text} 
                      loved={comented.loved}
                      topic={comented.topic}
                      onLove={() => comentLoved(comented.id)}
                    />
                  ))}
                </ul>
              </ComentsList>
          
            </React.Fragment>
          );
        }}
      </BlogContext.Consumer>
    </BlogProvider>
  );
}

export { Blog }