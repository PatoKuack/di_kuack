import React, {useState, useEffect} from 'react';
import { researchList, adventuresList, phrasesList, dreamsList, noList, allList, sectionsList } from './blogLists';
import { useLocalStorage } from './useLocalStorage';

function useBlog() {
  
  const [wait, setWait] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [sections, setSections] = useState(sectionsList);

  useEffect(() => {
    setTimeout(() => {
      setWait(false);
    },1500);
  }, []);

  /* 
  const [sectionsLoading, setSectionsLoading] = React.useState(true);
  const [sectionsError, setSectionsError] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      try{
        setSections(sectionsList);
        setSectionsLoading(false);
      } catch(error) {
        setSectionsError(error);
      }
    }, 1000);
  }); 
  */

  const searchTopics = (topicList) => {
    if(!(searchValue.length >= 1)) {
      return(topicList);
    } else {
      return(topicList.filter(item => {
        const itemText = item.title.toLowerCase().replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i').replaceAll('ó', 'o').replaceAll('ú', 'u').replaceAll('ü', 'u').replaceAll('ñ', 'n');
        const searchText = searchValue.toLowerCase().replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i').replaceAll('ó', 'o').replaceAll('ú', 'u').replaceAll('ü', 'u').replaceAll('ñ', 'n');
        return itemText.includes(searchText);
      }));
    }
  }

  const sectionSelect = (idSelected) => {
    const newSections = [...sections];
    if(idSelected !== -1) {
      sections.map(sectionSelected => sectionSelected.selected=false);
      const sectionIndex = sections.findIndex(section => section.idSection === idSelected);
      newSections[sectionIndex].selected = true;
    } else {
      sections.map(sectionSelected => {
        if(sectionSelected.list !== noList){
          sectionSelected.selected=true;
        }
      });
    }
    setSections(newSections);
  }

  const planetVisited = (slug) => {
    const newPlanet = pl;
    // const currentPlanet = pl[0].planet
    if(slug) {
      sections.map(sectionList => sectionList.list.map(item => {
        if(item.slug === slug){
          // newPlanet[0].planet = item.planet;
          setPl(item.planet);
          console.log(newPlanet);
        }
      }));
    } else {
      console.log(pl);
    }
    /* setPl(prevState => ({
      ...prevState,
      planet: newPlanet
    }));
    console.log(pl); */
  }
  /* const topicSelect = () => {
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
    } else if(compareTopics(dreamsList) >= 0 ) {
      topicElements = dreamsList[compareTopics(dreamsList)];
    }
    // return(topicElements);
    setCurrentTopic(topicElements);
  } */
  
  const {
    itemValues: favoriteList,
    saveItem: setFavoriteList,
    loading: favoriteTopicsLoading,
    error: favoriteTopicsError,
  } = useLocalStorage([], 'FAVORITES_V1', 1000);

  const colorIcon = (selection) => {
    if(selection) {
      return("#b0def0");
    }else {
      return("#32697f50");
    }
  }

  const topicFavorite = (newTopic) => {
    const newTopicList = [...favoriteList];
    if(favoriteList.includes(newTopic)) {
      const topicIndex = favoriteList.findIndex(topic => topic === newTopic);
      newTopicList.splice(topicIndex, 1);
      // console.log(`El tema ${newTopic} en el index ${topicIndex}`);
    } else {
      newTopicList.push(newTopic);
      // console.log(favoriteList);
      // console.log(newTopic);
    }
    setFavoriteList(newTopicList);
  }

  return {
    wait,
    searchValue,
    setSearchValue,
    searchTopics,
    // currentTopic,
    // setCurrentTopic,
    // topicSelect,
    allList,
    sections,
    sectionSelect,
    favoriteList,
    setFavoriteList,
    topicFavorite,
    favoriteTopicsLoading,
    favoriteTopicsError,
    colorIcon,
    // sectionsLoading,
    // sectionsError,
  }
}

export { useBlog }
