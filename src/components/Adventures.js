import React from 'react';
import { BlogTopicItem } from './BlogTopicItem';

const adventuresList = [
  {idAdventure: 1, topicAdventure: "Primera carrera"},
  {idAdventure: 2, topicAdventure: "Segunda carrera"},
  {idAdventure: 3, topicAdventure: "Viaje a Sínaloa"}
]

function Adventures({ searchValue, setSearchValue }) {

  let searchTopics = [];
  
  if(!(searchValue.length >= 1)) {
    searchTopics = adventuresList;
  } else {
    searchTopics = adventuresList.filter(topic => {
      const topicText = topic.topicAdventure.toLowerCase().replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i').replaceAll('ó', 'o').replaceAll('ú', 'u');
      const searchText = searchValue.toLowerCase().replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i').replaceAll('ó', 'o').replaceAll('ú', 'u');
      return topicText.includes(searchText);
    });
  }

  return (
    <React.Fragment>
      {searchTopics.map(topic => (
        <BlogTopicItem 
          key={topic.idAdventure}
          topic={topic.topicAdventure}
        />
      ))}
    </React.Fragment>
  );
}

export { Adventures }