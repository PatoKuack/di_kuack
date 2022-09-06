import React from 'react';

function BlogSearch({ searchValue, setSearchValue }) {

  const onSearchChange = (change) => {
    setSearchValue(change.target.value);
  }

  return (
    <React.Fragment>
      <label>Busca un tema:</label>
      <input 
        placeholder="Cosmos" 
        value = {searchValue} 
        onChange = {onSearchChange}
      ></input>
      <p>{searchValue}</p>
    </React.Fragment>
  );
}

export { BlogSearch }