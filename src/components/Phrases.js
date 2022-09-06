import React from 'react';
import { BlogTopicItem } from './BlogTopicItem';

const phrasesList = [
  {idPhrase: 1, topicPhrase: "Starwars"},
  {idPhrase: 2, topicPhrase: "Nick Vujicic"},
  {idPhrase: 3, topicPhrase: "Otros"}
]

function Phrases({ searchValue, setSearchValue }) {

  let searchTopics = [];
  
  if(!(searchValue.length >= 1)) {
    searchTopics = phrasesList;
  } else {
    searchTopics = phrasesList.filter(topic => {
      const topicText = topic.topicPhrase.toLowerCase().replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i').replaceAll('ó', 'o').replaceAll('ú', 'u');
      const searchText = searchValue.toLowerCase().replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i').replaceAll('ó', 'o').replaceAll('ú', 'u');
      return topicText.includes(searchText);
    });
  }

  return (
    <React.Fragment>
      {searchTopics.map(topic => (
        <BlogTopicItem 
          key={topic.idPhrase}
          topic={topic.topicPhrase}
        />
      ))}
    </React.Fragment>
  );
}

export { Phrases }