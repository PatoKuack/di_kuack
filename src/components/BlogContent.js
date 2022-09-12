import React from 'react';
import { BlogProvider, BlogContext } from  "../context/BlogContext";

function BlogContent() {
  return (
    <BlogProvider>
      <BlogContext.Consumer>
        {({topicSelect}) => {
          return(
            <React.Fragment>

              {topicSelect().component}

            </React.Fragment>
          );
        }}
      </BlogContext.Consumer>
    </BlogProvider>
  );
}

export { BlogContent }