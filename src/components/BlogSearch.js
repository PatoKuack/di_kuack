import React from 'react';
import { BlogContext } from '../context/BlogContext';

function BlogSearch() {
  const { searchValue, setSearchValue } = React.useContext(BlogContext);

  const onSearchChange = (change) => {
    setSearchValue(change.target.value);
  }

  return (
    <React.Fragment>
      <label>Busca un tema:</label>
      <input 
        placeholder="Busca un tema específico °u°" 
        value = { searchValue } 
        onChange = { onSearchChange }
      ></input>
    </React.Fragment>
  );
}

export { BlogSearch }