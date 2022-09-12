import React from 'react';
import { CreateButtom } from '../components/CreateButtom';
import { ModalDelComent } from "./ModalDelComent";

function ComentsItem(props) {
  const onVerifyDelete = () => {
    props.setOpenModal(true);
  }
  const onCancelDelete = () => {
    props.setOpenModal(false);
  }
  const onConfirmDelete = () => {
    props.deletComent(props.id)
    props.setOpenModal(false);
  }

  return (
    <li className={`${(props.topic !== props.topicSelect().topic) && 'hide'}`} >
      <hr />
      <CreateButtom 
        content = "x"
        onAction = { onVerifyDelete }
        type = "buttom"
      />
      <p>{props.text}</p>
      <p 
        className={`coment-reaction ${props.loved && 'coment-reaction__color'}`} 
        onClick={props.onLove}
      >
        &#129311; Someone love it
      </p>

      {!!props.openModal && (
        <ModalDelComent>
          <p>¿Segure que quieres eliminar este comentario?</p>
          <CreateButtom 
            content="No" 
            type="buttom"
            onAction = { onCancelDelete }
          />
          <CreateButtom 
            content="Sí" 
            type="buttom"
            onAction = { onConfirmDelete }
          />
          <p>{props.text}</p>
        </ModalDelComent>
      )}
      <hr />
    </li>
  );
}

export { ComentsItem }