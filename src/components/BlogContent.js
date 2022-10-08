import React from 'react';
import { BlogProvider, BlogContext } from  "../context/BlogContext";

function BlogContent() {
  return (
    <BlogProvider>
      <BlogContext.Consumer>
        {({topicSelect}) => {
          return(
            <section className='topic-content'>
              <div className='topic-content__background'></div>

              {topicSelect().component}

            </section>
          );
        }}
      </BlogContext.Consumer>
    </BlogProvider>
  );
}

export { BlogContent }