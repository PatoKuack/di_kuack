import React from 'react';
import { BlogTopicItem } from './BlogTopicItem';

const researchList = [
  {idResearch: 1, topicResearch: "Árbol Baobab"},
  {idResearch: 2, topicResearch: "Árbol Bore"},
  {idResearch: 3, topicResearch: "Platón"}
]

function Research({ searchValue, setSearchValue }) {

  let searchTopics = [];
  
  if(!(searchValue.length >= 1)) {
    searchTopics = researchList;
  } else {
    searchTopics = researchList.filter(topic => {
      const topicText = topic.topicResearch.toLowerCase().replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i').replaceAll('ó', 'o').replaceAll('ú', 'u');
      const searchText = searchValue.toLowerCase().replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i').replaceAll('ó', 'o').replaceAll('ú', 'u');
      return topicText.includes(searchText);
    });
  }

  return (
    <React.Fragment>
      {searchTopics.map(topic => (
        <BlogTopicItem 
          key={topic.idResearch}
          topic={topic.topicResearch}
        />
      ))}
    </React.Fragment>
  );
}

export { Research }