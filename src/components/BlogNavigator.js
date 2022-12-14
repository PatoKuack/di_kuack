import React from 'react';
import { BlogTopicItem } from '../components/BlogTopicItem';

function BlogNavigator(props) {

  let searchTopics = [];
  
  if(!(props.searchValue.length >= 1)) {
    searchTopics = props.list;
  } else {
    searchTopics = props.list.filter(topicList => {
      const topicText = topicList.topic.toLowerCase().replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i').replaceAll('ó', 'o').replaceAll('ú', 'u').replaceAll('ü', 'u').replaceAll('ñ', 'n');
      const searchText = props.searchValue.toLowerCase().replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i').replaceAll('ó', 'o').replaceAll('ú', 'u').replaceAll('ü', 'u').replaceAll('ñ', 'n');
      return topicText.includes(searchText);
    });
  }
  
  return (
    <ul className={`topic-list ${!(props.select) && 'hide'}`}>
      {searchTopics.map(topic => (
        <BlogTopicItem 
          key={topic.id}
          topic={topic.topic}
        />
      ))}
    </ul>
  );
}

export { BlogNavigator }