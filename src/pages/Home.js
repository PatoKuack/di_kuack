import React from 'react';
import { BlogSearch } from "../components/BlogSearch";
import { CreateButtom } from "../components/CreateButtom";
import { BlogNavigator } from "../components/BlogNavigator";
import '../styles/home.css';

function Home() {

  const [searchValue, setSearchValue] = React.useState('');
  
  // let searchTopics = [];
  
  // if(!(searchValue.length >= 1)) {
  //   searchTopics = allTopics;
  // } else {

  // }

  return (
    <React.Fragment>
      <BlogSearch 
        searchValue = { searchValue }
        setSearchValue = { setSearchValue }
      />
      <CreateButtom />
      <BlogNavigator 
        searchValue = { searchValue }
        setSearchValue = { setSearchValue }
      />
    </React.Fragment>
  );
}

export { Home }