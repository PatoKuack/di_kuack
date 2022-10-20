import React from 'react';
import { ReactComponent as FavoriteCheck } from '../assets/icons/favoriteCheck.svg';
import { ReactComponent as ComentDelete } from '../assets/icons/closeButton.svg';
import { ReactComponent as Crystal } from '../assets/icons/crystal.svg';

function BlogIcon({ type, colorA="transparent", classN, onClick }) {

  const iconTypes = {
    "decoration-bulb": colorA => (
      <FavoriteCheck className="icon icon__check" fill={colorA} />
    ),
    "delete-button": colorB => (
      <ComentDelete className="icon icon__delete" fill={colorB} />
    ),
    "crystal": colorB => (
      <Crystal className="" fill={colorB} />
    )
  }

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