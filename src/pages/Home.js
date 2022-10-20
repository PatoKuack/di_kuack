import React from 'react';
import { BlogHeader } from "../components/BlogHeader";
import { BlogSearch } from "../components/BlogSearch";
import { BlogNavigator } from "../components/BlogNavigator";
import { BlogSectionList } from '../components/BlogSectionList';
import { BlogIcon } from '../components/BlogIcon';
// import { BlogError } from '../components/BlogError';
// import { BlogLoading } from '../components/BlogLoading';
// import { BlogEmpty } from '../components/BlogEmpty';
import { Theme } from "../containers/Theme";
import { BlogProvider, BlogContext } from  "../context/BlogContext";
import '../styles/main.scss';
// import { getElementError } from '@testing-library/react';

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
          favoriteTopicsLoading,
          favoriteTopicsError,
        }) => {
          return(

            <React.Fragment>
              <Theme 
                theme = "cosmos"
              />

              {/* <BlogLoading loadType="loading-leaving" /> */}

              <BlogHeader />
              <section className='main-topic'>
                <BlogSearch />
                <nav className='topic-navigator'>
                  
                  {/* {favoriteTopicsError && <BlogError error={favoriteTopicsError} />}
                  {favoriteTopicsLoading && <BlogLoading loadType="loading-leaving" />} */}
                  {/* {(!favoriteTopicsLoading && !(sections.length) ) && <BlogEmpty />} */}
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
                </nav>
              </section>

              <section className='sections'>
                  <div className='sections-crystal'>
                    <div className='light'>
                      <div className='light-1' id="light-1"></div>
                      <div className='light-2' id="light-2">
                        <div className='light-2__content'></div>
                      </div>
                      <div className='light-3' id="light-3">
                        <div className='light-3__content'></div>
                      </div>
                      <div className='light-4' id="light-4">
                        <div className='light-4__content'></div>
                      </div>
                    </div>
                    <div className='sections-crystal__projector'>
                      <BlogIcon 
                        type={"crystal"}
                        colorA={"white"}
                        classN={""}
                      />
                      {/* <svg width="100%" height="100%" viewBox="0 0 80 80">
                        <polyline className="crystal-fill" points="3 52, 0 40, 3 28, 9 18, 18 9, 28 3, 40 0, 52 3, 62 9, 71 18, 77 28, 80 40, 77 52, 3 52" stroke="currentColor" fill="currentColor" />
                        <polyline className="crystal-stroke" points="3 52, 40 40, 0 40, 40 40, 3 28, 40 40, 18 9, 40 40, 40 0, 40 40, 62 9, 40 40, 77 28, 40 40, 80 40, 40 40, 77 52, 40 40, 3 52" stroke="#00ffffa2" fill="transparent" />
                        <polyline className="crystal-fill" points="55 55, 40 60, 25 55, 20 40, 25 25, 40 20, 55 25, 60 40, 55 55" stroke="#00ffffa2" fill="#00ffff22" />
                      </svg> */}
                    </div>
                  </div>
                <nav className='sections-navigator'>
                  <ul className='sections-list layer-container'>
                    {sections.map( section => (
                      <BlogSectionList 
                        key={section.idSection} 
                        name={section.name} 
                        select={section.selected}
                        onSelected={() => sectionSelect(section.idSection)}
                      />
                    ))}
                  </ul>
                </nav>
              </section>
            </React.Fragment>

          );
        }}
      </BlogContext.Consumer>
    </BlogProvider>
    );
  }

export { Home }