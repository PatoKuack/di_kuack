import React from 'react';
import { researchList, adventuresList, phrasesList, noneList, sectionsList } from '../context/blogLists';
import { useLocalStorage } from './useLocalStorage';

const BlogContext = React.createContext();


function BlogProvider(props) {

  const [sections, setSections] = React.useState(sectionsList);

  const [searchValue, setSearchValue] = React.useState('');

  const sectionSelect = (idSelected) => {
    const sectionIndex = sections.findIndex(section => section.idSection === idSelected);
    const newSections = [...sections];
    sections.map(sectionSelected => sectionSelected.selected=false);
    newSections[sectionIndex].selected = true;
    setSections(newSections);
  }

  const topicSelect = () => {
    let topicElements;
    let currentURL = document.URL;
    currentURL = currentURL.split("/");
    currentURL = currentURL.pop();
    function compareTopics(list){
      const comparationList = list.map(twinkList => [twinkList.topic.toLowerCase().replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i').replaceAll('ó', 'o').replaceAll('ú', 'u').replaceAll('ü', 'u').replaceAll('ñ', 'n').replaceAll(' ', '_')]);
      let lookingURL = comparationList.find( findingURL => (findingURL == `${currentURL}`));
      if(!lookingURL) {return(-1);}
      else{
        const topicIndex = comparationList.findIndex(topicId => topicId === lookingURL);
        return(topicIndex);
      }
    }
    if(compareTopics(researchList) >= 0 ){
      topicElements = researchList[compareTopics(researchList)];
    } else if(compareTopics(adventuresList) >= 0 ) {
      topicElements = adventuresList[compareTopics(adventuresList)];
    } else if(compareTopics(phrasesList) >= 0 ) {
      topicElements = phrasesList[compareTopics(phrasesList)];
    } else {
      topicElements = noneList[0];
    }
    return(topicElements);
  }

  //----------------------------------------------------------

  const {
    itemValues: comentValues,
    saveItem: saveComents,
    loading,
    error,
  } = useLocalStorage([], 'COMENTS_V1');
  
  const [openModal, setOpenModal] = React.useState(false);
  // const comentsLoved = coment.filter(c => !!c.loved).length;
  const totalComents = comentValues.length;

  const comentLoved = (idComented) => {
    const comentIndex = comentValues.findIndex(coment => coment.id === idComented);
    const newComentList = [...comentValues];
    if(newComentList[comentIndex].loved === false){
      newComentList[comentIndex].loved = true;
    }else{
      newComentList[comentIndex].loved = false;
    }
    saveComents(newComentList);
  }
  const deletComent = (idComented) => {
    const comentIndex = comentValues.findIndex(coment => coment.id === idComented);
    const newComentList = [...comentValues];
    newComentList.splice(comentIndex, 1);
    saveComents(newComentList);
  }

  const addComent = (comentText, comentTopic) => {
    const newComentList = [...comentValues];
    newComentList.push({
      id: comentValues.length + 1, 
      text: comentText, 
      loved: false, 
      topic: comentTopic
    });
    saveComents(newComentList);
  }

  return (
    <BlogContext.Provider value={{
      searchValue,
      setSearchValue,
      sections,
      sectionSelect,
      topicSelect,
      loading,
      error,
      // ----------------------
      totalComents,
      comentValues,
      comentLoved,
      deletComent,
      addComent,
      openModal,
      setOpenModal,
    }}>
      {props.children}
    </BlogContext.Provider>
  );
}

export { BlogContext, BlogProvider }
