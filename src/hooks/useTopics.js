import React, { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { useBlog } from './useBlog';

function useTopics() {

  const {
    itemValues: comentValues,
    saveItem: setComentValues,
    loading: comentsLoading,
    error: comentsError,
  } = useLocalStorage([], 'COMENTS_V1', 1000);

  const [openModal, setOpenModal] = useState(false);
  const [countedComents, setCountedComents] = useState('');
  const [newComentValue, setNewComentValue] = useState('');
  // const comentsLoved = coment.filter(c => !!c.loved).length;
  let topicsCounter;

  function totalTopicComents(topicTitle) {
    let totTopic = 0;
    const totalTopic = comentValues.map(coment =>  coment.topic);
    // console.log("render1" + totalTopic);
    totalTopic.forEach(comentTopic => {
      if(comentTopic === topicTitle){totTopic++}
    });
    return(totTopic);
  }
  function textCountComents(topicTitle) {
    // let textCounter;
    topicsCounter = totalTopicComents(topicTitle);
    // console.log("render2 " + topicsCounter);
    switch(topicsCounter){
      case 0:
        // setCountedComents({text:'¡Escribe el primer comentario!', count:0});
        setCountedComents('¡Escribe el primer comentario!');
        // textCounter = '¡Escribe el primer comentario!';
        break;
      case 1:
        // setCountedComents({text:'Hay 1 comentario:', count:1});
        setCountedComents('Hay 1 comentario:');
        // textCounter = 'Hay 1 comentario:';
        break;
      default:
        // setCountedComents({text:`Hay ${topicsCounter} comentarios:`, count:topicsCounter});
        setCountedComents(`Hay ${topicsCounter} comentarios:`);
        // textCounter = `Hay ${topicsCounter} comentarios:`;
        break;
    }
    // return (textCounter);
  }
  
  function comentLoved(idComented) {
    const comentIndex = comentValues.findIndex(coment => coment.id === idComented);
    const newComentList = [...comentValues];
    // console.log("render3");
    if(newComentList[comentIndex].loved === false){
      newComentList[comentIndex].loved = true;
    }else{
      newComentList[comentIndex].loved = false;
    }
    setComentValues(newComentList);
  }
  function deletComent(idComented) {
    const comentIndex = comentValues.findIndex(coment => coment.id === idComented);
    const newComentList = [...comentValues];
    const totCurrentComents = newComentList.length;
    // console.log("render4 " + totCurrentComents);
    newComentList.splice(comentIndex, 1);
    if(newComentList.length === (totCurrentComents - 1)) {
      setComentValues(newComentList);
    }
  }
  function addComent(comentText, comentTopic) {
    const newComentList = [...comentValues];
    // console.log("render5");
    newComentList.push({
      id: comentValues.length + 1, 
      text: comentText, 
      loved: false, 
      topic: comentTopic
    });
    setComentValues(newComentList);
  }
  

  return {
    totalTopicComents,
    textCountComents,
    comentLoved,
    deletComent,
    addComent,
    // onSubmitComent,
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
  }
}

export { useTopics }