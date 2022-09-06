import React from 'react';
import { BlogContent } from "../components/BlogContent";
import { ComentsCounter } from "../components/ComentsCounter";
import { ComentsItem } from "../components/ComentsItem";
import { ComentsList } from "../components/ComentsList"
import { CreateButtom } from "../components/CreateButtom";
import '../styles/coments.css';

const coments = [
  {id: 1, text: "Agrega esto: ...", loved: true},
  {id: 2, text: "También faltó esto: ...", loved: false},
  {id: 3, text: "Puedes aprender más de aquí: ...", loved: true}
];

function Blog() {
  
  const [coment, setComent] = React.useState(coments);
  // const comentsLoved = coment.filter(c => !!c.loved).length;
  const totalComents = coment.length;

  return (
    <React.Fragment>
      <BlogContent />

      <ComentsCounter 
        total = { totalComents }
      />
        <ComentsList>
        <CreateButtom />
          {coments.map( comented => (
            <ComentsItem 
              key={comented.id} 
              text={comented.text} 
              loved={comented.loved}
            />
          ))}
      </ComentsList>
    </React.Fragment>
  );
}

export { Blog }