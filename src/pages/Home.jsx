import React, {useEffect} from 'react';
import { BlogHeader } from "../components/blog_sections/BlogHeader";
import { BlogSearch } from "../components/blog_sections/BlogSearch";
import { BlogTopics } from "../components/blog_sections/BlogTopics";
import { BlogTopicItem } from '../components/blog_sections/BlogTopicItem';
import { BlogSections } from '../components/blog_sections/BlogSections';
import { BlogLoading } from '../components/BlogLoading';
import { CreateButton } from '../components/CreateButton';
import { BlogIcon } from '../components/BlogIcon';
import { useBlog } from "../hooks/useBlog";
import { useTopics } from "../hooks/useTopics";
import { Theme } from "../containers/Theme";

function Home( {theme}) {

  const {
    wait,
    searchValue, 
    setSearchValue, 
    searchTopics,
    allList,
    sections,
    sectionSelect,
    topicFavorite,
    favoriteList,
    colorIcon,
  } = useBlog();

  return (
    <React.Fragment>
      {wait && <BlogLoading loadType="loading-leaving" planetType={theme} />}

      {!wait && <>
        <Theme 
          theme = "cosmos"
          planetType = {theme}
        />
        <BlogHeader 
          title = {"Di kuack"}
        />
        <main className='main'>
          {(!sections[1].selected || (sections[1].selected !== sections[2].selected)) && 
            <BlogSearch>
              <form className='search'>
                <label className='search-label'>Busca un tema:</label>
                <input 
                  className='search-input'
                  placeholder="Busca un tema °u°" 
                  value = { searchValue } 
                  onChange = { (change) => {setSearchValue(change.target.value)} }
                />
              </form>
            </BlogSearch>
          }

          <BlogTopics>
            {(sections[1].selected && sections[2].selected) && <>
              <ul>
                {allList.map(topic => {
                  <BlogTopicItem 
                    key={topic.id}
                    topic={topic.title}
                    slug={topic.slug}
                    planet={topic.planet}
                    topicFavorite={topicFavorite}
                    favoriteList={favoriteList}
                  />
                })}
              </ul>
              <p className='display-instruction'>Selecciona una sección de la consola para que leas alguno de sus temas.</p>
            </>}

            {(!sections[1].selected || (sections[1].selected !== sections[2].selected)) && 
              sections.map(section => (
                <ul 
                  key={section.idSection}
                  className={`${!(section.selected) && 'hide'}`}
                >
                  {searchTopics(section.list).map(topic => (
                    <BlogTopicItem 
                      key={topic.id}
                      topic={topic.title}
                      slug={topic.slug}
                      topicFavorite={topicFavorite}
                      favoriteList={favoriteList}
                    />
                  ))}
                </ul>
              ))
            }
          </BlogTopics>
        </main>

        <BlogSections>
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
                  type={"diamond"}
                  classN={""}
                  // onClick={() => {sectionSelect(-1)}}
                />
              </div>
            </div>

            <nav className='sections-navigator'>
              <ul className='sections-list layer-container'>
                {sections.map( section => (
                  <li 
                    key={section.idSection}
                    className={`sections-item ${section.selected && 'sections-item__selected'} ${!section.list[0] && 'sections-item__disabled'}`} 
                    onClick={() => {sectionSelect(section.idSection)}}
                  >
                    <BlogIcon 
                      type={"decoration-bulb"}
                      colorA={colorIcon(section.selected)}
                      classN={"sections-item__spotlight"}
                    />
                    <CreateButton 
                      content = {section.name}
                      type = "button"
                      classN = "no-styles-button sections-item__button"
                      title = {`${section.name}`}
                    />
                    {/* <span className='sections-item__text'>{name}</span> */}
                  </li>
                ))}
              </ul>
            </nav>
          </section>
        </BlogSections>
      </>}
    </React.Fragment>
  );
}

export { Home }