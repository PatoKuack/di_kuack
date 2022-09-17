import React from 'react';
import { ReactComponent as FavoriteCheck } from '../assets/icons/favoriteCheck2.svg';
import { ReactComponent as ComentDelete } from '../assets/icons/favoriteCheck.svg';

function BlogIcon({ type, colorA="transparent", selected, onClick }) {

  const iconTypes = {
    "check": colorA => (
      <FavoriteCheck className="icon icon__check" fill={colorA} />
    ),
    "delete": colorA => (
      <ComentDelete className="icon icon__delete" fill={colorA} />
    )
  }

  return (
    <span
      className = {`icon-container icon-container__${type} ${selected}`}
      onClick = {onClick}
    >
      {iconTypes[type](colorA)}
    </span>
  );
}

export { BlogIcon }