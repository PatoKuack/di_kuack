import React from "react";
import {withStarcraft} from "../HOCs/withStarcraft";

function ComentsCounter({textCounter}) {
  return(
    <p className='coments-counter'>{textCounter}</p>
  );
}

const ComentCounterWithListener = withStarcraft(ComentsCounter);

export { ComentCounterWithListener }