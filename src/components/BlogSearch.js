import React from 'react';
import { BlogContext } from '../context/BlogContext';

function BlogSearch() {
  const { searchValue, setSearchValue } = React.useContext(BlogContext);

  const onSearchChange = (change) => {
    setSearchValue(change.target.value);
  }

  return (
    <form className='search'>
      <label className='search-label'>Busca un tema:</label>
      <input 
        className='search-input'
        placeholder="Busca un tema °u°" 
        value = { searchValue } 
        onChange = { onSearchChange }
      ></input>
    </form>
  );
}

export { BlogSearch }