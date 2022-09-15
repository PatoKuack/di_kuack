import React from 'react';
import { CreateButtom } from './CreateButtom';
import { BlogContext } from '../context/BlogContext';

function ComentsForm() {
  const [newComentValue, setNewComentValue] = React.useState('');
  const { addComent, topicSelect } = React.useContext(BlogContext);

  const onSubmitComent = (event) => {
    event.preventDefault();
    addComent(newComentValue, topicSelect().topic);
    setNewComentValue("");
  }

  const onChange = (event) => {
    setNewComentValue(event.target.value);
  }

  return (
    <form onSubmit={onSubmitComent}>
      
      <textarea 
        value = { newComentValue }
        onChange = { onChange }
        placeholder = "Ingresa tu retroalimentación o aporte =D."
      ></textarea>
      <CreateButtom 
        content = "-&#62;" 
        type = "submit"
      />
    </form>
  );
}

export { ComentsForm }