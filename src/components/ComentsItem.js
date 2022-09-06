import React from 'react';

function ComentsItem(props) {
  // const (loves) = props;
  return (
    <li>
      <hr />
      <p>{props.text}</p>
      <p className={`coment-reaction ${props.loved && 'coment-reaction__color'}`}>&#129311; Someone love it</p>
      <hr />
    </li>
  );
}

export { ComentsItem }