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
        {({searchValue, setSearchValue, sections, sectionSelect}) => {
          return(

            <React.Fragment>
              <BlogSearch />
              {sections.map( section => (
                <BlogNavigator 
                  key={section.idSection} 
                  id={section.idelement} 
                  select={section.selected}
                  list={section.list}
                  searchValue = { searchValue }
                  setSearchValue = { setSearchValue }
                />
              ))}
              <section>
                <ul>
                  {sections.map( section => (
                    <BlogSectionList 
                      key={section.idSection} 
                      name={section.name} 
                      id={section.idelement} 
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