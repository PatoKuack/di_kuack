import React from 'react';
import { NotFound } from '../pages/NotFound';
/* ---------------------Research------------------------- */
import { ArbolBaobab } from '../Blogs/Research/ArbolBaobab';
import { ArbolBore } from '../Blogs/Research/ArbolBore';
import { Platon } from '../Blogs/Research/Platon';
/* ---------------------Adventures------------------------- */
import { PrimeraCarrera } from '../Blogs/Adventures/PrimeraCarrera';
import { SegundaCarrera } from '../Blogs/Adventures/SegundaCarrera';
import { ViajeASinaloa } from '../Blogs/Adventures/ViajeASinaloa';
/* ---------------------Phrases------------------------- */
import { StarWars } from '../Blogs/Phrases/StarWars';
import { NickVujicic } from '../Blogs/Phrases/NickVujicic';
import { Estoicismo } from '../Blogs/Phrases/Estoicismo';
import { Taoismo } from '../Blogs/Phrases/Taoismo';
import { Otros } from '../Blogs/Phrases/Otros';
/* ---------------------Phrases------------------------- */
import { TeAntiEstres } from '../Blogs/Recipes/TeAntiEstres';


const researchList = [
  {id: 1, topic: "Árbol Baobab", component: <ArbolBaobab />},
  {id: 2, topic: "Árbol Bore", component: <ArbolBore />},
  {id: 3, topic: "Platón", component: <Platon />},
];
const adventuresList = [
  {id: 1, topic: "Primera carrera", component: <PrimeraCarrera />},
  {id: 2, topic: "Segunda carrera", component: <SegundaCarrera />},
  {id: 3, topic: "Viaje a Sinaloa", component: <ViajeASinaloa />},
];
const phrasesList = [
  {id: 1, topic: "Star Wars", component: <StarWars />},
  {id: 2, topic: "Nick Vujicic", component: <NickVujicic />},
  {id: 3, topic: "Estoicismo", component: <Estoicismo />},
  {id: 4, topic: "Taoísmo", component: <Taoismo />},
];
const recipesList = [
  {id: 1, topic: "Té anti-estres", component: <TeAntiEstres />},
];

function compareLlist( a, b ) {
  if ( a.topic.toLowerCase().replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i').replaceAll('ó', 'o').replaceAll('ú', 'u').replaceAll('ü', 'u').replaceAll('ñ', 'n') < b.topic.toLowerCase().replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i').replaceAll('ó', 'o').replaceAll('ú', 'u').replaceAll('ü', 'u').replaceAll('ñ', 'n')){
    return -1;
  }
  if ( a.topic.toLowerCase().replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i').replaceAll('ó', 'o').replaceAll('ú', 'u').replaceAll('ü', 'u').replaceAll('ñ', 'n') > b.topic.toLowerCase().replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i').replaceAll('ó', 'o').replaceAll('ú', 'u').replaceAll('ü', 'u').replaceAll('ñ', 'n')){
    return 1;
  }
  return 0;
}
researchList.sort(compareLlist);
adventuresList.sort(compareLlist);
phrasesList.sort(compareLlist);
recipesList.sort(compareLlist);

phrasesList.push({id: phrasesList.length + 1, topic: "Otros", components: <Otros />});
const noneList = [
  {id: 1, topic: "Not Found", component: <NotFound />},
];

const sectionsList = [
  {idSection: 1, name: "Investigación", selected: false, list: researchList},
  {idSection: 2, name: "Aventuras", selected: false, list: adventuresList},
  {idSection: 3, name: "Frases", selected: true, list: phrasesList},
  {idSection: 4, name: "Recetas", selected: false, list: recipesList},
  {idSection: 5, name: "otros", selected: false, list: noneList}
];

export { researchList, adventuresList, phrasesList, recipesList, noneList, sectionsList }
