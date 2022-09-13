import React from 'react';
import { BlogSearch } from "../components/BlogSearch";
import { BlogNavigator } from "../components/BlogNavigator";
import { BlogSectionList } from '../components/BlogSectionList';
import { BlogProvider, BlogContext } from  "../context/BlogContext";
import '../styles/home.css';

function Home() {

  return (
    <BlogProvider>
      <BlogContext.Consumer>
        {({
          searchValue, 
          setSearchValue, 
          sections, 
          setSections,
          sectionSelect,
          noneList,
          favoriteList,
        }) => {
          return(

            <React.Fragment>
              <BlogSearch />
              {sections.map( section => (
                <BlogNavigator 
                  key={section.idSection} 
                  select={section.selected}
                  list={section.list}
                  searchValue = { searchValue }
                  setSearchValue = { setSearchValue }
                  sections = {sections}
                  setSections = {setSections}
                  noneList = {noneList}
                  favoriteList = {favoriteList}
                />
              ))}
              <section>
                <ul>
                  {sections.map( section => (
                    <BlogSectionList 
                      key={section.idSection} 
                      name={section.name} 
                      select={section.selected}
                      onSelected={() => sectionSelect(section.idSection)}
                    />
                  ))}
                </ul>
              </section>
            </React.Fragment>

          );
        }}
      </BlogContext.Consumer>
    </BlogProvider>
    );
  }

export { Home }