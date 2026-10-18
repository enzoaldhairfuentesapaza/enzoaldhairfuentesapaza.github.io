'use strict';
const projects = __PROJECT_DATA__;
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
