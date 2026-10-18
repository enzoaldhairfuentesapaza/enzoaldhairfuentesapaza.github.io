'use strict';
const projects = [
  {
    "id": "dh-dm",
    "name": "DH & DM Maquinarias",
    "repo": "DH-DM-Maquinarias-Web",
    "category": "web",
    "type": "Proyecto para cliente",
    "status": "En producción",
    "stack": [
      "React",
      "TypeScript",
      "Vite",
      "PHP",
      "MySQL"
    ],
    "description": "Plataforma comercial para maquinaria pesada y repuestos, con catálogo público, solicitudes de cotización y panel de administración.",
    "detail": "Integra cuentas de cliente, contenido editable, promociones, cotizaciones, generación de PDF, importación y exportación de Excel, y accesos diferenciados por rol. El frontend usa React y TypeScript; el backend, una API PHP con MySQL/MariaDB en producción.",
    "demo": "https://www.dh-dm-maquinarias.com/",
    "note": "Despliegue indicado por Enzo. La disponibilidad del hosting no se comprobó en esta revisión.",
    "areas": [
      "Desarrollo web",
      "Software empresarial",
      "Bases de datos"
    ],
    "languages": [
      "TypeScript",
      "JavaScript",
      "PHP",
      "SQL",
      "HTML",
      "CSS"
    ],
    "context": []
  },
  {
    "id": "xai",
    "name": "XAI en segmentación MRI 3D",
    "repo": "Implementacion-de-metodos-post-hoc-de-interpretabilidad-en-la-segmentacion-3D-de-tumores-cerebrales",
    "category": "ia",
    "type": "Investigación académica",
    "status": "Experimento académico",
    "stack": [
      "Python",
      "PyTorch",
      "3D U-Net",
      "Grad-CAM",
      "LIME"
    ],
    "description": "Evaluación comparativa de Grad-CAM 3D y LIME 3D para interpretar una 3D U-Net de segmentación de tumores cerebrales con BraTS2020.",
    "detail": "Compara fidelidad, infidelidad, AUC Deletion/Insertion y tiempo de cómputo. En 20 muestras, Grad-CAM obtuvo fidelidad Spearman 0.74 y un tiempo medio de 12.42 s; LIME 3D, 0.48 y 464.54 s. Son resultados de este experimento académico, no una validación clínica.",
    "note": "Las métricas proceden del README del proyecto.",
    "areas": [
      "IA explicable (XAI)",
      "Deep Learning",
      "Visión por computador"
    ],
    "languages": [
      "Python"
    ],
    "context": []
  },
  {
    "id": "almacenamiento",
    "name": "Sistema de Almacenamiento Inteligente",
    "repo": "Sistema-almacenamiento-inteligente",
    "category": "web",
    "type": "Sistema empresarial",
    "status": "En desarrollo",
    "stack": [
      "FastAPI",
      "React",
      "PostgreSQL",
      "Docker"
    ],
    "description": "Sistema de gestión empresarial con inventario, Kardex, compras, ventas, clientes, proveedores, sedes y roles configurables.",
    "detail": "Cada empresa dispone de una instalación independiente. Incluye importación y exportación, estadísticas, auditoría, constancias internas y una base para pronósticos y consultas mediante LLM. La IA requiere un proveedor configurado y los pronósticos, historial y evaluación temporal; ambas áreas siguen en desarrollo.",
    "note": "Versión documentada en el repositorio: 0.2.2.",
    "areas": [
      "Software empresarial",
      "Bases de datos",
      "Analítica"
    ],
    "languages": [
      "Python",
      "TypeScript",
      "SQL",
      "HTML",
      "CSS"
    ],
    "context": []
  },
  {
    "id": "cedhi",
    "name": "Repositorio de planes de trabajo CEDHI",
    "repo": "Repositorio-de-Planes-de-Trabajo-CEDHI",
    "category": "web",
    "type": "Proyecto institucional",
    "status": "Desplegado",
    "stack": [
      "PHP",
      "MySQL",
      "Bootstrap",
      "JavaScript"
    ],
    "description": "Repositorio institucional para centralizar y consultar documentos y planes de trabajo, con búsquedas y accesos por usuario.",
    "detail": "Desarrollado para CEDHI. El código permite consultar documentos mediante búsqueda de texto en MySQL y adaptar la interfaz según el rol de la sesión. Incluye módulos de administración y archivos.",
    "note": "Despliegue indicado por Enzo; falta el enlace público de la instalación.",
    "areas": [
      "Sistemas de información",
      "Bases de datos",
      "Desarrollo web"
    ],
    "languages": [
      "PHP",
      "JavaScript",
      "SQL",
      "HTML",
      "CSS"
    ],
    "context": []
  },
  {
    "id": "cotizador",
    "name": "Cotizador web HDM Maquinarias",
    "repo": "Sistema-Web-de-Cotizaciones-HDM-Maquinarias",
    "category": "web",
    "type": "Herramienta comercial",
    "status": "Desplegado",
    "stack": [
      "JavaScript",
      "HTML/CSS",
      "Supabase",
      "jsPDF"
    ],
    "description": "Generación de cotizaciones de repuestos y maquinaria con autocompletado, reglas por marca, descuentos y conversión PEN/USD.",
    "detail": "Permite registrar al cliente, editar los productos, ajustar precios y generar un PDF con vista previa. El historial se almacena en Supabase y permite recuperar cotizaciones anteriores.",
    "demo": "https://sage-swan-19bb56.netlify.app/",
    "note": "Despliegue indicado por Enzo. La disponibilidad del hosting no se comprobó en esta revisión.",
    "areas": [
      "Automatización comercial",
      "Desarrollo web"
    ],
    "languages": [
      "JavaScript",
      "HTML",
      "CSS"
    ],
    "context": []
  },
  {
    "id": "flutter",
    "name": "Calculadora de cotizaciones HDM",
    "repo": "APP-Calculadora-Cotizaciones-HDM",
    "category": "web",
    "type": "Aplicación móvil",
    "status": "Desplegado",
    "stack": [
      "Flutter",
      "Dart"
    ],
    "description": "Aplicación para calcular cotizaciones paso a paso: moneda, ajustes por marca y descuentos encadenados.",
    "detail": "La interfaz divide el cálculo en tres pasos y conserva un historial de las operaciones mientras la aplicación está abierta. El README documenta la generación de un APK para Android y señala que el historial aún no tiene persistencia local al cerrar la app.",
    "note": "Despliegue indicado por Enzo; falta el enlace de descarga o demostración.",
    "areas": [
      "Desarrollo móvil",
      "Software empresarial"
    ],
    "languages": [
      "Dart"
    ],
    "context": []
  },
  {
    "id": "udp",
    "name": "DistributedNeuralNetUDP",
    "repo": "DistributedNeuralNetUDP",
    "category": "sistemas",
    "type": "Proyecto académico en equipo",
    "status": "Proyecto académico",
    "stack": [
      "Python",
      "C++",
      "UDP",
      "pybind11"
    ],
    "description": "Retropropagación distribuida entre un maestro y diez trabajadores mediante un protocolo propio de transferencia fiable sobre UDP.",
    "detail": "El maestro ejecuta el forward pass, distribuye las particiones y promedia los gradientes de los trabajadores y de su propia partición. La comunicación usa Go-Back-N, ACK acumulativos, retransmisiones y CRC32. Proyecto en equipo con Iván Sardón, Dayanna Vizcarra y Brandon Díaz.",
    "note": "La contribución individual de cada integrante no está detallada en el README.",
    "areas": [
      "Sistemas distribuidos",
      "Redes",
      "Machine Learning"
    ],
    "languages": [
      "Python",
      "C++"
    ],
    "context": []
  },
  {
    "id": "planet",
    "name": "PlanetHunter-AI",
    "repo": "PlanetHunter-AI",
    "category": "ia",
    "type": "Aprendizaje automático",
    "status": "Proyecto académico",
    "stack": [
      "Python",
      "Random Forest",
      "Datos NASA"
    ],
    "description": "Clasificación de exoplanetas como confirmados, candidatos o falsos positivos a partir de datos públicos de la NASA.",
    "detail": "Utiliza Random Forest y trece variables seleccionadas, con preprocesamiento e imputación de datos. El README plantea una interfaz web y actualizaciones periódicas como trabajo futuro; no se presentan aquí como funciones ya desplegadas.",
    "areas": [
      "Machine Learning",
      "Ciencia de datos",
      "Astronomía"
    ],
    "languages": [
      "Python"
    ],
    "context": [
      "NASA"
    ]
  },
  {
    "id": "ecommerce",
    "name": "E-commerce Full Stack Challenge",
    "repo": "Ecommerce-fullstack-React-Vite-",
    "category": "web",
    "type": "Retos y evaluación técnica",
    "status": "Proyecto técnico",
    "stack": [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Docker"
    ],
    "description": "Proyecto de retos para evaluar habilidades full stack mediante flujos de un comercio electrónico.",
    "detail": "El repositorio documenta animación al añadir al carrito, confirmación y detalle de pedidos, paginación, persistencia del carrito, búsqueda, filtros y ordenamiento. Incluye documentación por reto y evidencia en video.",
    "areas": [
      "Desarrollo full stack",
      "Software",
      "Evaluación técnica"
    ],
    "languages": [
      "Python",
      "JavaScript",
      "SQL",
      "HTML",
      "CSS"
    ],
    "context": []
  },
  {
    "id": "videoclip",
    "name": "Videoclip Insanity en OpenGL",
    "repo": "VideoClip-en-OpenGL",
    "category": "grafica",
    "type": "Computación gráfica",
    "status": "Proyecto académico",
    "stack": [
      "C++",
      "OpenGL",
      "GLSL"
    ],
    "description": "Recreación de un videoclip mediante escenas 3D, animaciones, cámaras y shaders personalizados.",
    "detail": "Proyecto del curso de Computación Gráfica en la UCSP. Explora el pipeline programable de OpenGL, transformaciones geométricas, iluminación, materiales y animaciones temporizadas.",
    "areas": [
      "Computación gráfica",
      "Animación 3D"
    ],
    "languages": [
      "C++",
      "GLSL"
    ],
    "context": []
  },
  {
    "id": "guitar",
    "name": "LPGuitarHero",
    "repo": "LPGuitarHero",
    "category": "grafica",
    "type": "Programación funcional y juegos",
    "status": "Proyecto académico",
    "stack": [
      "Clojure",
      "JVM",
      "WebSocket",
      "HTML/JavaScript"
    ],
    "description": "Juego rítmico inspirado en Guitar Hero con un backend funcional en Clojure y una interfaz web.",
    "detail": "Utiliza un servidor HTTP y comunicación WebSocket para conectar el juego con el navegador. El proyecto combina programación funcional, estado de juego y una experiencia musical interactiva.",
    "areas": [
      "Programación funcional",
      "Videojuegos"
    ],
    "languages": [
      "Clojure",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    "context": []
  },
  {
    "id": "rubik",
    "name": "Cubo de Rubik 3D",
    "repo": "OpenGL---CuboRubik",
    "category": "grafica",
    "type": "Gráficos e interacción",
    "status": "Proyecto académico",
    "stack": [
      "C++",
      "OpenGL"
    ],
    "description": "Simulación interactiva de un cubo de Rubik con rotación de caras, animaciones y control de cámara.",
    "detail": "Renderizado tridimensional en tiempo real y controles de teclado para manipular el cubo. Aplica transformaciones geométricas a sus piezas y caras.",
    "areas": [
      "Computación gráfica",
      "Interacción 3D"
    ],
    "languages": [
      "C++"
    ],
    "context": []
  },
  {
    "id": "sgbd",
    "name": "SGBD B2",
    "repo": "SGBD---B2",
    "category": "sistemas",
    "type": "Sistemas de bases de datos",
    "status": "Proyecto académico",
    "stack": [
      "Python",
      "B+Tree",
      "SQL",
      "Almacenamiento en disco"
    ],
    "description": "Motor académico de base de datos con simulación de disco, organización de registros e índices secundarios B+Tree.",
    "detail": "Explora la lógica interna de un SGBD: almacenamiento físico, acceso mediante índices y operaciones de un modelo relacional. El objetivo es comprender la relación entre organización de datos y consultas.",
    "areas": [
      "Bases de datos",
      "Estructuras de datos",
      "Almacenamiento"
    ],
    "languages": [
      "Python",
      "SQL"
    ],
    "context": []
  },
  {
    "id": "bot",
    "name": "Control BOT",
    "repo": "Control-BOT",
    "category": "sistemas",
    "type": "Bots y automatización",
    "status": "Proyecto técnico",
    "stack": [
      "Python",
      "Pyrogram",
      "Telegram API"
    ],
    "description": "Base modular para desarrollar un bot de Telegram con configuración, comandos y carga de plugins.",
    "detail": "El código inicia un cliente Pyrogram a partir de configuración JSON y carga módulos de la aplicación. Su estructura separa el arranque, las utilidades y las funciones del bot.",
    "areas": [
      "Automatización",
      "Bots de Telegram"
    ],
    "languages": [
      "Python"
    ],
    "context": []
  }
];
const categoryNames = {web:'Web y aplicaciones',ia:'Inteligencia artificial',sistemas:'Sistemas',grafica:'Gráficos y juegos'};
const symbols = {web:'↗',ia:'λ',sistemas:'⌘',grafica:'◈'};
const grid = document.querySelector('#project-grid');
const search = document.querySelector('#project-search');
const count = document.querySelector('#project-count');
const showAll = document.querySelector('#show-all');
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const dialog = document.querySelector('#project-dialog');
let currentFilter = 'all';
let expanded = false;
let lastTrigger = null;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove('reveal-pending');revealObserver.unobserve(entry.target);}});
},{threshold:0.08,rootMargin:'0px 0px -25px 0px'}) : null;
function registerReveals(elements) {
  if(!revealObserver||reducedMotion.matches)return;
  elements.forEach((element,index)=>{
    element.dataset.reveal='';element.style.setProperty('--reveal-delay',`${(index%3)*65}ms`);
    element.classList.add('reveal-pending');revealObserver.observe(element);
  });
}
reducedMotion.addEventListener('change',event=>{
  if(event.matches){document.querySelectorAll('.reveal-pending').forEach(e=>e.classList.remove('reveal-pending'));revealObserver?.disconnect();}
});

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}
function repositoryUrl(project) { return 'https://github.com/enzoaldhairfuentesapaza/' + project.repo; }
function externalLink(text,url,className) {
  const a=makeElement('a',className,text);
  a.href=url;a.target='_blank';a.rel='noopener noreferrer';
  return a;
}
function normalize(text) {return text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();}
function matchingProjects() {
  const query=normalize(search.value.trim());
  return projects.filter(p=>(currentFilter==='all'||p.category===currentFilter)&&(!query||normalize([p.name,p.description,p.detail,...p.stack,...p.areas,...p.languages,...p.context].join(' ')).includes(query)));
}
function projectLabels(project) {
  const group=makeElement('div','project-labels');
  const areas=makeElement('div','area-tags');areas.setAttribute('aria-label','Áreas de la computación');
  areas.append(...project.areas.map(a=>makeElement('span','',a)));
  const languages=makeElement('div','language-tags');languages.setAttribute('aria-label','Lenguajes utilizados');
  languages.append(...project.languages.map(l=>makeElement('span','',l)));
  group.append(areas,languages);
  if(project.context.length){const context=makeElement('div','context-tags');context.setAttribute('aria-label','Contexto del proyecto');context.append(...project.context.map(c=>makeElement('span','',c)));group.append(context);}
  return group;
}
function renderProjects() {
  const matches=matchingProjects();
  const useLimit=!expanded&&currentFilter==='all'&&!search.value.trim();
  const visible=useLimit?matches.slice(0,6):matches;
  grid.querySelectorAll('[data-reveal]').forEach(element=>revealObserver?.unobserve(element));
  grid.replaceChildren();
  count.textContent = matches.length===14 ? '14 proyectos · 4 áreas de exploración' : `${matches.length} ${matches.length===1?'proyecto':'proyectos'} encontrados`;
  for (const p of visible) {
    const card=makeElement('article','project-card');
    const top=makeElement('div','card-top');
    const symbol=makeElement('span','card-symbol',symbols[p.category]);symbol.setAttribute('aria-hidden','true');
    top.append(symbol,makeElement('span','',categoryNames[p.category]));
    const title=makeElement('h4','',p.name);
    const body=makeElement('p','',p.description);
    const footer=makeElement('footer','');
    const more=makeElement('button','detail-trigger','Ver detalle ↗');more.type='button';more.dataset.project=p.id;
    more.setAttribute('aria-label','Ver detalle de '+p.name);
    const repo=externalLink('GitHub ↗',repositoryUrl(p));repo.setAttribute('aria-label','Repositorio de '+p.name+' en GitHub');
    footer.append(more,repo);card.append(top,title,body,projectLabels(p),footer);grid.append(card);
  }
  if(!matches.length) grid.append(makeElement('p','empty','No encontré proyectos con ese filtro. Prueba otra tecnología o categoría.'));
  showAll.hidden=currentFilter!=='all'||!!search.value.trim();
  showAll.textContent=expanded?'Mostrar selección ↑':'Ver los 14 proyectos ↓';
  registerReveals([...grid.querySelectorAll('.project-card')]);
}
filterButtons.forEach(button=>button.addEventListener('click',()=>{
  currentFilter=button.dataset.filter;
  filterButtons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  renderProjects();
}));
search.addEventListener('input',renderProjects);
showAll.addEventListener('click',()=>{
  expanded=!expanded;renderProjects();
  if(!expanded) document.querySelector('.catalogue').scrollIntoView({block:'start'});
});
function openProject(id,trigger) {
  const p=projects.find(p=>p.id===id);if(!p)return;
  lastTrigger=trigger;
  document.querySelector('#dialog-type').textContent=p.type;
  document.querySelector('#dialog-title').textContent=p.name;
  document.querySelector('#dialog-status').textContent=p.status;
  document.querySelector('#dialog-description').textContent=p.description;
  document.querySelector('#dialog-detail').textContent=p.detail;
  document.querySelector('#dialog-classification').replaceChildren(projectLabels(p));
  const tags=document.querySelector('#dialog-tags');tags.replaceChildren(...p.stack.map(s=>makeElement('span','',s)));
  const links=document.querySelector('#dialog-links');links.replaceChildren(externalLink('Ver repositorio ↗',repositoryUrl(p),'btn'));
  if(p.demo)links.append(externalLink('Abrir aplicación ↗',p.demo,'btn ghost'));
  dialog.showModal();document.body.classList.add('dialog-open');
  document.querySelector('.dialog-close').focus();
}
document.addEventListener('click',event=>{
  const trigger=event.target.closest('[data-project]');
  if(trigger)openProject(trigger.dataset.project,trigger);
});
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{
  if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}
});
dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');if(lastTrigger)lastTrigger.focus();});
const menuToggle=document.querySelector('.menu-toggle');
const navlinks=document.querySelector('#navlinks');
function closeMenu(){navlinks.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}
menuToggle.addEventListener('click',()=>{const open=navlinks.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
navlinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
renderProjects();
registerReveals([...document.querySelectorAll('.section-head,.feature,.skill-col,.language-inventory,.academic,.milestone,.working-style,.interest,.quote')]);
