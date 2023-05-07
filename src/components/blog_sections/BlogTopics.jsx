import React from 'react';

function BlogTopics({children}) {
  
  return (
    <section className='topic-list'>
      {children}
    </section>
  );
}

export { BlogTopics }