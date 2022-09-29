import React from 'react';
import { CreateButton } from './CreateButton';
import { BlogContext } from '../context/BlogContext';

function ComentsForm() {
  const [newComentValue, setNewComentValue] = React.useState('');
  const { addComent, topicSelect } = React.useContext(BlogContext);

  const onSubmitComent = (event) => {
    event.preventDefault();
    if(!!newComentValue){
      addComent(newComentValue, topicSelect().topic);
      setNewComentValue("");
    }
  }

  const onChange = (event) => {
    setNewComentValue(event.target.value);
  }

  return (
    <form onSubmit={onSubmitComent} className='coments-form'>
      <textarea 
        value = { newComentValue }
        onChange = { onChange }
        placeholder = "Ingresa tu retroalimentación o aporte del tema =D"
        className='coments-form__textarea'
        rows={3}
      ></textarea>
      <CreateButton 
        content = "Send"
        type = "submit" 
        class='coments-form__button'
      />
    </form>
  );
}

export { ComentsForm }