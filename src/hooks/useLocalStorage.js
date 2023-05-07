import React from "react";

function useLocalStorage(valueType, itemName, timeWait){
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [itemValues, setItemValues] = React.useState(valueType);

  React.useEffect(() => {
    setTimeout(() => {

      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
        if(!localStorageItem) { // Si no hay contenido en localSt...
          localStorage.setItem(itemName, JSON.stringify(valueType));
          parsedItem = valueType;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItemValues(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, timeWait);
  });

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItemValues(newItem);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  return {
    itemValues,
    saveItem,
    loading,
    error,
  }
}

export { useLocalStorage }