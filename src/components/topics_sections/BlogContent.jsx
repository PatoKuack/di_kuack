import React, {useEffect} from 'react';
import { Theme } from '../../containers/Theme';

function BlogContent({ currentTopicData }) {
  return (
    <React.Fragment>
      <section className='topic-content'>
        <div className='topic-content__background'></div>
        <h1>{currentTopicData.title}</h1>
        <main>
          {Object.entries(currentTopicData.content).map(paragraph => {
            return(
              <Content
                key={paragraph[0]}
                size={Object.keys(paragraph[1]).length}
                content={paragraph[1]}
                idParent={`${paragraph[0]}`}
              />
            )
          })}
        </main>
        {currentTopicData.references && 
          <footer className='content-references'>
            <p>Referencias:</p>
            {Object.entries(currentTopicData.references).map(link => {
              return(
                <a 
                  key={link[0]}
                  target='_blank' 
                  rel='noopener noreferrer' 
                  href={link[1].href}
                  id={`${link[0]}`}
                >
                  {link[1].content}
                </a>
              )
            })}
          </footer>
        }
      </section>
    </React.Fragment>
  );
}

function Content(props) {
  useEffect(()=>{
    for(const e in props.content) {
      const newEl = document.createElement(`${e}`.split("-")[0]);
      newEl.textContent = props.content[e];
      document.getElementById(props.idParent).appendChild(newEl);
    }
  },[])
  return(
    <React.Fragment>
      {(props.idParent.split("")[0]==="p") && <p id={props.idParent}></p>}
      {(props.idParent.split("")[0]==="u") && <ul id={props.idParent}></ul>}
      {(props.idParent.split("")[0]==="o") && <ol id={props.idParent}></ol>}
    </React.Fragment>
  );
}

export { BlogContent }