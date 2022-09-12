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
phrasesList.push({id: phrasesList.length + 1, topic: "Otros", components: <Otros />});
const noneList = [
  {id: 1, topic: "Not Found", component: <NotFound />},
];

const sectionsList = [
  {idSection: 1, name: "Investigaciones", idelement: "research", selected: false, list: researchList},
  {idSection: 2, name: "Pato-aventuras", idelement: "adventures", selected: false, list: adventuresList},
  {idSection: 3, name: "Frases", idelement: "phrases", selected: true, list: phrasesList},
  {idSection: 4, name: "Biografía", idelement: "fail", selected: false, component: <NotFound />, list: noneList},
  {idSection: 5, name: "Otros", idelement: "fail", selected: false, component: <NotFound />, list: noneList}
];

export { researchList, adventuresList, phrasesList, noneList, sectionsList }