/* =====================================================
   ✏️  CONTENU DU SITE – c'est le seul fichier à modifier
   Textes (FR et EN), projets, CV et mentions légales.
   Les images se trouvent dans le dossier images/ :
   pour en changer une, remplacez le fichier ou modifiez son chemin ici.
   ===================================================== */
const SITE_FR = {
  prenom: "Thibault", nom: "Merle",
  titre: "Junior Associate Producer",
  accueilTitre: "J'organise les équipes pour faire avancer les projets",   // grand titre de la page d'accueil
  photo: "images/portrait.jpg",   // fichier dans le dossier images/. Vide = initiales.
  intro: [
    "Je m'appelle Thibault, Junior Associate Producer en dernière année à Game Sup. Sur quatre productions d'école, j'ai planifié et suivi des projets avec jusqu'à quatre équipes en même temps, des premiers jalons jusqu'aux playtests. J'adapte la méthode de production à chaque équipe après l'avoir écoutée, pour que chacun sache où en est le projet.",
    "Je recherche aujourd'hui **un stage de fin d'études ou un premier poste en production** à partir de janvier 2027, partout en France ou en télétravail."
  ],
  email: "merle.thibault@orange.fr", ville: "",
  linkedin: "https://www.linkedin.com/in/thibault-merle-946187311",
  legal: [
    "© 2026 Thibault Merle – Tous droits réservés.",
    "Site hébergé par GitHub Pages (GitHub, Inc.)."
  ]
};
const SITE_EN = {...SITE_FR,
  accueilTitre: "I organise teams to keep projects moving",
  intro: [
    "My name is Thibault, a Junior Associate Producer in my final year at Game Sup. Across four school productions, I have planned and tracked projects with up to four teams at once, from the first milestones to the playtests. I adapt the production method to each team after listening to its needs, so that everyone knows where the project stands.",
    "I am now looking for **a final-year internship or a first job in production** starting in January 2027, anywhere in France or remotely."
  ],
  legal: [
    "© 2026 Thibault Merle – All rights reserved.",
    "Hosted by GitHub Pages (GitHub, Inc.)."
  ]
};
let SITE = SITE_FR;

/* ---------- AIDE-MÉMOIRE : les blocs de contenu d'un projet ----------
   T("texte")                      paragraphe (séparez plusieurs paragraphes par une ligne vide)
   IMG("image", "légende")         image pleine largeur (légende facultative)
   CITATION("texte", "auteur")     citation
   LIEN("libellé", "https://...")  bouton-lien
   Les blocs s'affichent dans l'ordre où vous les écrivez.

   MISE EN FORME DU TEXTE (dans T, FICHE, etc.) :
   **mot**  → en gras          ==mot==  → en couleur (doré)          *titre*  → en italique

   VIGNETTE : carte:"texte court" s'affiche sous la vignette (sinon desc). La ligne d'infos reprend les 2 premières infos.

   PROJET EN BANDES (page large, comme l'Exercice 1) : ajoutez  large:true  au projet, puis
   BANDE("I", "Titre de la partie", [ LIGNE([blocs de texte], [blocs à droite]), ... ])
     – LIGNE(gauche, droite) : le texte à gauche, les images/tableaux à droite (une LIGNE par paragraphe illustré)
     – à droite : IMG("image","légende"), CHIFFRES([["valeur","libellé"],...]), FICHE("titre",["point",...]),
       TABLEAU("titre",["col1","col2","col3"],[ "Groupe", ["ligne","a","b"], ... ])
     – toute image (IMG) s'agrandit au clic.
     – EQUIPES(liste) : carrousel des équipes (une diapositive par groupe, voir EQUIPES_FDA).
     – une grande image (IMG) ou un CAROUSEL placé côté texte, dans une LIGNE sans partie droite,
       s'affiche sous le texte, centré sur la page : LIGNE([T("texte"), IMG("image","légende")])

   POUR AJOUTER UN PROJET : copiez un bloc P({ ... }) entier, collez-le dans la
   bonne liste (pro, perso ou exo) et changez les textes. C'est tout : la page
   de détails, le bouton et la navigation gauche/droite se créent tout seuls.
   L'ordre dans la liste = l'ordre sur le site.                              */
const T=text=>({k:"t",text}), IMG=(src,cap="",cls="")=>({k:"img",src,cap,cls}),
      CITATION=(text,by="")=>({k:"q",text,by}), LIEN=(label,url)=>({k:"a",label,url});
const BANDE=(num,titre,lignes)=>({k:"band",num,titre,lignes}), LIGNE=(t,m=[])=>({t,m}),
      CHIFFRES=items=>({k:"stats",items}), FICHE=(titre,items)=>({k:"fiche",titre,items}),
      TABLEAU=(titre,cols,rows,plain=false)=>({k:"tbl",titre,cols,rows,plain}), SOURCES=items=>({k:"src",items});
const ETAPES=(titre,items)=>({k:"etapes",titre,items}), SCHEMA=(nom,cap="")=>({k:"schema",nom,cap});
const CAROUSEL=(items,cls="")=>({k:"car",items,cls});
const EQUIPES=groupes=>({k:"teams",groupes});
const KEYART=items=>({k:"keyart",items});
const VIDEOS=items=>({k:"videos",items});   // vidéos complètes dans un menu déroulant : [["fichier", "titre", "image d'attente"], ...]
const VIDEOS_ROGUE = [["videos/rogue-vampire.mp4","Vampire Hunter E-Cycle","videos/rogue-vampire-poster.jpg"],["videos/rogue-furyrogue.mp4","Mad Max Fury Rogue","videos/rogue-furyrogue-poster.jpg"]];
const VIDEOS_FUSION = [["videos/fusion-hellstorm.mp4","HellStorm","videos/fusion-hellstorm-poster.jpg"],["videos/fusion-wakfu.mp4","Wakfu Riders","videos/fusion-wakfu-poster.jpg"]];
const P = o => o;

/* ---------- BULLES D'EXPLICATION ----------
   Dans un texte, écrivez [[mot affiché|clé]] : le mot s'affiche souligné en pointillés,
   et la bulle NOTES_FR[clé] (ou NOTES_EN[clé]) s'ouvre au survol ou au toucher. */
const NOTES_FR = {
  capacite: { titre:"D'où viennent les 20 %",
    texte:"Le Scrum Guide fixe une durée maximale à chaque événement pour un sprint d'un mois, et ces durées diminuent quand le sprint est plus court. Ramenées à deux semaines, elles représentent un peu plus de 12 % du temps. L'édition 2017 du guide ajoutait que l'affinage du backlog prend en général au plus 10 % de la capacité. Le total correspond aux hypothèses de SAFe pour la capacité de départ d'une équipe.",
    calcul:["Planning : 4 h (8 h max. sur un mois)","Dailies : 10 × 15 min, soit 2 h 30","Revue : 2 h · Rétrospective : 1 h 30","Événements : 10 h sur 80, un peu plus de 12 %","Affinage du backlog : jusqu'à 10 %","Total retiré : environ 20 %"],
    sources:[["Scrum.org · durées maximales des événements","https://www.scrum.org/resources/blog/which-scrum-events-are-time-boxed"],["Scrum.org · l'affinage à 10 % (Scrum Guide 2017)","https://www.scrum.org/resources/blog/optimizing-product-backlog-refinement"],["wibas · la capacité de départ dans SAFe","https://www.wibas.com/en/blog/articles-1/a-tricky-slide-about-story-points-and-capacity-in-safe-r-and-how-to-get-it-right-344"]] }
};
const NOTES_EN = {
  capacite: { titre:"Where the 20% comes from",
    texte:"The Scrum Guide sets a maximum duration for each event in a one-month sprint, and these durations are shorter for shorter sprints. Scaled to two weeks, they come to a little over 12% of the time. The 2017 edition of the guide added that backlog refinement usually takes no more than 10% of capacity. The total matches SAFe's assumptions for a team's starting capacity.",
    calcul:["Planning: 4 h (8 h max. over a month)","Dailies: 10 × 15 min, i.e. 2 h 30","Review: 2 h · Retrospective: 1 h 30","Events: 10 h out of 80, a little over 12%","Backlog refinement: up to 10%","Total deducted: about 20%"],
    sources:[["Scrum.org · maximum event durations","https://www.scrum.org/resources/blog/which-scrum-events-are-time-boxed"],["Scrum.org · refinement at 10% (2017 Scrum Guide)","https://www.scrum.org/resources/blog/optimizing-product-backlog-refinement"],["wibas · starting capacity in SAFe","https://www.wibas.com/en/blog/articles-1/a-tricky-slide-about-story-points-and-capacity-in-safe-r-and-how-to-get-it-right-344"]] }
};

const PRO1 = { thumb:"images/fin-annee-2026-thumb.jpg", macro:"images/fin-annee-2026-macro.jpg", micro:"images/fin-annee-2026-micro.jpg", kill:"images/fin-annee-2026-kill.jpg" };
const NG = {thumb:"images/nigeria-thumb.jpg", okada:"images/nigeria-okada.jpg", jagun:"images/nigeria-jagun.jpg", chicken:"images/nigeria-chicken.jpg", iwaju:"images/nigeria-iwaju.jpg", aurion:"images/nigeria-aurion.jpg"};
const CT = {thumb:"images/castalie-thumb.jpg",pitch:"images/castalie-pitch.jpg",info:"images/castalie-info.jpg",one:"images/castalie-one.jpg",pillars:"images/castalie-pillars.jpg",notdo:"images/castalie-notdo.jpg",loop:"images/castalie-loop.jpg",realm:"images/castalie-realm.jpg",typhon:"images/castalie-typhon.jpg",sealed:"images/castalie-sealed.jpg",castalie:"images/castalie-castalie.jpg",moodboard:"images/castalie-moodboard.jpg",ld:"images/castalie-ld.jpg",mol:"images/castalie-mol.jpg",pacing:"images/castalie-pacing.jpg"};
const EX1 = { nav:"images/wyrdfall-nav.jpg", market:"images/wyrdfall-market.jpg", roiCons:"images/wyrdfall-roi-conservateur.jpg", roiOpti:"images/wyrdfall-roi-optimiste.jpg", budget:"images/wyrdfall-budget.jpg", epic:"images/wyrdfall-epic.jpg", sprint:"images/wyrdfall-sprint.jpg" };

/* Équipes des projets de fin d'année (mai-juin 2026) : une diapositive du carrousel par groupe.
   M("Prénom Nom", "lien LinkedIn", "rôle", "rôle en anglais si différent")  –  "Producer" est mis en avant, en tête de liste.
   L'ordre d'écriture n'a pas d'importance : chaque colonne est triée automatiquement par ordre alphabétique des noms de famille. */
const M=(nom,url,role,roleEn)=>({nom,url,role,roleEn});
const EQUIPES_FDA = [
  { nom:"Le Castor et l'Écureuil", genre:"jeu de plateforme narratif", genreEn:"narrative platformer",
    design:[
        M("Thibault Merle","https://www.linkedin.com/in/thibault-merle-946187311/","Producer"),
        M("Guillaume Soyez-Martin","https://www.linkedin.com/in/guillaume-soyez-martin-71a863253/","Creative Direction / System Design / Narrative Design"),
        M("Tao Rimet","https://www.linkedin.com/in/tao-rimet-256a21330/","Level Design"),
        M("Yaël Deschemaker","https://www.linkedin.com/in/ya%C3%ABl-deschemaker/","Level Design"),
        M("Nicolas Rigaudie","https://www.linkedin.com/in/nicolas-rigaudie-9bba28291/","Technical Design") ],
    art:[
        M("Manon Lebert","https://www.linkedin.com/in/manon-lebert-4a0602385/","Level Art"),
        M("Mylène Ha Poidevin","https://www.linkedin.com/in/myl%C3%A8ne-ha-poidevin/","Character Art"),
        M("Maëlys Monfort","https://www.linkedin.com/in/ma%C3%ABlysmonfort/","Concept Art"),
        M("Anaïs Lacoste","https://www.linkedin.com/in/ana%C3%AFs-lacoste-891315225/","VFX / Technical Art"),
        M("Thomas Meynaud","https://www.linkedin.com/in/thomas-meynaud-b1004730a/","Environment Art / Props Art"),
        M("Allan Goniak","https://www.linkedin.com/in/allan-goniak-267044307/","Environment Art / Props Art"),
        M("Tess Bornard","https://www.linkedin.com/in/tess-bornard-1251bb3b3/","Environment Art / Props Art"),
        M("Chloé Stagnitto","https://www.linkedin.com/in/chlo%C3%A9-stagnitto-0aa837345/","Environment Art / Props Art"),
        M("Clémentine Guillaume","https://www.linkedin.com/in/clementine-guillaume-545ab522a/","Concept Art / Character Art") ] },
  { nom:"Project GLOW", genre:"action-aventure, shoot et portails", genreEn:"action-adventure, shooting and portals",
    design:[
        M("Thibault Merle","https://www.linkedin.com/in/thibault-merle-946187311/","Producer"),
        M("Lylian Armant","https://www.linkedin.com/in/lylian-armant/","Creative Direction / Level Design / Technical Animation"),
        M("Kylian Chapon","https://www.linkedin.com/in/kylian-chapon-903924251/","Technical Design / Programming"),
        M("Nolan Pottier","https://www.linkedin.com/in/nolan-pottier-116756410/","Level Design / Sound Design"),
        M("Tom Rossignol","https://www.linkedin.com/in/tom-rossignol-63148a3b8/","System Design / Narrative Design") ],
    art:[
        M("Alexandre Berger","https://www.linkedin.com/in/alexandre-berger-662355358/","Concept Art / Character Art"),
        M("Hugo Ballet","https://www.linkedin.com/in/hugo-ballet-038899370/","Concept Art / UI Art"),
        M("Camille Chautard","https://www.linkedin.com/in/camille-chautard-81225a268/","Character Art / Rigging"),
        M("Méline Billot-Biota","https://www.linkedin.com/in/m%C3%A9line-billot-biota-85a3b02b6/","Technical Art / VFX"),
        M("Bartholomé Girelli","https://www.linkedin.com/in/bartholome-girelli-071076333/","Technical Art / VFX"),
        M("Clotilde Maugy","https://www.linkedin.com/in/clotilde-maugy-5351a6333/","Environment Art / Props Art"),
        M("Lou Azzi","https://www.linkedin.com/in/lou-azzi-6a3076333/","Environment Art / Level Art"),
        M("Enzo Rouminieras","https://www.linkedin.com/in/enzo-rouminieras-b2a167333/","Environment Art / Props Art"),
        M("Essoham Talle","https://www.linkedin.com/in/essoham-talle-290128360/","Level Art / Technical Art") ] },
  { nom:"Insight", genre:"énigmes et horreur lovecraftienne", genreEn:"Lovecraftian puzzle horror",
    design:[
        M("Thibault Merle","https://www.linkedin.com/in/thibault-merle-946187311/","Producer"),
        M("Thibault Chanut","https://www.linkedin.com/in/thibault-chanut-77035238a/","Creative Direction / Technical Design"),
        M("Pierre Royer","https://www.linkedin.com/in/pierre-royer-0b0727357/","System Design"),
        M("Baptiste Feron","https://www.linkedin.com/in/baptiste-feron-51232b264/","Narrative Design"),
        M("Pablo Griffiths","https://www.linkedin.com/in/pablo-griffiths/","System Design / Level Design"),
        M("Matthias Gimenez","https://www.linkedin.com/in/matthias-gimenez-583615375/","Level Design") ],
    art:[
        M("Léa Millier","https://www.linkedin.com/in/l%C3%A9a-millier-713388283/","Référent Game Art · Lighting Art / Level Art","Game Art Lead · Lighting Art / Level Art"),
        M("Pedro Garcia dos Santos","https://www.linkedin.com/in/pedro-garcia-dos-santos-776582268/","Concept Art"),
        M("Alexis Tassan-Toffola","https://www.linkedin.com/in/alexis-tassan-toffola-861035366/","Environment Art / Props Art"),
        M("Thomas Vauché","https://www.linkedin.com/in/thomas-vauch%C3%A9-8181a3333/","Level Art"),
        M("Nicolas Abram","https://www.linkedin.com/in/nicolas-abram-38b1433a9/","Technical Art"),
        M("Milo Carrara","https://www.linkedin.com/in/milo-carrara-03782541a/","Environment Art / Props Art"),
        M("Valentin Brun","https://www.linkedin.com/in/valentin-brun-495426393/","Concept Art"),
        M("Naëlle Bigouraux","https://www.linkedin.com/in/na%C3%ABlle-bigouraux-4237363a3/","Character Art"),
        M("Oscar Lokteff","https://www.linkedin.com/in/oscar-lokteff-bbb623333/","Character Art") ] },
  { nom:"The Flowering Dead", genre:"boss rush post-apocalyptique", genreEn:"post-apocalyptic boss rush",
    design:[
        M("Thibault Merle","https://www.linkedin.com/in/thibault-merle-946187311/","Producer"),
        M("Malo Fougères","https://www.linkedin.com/in/malo-foug%C3%A8res-65476938b/","Creative Direction / Technical Design"),
        M("Nicola Vischi","https://www.linkedin.com/in/nicola-vischi-27b385314/","Level Design"),
        M("Victor Cardineau","https://www.linkedin.com/in/victor-cardineau-234735437/","System Design"),
        M("Flavie Hugonnard-Cotton","https://www.linkedin.com/in/flavie-hugonnard-cotton-b57bb6430/","Narrative Design"),
        M("Romain Nicoghossian","https://www.linkedin.com/in/romain-nicoghossian-a39151290/","QA Design / Level Design") ],
    art:[
        M("Sarah Ounali","https://www.linkedin.com/in/sarah-ounali-6a1a47271/","Référent Game Art · Concept Art","Game Art Lead · Concept Art"),
        M("Vincent Sanchez","https://www.linkedin.com/in/vincent-sanchez-50844b375/","Environment Art / Level Art"),
        M("Lenny Beauquis","https://www.linkedin.com/in/lenny-beauquis-05340a3aa/","Level Art / Technical Art"),
        M("Erwan Rezkallah","https://www.linkedin.com/in/erwan-rezkallah-8a17073a1/","Props Art / Environment Art"),
        M("Léa Libert","https://www.linkedin.com/in/l%C3%A9a-libert/","Concept Art"),
        M("Fanny Bernhard","https://www.linkedin.com/in/fanny-bernhard-4a81a6333/","Character Art"),
        M("Lisa Canovas","https://www.linkedin.com/in/lisa-canovas-21915522b/","Technical Art"),
        M("Théo David","https://www.linkedin.com/in/th%C3%A9o-david-94080a3b6/","Technical Art"),
        M("Samuel Augeul Meunier","https://www.linkedin.com/in/samuel-augeul-meunier-0b41a2333/","Character Art") ] }
];

/* Équipes du Workshop Rogue-lite (février 2026) : rôles tirés des fichiers de production, liens repris des équipes de fin d'année.
   Un lien vide = pas de LinkedIn (le nom s'affiche sans lien). num = numéro du groupe à l'école. */
const EQUIPES_ROGUE = [
  { num:3, nom:"Vampire Hunter E-Cycle", genre:"rogue-lite gothique", genreEn:"gothic rogue-lite",
    design:[
        M("Thibault Merle","https://www.linkedin.com/in/thibault-merle-946187311/","Producer"),
        M("Guillaume Soyez-Martin","https://www.linkedin.com/in/guillaume-soyez-martin-71a863253/","Référent Game Design · Narrative Design","Game Design Lead · Narrative Design"),
        M("Tom Rossignol","https://www.linkedin.com/in/tom-rossignol-63148a3b8/","System Design"),
        M("Kylian Chapon","https://www.linkedin.com/in/kylian-chapon-903924251/","Technical Design"),
        M("Lylian Armant","https://www.linkedin.com/in/lylian-armant/","Level Design"),
        M("Baptiste Feron","https://www.linkedin.com/in/baptiste-feron-51232b264/","Narrative Design") ],
    art:[
        M("Tess Bornard","https://www.linkedin.com/in/tess-bornard-1251bb3b3/","Référent Game Art · Environment Art","Game Art Lead · Environment Art"),
        M("Allan Goniak","https://www.linkedin.com/in/allan-goniak-267044307/","Environment Art"),
        M("Essoham Talle","https://www.linkedin.com/in/essoham-talle-290128360/","Environment Art"),
        M("Manon Lebert","https://www.linkedin.com/in/manon-lebert-4a0602385/","Level Art"),
        M("Bartholomé Girelli","https://www.linkedin.com/in/bartholome-girelli-071076333/","Technical Art"),
        M("Naëlle Bigouraux","https://www.linkedin.com/in/na%C3%ABlle-bigouraux-4237363a3/","Character Art"),
        M("Sarah Ounali","https://www.linkedin.com/in/sarah-ounali-6a1a47271/","Concept Art"),
        M("Hugo Ballet","https://www.linkedin.com/in/hugo-ballet-038899370/","Concept Art"),
        M("Samuel Augeul Meunier","https://www.linkedin.com/in/samuel-augeul-meunier-0b41a2333/","Character Art") ] },
  { num:4, nom:"Mad Max Fury Rogue", genre:"rogue-lite post-apocalyptique", genreEn:"post-apocalyptic rogue-lite",
    design:[
        M("Thibault Merle","https://www.linkedin.com/in/thibault-merle-946187311/","Producer"),
        M("Malo Fougères","https://www.linkedin.com/in/malo-foug%C3%A8res-65476938b/","Référent Game Design · System Design","Game Design Lead · System Design"),
        M("Dylan Dessalines","","Technical Design"),
        M("Tao Rimet","https://www.linkedin.com/in/tao-rimet-256a21330/","Level Design"),
        M("Matthias Gimenez","https://www.linkedin.com/in/matthias-gimenez-583615375/","Level Design"),
        M("Flavie Hugonnard-Cotton","https://www.linkedin.com/in/flavie-hugonnard-cotton-b57bb6430/","Narrative Design") ],
    art:[
        M("Anaïs Lacoste","https://www.linkedin.com/in/ana%C3%AFs-lacoste-891315225/","Référent Game Art · Technical Art","Game Art Lead · Technical Art"),
        M("Chloé Stagnitto","https://www.linkedin.com/in/chlo%C3%A9-stagnitto-0aa837345/","Environment Art"),
        M("Vincent Sanchez","https://www.linkedin.com/in/vincent-sanchez-50844b375/","Environment Art"),
        M("Lou Azzi","https://www.linkedin.com/in/lou-azzi-6a3076333/","Environment Art"),
        M("Thomas Vauché","https://www.linkedin.com/in/thomas-vauch%C3%A9-8181a3333/","Level Art"),
        M("Camille Chautard","https://www.linkedin.com/in/camille-chautard-81225a268/","Character Art"),
        M("Théo David","https://www.linkedin.com/in/th%C3%A9o-david-94080a3b6/","Character Art"),
        M("Pedro Garcia dos Santos","https://www.linkedin.com/in/pedro-garcia-dos-santos-776582268/","Concept Art"),
        M("Valentin Brun","https://www.linkedin.com/in/valentin-brun-495426393/","Concept Art") ] }
];

/* Équipes du Workshop Fusion (novembre 2025) : rôles tirés des onglets TEAM_MEMBERS des fichiers de production. */
const EQUIPES_FUSION = [
  { num:3, nom:"HellStorm", genre:"course tout-terrain · Doom", genreEn:"off-road racing · Doom",
    design:[
        M("Thibault Merle","https://www.linkedin.com/in/thibault-merle-946187311/","Producer"),
        M("Tao Rimet","https://www.linkedin.com/in/tao-rimet-256a21330/","Référent Game Design · Level Design","Game Design Lead · Level Design"),
        M("Victor Cardineau","https://www.linkedin.com/in/victor-cardineau-234735437/","System Design"),
        M("Dylan Dessalines","","Technical Design"),
        M("Romain Nicoghossian","https://www.linkedin.com/in/romain-nicoghossian-a39151290/","Level Design"),
        M("Baptiste Feron","https://www.linkedin.com/in/baptiste-feron-51232b264/","Narrative Design") ],
    art:[
        M("Thomas Vauché","https://www.linkedin.com/in/thomas-vauch%C3%A9-8181a3333/","Référent Game Art · Level Art","Game Art Lead · Level Art"),
        M("Alexis Tassan-Toffola","https://www.linkedin.com/in/alexis-tassan-toffola-861035366/","Environment Art"),
        M("Erwan Rezkallah","https://www.linkedin.com/in/erwan-rezkallah-8a17073a1/","Environment Art"),
        M("Lou Azzi","https://www.linkedin.com/in/lou-azzi-6a3076333/","Environment Art"),
        M("Méline Billot-Biota","https://www.linkedin.com/in/m%C3%A9line-billot-biota-85a3b02b6/","Technical Art · VFX"),
        M("Naëlle Bigouraux","https://www.linkedin.com/in/na%C3%ABlle-bigouraux-4237363a3/","Character Art"),
        M("Théo David","https://www.linkedin.com/in/th%C3%A9o-david-94080a3b6/","Character Art"),
        M("Clémentine Guillaume","https://www.linkedin.com/in/clementine-guillaume-545ab522a/","Concept Art"),
        M("Léa Libert","https://www.linkedin.com/in/l%C3%A9a-libert/","Concept Art") ] },
  { num:4, nom:"Wakfu Riders", genre:"course arcade · Wakfu", genreEn:"arcade racing · Wakfu",
    design:[
        M("Thibault Merle","https://www.linkedin.com/in/thibault-merle-946187311/","Producer"),
        M("Guillaume Soyez-Martin","https://www.linkedin.com/in/guillaume-soyez-martin-71a863253/","Référent Game Design · Narrative Design","Game Design Lead · Narrative Design"),
        M("Pierre Royer","https://www.linkedin.com/in/pierre-royer-0b0727357/","System Design"),
        M("Malo Fougères","https://www.linkedin.com/in/malo-foug%C3%A8res-65476938b/","Technical Design"),
        M("Matthias Gimenez","https://www.linkedin.com/in/matthias-gimenez-583615375/","Level Design"),
        M("Yaël Deschemaker","https://www.linkedin.com/in/ya%C3%ABl-deschemaker/","Level Design"),
        M("Tom Rossignol","https://www.linkedin.com/in/tom-rossignol-63148a3b8/","Généraliste","Generalist") ],
    art:[
        M("Maëlys Monfort","https://www.linkedin.com/in/ma%C3%ABlysmonfort/","Référent Game Art · Concept Art","Game Art Lead · Concept Art"),
        M("Léa Millier","https://www.linkedin.com/in/l%C3%A9a-millier-713388283/","Level Art"),
        M("Enzo Rouminieras","https://www.linkedin.com/in/enzo-rouminieras-b2a167333/","Environment Art"),
        M("Allan Goniak","https://www.linkedin.com/in/allan-goniak-267044307/","Environment Art"),
        M("Milo Carrara","https://www.linkedin.com/in/milo-carrara-03782541a/","Environment Art"),
        M("Nicolas Abram","https://www.linkedin.com/in/nicolas-abram-38b1433a9/","Technical Art · VFX"),
        M("Lisa Canovas","https://www.linkedin.com/in/lisa-canovas-21915522b/","Character Art"),
        M("Fanny Bernhard","https://www.linkedin.com/in/fanny-bernhard-4a81a6333/","Character Art"),
        M("Sarah Ounali","https://www.linkedin.com/in/sarah-ounali-6a1a47271/","Concept Art") ] }
];


/* ---------- ACCUEIL : vitrine des jeux et frise des productions ----------
   VITRINE : une colonne par production, dans l'ordre de la frise. FRISE : un jalon par production ;
   go vide = projet pas encore publié (jalon grisé, sans lien). */
const VITRINE = [   // [image (ou liste d'images pour une mosaïque), jeu, page, production FR, production EN, cadrage, nom EN]
  ["images/fusion-hs-keyart.jpg","HellStorm","#/pro/workshop-fusion-novembre-2025","Workshop Fusion","Fusion Workshop","50% 50%"],
  ["images/fusion-wk-keyart.jpg","Wakfu Riders","#/pro/workshop-fusion-novembre-2025","Workshop Fusion","Fusion Workshop","35% 40%"],
  ["images/rogue-vh-keyart.jpg","Vampire Hunter E-Cycle","#/pro/workshop-rogue-lite-fevrier-2026","Workshop Rogue-lite","Rogue-lite Workshop","50% 25%"],
  ["images/rogue-mm-keyart.jpg","Mad Max Fury Rogue","#/pro/workshop-rogue-lite-fevrier-2026","Workshop Rogue-lite","Rogue-lite Workshop","50% 45%"],
  [["images/fda-castor.jpg","images/fda-glow.jpg","images/fda-insight.jpg","images/fda-flowering.jpg"],"Quatre jeux en parallèle","#/pro/projets-de-fin-d-annee-quatre-jeux-en-parallele-mai-juin-2026","Fin d'année 2026","End of year 2026","","Four games in parallel"]
];
const FRISE = [   // jalons de l'accueil, dans l'ordre chronologique ; perso:1 = projet personnel (en bleu) ; go vide = page pas encore publiée (jalon grisé)
  { quand:"Janvier 2025", when:"January 2025", fr:"Marché africain", en:"African market", metaFr:"Analyse de marché", metaEn:"Market analysis", go:"#/perso/le-marche-africain-du-jeu-video-le-cas-du-nigeria", perso:1 },
  { quand:"Avril 2025", when:"April 2025", fr:"Castalie's Tears", en:"Castalie's Tears", metaFr:"Game Design · GDD", metaEn:"Game Design · GDD", go:"#/perso/castalie-s-tears", perso:1 },
  { quand:"Juin 2025", when:"June 2025", fr:"Fin d'année", en:"End of year", metaFr:"2 jeux · 2 équipes", metaEn:"2 games · 2 teams", go:"" },
  { quand:"Novembre 2025", when:"November 2025", fr:"Workshop Fusion", en:"Fusion Workshop", metaFr:"2 jeux · 29 personnes", metaEn:"2 games · 29 people", go:"#/pro/workshop-fusion-novembre-2025" },
  { quand:"Février 2026", when:"February 2026", fr:"Workshop Rogue‑lite", en:"Rogue‑lite Workshop", metaFr:"2 jeux · 28 personnes", metaEn:"2 games · 28 people", go:"#/pro/workshop-rogue-lite-fevrier-2026" },
  { quand:"Mars 2026", when:"March 2026", fr:"Wyrdfall", en:"Wyrdfall", metaFr:"Budget · 48 mois", metaEn:"Budget · 48 months", go:"#/perso/wyrdfall", perso:1 },
  { quand:"Mai – juin 2026", when:"May – June 2026", fr:"Fin d'année", en:"End of year", metaFr:"4 jeux · 54 personnes", metaEn:"4 games · 54 people", go:"#/pro/projets-de-fin-d-annee-quatre-jeux-en-parallele-mai-juin-2026" },
  { quand:"Octobre 2026", when:"October 2026", fr:"Studio Jira", en:"Jira studio", metaFr:"Jira · Scrum", metaEn:"Jira · Scrum", go:"#/perso/projet-jira-et-agile-un-studio-en-mise-en-situation-octobre-2026", perso:1 }
];
const PROJECTS_FR = {
  pro: [
    P({ title:"Projets de fin d'année : quatre jeux en parallèle – Mai-juin 2026", bandeau:[["images/fda-castor.jpg","Le Castor et l'Écureuil"],["images/fda-glow.jpg","Project GLOW"],["images/fda-insight.jpg","Insight"],["images/fda-flowering.jpg","The Flowering Dead"]], large:true, nocover:true,   // nocover:true = pas de grande image en tête de la page de détails
        desc:"La production d'une promotion entière par un seul producer, du lancement à la livraison au jury, avec une crise de direction artistique à mi-parcours.", carte:"Quatre jeux pour une promotion entière, et une crise de direction artistique surmontée par une pause et deux playtests communs.",
        img:PRO1.thumb,
        infos:{ "Rôle":"Producer", "Équipe":"4 équipes de 13 à 14 personnes (54 au total)", "Durée":"27 mai – 24 juin 2026", "Outils":"Excel · PowerPoint (OneDrive) · Discord" },
        survol:{ moteur:"Unreal Engine", logo:"images/unreal-engine.png", items:["Producer","4 équipes de 13 à 14","Genres variés","4 semaines"] },
        apercu:"J'étais le seul producer des quatre jeux de la promotion, soit 54 personnes. En deuxième semaine, une même crise de direction artistique a touché les quatre équipes : après une pause d'une journée et demie, j'ai mis en place deux playtests communs et revu les priorités de chaque groupe. Les quatre jeux ont été livrés avec **93 % des 1 387 tâches terminées**.",
        contenu:[
          BANDE("I","Le cadre du projet",[
            LIGNE([
              T("Le projet de fin d'année réunit les Game Designers et Game Artists de deuxième année autour de jeux entre le III et le AAA. Deux jurys de sélection ont retenu quatre projets."),
              T("Chaque équipe devait livrer une **vertical slice jouable sur PC**, sous Unreal ou Unity, avec sa documentation, une vidéo de gameplay et une présentation au jury.")
            ],[ FICHE("Les contraintes",["Quatre jeux en quatre semaines, du 27 mai au 24 juin, pour un seul producer et plus de cinquante personnes","Cinq jalons : Intentions, Proof of Concept, Alpha, Bêta et Gold","5 à 15 minutes de jeu, avec un niveau habillé, les menus et les effets, sans bug bloquant","Le conseil de l'école : mieux vaut moins, mais de qualité et fini"]) ]),
            LIGNE([ KEYART([
                      ["images/fda-castor.jpg","Le Castor et l'Écureuil","Un puzzle platformer où des animaux tentent de sauver leur environnement menacé en neutralisant les infrastructures humaines qui détruisent la nature de l'Anjou."],
                      ["images/fda-glow.jpg","Project GLOW","Un jeu d'action-aventure à la troisième personne, dans l'esprit d'Infamous Second Son, où un adolescent rebelle doté de pouvoirs de portail doit renverser la corporation qui corrompt les gangs et pollue la ville.",1],
                      ["images/fda-insight.jpg","Insight","Un couple marié résout des énigmes et relève des épreuves grâce aux pouvoirs que leur confèrent les yeux qu'ils découvrent, pour atteindre chacun son objectif dans un manoir des années 1930 au nord du Massachusetts."],
                      ["images/fda-flowering.jpg","The Flowering Dead","Un boss rush où des survivants luttent pour leur vie dans un monde post-apocalyptique envahi de plantes et d'animaux mutants."]
                    ]) ])
          ]),
          BANDE("II","Organiser quatre équipes en parallèle",[
            LIGNE([
              T("Avec plus de cinquante personnes, je ne pouvais pas être dans chaque salle. Nous avons donc **lancé les productions en promotion entière**, pour que tous partent des mêmes consignes, outils et méthode."),
              T("Avec les intervenants, j'ai désigné deux référents par groupe, un en Game Design et un en Game Art. Leurs dailies assuraient le suivi quand j'étais ailleurs, et je restais le lien avec les intervenants.")
            ],[ SCHEMA("orga") ])
          ]),
          BANDE("III","Planifier et suivre la production",[
            LIGNE([
              T("L'école fixait les jalons en Waterfall, et les équipes travaillaient en **Agile**, par sprints. Je devais relier les deux, avec un suivi assez homogène pour comparer les quatre groupes."),
              T("J'ai construit ce suivi sur Excel, un outil que toute l'équipe connaissait : un macro-planning par groupe pour les sprints et les jalons, un micro-planning pour les 1 387 tâches (sprint, priorité, difficulté, statut).")
            ],[ IMG(PRO1.macro,"Le macro-planning Excel de chaque groupe : sprints et jalons (Proof of Concept, Alpha, Bêta)","pano") ]),
            LIGNE([
              T("Tenus à jour en continu, ces statuts rendaient les retards visibles sprint par sprint.")
            ],[ IMG(PRO1.micro,"Extrait du micro-planning d'un des groupes : tâches, sprints, priorités, difficultés et statuts","pano") ])
          ]),
          BANDE("IV","Gérer la crise de direction artistique",[
            LIGNE([
              T("En deuxième semaine, le même problème est apparu dans les quatre groupes : **la direction artistique était confuse**. Les retards ont vite atteint deux à trois jours."),
              T("J'ai organisé des réunions d'urgence avec chaque groupe, et nous avons suspendu la production une journée et demie. Les références étaient trop vastes, et la recherche du démarrage trop courte."),
              T("Je devais faire repartir chaque groupe motivé, avec une direction claire.")
            ],[ SCHEMA("planning","Calendrier de la production : sprints, jalons, crise de mi-parcours et playtests") ]),
            LIGNE([
              T("Pour Project GLOW, j'ai décidé avec les référents d'abandonner plusieurs assets hors cadre. Pour Le Castor et l'Écureuil, nous avons revu le Level Art et le shader atmosphérique.")
            ],[ IMG(PRO1.kill,"Tâches supprimées (kills) dans le suivi de Project GLOW","pano") ]),
            LIGNE([
              
            ],[ IMG("images/fda-castor-ld.webp","Le Castor et l'Écureuil : du blockout au Level Art et au shader atmosphérique revus après la crise") ])
          ]),
          BANDE("V","Organiser les playtests et redéfinir les priorités",[
            LIGNE([
              T("Il restait deux semaines. J'ai organisé **deux sessions de playtest communes aux quatre groupes**, ouvertes aux joueurs des autres promotions."),
              T("Les retours, nombreux et souvent critiques, sont arrivés sur un moral déjà bas. J'ai gardé l'essentiel avec chaque équipe et redéfini les priorités. Voir des inconnus apprécier les jeux a aussi relancé l'énergie.")
            ],[ CAROUSEL([["images/fda-playtest-form.jpg","Le formulaire de retour du playtest du Castor et l'Écureuil : 22 réponses"],["images/fda-playtest-perso.jpg","Une section du questionnaire : l'appréciation des personnages"],["images/fda-playtest-coherence.jpg","Une section du questionnaire : la cohérence du design, notée de 1 à 7"]]) ])
          ]),
          BANDE("VI","Les quatre jeux livrés",[
            LIGNE([
              T("Les quatre jeux ont été livrés au jury, qui a souligné leur qualité et le travail des équipes.")
            ],[ CAROUSEL([["images/fda-castor-jeu.webp","Le Castor et l'Écureuil : le menu principal et la forêt en jeu"],["images/fda-insight-1.jpg","Insight : la bibliothèque du manoir"],["images/fda-insight-2.jpg","Insight : la grande salle et ses lustres"],["images/fda-insight-3.jpg","Insight : la lunette astronomique de la mezzanine"],["images/fda-flowering-1.jpg","The Flowering Dead : la ville envahie par les plantes"],["images/fda-flowering-2.jpg","The Flowering Dead : un passage sous les arcades"],["images/fda-flowering-3.jpg","The Flowering Dead : le beffroi et la tour"],["images/fda-glow-jeu.jpg","Project GLOW en jeu : une rue barrée par une grille"]]) ]),
            LIGNE([
              T("Pour Project GLOW, on voit la ville passer du plan au blockout, puis au Level Art et à la lumière.")
            ],[ CAROUSEL([["images/fda-glow-plan.webp","Project GLOW : du plan du niveau à la ville finale, vue du dessus"],["images/fda-glow-editeur.jpg","Project GLOW : la ville dans l'éditeur"]]) ])
          ]),
          BANDE("VII","Ce que j'en retiens",[
            LIGNE([
              T("C'était ma première production pour une promotion entière. La crise m'a appris à **écouter les besoins de chaque équipe** avant d'appliquer ce que je croyais savoir, et à déléguer."),
              T("Sur un projet de cette taille, je ferais créer dès le départ une scène de référence dans le moteur, avec un prop à la qualité visée, pour montrer la direction artistique dès la première semaine."),
              T("Je raccourcirais aussi les dailies, centrés sur l'objectif du sprint et les blocages.")
            ])
          ]),
          BANDE("VIII","Les équipes",[
            LIGNE([
              T("Ces quatre jeux sont avant tout le travail de leurs équipes."),
              EQUIPES(EQUIPES_FDA)
            ])
          ])
        ] }),
    P({ title:"Workshop Rogue-lite – Février 2026", bandeau:[["images/rogue-vh-keyart.jpg","Vampire Hunter E-Cycle"],["images/rogue-mm-keyart.jpg","Mad Max Fury Rogue"]], video:{src:"videos/rogue-montage.mp4",poster:"videos/rogue-montage-poster.jpg"}, large:true, nocover:true,
        desc:"Quinze jours pour livrer deux rogue-lites jouables sous Unity, chacun d'après une licence de film.",
        carte:"Deux rogue-lites livrés en quinze jours, avec des coupes préparées à l'avance et une génération procédurale simulée pour tenir la date.",
        survol:{ moteur:"Unity", logo:"images/unity.svg", items:["Producer","2 équipes de 14","Rogue-lite","15 jours"] }, img:"images/rogue-thumb.jpg",
        infos:{ "Rôle":"Producer", "Équipe":"2 équipes de 14 personnes", "Durée":"2 – 20 février 2026 (15 jours ouvrés)", "Outils":"Excel · PowerPoint · Miro · Discord" },
        apercu:"J'étais le producer des deux équipes de ce workshop de quinze jours, chacune chargée d'un rogue-lite en 2,5D sous Unity d'après une licence de film. Dès le premier sprint, la génération procédurale de Mad Max Fury Rogue a pris du retard : avec l'accord des intervenants, nous l'avons simulée. Grâce à des coupes préparées à l'avance, les deux jeux ont été livrés **jouables de bout en bout**.",
        contenu:[
          BANDE("I","Le cadre du projet",[
            LIGNE([
              T("Le cahier des charges était dense pour quinze jours : une boucle « run, mort, amélioration », un HUB, cinq salles de combat et trois salles iconiques assemblées procéduralement, une économie de monnaies, un boss, un combat complet, les menus et toute la documentation.")
            ],[ FICHE("Les contraintes",["Deux jeux à produire en même temps","Cinq jalons en quinze jours : Intentions, Proof of Concept, Alpha, Bêta, Gold","Une licence de film imposée à chaque équipe : Vampire Hunter D: Bloodlust et Mad Max: Fury Road","Le conseil de l'école : ne pas voir trop grand"]) ]),
            LIGNE([ KEYART([
                      ["images/rogue-vh-keyart.jpg","Vampire Hunter E-Cycle","Le Groupe 3 a reçu Vampire Hunter D: Bloodlust et en a fait un rogue-lite gothique, dans les salles d'un château."],
                      ["images/rogue-mm-keyart.jpg","Mad Max Fury Rogue","Le Groupe 4 a reçu Mad Max: Fury Road et en a fait un rogue-lite post-apocalyptique, entre désert et cavernes."]
                    ]) ])
          ]),
          BANDE("II","Planifier à deux niveaux",[
            LIGNE([
              T("Les deux équipes suivaient **trois sprints d'une semaine**, calés sur les jalons de l'école : blocking et assets essentiels, puis rendu final et système d'attaque, puis équilibrage et polish.")
            ],[ CHIFFRES([["573","tâches suivies"],["94 % et 92 %","tâches terminées (Vampire Hunter, Mad Max)"],["3","sprints d'une semaine"],["5","jalons en quinze jours"]]) ]),
            LIGNE([
              IMG("images/rogue-planning.png","Le planning de production : phases, jalons de l'école et sprints d'une semaine","pano")
            ]),
            LIGNE([
              T("Chaque équipe avait son backlog Excel (336 tâches pour Vampire Hunter E-Cycle, 237 pour Mad Max Fury Rogue), avec pour chaque tâche une personne, un sprint, une difficulté, une priorité et un statut."),
              T("La charge s'est concentrée au démarrage, et l'environnement était le poste le plus lourd des deux productions.")
            ]),
            LIGNE([
              IMG("images/rogue-mm-backlog.png","Extrait du backlog de Mad Max Fury Rogue : tâches, sprints, difficultés, priorités et statuts")
            ])
          ]),
          BANDE("III","Préparer les coupes",[
            LIGNE([
              T("Avec les référents, j'ai dressé une **liste de tâches sacrifiables** : tout ce qui sortait du chemin critique, à couper en premier si le temps manquait. 28 tâches pour Vampire Hunter E-Cycle, 14 pour Mad Max Fury Rogue ; la plupart ne sont jamais entrées en sprint."),
              T("En production, nous avons coupé sept tâches par équipe sans toucher au cœur du jeu, comme le gestionnaire de musique de Vampire Hunter E-Cycle ou le second ennemi de Mad Max Fury Rogue.")
            ],[ FICHE("Mis de côté chez Vampire Hunter E-Cycle",["Un double saut et un système de dialogue","Une salle maudite et un inventaire","Des VFX de décor : feu de cheminée, braises, flaques d'eau","42 tâches sacrifiables pour les deux jeux"]) ]),
            LIGNE([
              T("Le marché représentait cinq des quatorze tâches de Mad Max Fury Rogue, et il a été écarté d'un bloc.")
            ],[ TABLEAU("La liste sacrifiable de Mad Max Fury Rogue : 14 tâches",["Élément","Tâches (département)"],[
                ["Lance-flammes","FX (Tech Artist), modélisation (Enviro Artist), concept de l'ennemi (Concept Artist)"],
                ["Tuyaux","Trim et tuyaux modulaires (Enviro Artist)"],
                ["Marché","Concept et UI (Concept Artist), décor modulaire (Enviro Artist), système (System Design), intégration (Tech)"],
                ["Écran de chargement","Concept Artist"],
                ["Grenade","Tech"],
                ["Variation d'arme au corps à corps","Enviro Artist"],
                ["Ramasser un bâton au sol","Tech"]
              ], true) ])
          ]),
          BANDE("IV","Suivre deux équipes en même temps",[
            LIGNE([
              T("Dans chaque équipe, deux référents animaient les **dailies**. Je changeais de groupe un jour sur deux, et ils me faisaient un compte rendu."),
              T("Entre-temps, je passais dans les salles lever les blocages, et je faisais le point avec chaque équipe en revue de sprint."),
              T("Le shader d'outlines de Vampire Hunter E-Cycle, essentiel à la direction artistique, a pris du retard dès le premier sprint : j'ai revu le planning, et nous avons sacrifié des VFX de la liste pour le terminer."),
              T("On me demandait parfois mon avis sur la narration, et j'aidais à trancher pendant les réunions des System Designers.")
            ],[ IMG("images/rogue-vh-ld-la.webp","Une salle de Vampire Hunter E-Cycle, du blocking au level art") ])
          ]),
          BANDE("V","Simuler la génération procédurale",[
            LIGNE([
              T("Chez Mad Max Fury Rogue, la génération procédurale, cœur imposé du rogue-lite, s'est révélée bien plus complexe que prévu et accusait déjà du retard à la fin du premier sprint."),
              T("Avec le référent Game Design, j'ai cherché un compromis avec les intervenants, dans le rôle d'éditeurs. Nous avons choisi de **simuler le procédural** par des checkpoints préparés dans le level design, qui donnaient l'illusion d'une génération aléatoire. Le jury l'a validé en amont, et le projet a été bien reçu."),
              T("Cet accord a écarté le risque de crunch et recentré l'équipe sur l'essentiel du jeu.")
            ],[ CAROUSEL([["images/rogue-mm-ld-1.webp","Le blocking du niveau de Mad Max Fury Rogue"],["images/rogue-mm-ld-2.webp","Le niveau de Mad Max Fury Rogue en blocking, avec ses ennemis"]]) ])
          ]),
          BANDE("VI","Tester et livrer",[
            LIGNE([
              T("Chez Vampire Hunter E-Cycle, la QA est restée interne (questionnaire, God Mode, playtests UX), faute de temps pour inviter des joueurs extérieurs. Chez Mad Max Fury Rogue, des problèmes techniques ont empêché les tests."),
              T("Le jour du jury, les deux jeux étaient jouables de bout en bout. Les coupes, comme trois salles de combat sans level art final, n'ont pas compromis l'expérience.")
            ],[ CAROUSEL([["images/rogue-vh-autel.jpg","Vampire Hunter E-Cycle en jeu"],["images/rogue-vh-ruines.jpg","Vampire Hunter E-Cycle : une salle en ruines"],["images/rogue-vh-galerie.jpg","Vampire Hunter E-Cycle : une galerie du château"],["images/rogue-vh-salle-rouge.jpg","Vampire Hunter E-Cycle : une salle du château"],["images/rogue-mm-jeu.jpg","Mad Max Fury Rogue en jeu, avec son interface"]]) ])
          ]),
          BANDE("VII","Ce que j'en retiens",[
            LIGNE([
              T("Ce workshop m'a appris à **décider des coupes avant d'en avoir besoin** : avec une liste prête, on sait quoi laisser de côté quand le temps manque."),
              T("Avec le recul, j'aurais dû adapter en cours de route les objectifs de sprint communs aux deux équipes, au vu des difficultés de chacune."),
              T("Je prévoirais aussi des playtests externes au plus tôt, pour avoir le temps d'en tenir compte.")
            ])
          ]),
          BANDE("VIII","Les jeux en vidéo",[
            LIGNE([
              T("Une partie complète de chaque jeu, de l'écran de départ jusqu'à la fin du run."),
              VIDEOS(VIDEOS_ROGUE)
            ])
          ]),
          BANDE("IX","Les équipes",[
            LIGNE([
              T("Ces deux jeux sont avant tout le travail de leurs équipes."),
              EQUIPES(EQUIPES_ROGUE)
            ])
          ])
        ] }),
    P({ title:"Workshop Fusion – Novembre 2025", bandeau:[["images/fusion-hs-keyart.jpg","HellStorm"],["images/fusion-wk-keyart.jpg","Wakfu Riders"]], video:{src:"videos/fusion-montage.mp4",poster:"videos/fusion-montage-poster.jpg"}, large:true, nocover:true,
        desc:"Trois semaines de travail pour livrer deux vertical slices de course sous Unreal Engine 5, chacune née de la fusion d'un jeu rétro et d'une licence.",
        carte:"Deux jeux de course nés de la fusion d'un gameplay et d'une licence, avec mes premiers dailies et des assets classés par priorité.",
        survol:{ moteur:"Unreal Engine", logo:"images/unreal-engine.png", items:["Producer","2 équipes de 14 et 15","Racing · Fusion","3 semaines"] }, img:"images/fusion-thumb.jpg",
        infos:{ "Rôle":"Producer", "Équipe":"2 équipes de 14 et 15 personnes", "Durée":"3 – 28 novembre 2025 (3 semaines ouvrées)", "Outils":"Excel" },
        apercu:"J'étais le producer des deux équipes de ce workshop : trois semaines pour livrer une vertical slice de jeu de course sous Unreal Engine 5, en fusionnant le gameplay d'un jeu de référence avec une licence imposée. HellStorm mêlait *Motorstorm* à *Doom*, Wakfu Riders *Street Racer* à *Wakfu*. Au jury, **97 % et 98 % des tâches** étaient terminées.",
        contenu:[
          BANDE("I","Le cadre du projet",[
            LIGNE([
              T("La consigne demandait quelques minutes de jeu compréhensibles sans explication, et une vraie fusion qui garde l'essence du jeu d'origine.\n\nToute la difficulté était là : obtenir deux jeux à l'identité marquée, qui ne se perdent pas entre gameplay de référence et licence. J'ai mis en place des réunions pour choisir la direction artistique et fixer les éléments de gameplay iconiques, puis, si nécessaire, des réunions en petits comités."),
              T("J'avais pour tâche de tenir le document de gestion de production : planning macro et micro, burndown chart hebdomadaire, tableau de bord général et par personne.")
            ],[ FICHE("Les contraintes",["Deux jeux en même temps, pour un seul producer et 29 personnes","Trois semaines de travail, du 3 au 28 novembre 2025","Un jeu de type III visant le AAA, en modèle premium","Trois revues de l'équipe pédagogique avant le jury"]) ]),
            LIGNE([ KEYART([
                      ["images/fusion-hs-keyart.jpg","HellStorm","Le Groupe 3 a reçu le gameplay de Motorstorm et la licence Doom, et en a fait une course tout-terrain en enfer."],
                      ["images/fusion-wk-keyart.jpg","Wakfu Riders","Le Groupe 4 a reçu le gameplay de Street Racer et la licence Wakfu, et en a fait une course arcade à coups de sorts, dans un village de vignerons."]
                    ]) ])
          ]),
          BANDE("II","Planifier en quatre sprints",[
            LIGNE([
              T("Les deux équipes suivaient **quatre sprints** calés sur les revues de l'école : conception, prototype jusqu'aux playtests des 3C et du blocking, build jouable de bout en bout, puis polish et retours de QA.")
            ],[ CHIFFRES([["568","tâches suivies"],["97 % et 98 %","tâches terminées (HellStorm, Wakfu Riders)"],["4","sprints"],["3","revues avant le jury"]]) ]),
            LIGNE([ CAROUSEL([["images/fusion-hs-macro.png","Le macroplanning de HellStorm : phases, sprints et jours non travaillés"],["images/fusion-wk-macro.png","Le macroplanning de Wakfu Riders, calé sur le même calendrier"]],"pano") ]),
            LIGNE([
              T("Chaque équipe avait son backlog Excel, rangé par epic et par story (220 tâches pour HellStorm, 348 pour Wakfu Riders), avec un onglet par sprint et un par membre."),
              T("L'environnement était le poste le plus lourd : 72 tâches chez HellStorm, 131 chez Wakfu Riders.")
            ],[ CAROUSEL([["images/fusion-wk-carte.jpg","La carte de Wakfu Riders en construction dans Unreal Engine"],["images/fusion-wk-village.jpg","Wakfu Riders : le village et ses vignes dans l'éditeur"]]) ]),
            LIGNE([ CAROUSEL([["images/fusion-hs-backlog.png","Extrait du backlog de HellStorm : epics, stories, difficultés, statuts, sprints et priorités"],["images/fusion-wk-backlog.png","Extrait du backlog de Wakfu Riders"],["images/fusion-hs-dashboard.png","Le tableau de bord de HellStorm : avancement global et accès aux sprints"],["images/fusion-wk-dashboard.png","Le tableau de bord de Wakfu Riders : 341 tâches terminées sur 348"]],"pano") ])
          ]),
          BANDE("III","Suivre deux équipes",[
            LIGNE([
              T("C'était mon premier workshop avec des **dailies**. Je les ai confiés aux référents de chaque équipe : avec deux groupes, je ne pouvais pas être à chacun, et les équipes avançaient sans dépendre de ma présence. Je faisais le point avec elles aux revues hebdomadaires."),
              T("Avec les référents, j'ai réparti les tâches entre Game Artists et Game Designers, en équilibrant la charge de chacun."),
              T("Chez HellStorm, quatre documents, dont les personas et la concept map, ont pris du retard au sprint 3 ; je les ai reportés au sprint 4, où ils ont été terminés.")
            ],[ CAROUSEL([["images/fusion-hs-monocycle-concept.jpg","HellStorm : le concept du monocycle"],["images/fusion-hs-monocycle-3d-1.jpg","Le monocycle modélisé en 3D"],["images/fusion-hs-monocycle-3d-2.jpg","Le monocycle, vu de l'autre côté"],["images/fusion-hs-voiture-concept.jpg","HellStorm : le concept de la voiture"],["images/fusion-hs-voiture-3d.jpg","La voiture modélisée en 3D"],["images/fusion-hs-ui.jpg","L'écran de sélection de la carte, en cours d'intégration"]]) ])
          ]),
          BANDE("IV","Classer les assets par priorité",[
            LIGNE([
              T("Les listes d'assets étaient **classées par priorité** dès le départ. Chez HellStorm, les 15 props prioritaires ont tous été réalisés ; les 13 laissés de côté étaient surtout des variantes de bâtiments et de rochers."),
              T("Chez Wakfu Riders, 40 assets de décor sur 47 ont été réalisés, les sept restants étant de priorité basse. Les sons, notés de 1 à 10 avec parfois un son de remplacement, ont été produits à 23 sur 33."),
              T("En production, seules deux tâches ont été coupées chez HellStorm, dont le système de matchmaking, et cinq chez Wakfu Riders.")
            ],[ FICHE("Laissés de côté chez Wakfu Riders",["L'église et la mairie modulaires","Les bonus de poids, de puissance et de maniabilité","La zone de respawn","Les signes et feedbacks du drift"]) ]),
            LIGNE([ CAROUSEL([["images/fusion-wk-recherches.webp","Wakfu Riders : les recherches de véhicules, dont le tonneau"],["images/fusion-wk-dinde.webp","Wakfu Riders : la dinde, modélisée dans Maya d'après ses références"]]) ])
          ]),
          BANDE("V","Tester",[
            LIGNE([
              T("Wakfu Riders a lancé la **QA** dès le premier sprint en testant des jeux de référence comme F-Zero 99, puis le blocking (deux fois au sprint 2) et la vertical slice (sprints 3 et 4)."),
              T("Chez HellStorm, des retards en technique et en programmation ont repoussé les tests : le questionnaire de QA, prêt au sprint 3, n'a servi qu'au sprint 4.")
            ],[ CAROUSEL([["images/fusion-wk-ld-sketch.webp","Wakfu Riders : le sketch de level design du parcours"],["images/fusion-wk-blocking.webp","Le parcours en blocking dans Unreal Engine"],["images/fusion-wk-jeu.jpg","Wakfu Riders en jeu, au pied de l'arbre géant"]]) ])
          ]),
          BANDE("VI","Ce que j'en retiens",[
            LIGNE([
              T("Des listes classées par priorité dès le départ rendent les coupes faciles : ce qui manque à la fin est déjà ce qui compte le moins."),
              T("Avec le recul, j'aurais lancé les playtests de HellStorm plus tôt, comme Wakfu Riders l'a fait dès le premier sprint.")
            ])
          ]),
          BANDE("VII","Les jeux en vidéo",[
            LIGNE([
              T("Les deux parties complètes, du menu à la ligne d'arrivée."),
              VIDEOS(VIDEOS_FUSION)
            ])
          ]),
          BANDE("VIII","Les équipes",[
            LIGNE([
              T("Ces deux jeux sont avant tout le travail de leurs équipes."),
              EQUIPES(EQUIPES_FUSION)
            ])
          ])
        ] }),
    P({ title:"Projets de fin d'année : mes deux premières productions – Juin 2025", wip:true,   // wip:true = en cours (bandeau WIP, bouton Détails inactif). Supprimez ce mot pour activer le projet.
        desc:"Ma première gestion de deux projets en parallèle, suivis sur Excel et Miro.", carte:"Deux équipes suivies en parallèle sur Excel et Miro, avec des revues de sprint pour chacune.",
        survol:{ moteur:"Unreal / Unity", logos:["images/unreal-engine.png","images/unity.svg"], items:["Producer","2 équipes de 12 à 13","Genres variés","4 semaines"] }, img:"images/fin-annee-2025-thumb.jpg",
        infos:{ "Rôle":"Producer", "Équipe":"2 équipes de 12 à 13 personnes", "Durée":"4 semaines", "Outils":"Excel · Miro" },
        resume:{ contexte:"Projet de fin d'année à Game Sup : deux équipes de 12 à 13 personnes, quatre semaines de développement.",
                 role:"Producer des deux projets, menés en parallèle.",
                 resultat:"" },
        decisions:[ "Deux projets menés en parallèle pour la première fois, suivis sur Excel et Miro.",
                    "Des revues de sprint organisées pour chaque équipe.",
                    "Des listes de tâches construites avec les référents Art et Design." ],
        contenu:[
          IMG("", "Tableau Miro")
        ] })
  ],
  perso: [
    P({ date:"Octobre 2026", survol:{ items:["Producer","Action-RPG AA · 15 personnes","Mise en situation","Jira · JQL"] }, cat:"Gestion de production", id:"projet-jira-et-agile-un-studio-en-mise-en-situation-octobre-2026", title:"Projet Jira et Agile : un studio en mise en situation", large:true, nocover:true,
        desc:"La production d'un action-RPG AA fictif, structurée seul dans Jira, des boards au registre des risques.",
        carte:"Un studio fictif organisé dans Jira en Scrum : sprints, bugs, risques et automatisations.",
        img:"images/jira-vignette.jpg",
        infos:{ "Rôle":"Producer (mise en situation, mené seul)", "Projet":"Action-RPG AA fictif · 15 personnes + 4 prestataires", "Outils":"Jira · JQL", "Période":"Octobre 2026", "Temps de travail":"20 h environ", "Formation":"Agile with Atlassian Jira · Atlassian, via Coursera" },
        apercu:"Pour apprendre Jira sur un cas réaliste, j'ai organisé seul la production fictive d'un **action-RPG AA** de 15 personnes et quatre prestataires, sur le modèle de Kena: Bridge of Spirits, puis je l'ai éprouvée par un sprint simulé.",
        contenu:[
          BANDE("I","Le cadre du projet",[
            LIGNE([
              T("Mon jeu fictif reprend ce qu'Ember Lab a rendu public sur Kena : trois ans de production, 15 personnes, et des prestataires pour la QA, une partie de l'art et la musique."),
              T("J'ai mené ce projet en parallèle de la formation Agile with Atlassian Jira (Coursera), dont j'ai obtenu le certificat le 14 octobre 2026."),
              LIEN("Vérifier le certificat","https://coursera.org/verify/EQE4DN5JX2XG")
            ],[ FICHE("Les contraintes",["Une équipe de 15 personnes, pour une offre gratuite limitée à 10 utilisateurs","Jira ne permet pas d'antidater un ticket : la simulation se fait en temps réel","Un travail mené seul, en jouant tous les rôles"]) ])
          ]),
          BANDE("II","Organiser le studio et ses prestataires",[
            LIGNE([
              T("J'ai réparti l'équipe en deux squads de six personnes, Gameplay et World, plus un groupe Transverse. Les prestataires ont leur squad, External, et un référent interne qui valide leurs livraisons.")
            ],[ SCHEMA("squads","L'équipe : deux squads de six personnes, un groupe transverse et quatre prestataires") ]),
            LIGNE([
              T("J'ai **rangé chaque ticket selon quatre axes** : le composant, la squad, la version et le label. Chaque vue du projet devient ainsi une simple requête.")
            ],[ CAROUSEL([["images/jira-versions.png","Les versions du projet, avec leurs critères de sortie"],["images/jira-composants.png","Une partie des 29 composants : systèmes, disciplines et niveaux"],["images/jira-squad.png","Le champ Squad et ses quatre valeurs"],["images/jira-ticket.png","Une Story de la Vertical Slice, rangée selon les quatre axes"]]) ])
          ]),
          BANDE("III","Préparer la Vertical Slice",[
            LIGNE([
              T("Le découpage de la Vertical Slice a révélé deux goulots, l'animateur gameplay et le sound designer, et un chemin critique passant par les prestataires. J'ai donc engagé les squads prudemment (21 points pour Gameplay, 13 pour World), et ces constats ont ouvert le registre des risques."),
              T("Chaque sprint part d'un objectif vérifiable en démo. J'ai écrit une Definition of Ready pour y entrer et une Definition of Done pour en sortir.")
            ],[ CHIFFRES([["23","Stories dans la Vertical Slice"],["126","Points estimés"],["13 et 15","Stories pour l'animateur et le sound designer"],["3","Livraisons externes qui bloquent des Stories"]]) ])
          ]),
          BANDE("IV","Donner à chacun la bonne visibilité",[
            LIGNE([
              T("Dans Jira, un board n'est qu'une vue sur un filtre. J'en ai fait **un par public** : un Scrum par squad, un Kanban pour la QA, un pour les prestataires et un board Production pour tout le projet.")
            ],[ CAROUSEL([["images/jira-board-production.png","Production : la vue d'ensemble, sans sprint"],["images/jira-board-gameplay.png","Gameplay : le sprint de la squad, groupé par Epic"],["images/jira-board-world.png","World : le sprint de la squad, groupé par Epic"],["images/jira-board-vendors.png","Vendors : les livraisons attendues de chaque prestataire"]]) ]),
            LIGNE([
              T("J'ai créé une bibliothèque de filtres pour les questions du lundi matin : où en est le sprint, qu'est-ce qui bloque, le périmètre a-t-il bougé.")
            ],[ IMG("images/jira-filtres.png","Le filtre du périmètre de la Vertical Slice et les filtres enregistrés") ]),
            LIGNE([
              T("Chaque retour en arrière d'une Story est une transition nommée, que je peux compter.")
            ],[ IMG("images/jira-workflow-dev.png","Le workflow des Stories et des Tasks") ])
          ]),
          BANDE("V","Le circuit des bugs",[
            LIGNE([
              T("J'ai retravaillé le ticket de bug pour ses deux lecteurs, la QA et le producer, en m'appuyant sur *The Pocket Mentor for Video Game Testing* de Harún H. Ali."),
              T("La sévérité dit à quel point le jeu est cassé, la priorité dans quel ordre on corrige. Un bug grave mais rare reste un arbitrage du producer.")
            ],[ IMG("images/jira-ticket-bug.png","Un bug bloquant reproduit 8 fois sur 10, corrigé et fermé") ]),
            LIGNE([
              T("J'ai automatisé le calcul de la fréquence à partir du taux de reproduction, pour qu'elle ne dépende plus du testeur.")
            ],[ IMG("images/jira-auto-repro.png","La règle qui calcule la fréquence") ]),
            LIGNE([
              T("Sur le board QA, j'ai fixé une limite de travail en cours par colonne. Quand elle déborde, l'équipe finit des bugs avant d'en ouvrir d'autres.")
            ],[ CAROUSEL([["images/jira-board-qa.png","Le board QA-Bugs, bloquants en haut"],["images/jira-colonnes-qa.png","Les colonnes et leurs limites de travail en cours"]]) ]),
            LIGNE([
              T("**Un bug ne se ferme jamais sans résolution**, ce qui permet aussi de compter les réouvertures.")
            ],[ SCHEMA("bugflow","Le parcours d'un bug, ses retours en arrière et ses résolutions") ])
          ]),
          BANDE("VI","Éprouver l'outil avec un sprint simulé",[
            LIGNE([
              T("Pour éprouver les rapports, j'ai simulé un premier sprint par squad, compressé à une semaine, avec onze bugs dont un bloquant, un doublon et une réouverture.")
            ],[ IMG("images/jira-sprint-report.png","Le sprint report de Gameplay S01, avec quatre bugs ajoutés en cours de route") ]),
            LIGNE([
              T("Le **dashboard du producer** suit le sprint, la qualité du build et les risques. J'y ai ajouté un filtre de contrôle qui liste les tickets incomplets, pour que les chiffres restent fiables.")
            ],[ CAROUSEL([["images/jira-dashboard.png","Le dashboard pendant le sprint"],["images/jira-dashboard-fin.png","Le dashboard après le premier sprint : contrôle à zéro, onze bugs résolus"]]) ])
          ]),
          BANDE("VII","Automatiser les gestes répétitifs",[
            LIGNE([
              T("Chaque automatisation suit la même logique : un événement, une condition, une action. Sans condition, la règle qui démarre une Story la relancerait à chaque sous-tâche.")
            ],[ SCHEMA("autoflow","Cinq règles du space, lues selon la même logique") ]),
            LIGNE([
              T("Le journal d'audit m'a aidé à trouver ce qui bloquait, comme deux champs qui portaient le même nom.")
            ],[ CAROUSEL([["images/jira-automations.png","Les règles actives sur le space"],["images/jira-audit-erreur.png","Le journal d'audit montre l'échec du calcul"],["images/jira-audit-correctif.png","Le déclencheur corrigé, avec le champ appelé par son identifiant"],["images/jira-flow-story.png","Une sous-tâche qui démarre fait passer sa Story en cours"]]) ])
          ]),
          BANDE("VIII","Anticiper avec un registre des risques",[
            LIGNE([
              T("J'ai ajouté un **type de ticket Risk**, avec une probabilité, un impact, un signal d'alerte, une atténuation et un plan de repli."),
              T("Le risque R4, la dérive du périmètre, obtient un score de 12. Tout ajout doit être compensé par un retrait, et le périmètre gèle deux sprints avant le jalon."),
            ],[ CAROUSEL([["images/jira-risque-r4.png","Le risque R4, dérive du périmètre"],["images/jira-risques-liste.png","Les sept risques et leur statut : cinq en atténuation, deux en suivi"],["images/jira-risques-matrice.png","La matrice probabilité × impact"]]) ]),
            LIGNE([
              T("Une automatisation calcule le score, et la résolution dit ce qui s'est passé : atténué, survenu ou obsolète.")
            ],[ SCHEMA("riskflow","Le parcours d'un risque, ses résolutions et le calcul de son score") ])
          ]),
          BANDE("IX","Ce que j'en retiens",[
            LIGNE([
              T("J'ai appris à **penser Jira comme une base de données** : une fois les tickets bien rangés, une équipe ou un jalon n'est plus qu'une requête."),
              T("Sur un vrai projet, j'ouvrirais le registre des risques dès le lancement, et je simulerais deux semaines complètes en temps réel.")
            ])
          ])
        ] }),
        P({ date:"Mars 2026", survol:{ items:["Producer","Jeu AA · 42 personnes","48 mois de production","Excel · Coda · ClickUp"] }, cat:"Gestion de production", title:"Wyrdfall", nocover:true, desc:"Dossier de production d'un jeu AA de 48 mois : équipe, budget, planning, estimation des ventes et seuil de rentabilité.", carte:"L'équipe, le budget et le seuil de rentabilité d'un jeu AA fictif sur 48 mois.", large:true,   // large:true = page en bandes
        img:"images/wyrdfall-vignette.jpg",
        infos:{ "Rôle":"Producer", "Cadre":"Gestion de production · Game Sup", "Date":"Mars 2026", "Projet":"AA · 42 personnes au pic", "Outils":"Excel · Coda · ClickUp", "Temps de travail":"20 h sur 90 h (épreuve entière)", "Livrables":"Équipe · Planning · Budget · Market Analysis" },
        apercu:"Pour cet exercice, j'étais le producer de Wyrdfall, un jeu AA fictif, de la composition de l'équipe jusqu'au seuil de rentabilité. Résultat : **un budget de 9 M€ sur 48 mois**, un seuil vers 451 000 ventes et deux scénarios de ROI, dans un fichier Excel qui se met à jour en un clic.",
        contenu:[
          BANDE("I","Le sujet et mon rôle",[
            LIGNE([
              T("Je devais rendre un document de gestion de production en quatre volets : l'équipe à constituer, le planning macro et micro sur Coda et ClickUp, le budget sur Excel et une estimation des ventes."),
              T("J'ai choisi un projet AA comparable à GreedFall, porté par 42 personnes au pic de la production.")
            ],[ FICHE("Gestion de production · présentée ici · 20 h",["Équipe à constituer","Macro-planning et micro-planning (Coda, ClickUp)","Budget de développement (Excel)","Estimation des ventes (Market Analysis)"]), FICHE("Autres livrables · 70 h",["High Concept document","Prototype"]) ])
          ]),
          BANDE("II","Un fichier de production clair et modulable",[
            LIGNE([
              T("Je voulais un fichier Excel lisible et adaptable. **Le budget se recalcule en un clic** quand un membre rejoint le studio, change d'ancienneté ou reçoit de nouveaux logiciels.")
            ],[ CAROUSEL([[EX1.nav,"Page d'accueil du fichier de production : boutons et navigation par onglets colorés"],[EX1.budget,"Vue d'ensemble du budget : équipe, durée et budget par département"]]) ]),
            LIGNE([
              T("Wyrdfall compte 36 mois de production et 12 de live service, avec 42 personnes, dont 25 sur le live. Le budget atteint 9 033 682 €, dont 78 % de salaires."),
              T("J'ai composé l'équipe par pôle de production, en m'inspirant de Sandfall Interactive sur Clair Obscur: Expedition 33. Après la sortie, l'effectif passe à 25 pour simuler d'autres projets au studio et une petite équipe dédiée à l'extension.")
            ],[ CHIFFRES([["9 033 682 €","Budget total"],["42","Personnes dans l'équipe"],["48 mois","36 production · 12 live"],["78 %","Part des salaires"]]) ])
          ]),
          BANDE("III","Le Market Analysis et le seuil de rentabilité",[
            LIGNE([
              T("Pour estimer les ventes sur Steam, j'ai d'abord **analysé les jeux concurrents** sortis entre 2014 et 2025, pour en tirer des moyennes exploitables. Je ramènerais aujourd'hui cette période à cinq ans.")
            ],[ IMG(EX1.market,"Analyse des concurrents : ventes, revenus estimés et moyennes") ]),
            LIGNE([
              T("J'en ai tiré deux scénarios, un optimiste et un conservateur, chacun décliné en trois niveaux de risque.")
            ],[ CAROUSEL([[EX1.roiCons,"Estimation du ROI, scénario conservateur : 250 000 followers, selon les cas haut, moyen et bas"],[EX1.roiOpti,"Estimation du ROI, scénario optimiste : moyenne des ventes du Market Analysis, selon les cas haut, moyen et bas"]]) ]),
            LIGNE([
              T("Sur un prix de 49,99 €, j'ai retiré d'un bloc la part de Steam, les taxes et la redevance d'Unreal Engine, puis les remboursements. Par prudence, une vente rapporte environ 20 € : le budget est couvert vers **451 000 ventes**."),
              T("Dans le scénario conservateur moyen, j'estime 482 000 ventes, juste au-dessus du seuil, soit un ROI d'environ + 6,8 %. Tout dépend du taux de conversion des wishlists, estimé à partir des followers Steam (20 % en moyenne, 26 % au mieux, 4,8 % au pire), hors autres plateformes et DLC."),
            ],[ TABLEAU("Bénéfice net et ROI selon les scénarios · Budget total : 9 033 682 €",["Scénario","Ventes estimées","Bénéfice net (ROI)"],["Conservateur : 250 000 followers", ["Haut", "626 600", "+ 4 639 128 € (+ 51,4 %)"], ["Moyen", "482 000", "+ 616 438 € (+ 6,8 %)"], ["Bas", "115 680", "− 6 873 790 € (− 76,1 %)"], "Optimiste : moyenne des ventes du Market Analysis", ["Haut", "959 400", "+ 11 901 031 € (+ 131,7 %)"], ["Moyen", "738 000", "+ 5 741 809 € (+ 63,6 %)"], ["Bas", "177 120", "− 5 726 628 € (− 63,4 %)"]]) ])
          ]),
          BANDE("IV","Planifier quatre ans de projet",[
            LIGNE([
              T("Je devais enfin planifier **quatre ans de projet**, jusqu'à la sortie du DLC, alors que nos workshops durent trois semaines."),
              T("J'ai placé les Epics et les Stories sur toute la production, en tenant compte des fonctionnalités, des niveaux et de la QA.")
            ],[ IMG(EX1.epic,"Macro-planning : les Epics de la production") ]),
            LIGNE([
              T("J'ai complété ce travail par un sprint de préproduction détaillé, destiné à préparer la Vertical Slice."),
              T("J'ai dû quitter la logique de nos sprints très contraints pour raisonner sur les besoins qui font passer d'un sprint à l'autre.")
            ],[ IMG(EX1.sprint,"Sprint de préproduction : tâches, priorités et story points") ])
          ]),
          BANDE("V","Ce que j'en retiens",[
            LIGNE([
              T("Avec le recul, **j'ai sous-estimé la charge de l'équipe QA**, et l'équipe Sound Design est elle aussi sous-dimensionnée."),
              T("J'étudierais aussi les financements accessibles à un studio de cette taille : aides publiques, prêts bancaires ou financement participatif.")
            ])
          ])
        ] }),
    P({ date:"Avril 2025", survol:{ items:["Auteur du GDD","RPG au tour par tour","90 heures","67 pages"] }, cat:"Game Design et Narrative Design", title:"Castalie's Tears", large:true, nocover:true,
        desc:"Le Game Design Document d'un RPG au tour par tour d'inspiration mythologique, de la boucle de jeu jusqu'à un niveau de Narrative Design.", carte:"Le Game Design Document d'un RPG mythologique au tour par tour : boucle de jeu, systèmes et leur incarnation dans le récit.",
        img:CT.thumb,
        infos:{ "Rôle":"Auteur du GDD", "Cadre":"Game Design · Game Sup", "Date":"Avril 2025", "Temps de travail":"90 h", "Livrable":"Game Design Document · 67 pages" },
        apercu:"Pour cet exercice de Game Design, je devais concevoir un jeu autour d'une créature mythique d'un pays imposé, la Grèce. J'ai écrit le GDD de Castalie's Tears, un RPG au tour par tour, du concept à un niveau complet, avec une exigence : que **chaque mécanique ait un sens dans le récit**.",
        contenu:[
          BANDE("I","L'idée et le concept",[
            LIGNE([
              T("J'ai choisi les naïades, divinités des eaux. Le joueur incarne Castalie, gardienne de la fontaine de Delphes, qui parcourt la Grèce pour sauver des divinités et combattre les armées de Typhon, rejointe par ceux qu'elle rencontre."),
              T("C'est un RPG solo pour PC et Switch, en modèle premium : **Dragon Quest XI rencontre Dragon Age : Inquisition**, dans un univers proche d'Immortals Fenyx Rising. Un jeu posé, qui récompense la réflexion plus que les réflexes.")
            ],[ CAROUSEL([[CT.pitch,"L'énoncé central : Castalie face à Typhon"],[CT.one,"Le one-liner et ses trois références"],[CT.info,"La fiche d'information du projet"]]) ])
          ]),
          BANDE("II","Intentions, piliers et boucle de gameplay",[
            LIGNE([
              T("Je suis parti de valeurs comme le courage et la coopération, et de thèmes comme la culpabilité du survivant. Ces intentions se traduisent en trois piliers de gameplay : combattre les marées de Typhon, explorer un monde désolé et faire grandir sa Source."),
              T("J'ai aussi listé ce que le jeu ne contiendra pas, pour garder le périmètre sous contrôle : multijoueur, combat sur grille, arbre de compétences, mini-jeux.")
            ],[ CAROUSEL([[CT.pillars,"Les trois piliers de gameplay"],[CT.notdo,"Ce que le jeu n'est pas"]]) ]),
            LIGNE([
              T("Le joueur gère sa base, explore, combat, récolte, puis fabrique ou échange. J'ai qualifié chaque étape selon son rôle dans l'économie du jeu, pour vérifier que la boucle se nourrit autant qu'elle consomme."),
              T("Le jeu vise un public adulte qui joue par sessions courtes, d'abord Achiever puis Explorer selon la typologie de Bartle, et qui cherche de la profondeur et des choix.")
            ],[ IMG(CT.loop,"La boucle de gameplay de Castalie's Tears") ])
          ]),
          BANDE("III","De la mécanique au récit",[
            LIGNE([
              T("Typhon a vaincu les dieux et dispersé leurs pouvoirs, les Grâces divines. Gérer sa base, c'est protéger une fontaine sacrée, et chaque nouvelle compétence est le pouvoir hérité d'un dieu déchu."),
              T("Le butin a aussi un sens. Les bêtes de Typhon dévorent les fragments de Grâce, si bien que ce que le joueur ramasse est aussi ce que l'ennemi convoite.")
            ],[ CAROUSEL([[CT.realm,"Le Royaume de Lumière avant la Chute"],[CT.typhon,"Typhon"],[CT.sealed,"Un Temple scellé"]]) ]),
            LIGNE([
              TABLEAU("Une mécanique, une incarnation",["Mécanique","Incarnation narrative"],[["La Source (gestion de la base)","La fontaine sacrée de Delphes, qui accueille les réfugiés"],["La Grâce divine (compétences, craft)","Les pouvoirs des dieux déchus, dispersés par Typhon"],["Les compagnons (recrutement)","Divinités mineures, héros et réfugiés à sauver"],["Les Temples scellés (donjons, boss)","Les ruines où sont retenus les grands dieux"],["La progression","Castalie qui reprend confiance, de naïade fragile à cheffe"]],true)
            ])
          ]),
          BANDE("IV","Castalie et le niveau du Temple d'Apollon",[
            LIGNE([
              T("Castalie manque de confiance et se méfie de ses pouvoirs. Au fil de l'aventure, elle devient une combattante et une cheffe."),
              T("Le premier niveau, les ruines du Temple d'Apollon, son mentor, est pensé comme **un chemin dans la mémoire**. Des mosaïques racontent le passé, et l'intensité monte par paliers jusqu'au boss, là où Castalie conversait avec Apollon.")
            ],[ IMG(CT.castalie,"Castalie, la naïade de la fontaine de Delphes","sm") ]),
            LIGNE([
              CAROUSEL([[CT.moodboard,"Moodboard du niveau"],[CT.ld,"Plan du niveau (layout)"],[CT.mol,"Diagramme moléculaire : les salles et leurs liens"],[CT.pacing,"Courbe d'intensité du niveau"]])
            ])
          ]),
          BANDE("V","Ce que j'en retiens",[
            LIGNE([
              T("Un GDD doit relier les intentions aux mécaniques, et les mécaniques à ce que le joueur ressent. J'ai cherché à rendre ce lien lisible, du pilier jusqu'au niveau."),
              T("Comme producer, ce travail m'aide à comprendre ce que l'on demande aux équipes de design, à en estimer la portée et à repérer le cœur d'un projet quand il faut arbitrer.")
            ])
          ])
        ] }),
    P({ date:"Janvier 2025", survol:{ items:["Auteur de l'étude","Analyse de marché","Recoupement des sources","30 diapositives"] }, cat:"Analyse de marché", title:"Le marché africain du jeu vidéo : le cas du Nigéria", large:true, nocover:true,
        desc:"Une étude du marché africain du jeu vidéo à travers le Nigéria, où le mobile et le public local dessinent un modèle à part, encore freiné par les infrastructures.", carte:"Un marché porté par le mobile et le public local, encore freiné par les infrastructures.",
        img:NG.thumb,
        infos:{ "Rôle":"Auteur de l'étude", "Cadre":"Culture vidéoludique · Game Sup", "Date":"Janvier 2025 · sources vérifiées en octobre 2026", "Livrable":"Présentation PowerPoint · 30 diapositives" },
        apercu:"Pour cet exercice de culture vidéoludique, j'ai voulu explorer un marché porteur que je ne connaissais pas : le jeu vidéo africain, à travers le cas du Nigéria, en recoupant mes sources. J'y ai trouvé un modèle mobile et local, porté par une population jeune mais freiné par les infrastructures. Ma conclusion : budget, calendrier, plateforme et mode de paiement **se décident ensemble**.",
        contenu:[
          BANDE("I","Problématique et angle d'étude",[
            LIGNE([
              T("Le marché reste dominé par l'Occident, le Japon et la Chine, alors que l'Afrique connaît un essor récent. Ma problématique : **peut-on parler d'un modèle africain**, et en quoi s'affranchit-il du modèle occidental ?"),
              T("En tant que producer, j'ai lu ce marché à travers ses contraintes : réseau, électricité, pouvoir d'achat, accès au paiement. Elles expliquent les choix des studios.")
            ],[ CITATION("« L'essor de l'industrie du jeu vidéo en Afrique attire l'attention des investisseurs avec une croissance annuelle significative. »","Nathan Bonnet, Afrikactus, 15 mai 2024") ])
          ]),
          BANDE("II","Un marché jeune, mobile et porté par la démographie",[
            LIGNE([
              T("Selon Mordor Intelligence, le marché africain passerait de 2,14 Md$ en 2024 à 3,72 Md$ en 2029, environ 11,6 % par an contre 9,3 % au niveau mondial. Newzoo l'estime à 1,8 Md$ sur un autre périmètre : je ne mélange pas les deux séries. L'Afrique pèse moins de 1 % du marché mondial.")
            ],[ SCHEMA("marche","Le marché africain du jeu vidéo, 2024-2029 (Mordor Intelligence), comparé au marché mondial"), FICHE("Quelques studios pionniers",["Afrique du Sud : Celestial Games (1994)","Cameroun : Kiro'o Games (projet lancé en 2003, studio fondé en 2012)","Ghana : Leti Arts (2009)","Nigéria : Kuluya, Gamsole et Maliyo (vers 2012)"]) ]),
            LIGNE([
              T("Ce marché repose sur **le mobile**, qui représentait environ 90 % des revenus en 2022. Le nombre de joueurs varie de 349 à plus de 600 millions selon les sources, qui ne mesurent pas la même chose.")
            ],[ CHIFFRES([["200 M","joueurs sur mobile (2022)"],["90 %","des revenus via smartphone"],["> 60 %","de moins de 25 ans"],["2,5 Md","d'habitants prévus en 2050"]]) ])
          ]),
          BANDE("III","Le Nigéria : des studios mobiles et locaux",[
            LIGNE([
              T("Au Nigéria, l'industrie tourne autour de quatre studios créés vers 2012, dont Maliyo Games et ChopUp, tous tournés vers le mobile."),
            ],[ ETAPES("ChopUp en quelques dates",[["2011 · Danfo","Bayo Puddicombe crée le jeu Danfo : plus d'un million de téléchargements"],["2012 · Pledge 51, puis ChopUp","Bayo Puddicombe et Zubair Abubakar fondent Pledge 51, la société qui lancera ChopUp, dans la foulée du succès de Danfo"],["2016 · Rythme de production","4 employés et un nouveau jeu toutes les 6 semaines"]]) ]),
            LIGNE([
              T("Plus de la moitié des adultes nigérians n'ont pas de compte bancaire. ChopUp contourne l'obstacle avec les opérateurs mobiles : un petit abonnement hebdomadaire prélevé sur la facture de téléphone. Résultat : 100 000 téléchargements en quelques mois.")
            ],[ IMG(NG.jagun,"Jagun : Clash of Kingdoms, ChopUp, 2015"), IMG(NG.chicken,"Chicken Escape, ChopUp, 2015") ]),
            LIGNE([
              T("Ces studios s'adressent au public local. Le quotidien devient matière de jeu, comme les embouteillages de Lagos dans Okada Ride (Maliyo, 2012), tout comme l'histoire et les mythes avec Iwaju : Rising Chef (Maliyo, 2024)."),
              T("Faute de cursus adaptés, les studios assurent aussi la formation, comme Maliyo Games avec un cursus gratuit en ligne de trois mois.")
            ],[ IMG(NG.okada,"Okada Ride, Maliyo Games, 2012"), IMG(NG.iwaju,"Iwaju : Rising Chef, Maliyo Games, 2024"), IMG(NG.aurion,"Aurion : L'héritage des Kori-Odan, Kiro'o Games, 2016") ])
          ]),
          BANDE("IV","L'e-sport et les freins au développement",[
            LIGNE([
              T("La jeunesse porte aussi l'e-sport. Selon PwC, les revenus publicitaires des jeux vidéo et de l'e-sport au Nigéria passeraient de 111 M$ en 2022 à 472 M$ en 2027."),
              T("Ce chiffre contredit le taux annoncé dans le même article, qui mènerait à environ 156 M$. Je retiens donc une tendance plutôt qu'un montant : une croissance à deux chiffres portée par le smartphone.")
            ],[ TABLEAU("Jeux vidéo et e-sport au Nigéria : les chiffres de PwC, édition par édition",["Source","Période","Revenus"],[["Agence Ecofin, nov. 2023","2022 → 2027","111 → 472 M$ (publicité)"],["Nairametrics, fév. 2025","2023 → 2024","192 → 217 M$"],["Nairametrics, fév. 2025","2023 → 2028","192 → 322 M$ (+ 10,9 % par an)"]],true) ]),
            LIGNE([
              T("Ce modèle reste fortement limité. J'ai relevé cinq freins, du plus matériel au plus structurel."),
              TABLEAU("Les freins au développement du secteur",["Frein","Constat"],[["Internet","Réseau fragile, dépendant d'un nombre limité de câbles sous-marins (BBC News)."],["Électricité","12 effondrements du réseau national en 2024. 82 % des développeurs africains jugent critique une alimentation électrique sans coupure (rapport de Maliyo Games, le studio d'Hugo Obi)."],["Pouvoir d'achat","Peu d'ordinateurs et de smartphones puissants : des jeux gratuits, pensés pour des joueurs occasionnels."],["Formation","Peu de formations longues au jeu vidéo, voire aucune."],["Financement","Des revenus souvent liés à des bailleurs de fonds étrangers. Des observateurs cités par Courrier International jugent ces jeux « bien-pensants », une impression qu'aucun chiffre ne vient étayer."]],true)
            ])
          ]),
          BANDE("V","Ce que j'en retiens",[
            LIGNE([
              T("Le marché africain progresse, porté par une population jeune, le mobile et l'e-sport, avec des jeux ancrés dans le quotidien et l'histoire locale. Il reste freiné par les infrastructures, le pouvoir d'achat et le financement."),
              T("Côté production, j'en retiens qu'**un marché se lit d'abord par ses contraintes** : ChopUp a choisi plateforme, paiement et rythme en fonction d'elles. J'ai aussi appris à distinguer un chiffre établi d'une projection avant de bâtir un plan dessus.")
            ])
          ]),
          BANDE("VI","Sources",[ LIGNE([ SOURCES([["Agence Ecofin · Nigéria en 2027, les jeux vidéo généreront plus de revenus publicitaires que le streaming (PwC)", "https://www.agenceecofin.com/communication/1311-113619-nigeria-en-2027-les-jeux-video-genereront-plus-de-revenus-publicitaires-que-le-streaming-l-affichage-exterieur-et-la-presse-ecrite-pwc"], ["Afrik.com · Le gaming en Afrique, une révolution silencieuse", "https://www.afrik.com/le-gaming-en-afrique-une-revolution-silencieuse"], ["Jeune Afrique · L'Afrique, nouvel eldorado des jeux vidéo", "https://www.jeuneafrique.com/1526043/culture/lafrique-nouvel-eldorado-des-jeux-video/"], ["Sigma · Gaming in Nigeria is on the rise", "https://sigma.world/fr/news/gaming-in-nigeria-is-on-the-rise/"], ["Agence Ecofin · Le marché africain des jeux vidéo devrait croître de 11,62 % par an d'ici 2029", "https://www.agenceecofin.com/innovation/0810-122265-le-marche-africain-des-jeux-video-devrait-croitre-de-11-62-par-an-d-ici-2029-rapport"], ["Jeune Afrique · Le Nigeria part à la conquête du marché africain des jeux vidéo", "https://www.jeuneafrique.com/depeches/20777/politique/le-nigeria-part-a-la-conquete-du-marche-africain-des-jeux-video/"], ["Jeune Afrique · Les recettes du succès de ChopUp", "https://www.jeuneafrique.com/315910/economie-entreprises/reussite-les-recettes-du-succes-de-chopup-le-studio-de-jeux-videos-100-nigerian/"], ["Toonmed (blog) · Reportage : les recettes du succès de ChopUp", "https://toonmed.blogspot.com/2016/04/reportage-les-recettes-du-succes-de.html"], ["Agence Ecofin · Le Nigeria et l'Égypte, pays où la moitié des adultes sont non bancarisés", "https://www.agenceecofin.com/finance/0407-99376-le-nigeria-et-l-egypte-font-partie-des-7-pays-au-monde-dans-lesquels-la-moitie-des-adultes-sont-non-bancarises-rapport"], ["Banque de France · Afrique subsaharienne, la fracture financière entre hommes et femmes", "https://www.banque-france.fr/fr/publications-et-statistiques/publications/afrique-subsaharienne-la-fracture-financiere-entre-hommes-et-femmes"], ["Sport News Africa · Vers la naissance de la Confédération africaine du sport en ligne", "https://sportnewsafrica.com/articles/e-sport-vers-la-naissance-de-la-confederation-africaine-du-sport-en-ligne"], ["Mordor Intelligence · Marché mondial du jeu vidéo", "https://www.mordorintelligence.com/fr/industry-reports/global-gaming-market"], ["Courrier International · Comment le jeu vidéo se développe en Afrique", "https://www.courrierinternational.com/article/tendance-comment-le-jeu-video-se-developpe-en-afrique"], ["Africavox · L'Afrique, nouveau berceau de l'e-sport", "https://africavox.easybroadcast.fr/articles/l-afrique-nouveau-berceau-du-e-sports"], ["Afrikactus · L'essor du gaming africain sur la scène mondiale", "https://afrikactus.com/essor-du-gaming-africain-sur-la-scene-mondiale/"], ["ADF Magazine · Des start-ups nigérianes pénètrent le marché des jeux vidéo", "https://adf-magazine.com/fr/2014/10/des-start-ups-nigerianes-penetrent-le-marche-des-jeux-video/"], ["Smart Africa · Page d'accueil de l'alliance", "https://smartafrica.org/fr/page-daccueil/"], ["AfriGamers · À propos", "https://afrigamers.com/a-propos-afrigamers/"], ["Tribune Online · 12 times national grid collapsed in 2024", "https://tribuneonlineng.com/updated-12-times-national-grid-collapsed-in-2024/"], ["Nairametrics · PwC lists 10 fastest-growing entertainment and media sectors in Nigeria 2024-2028", "https://nairametrics.com/2025/02/09/pwc-lists-10-fastest-growing-entertainment-and-media-sectors-in-nigeria-2024-2028/"],["World Economic Forum · How will Africa's youth population drive global growth?", "https://www.weforum.org/stories/youth/africa-youth-global-growth-digital-economy/"],["ONU · Youth population trends (fact sheet)", "https://www.un.org/esa/socdev/documents/youth/fact-sheets/YouthPOP.pdf"],["Afrik.com · L'Afrique, avenir du gaming mondial ?", "https://www.afrik.com/l-afrique-avenir-du-gaming-mondial"],["Le360 · À Kigali, l'Afrique se cherche un modèle économique pour l'e-sport", "https://afrique.le360.ma/sports/des-millions-de-gamers-a-la-manette-a-kigali-lafrique-se-cherche-un-modele-economique-pour-le-sport_OLMQPD7RONHW3MNIOV3TPTZBWI/"],["AFJV · Abena Tournaments", "https://afjv.com/news/11374_abena-tournaments-tournoi-feminin-afrocaribeen-tekken8.htm"],["Linda Ikeji · Mobo Game Jam (Edu360 et Kucheza Gaming)", "https://www.lindaikejisblog.com/2020/12/mobo-game-jam-edu360-kucheza-drive-social-impact-through-gaming.html"],["Maliyo Games · Programmes de formation", "https://www.maliyo.com/programme/"],["Stuff South Africa · GameOn with HP, hackathon", "https://stuff.co.za/2024/10/11/get-your-gameon-with-hps-new-hackathon/"],["HP Gaming Garage", "https://www.hpgaminggarage.com/"],["Game Camp Cities · La CASE signe avec HP", "https://www.gamecampcities.pro/post/la-conf%C3%A9d%C3%A9ration-esport-africaine-signe-son-premier-partenaire-strat%C3%A9gique-continental-le-groupe-h?lang=fr"],["Pulse Nigeria · TCN restores power in Kaduna, Kano, Bauchi and Gombe", "https://www.pulse.ng/articles/news/local/tcn-restores-power-in-kaduna-kano-bauchi-and-gombe-after-prolonged-blackout-2024111910462282759"],["Carry1st · Africa's gaming market reaches $1.8bn in 2024 (avec Newzoo)", "https://carry1st.com/press/africas-gaming-market-reaches-1-8bn-sixfold-growth-vs-row-driven-by-32mn-new-gamers-in-2024"],["Peoples Gazette · 210 millions d'abonnés mobiles actifs (NCC, 2022)", "https://gazettengr.com/nigerias-mobile-subscribers-hit-210-million-in-august-ncc/"],["Techpoint · Jagun: Clash of Kingdoms (2015)", "https://techpoint.africa/general/jagun-clash-of-kingdoms-chopup/"],["TechCabal · Pledge 51, la société derrière ChopUp", "https://techcabal.com/2014/08/29/tayo-oviosu-and-others-invest-in-chopup/"],["Games Industry Africa · Olivier Madiba et Kiro'o Games", "https://gamesindustryafrica.com/2019/09/16/profile-olivier-madiba"],["GameDev Reports · rapport de Maliyo Games sur l'industrie africaine", "https://gamedevreports.substack.com/p/maliyo-games-the-state-of-the-african"]]) ]) ])
        ] })
  ]
};
const PROJECTS_EN = {
  pro: [
    P({ title:"End-of-Year Projects: Four Games in Parallel – May–June 2026", 
        desc:"Producing for a whole class as the only producer, from kick-off to jury delivery, with an art direction crisis halfway through.", carte:"Four games for a whole class, and an art direction crisis overcome with a pause and two shared playtests.",
        infos:{ "Role":"Producer", "Team":"4 teams of 13 to 14 people (54 in total)", "Duration":"27 May – 24 June 2026", "Tools":"Excel · PowerPoint (OneDrive) · Discord" },
        survol:{ moteur:"Unreal Engine", logo:"images/unreal-engine.png", items:["Producer","4 teams of 13 to 14","Varied genres","4 weeks"] },
        apercu:"I was the only producer for the class's four games, 54 people in all. In the second week, the same art direction crisis hit all four teams: after a day-and-a-half pause, I set up two shared playtests and reset each group's priorities. All four games were delivered with **93% of the 1,387 tasks completed**.",
        contenu:[
          BANDE("I","The project framework",[
            LIGNE([
              T("The end-of-year project brings second-year Game Designers and Game Artists together on games between III and AAA. Two selection juries chose four projects."),
              T("Each team had to deliver a **vertical slice playable on PC**, in Unreal or Unity, with its documentation, a gameplay video and a jury presentation.")
            ],[ FICHE("The constraints",["Four games in four weeks, from 27 May to 24 June, for a single producer and more than fifty people","Five milestones: Intentions, Proof of Concept, Alpha, Beta and Gold","5 to 15 minutes of play, with a finished level, menus and effects, and no blocking bugs","The school's advice: do less, but make it polished and finished"]) ]),
            LIGNE([ KEYART([
                      ["images/fda-castor.jpg","Le Castor et l'Écureuil","A puzzle platformer where animals try to save their endangered environment by neutralising the human infrastructure destroying Anjou's nature."],
                      ["images/fda-glow.jpg","Project GLOW","A third-person action-adventure game in the vein of Infamous Second Son, where a rebel teenager with portal powers must overthrow the corporation that corrupts the gangs and pollutes the city.",1],
                      ["images/fda-insight.jpg","Insight","A married couple solves puzzles and completes trials using new powers granted by the eyes they find, to reach their respective goals in a 1930s manor in northern Massachusetts."],
                      ["images/fda-flowering.jpg","The Flowering Dead","A boss rush where survivors fight for their lives in a post-apocalyptic world overrun by mutant plants and animals."]
                    ]) ])
          ]),
          BANDE("II","Organising four teams in parallel",[
            LIGNE([
              T("With more than fifty people, I could not be in every room. So we **launched production with the whole class**, so that everyone started from the same guidelines, tools and method."),
              T("With the instructors, I appointed two leads per group, one in Game Design and one in Game Art. Their dailies kept tracking going when I was elsewhere, and I remained the link with the instructors.")
            ],[ SCHEMA("orga") ])
          ]),
          BANDE("III","Planning and tracking production",[
            LIGNE([
              T("The school set Waterfall milestones, and the teams worked in **Agile** sprints. I had to connect the two, with tracking consistent enough to compare the four groups."),
              T("I built this tracking in Excel, a tool the whole team knew: a macro plan per group for sprints and milestones, and a micro plan for the 1,387 tasks (sprint, priority, difficulty, status).")
            ],[ IMG(PRO1.macro,"Each group's Excel macro plan: sprints and milestones (Proof of Concept, Alpha, Beta)","pano") ]),
            LIGNE([
              T("Kept up to date continuously, these statuses made delays visible sprint by sprint.")
            ],[ IMG(PRO1.micro,"Excerpt from one group's micro plan: tasks, sprints, priorities, difficulties and statuses","pano") ])
          ]),
          BANDE("IV","Handling the art direction crisis",[
            LIGNE([
              T("In the second week, the same problem appeared in all four groups: **the art direction was unclear**. Delays quickly reached two to three days."),
              T("I organised emergency meetings with each group, and we paused production for a day and a half. The references were too broad, and the research at the start too short."),
              T("I had to send each group back motivated, with a clear direction.")
            ],[ SCHEMA("planning","Production calendar: sprints, milestones, mid-course crisis and playtests") ]),
            LIGNE([
              T("For Project GLOW, I decided with the leads to cut several off-brief assets. For Le Castor et l'Écureuil, we reworked the Level Art and the atmospheric shader.")
            ],[ IMG(PRO1.kill,"Cut tasks in Project GLOW's tracking","pano") ]),
            LIGNE([
            ],[ IMG("images/fda-castor-ld.webp","Le Castor et l'Écureuil: from blockout to the Level Art and atmospheric shader reworked after the crisis") ])
          ]),
          BANDE("V","Running playtests and reprioritising",[
            LIGNE([
              T("Two weeks remained. I organised **two playtest sessions for all four groups**, open to players from the other classes."),
              T("The feedback, plentiful and often critical, came when morale was already low. I kept what mattered with each team and reset the priorities. Watching strangers enjoy the games also restored the teams' energy.")
            ],[ CAROUSEL([["images/fda-playtest-form.jpg","The playtest feedback form for Le Castor et l'Écureuil: 22 responses"],["images/fda-playtest-perso.jpg","A section of the questionnaire: how players rated the characters"],["images/fda-playtest-coherence.jpg","A section of the questionnaire: design consistency, rated from 1 to 7"]]) ])
          ]),
          BANDE("VI","The four games delivered",[
            LIGNE([
              T("All four games were delivered to the jury, which praised their quality and the work of the teams.")
            ],[ CAROUSEL([["images/fda-castor-jeu.webp","Le Castor et l'Écureuil: the main menu and the forest in game"],["images/fda-insight-1.jpg","Insight: the mansion's library"],["images/fda-insight-2.jpg","Insight: the great hall and its chandeliers"],["images/fda-insight-3.jpg","Insight: the telescope on the mezzanine"],["images/fda-flowering-1.jpg","The Flowering Dead: the city overrun by plants"],["images/fda-flowering-2.jpg","The Flowering Dead: a passage under the arcades"],["images/fda-flowering-3.jpg","The Flowering Dead: the belfry and the tower"],["images/fda-glow-jeu.jpg","Project GLOW in game: a street blocked by a gate"]]) ]),
            LIGNE([
              T("For Project GLOW, you can see the city move from the layout to the blockout, then to Level Art and lighting.")
            ],[ CAROUSEL([["images/fda-glow-plan.webp","Project GLOW: from the level layout to the final city, top view"],["images/fda-glow-editeur.jpg","Project GLOW: the city in the editor"]]) ])
          ]),
          BANDE("VII","What I take away",[
            LIGNE([
              T("It was my first production for an entire class. The crisis taught me to **listen to each team's needs** before applying what I thought I knew, and to delegate."),
              T("On a project of this size, I would have a reference scene built in the engine from the start, with a prop at the target quality, to show the art direction from the first week."),
              T("I would also keep the dailies shorter, focused on the sprint goal and blockers.")
            ])
          ]),
          BANDE("VIII","The teams",[
            LIGNE([
              T("These four games are first and foremost the work of their teams."),
              EQUIPES(EQUIPES_FDA)
            ])
          ])
        ] }),
    P({ title:"Rogue-lite Workshop – February 2026", 
        desc:"Fifteen days to deliver two playable rogue-lites in Unity, each based on a film licence.",
        carte:"Two rogue-lites shipped in fifteen days, with cuts prepared in advance and procedural generation faked to hold the deadline.",
        survol:{ moteur:"Unity", logo:"images/unity.svg", items:["Producer","2 teams of 14","Rogue-lite","15 days"] }, 
        infos:{ "Role":"Producer", "Team":"2 teams of 14 people", "Duration":"2 – 20 February 2026 (15 working days)", "Tools":"Excel · PowerPoint · Miro · Discord" },
        apercu:"I was the producer for both teams in this fifteen-day workshop, each making a 2.5D rogue-lite in Unity based on a film licence. From the first sprint, Mad Max Fury Rogue's procedural generation fell behind: with the instructors' agreement, we simulated it. Thanks to cuts prepared in advance, both games were delivered **playable from start to finish**.",
        contenu:[
          BANDE("I","The project framework",[
            LIGNE([
              T("The brief was dense for fifteen days: a \"run, death, upgrade\" loop, a HUB, five combat rooms and three iconic rooms assembled procedurally, a currency economy, a boss, full combat, the menus and all the documentation.")
            ],[ FICHE("Constraints",["Two games to produce at the same time","Five milestones in fifteen days: Intentions, Proof of Concept, Alpha, Beta, Gold","A film licence assigned to each team: Vampire Hunter D: Bloodlust and Mad Max: Fury Road","The school's advice: don't think too big"]) ]),
            LIGNE([ KEYART([
                      ["images/rogue-vh-keyart.jpg","Vampire Hunter E-Cycle","Group 3 was given Vampire Hunter D: Bloodlust and turned it into a gothic rogue-lite set in the rooms of a castle."],
                      ["images/rogue-mm-keyart.jpg","Mad Max Fury Rogue","Group 4 was given Mad Max: Fury Road and turned it into a post-apocalyptic rogue-lite, between desert and caves."]
                    ]) ])
          ]),
          BANDE("II","Planning on two levels",[
            LIGNE([
              T("Both teams followed **three one-week sprints**, aligned with the school's milestones: blocking and essential assets, then final look and attack system, then balancing and polish.")
            ],[ CHIFFRES([["573","tasks tracked"],["94% and 92%","tasks completed (Vampire Hunter, Mad Max)"],["3","one-week sprints"],["5","milestones in fifteen days"]]) ]),
            LIGNE([
              IMG("images/rogue-planning.png","The production schedule: phases, school milestones and one-week sprints","pano")
            ]),
            LIGNE([
              T("Each team had its Excel backlog (336 tasks for Vampire Hunter E-Cycle, 237 for Mad Max Fury Rogue), each task with an owner, a sprint, a difficulty, a priority and a status."),
              T("The workload was front-loaded, and environment art was the heaviest area in both productions.")
            ]),
            LIGNE([
              IMG("images/rogue-mm-backlog.png","Excerpt from the Mad Max Fury Rogue backlog: tasks, sprints, difficulties, priorities and statuses")
            ])
          ]),
          BANDE("III","Preparing the cuts",[
            LIGNE([
              T("With the leads, I drew up a **list of expendable tasks**: everything outside the critical path, to be cut first if time ran short. 28 tasks for Vampire Hunter E-Cycle, 14 for Mad Max Fury Rogue; most never entered a sprint."),
              T("During production, we cut seven tasks per team without touching the core of the game, such as Vampire Hunter E-Cycle's music manager or Mad Max Fury Rogue's second enemy.")
            ],[ FICHE("Set aside on Vampire Hunter E-Cycle",["A double jump and a dialogue system","A cursed room and an inventory","Set-dressing VFX: fireplace, embers, puddles","42 expendable tasks across both games"]) ]),
            LIGNE([
              T("The market made up five of Mad Max Fury Rogue's fourteen tasks, and it was set aside as a whole.")
            ],[ TABLEAU("The Mad Max Fury Rogue expendable list: 14 tasks",["Element","Tasks (department)"],[
                ["Flamethrower","FX (Tech Artist), model (Enviro Artist), enemy concept (Concept Artist)"],
                ["Pipes","Trim and modular pipes (Enviro Artist)"],
                ["Market","Concept and UI (Concept Artist), modular set (Enviro Artist), system (System Design), implementation (Tech)"],
                ["Loading screen","Concept Artist"],
                ["Grenade","Tech"],
                ["Melee weapon variation","Enviro Artist"],
                ["Picking up a stick from the ground","Tech"]
              ], true) ])
          ]),
          BANDE("IV","Tracking two teams at once",[
            LIGNE([
              T("In each team, two leads ran the **dailies**. I switched groups every other day, and they reported back to me."),
              T("In between, I went round the rooms to clear blockers, and took stock with each team at sprint reviews."),
              T("Vampire Hunter E-Cycle's outline shader, essential to the art direction, fell behind from the first sprint: I reworked the schedule, and we sacrificed VFX from the list to finish it."),
              T("I was sometimes asked for my view on the narrative, and I helped settle decisions in the System Designers' meetings.")
            ],[ IMG("images/rogue-vh-ld-la.webp","A Vampire Hunter E-Cycle room, from blocking to level art") ])
          ]),
          BANDE("V","Faking procedural generation",[
            LIGNE([
              T("On Mad Max Fury Rogue, procedural generation, the required core of the rogue-lite, turned out far more complex than planned and was already late at the end of the first sprint."),
              T("With the Game Design lead, I looked for a compromise with the instructors, acting as publishers. We chose to **simulate the procedural generation** with checkpoints prepared in the level design, giving the illusion of random generation. The jury approved it in advance, and the project was well received."),
              T("This agreement removed the risk of crunch and refocused the team on the core of the game.")
            ],[ CAROUSEL([["images/rogue-mm-ld-1.webp","The Mad Max Fury Rogue level in blocking"],["images/rogue-mm-ld-2.webp","The Mad Max Fury Rogue level in blocking, with its enemies"]]) ])
          ]),
          BANDE("VI","Testing and delivering",[
            LIGNE([
              T("On Vampire Hunter E-Cycle, QA stayed internal (questionnaire, God Mode, UX playtests), as there was no time to invite outside players. On Mad Max Fury Rogue, technical issues prevented testing."),
              T("On the day of the jury, both games were playable from start to finish. The cuts, such as three combat rooms without final level art, did not compromise the experience.")
            ],[ CAROUSEL([["images/rogue-vh-autel.jpg","Vampire Hunter E-Cycle in game"],["images/rogue-vh-ruines.jpg","Vampire Hunter E-Cycle: a ruined room"],["images/rogue-vh-galerie.jpg","Vampire Hunter E-Cycle: a castle gallery"],["images/rogue-vh-salle-rouge.jpg","Vampire Hunter E-Cycle: a castle room"],["images/rogue-mm-jeu.jpg","Mad Max Fury Rogue in game, with its interface"]]) ])
          ]),
          BANDE("VII","What I take away",[
            LIGNE([
              T("This workshop taught me to **decide on cuts before I need them**: with a list ready, you know what to leave aside when time runs short."),
              T("Looking back, I should have adapted the sprint goals shared by both teams along the way, given each team's difficulties."),
              T("I would also plan external playtests as early as possible, while there is still time to act on them.")
            ])
          ]),
          BANDE("VIII","The games on video",[
            LIGNE([
              T("A full run of each game, from the start screen to the end."),
              VIDEOS(VIDEOS_ROGUE)
            ])
          ]),
          BANDE("IX","The teams",[
            LIGNE([
              T("These two games are first and foremost the work of their teams."),
              EQUIPES(EQUIPES_ROGUE)
            ])
          ])
        ] }),
    P({ title:"Fusion Workshop – November 2025", 
        desc:"Three working weeks to deliver two racing vertical slices in Unreal Engine 5, each born from the fusion of a retro game and a licence.",
        carte:"Two racing games born from fusing a reference game's gameplay with a licence, with my first dailies and assets ranked by priority.",
        survol:{ moteur:"Unreal Engine", logo:"images/unreal-engine.png", items:["Producer","2 teams of 14 and 15","Racing · Fusion","3 weeks"] }, 
        infos:{ "Role":"Producer", "Team":"2 teams of 14 and 15 people", "Duration":"3 – 28 November 2025 (3 working weeks)", "Tools":"Excel" },
        apercu:"I was the producer for both teams in this workshop: three weeks to deliver a vertical slice of a racing game in Unreal Engine 5, fusing a reference game's gameplay with an assigned licence. HellStorm mixed *Motorstorm* with *Doom*, Wakfu Riders *Street Racer* with *Wakfu*. At the jury, **97% and 98% of tasks** were complete.",
        contenu:[
          BANDE("I","The project framework",[
            LIGNE([
              T("The brief asked for a few minutes of play, understandable without explanation, and a real fusion that kept the essence of the original game.\n\nThat was the whole difficulty: getting two games with a strong identity, not lost between the reference gameplay and the licence. I set up meetings to choose the art direction and set the iconic gameplay elements, then small-group meetings when needed."),
              T("My task was to keep the production management document: macro and micro plan, a weekly burndown chart, and a dashboard, overall and per person.")
            ],[ FICHE("Constraints",["Two games at once, for a single producer and 29 people","Three working weeks, from 3 to 28 November 2025","A III game aiming for AAA quality, sold as a premium title","Three reviews by the teaching staff before the jury"]) ]),
            LIGNE([ KEYART([
                      ["images/fusion-hs-keyart.jpg","HellStorm","Group 3 was given the gameplay of Motorstorm and the Doom licence, and turned them into an off-road race through hell."],
                      ["images/fusion-wk-keyart.jpg","Wakfu Riders","Group 4 was given the gameplay of Street Racer and the Wakfu licence, and turned them into a spell-slinging arcade race through a winegrowers' village."]
                    ]) ])
          ]),
          BANDE("II","Planning in four sprints",[
            LIGNE([
              T("Both teams followed **four sprints** aligned with the school's reviews: design, a prototype up to the 3Cs and blocking playtests, a build playable from start to finish, then polish and QA feedback.")
            ],[ CHIFFRES([["568","tasks tracked"],["97% and 98%","tasks completed (HellStorm, Wakfu Riders)"],["4","sprints"],["3","reviews before the jury"]]) ]),
            LIGNE([ CAROUSEL([["images/fusion-hs-macro.png","The HellStorm macro plan: phases, sprints and days off"],["images/fusion-wk-macro.png","The Wakfu Riders macro plan, on the same calendar"]],"pano") ]),
            LIGNE([
              T("Each team had its Excel backlog, sorted by epic and story (220 tasks for HellStorm, 348 for Wakfu Riders), with one tab per sprint and one per member."),
              T("Environment art was the heaviest area: 72 tasks for HellStorm, 131 for Wakfu Riders.")
            ],[ CAROUSEL([["images/fusion-wk-carte.jpg","The Wakfu Riders map under construction in Unreal Engine"],["images/fusion-wk-village.jpg","Wakfu Riders: the village and its vineyards in the editor"]]) ]),
            LIGNE([ CAROUSEL([["images/fusion-hs-backlog.png","Excerpt from the HellStorm backlog: epics, stories, difficulties, statuses, sprints and priorities"],["images/fusion-wk-backlog.png","Excerpt from the Wakfu Riders backlog"],["images/fusion-hs-dashboard.png","The HellStorm dashboard: overall progress and links to the sprints"],["images/fusion-wk-dashboard.png","The Wakfu Riders dashboard: 341 of 348 tasks done"]],"pano") ])
          ]),
          BANDE("III","Following two teams",[
            LIGNE([
              T("It was my first workshop with **dailies**. I handed them to each team's leads: with two groups, I could not attend every one, and the teams moved forward without depending on my presence. I took stock with them at the weekly reviews."),
              T("With the leads, I split the tasks between Game Artists and Game Designers, balancing everyone's workload."),
              T("On HellStorm, four documents, including the personas and the concept map, fell behind in sprint 3; I moved them to sprint 4, where they were finished.")
            ],[ CAROUSEL([["images/fusion-hs-monocycle-concept.jpg","HellStorm: the monocycle concept"],["images/fusion-hs-monocycle-3d-1.jpg","The monocycle modelled in 3D"],["images/fusion-hs-monocycle-3d-2.jpg","The monocycle, seen from the other side"],["images/fusion-hs-voiture-concept.jpg","HellStorm: the car concept"],["images/fusion-hs-voiture-3d.jpg","The car modelled in 3D"],["images/fusion-hs-ui.jpg","The map selection screen, being integrated"]]) ])
          ]),
          BANDE("IV","Ranking assets by priority",[
            LIGNE([
              T("The asset lists were **ranked by priority** from the start. On HellStorm, all 15 high-priority props were made; the 13 left aside were mostly variants of buildings and rocks."),
              T("On Wakfu Riders, 40 of 47 set assets were made, the remaining seven being low priority. Sounds, scored from 1 to 10 and sometimes with a fallback, reached 23 of 33."),
              T("During production, only two tasks were cut on HellStorm, including the matchmaking system, and five on Wakfu Riders.")
            ],[ FICHE("Left aside on Wakfu Riders",["The modular church and town hall","The weight, power and handling pickups","The respawn zone","The drift signs and feedback"]) ]),
            LIGNE([ CAROUSEL([["images/fusion-wk-recherches.webp","Wakfu Riders: vehicle research, including the barrel"],["images/fusion-wk-dinde.webp","Wakfu Riders: the turkey, modelled in Maya from its references"]]) ])
          ]),
          BANDE("V","Testing",[
            LIGNE([
              T("Wakfu Riders started **QA** in the first sprint by testing reference games such as F-Zero 99, then the blocking (twice in sprint 2) and the vertical slice (sprints 3 and 4)."),
              T("On HellStorm, delays in tech and programming pushed testing back: the QA questionnaire, ready in sprint 3, was only used in sprint 4.")
            ],[ CAROUSEL([["images/fusion-wk-ld-sketch.webp","Wakfu Riders: the level design sketch of the track"],["images/fusion-wk-blocking.webp","The track in blocking in Unreal Engine"],["images/fusion-wk-jeu.jpg","Wakfu Riders in game, at the foot of the giant tree"]]) ])
          ]),
          BANDE("VI","What I take away",[
            LIGNE([
              T("Asset lists ranked by priority from the start make cuts easy: what is missing at the end is already what matters least."),
              T("Looking back, I would have started HellStorm's playtests earlier, as Wakfu Riders did from the first sprint.")
            ])
          ]),
          BANDE("VII","The games on video",[
            LIGNE([
              T("Both full runs, from the menu to the finish line."),
              VIDEOS(VIDEOS_FUSION)
            ])
          ]),
          BANDE("VIII","The teams",[
            LIGNE([
              T("These two games are first and foremost the work of their teams."),
              EQUIPES(EQUIPES_FUSION)
            ])
          ])
        ] }),
    P({ title:"End-of-Year Projects: My First Two Productions – June 2025", 
        desc:"My first time managing two projects in parallel, tracked in Excel and Miro.", carte:"Two teams tracked in parallel in Excel and Miro, with sprint reviews for each.",
        survol:{ moteur:"Unreal / Unity", logos:["images/unreal-engine.png","images/unity.svg"], items:["Producer","2 teams of 12 to 13","Varied genres","4 weeks"] }, 
        infos:{ "Role":"Producer", "Team":"2 teams of 12 to 13 people", "Duration":"4 weeks", "Tools":"Excel · Miro" },
        resume:{ contexte:"Game Sup end-of-year project: two teams of 12 to 13 people, four weeks of development.",
                 role:"Producer for both projects, run in parallel.",
                 resultat:"" },
        decisions:[ "Two projects run in parallel for the first time, tracked in Excel and Miro.",
                    "Sprint reviews held for each team.",
                    "Task lists built together with the Art and Design leads." ],
        contenu:[
          IMG("", "Miro board")
        ] })
  ],
  perso: [
    P({ date:"October 2026", survol:{ items:["Producer","AA action-RPG · 15 people","Simulation","Jira · JQL"] }, cat:"Production management", title:"Jira and Agile Project: A Studio Simulation", 
        desc:"The production of a fictional AA action-RPG, structured on my own in Jira, from the boards to the risk register.",
        carte:"A fictional studio run in Jira with Scrum: sprints, bugs, risks and automations.",
        infos:{ "Role":"Producer (simulation, run solo)", "Project":"Fictional AA action-RPG · 15 people + 4 vendors", "Tools":"Jira · JQL", "Period":"October 2026", "Workload":"About 20 hours", "Training":"Agile with Atlassian Jira · Atlassian, via Coursera" },
        apercu:"To learn Jira on a realistic case, I single-handedly set up the fictional production of an **AA action-RPG** with 15 people and four vendors, modelled on Kena: Bridge of Spirits, then tested it through a simulated sprint.",
        contenu:[
          BANDE("I","The project framework",[
            LIGNE([
              T("My fictional game follows what Ember Lab has made public about Kena: three years of production, 15 people, and vendors for QA, part of the art and the music."),
              T("I ran this project alongside the Agile with Atlassian Jira course (Coursera), whose certificate I earned on 14 October 2026."),
              LIEN("Verify the certificate","https://coursera.org/verify/EQE4DN5JX2XG")
            ],[ FICHE("The constraints",["A 15-person team, on a free plan limited to 10 users","Jira cannot backdate a work item: the simulation runs in real time","Work done alone, playing every role"]) ])
          ]),
          BANDE("II","Organising the studio and its vendors",[
            LIGNE([
              T("I split the team into two squads of six, Gameplay and World, plus a Cross-team group. Vendors have their own squad, External, and an internal lead who approves their deliveries.")
            ],[ SCHEMA("squads","The team: two squads of six, a cross-team group and four vendors") ]),
            LIGNE([
              T("I **filed every ticket along four axes**: component, squad, version and label. Every view of the project then becomes a simple query.")
            ],[ CAROUSEL([["images/jira-versions.png","The project versions, with their exit criteria"],["images/jira-composants.png","Some of the 29 components: systems, disciplines and levels"],["images/jira-squad.png","The Squad field and its four values"],["images/jira-ticket.png","A Vertical Slice Story, sorted along the four axes"]]) ])
          ]),
          BANDE("III","Preparing the Vertical Slice",[
            LIGNE([
              T("Breaking down the Vertical Slice revealed two bottlenecks, the gameplay animator and the sound designer, and a critical path running through the vendors. So I committed the squads cautiously (21 points for Gameplay, 13 for World), and these findings opened the risk register."),
              T("Each sprint starts from a goal that can be checked in a demo. I wrote a Definition of Ready to enter a sprint and a Definition of Done to leave it.")
            ],[ CHIFFRES([["23","Stories in the Vertical Slice"],["126","Estimated points"],["13 and 15","Stories for the animator and the sound designer"],["3","Vendor deliveries blocking Stories"]]) ])
          ]),
          BANDE("IV","Giving everyone the right visibility",[
            LIGNE([
              T("In Jira, a board is just a view on a filter. I made **one per audience**: a Scrum board per squad, a Kanban for QA, one for vendors and a Production board for the whole project.")
            ],[ CAROUSEL([["images/jira-board-production.png","Production: the overview, with no sprint"],["images/jira-board-gameplay.png","Gameplay: the squad's sprint, grouped by Epic"],["images/jira-board-world.png","World: the squad's sprint, grouped by Epic"],["images/jira-board-vendors.png","Vendors: the deliveries expected from each vendor"]]) ]),
            LIGNE([
              T("I built a filter library for the Monday-morning questions: where the sprint stands, what is blocked, whether the scope has moved.")
            ],[ IMG("images/jira-filtres.png","The Vertical Slice scope filter and the saved filters") ]),
            LIGNE([
              T("Every step back for a Story is a named transition that I can count.")
            ],[ IMG("images/jira-workflow-dev.png","The Story and Task workflow") ])
          ]),
          BANDE("V","The bug pipeline",[
            LIGNE([
              T("I reworked the bug ticket for its two readers, QA and the producer, drawing on Harún H. Ali's *The Pocket Mentor for Video Game Testing*."),
              T("Severity says how broken the game is, priority says in which order to fix it. A serious but rare bug remains the producer's call.")
            ],[ IMG("images/jira-ticket-bug.png","A blocker bug reproduced 8 times out of 10, fixed and closed") ]),
            LIGNE([
              T("I automated the likelihood calculation from the reproduction rate, so it no longer depends on the tester.")
            ],[ IMG("images/jira-auto-repro.png","The rule that calculates the likelihood") ]),
            LIGNE([
              T("On the QA board, I set a work-in-progress limit for each column. When it overflows, the team finishes bugs before opening new ones.")
            ],[ CAROUSEL([["images/jira-board-qa.png","The QA-Bugs board, blockers at the top"],["images/jira-colonnes-qa.png","The columns and their work-in-progress limits"]]) ]),
            LIGNE([
              T("**A bug is never closed without a resolution**, which also makes reopenings countable.")
            ],[ SCHEMA("bugflow","The path of a bug, its ways back and its resolutions") ])
          ]),
          BANDE("VI","Testing the tool with a simulated sprint",[
            LIGNE([
              T("To test the reports, I simulated a first sprint per squad, compressed to one week, with eleven bugs including a blocker, a duplicate and a reopening.")
            ],[ IMG("images/jira-sprint-report.png","The Gameplay S01 sprint report, with four bugs added mid-sprint") ]),
            LIGNE([
              T("The **producer dashboard** tracks the sprint, build quality and risks. I added a control filter that lists incomplete tickets, so the figures stay reliable.")
            ],[ CAROUSEL([["images/jira-dashboard.png","The dashboard during the sprint"],["images/jira-dashboard-fin.png","The dashboard after the first sprint: control filter at zero, eleven bugs resolved"]]) ])
          ]),
          BANDE("VII","Automating repetitive tasks",[
            LIGNE([
              T("Every automation follows the same logic: an event, a condition, an action. Without the condition, the rule that starts a Story would restart it with every subtask.")
            ],[ SCHEMA("autoflow","Five rules of the space, read with the same logic") ]),
            LIGNE([
              T("The audit log helped me find what was failing, such as two fields with the same name.")
            ],[ CAROUSEL([["images/jira-automations.png","The rules active on the space"],["images/jira-audit-erreur.png","The audit log shows the failed calculation"],["images/jira-audit-correctif.png","The fixed trigger, with the field called by its ID"],["images/jira-flow-story.png","A subtask that starts moves its Story to In Progress"]]) ])
          ]),
          BANDE("VIII","Anticipating with a risk register",[
            LIGNE([
              T("I added a **Risk ticket type**, with a likelihood, an impact, a warning sign, a mitigation and a fallback plan."),
              T("Risk R4, scope creep, scores 12. Every addition must be offset by a removal, and the scope freezes two sprints before the milestone."),
            ],[ CAROUSEL([["images/jira-risque-r4.png","Risk R4, scope creep"],["images/jira-risques-liste.png","The seven risks and their status: five being mitigated, two monitored"],["images/jira-risques-matrice.png","The probability × impact matrix"]]) ]),
            LIGNE([
              T("An automation calculates the score, and the resolution says what happened: mitigated, occurred or obsolete.")
            ],[ SCHEMA("riskflow","The path of a risk, its resolutions and how its score is calculated") ])
          ]),
          BANDE("IX","What I take away",[
            LIGNE([
              T("I learned to **think of Jira as a database**: once tickets are well filed, a team or a milestone is just a query."),
              T("On a real project, I would open the risk register at kick-off, and simulate two full weeks in real time.")
            ])
          ])
        ] }),
    P({ date:"March 2026", survol:{ items:["Producer","AA game · 42 people","48-month production","Excel · Coda · ClickUp"] }, cat:"Production management", title:"Wyrdfall", desc:"Production plan for a 48-month AA game: team, budget, schedule, sales estimate and break-even point.", carte:"The team, budget and break-even point of a fictional 48-month AA game.", 
        infos:{ "Role":"Producer", "Context":"Production management · Game Sup", "Date":"March 2026", "Project":"AA · 42 people at peak", "Tools":"Excel · Coda · ClickUp", "Workload":"20 hours out of 90 (whole assignment)", "Deliverables":"Team · Planning · Budget · Market Analysis" },
        apercu:"For this exercise, I was the producer of Wyrdfall, a fictional AA game, from building the team to the break-even point. The result: **a €9M budget over 48 months**, break-even at around 451,000 sales and two ROI scenarios, in an Excel file that updates in one click.",
        contenu:[
          BANDE("I","The brief and my role",[
            LIGNE([
              T("I had to deliver a production management document in four parts: the team to build, the macro and micro plan in Coda and ClickUp, the budget in Excel and a sales estimate."),
              T("I chose an AA project comparable to GreedFall, with 42 people at peak production.")
            ],[ FICHE("Production management · shown here · 20 h",["Team plan","Macro plan and micro plan (Coda, ClickUp)","Development budget (Excel)","Sales estimate (Market Analysis)"]), FICHE("Other deliverables · 70 h",["High Concept document","Prototype"]) ])
          ]),
          BANDE("II","A clear, adjustable production file",[
            LIGNE([
              T("I wanted an Excel file that stayed readable and adaptable. **The budget recalculates in one click** when a member joins the studio, gains seniority or receives new software.")
            ],[ CAROUSEL([[EX1.nav,"Home page of the production file: buttons and navigation through colour-coded tabs"],[EX1.budget,"Budget overview: team, duration and budget by department"]]) ]),
            LIGNE([
              T("Wyrdfall has 36 months of production and 12 of live service, with 42 people, 25 of them on the live phase. The budget comes to €9,033,682, 78% of it salaries."),
              T("I built the team by production area, drawing on Sandfall Interactive's team for Clair Obscur: Expedition 33. After release, headcount drops to 25 to simulate other projects at the studio and a small team dedicated to the expansion.")
            ],[ CHIFFRES([["€9,033,682","Total Budget"],["42","People on the team"],["48 months","36 production · 12 live"],["78%","Share of salaries"]]) ])
          ]),
          BANDE("III","The Market Analysis and the break-even point",[
            LIGNE([
              T("To estimate Steam sales, I first **analysed competing games** released between 2014 and 2025, to draw usable averages. Today I would narrow this period to five years.")
            ],[ IMG(EX1.market,"Competitor analysis: sales, estimated revenue and averages") ]),
            LIGNE([
              T("From them I built two scenarios, one optimistic and one conservative, each in three risk levels.")
            ],[ CAROUSEL([[EX1.roiCons,"ROI estimate, conservative scenario: 250,000 followers, in high, average and low cases"],[EX1.roiOpti,"ROI estimate, optimistic scenario: average sales from the Market Analysis, in high, average and low cases"]]) ]),
            LIGNE([
              T("From a €49.99 price, I deducted Steam's share, taxes and the Unreal Engine royalty in one go, then refunds. To stay cautious, a sale brings in about €20: the budget is covered at around **451,000 sales**."),
              T("In the average conservative scenario, I estimate 482,000 sales, just above break-even, for an ROI of about +6.8%. Everything depends on the wishlist conversion rate, estimated from Steam followers (20% on average, 26% at best, 4.8% at worst), excluding other platforms and the DLC."),
            ],[ TABLEAU("Net profit and ROI by scenario · Total budget: €9,033,682",["Scenario","Estimated sales","Net profit (ROI)"],["Conservative: 250,000 followers", ["High", "626,600", "+ €4,639,128 (+ 51.4%)"], ["Average", "482,000", "+ €616,438 (+ 6.8%)"], ["Low", "115,680", "− €6,873,790 (− 76.1%)"], "Optimistic: average sales from the Market Analysis", ["High", "959,400", "+ €11,901,031 (+ 131.7%)"], ["Average", "738,000", "+ €5,741,809 (+ 63.6%)"], ["Low", "177,120", "− €5,726,628 (− 63.4%)"]]) ])
          ]),
          BANDE("IV","Planning a four-year project",[
            LIGNE([
              T("Finally, I had to plan **four years of project**, up to the DLC release, whereas our workshops last three weeks."),
              T("I placed the Epics and Stories across the whole production, taking features, levels and QA into account.")
            ],[ IMG(EX1.epic,"Macro plan: the production's Epics") ]),
            LIGNE([
              T("I added a detailed preproduction sprint to prepare the Vertical Slice."),
              T("I had to leave the logic of our very constrained sprints and reason about the needs that move the project from one sprint to the next.")
            ],[ IMG(EX1.sprint,"Pre-production sprint: tasks, priorities and story points") ])
          ]),
          BANDE("V","What I take away",[
            LIGNE([
              T("Looking back, **I underestimated the QA team's workload**, and the Sound Design team is undersized too."),
              T("I would also study the funding available to a studio of this size: public grants, bank loans or crowdfunding.")
            ])
          ])
        ] }),
    P({ date:"April 2025", survol:{ items:["Author of the GDD","Turn-based RPG","90 hours","67 pages"] }, cat:"Game Design and Narrative Design", title:"Castalie's Tears", 
        desc:"The Game Design Document for a mythology-inspired turn-based RPG, from the core loop to a Narrative Design level.", carte:"The Game Design Document for a turn-based mythological RPG: core loop, systems and their embodiment in the story.",
        infos:{ "Role":"Author of the GDD", "Context":"Game Design · Game Sup", "Date":"April 2025", "Workload":"90 hours", "Deliverable":"Game Design Document · 67 pages" },
        apercu:"For this Game Design exercise, I had to design a game around a mythical creature from an assigned country, Greece. I wrote the GDD for Castalie's Tears, a turn-based RPG, from the concept to a complete level, with one requirement: **every mechanic must make sense in the story**.",
        contenu:[
          BANDE("I","The idea and the concept",[
            LIGNE([
              T("I chose the naiads, water deities. The player is Castalie, guardian of the fountain of Delphi, who travels across Greece to save deities and fight Typhon's armies, joined by those she meets."),
              T("It is a single-player premium RPG for PC and Switch: **Dragon Quest XI meets Dragon Age: Inquisition**, in a world close to Immortals Fenyx Rising. A calm game that rewards thinking more than reflexes.")
            ],[ CAROUSEL([[CT.pitch,"The core statement: Castalie against Typhon"],[CT.one,"The one-liner and its three references"],[CT.info,"The project information sheet"]]) ])
          ]),
          BANDE("II","Intentions, pillars and core loop",[
            LIGNE([
              T("I started from values such as courage and cooperation, and themes such as survivor's guilt. These intentions became three gameplay pillars: fighting Typhon's tides, exploring a desolate world and growing your Source."),
              T("I also listed what the game will not contain, to keep the scope under control: multiplayer, grid combat, a skill tree, mini-games.")
            ],[ CAROUSEL([[CT.pillars,"The three gameplay pillars"],[CT.notdo,"What the game is not"]]) ]),
            LIGNE([
              T("The player manages their base, explores, fights, gathers, then crafts or trades. I labelled each step by its role in the game's economy, to check that the loop feeds itself as much as it consumes."),
              T("The game targets adults who play in short sessions, Achievers first and Explorers second in Bartle's taxonomy, looking for depth and choices.")
            ],[ IMG(CT.loop,"The core loop of Castalie's Tears") ])
          ]),
          BANDE("III","From mechanics to story",[
            LIGNE([
              T("Typhon defeated the gods and scattered their powers, the Divine Graces. Managing your base means protecting a sacred fountain, and every new skill is a power inherited from a fallen god."),
              T("The loot has a meaning too. Typhon's beasts devour fragments of Grace, so what the player picks up is also what the enemy craves.")
            ],[ CAROUSEL([[CT.realm,"The Realm of Light before the Fall"],[CT.typhon,"Typhon"],[CT.sealed,"A Sealed Temple"]]) ]),
            LIGNE([
              TABLEAU("One mechanic, one embodiment",["Mechanic","Narrative embodiment"],[["The Source (base management)","The sacred fountain of Delphi, which shelters refugees"],["Divine Grace (skills, crafting)","The powers of the fallen gods, scattered by Typhon"],["Companions (recruitment)","Minor deities, heroes and refugees to rescue"],["Sealed Temples (dungeons, bosses)","The ruins where the great gods are held"],["Progression","Castalie regaining confidence, from fragile Naiad to leader"]],true)
            ])
          ]),
          BANDE("IV","Castalie and the Temple of Apollo level",[
            LIGNE([
              T("Castalie lacks confidence and distrusts her powers. Over the adventure, she becomes a fighter and a leader."),
              T("The first level, the ruins of the Temple of Apollo, her mentor, is designed as **a path through memory**. Mosaics tell the past, and the intensity rises in steps up to the boss, where Castalie used to talk with Apollo.")
            ],[ IMG(CT.castalie,"Castalie, the Naiad of the Delphi spring","sm") ]),
            LIGNE([
              CAROUSEL([[CT.moodboard,"Level moodboard"],[CT.ld,"Level layout"],[CT.mol,"Molecular diagram: rooms and their links"],[CT.pacing,"Level intensity curve"]])
            ])
          ]),
          BANDE("V","What I take away",[
            LIGNE([
              T("A GDD has to connect intentions to mechanics, and mechanics to what the player feels. I tried to make that link readable, from pillar to level."),
              T("As a producer, this work helps me understand what we ask of design teams, estimate the scope and find the heart of a project when choices have to be made.")
            ])
          ])
        ] }),
    P({ date:"January 2025", survol:{ items:["Author of the study","Market analysis","Source cross-checking","30 slides"] }, cat:"Market analysis", title:"The African Video Game Market: The Case of Nigeria", 
        desc:"A study of the African video game market through Nigeria, where mobile and local audiences shape a model of its own, still held back by infrastructure.", carte:"A market driven by mobile and local audiences, still held back by infrastructure.",
        infos:{ "Role":"Author of the study", "Context":"Video game culture · Game Sup", "Date":"January 2025 · sources checked in October 2026", "Deliverable":"PowerPoint presentation · 30 slides" },
        apercu:"For this video game culture exercise, I wanted to explore a promising market I did not know: African video games, through the case of Nigeria, cross-checking my sources. I found a mobile, local model, driven by a young population but held back by infrastructure. My conclusion: budget, schedule, platform and payment method **are decided together**.",
        contenu:[
          BANDE("I","Research question and approach",[
            LIGNE([
              T("The market is still dominated by the West, Japan and China, while Africa is seeing recent growth. My question: **can we speak of an African model**, and how does it break away from the Western one?"),
              T("As a producer, I read this market through its constraints: network, electricity, purchasing power, access to payment. They explain the studios' choices.")
            ],[ CITATION("“The rise of the video game industry in Africa is attracting investors' attention, with significant annual growth.”","Nathan Bonnet, Afrikactus, 15 May 2024") ])
          ]),
          BANDE("II","A young, mobile market driven by demographics",[
            LIGNE([
              T("According to Mordor Intelligence, the African market is expected to grow from $2.14bn in 2024 to $3.72bn in 2029, about 11.6% a year against 9.3% worldwide. Newzoo puts it at $1.8bn on a different scope: I do not mix the two series. Africa accounts for less than 1% of the global market.")
            ],[ SCHEMA("marche","The African video game market, 2024-2029 (Mordor Intelligence), compared with the world market"), FICHE("A few pioneering studios",["South Africa: Celestial Games (1994)","Cameroon: Kiro'o Games (project started in 2003, studio founded in 2012)","Ghana: Leti Arts (2009)","Nigeria: Kuluya, Gamsole and Maliyo (around 2012)"]) ]),
            LIGNE([
              T("This market runs on **mobile**, which accounted for about 90% of revenue in 2022. The number of players ranges from 349 to over 600 million depending on the source, as they do not measure the same thing.")
            ],[ CHIFFRES([["200 M","mobile players (2022)"],["90%","of revenue from smartphones"],["> 60%","under 25"],["2.5 bn","inhabitants expected in 2050"]]) ])
          ]),
          BANDE("III","Nigeria: mobile, local studios",[
            LIGNE([
              T("In Nigeria, the industry revolves around four studios founded around 2012, including Maliyo Games and ChopUp, all focused on mobile."),
            ],[ ETAPES("ChopUp in a few dates",[["2011 · Danfo","Bayo Puddicombe creates the game Danfo: over one million downloads"],["2012 · Pledge 51, then ChopUp","Bayo Puddicombe and Zubair Abubakar found Pledge 51, the company that will launch ChopUp, on the back of Danfo's success"],["2016 · Production pace","4 employees and a new game every 6 weeks"]]) ]),
            LIGNE([
              T("More than half of Nigerian adults have no bank account. ChopUp works around this with mobile operators: a small weekly subscription charged to the phone bill. The result: 100,000 downloads in a few months.")
            ],[ IMG(NG.jagun,"Jagun: Clash of Kingdoms, ChopUp, 2015"), IMG(NG.chicken,"Chicken Escape, ChopUp, 2015") ]),
            LIGNE([
              T("These studios target the local audience. Daily life becomes game material, like Lagos traffic jams in Okada Ride (Maliyo, 2012), as do history and myths in Iwaju: Rising Chef (Maliyo, 2024)."),
              T("With few suitable degrees, studios also handle training, as Maliyo Games does with a free three-month online course.")
            ],[ IMG(NG.okada,"Okada Ride, Maliyo Games, 2012"), IMG(NG.iwaju,"Iwaju: Rising Chef, Maliyo Games, 2024"), IMG(NG.aurion,"Aurion: Legacy of the Kori-Odan, Kiro'o Games, 2016") ])
          ]),
          BANDE("IV","Esports and obstacles to growth",[
            LIGNE([
              T("Young people also drive esports. According to PwC, advertising revenue from games and esports in Nigeria are expected to grow from $111M in 2022 to $472M in 2027."),
              T("That figure contradicts the growth rate given in the same article, which would lead to about $156M. So I keep a trend rather than an amount: double-digit growth driven by smartphones.")
            ],[ TABLEAU("Video games and esports in Nigeria according to PwC, by edition",["Source","Period","Revenue"],[["Agence Ecofin, Nov. 2023","2022 → 2027","$111 → 472 m (advertising)"],["Nairametrics, Feb. 2025","2023 → 2024","$192 → 217 m"],["Nairametrics, Feb. 2025","2023 → 2028","$192 → 322 m (+10.9% a year)"]],true) ]),
            LIGNE([
              T("This model is still heavily constrained. I identified five obstacles, from the most material to the most structural."),
              TABLEAU("Obstacles to the sector's development",["Obstacle","Finding"],[["Internet","Fragile network, dependent on a limited number of submarine cables (BBC News)."],["Electricity","12 national grid collapses in 2024. 82% of African developers rate an uninterrupted power supply as critical (report by Maliyo Games, Hugo Obi's studio)."],["Purchasing power","Few computers and powerful smartphones: free games, designed for casual players."],["Training","Few long-form video game training programmes, if any."],["Funding","Revenue often tied to foreign donors. Observers quoted by Courrier International find these games “well-meaning”, an impression no figure backs up."]],true)
            ])
          ]),
          BANDE("V","What I take away",[
            LIGNE([
              T("The African market is growing, driven by a young population, mobile and esports, with games rooted in daily life and local history. It is still held back by infrastructure, purchasing power and funding."),
              T("On the production side, I take away that **a market is read first through its constraints**: ChopUp chose its platform, payment method and pace around them. I also learned to tell an established figure from a projection before building a plan on it.")
            ])
          ]),
          BANDE("VI","Sources",[ LIGNE([ SOURCES([["Agence Ecofin · Nigéria en 2027, les jeux vidéo généreront plus de revenus publicitaires que le streaming (PwC)", "https://www.agenceecofin.com/communication/1311-113619-nigeria-en-2027-les-jeux-video-genereront-plus-de-revenus-publicitaires-que-le-streaming-l-affichage-exterieur-et-la-presse-ecrite-pwc"], ["Afrik.com · Le gaming en Afrique, une révolution silencieuse", "https://www.afrik.com/le-gaming-en-afrique-une-revolution-silencieuse"], ["Jeune Afrique · L'Afrique, nouvel eldorado des jeux vidéo", "https://www.jeuneafrique.com/1526043/culture/lafrique-nouvel-eldorado-des-jeux-video/"], ["Sigma · Gaming in Nigeria is on the rise", "https://sigma.world/fr/news/gaming-in-nigeria-is-on-the-rise/"], ["Agence Ecofin · Le marché africain des jeux vidéo devrait croître de 11,62 % par an d'ici 2029", "https://www.agenceecofin.com/innovation/0810-122265-le-marche-africain-des-jeux-video-devrait-croitre-de-11-62-par-an-d-ici-2029-rapport"], ["Jeune Afrique · Le Nigeria part à la conquête du marché africain des jeux vidéo", "https://www.jeuneafrique.com/depeches/20777/politique/le-nigeria-part-a-la-conquete-du-marche-africain-des-jeux-video/"], ["Jeune Afrique · Les recettes du succès de ChopUp", "https://www.jeuneafrique.com/315910/economie-entreprises/reussite-les-recettes-du-succes-de-chopup-le-studio-de-jeux-videos-100-nigerian/"], ["Toonmed (blog) · Reportage : les recettes du succès de ChopUp", "https://toonmed.blogspot.com/2016/04/reportage-les-recettes-du-succes-de.html"], ["Agence Ecofin · Le Nigeria et l'Égypte, pays où la moitié des adultes sont non bancarisés", "https://www.agenceecofin.com/finance/0407-99376-le-nigeria-et-l-egypte-font-partie-des-7-pays-au-monde-dans-lesquels-la-moitie-des-adultes-sont-non-bancarises-rapport"], ["Banque de France · Afrique subsaharienne, la fracture financière entre hommes et femmes", "https://www.banque-france.fr/fr/publications-et-statistiques/publications/afrique-subsaharienne-la-fracture-financiere-entre-hommes-et-femmes"], ["Sport News Africa · Vers la naissance de la Confédération africaine du sport en ligne", "https://sportnewsafrica.com/articles/e-sport-vers-la-naissance-de-la-confederation-africaine-du-sport-en-ligne"], ["Mordor Intelligence · Marché mondial du jeu vidéo", "https://www.mordorintelligence.com/fr/industry-reports/global-gaming-market"], ["Courrier International · Comment le jeu vidéo se développe en Afrique", "https://www.courrierinternational.com/article/tendance-comment-le-jeu-video-se-developpe-en-afrique"], ["Africavox · L'Afrique, nouveau berceau de l'e-sport", "https://africavox.easybroadcast.fr/articles/l-afrique-nouveau-berceau-du-e-sports"], ["Afrikactus · L'essor du gaming africain sur la scène mondiale", "https://afrikactus.com/essor-du-gaming-africain-sur-la-scene-mondiale/"], ["ADF Magazine · Des start-ups nigérianes pénètrent le marché des jeux vidéo", "https://adf-magazine.com/fr/2014/10/des-start-ups-nigerianes-penetrent-le-marche-des-jeux-video/"], ["Smart Africa · Alliance home page", "https://smartafrica.org/fr/page-daccueil/"], ["AfriGamers · About", "https://afrigamers.com/a-propos-afrigamers/"], ["Tribune Online · 12 times national grid collapsed in 2024", "https://tribuneonlineng.com/updated-12-times-national-grid-collapsed-in-2024/"], ["Nairametrics · PwC lists 10 fastest-growing entertainment and media sectors in Nigeria 2024-2028", "https://nairametrics.com/2025/02/09/pwc-lists-10-fastest-growing-entertainment-and-media-sectors-in-nigeria-2024-2028/"],["World Economic Forum · How will Africa's youth population drive global growth?", "https://www.weforum.org/stories/youth/africa-youth-global-growth-digital-economy/"],["UN · Youth population trends (fact sheet)", "https://www.un.org/esa/socdev/documents/youth/fact-sheets/YouthPOP.pdf"],["Afrik.com · L'Afrique, avenir du gaming mondial ?", "https://www.afrik.com/l-afrique-avenir-du-gaming-mondial"],["Le360 · À Kigali, l'Afrique se cherche un modèle économique pour l'e-sport", "https://afrique.le360.ma/sports/des-millions-de-gamers-a-la-manette-a-kigali-lafrique-se-cherche-un-modele-economique-pour-le-sport_OLMQPD7RONHW3MNIOV3TPTZBWI/"],["AFJV · Abena Tournaments", "https://afjv.com/news/11374_abena-tournaments-tournoi-feminin-afrocaribeen-tekken8.htm"],["Linda Ikeji · Mobo Game Jam (Edu360 et Kucheza Gaming)", "https://www.lindaikejisblog.com/2020/12/mobo-game-jam-edu360-kucheza-drive-social-impact-through-gaming.html"],["Maliyo Games · Programmes de formation", "https://www.maliyo.com/programme/"],["Stuff South Africa · GameOn with HP, hackathon", "https://stuff.co.za/2024/10/11/get-your-gameon-with-hps-new-hackathon/"],["HP Gaming Garage", "https://www.hpgaminggarage.com/"],["Game Camp Cities · La CASE signe avec HP", "https://www.gamecampcities.pro/post/la-conf%C3%A9d%C3%A9ration-esport-africaine-signe-son-premier-partenaire-strat%C3%A9gique-continental-le-groupe-h?lang=fr"],["Pulse Nigeria · TCN restores power in Kaduna, Kano, Bauchi and Gombe", "https://www.pulse.ng/articles/news/local/tcn-restores-power-in-kaduna-kano-bauchi-and-gombe-after-prolonged-blackout-2024111910462282759"],["Carry1st · Africa's gaming market reaches $1.8bn in 2024 (with Newzoo)", "https://carry1st.com/press/africas-gaming-market-reaches-1-8bn-sixfold-growth-vs-row-driven-by-32mn-new-gamers-in-2024"],["Peoples Gazette · 210 millions d'abonnés mobiles actifs (NCC, 2022)", "https://gazettengr.com/nigerias-mobile-subscribers-hit-210-million-in-august-ncc/"],["Techpoint · Jagun: Clash of Kingdoms (2015)", "https://techpoint.africa/general/jagun-clash-of-kingdoms-chopup/"],["TechCabal · Pledge 51, the company behind ChopUp", "https://techcabal.com/2014/08/29/tayo-oviosu-and-others-invest-in-chopup/"],["Games Industry Africa · Olivier Madiba et Kiro'o Games", "https://gamesindustryafrica.com/2019/09/16/profile-olivier-madiba"],["GameDev Reports · rapport de Maliyo Games sur l'industrie africaine", "https://gamedevreports.substack.com/p/maliyo-games-the-state-of-the-african"]]) ]) ])
        ] })
  ]
};
/* Identifiants créés automatiquement à partir des titres */
Object.entries(PROJECTS_FR).forEach(([key,list])=>{const seen={};list.forEach(p=>{
  let b=p.id||p.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"projet";
  seen[b]=(seen[b]||0)+1;p.id=seen[b]>1?b+"-"+seen[b]:b;p.key=key;});});
/* Version anglaise : mêmes projets dans le même ordre ; images, bandeau et réglages d'affichage viennent de la version française */
const COMMUNS = ["img","bandeau","video","large","nocover","une","wip"];
Object.entries(PROJECTS_EN).forEach(([key,list])=>list.forEach((p,i)=>{const fr=PROJECTS_FR[key][i];p.id=fr.id;p.key=key;COMMUNS.forEach(c=>{if(c in fr)p[c]=fr[c];});}));
let PROJECTS = PROJECTS_FR;

const SECTIONS_FR = [
  {key:"pro",  label:"Projets professionnels", route:"#/pro",  intro:"Les productions que j'ai menées comme producer à Game Sup : workshops et projets de fin d'année."},
  {key:"perso",label:"Projets personnels",     route:"#/perso",intro:"Mes projets personnels et mes exercices de production, de Game Design et d'analyse de marché."}
];
const SECTIONS_EN = [
  {key:"pro",  label:"Professional Projects", route:"#/pro",  intro:"The productions I led as a producer at Game Sup: workshops and end-of-year projects."},
  {key:"perso",label:"Personal Projects",     route:"#/perso",intro:"My personal projects and my production, game design and market-analysis exercises."}
];
let SECTIONS = SECTIONS_FR;

/* Votre CV (page Infos) :
   image : visuel du CV affiché sur la page (fichier PNG ou JPG, ex. cv/cv-apercu.jpg)
   pdf   : fichier proposé au téléchargement (ex. cv/MERLE_Thibault_CV_PROD.pdf : remplacez ce fichier pour mettre le CV à jour). Vide = le bouton imprime le visuel, ce qui permet de l'enregistrer en PDF. */
/* ===================================================================
   PAGE INFOS : compétences, outils, puis langues, diplômes et loisirs.
   Outils : écrivez "Nom" ou "Nom|images/logo.png" pour afficher un logo.
   Chaque bloc : icône (voir ICONES dans app.js), catégorie, liste.
   =================================================================== */
const INFOS_FR = {
  intro: "Mon parcours en quelques blocs. Le CV complet (en anglais) est à consulter ou à télécharger.",
  competencesTitre: "Compétences",
  competences: [
    { icone:"planning", titre:"Production", items:["Production Agile et Scrum","Planification des jalons et des sprints","Coordination de plusieurs équipes","Suivi de production et listes de tâches","Budget et prévisions"] },
    { icone:"design", titre:"Game Design", items:["Game Design Document","Boucle de gameplay et systèmes","Typologies de joueurs et personas"] },
    { icone:"narration", titre:"Narrative Design", items:["Worldbuilding","Écriture de personnages","Quest Design","Lien entre mécaniques et récit"] },
    { icone:"analyse", titre:"Analyse", items:["Analyse de marché et estimation des ventes","Seuil de rentabilité et ROI","Recherche documentaire et critique des sources"] },
    { icone:"equipe", titre:"Communication et encadrement", items:["Communication intra- et inter-équipes","Gestion d\'événements","Transmission des savoirs et accompagnement","Adaptation du discours aux interlocuteurs"] }
  ],
  outilsTitre: "Outils",
  outilsIntro: "Les outils que j'utilise pour planifier, suivre et faire circuler l'information.",
  outils: [
    { icone:"planning", titre:"Planification et suivi", items:["Jira","Excel","Coda","ClickUp","Miro"] },
    { icone:"equipe", titre:"Documentation et communication", items:["PowerPoint","OneDrive","Discord"] },
    { icone:"outils", titre:"Moteurs utilisés par mes équipes", items:["Unreal Engine|images/unreal-engine.png","Unity|images/unity.svg"] }
  ],
  autresTitre: "Langues, diplômes et certifications",
  autres: [
    { icone:"langues", titre:"Langues", items:["Français : langue maternelle","Anglais : courant","Espagnol : notions","Grec moderne : en apprentissage"] },
    { icone:"diplome", titre:"Diplômes et certifications", items:["Certification Conception et Game Design, Game Sup (2023‑2027, en cours)","Certificat Agile with Atlassian Jira, Atlassian via Coursera (2026)","Master d'anthropologie religieuse de la Méditerranée antique, École Pratique des Hautes Études (2018‑2020)"] }
  ],
  loisirsTitre: "Loisirs",
  loisirs: [
    { icone:"loisirs", titre:"Jeu de rôle sur table", items:["Maître du jeu depuis 5 ans","Campagnes et univers homebrew","D&D 5e, MythCraft"] },
    { icone:"strategie", titre:"Jeux de stratégie", items:["4X","RTS","Wargames"] },
    { icone:"lecture", titre:"Lecture", items:["Tolkien","Fantasy épique","LitRPG"] },
    { icone:"ecriture", titre:"Écriture créative", items:["Romans","Poésie"] }
  ]
};
const INFOS_EN = {
  intro: "My background at a glance. The full CV can be viewed or downloaded.",
  competencesTitre: "Skills",
  competences: [
    { icone:"planning", titre:"Production", items:["Agile and Scrum production","Milestone and sprint planning","Multi-team coordination","Production tracking and task lists","Budget planning and forecasting"] },
    { icone:"design", titre:"Game Design", items:["Game Design Documentation","Gameplay loop and systems","Player typologies and personas"] },
    { icone:"narration", titre:"Narrative Design", items:["Worldbuilding","Character writing","Quest Design","Linking mechanics and story"] },
    { icone:"analyse", titre:"Analysis", items:["Market analysis and sales forecasting","Break-even point and ROI","Desk research and source criticism"] },
    { icone:"equipe", titre:"Communication and leadership", items:["Intra- and cross-team communication","Event management","Knowledge transfer and coaching","Tailoring communication to stakeholders"] }
  ],
  outilsTitre: "Tools",
  outilsIntro: "The tools I use to plan, track and keep information flowing.",
  outils: [
    { icone:"planning", titre:"Planning and tracking", items:["Jira","Excel","Coda","ClickUp","Miro"] },
    { icone:"equipe", titre:"Documentation and communication", items:["PowerPoint","OneDrive","Discord"] },
    { icone:"outils", titre:"Engines used by my teams", items:["Unreal Engine|images/unreal-engine.png","Unity|images/unity.svg"] }
  ],
  autresTitre: "Languages, degrees and certificates",
  autres: [
    { icone:"langues", titre:"Languages", items:["French: native","English: fluent","Spanish: basic","Modern Greek: learning"] },
    { icone:"diplome", titre:"Degrees and certificates", items:["Game Design and Concept Development certification, Game Sup (2023‑2027, in progress)","Agile with Atlassian Jira certificate, Atlassian via Coursera (2026)","Master's in Religious Anthropology of the Ancient Mediterranean, École Pratique des Hautes Études (2018‑2020)"] }
  ],
  loisirsTitre: "Hobbies",
  loisirs: [
    { icone:"loisirs", titre:"Tabletop RPGs", items:["Game master for 5 years","Homebrew campaigns and worlds","D&D 5e, MythCraft"] },
    { icone:"strategie", titre:"Strategy games", items:["4X","RTS","Wargames"] },
    { icone:"lecture", titre:"Reading", items:["Tolkien","Epic fantasy","LitRPG"] },
    { icone:"ecriture", titre:"Creative writing", items:["Novels","Poetry"] }
  ]
};

const CV_VISUAL = {
  image: "cv/cv-apercu-v9.jpg",
  pdf: "cv/MERLE_Thibault_CV_PROD_v9.pdf",
  filename: "MERLE_Thibault_CV_PROD.pdf",   // nom du fichier téléchargé
  pdfNB: "cv/MERLE_Thibault_CV_PROD_v9_NB.pdf",   // version noir et blanc, pour l'impression
  filenameNB: "MERLE_Thibault_CV_PROD_imprimable.pdf"
};

/* Page « Mentions légales et confidentialité » (lien en pied de page).
   À METTRE À JOUR si vous changez d'hébergeur, d'adresse e-mail, ou si vous ajoutez
   un formulaire, des statistiques de visite ou un service externe.
   Chaque section : [titre, [paragraphes]]. Les liens s'écrivent [libellé](https://...). */
const LEGAL_UPDATED = { fr: "27 octobre 2026", en: "27 October 2026" };
const LEGAL_FR = [
  ["Éditeur du site", [
    "Ce site est le portfolio personnel de **Thibault Merle**, édité à titre non professionnel et sans activité commerciale.",
    "Contact : [merle.thibault@orange.fr](mailto:merle.thibault@orange.fr)",
    "Directeur de la publication : Thibault Merle."
  ]],
  ["Hébergeur", [
    "**GitHub, Inc.** (service GitHub Pages)",
    "88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis",
    "Téléphone : +1 877 448 4820 · Site : [github.com](https://github.com)"
  ]],
  ["Propriété intellectuelle", [
    "Les textes, la mise en page et les visuels créés pour ce site sont la propriété de Thibault Merle. Toute reproduction sans autorisation est interdite.",
    "Les visuels issus de projets d'équipe, de studios ou d'écoles (dont Game Sup) restent la propriété de leurs ayants droit respectifs et sont présentés à titre de démonstration professionnelle. Les marques et jeux cités appartiennent à leurs propriétaires.",
    "Si vous êtes titulaire de droits sur un contenu et souhaitez son retrait, écrivez-moi : il sera retiré rapidement.",
    "Les noms, rôles et liens LinkedIn des membres des équipes sont publiés pour créditer leur travail. Toute personne citée peut demander la modification ou le retrait de ses informations en m'écrivant."
  ]],
  ["Données personnelles et cookies", [
    "Ce site ne comporte ni formulaire, ni compte, ni outil de mesure d'audience, ni publicité. Il ne dépose aucun cookie.",
    "Vos choix de langue (FR / EN) et d'affichage (mode clair ou mode nuit) sont seulement enregistrés dans votre navigateur, sur votre appareil. Ils ne sont transmis à personne.",
    "**Hébergement :** comme tout hébergeur, GitHub enregistre des données techniques de connexion (dont l'adresse IP) pour la sécurité du service. Voir la [déclaration de confidentialité de GitHub](https://docs.github.com/fr/site-policy/privacy-policies/github-general-privacy-statement).",
    "**Polices de caractères :** les polices Inter et Bricolage Grotesque sont hébergées sur ce site, sans aucun transfert de données vers un service extérieur.",
    "**Contact par e-mail :** si vous m'écrivez, votre message sert uniquement à vous répondre et n'est pas partagé.",
    "Vous pouvez exercer vos droits d'accès, de rectification et de suppression en m'écrivant à l'adresse ci-dessus, et adresser une réclamation à la [CNIL](https://www.cnil.fr)."
  ]],
  ["Liens externes", [
    "Certaines pages renvoient vers des sites tiers (sources, articles). Je ne suis pas responsable de leur contenu."
  ]],
  ["Droit applicable", [
    "Ce site et les présentes mentions sont soumis au droit français."
  ]]
];
const LEGAL_EN = [
  ["Publisher", [
    "This site is the personal portfolio of **Thibault Merle**, published on a non-professional, non-commercial basis.",
    "Contact: [merle.thibault@orange.fr](mailto:merle.thibault@orange.fr)",
    "Publication director: Thibault Merle."
  ]],
  ["Hosting", [
    "**GitHub, Inc.** (GitHub Pages service)",
    "88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States",
    "Phone: +1 877 448 4820 · Website: [github.com](https://github.com)"
  ]],
  ["Intellectual property", [
    "The texts, layout and visuals created for this site belong to Thibault Merle. Any reproduction without permission is prohibited.",
    "Visuals from team, studio or school projects (including Game Sup) remain the property of their respective owners and are shown for professional demonstration purposes. The brands and games mentioned belong to their owners.",
    "If you hold rights to any content and would like it removed, please contact me and it will be taken down promptly.",
    "Team members' names, roles and LinkedIn links are published to credit their work. Anyone mentioned can ask for their information to be changed or removed by contacting me."
  ]],
  ["Personal data and cookies", [
    "This site has no forms, no accounts, no analytics and no advertising. It sets no cookies.",
    "Your language (FR / EN) and display (light or dark mode) choices are only stored in your browser, on your device. They are not sent to anyone.",
    "**Hosting:** like any host, GitHub records technical connection data (including IP addresses) for security purposes. See [GitHub's privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).",
    "**Fonts:** the Inter and Bricolage Grotesque fonts are hosted on this site, so no data is sent to an outside service.",
    "**Email contact:** if you write to me, your message is only used to reply and is not shared.",
    "You may exercise your rights of access, rectification and erasure by writing to the address above, and lodge a complaint with the [CNIL](https://www.cnil.fr) (French data protection authority)."
  ]],
  ["External links", [
    "Some pages link to third-party websites (sources, articles). I am not responsible for their content."
  ]],
  ["Governing law", [
    "This site and this notice are governed by French law."
  ]]
];
/* ================== FIN DE LA ZONE À MODIFIER ================== */
