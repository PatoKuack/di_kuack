import React from 'react';
import { BlogContent } from "../components/BlogContent";
import { ComentsForm } from "../components/ComentsForm";
import { ComentsItem } from "../components/ComentsItem";
import { ComentsList } from "../components/ComentsList"
import { BlogProvider, BlogContext } from  "../context/BlogContext";
import '../styles/coments.css';

/* const coments = [
  {id: 1, text: "Agrega esto: ...", loved: false, topic: noneTopic},
  {id: 2, text: "También faltó esto: ...", loved: false, topic: noneTopic},
  {id: 3, text: "Puedes aprender más de aquí: ...", loved: false, topic: noneTopic}
]; */

function Blog() {
  return (
    <BlogProvider>
      <BlogContext.Consumer>
        {({
          totalComents, 
          comentValues, 
          comentLoved, 
          error, 
          loading,
          openModal,
          setOpenModal,
          deletComent,
          topicSelect
        }) => {
          return(
            <React.Fragment>

              <BlogContent>
                {error && <p>¡Por las plumas de mi abuelo, amigue! tuvimos un error =O</p>}
                {loading && <p>Cargando el texto =)</p>}
              </BlogContent>
              
              <ComentsList>
                <ComentsForm />
                <p>Hay {totalComents} comentarios</p>
                <ul>
                  {error && <p>¡Santos pati-cuervos, amigue! tuvimos un error =O</p>}
                  {loading && <p>Cargando los comentarios =)</p>}
                  {(!loading && !totalComents ) && <p>Los mensajes no se pueden mostrar en línea todavia, XD pero puedes utilizarlos para crear notas personales =P</p>}
                  {comentValues.map( comented => (
                    <ComentsItem 
                      key={comented.id} 
                      text={comented.text} 
                      loved={comented.loved}
                      topic={comented.topic}
                      onLove={() => comentLoved(comented.id)}
                      openModal = {openModal}
                      setOpenModal = {setOpenModal}
                      deletComent = {deletComent}
                      topicSelect = { topicSelect }
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