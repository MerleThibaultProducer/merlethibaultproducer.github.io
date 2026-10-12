/* Portfolio – Thibault Merle : fonctionnement du site (navigation, langues, affichage). Rien à modifier ici pour changer le contenu. */
const $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const NAV = () => [{label:t("home"),route:"#/"},...SECTIONS,{label:t("infos"),route:"#/infos"}];
/* ---------- Langue (FR / EN) ---------- */
const UI = {
  fr:{home:"Accueil",infos:"Infos",seeProjects:"Voir mes projets",contactMe:"Me contacter",details:"Détails",prev:"Projet précédent",next:"Projet suivant",others:"Autres projets",legal:"Informations légales",contact:"Contact",mainNav:"Navigation principale",linkedin:"LinkedIn (nouvel onglet)",portrait:"Portrait de",cvDl:"Télécharger le CV (PDF)",cvView:"Aperçu du CV",stWip:"En préparation",stDone:"Terminé",nightMode:"Passer en mode nuit",dayMode:"Passer en mode jour",toTop:"Haut de la page",backCat:"Retour :",cvLead:"Mon CV (version anglaise), à consulter ici ou à télécharger.",cvAlt:"CV de",zoom:"Agrandir l'image",close:"Fermer",enlarged:"Image agrandie",imgToAdd:"Image à ajouter",langLabel:"Choisir la langue",group:"Groupe",members:"membres",newTab:"nouvel onglet",cvShort:"Mon CV",legalPage:"Mentions légales et confidentialité",legalShort:"Mentions légales",brief:"En bref",ctx:"Contexte",myRole:"Mon rôle",result:"Résultat",decisions:"Mon rôle et mes décisions",updated:"Dernière mise à jour :"},
  en:{home:"Home",infos:"Info",seeProjects:"See my projects",contactMe:"Contact me",details:"Details",prev:"Previous project",next:"Next project",others:"Other projects",legal:"Legal notice",contact:"Contact",mainNav:"Main navigation",linkedin:"LinkedIn (new tab)",portrait:"Portrait of",cvDl:"Download CV (PDF)",cvView:"Preview CV",stWip:"In preparation",stDone:"Done",nightMode:"Switch to dark mode",dayMode:"Switch to light mode",toTop:"Back to top",backCat:"Back:",cvLead:"My CV, to view here or download.",cvAlt:"CV of",zoom:"Enlarge image",close:"Close",enlarged:"Enlarged image",imgToAdd:"Image to add",langLabel:"Choose language",group:"Group",members:"members",newTab:"new tab",cvShort:"My CV",legalPage:"Legal notice and privacy",legalShort:"Legal notice",brief:"At a glance",ctx:"Context",myRole:"My role",result:"Outcome",decisions:"My role and decisions",updated:"Last updated:"}
};
let lang = "fr";
const t = k => UI[lang][k];
const q = (fr,en) => lang==="en" ? en : fr;
function setLang(l){
  lang = l==="en" ? "en" : "fr";
  SITE = lang==="en" ? SITE_EN : SITE_FR;
  PROJECTS = lang==="en" ? PROJECTS_EN : PROJECTS_FR;
  SECTIONS = lang==="en" ? SECTIONS_EN : SECTIONS_FR;
  document.documentElement.lang = lang;
  try{ localStorage.setItem("lang", lang); }catch(e){}
}
try{ setLang(localStorage.getItem("lang")); }catch(e){ setLang("fr"); }
/* Mode nuit : choix mémorisé, sinon réglage du système */
try{ const th = localStorage.getItem("theme"); if(th==="dark"||th==="light") document.documentElement.dataset.theme = th; }catch(e){}
const isDark = () => document.documentElement.dataset.theme ? document.documentElement.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
const MOON = `<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>`;
const SUN = `<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`;

function img(src, alt, fallback){ return src ? `<img src="${esc(src)}" alt="${esc(alt)}">` : esc(fallback); }

const MAIL_ICON = `<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M3.5 6.5 12 13l8.5-6.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`;
const CV_ICON = `<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9.5 12h5M9.5 15.5h5"/></svg>`;
const LINKEDIN_ICON = `<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 10.5v6M8 7.5v.01M11.5 16.5v-6M11.5 13.2c0-1.6.9-2.7 2.3-2.7s2.2 1 2.2 2.7v3.3"/></svg>`;
function chrome(active){
  $("#brand").innerHTML = `<span class="bn"><span class="b1">${esc(SITE.prenom)}</span> <span class="b2">${esc(SITE.nom.toUpperCase())}</span></span><span class="brole">${esc(SITE.titre)}</span>`;
  document.body.classList.toggle("page-home", active === "#/");
  $("#nav").innerHTML = NAV().map(n => `<li><a data-go="${n.route}" role="link" tabindex="0" ${n.route===active?'aria-current="page"':''}>${n.label}</a></li>`).join("")
    + `<li class="lang" role="group" aria-label="${t("langLabel")}"><button type="button" data-lang="fr" aria-pressed="${lang==="fr"}" lang="fr" aria-label="Français">FR</button><span aria-hidden="true">/</span><button type="button" data-lang="en" aria-pressed="${lang==="en"}" lang="en" aria-label="English">EN</button><button type="button" class="theme-btn" data-theme-toggle aria-label="${isDark()?t("dayMode"):t("nightMode")}" title="${isDark()?t("dayMode"):t("nightMode")}">${isDark()?SUN:MOON}</button></li>`;
  document.querySelector("header nav").setAttribute("aria-label", t("mainNav"));
  $("#h-legal").textContent = t("legal"); $("#h-contact").textContent = t("contact");
  $("#lb").setAttribute("aria-label", t("enlarged")); $("#lb button").setAttribute("aria-label", t("close"));
  $("#legal").innerHTML = `<p>${SITE.legal.map(l=>`<span>${esc(l)}</span>`).join("")}<a data-go="#/mentions" role="link" tabindex="0">${t("legalPage")}</a></p>`;
  $("#contact").innerHTML = `<a class="social" href="mailto:${esc(SITE.email)}">${MAIL_ICON}<span>${esc(SITE.email)}</span></a>`
    + `<a class="social" href="${esc(SITE.linkedin)}" target="_blank" rel="noopener" aria-label="${t("linkedin")}">${LINKEDIN_ICON}<span>LinkedIn</span></a>`
    + `<a class="social" data-go="#/infos" role="link" tabindex="0">${CV_ICON}<span>${t("cvShort")}</span></a>`;
}

function home(){
  /* Le nom et le titre s'affichent en grand dans le bandeau du haut (voir chrome) ; ici : photo + présentation */
  return `<h1 class="sr">${esc(SITE.prenom)} ${esc(SITE.nom)} – ${esc(SITE.titre)}</h1>
  <section class="home-intro">
    <div class="portrait" role="img" aria-label="${t("portrait")} ${esc(SITE.prenom)} ${esc(SITE.nom)}">${img(SITE.photo,"",SITE.prenom[0]+SITE.nom[0])}</div>
    <div class="home-txt">
      <div class="intro">${SITE.accroche?`<p class="accroche">${esc(SITE.accroche)}</p>`:""}${SITE.intro.map(p=>Array.isArray(p)?`<section class="hb"><h2 class="home-k">${esc(p[0])}</h2><p>${rich(p[1])}</p></section>`:`<p>${rich(p)}</p>`).join("")}</div>
      <p class="cta"><a class="btn" data-go="#/pro" role="link" tabindex="0">${t("seeProjects")}</a>${SITE.email?`<a class="btn ghost" href="mailto:${esc(SITE.email)}">${t("contactMe")}</a>`:""}</p>
    </div>
  </section>`;
}

/* Titre de vignette façon CV : « Exercice 2 » ou la date en doré, puis le titre */
function cardTitle(title,cat){
  if(cat) return `<small>${esc(cat)}</small>${esc(title)}`;
  let m = title.match(/^((?:Exercice|Exercise)\s+\d+)\s+–\s+(.+)$/);
  if(m) return `<small>${esc(m[1])}</small>${esc(m[2])}`;
  m = title.match(/^(.+?)\s+–\s+([^–]*\d{4})$/);
  if(m) return `<small>${esc(m[2])}</small>${esc(m[1])}`;
  return esc(title);
}
/* Ligne d'infos sous le titre, façon CV : « Producer · 4 équipes · 12 à 15 personnes » */
function cardMeta(p){
  const v=Object.values(p.infos||{}).slice(0,2);
  return v.length ? `<p class="cmeta"><b>${esc(v[0])}</b>${v[1]?` · ${esc(v[1])}`:""}</p>` : "";
}
/* Texte qui apparaît au survol d'une vignette : moteur, puis quelques repères */
const ENGINE_ICON = `<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.8l8 4.6v9.2l-8 4.6-8-4.6V7.4z"/><path d="M12 12l8-4.6M12 12L4 7.4M12 12v9.2"/></svg>`;
function survol(s){
  return `<div class="survol" aria-hidden="true">${s.moteur?`<div class="sv-eng">${s.logos?`<span class="sv-logos">${s.logos.map(l=>`<img src="${esc(l)}" alt="" width="36" height="36">`).join("")}</span>`:s.logo?`<img src="${esc(s.logo)}" alt="" width="40" height="40">`:ENGINE_ICON}<span>${esc(s.moteur)}</span></div><i></i>`:""}<ul>${s.items.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>`;
}
function listing(sec){
  const items = PROJECTS[sec.key];
  const cards = items.map(p => `<article class="card${p.wip?" is-wip":""}">
    <div class="thumb${p.fit==="contain"?" contain":""}${p.img?" has-img":""}"${p.bg?` style="--pbg:${esc(p.bg)}"`:""}${p.wip?"":` data-go="#/${sec.key}/${esc(p.id)}" role="link" tabindex="0" aria-label="${esc(p.title)}"`}>${img(p.img,p.title,p.title[0])}${p.wip?'<span class="wip-blur" aria-hidden="true"></span>':""}${p.survol?survol(p.survol):""}<span class="status${p.wip?" wip":""}"><i aria-hidden="true"></i>${p.wip?t("stWip"):t("stDone")}</span></div>
    <h3>${cardTitle(p.title,p.cat)}</h3>${cardMeta(p)}<p class="cdesc">${esc(p.carte||p.desc)}</p>
    ${p.wip?'<span class="btn is-disabled" aria-disabled="true">'+t("details")+'</span>':`<a class="btn" data-go="#/${sec.key}/${esc(p.id)}" role="link" tabindex="0">${t("details")}</a>`}</article>`).join("");
  return `<div class="list-head"><h1>${sec.label}</h1><p class="lead">${sec.intro}</p></div>
  <div class="stage">${items.length ? `<div class="grid${items.length<=4?" few":""}${sec.key==="exo"?" exo":""}" data-n="${items.length}">${cards}</div>` : `<div class="empty">Aucun projet pour le moment.</div>`}</div>`;
}

const rich = s => esc(s).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/==(.+?)==/g,"<mark>$1</mark>");
const LENS = '<span class="lens" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21M10.5 8v5M8 10.5h5"/></svg></span>';

const SCHEMAS = {
marche(){
  const bars=[[q("2024","2024"),2.14,"#317AC1"],[q("2029 (prévision)","2029 (forecast)"),3.72,"#94670A"]];
  const x0=190,sc=(640-x0)/4.2;
  let o=`<svg viewBox="0 0 700 270" xmlns="http://www.w3.org/2000/svg">`;
  o+=`<text x="${x0}" y="22" class="m" font-size="11" letter-spacing="1.2">${q("MARCHÉ AFRICAIN DU JEU VIDÉO · MILLIARDS DE DOLLARS","AFRICAN VIDEO GAME MARKET · BILLION DOLLARS")}</text>`;
  bars.forEach((b,i)=>{const y=44+i*66,w=b[1]*sc;
    o+=`<text x="${x0-14}" y="${y+30}" text-anchor="end" class="t" font-size="13" font-weight="500">${b[0]}</text><rect x="${x0}" y="${y}" width="${w}" height="44" fill="${b[2]}"/><text x="${x0+w-12}" y="${y+29}" text-anchor="end" font-size="16" font-weight="600" fill="#fff">${String(b[1]).replace(".",q(",","."))} Md$</text>`;});
  o+=`<path d="M${x0+2.14*sc+40} 66C${x0+2.14*sc+80} 66 ${x0+2.14*sc+80} 110 ${x0+2.14*sc+40} 110" class="ln"/><text x="${x0+2.14*sc+92}" y="94" class="g" font-size="13" font-weight="600">≈ +11,6 %${q(" / an"," / yr")}</text>`.replace("+11,6",q("+11,6","+11.6"));
  o+=`<path d="M${x0} 186H640" class="axis"/>`;
  o+=`<text x="${x0}" y="212" class="t" font-size="12.5"><tspan font-weight="600">${q("Monde","World")}</tspan> : 272,86 → 426,02 Md$ (≈ +9,3 %${q(" / an"," / yr")})</text>`.replace("272,86 → 426,02 Md$ (≈ +9,3 %",q("272,86 → 426,02 Md$ (≈ +9,3 %","272.86 → 426.02 Bn$ (≈ +9.3 %"));
  o+=`<text x="${x0}" y="236" class="m" font-size="12">${q("Part de l'Afrique : environ 0,8 % du marché mondial en 2024, 0,9 % en 2029","Africa's share: about 0.8 % of the world market in 2024, 0.9 % in 2029")}</text></svg>`;
  return o;
},
orga(){
  /* Schéma sobre : intervenants et producer, reliés aux 4 groupes (effectifs tirés d'EQUIPES_FDA, producer non compté) */
  const G=["Le Castor et l'Écureuil","Project GLOW","Insight","The Flowering Dead"];
  const E = typeof EQUIPES_FDA!=="undefined" ? EQUIPES_FDA : [];
  const n = i => E[i] ? ["design","art"].reduce((s,k)=>s+E[i][k].filter(m=>m.role!=="Producer").length,0) : 0;
  const tot = G.reduce((s,_,i)=>s+n(i),0);
  let o=`<svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg">`;
  const top=(x,t,s)=>`<rect x="${x}" y="8" width="200" height="58" rx="4" class="ob"/><text x="${x+100}" y="33" text-anchor="middle" class="t" font-size="15" font-weight="700">${t}</text><text x="${x+100}" y="53" text-anchor="middle" class="m" font-size="12.5">${s}</text>`;
  o+=top(20,q("Intervenants","Instructors"),q("rôle des éditeurs","acting as publishers"));
  o+=top(300,"Producer",q("suivi et communication","tracking and communication"));
  o+=`<path d="M220 37H300M260 37V96" class="ln2"/>`;
  o+=`<rect x="10" y="96" width="500" height="200" rx="6" class="ln2"/>`;
  G.forEach((g,i)=>{const x=26+(i%2)*240,y=112+Math.floor(i/2)*92,c=x+114;
    o+=`<rect x="${x}" y="${y}" width="228" height="76" rx="4" class="sb"/>`;
    o+=`<text x="${c}" y="${y+30}" text-anchor="middle" class="t" font-size="14.5" font-weight="700">${g}</text>`;
    o+=`<text x="${c}" y="${y+54}" text-anchor="middle" class="m" font-size="13">${n(i)} ${q("personnes · 2 référents","people · 2 leads")}</text>`;
  });
  o+=`<text x="260" y="324" text-anchor="middle" class="m" font-size="13">${tot?`${tot} ${q("personnes au total, des dailies dans chaque groupe","people in total, with dailies in each group")}`:q("Des dailies dans chaque groupe","Dailies in each group")}</text></svg>`;
  return o;
},
planning(){
  const x0=36,dw=(724-36)/29,X=d=>x0+d*dw;
  const wk=[3,4,10,11,17,18,24,25];
  let o=`<svg viewBox="0 0 760 300" xmlns="http://www.w3.org/2000/svg">`;
  wk.forEach(d=>o+=`<rect x="${X(d)}" y="34" width="${dw}" height="196" class="m" fill-opacity=".13"/>`);
  o+=`<rect x="${X(5)}" y="34" width="${5*dw}" height="196" fill="#B5524F" fill-opacity=".2"/><text x="${X(5)+2.5*dw}" y="26" text-anchor="middle" font-size="10.5" font-weight="500" fill="#B5524F">${q("Crise de mi-parcours","Mid-course crisis")}</text>`;
  o+=`<rect x="${X(15)}" y="34" width="${14*dw}" height="196" fill="#2F6B4F" fill-opacity=".16"/><text x="${X(15)+7*dw}" y="26" text-anchor="middle" font-size="10.5" font-weight="500" fill="#2F6B4F">Playtests</text>`;
  const S=[["Sprint 1",0,3],["Sprint 2",5,11],["Sprint 3",16,8],["Sprint 4",26,3]];
  S.forEach((a,i)=>{o+=`<rect x="${X(a[1])+1}" y="52" width="${a[2]*dw-2}" height="30" class="navy"/><text x="${X(a[1])+a[2]*dw/2}" y="72" text-anchor="middle" class="ond" font-size="${a[2]<4?11:12}" font-weight="500">${a[2]<4?a[0].replace("Sprint ","S"):a[0]}</text>`;});
  o+=`<text x="${x0}" y="104" class="m" font-size="10" letter-spacing="1.2">SPRINTS</text>`;
  o+=`<path d="M${x0} 150H724" class="ln"/><text x="${x0}" y="132" class="m" font-size="10" letter-spacing="1.2">${q("JALONS","MILESTONES")}</text>`;
  const M=[[q("Intentions et","Intentions &"),q("moodboards","moodboards"),2],[q("Proof of","Proof of"),"Concept",8],["Alpha","",15],[q("Bêta","Beta"),"",22],["Build",q("final","final"),28]];
  M.forEach(m=>{const x=X(m[2])+dw/2;
    o+=`<rect x="${x-6}" y="144" width="12" height="12" transform="rotate(45 ${x} 150)" class="gold"/>`;
    const an=m[2]===28?"end":"middle",tx=m[2]===28?x+8:x;
    o+=`<text x="${tx}" y="178" text-anchor="${an}" class="t" font-size="11.5" font-weight="500">${m[0]}</text>${m[1]?`<text x="${tx}" y="192" text-anchor="${an}" class="t" font-size="11.5" font-weight="500">${m[1]}</text>`:""}`;});
  o+=`<path d="M${x0} 230H724" class="axis"/>`;
  [[0,q("27/05","27 May")],[5,q("01/06","1 Jun")],[12,q("08/06","8 Jun")],[19,q("15/06","15 Jun")],[26,q("22/06","22 Jun")],[28,q("24/06","24 Jun")]].forEach(tk=>{const x=X(tk[0])+dw/2;o+=`<path d="M${x} 230v6" class="axis"/><text x="${x}" y="252" text-anchor="middle" class="m" font-size="10.5">${tk[1]}</text>`;});
  o+=`<text x="${x0}" y="286" class="m" font-size="10.5">${q("Week-ends en grisé · production du 27 mai au 24 juin 2026","Weekends shaded · production from 27 May to 24 June 2026")}</text></svg>`;
  return o;
},
bilan(){
  const D=[[q("Sprint 1 · 27–29 mai","Sprint 1 · 27–29 May"),160,15,5,180],[q("Sprint 2 · 1–11 juin","Sprint 2 · 1–11 June"),494,19,17,530],[q("Sprint 3 · 12–19 juin","Sprint 3 · 12–19 June"),477,23,14,514],[q("Sprint 4 · 22–24 juin","Sprint 4 · 22–24 June"),158,0,0,160]];
  const x0=170,sc=(700-x0-80)/540;
  let o=`<svg viewBox="0 0 700 290" xmlns="http://www.w3.org/2000/svg">`;
  D.forEach((d,i)=>{const y=34+i*52;let x=x0;
    o+=`<text x="${x0-12}" y="${y+21}" text-anchor="end" class="t" font-size="12.5">${d[0]}</text>`;
    [[d[1],"#317AC1","#fff"],[d[2],"#E1A624","#13294B"],[d[3],"#B5524F","#fff"]].forEach(p=>{if(!p[0])return;const w=p[0]*sc;
      o+=`<rect x="${x}" y="${y}" width="${w}" height="30" fill="${p[1]}"/>${w>26?`<text x="${x+w/2}" y="${y+20}" text-anchor="middle" font-size="11.5" font-weight="500" fill="${p[2]}">${p[0]}</text>`:""}`;x+=w;});
    o+=`<text x="${x+10}" y="${y+20}" class="m" font-size="11.5">${d[4]} ${q("tâches","tasks")}</text>`;});
  const ly=250;[[q("Terminées","Completed"),"#317AC1"],[q("Supprimées (kills)","Removed (kills)"),"#E1A624"],[q("En retard","Late"),"#B5524F"]].forEach((l,i)=>{const x=x0+i*150;o+=`<rect x="${x}" y="${ly}" width="14" height="14" fill="${l[1]}"/><text x="${x+22}" y="${ly+12}" class="t" font-size="12">${l[0]}</text>`;});
  return o+`</svg>`;
}
};
/* Numéro de bande : chiffres romains (I, II…) affichés en 01, 02… comme le style du CV */
function bandNum(n){
  const v={I:1,V:5,X:10,L:50}; const r=String(n).toUpperCase();
  if(!/^[IVXL]+$/.test(r)) return n;
  let t=0; for(let i=0;i<r.length;i++){ const a=v[r[i]], b=v[r[i+1]]||0; t += a<b ? -a : a; }
  return String(t).padStart(2,"0");
}
/* Carrousel des équipes : une diapositive par groupe, deux colonnes (Game Design / Game Art) */
function teamsCarousel(groupes){
  const person = m => { const role = lang==="en" && m.roleEn ? m.roleEn : m.role;
    return `<li class="${m.role==="Producer"?"me":""}"><a href="${esc(m.url)}" target="_blank" rel="noopener" aria-label="${esc(m.nom)} – LinkedIn (${t("newTab")})">${LINKEDIN_ICON}<span class="tm-n">${esc(m.nom)}</span></a><span class="tm-r">${esc(role)}</span></li>`; };
  /* Tri alphabétique par nom de famille (tout ce qui suit le prénom) ; le producer reste en tête */
  const surname = m => m.nom.split(" ").slice(1).join(" ") || m.nom;
  const sorted = list => [...list].sort((x,y)=> (y.role==="Producer")-(x.role==="Producer") || surname(x).localeCompare(surname(y),"fr",{sensitivity:"base"}) || x.nom.localeCompare(y.nom,"fr"));
  /* Le producer est affiché à part, au-dessus des deux colonnes, et n'est pas compté dans l'équipe */
  const prod = list => list.filter(m=>m.role==="Producer"), team = list => list.filter(m=>m.role!=="Producer");
  const col = (titre, list) => `<div class="tm-col"><h4>${titre}<small>${list.length}</small></h4><ul>${sorted(list).map(person).join("")}</ul></div>`;
  return `<figure class="car teams" aria-roledescription="carrousel"><div class="car-track">${groupes.map((g,i)=>`<section class="car-s team" aria-label="${esc(g.nom)}">
      <header><span class="tm-k">${t("group")} ${i+1}</span><h3>${esc(g.nom)}</h3><p>${esc(lang==="en"?g.genreEn:g.genre)} · ${team(g.design).length+g.art.length} ${t("members")}</p></header>
      ${prod(g.design).length?`<div class="tm-col tm-prod"><ul>${prod(g.design).map(person).join("")}</ul></div>`:""}
      <div class="tm-cols">${col("Game Design",team(g.design))}${col("Game Art",team(g.art))}</div></section>`).join("")}</div>
    <div class="car-nav"><button type="button" data-car="-1" aria-label="${q("Groupe précédent","Previous group")}">‹</button><span class="car-cnt">1 / ${groupes.length}</span><button type="button" data-car="1" aria-label="${q("Groupe suivant","Next group")}">›</button></div></figure>`;
}
function blocks(list){
  return (list||[]).map(b=>{
    switch(b.k){
      case "t": return String(b.text).split(/\n\s*\n/).map(x=>`<p>${rich(x)}</p>`).join("");
      case "h": return `<h2>${rich(b.text)}</h2>`;
      case "band": return `<section class="band"><div class="band-head"><span class="band-num">${esc(bandNum(b.num))}</span><h2>${esc(b.titre)}</h2></div>${b.lignes.map(l=>`<div class="brow${l.m&&l.m.length?"":" solo"}${l.pos==="dessous"?" under":""}"><div class="bt">${blocks(l.t)}</div>${l.m&&l.m.length?`<div class="bm">${blocks(l.m)}</div>`:""}</div>`).join("")}</section>`;
      case "etapes": return `<ol class="etapes"><h3>${esc(b.titre)}</h3>${b.items.map(i=>`<li${i[2]?` class="${i[2]}"`:""}><b>${rich(i[0])}</b>${i[1]?`<span>${rich(i[1])}</span>`:""}</li>`).join("")}</ol>`;
      case "schema": return `<figure class="schema" role="img" aria-label="${esc(b.cap)}">${SCHEMAS[b.nom]()}${b.cap?`<div class="cap">${esc(b.cap)}</div>`:""}</figure>`;
      case "stats": return `<div class="stats">${b.items.map(i=>`<div class="stat"><b>${esc(i[0])}</b><span>${esc(i[1])}</span></div>`).join("")}</div>`;
      case "fiche": return `<div class="fiche"><h3>${esc(b.titre)}</h3><ul>${b.items.map(x=>`<li>${rich(x)}</li>`).join("")}</ul></div>`;
      case "src": return `<ol class="src">${b.items.map(i=>`<li><a href="${esc(i[1])}" target="_blank" rel="noopener">${esc(i[0])}</a></li>`).join("")}</ol>`;
      case "tbl": return `<table class="tbl${b.plain?" plain":""}"><caption>${esc(b.titre)}</caption><thead><tr>${b.cols.map(c=>`<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>${b.rows.map(r=>typeof r==="string"?`<tr class="grp"><td colspan="${b.cols.length}">${esc(r)}</td></tr>`:`<tr>${r.map((c,i)=>`<td${(!b.plain&&i===2)?` class="${/^\+/.test(c)?"pos":"neg"}"`:""}>${b.plain&&i===0?`<b>${esc(c)}</b>`:esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
      case "img": return `<figure${b.cls?` class="${b.cls}"`:""}>${b.src?`<div class="zf" data-zoom tabindex="0" role="button" aria-label="${t("zoom")}"><img src="${esc(b.src)}" alt="${esc(b.cap)}">${LENS}</div>`:`<div class="ph">${t("imgToAdd")}</div>`}${b.cap?`<figcaption>${esc(b.cap)}</figcaption>`:""}</figure>`;
      case "gal": return `<figure><div class="gal">${b.srcs.map(x=>x?`<img src="${esc(x)}" alt="" loading="lazy">`:`<div class="ph">${t("imgToAdd")}</div>`).join("")}</div>${b.cap?`<figcaption>${esc(b.cap)}</figcaption>`:""}</figure>`;
      case "teams": return teamsCarousel(b.groupes);
      case "keyart": return keyart(b.items);
      case "car": return `<figure class="car"><div class="car-track">${b.items.map(x=>`<div class="car-s"><div class="zf" data-zoom tabindex="0" role="button" aria-label="${t("zoom")}"><img src="${esc(x[0])}" alt="${esc(x[1])}" loading="lazy">${LENS}</div><figcaption>${esc(x[1])}</figcaption></div>`).join("")}</div><div class="car-nav"><button type="button" data-car="-1" aria-label="${q("Précédent","Previous")}">‹</button><span class="car-cnt">1 / ${b.items.length}</span><button type="button" data-car="1" aria-label="${q("Suivant","Next")}">›</button></div></figure>`;
      case "ul": return `<ul>${b.items.map(x=>`<li>${rich(x)}</li>`).join("")}</ul>`;
      case "q": return `<blockquote>${esc(b.text)}${b.by?`<cite>${esc(b.by)}</cite>`:""}</blockquote>`;
      case "a": return /^https?:\/\//.test(b.url)?`<p><a class="btn ghost" href="${esc(b.url)}" target="_blank" rel="noopener">${esc(b.label)}</a></p>`:"";
      default: return "";
    }}).join("");
}

/* « En bref » (contexte, rôle, résultat) et « Mon rôle et mes décisions » */
function brief(p){
  const r = p.resume || {};
  const rows = [["ctx",r.contexte],["myRole",r.role],["result",r.resultat]].filter(x=>x[1]);
  const a = rows.length ? `<section class="tldr"><h2>${t("brief")}</h2><dl>${rows.map(([k,v])=>`<dt>${t(k)}</dt><dd>${rich(v)}</dd>`).join("")}</dl></section>` : "";
  const d = p.decisions && p.decisions.length ? `<section class="decide"><h2>${t("decisions")}</h2><ul>${p.decisions.map(x=>`<li>${rich(x)}</li>`).join("")}</ul></section>` : "";
  return a||d ? `<div class="brief${a&&d?" two":""}">${a}${d}</div>` : "";
}
/* Encart d'ouverture : les infos du projet et un court texte de présentation, sur un même fond */
function recap(p){
  const facts = Object.entries(p.infos||{}).map(([k,v])=>`<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");
  const txt = [].concat(p.apercu).map(x=>`<p>${rich(x)}</p>`).join("");
  return `<section class="recap">${facts?`<dl class="facts">${facts}</dl>`:""}<div class="recap-txt">${txt}</div></section>`;
}
/* Key arts des jeux en carrousel, avec le one-liner de chaque jeu sous l'image */
function keyart(list){
  return `<figure class="car keyart"><div class="car-track">${list.map(k=>`<div class="car-s"><div class="zf${k[3]?" portrait":""}" data-zoom tabindex="0" role="button" aria-label="${t("zoom")}"><img src="${esc(k[0])}" alt="${esc(k[1])} – key art">${LENS}</div><figcaption><b>${esc(k[1])}</b><span>${esc(k[2])}</span></figcaption></div>`).join("")}</div><div class="car-nav"><button type="button" data-car="-1" aria-label="${q("Jeu précédent","Previous game")}">‹</button><span class="car-cnt">1 / ${list.length}</span><button type="button" data-car="1" aria-label="${q("Jeu suivant","Next game")}">›</button></div></figure>`;
}
function detail(sec, p, prev, next){
  const infos = Object.entries(p.infos||{}).map(([k,v])=>`<li><span>${esc(k)}</span>${esc(v)}</li>`).join("");
  const link = (q,cls,lab,arrow) => q ? `<a class="${cls}" data-go="#/${sec.key}/${q.id}" role="link" tabindex="0"><small>${lab}</small><b>${esc(q.title)}</b></a>` : "";
  const side = (q,cls,ch,lab) => q ? `<a class="side ${cls}" data-go="#/${sec.key}/${q.id}" role="link" tabindex="0" aria-label="${lab} : ${esc(q.title)}" title="${esc(q.title)}">${ch}</a>` : "";
  return `<a class="back" data-go="${sec.route}" role="link" tabindex="0">‹ ${sec.label}</a>
  <article class="project${p.large?" large":""}"><h1>${p.cat?`<small class="h-cat">${esc(p.cat)}</small>`:""}${esc(p.title)}</h1><p class="lead">${esc(p.desc)}</p>
    ${p.large&&(!p.img||p.nocover)?"":`<div class="cover${p.fit==="contain"||p.cimg?" contain":""}"${p.bg||p.cbg?` style="--pbg:${esc(p.bg||p.cbg)}"`:""}>${img(p.cimg||p.img,p.title,p.title[0])}</div>`}
    ${p.apercu ? recap(p) : `${infos?`<ul class="meta">${infos}</ul>`:""}${brief(p)}`}
    <div class="prose">${blocks(p.contenu)}</div></article>
  <nav class="pn" aria-label="${t("others")}">${link(prev,"prev","‹ "+t("prev"))}${link(next,"next",t("next")+" ›")}</nav>
  <div class="foot-actions noprint">
    <a class="btn ghost" data-go="${sec.route}" role="link" tabindex="0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>${t("backCat")} ${sec.label}</a>
    <button type="button" class="btn" data-top="1"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>${t("toTop")}</button>
  </div>
  ${side(prev,"prev","‹",t("prev"))}${side(next,"next","›",t("next"))}`;
}

function legalText(s){   /* **gras** et [libellé](https://...) */
  return esc(s).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(((?:https?:|mailto:)[^)\s]+)\)/g,(m,l,u)=>`<a href="${u}"${u.startsWith("mailto:")?"":' target="_blank" rel="noopener"'}>${l}</a>`);
}
function mentions(){
  const L = lang==="en" ? LEGAL_EN : LEGAL_FR;
  return `<article class="legal-page"><h1>${t("legalPage")}</h1>
    ${L.map(([h,ps])=>`<section><h2>${esc(h)}</h2>${ps.map(p=>`<p>${legalText(p)}</p>`).join("")}</section>`).join("")}
    <p class="legal-date">${t("updated")} ${esc(LEGAL_UPDATED[lang])}</p></article>`;
}
/* Icônes de la page Infos (trait simple, couleur du texte courant) */
const ICONES = {
  planning:'<path d="M4 6h16M4 12h10M4 18h6"/><path d="M17 15l2 2 3-4"/>',
  design:'<path d="M12 3l7 7-7 11-7-11z"/><circle cx="12" cy="10" r="2"/>',
  analyse:'<path d="M4 20V4M4 20h16"/><path d="M8 16l4-5 3 3 5-7"/>',
  equipe:'<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 14.5c3 0 5.5 2 5.5 5"/>',
  outils:'<path d="M14.5 5.5a4 4 0 0 0 4.9 5L21 12l-9 9-3-3 9-9-1.5-1.6a4 4 0 0 1-1-1.9z"/><path d="M3 21l6-6"/>',
  langues:'<path d="M4 5h11v8H9l-4 3v-3H4z"/><path d="M15 9h5v8h-1v3l-3-3h-5v-4"/>',
  diplome:'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 9v6"/>',
  narration:'<path d="M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z"/><path d="M20 4h-4a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h4z"/>',
  strategie:'<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
  lecture:'<path d="M6 3h11a1 1 0 0 1 1 1v17l-6-3-6 3V4a1 1 0 0 1 1-1z"/>',
  ecriture:'<path d="M4 20l4-1L19 8a2.1 2.1 0 0 0-3-3L5 16z"/><path d="M14 7l3 3M4 20h16"/>',
  loisirs:'<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 2v20M3 7l9 5 9-5M3 17l9-5 9 5"/>'
};
const icone = k => `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONES[k]||""}</svg>`;
function infos(){
  const I = lang==="en" ? INFOS_EN : INFOS_FR;
  const dl = CV_VISUAL.pdf ? `<a class="btn" href="${esc(CV_VISUAL.pdf)}" download="${esc(CV_VISUAL.filename||"MERLE_Thibault_CV_PROD.pdf")}">${t("cvDl")}</a>` : "";
  const view = CV_VISUAL.image ? `<button type="button" class="btn ghost" data-zoom data-doc><img src="${esc(CV_VISUAL.image)}" alt="${t("cvAlt")} ${esc(SITE.prenom)} ${esc(SITE.nom)}" hidden>${t("cvView")}</button>` : "";
  const blocs = list => `<div class="skills">${list.map(b=>`<section class="skill"><div class="sk-ic">${icone(b.icone)}</div><h3>${esc(b.titre)}</h3><ul>${b.items.map(x=>`<li>${rich(x)}</li>`).join("")}</ul></section>`).join("")}</div>`;
  return `<div class="infos-page"><h1>${t("infos")}</h1><p class="lead">${esc(I.intro)}</p>
  <p class="cv-actions noprint">${view}${dl}</p>
  <section class="sk-group"><h2>${esc(I.competencesTitre)}</h2>${blocs(I.competences)}</section>
  <section class="sk-group"><h2>${esc(I.autresTitre)}</h2>${blocs(I.autres)}</section>
  ${I.loisirs?`<section class="sk-group sk-wide"><h2>${esc(I.loisirsTitre)}</h2>${blocs(I.loisirs)}</section>`:""}</div>`;
}


/* Bandes : apparition au défilement ; images : visionneuse au clic */
function reveal(){
  const bands=[...document.querySelectorAll(".band")];
  if(!("IntersectionObserver" in window)||matchMedia("(prefers-reduced-motion:reduce)").matches){bands.forEach(b=>b.classList.add("in"));return;}
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}}),{threshold:.08});
  bands.forEach(b=>io.observe(b));
}
const LB=$("#lb");
function openLB(f){const im=f.querySelector("img");LB.querySelector("img").src=im.src;LB.querySelector("p").textContent=im.alt||"";LB.classList.toggle("doc",f.hasAttribute("data-doc"));LB.scrollTop=0;LB.classList.add("on");LB.querySelector("button").focus();}
function closeLB(){LB.classList.remove("on");}
document.addEventListener("click",e=>{const f=e.target.closest("[data-zoom]");if(f){openLB(f);return;}if(LB.classList.contains("on"))closeLB();});
document.addEventListener("click",e=>{const b=e.target.closest("[data-car]");if(!b)return;const tr=b.closest(".car").querySelector(".car-track"),n=tr.children.length,st=n>1?tr.children[1].offsetLeft-tr.children[0].offsetLeft:1;let i=(Math.round(tr.scrollLeft/st)+ +b.dataset.car+n)%n;tr.scrollTo({left:i*st,behavior:"smooth"});});
document.addEventListener("scroll",e=>{const tr=e.target;if(!tr.classList||!tr.classList.contains("car-track"))return;const n=tr.children.length,st=n>1?tr.children[1].offsetLeft-tr.children[0].offsetLeft:1;tr.parentNode.querySelector(".car-cnt").textContent=(Math.min(n-1,Math.round(tr.scrollLeft/st))+1)+" / "+n;},true);
document.addEventListener("keydown",e=>{
  if(LB.classList.contains("on")){if(e.key==="Escape")closeLB();e.stopImmediatePropagation();return;}
  if((e.key==="Enter"||e.key===" ")&&e.target.matches&&e.target.matches("[data-zoom]")){e.preventDefault();openLB(e.target);}
},true);

let curNav = null, navDir = 0;
let cur = location.hash || "#/";   /* page courante, gardée en mémoire : marche même dans un aperçu isolé */

function render(){
  const h = cur, [ , key, id] = h.split("/");
  let html, active = h; curNav = null;
  const sec = SECTIONS.find(s => s.key === key);
  if(sec && id){
    const list = PROJECTS[key].filter(x => !x.wip), i = list.findIndex(x => x.id === id);
    if(i > -1){
      const p = list[i], prev = list[i-1], next = list[i+1];
      html = detail(sec, p, prev, next); active = sec.route;
      curNav = {prev: prev && `#/${key}/${prev.id}`, next: next && `#/${key}/${next.id}`};
      document.title = `${p.cat?p.cat+" : ":""}${p.title} – ${SITE.prenom} ${SITE.nom}`;
    }
  }
  if(!html){
    if(sec){ html = listing(sec); active = sec.route; }
    else if(key === "infos"){ html = infos(); active = "#/infos"; }
    else if(key === "mentions"){ html = mentions(); active = "#/mentions"; }
    else { html = home(); active = "#/"; }
    document.title = key === "mentions" ? `${t("legalPage")} – ${SITE.prenom} ${SITE.nom}` : `${SITE.prenom} ${SITE.nom} – ${SITE.titre}`;
  }
  chrome(active);
  const v = $("#view"); v.innerHTML = html;
  if(navDir && !matchMedia("(prefers-reduced-motion:reduce)").matches)
    v.animate([{opacity:0,transform:`translateX(${navDir*48}px)`},{opacity:1,transform:"none"}],{duration:280,easing:"ease-out"});
  navDir = 0;
  const dl = $("#dl"); if(dl) dl.onclick = () => window.print();
  reveal();
}

/* Passer d'un projet à l'autre : flèches du clavier, défilement horizontal
   (pavé tactile, souris latérale) et glissement du doigt sur mobile. */
let lock = 0;
function go(dir){
  const t = curNav && (dir > 0 ? curNav.next : curNav.prev);
  if(!t || Date.now() - lock < 700) return;
  lock = Date.now(); navDir = dir; goTo(t);
}
addEventListener("keydown", e => {
  if(e.altKey || e.ctrlKey || e.metaKey || /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
  if(e.key === "ArrowRight") go(1); else if(e.key === "ArrowLeft") go(-1);
});
addEventListener("wheel", e => {
  if(Math.abs(e.deltaX) > 40 && Math.abs(e.deltaX) > Math.abs(e.deltaY) * 1.5) go(e.deltaX > 0 ? 1 : -1);
}, {passive:true});
let tx = 0, ty = 0;
addEventListener("touchstart", e => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, {passive:true});
addEventListener("touchend", e => {
  const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
  if(Math.abs(dx) > 80 && Math.abs(dx) > Math.abs(dy) * 2) go(dx < 0 ? 1 : -1);
}, {passive:true});
function goTo(h){
  if(h === cur) return;
  cur = h;
  try{ history.pushState(null, "", h); }catch(e){}   /* met à jour l'adresse quand c'est permis */
  render(); scrollTo(0,0);
}
document.addEventListener("click", e => {
  const a = e.target.closest && e.target.closest("[data-go]");
  if(!a || e.button) return;
  e.preventDefault(); goTo(a.getAttribute("data-go"));
});
document.addEventListener("keydown", e => {
  if(e.key !== "Enter" && e.key !== " ") return;
  const a = e.target.closest && e.target.closest("[data-go]");
  if(a){ e.preventDefault(); goTo(a.getAttribute("data-go")); }
});
document.addEventListener("click", e => {
  const b = e.target.closest && e.target.closest("[data-lang]");
  if(!b) return;
  e.stopPropagation(); setLang(b.getAttribute("data-lang")); render();
});
document.addEventListener("click", e => {
  const b = e.target.closest && e.target.closest("[data-theme-toggle]");
  if(!b) return;
  e.stopPropagation();
  const th = isDark() ? "light" : "dark";
  document.documentElement.dataset.theme = th;
  try{ localStorage.setItem("theme", th); }catch(err){}
  const y = scrollY; render(); scrollTo(0, y);
});
addEventListener("popstate", () => { cur = location.hash || "#/"; render(); scrollTo(0,0); });
addEventListener("hashchange", () => { const h = location.hash || "#/"; if(h !== cur){ cur = h; render(); scrollTo(0,0); } });
render();
document.addEventListener("click",e=>{if(e.target.closest("[data-top]")){const r=matchMedia("(prefers-reduced-motion:reduce)").matches;window.scrollTo({top:0,behavior:r?"auto":"smooth"});}});
