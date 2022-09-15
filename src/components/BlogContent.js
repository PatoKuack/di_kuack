import React from 'react';
import { BlogProvider, BlogContext } from  "../context/BlogContext";

function BlogContent() {
  return (
    <BlogProvider>
      <BlogContext.Consumer>
        {({topicSelect}) => {
          return(
            <section className='topic-content'>

              {topicSelect().component}

            </section>
          );
        }}
      </BlogContext.Consumer>
    </BlogProvider>
  );
}

export { BlogContent }