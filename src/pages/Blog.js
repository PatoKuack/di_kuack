import React from 'react';
import { BlogContent } from "../components/BlogContent";
import { ComentsForm } from "../components/ComentsForm";
import { ComentsItem } from "../components/ComentsItem";
import { ComentsList } from "../components/ComentsList"
import { BlogProvider, BlogContext } from  "../context/BlogContext";
import '../styles/coments.css';

function Blog() {
  return (
    <BlogProvider>
      <BlogContext.Consumer>
        {({
          totalComents, 
          comentValues, 
          comentLoved, 
          errorComent, 
          loadingComent,
          openModal,
          setOpenModal,
          deletComent,
          topicSelect
        }) => {
          return(
            <React.Fragment>

              <BlogContent />
              <ComentsList>
                <ComentsForm />
                <p>Hay {totalComents} comentarios</p>
                <ul>
                  {errorComent && <p>¡Santos pati-cuervos, amigue! tuvimos un error =O</p>}
                  {loadingComent && <p>Cargando los comentarios =)</p>}
                  {(!loadingComent && !totalComents ) && <p>Los mensajes no se pueden mostrar en línea todavia, XD pero puedes utilizarlos para crear notas personales =P</p>}
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