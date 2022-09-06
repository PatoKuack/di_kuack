import React from 'react';
import { BlogSectionList } from './BlogSectionList';
import { Research } from './Research';
import { Adventures } from './Adventures';
import { Phrases } from './Phrases';

const sectionsList = [
  {idSection: 1, name: "Investigaciones", idelement: "research", selected: true},
  {idSection: 2, name: "Pato-aventuras", idelement: "adventures", selected: false},
  {idSection: 3, name: "Frases", idelement: "phrases", selected: false}
];

function BlogNavigator({ searchValue, setSearchValue }) {

  return (
    <React.Fragment>
      <nav>
        <ul className={`topic-list ${sectionsList[0].selected && 'topic-list__show'}`} id={`${sectionsList[0].inElement}List`}>
          <Research 
            searchValue = { searchValue }
            setSearchValue = { setSearchValue }
          />
        </ul>
        <ul className={`topic-list ${sectionsList[1].selected && 'topic-list__show'}`} id={`${sectionsList[1].inElement}List`}>
          <Adventures 
            searchValue = { searchValue }
            setSearchValue = { setSearchValue }
          />
        </ul>
        <ul className={`topic-list ${sectionsList[2].selected && 'topic-list__show'}`} id={`${sectionsList[2].inElement}List`}>
          <Phrases 
            searchValue = { searchValue }
            setSearchValue = { setSearchValue }
          />
        </ul>
      </nav>
      <section>
        <ul>
          {sectionsList.map( section => (
            <BlogSectionList 
              key={section.idSection} 
              section={section.name} 
              id={section.idelement} 
              select={section.selected}
            />
          ))}
        </ul>
      </section>
    </React.Fragment>
  );
}

export { BlogNavigator }