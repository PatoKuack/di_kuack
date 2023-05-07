import React from 'react';
import { ReactComponent as SectionCheck } from '../assets/icons/sectionCheck.svg';
import { ReactComponent as ComentDelete } from '../assets/icons/closeButton.svg';
import { ReactComponent as Diamond } from '../assets/icons/diamond.svg';
import { ReactComponent as Send } from '../assets/icons/send.svg';
import { ReactComponent as Return } from '../assets/icons/return.svg';

const iconTypes = {
  "decoration-bulb": color => (
    <SectionCheck className="icon icon__check" fill={color} />
  ),
  "delete-button": color => (
    <ComentDelete className="icon icon__delete" fill={color} />
  ),
  "diamond": color => (
    <Diamond />
  ),
  "send-button": color => (
    <Send />
  ),
  "return": color => (
    <Return />
  ),
}

function BlogIcon({ type, colorA="transparent", classN, onClick }) {

  return (
    <span
      className = {`icon-container icon-container__${type} ${classN}`}
      onClick = {onClick}
    >
      {iconTypes[type](colorA)}
    </span>
  );
}

export { BlogIcon }