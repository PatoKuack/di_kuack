/* 
Formas de crear contenido:
  p1:{'h2-1':'Subtítulo.'},
  a1:{'content':'Video: Nombre del video (youtuber)', 'href':'https://www...'},
  p1:{'span-1':'Cita.', 'cite-2':'- autor -'},
  p1:{'span-1':'Texto.', 'b-2':'texto en negritas', 'span-3':'Texto.'},
  ul1:{'li-1':'List item 1', 'li-2':'List item 2', 'li-3':'List item 3',}
  ol1:{'li-1':'List item 1', 'li-2':'List item 2', 'li-3':'List item 3',}
 */

const researchList = [
  {id:1, list:'investigacion', planet: 'earth', title:'Samprāpti', slug:'investigacion-samprapti', content:{
    p1:{'h2-1':'Los seis pasos de la enfermedad (Satkriyākāla).'},
    p2:{'span-1':'Existen numerosas causas de agravamiento o vicio del dosha. Estos pueden ser tanto externos como internos. Si los doshas se vician lo suficiente, los dhātus y su agni se verán anormalmente afectados, causando enfermedades y dolencias (vyādhi). Las primeras etapas de la agravación pueden ser bastante sutiles y pueden requerir más agravación antes de que "capte la atención". Esto puede conducir a una progresión que provoca un cambio en la inteligencia celular, cambios anormales en la calidad de un dhātu y cambios en los órganos y srotamsi.'},
    p3:{'span-1':'Āyurveda clasifica esta progresión de la enfermedad en seis pasos, llamados Satkriyākala.'},
    p4:{'span-1':'En el marco de la medicina Āyurveda, los doshas o humores físicos son las entidades que se relacionan con las funciones fisiológicas. Son cambiantes y su equilibrio o desequilibrio afecta también al resto del organismo.',},
  }, references: {
    a1:{'content':'Página: Samprāpti: The Six Steps of Disease (Vibrational Ayurveda)', 'href':'https://vibrationalayurveda.com/samprapti-the-6-steps-of-disease'},
  }},
  {id:2, list:'investigacion', planet: 'earth', title:'Árbol Bore', slug:'investigacion-arbol-bore', content:{
    p1:{'span-1':'De esta hierba gigante se puede utilizar practicamente cada una de sus partes...'},
  }},
  {id:3, list:'investigacion', planet: 'earth', title:'Platón', slug:'investigacion-platon', content:{
    p1:{'span-1':'Platón fue un filósofo griego seguidor de Sócrates y maestro de Aristóteles...'},
  }},
  {id:4, list:'investigacion', planet: 'earth', title:'Beneficios de dormir', slug:'investigacion-beneficios-de-dormir', content:{
    p1:{'h2-1':'Inactividad de los lóbulos frontales del cerebro.'},
    p2:{'span-1':'Durante el sueño, los globulos frontales del cerebro están inactivos. En estas estructuras cerebrales se regula la voluntad y en parte el juicio y el razonamiento.'},
    p3:{'span-1':'Al despertar puede ocurrir que se tarde cierto tiempo en activar los lóbulos frontales. El sujeto se encuentra unos instantes sin voluntad ni razonamiento correctos y toma la decisión errónea de seguir durmiendo.', 'cite-2':'- Juan Pareja Grande, responsable de la unidad de sueño del Hospital Quironsalud Madrid -'},
    p4:{'h2-1':'Regulación homeostática del sueño.'},
    p5:{'span-1':'Procurar que uno duerma lo que necesita.'},
    p6:{'span-1':'El homeostasis en el sueño, funciona como el hambre y la sed, es decir, como mucho, no ceno y sin llevo un día sin comer, me meto un atracón. En el sueño, cuando uno ha descansado lo que necesita, se despierta satisfecho e inicia rápidamente la vigilia. Si no ha dormido lo suficiente, el sistema homeostático presiona para preservar el sueño.', 'cite-2':'- Juan Pareja Grande, responsable de la unidad de sueño del Hospital Quironsalud Madrid -'},
  }, references:{
    a1:{'content':'Video: ¿Cómo levantarse temprano sin sueño y lleno de energía? (Adrià Solà Pastor)', 'href':'https://www.youtube.com/watch?v=QpmORh67t_0'},
  }},
  {id:5, list:'investigacion', planet: 'earth', title:'Uchuva', slug:'investigacion-uchuva', content:{
    p1:{'span-1':'La uchuva es una planta conocida también como aguaymanto, uvilla, ushun, Physalis peruviana o golden berry, su fruto es una baya globulosa de color naranja amarillento de 1,26 a 2 cm de diámetro.'}, 
    p2:{'span-1':'', 'i-2':''},
  }},
  {id:6, list:'investigacion', planet: 'earth', title:'Estoicismo', slug:'investigacion-estoicismo', content:{
    p1:{'span-1':'La escuela estoica es...'}
  }},
  {id:7, list:'investigacion', planet: 'earth', title:'Colágeno', slug:'investigacion-colageno', content:{
    p1:{'span-1':'El colágeno es la proteína más abundante del cuerpo, ya que es el componente principal de los tejidos conectivos que conforman varias partes del cuerpo, incluyendo los tendones, los ligamentos, la piel y los músculos.'},
    p2:{'span-1':'El colágeno desempeña muchas funciones importantes, como:',},
    ul3:{'li-1':'Proporcionar estructura a la piel', 'li-2':'Alivio del dolor en las articulaciones', 'li-3':'Puede prevenir la perdida ósea', 'li-4':'Posible aumento de masa muscular', 'li-5':'Promueve la salud cardíaca',},
    p4:{'span-1':'Algunos alimentos que pueden ayudar a producir, proteger, persistir y aumentar el colágeno en el cuerpo son:',},
    ul5:{'li-1':'colageno hidrolizado', 'li-2':'Aloe vera', 'li-3':'Ginseng', 'li-4':'vitamina A',}
  }, references:{
    a1:{'content':'Video: El Mejor Truco para Rejuvenecer Tu Piel (y Aumentar El Colágeno) (Dr. La Rosa)', 'href':'https://www.youtube.com/watch?v=mY5OTS7rbMM'},
  }},
  {id:8, list:'investigacion', planet: 'earth', title:'Baguazhang', slug:'investigacion-baguazhang', content:{
    p1:{'span-1':'Baguazhang significa literalmente la "palma de los ocho trigramas".'},
  }},
  {id:9, list:'investigacion', planet: 'earth', title:'Qì', slug:'investigacion-qì', content:{
    p1:{'span-1':'Es una cualidad intangible de todo ser vivo. El concepto se define como "flujo de energía vital".'},
  }},
  {id:10, list:'investigacion', planet: 'earth', title:'Chakra', slug:'investigacion-chakra', content:{
    p1:{'span-1':'Los chakras son centros de energía inconmensurable (no medible) situados en el cuerpo humano.'},
  }},
  {id:11, list:'investigacion', planet: 'earth', title:'Ikigai', slug:'investigacion-ikigai', content:{
    p1:{'span-1':'Es un concepto japonés que se puede definir como "la razón de vivir" o "la razón de ser", lo que hace que la vida valga la pena ser vivida. Todo el mundo, de acuerdo con la cultura japonesa, tiene un ikigai.'},
  }},
];
const adventuresList = [
  {id:1, list:'aventuras', planet: 'fire', title:'Mi primera carrera', slug:'aventuras-mi-primera-carrera', content:{
    p1:{'span-1':'Acabando la preparatoria (nivel medio-superior) yo...'},
  }},
  {id:2, list:'aventuras', planet: 'fire', title:'Mi Segunda carrera', slug:'aventuras-mi-segunda-carrera', content:{
    p1:{'span-1':'Después de pasar todas mis materias de la primera carrera...'},
  }},
  {id:3, list:'aventuras', planet: 'fire', title:'El mundo en Sinaloa', slug:'aventuras-el-mundo-en-sinaloa', content:{
    p1:{'span-1':'Durante las vacaciones de Mayo...'},
  }},
];
const phrasesList = [
  {id:1, list:'frases', planet: 'watter', title:'Star Wars', slug:'frases-star-wars', content:{
    p1:{'span-1':'“La muerte una parte natural de la vida es. Regocíjate por los que te rodean que en la fuerza se transforman. Llorarlos no debes. Añorarlos tampoco. El apego a los celos conduce. La negra sombra de la codicia es.”', 'cite':'Yoda'},
  }},
  {id:2, list:'frases', planet: 'watter', title:'Nick Vujicic', slug:'frases-nick-vujicic', content:{
    p1:{'span-1':'“...la mayoría de los problemas que enfrentamos nos ofrecen la oportunidad de descubrir quiénes debemos ser y cuáles de nuestros dones podemos compartir para beneficiar a otros.”', 'cite-1':'Nick Vujicic, Una vida sin límites'},
  }},
  {id:3, list:'frases', planet: 'watter', title:'Estoicismo', slug:'frases-estoicismo', content:{
    p1:{'span-1':'“La suerte es lo que sucede cuando la preparación se encuentra con la oportunidad.”', 'cite-1':'Séneca'},
    p2:{'span-1':'“La felicidad de tu vida depende de la calidad de tus pensamientos.”', 'cite-1':'Marco Aurelio'},
  }},
  {id:4, list:'frases', planet: 'watter', title:'Taoísmo', slug:'frases-taoismo', content:{
    p1:{'span-1':'“Las grandes hazañas de la vidas son el resultado de las pequeñas obras.”', 'cite-1':'Lao-Tse'},
  }},
];
const dreamsList = [
  {id:1, list:'sueños', planet: 'gaseous', title:'', slug:'sueños-', content:{
    p1:{'span-1':''},
  }},
];
const allList = [];
const noList = [];

// Función que con ayuda del método sort ordena alfabeticamente los titles de una sección
function compareList( a, b ) {
  if ( a.title.toLowerCase().replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i').replaceAll('ó', 'o').replaceAll('ú', 'u').replaceAll('ü', 'u').replaceAll('ñ', 'n') < b.title.toLowerCase().replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i').replaceAll('ó', 'o').replaceAll('ú', 'u').replaceAll('ü', 'u').replaceAll('ñ', 'n')){
    return -1;
  }
  if ( a.title.toLowerCase().replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i').replaceAll('ó', 'o').replaceAll('ú', 'u').replaceAll('ü', 'u').replaceAll('ñ', 'n') > b.title.toLowerCase().replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i').replaceAll('ó', 'o').replaceAll('ú', 'u').replaceAll('ü', 'u').replaceAll('ñ', 'n')){
    return 1;
  }
  return 0;
}
researchList.sort(compareList);
adventuresList.sort(compareList);
phrasesList.sort(compareList);
dreamsList.sort(compareList);

// Se anexa al final de phrasesList el title 'Otras frases'.
phrasesList.push({id: phrasesList.length + 1, list: 'frases', planet: 'watter', title: 'Otras frases', slug: 'frases-otras-frases', content:{
  p1:{'span-1':'“...Con once años había observado que las cosas salían bien antes que mal, en una proporción absurda.”', 'cite-1':'Stephen King, Eso'}, 
  p2:{'span-1':'“Elegir a una persona es en cierta forma matar a otra.”', 'cite-1':'Pablo Picasso'},
  p3:{'span-1':'“Nadie es inútil en el mundo mientras pueda aliviar un poco el peso de sus semejantes.”', 'cite-1':'Charles Dickens'},
  p4:{'span-1':'“Que una persona tropice y pierda el camino, no implica que se perdera por siempre.”', 'cite-1':'Charles Xavier, Doctor Strange en el Multiverso de la Locura'},
  p5:{'span-1':'(cuando se quejan de que no te ries de un chise discriminatorio) “No es cuestión de tener sentido del humor o no, es un asunto de valores y de respeto. Ridiculizar y denigrar no es humor, es humillación y crueldad, causa dolor y fomenta la discriminación, y este tipo de bromas es de muy mal gusto, te diría más, son de mala persona y son de una falta de educación y de conciencia de quien los dice.”', 'cite-1':'Teresa Baró (youtuber), "Cómo responder a bromas pesadas o burlas"'},
  p5:{'span-1':'“La moral tiene criterios estéticos.”', 'cite-1':'Friedrich Nietzsche'},
}});

researchList.forEach(e => allList.push({id: allList.length + 1, list: e.list, title: e.title, slug: e.slug}));
adventuresList.forEach(e => allList.push({id: allList.length + 1, list: e.list, title: e.title, slug: e.slug}));
phrasesList.forEach(e => allList.push({id: allList.length + 1, list: e.list, title: e.title, slug: e.slug}));
// dreamsList.forEach(e => allList.push({id: allList.length + 1, list: e.list, title: e.title, slug: e.slug}));
allList.sort(compareList);

// Lista de secciones
const sectionsList = [
  {idSection:1, name:'Investigación', selected:true, list:researchList},
  {idSection:2, name:'Aventuras', selected:true, list:adventuresList},
  {idSection:3, name:'Frases', selected:true, list:phrasesList},
  {idSection:4, name:'Sueños', selected:false, list:noList},
  {idSection:5, name:'Ideas', selected:false, list:noList},
];

export { researchList, adventuresList, phrasesList, dreamsList, noList, allList, sectionsList }
