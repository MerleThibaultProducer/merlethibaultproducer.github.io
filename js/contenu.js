/* =====================================================
   ✏️  CONTENU DU SITE – c'est le seul fichier à modifier
   Textes (FR et EN), projets, CV et mentions légales.
   Les images se trouvent dans le dossier images/ :
   pour en changer une, remplacez le fichier ou modifiez son chemin ici.
   ===================================================== */
const SITE_FR = {
  prenom: "Thibault", nom: "Merle",
  titre: "Junior Associate Producer",
  accueilTitre: "Junior Associate Producer, formé à Game Sup",   // grand titre de la page d'accueil
  photo: "images/portrait.jpg",   // fichier dans le dossier images/. Vide = initiales.
  intro: [
    "Je m'appelle Thibault et je suis en dernière année à Game Sup. Sur quatre productions d'école, j'ai planifié et suivi des projets avec **jusqu'à quatre équipes en même temps**, des premiers jalons jusqu'aux playtests. **J'adapte la méthode de production à chaque équipe** après l'avoir écoutée, et je veille à ce que chacun sache où en est le projet.",
    "Un master d'anthropologie et cinq ans d'enseignement m'ont appris à expliquer et à transmettre. Je recherche aujourd'hui **un stage de fin d'études en production à partir de janvier 2027**, partout en France ou en télétravail."
  ],
  email: "merle.thibault@orange.fr", ville: "",
  linkedin: "https://www.linkedin.com/in/thibault-merle-946187311",
  legal: [
    "© 2026 Thibault Merle – Tous droits réservés.",
    "Site hébergé par GitHub Pages (GitHub, Inc.)."
  ]
};
const SITE_EN = {...SITE_FR,
  accueilTitre: "Junior Associate Producer, trained at Game Sup",
  intro: [
    "My name is Thibault and I'm in my final year at Game Sup. Across four school productions, I have planned and tracked projects with **up to four teams at once**, from the first milestones to the playtests. **I adapt the production method to each team** after listening to its needs, and I make sure everyone knows where the project stands.",
    "A master's in anthropology and five years of teaching taught me to explain and pass on knowledge. I am now looking for **a final-year production internship starting in January 2027**, anywhere in France or remotely."
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
const CAROUSEL=items=>({k:"car",items});
const EQUIPES=groupes=>({k:"teams",groupes});
const KEYART=items=>({k:"keyart",items});
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
        M("Théo David","https://www.linkedin.com/in/th%C3%A9o-david-94080a3b6/","Technical Art") ] }
];

const PROJECTS_FR = {
  pro: [
    P({ title:"Projets de fin d'année : quatre jeux en parallèle – Mai-juin 2026", large:true, nocover:true,   // nocover:true = pas de grande image en tête de la page de détails
        desc:"Une promotion entière, un seul producer : de la mise en place de la production à la livraison au jury, en passant par une crise à mi-parcours.", carte:"Toute une promotion et un seul producer, avec une méthode Agile intégrée aux jalons Waterfall de l'école.",
        img:PRO1.thumb,
        infos:{ "Rôle":"Producer", "Équipe":"4 équipes de 13 à 14 personnes (53 au total)", "Durée":"27 mai – 24 juin 2026", "Outils":"Excel · PowerPoint (OneDrive) · Discord" },
        survol:{ moteur:"Unreal Engine", logo:"images/unreal-engine.png", items:["Producer","4 équipes","Genres variés","4 semaines"] },
        apercu:"Pour le projet de fin d'année de Game Sup, toute la promotion a développé quatre jeux en quatre semaines, et j'en étais le producer, en lien avec les intervenants qui jouaient le rôle d'éditeurs. J'ai adapté une **méthode Agile** aux jalons Waterfall de l'école, mis en place un suivi Excel pour chaque groupe et fait le lien entre l'encadrement et les équipes au quotidien. Après une crise de direction artistique en deuxième semaine, j'ai organisé deux sessions de playtest communes aux quatre équipes, puis redéfini les priorités avec chacune. Les quatre jeux ont été livrés au jury, avec **93 % des 1 387 tâches terminées**.",
        contenu:[
          BANDE("I","Le cadre du projet",[
            LIGNE([
              T("Comme chaque fin d'année à Game Sup, les promotions travaillent en équipe sur un projet de trois à quatre semaines. Cette édition commençait par plusieurs phases de conception et de sélection des propositions, qui ont abouti à quatre sujets aux genres variés.")
            ],[ FICHE("Les contraintes",["Quatre jeux à produire en même temps","Des jalons imposés par l'école : Proof of Concept, Alpha, Bêta","Un seul producer pour plus de cinquante personnes","Quatre semaines, sans marge pour rattraper un retard"]) ]),
            LIGNE([ KEYART([
                      ["images/fda-castor.jpg","Le Castor et l'Écureuil","Un puzzle platformer où des animaux tentent de sauver leur environnement menacé en neutralisant les infrastructures humaines qui détruisent la nature de l'Anjou."],
                      ["images/fda-glow.jpg","Project GLOW","Un jeu d'action-aventure à la troisième personne, dans l'esprit d'inFAMOUS Second Son, où un adolescent rebelle doté de pouvoirs de portail doit renverser la corporation qui corrompt les gangs et pollue la ville.",1],
                      ["images/fda-insight.jpg","Insight","Un couple marié résout des énigmes et relève des épreuves grâce aux pouvoirs que leur confèrent les yeux qu'ils découvrent, pour atteindre chacun son objectif dans un manoir des années 1930 au nord du Massachusetts."],
                      ["images/fda-flowering.jpg","The Flowering Dead","Un boss rush où des survivants luttent pour leur vie dans un monde post-apocalyptique envahi de plantes et d'animaux mutants."]
                    ]) ])
          ]),
          BANDE("II","Organiser quatre équipes en parallèle",[
            LIGNE([
              T("Avec quatre jeux et plus de cinquante personnes, je savais dès le départ que je ne pourrais pas être dans chaque salle en permanence. Il fallait pourtant que les consignes des intervenants arrivent de la même façon à tous les groupes. Nous avons donc **lancé les productions en promotion entière**, le lendemain de la sélection. Tout le monde a entendu les mêmes consignes au même moment, et nous avons pu poser ensemble l'organisation, les outils et la méthode, avant de les affiner groupe par groupe."),
              T("Pour garder un lien direct avec chaque équipe, j'ai désigné avec les intervenants **deux référents par groupe**, un pour les Game Designers et un pour les Game Artists. Cela n'a pas tout réglé : quand j'étais en réunion avec un groupe, les trois autres avançaient sans moi. **Les dailies**, avec les référents et toute l'équipe, ont pris le relais pour que le suivi continue en mon absence, et je suis resté l'interlocuteur entre les intervenants et les équipes au quotidien, y compris entre les jalons."),
              T("Avec le recul, ces dailies ne suffisaient pas à donner à chacun une vision claire de l'avancée du projet. Sur un prochain projet, je les structurerais mieux, sur le modèle du Daily Scrum : quinze minutes au plus, centrées sur l'objectif du sprint et les blocages, pour garder des réunions courtes mais productives.")
            ],[ SCHEMA("orga") ])
          ]),
          BANDE("III","Planifier et suivre la production",[
            LIGNE([
              T("L'école fixait chaque jalon (Proof of Concept, Alpha, Bêta) avec ses livrables attendus, en Waterfall, jusqu'à la Vertical Slice de fin de projet. À l'intérieur de ce cadre, chaque équipe travaillait en **Agile, par sprints et itérations** adaptés à son projet. Il me fallait donc relier les deux, avec un suivi assez homogène pour comparer les quatre groupes et repérer les retards tôt."),
              T("J'ai construit ce suivi sur Excel, à deux niveaux. Pour chaque groupe, un **macro-planning** pose les sprints et les jalons de l'école. Un **micro-planning** rattache ensuite chaque tâche à un sprint, une priorité, une difficulté et un statut : au total, **1 387 tâches** ont été suivies. Les documents de travail étaient partagés dans un PowerPoint commun sur OneDrive, et chaque groupe avait son propre espace Discord.")
            ],[ IMG(PRO1.macro,"Le macro-planning Excel de chaque groupe : sprints et jalons (Proof of Concept, Alpha, Bêta)") ]),
            LIGNE([
              T("Tenir près de 1 400 statuts à jour demandait une attention de tous les instants, mais c'est ce qui rendait visibles les retards et les tâches abandonnées (kills), sprint par sprint. À la livraison, **93 % des tâches étaient terminées** : les 7 % restants correspondent à ces retards et à ces kills. Ce qui m'a manqué, et c'est la première chose que je changerais, ce sont des **livrables de fin de sprint plus précis** pour chaque spécialité : l'avancée était parfois difficile à vérifier concrètement.")
            ],[ IMG(PRO1.micro,"Extrait du micro-planning d'un des groupes : tâches, sprints, priorités, difficultés et statuts") ])
          ]),
          BANDE("IV","Gérer la crise de direction artistique",[
            LIGNE([
              T("En deuxième semaine, un même problème est apparu dans les quatre groupes : **la direction artistique était confuse**, et les membres peinaient à se représenter les références. Les retards ont vite atteint deux à trois jours, et je sentais venir **le risque de crunch**."),
              T("Nous avons organisé des réunions d'urgence avec chaque groupe et **suspendu la production pendant une journée et demie**. Cette pause nous a permis de comprendre d'où venait le problème : des références trop vastes et peu précises, et une passe de recherche trop courte au démarrage, parce que nous pensions que celle de la sélection suffirait.")
            ],[ SCHEMA("planning","Calendrier de la production : sprints, jalons, crise de mi-parcours et playtests") ]),
            LIGNE([
              T("Chaque groupe vivait la crise à sa manière : il n'y avait donc pas de réponse unique. Pour l'un, j'ai décidé, en accord avec les référents des disciplines, **d'abandonner plusieurs assets** qui sortaient du cadre ou n'étaient plus prioritaires. Pour un autre, nous avons revu le Level Art et le shader atmosphérique."),
              T("Si c'était à refaire, je ferais créer dès le départ **une petite scène de référence dans le moteur**, avec un prop à la qualité visée, les textures souhaitées et les intentions de lumière et de caméra.")
            ],[ IMG(PRO1.kill,"Tâches supprimées (kills) dans le suivi de l'un des groupes") ])
          ]),
          BANDE("V","Organiser les playtests et redéfinir les priorités",[
            LIGNE([
              T("Après la crise, il ne restait que deux semaines. Il fallait décider où mettre l'effort, et accepter d'abandonner certaines choses, sans faire peser la fin du projet sur les équipes. J'ai donc organisé **deux sessions de playtest communes aux quatre groupes**, calées sur le planning des autres promotions pour que des joueurs extérieurs puissent venir."),
              T("Pour que les retours soient exploitables, chaque équipe a préparé **un questionnaire structuré**. Celui de « Le Castor et l'Écureuil », par exemple, couvrait les personnages, la cohérence du design et la prise en main, avec des réponses notées de 1 à 7, et a recueilli **22 réponses**."),
              T("Les retours ont été nombreux, et souvent critiques, à un moment où le moral était déjà entamé. Avec chaque équipe, nous les avons triés pour garder les points les plus importants, puis **j'ai redéfini les priorités et réorganisé les plannings**. Voir des inconnus jouer aux projets a aussi redonné de l'énergie aux équipes : malgré les critiques, les jeux plaisaient.")
            ],[ CAROUSEL([["images/fda-playtest-form.jpg","Le formulaire de retour du playtest de « Le Castor et l'Écureuil » : 22 réponses"],["images/fda-playtest-perso.jpg","Une section du questionnaire : l'appréciation des personnages"],["images/fda-playtest-coherence.jpg","Une section du questionnaire : la cohérence du design, notée de 1 à 7"]]) ])
          ]),
          BANDE("VI","Ce que j'en retiens",[
            LIGNE([
              T("C'était la première fois que l'on me confiait la production d'une promotion entière. La crise de mi-parcours m'a appris à mettre de côté ce que je croyais savoir pour **écouter les besoins propres à chaque équipe**. J'ai aussi appris à **déléguer**, et à poser dès le départ des canaux de communication clairs, pour qu'aucune équipe ne se sente livrée à elle-même.")
            ])
          ]),
          BANDE("VII","Les équipes",[
            LIGNE([
              T("Ces quatre jeux sont avant tout le travail de leurs équipes."),
              EQUIPES(EQUIPES_FDA)
            ])
          ])
        ] }),
    P({ title:"Workshop Rogue-lite – Février 2026", large:true, nocover:true,
        desc:"Deux équipes, deux licences de films d'animation et quinze jours pour livrer deux rogue-lites jouables sous Unity.",
        carte:"Deux rogue-lites sous Unity en quinze jours, avec un planning commun et un suivi quotidien des tâches pour chaque équipe.",
        survol:{ moteur:"Unity", logo:"images/unity.svg", items:["Producer","14 personnes par équipe","Rogue-lite"] }, img:"images/rogue-thumb.jpg",
        infos:{ "Rôle":"Producer", "Équipe":"2 équipes de 14 personnes", "Durée":"2 – 20 février 2026", "Outils":"Excel" },
        apercu:"Pour ce workshop de Game Sup, deux équipes avaient quinze jours pour livrer chacune un **rogue-lite en 2,5D sous Unity**, d'après une licence imposée : *Vampire Hunter D: Bloodlust* pour l'une, *Mad Max: Fury Road* pour l'autre. J'étais le producer des deux. J'ai tenu un **planning commun** calé sur les jalons de l'école et un suivi quotidien des tâches propre à chaque équipe. Vampire Hunter E-Cycle et Mad Max Fury Rogue ont été livrés au jury avec **94 % et 92 % des tâches terminées**, sur 573 tâches suivies.",
        contenu:[
          BANDE("I","Le cadre du projet",[
            LIGNE([
              T("Le cahier des charges était dense pour quinze jours : une boucle complète « run, mort, amélioration », un HUB où améliorer son personnage, au moins cinq salles de combat et trois salles iconiques assemblées procéduralement, une économie de monnaies, un boss et un combat avec esquive, combo et capacité. S'y ajoutaient les menus, l'écran de score, les splashscreens et toute la documentation : High Concept, Level Design, narration, direction artistique et gestion de production.")
            ],[ FICHE("Les contraintes",["Deux jeux à produire en même temps","Cinq jalons en quinze jours : Intentions, Proof of Concept, Alpha, Bêta, Gold","Une licence de film d'animation imposée à chaque équipe","Le conseil de l'école : ne pas voir trop grand"]) ]),
            LIGNE([
              T("Chaque équipe a reçu sa licence dans une liste de films et de séries d'animation. Le Groupe 3 en a tiré **Vampire Hunter E-Cycle**, d'après *Vampire Hunter D: Bloodlust*, et le Groupe 4 **Mad Max Fury Rogue**, d'après *Mad Max: Fury Road*.")
            ],[ IMG("images/rogue-thumb.jpg","Mad Max Fury Rogue et Vampire Hunter E-Cycle, les deux jeux du workshop") ])
          ]),
          BANDE("II","Planifier à deux niveaux",[
            LIGNE([
              T("Les deux équipes partageaient le même calendrier : **trois sprints d'une semaine**, calés sur les jalons de l'école. Le premier posait le blocking et les assets essentiels. Le deuxième poussait la modélisation et l'environnement vers le rendu final et terminait le système d'attaque, sans créer de nouveaux assets. Le dernier était réservé à l'équilibrage et au polish."),
              T("En dessous, chaque équipe avait son **backlog** dans Excel : 336 tâches pour Vampire Hunter E-Cycle, 237 pour Mad Max Fury Rogue. Chaque tâche avait une personne, un sprint, des dates, une difficulté, une priorité et un statut, et chaque sprint avait son propre onglet.")
            ],[ CHIFFRES([["573","tâches suivies"],["94 % et 92 %","tâches terminées"],["3","sprints d'une semaine"],["5","jalons en quinze jours"]]) ]),
            LIGNE([
              IMG("images/rogue-planning.png","Le planning de production : phases, jalons de l'école et sprints d'une semaine")
            ])
          ]),
          BANDE("III","Préparer les coupes",[
            LIGNE([
              T("En quinze jours, chaque fonctionnalité de trop met le jeu en danger. Avec chaque équipe, j'ai donc dressé une **liste de tâches sacrifiables**, les premières à couper si le temps manquait : 28 pour Vampire Hunter E-Cycle, 14 pour Mad Max Fury Rogue. La plupart ne sont jamais entrées dans les sprints. Cinq seulement y ont trouvé une place : le double dash, l'épée et le bouclier d'un côté, l'écran de chargement de l'autre ont été réalisés, et des tuyaux modulaires ont finalement été coupés."),
              T("Il a fallu couper encore en production : **sept tâches dans chaque équipe**, sans toucher au cœur du jeu. Pour Vampire Hunter E-Cycle, toutes l'ont été pendant le sprint 2, le plus chargé avec 137 tâches : le gestionnaire de musique, les maquettes du marchand, l'arc émotionnel du document narratif. Pour Mad Max Fury Rogue, les coupes ont touché un second ennemi, le shader de sable et des éléments de décor modulaires.")
            ],[ FICHE("La liste sacrifiable",["Un double saut et un système de dialogue","Une salle maudite et un inventaire","Un ennemi lance-flammes et un marché","42 tâches listées : 37 jamais lancées, 4 réalisées, 1 coupée"]) ])
          ]),
          BANDE("IV","Suivre deux équipes en même temps",[
            LIGNE([
              T("J'ai construit les sprints avec chaque équipe et levé les blocages au fil de l'eau. Chaque équipe avait deux leads, un en Game Design et un en Game Art, qui étaient mes relais au quotidien."),
              T("J'ai aussi relu les documents de design des deux équipes, surtout pour vérifier que le périmètre et la faisabilité tenaient en quinze jours.")
            ])
          ]),
          BANDE("V","Ce que j'en retiens",[
            LIGNE([
              T("Ce workshop m'a appris à **décider des coupes avant d'en avoir besoin**. Une liste sacrifiable préparée à l'avance évite d'improviser pendant le rush : quand le temps manque, on sait déjà ce qu'on laisse de côté."),
              T("J'avais écrit les mêmes objectifs de sprint pour les deux équipes. Avec le recul, chacune aurait gagné à avoir **ses propres objectifs**, tirés de son jeu et de son avancement : elles n'avaient pas le même volume de travail, 336 tâches d'un côté et 237 de l'autre.")
            ])
          ])
        ] }),
    P({ title:"Workshop Fusion – Novembre 2025", wip:true,   // wip:true = en cours (bandeau WIP, bouton Détails inactif). Supprimez ce mot pour activer le projet.
        desc:"Plan de production Agile sur Excel, revues hebdomadaires et premiers dailies pour deux équipes.", carte:"Un plan de production Agile sur Excel, des revues hebdomadaires et les premiers dailies, confiés aux référents des équipes.",
        survol:{ moteur:"Unreal Engine", logo:"images/unreal-engine.png", items:["Producer","12 à 13 personnes","Racing · Fusion"] }, img:"images/fusion-thumb.jpg",
        infos:{ "Rôle":"Producer", "Équipe":"2 équipes de 12 à 13 personnes", "Durée":"3 semaines", "Outils":"Excel" },
        resume:{ contexte:"Workshop de trois semaines à Game Sup : deux équipes de 12 à 13 personnes.",
                 role:"Producer des deux équipes : plan de production, suivi et répartition des tâches.",
                 resultat:"" },
        decisions:[ "Un plan de production Agile construit sur Excel, avec des revues hebdomadaires.",
                    "Les premiers dailies, confiés aux référents Art et Design.",
                    "La répartition des tâches entre Game Artists et Game Designers, en équilibrant la charge de travail." ],
        contenu:[
          IMG("", "Plan de production")
        ] }),
    P({ title:"Projets de fin d'année : mes deux premières productions – Juin 2025", wip:true,   // wip:true = en cours (bandeau WIP, bouton Détails inactif). Supprimez ce mot pour activer le projet.
        desc:"Ma première gestion de deux projets en parallèle, suivis sur Excel et Miro.", carte:"Deux équipes suivies en parallèle sur Excel et Miro, avec des revues de sprint pour chacune.",
        survol:{ moteur:"Unreal / Unity", logos:["images/unreal-engine.png","images/unity.svg"], items:["Producer","12 à 13 personnes","Genres variés"] }, img:"images/fin-annee-2025-thumb.jpg",
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
    P({ survol:{ items:["Producer","Action-RPG AA · 15 personnes","Mise en situation","Jira · JQL"] }, cat:"Gestion de production", id:"projet-jira-et-agile-un-studio-en-mise-en-situation-octobre-2026", title:"Projet Jira et Agile : un studio en mise en situation", large:true, nocover:true,
        desc:"Une mise en situation menée seul : la production d'un action-RPG AA fictif structurée dans Jira, des boards au registre des risques.",
        carte:"Un studio fictif organisé dans Jira en Scrum : sprints, bugs, risques et automatisations.",
        img:"images/jira-vignette.jpg",
        infos:{ "Rôle":"Producer (mise en situation, mené seul)", "Projet":"Action-RPG AA fictif · 15 personnes + 4 prestataires", "Outils":"Jira · JQL", "Période":"Octobre 2026", "Temps de travail":"20 h environ", "Formation":"Agile with Atlassian Jira · Atlassian, via Coursera" },
        apercu:"Pour apprendre Jira sur un cas réaliste, j'ai organisé seul la production d'un **action-RPG AA fictif** : **15 personnes et quatre prestataires**, sur le modèle d'Ember Lab pour Kena: Bridge of Spirits. Le space compte aujourd'hui cinq boards, une bibliothèque de filtres, cinq automatisations et un registre de sept risques. **Un sprint simulé** m'a servi à vérifier que chaque élément répond à une question de production. Je joue tous les rôles et les données sont simulées : le projet montre comment je structure l'outil, sans prétendre mesurer la conduite d'une équipe.",
        contenu:[
          BANDE("I","Le cadre du projet",[
            LIGNE([
              T("Je connaissais les bases de Jira et je voulais voir comment un studio s'y organise, avec plusieurs équipes, des prestataires et des jalons sur plusieurs années. Je me suis appuyé sur ce qu'Ember Lab a rendu public de la production de Kena: Bridge of Spirits : mon jeu fictif est un action-RPG AA produit en trois ans par 15 personnes, qui confie à des prestataires la QA, une partie de l'animation et de l'art, et la musique."),
              T("J'ai mené ce projet en parallèle de la formation Agile with Atlassian Jira (Atlassian, via Coursera), dont j'ai **obtenu le certificat le 14 octobre 2026**."),
              LIEN("Vérifier le certificat","https://coursera.org/verify/EQE4DN5JX2XG")
            ],[ FICHE("Les contraintes",["Une équipe de 15 personnes, pour une offre gratuite limitée à 10 utilisateurs","Jira ne permet pas d'antidater un ticket : la simulation se fait en temps réel","Un travail mené seul, en jouant tous les rôles"]) ])
          ]),
          BANDE("II","Organiser le studio et ses prestataires",[
            LIGNE([
              T("J'ai réparti l'équipe en deux **squads** de six personnes, Gameplay et World, plus un groupe Transverse (direction créative, production, tech art). Les prestataires ont leur propre valeur de squad, External, et un référent interne qui valide leurs livraisons, car leur travail ne suit pas le sprint d'une squad.")
            ],[ SCHEMA("squads","L'équipe : deux squads de six personnes, un groupe transverse et quatre prestataires") ]),
            LIGNE([
              T("Chaque ticket est **rangé selon quatre axes** : où dans le jeu (le composant), qui le fait (la squad), pour quelle phase (la version) et dans quelle catégorie transverse (le label). Chaque vue du projet devient alors une simple requête. Une tâche du tech artist appartient ainsi à la squad qui s'engage à la livrer : rangée dans le groupe Transverse, elle n'apparaîtrait sur aucun board.")
            ],[ CAROUSEL([["images/jira-versions.png","Les versions du projet, avec leurs critères de sortie"],["images/jira-composants.png","Une partie des 29 composants : systèmes, disciplines et niveaux"],["images/jira-squad.png","Le champ Squad et ses quatre valeurs"],["images/jira-ticket.png","Une Story de la Vertical Slice, rangée selon les quatre axes"]]) ])
          ]),
          BANDE("III","Préparer la Vertical Slice",[
            LIGNE([
              T("J'ai découpé le backlog de la Vertical Slice en Stories à valeur joueur, chacune divisée en sous-tâches attribuées à une personne. Ce découpage a fait apparaître deux goulots, l'**animateur gameplay** et le **sound designer**, présents dans plus de la moitié des Stories. Il a aussi montré que le **chemin critique** passe par les prestataires : trois Stories attendent une livraison externe, reliée au ticket qu'elle bloque. J'ai donc engagé les squads prudemment, 21 points pour Gameplay et 13 pour World, et ces constats sont devenus les premiers risques du registre."),
              T("Chaque sprint part d'un **objectif écrit du point de vue du joueur**, vérifiable en démo. Pour Gameplay S01 : « The player can fight: attack, dodge, take damage, with enemies able to follow them ». Une Story n'entre en sprint que si elle est estimée, a ses critères d'acceptation, sa squad, ses composants et sa version, et si ses dépendances sont levées ou datées (**Definition of Ready**). La **Definition of Done** fixe l'autre bout : une Story n'est terminée qu'une fois ses critères vérifiés, relue, validée en QA et intégrée au build sans bug bloquant.")
            ],[ CHIFFRES([["23","Stories dans la Vertical Slice"],["126","Points estimés"],["13 et 15","Stories pour l'animateur et le sound designer"],["3","Livraisons externes qui bloquent des Stories"]]) ])
          ]),
          BANDE("IV","Donner à chacun la bonne visibilité",[
            LIGNE([
              T("Dans Jira, un board n'est qu'une vue posée sur un filtre. J'en ai donc fait **un par public** : un board Scrum par squad, un board Kanban pour la QA, un autre pour les livraisons des prestataires, qui arrivent par lots, et un board Production qui voit tout le projet mais sur lequel on ne lance jamais de sprint.")
            ],[ CAROUSEL([["images/jira-board-production.png","Production : la vue d'ensemble, sans sprint"],["images/jira-board-gameplay.png","Gameplay : le sprint de la squad, groupé par Epic"],["images/jira-board-world.png","World : le sprint de la squad, groupé par Epic"],["images/jira-board-vendors.png","Vendors : les livraisons attendues de chaque prestataire"]]) ]),
            LIGNE([
              T("Pour le producer, une **bibliothèque de filtres** répond aux questions du lundi matin : où en est le sprint, qu'est-ce qui est bloqué ou reporté, le périmètre a-t-il bougé, les données sont-elles fiables. Ces filtres alimentent le dashboard.")
            ],[ IMG("images/jira-filtres.png","Le filtre du périmètre de la Vertical Slice et la liste des filtres enregistrés") ]),
            LIGNE([
              T("Les Stories suivent un workflow court : **une revue, puis une vérification QA** avant Done. Chaque retour en arrière est une transition nommée, ce qui permet de le compter.")
            ],[ IMG("images/jira-workflow-dev.png","Le workflow des Stories et des Tasks") ])
          ]),
          BANDE("V","Le circuit des bugs",[
            LIGNE([
              T("J'ai ensuite retravaillé le ticket de bug en pensant à ses deux lecteurs : l'équipe QA, qui doit y trouver toutes les informations utiles à son travail, et le producer, qui doit pouvoir le lire rapidement. En m'appuyant sur *The Pocket Mentor for Video Game Testing*, de Harún H. Ali, j'ai ajouté des **champs dédiés**. Le ticket situe d'abord le bug : le numéro de build, la version où il a été vu et celle où il sera corrigé, et l'Epic qu'il touche. Il le décrit ensuite par le résultat attendu et le résultat obtenu. Le nombre d'essais et d'occurrences donne enfin le **taux de reproduction**, qui indique si le bug revient à chaque fois ou seulement de temps en temps."),
              T("Le ticket sépare aussi la **sévérité** de la **priorité**. La sévérité dit à quel point le jeu est cassé, la priorité dit dans quel ordre on corrige : un bug peut être grave mais rare, ou bénin mais permanent, et c'est au producer d'arbitrer entre les deux. Avec le responsable, que Jira affiche, on voit d'un coup d'œil **ce qui est cassé, à quel point, qui s'en charge et pour quelle version**. Sur la capture, je suis à la fois rapporteur et responsable, puisque je joue tous les rôles : dans une vraie équipe, le rapporteur serait le testeur, et le responsable le développeur qui corrige.")
            ],[ IMG("images/jira-ticket-bug.png","Un bug bloquant reproduit 8 fois sur 10, corrigé et fermé : sévérité Blocker, priorité Highest, likelihood Very frequent, et la Story qu'il bloquait") ]),
            LIGNE([
              T("Le likelihood n'est plus choisi à l'œil, ce qui le faisait varier d'un testeur à l'autre pour un même bug : une **automatisation** le déduit désormais du taux de reproduction. Dès que le nombre d'essais ou d'occurrences change, elle calcule le taux, l'écrit dans le ticket et choisit l'option : **Always à 100 %, Very frequent de 70 à 99 %, Sometimes de 30 à 69 %, Rarely en dessous**. Si les occurrences dépassent les essais, elle laisse le likelihood tel quel et signale l'erreur par un commentaire ; à 0 %, c'est au testeur de trancher. Le bug de la capture précédente, reproduit 8 fois sur 10, passe ainsi automatiquement en Very frequent.")
            ],[ IMG("images/jira-auto-repro.png","La règle du taux de reproduction : calcul, contrôle des valeurs, puis une branche par option de likelihood") ]),
            LIGNE([
              T("Sur le board QA, les **swimlanes** sont des requêtes JQL qui rangent les bugs par sévérité, les bloquants en haut, et la carte affiche la priorité. Chaque colonne a **une limite de travail en cours** : quand une colonne déborde, l'équipe finit des bugs avant d'en ouvrir d'autres.")
            ],[ CAROUSEL([["images/jira-board-qa.png","Le board QA-Bugs : une ligne par sévérité"],["images/jira-colonnes-qa.png","Les colonnes et leurs limites de travail en cours"]]) ]),
            LIGNE([
              T("Le workflow pose une règle : **un bug ne se ferme jamais sans résolution**. Verified ferme un bug corrigé avec la résolution Done ; Rejected, depuis le tri, le ferme en Won't Do, Duplicate ou Cannot Reproduce. Reopen renvoie en correction un bug dont le correctif ne tient pas, ce qui permet de compter les réouvertures. Une requête de contrôle vérifie qu'aucun bug fermé n'est privé de résolution.")
            ],[ SCHEMA("bugflow","Le parcours d'un bug, ses retours en arrière et ses résolutions") ])
          ]),
          BANDE("VI","Éprouver l'outil avec un sprint simulé",[
            LIGNE([
              T("Pour vérifier que chaque rapport répond à sa question, j'ai fait vivre un premier sprint par squad, compressé à une semaine, avec un **scénario de onze bugs** écrit pour tester les workflows : un bloquant corrigé dans la journée, un doublon, un bug non reproductible, une réouverture et un crash ajouté en cours de sprint. J'ai clôturé les sprints en avance, d'où le burndown qui chute d'un coup, puisque Jira construit ses rapports à partir des dates réelles.")
            ],[ IMG("images/jira-sprint-report.png","Le sprint report de Gameplay S01 : objectif, burndown et tickets terminés, dont deux bugs ajoutés en cours de route") ]),
            LIGNE([
              T("Le **dashboard du producer** suit trois choses : l'avancée du sprint, la qualité du build et les risques à venir. Son **filtre de contrôle** liste les tickets incomplets, sans squad ou terminés sans résolution, ce qui garantit la fiabilité des autres chiffres. Le dashboard a évolué avec le projet : après le premier sprint, le suivi des bugs et le registre des risques sont venus s'ajouter aux burndowns.")
            ],[ CAROUSEL([["images/jira-dashboard.png","Pendant le sprint : burndowns, périmètre de la Vertical Slice et contrôles"],["images/jira-dashboard-fin.png","Après le premier sprint : contrôle à zéro, onze bugs créés et résolus, risques classés par score et matrice probabilité × impact"]]) ])
          ]),
          BANDE("VII","Automatiser les gestes répétitifs",[
            LIGNE([
              T("Je voulais aussi maîtriser les automatisations de Jira. Chaque règle suit la même logique : **quand** un événement se produit, **seulement si** une condition est vraie, **alors** une action s'exécute. Une sous-tâche hérite de la squad de sa Story, une Story démarre avec sa première sous-tâche, un bug bloquant déclenche une alerte, et le taux de reproduction d'un bug fixe son likelihood. La condition protège la règle : sans elle, celle qui démarre une Story tenterait de la relancer à chaque sous-tâche.")
            ],[ SCHEMA("autoflow","Cinq règles du space, lues selon la même logique") ]),
            LIGNE([
              T("Le **journal d'audit** de chaque règle m'a servi à comprendre ce qui bloquait. Un calcul échouait parce que deux champs du site portaient le même nom : je l'ai corrigé en appelant le mien par son identifiant.")
            ],[ CAROUSEL([["images/jira-automations.png","Les règles actives sur le space"],["images/jira-audit-erreur.png","Le journal d'audit : le calcul du score échoue, l'impact revient vide"],["images/jira-audit-correctif.png","Le déclencheur corrigé : l'impact appelé par son identifiant, cf[10091]"],["images/jira-flow-story.png","Quand une sous-tâche démarre, sa Story passe en cours si elle ne l'est pas déjà"]]) ])
          ]),
          BANDE("VIII","Anticiper avec un registre des risques",[
            LIGNE([
              T("J'ai ajouté un **type de ticket Risk**, pensé autour des questions qu'un producer se pose face à un risque : est-il probable, serait-il grave, comment le voir venir, que faire pour l'éviter, et que sacrifier si cela ne suffit pas. Chaque risque porte donc une probabilité, un impact, un signal d'alerte, une mesure d'atténuation et un plan de repli, et il est **relié aux tickets qu'il menace**. Les premiers viennent de ce que le projet avait révélé : les deux goulots, les livraisons des prestataires et la dérive du périmètre."),
              T("Cette dérive est devenue le risque R4. Jugée possible (3 sur 5) et d'impact majeur (4 sur 5), elle obtient un score de 12. Son signal d'alerte est mesurable : le filtre du périmètre de la Vertical Slice compte plus de tickets en cours de sprint. L'atténuation pose une règle simple, **tout ajout doit être approuvé par le producer et compensé par un retrait équivalent**, et si elle ne suffit pas, le plan de repli **gèle le périmètre deux sprints avant le jalon**. Il est relié aux Epics Combat et Act 1, et son atténuation est en cours."),
              T("Sur le dashboard, une matrice croise probabilité et impact à côté d'une liste classée par score : on voit quels risques traiter en premier et lesquels sont déjà en cours d'atténuation.")
            ],[ CAROUSEL([["images/jira-risque-r4.png","Le risque R4, dérive du périmètre : score, signal d'alerte, atténuation, plan de repli et Epics menacés"],["images/jira-risques-liste.png","Les sept risques et leur statut : cinq en atténuation, deux en suivi"],["images/jira-risques-matrice.png","La matrice probabilité × impact"]]) ]),
            LIGNE([
              T("Le workflow reste court. Un risque identifié passe en suivi, puis en atténuation quand son signal d'alerte apparaît, et revient en suivi si la mesure a fonctionné. Sa résolution dit ce qui s'est passé (Mitigated, Occurred ou Obsolete), et un risque rouvert la perd. Le score, probabilité × impact, est **calculé par une automatisation** et ne peut donc pas contredire ses deux composantes.")
            ],[ SCHEMA("riskflow","Le parcours d'un risque, ses résolutions et le calcul de son score") ])
          ]),
          BANDE("IX","Ce que j'en retiens",[
            LIGNE([
              T("J'ai appris à **penser Jira comme une base de données** : une fois les tickets bien rangés, chaque équipe, chaque jalon et chaque contrôle qualité n'est qu'une requête. L'outil rend visibles les décisions du producer : qui est saturé, ce qui dépend de l'extérieur, ce qu'on accepte de reporter."),
              T("Ce space est devenu une **base réutilisable** : les quatre axes de classement, une bibliothèque de filtres avec son contrôle, des workflows dont chaque fermeture porte une résolution, un ticket de bug qui sépare la mesure du jugement, un registre des risques et quelques automatisations testées. Sur un autre projet, il suffit d'adapter les valeurs à l'équipe et au jeu."),
              T("Sur un vrai projet, j'ouvrirais **le registre des risques dès le lancement**, et je simulerais deux semaines complètes en temps réel.")
            ])
          ])
        ] }),
        P({ survol:{ items:["Producer","Jeu AA · 42 personnes","48 mois de production","Excel · Coda · ClickUp"] }, cat:"Gestion de production", title:"Wyrdfall", nocover:true, desc:"Dossier de production d'un jeu AA de 48 mois : équipe, budget, planning, estimation des ventes et seuil de rentabilité.", carte:"Le dossier de gestion de production d'un jeu AA sur 48 mois : équipe, plannings, budget, ventes et seuil de rentabilité.", large:true,   // large:true = page en bandes
        img:"images/wyrdfall-vignette.jpg",
        infos:{ "Rôle":"Producer", "Cadre":"Gestion de production · Game Sup", "Date":"Mars 2026", "Projet":"AA · 42 personnes au pic", "Outils":"Excel · Coda · ClickUp", "Temps de travail":"20 h sur 90 h (épreuve entière)", "Livrables":"Équipe · Planning · Budget · Market Analysis" },
        apercu:"Cet exercice de production portait sur Wyrdfall, un jeu AA fictif. Je ne présente ici que la partie gestion de production, où j'ai tenu le rôle de producer, de la composition de l'équipe jusqu'au seuil de rentabilité. Le résultat : **un budget de 9 M€ sur 48 mois**, un seuil atteint vers **451 000 ventes** et deux scénarios de ROI déclinés en trois niveaux, le tout dans un fichier Excel qui se met à jour en un clic.",
        contenu:[
          BANDE("I","Le sujet et mon rôle",[
            LIGNE([
              T("Dans le cadre de cet exercice, nous devions fournir un document de gestion de production couvrant plusieurs volets : une définition crédible de l'équipe à constituer, un macro-planning et un micro-planning de la production sur Coda et ClickUp, un budget de développement sur Excel et une estimation des ventes (Market Analysis)."),
              T("J'ai choisi un projet d'envergure AA comparable à GreedFall : Wyrdfall, porté par une équipe de 42 personnes au pic de la production, dans la fourchette habituelle d'un jeu AA (30 à 50 personnes)."),
              T("Le High Concept Document et le prototype, également demandés, ont été produits pendant le reste de l'épreuve et ne sont pas présentés ici.")
            ],[ FICHE("Gestion de production · présentée ici · 20 h",["Équipe à constituer","Macro-planning et micro-planning (Coda, ClickUp)","Budget de développement (Excel)","Estimation des ventes (Market Analysis)"]), FICHE("Autres livrables · 70 h",["High Concept document","Prototype"]) ])
          ]),
          BANDE("II","Un fichier de production clair et modulable",[
            LIGNE([
              T("Mon fichier Excel devait rester lisible, avec des onglets regroupés par couleur et une barre de navigation, mais surtout adaptable : **le budget se recalcule en un clic** quand un membre rejoint le studio, change d'ancienneté ou reçoit de nouveaux logiciels.")
            ],[ CAROUSEL([[EX1.nav,"Page d'accueil du fichier de production : boutons et navigation par onglets colorés"],[EX1.budget,"Vue d'ensemble du budget : équipe, durée et budget par département"]]) ]),
            LIGNE([
              T("Wyrdfall est un projet AA de 48 mois, comprenant 36 mois de production et 12 mois de live service, pour une équipe de **42 personnes** dont 25 restent mobilisées sur la phase de live. Le budget total du projet s'élève à **9 033 682 €**, dont 7 070 677 € de salaires (78 %), le reste se répartissant entre les logiciels, la localisation, les frais de fonctionnement et l'externalisation."),
              T("J'ai composé l'équipe en **raisonnant par éléments de production**, en m'inspirant de celle de Sandfall Interactive sur Clair Obscur: Expedition 33. Un projet AA impose une équipe resserrée, d'où 42 personnes au pic. Après la sortie, l'effectif passe à 25 : c'est une façon de simuler le démarrage d'autres projets au studio, et une production plus petite consacrée à l'extension.")
            ],[ CHIFFRES([["9 033 682 €","Budget total"],["42","Personnes dans l'équipe"],["48 mois","36 production · 12 live"],["78 %","Part des salaires"]]) ])
          ]),
          BANDE("III","Le Market Analysis et le seuil de rentabilité",[
            LIGNE([
              T("Pour estimer les ventes potentielles sur Steam, j'ai commencé par **l'analyse des concurrents du jeu**, dont j'ai extrait des moyennes exploitables pour mes scénarios de projection. Pour disposer d'un large panel, j'ai retenu des jeux sortis sur 11 ans, de 2014 à 2025 : une période un peu longue, qui gagnerait à être ramenée à cinq ans.")
            ],[ IMG(EX1.market,"Analyse des concurrents : ventes, revenus estimés et moyennes") ]),
            LIGNE([
              T("Les données extraites m'ont permis de proposer **deux scénarios**, un optimiste et un plus conservateur, chacun décliné en **trois niveaux de risque** (haut, moyen, bas), pour couvrir l'éventail des issues possibles.")
            ],[ CAROUSEL([[EX1.roiCons,"Estimation du ROI, scénario conservateur : 250 000 followers, selon les cas haut, moyen et bas"],[EX1.roiOpti,"Estimation du ROI, scénario optimiste : moyenne des ventes du Market Analysis, selon les cas haut, moyen et bas"]]) ]),
            LIGNE([
              T("Pour savoir à partir de quand le projet devient rentable, j'ai calculé son **seuil de rentabilité**. Sur un prix de 49,99 €, j'ai retiré en une seule fois la part de Steam, les taxes et la redevance d'Unreal Engine (55 %), puis les remboursements. C'est un choix de prudence : une vente ne rapporte ainsi qu'environ 20 €, un peu moins que dans la réalité. Le budget est couvert à partir d'environ **451 000 ventes**. Si le projet tient avec cette hypothèse, il tiendra avec un calcul plus favorable."),
              T("Dans le scénario conservateur moyen, j'estime les ventes à 482 000, juste au-dessus du seuil, pour un bénéfice de 616 438 €, soit un **ROI d'environ + 6,8 %**. Le calcul part des followers Steam : j'estime les wishlists à 9,64 fois leur nombre, soit 2,41 millions pour 250 000 followers, puis une part de ces wishlists se convertit en ventes. Tout se joue donc sur le **taux de conversion des wishlists** : 20 % dans le cas moyen, 26 % dans le cas haut et 4,8 % dans le cas bas. Au taux moyen, environ 234 000 followers suffiraient pour atteindre le seuil, contre les 250 000 prévus. Par prudence, j'ai fait varier le revenu par vente d'environ 2 € d'un cas à l'autre : environ 21,8 € dans les cas hauts, 20 € dans les cas moyens et 18,7 € dans les cas bas. Ces estimations ne comptent que les ventes sur Steam, sans le DLC."),
            ],[ TABLEAU("Bénéfice net et ROI selon les scénarios · Budget total : 9 033 682 €",["Scénario","Ventes estimées","Bénéfice net (ROI)"],["Conservateur : 250 000 followers", ["Haut", "626 600", "+ 4 639 128 € (+ 51,4 %)"], ["Moyen", "482 000", "+ 616 438 € (+ 6,8 %)"], ["Bas", "115 680", "− 6 873 790 € (− 76,1 %)"], "Optimiste : moyenne des ventes du Market Analysis", ["Haut", "959 400", "+ 11 901 031 € (+ 131,7 %)"], ["Moyen", "738 000", "+ 5 741 809 € (+ 63,6 %)"], ["Bas", "177 120", "− 5 726 628 € (− 63,4 %)"]]) ])
          ]),
          BANDE("IV","Planifier quatre ans de projet",[
            LIGNE([
              T("Enfin, il fallait planifier **quatre ans de projet**, jusqu'à la sortie du DLC prévu, alors que nos workshops durent trois semaines."),
              T("Pour placer **les Epics et les Stories** sur toute la production, j'ai dû prendre en compte chaque partie du projet : les fonctionnalités essentielles, les niveaux et l'intégration de la QA.")
            ],[ IMG(EX1.epic,"Macro-planning : les Epics de la production") ]),
            LIGNE([
              T("J'ai complété ce travail par un sprint détaillé avec ses tâches : **un sprint de préproduction** destiné à préparer la Vertical Slice."),
              T("Cette partie m'a obligé à quitter la logique des sprints de nos workshops de trois semaines, très contraints, pour raisonner pas à pas sur les besoins qui font passer d'un sprint à l'autre.")
            ],[ IMG(EX1.sprint,"Sprint de préproduction : tâches, priorités et story points") ])
          ]),
          BANDE("V","Ce que j'en retiens",[
            LIGNE([
              T("Avec le recul, **j'ai sous-estimé la charge de l'équipe QA** : il faudrait prévoir un effectif plus important pour éviter un éventuel crunch. L'équipe Sound Design est elle aussi sous-dimensionnée."),
              T("Il serait également utile d'étudier les **financements accessibles** à un studio de cette taille pour étoffer le dossier : aides régionales, nationales et européennes, prêts bancaires, Kickstarter.")
            ])
          ])
        ] }),
    P({ survol:{ items:["Auteur du GDD","RPG au tour par tour","90 heures","67 pages"] }, cat:"Game Design et Narrative Design", title:"Castalie's Tears", large:true, nocover:true,
        desc:"Game Design Document d'un RPG au tour par tour d'inspiration mythologique : la boucle de jeu et ses systèmes, puis leur incarnation dans l'univers, le personnage et un niveau de Narrative Design.", carte:"Le Game Design Document d'un RPG mythologique au tour par tour : boucle de jeu, systèmes et leur incarnation dans le récit.",
        img:CT.thumb,
        infos:{ "Rôle":"Auteur du GDD", "Cadre":"Game Design · Game Sup", "Date":"Avril 2025", "Temps de travail":"90 h", "Livrable":"Game Design Document · 67 pages" },
        apercu:"Pour cet exercice de Game Design, il fallait concevoir un jeu à partir d'une créature mythique d'un pays imposé, et la Grèce m'a été attribuée. J'ai écrit le Game Design Document de Castalie's Tears, **un RPG au tour par tour**, du concept jusqu'à un niveau complet, en veillant à ce que **chaque mécanique ait un sens dans le récit**.",
        contenu:[
          BANDE("I","L'idée et le concept",[
            LIGNE([
              T("Parmi les créatures mythiques grecques, j'ai choisi **les naïades**, divinités des eaux. De là est née une idée simple : une naïade parcourt la Grèce pour sauver des divinités et combattre les armées de Typhon. Le joueur incarne **Castalie, gardienne de la fontaine de Delphes**, et rencontre au fil du jeu des héros et des dieux qui deviennent ses compagnons."),
              T("Castalie's Tears est un RPG au tour par tour en solo, pensé pour PC et Nintendo Switch, avec un modèle premium. Pour le situer : **Dragon Quest XI rencontre Dragon Age : Inquisition** dans un univers proche d'Immortals Fenyx Rising. C'est un jeu posé, qui récompense la réflexion et l'organisation plus que les réflexes.")
            ],[ CAROUSEL([[CT.pitch,"L'énoncé central : Castalie face à Typhon"],[CT.one,"Le one-liner et ses trois références"],[CT.info,"La fiche d'information du projet"]]) ])
          ]),
          BANDE("II","Intentions, piliers et boucle de gameplay",[
            LIGNE([
              T("Je suis parti de **valeurs (courage, coopération, résilience)** et de thèmes : la culpabilité du survivant, la confiance, et la question « qu'est-ce qu'un héros ? ». Ces intentions se traduisent en **trois piliers de gameplay** : combattre les marées de Typhon, explorer un monde désolé, et prendre soin de sa Source pour la faire grandir."),
              T("J'ai aussi listé **ce que le jeu ne contiendra pas**, pour garder le périmètre sous contrôle : multijoueur, combat tactique sur grille, arbre de compétences, mini-jeux, infiltration, fins multiples.")
            ],[ CAROUSEL([[CT.pillars,"Les trois piliers de gameplay"],[CT.notdo,"Ce que le jeu n'est pas"]]) ]),
            LIGNE([
              T("Le joueur gère sa base, explore, résout des énigmes ou combat, acquiert des ressources et progresse, puis fabrique ou échange avant de revenir à sa base. J'ai qualifié chaque étape selon son rôle dans l'économie du jeu (source, convertisseur, drain, marchand) pour vérifier que **la boucle se nourrit autant qu'elle consomme**."),
              T("Le jeu vise un public adulte et actif, qui joue par sessions courtes : **d'abord Achiever, puis Explorer** selon la typologie de Bartle. Ce public cherche de la profondeur et des choix, d'où un jeu qui mise sur l'histoire et la gestion plutôt que sur l'énigme.")
            ],[ IMG(CT.loop,"La boucle de gameplay de Castalie's Tears") ])
          ]),
          BANDE("III","De la mécanique au récit",[
            LIGNE([
              T("Typhon a vaincu les dieux et dispersé leurs pouvoirs, **les Grâces divines**. Il ne reste qu'une terre aride, des ruines et quelques sanctuaires. Dans cet univers, **chaque mécanique a son incarnation dans le récit** : gérer sa base, c'est protéger une fontaine sacrée, et chaque nouvelle compétence est le pouvoir hérité d'un dieu déchu."),
              T("Même le butin raconte quelque chose : les bêtes de Typhon dévorent les fragments de Grâce pour gagner en puissance, si bien que ce que le joueur ramasse est aussi ce que l'ennemi convoite.")
            ],[ CAROUSEL([[CT.realm,"Le Royaume de Lumière avant la Chute"],[CT.typhon,"Typhon"],[CT.sealed,"Un Temple scellé"]]) ]),
            LIGNE([
              TABLEAU("Une mécanique, une incarnation",["Mécanique","Incarnation narrative"],[["La Source (gestion de la base)","La fontaine sacrée de Delphes, qui accueille les réfugiés"],["La Grâce divine (compétences, craft)","Les pouvoirs des dieux déchus, dispersés par Typhon"],["Les compagnons (recrutement)","Divinités mineures, héros et réfugiés à sauver"],["Les Temples scellés (donjons, boss)","Les ruines où sont retenus les grands dieux"],["La progression","Castalie qui reprend confiance, de naïade fragile à cheffe"]],true)
            ])
          ]),
          BANDE("IV","Castalie et le niveau du Temple d'Apollon",[
            LIGNE([
              T("J'ai construit Castalie sur **un défaut et une évolution** : elle manque de confiance, se méfie de ses pouvoirs et des inconnus. Au fil de l'aventure, elle devient une combattante et une cheffe, et sa voix s'affirme."),
              T("Le premier niveau, les ruines du Temple d'Apollon, son mentor, est pensé comme **un chemin dans la mémoire** : des mosaïques racontent le passé, et Castalie commente ce dont elle se souvient. **L'intensité monte par paliers** entre les salles, avec des respirations, jusqu'au boss qui l'attend là où elle conversait avec Apollon.")
            ],[ IMG(CT.castalie,"Castalie, la naïade de la fontaine de Delphes","sm") ]),
            LIGNE([
              CAROUSEL([[CT.moodboard,"Moodboard du niveau"],[CT.ld,"Plan du niveau (layout)"],[CT.mol,"Diagramme moléculaire : les salles et leurs liens"],[CT.pacing,"Courbe d'intensité du niveau"]])
            ])
          ]),
          BANDE("V","Ce que j'en retiens",[
            LIGNE([
              T("Un GDD doit **relier les intentions aux mécaniques**, et les mécaniques à ce que le joueur ressent. J'ai cherché à rendre ce lien lisible, du pilier jusqu'au niveau."),
              T("Comme producer, c'est ce qui me permet aujourd'hui de comprendre ce que l'on demande aux équipes de design, d'en estimer la portée et de savoir où se trouve le cœur d'un projet quand il faut arbitrer.")
            ])
          ])
        ] }),
    P({ survol:{ items:["Auteur de l'étude","Analyse de marché","Recoupement des sources","30 diapositives"] }, cat:"Analyse de marché", title:"Le marché africain du jeu vidéo : le cas du Nigéria", large:true, nocover:true,
        desc:"Étude du marché du jeu vidéo en Afrique à travers le cas du Nigéria : un modèle mobile, local et affranchi du AAA occidental, ses moteurs et ses limites.", carte:"Un marché porté par le mobile et une population jeune, des studios tournés vers le public local, et des infrastructures qui freinent encore son essor.",
        img:NG.thumb,
        infos:{ "Rôle":"Auteur de l'étude", "Cadre":"Culture vidéoludique · Game Sup", "Date":"Janvier 2025 · sources vérifiées en octobre 2026", "Livrable":"Présentation PowerPoint · 30 diapositives" },
        apercu:"Pour cet exercice de culture vidéoludique, j'ai étudié le marché du jeu vidéo en Afrique à travers le cas du Nigéria, en recoupant et en critiquant mes sources. J'y ai trouvé **un modèle mobile et local**, porté par une population jeune mais freiné par les infrastructures. J'en retiens une leçon de production : le budget, le calendrier, la plateforme et le mode de paiement **se décident ensemble**.",
        contenu:[
          BANDE("I","Problématique et angle d'étude",[
            LIGNE([
              T("Le marché du jeu vidéo reste dominé par les centres occidentaux et japonais, avec la montée du marché chinois, alors que l'Afrique connaît un essor récent. Ma problématique : **peut-on constater le développement d'un modèle africain**, et en quoi s'affranchit-il du modèle occidental ? J'y réponds à travers le cas du Nigéria."),
              T("En tant que producer, j'ai lu ce marché à travers **ses contraintes** : réseau, électricité, pouvoir d'achat, accès au paiement. Ce sont elles qui expliquent les choix des studios, de la plateforme au modèle économique, jusqu'au rythme de production.")
            ],[ CITATION("« L'essor de l'industrie du jeu vidéo en Afrique attire l'attention des investisseurs avec une croissance annuelle significative. »","Nathan Bonnet, Afrikactus, 15 mai 2024") ])
          ]),
          BANDE("II","Un marché jeune, mobile et porté par la démographie",[
            LIGNE([
              T("L'industrie est encore jeune : le premier studio connu, Celestial Games, a été fondé en 1994 en Afrique du Sud. Selon Mordor Intelligence (édition 2024), le marché africain passerait de 2,14 Md$ en 2024 à 3,72 Md$ en 2029, soit **environ 11,6 % par an**, contre environ 9,3 % pour le marché mondial d'après mon calcul (272,86 → 426,02 Md$). Newzoo et Carry1st estiment pour leur part ce marché à 1,8 Md$ en 2024 : les périmètres diffèrent, et je ne mélange pas les deux séries. L'Afrique pèse pourtant **moins de 1 %** du marché mondial.")
            ],[ SCHEMA("marche","Le marché africain du jeu vidéo, 2024-2029 (Mordor Intelligence), comparé au marché mondial"), FICHE("Quelques studios pionniers",["Afrique du Sud : Celestial Games (1994)","Cameroun : Kiro'o Games (projet lancé en 2003, studio fondé en 2012)","Ghana : Leti Arts (2009)","Nigéria : Kuluya, Gamsole et Maliyo (vers 2012)"]) ]),
            LIGNE([
              T("Ce marché repose sur **le mobile** : en 2022, 200 millions d'Africains jouaient sur leur téléphone, et **environ 90 % des revenus** passaient par le smartphone (Afrik.com). Le nombre de joueurs tous supports varie fortement selon les sources (de 349 à plus de 600 millions) : ces chiffres ne mesurent pas la même chose, et je ne les compare pas entre eux."),
              T("Le moteur de cette croissance est démographique : 1,4 milliard d'habitants, 2,5 milliards attendus en 2050, et **plus de 60 % de moins de 25 ans** (Forum économique mondial).")
            ],[ CHIFFRES([["200 M","joueurs sur mobile (2022)"],["90 %","des revenus via smartphone"],["> 60 %","de moins de 25 ans"],["2,5 Md","d'habitants prévus en 2050"]]) ])
          ]),
          BANDE("III","Le Nigéria : des studios mobiles et locaux",[
            LIGNE([
              T("Au Nigéria, l'industrie tourne autour de **quatre studios majeurs** créés vers 2012 : Maliyo Games, ChopUp, Gamsole et Kuluya. Tous sont tournés vers le mobile, dans un pays qui comptait 210 millions d'abonnés actifs à la téléphonie mobile en 2022 (NCC)."),
              T("En 2011, Bayo Puddicombe adapte en jeu le danfo, le bus jaune emblématique de Lagos : Danfo dépasse le million de téléchargements. Il fonde ensuite avec Zubair Abubakar la société Pledge 51, qui lance ChopUp. En 2016, le studio compte quatre employés et sort un nouveau jeu toutes les six semaines.")
            ],[ ETAPES("ChopUp en quelques dates",[["2011 · Danfo","Bayo Puddicombe crée le jeu Danfo : plus d'un million de téléchargements"],["2012 · Pledge 51, puis ChopUp","Bayo Puddicombe et Zubair Abubakar fondent Pledge 51, la société qui lancera ChopUp, dans la foulée du succès de Danfo"],["2016 · Rythme de production","4 employés et un nouveau jeu toutes les 6 semaines"]]) ]),
            LIGNE([
              T("Son modèle économique contourne la faible bancarisation : au Nigéria, plus de la moitié des adultes n'ont pas de compte bancaire (Global Findex 2021). ChopUp s'associe donc aux opérateurs mobiles et donne accès à son catalogue contre **un petit abonnement hebdomadaire, prélevé directement sur la facture de téléphone**. Chicken Escape et Jagun : Clash of Kingdoms ont ainsi été téléchargés 100 000 fois en quelques mois.")
            ],[ IMG(NG.jagun,"Jagun : Clash of Kingdoms, ChopUp, 2015"), IMG(NG.chicken,"Chicken Escape, ChopUp, 2015") ]),
            LIGNE([
              T("Ces studios se détournent du AAA occidental pour s'adresser au public local. Pour Matteo Maillard (Jeune Afrique, 2024), ils ont créé **une exception africaine** face à des AAA dont les scénarios tournent souvent autour « du nombril américain ou de codes culturels européens ». Le quotidien devient matière de jeu, comme les embouteillages de Lagos dans Okada Ride (Maliyo, 2012), tout comme l'histoire et les mythes : Iwaju : Rising Chef (Maliyo, 2024), Aurion : L'héritage des Kori-Odan (Kiro'o Games, Cameroun)."),
              T("Faute de cursus universitaires adaptés, **les studios assurent aussi la formation** : Maliyo Games propose un cursus gratuit, en ligne et de trois mois (Game Art Academy).")
            ],[ IMG(NG.okada,"Okada Ride, Maliyo Games, 2012"), IMG(NG.iwaju,"Iwaju : Rising Chef, Maliyo Games, 2024"), IMG(NG.aurion,"Aurion : L'héritage des Kori-Odan, Kiro'o Games, 2016") ])
          ]),
          BANDE("IV","L'e-sport et les freins au développement",[
            LIGNE([
              T("La jeunesse (70 % des Nigérians ont moins de 30 ans) porte aussi l'e-sport. Selon PwC (via Agence Ecofin, novembre 2023), les revenus publicitaires des jeux vidéo et de l'e-sport au Nigéria passeraient de 111 M$ en 2022 à 472 M$ en 2027."),
              T("En recoupant les sources, j'ai relevé **une incohérence** : le même article annonce 7,1 % de croissance par an, ce qui mènerait à environ 156 M$ en 2027, et non 472 M$. Les éditions plus récentes de PwC donnent d'ailleurs des chiffres plus bas. Je retiens donc **une tendance**, une croissance à deux chiffres portée par le smartphone, plutôt qu'un montant.")
            ],[ TABLEAU("Jeux vidéo et e-sport au Nigéria : les chiffres de PwC, édition par édition",["Source","Période","Revenus"],[["Agence Ecofin, nov. 2023","2022 → 2027","111 → 472 M$ (publicité)"],["Nairametrics, fév. 2025","2023 → 2024","192 → 217 M$"],["Nairametrics, fév. 2025","2023 → 2028","192 → 322 M$ (+ 10,9 % par an)"]],true) ]),
            LIGNE([
              T("Le modèle reste pourtant fortement limité. J'ai relevé **cinq freins**, du plus matériel au plus structurel."),
              TABLEAU("Les freins au développement du secteur",["Frein","Constat"],[["Internet","Réseau fragile, dépendant d'un nombre limité de câbles sous-marins (BBC News)."],["Électricité","12 effondrements du réseau national en 2024. 82 % des développeurs africains jugent critique une alimentation électrique sans coupure (rapport de Maliyo Games, le studio d'Hugo Obi)."],["Pouvoir d'achat","Peu d'ordinateurs et de smartphones puissants : des jeux gratuits, pensés pour des joueurs occasionnels."],["Formation","Peu de formations longues au jeu vidéo, voire aucune."],["Financement","Des revenus souvent liés à des bailleurs de fonds étrangers. Des observateurs cités par Courrier International jugent ces jeux « bien-pensants » : un ressenti, pas un constat chiffré."]],true)
            ])
          ]),
          BANDE("V","Ce que j'en retiens",[
            LIGNE([
              T("Le marché africain progresse, porté par une population jeune, le jeu sur mobile et l'e-sport. Son modèle, proche du marché asiatique par la place du mobile, se détourne des AAA au profit de jeux du quotidien et de l'histoire nationale, mais il reste fortement limité par les infrastructures, le pouvoir d'achat et le financement."),
              T("Côté production, j'en retiens qu'**un marché se lit d'abord par ses contraintes**. ChopUp a choisi le mobile, construit son modèle économique autour de la faible bancarisation et calé son rythme de production sur ses ressources. Pour un producer, la leçon est que le budget, le calendrier, la plateforme et le mode de paiement se décident ensemble, dès la conception. Cette étude m'a aussi appris à **distinguer un chiffre établi d'une projection** avant de bâtir un plan dessus.")
            ])
          ]),
          BANDE("VI","Sources",[ LIGNE([ SOURCES([["Agence Ecofin · Nigéria en 2027, les jeux vidéo généreront plus de revenus publicitaires que le streaming (PwC)", "https://www.agenceecofin.com/communication/1311-113619-nigeria-en-2027-les-jeux-video-genereront-plus-de-revenus-publicitaires-que-le-streaming-l-affichage-exterieur-et-la-presse-ecrite-pwc"], ["Afrik.com · Le gaming en Afrique, une révolution silencieuse", "https://www.afrik.com/le-gaming-en-afrique-une-revolution-silencieuse"], ["Jeune Afrique · L'Afrique, nouvel eldorado des jeux vidéo", "https://www.jeuneafrique.com/1526043/culture/lafrique-nouvel-eldorado-des-jeux-video/"], ["Sigma · Gaming in Nigeria is on the rise", "https://sigma.world/fr/news/gaming-in-nigeria-is-on-the-rise/"], ["Agence Ecofin · Le marché africain des jeux vidéo devrait croître de 11,62 % par an d'ici 2029", "https://www.agenceecofin.com/innovation/0810-122265-le-marche-africain-des-jeux-video-devrait-croitre-de-11-62-par-an-d-ici-2029-rapport"], ["Jeune Afrique · Le Nigeria part à la conquête du marché africain des jeux vidéo", "https://www.jeuneafrique.com/depeches/20777/politique/le-nigeria-part-a-la-conquete-du-marche-africain-des-jeux-video/"], ["Jeune Afrique · Les recettes du succès de ChopUp", "https://www.jeuneafrique.com/315910/economie-entreprises/reussite-les-recettes-du-succes-de-chopup-le-studio-de-jeux-videos-100-nigerian/"], ["Toonmed (blog) · Reportage : les recettes du succès de ChopUp", "https://toonmed.blogspot.com/2016/04/reportage-les-recettes-du-succes-de.html"], ["Agence Ecofin · Le Nigeria et l'Égypte, pays où la moitié des adultes sont non bancarisés", "https://www.agenceecofin.com/finance/0407-99376-le-nigeria-et-l-egypte-font-partie-des-7-pays-au-monde-dans-lesquels-la-moitie-des-adultes-sont-non-bancarises-rapport"], ["Banque de France · Afrique subsaharienne, la fracture financière entre hommes et femmes", "https://www.banque-france.fr/fr/publications-et-statistiques/publications/afrique-subsaharienne-la-fracture-financiere-entre-hommes-et-femmes"], ["Sport News Africa · Vers la naissance de la Confédération africaine du sport en ligne", "https://sportnewsafrica.com/articles/e-sport-vers-la-naissance-de-la-confederation-africaine-du-sport-en-ligne"], ["Mordor Intelligence · Marché mondial du jeu vidéo", "https://www.mordorintelligence.com/fr/industry-reports/global-gaming-market"], ["Courrier International · Comment le jeu vidéo se développe en Afrique", "https://www.courrierinternational.com/article/tendance-comment-le-jeu-video-se-developpe-en-afrique"], ["Africavox · L'Afrique, nouveau berceau de l'e-sport", "https://africavox.easybroadcast.fr/articles/l-afrique-nouveau-berceau-du-e-sports"], ["Afrikactus · L'essor du gaming africain sur la scène mondiale", "https://afrikactus.com/essor-du-gaming-africain-sur-la-scene-mondiale/"], ["ADF Magazine · Des start-ups nigérianes pénètrent le marché des jeux vidéo", "https://adf-magazine.com/fr/2014/10/des-start-ups-nigerianes-penetrent-le-marche-des-jeux-video/"], ["Smart Africa · Page d'accueil de l'alliance", "https://smartafrica.org/fr/page-daccueil/"], ["AfriGamers · À propos", "https://afrigamers.com/a-propos-afrigamers/"], ["Tribune Online · 12 times national grid collapsed in 2024", "https://tribuneonlineng.com/updated-12-times-national-grid-collapsed-in-2024/"], ["Nairametrics · PwC lists 10 fastest-growing entertainment and media sectors in Nigeria 2024-2028", "https://nairametrics.com/2025/02/09/pwc-lists-10-fastest-growing-entertainment-and-media-sectors-in-nigeria-2024-2028/"],["World Economic Forum · How will Africa's youth population drive global growth?", "https://www.weforum.org/stories/youth/africa-youth-global-growth-digital-economy/"],["ONU · Youth population trends (fact sheet)", "https://www.un.org/esa/socdev/documents/youth/fact-sheets/YouthPOP.pdf"],["Afrik.com · L'Afrique, avenir du gaming mondial ?", "https://www.afrik.com/l-afrique-avenir-du-gaming-mondial"],["Le360 · À Kigali, l'Afrique se cherche un modèle économique pour l'e-sport", "https://afrique.le360.ma/sports/des-millions-de-gamers-a-la-manette-a-kigali-lafrique-se-cherche-un-modele-economique-pour-le-sport_OLMQPD7RONHW3MNIOV3TPTZBWI/"],["AFJV · Abena Tournaments", "https://afjv.com/news/11374_abena-tournaments-tournoi-feminin-afrocaribeen-tekken8.htm"],["Linda Ikeji · Mobo Game Jam (Edu360 et Kucheza Gaming)", "https://www.lindaikejisblog.com/2020/12/mobo-game-jam-edu360-kucheza-drive-social-impact-through-gaming.html"],["Maliyo Games · Programmes de formation", "https://www.maliyo.com/programme/"],["Stuff South Africa · GameOn with HP, hackathon", "https://stuff.co.za/2024/10/11/get-your-gameon-with-hps-new-hackathon/"],["HP Gaming Garage", "https://www.hpgaminggarage.com/"],["Game Camp Cities · La CASE signe avec HP", "https://www.gamecampcities.pro/post/la-conf%C3%A9d%C3%A9ration-esport-africaine-signe-son-premier-partenaire-strat%C3%A9gique-continental-le-groupe-h?lang=fr"],["Pulse Nigeria · TCN restores power in Kaduna, Kano, Bauchi and Gombe", "https://www.pulse.ng/articles/news/local/tcn-restores-power-in-kaduna-kano-bauchi-and-gombe-after-prolonged-blackout-2024111910462282759"],["Carry1st · Africa's gaming market reaches $1.8bn in 2024 (avec Newzoo)", "https://carry1st.com/press/africas-gaming-market-reaches-1-8bn-sixfold-growth-vs-row-driven-by-32mn-new-gamers-in-2024"],["Peoples Gazette · 210 millions d'abonnés mobiles actifs (NCC, 2022)", "https://gazettengr.com/nigerias-mobile-subscribers-hit-210-million-in-august-ncc/"],["Techpoint · Jagun: Clash of Kingdoms (2015)", "https://techpoint.africa/general/jagun-clash-of-kingdoms-chopup/"],["TechCabal · Pledge 51, la société derrière ChopUp", "https://techcabal.com/2014/08/29/tayo-oviosu-and-others-invest-in-chopup/"],["Games Industry Africa · Olivier Madiba et Kiro'o Games", "https://gamesindustryafrica.com/2019/09/16/profile-olivier-madiba"],["GameDev Reports · rapport de Maliyo Games sur l'industrie africaine", "https://gamedevreports.substack.com/p/maliyo-games-the-state-of-the-african"]]) ]) ])
        ] })
  ]
};
const PROJECTS_EN = {
  pro: [
    P({ title:"End-of-Year Projects: Four Games in Parallel – May–June 2026", large:true, nocover:true,
        desc:"A whole class, a single producer: from setting up production to delivery to the jury, through a mid-course crisis.", carte:"A whole class and a single producer, with an Agile method embedded in the school's Waterfall milestones.",
        img:PRO1.thumb,
        infos:{ "Role":"Producer", "Team":"4 teams of 13 to 14 people (53 in total)", "Duration":"27 May – 24 June 2026", "Tools":"Excel · PowerPoint (OneDrive) · Discord" },
        survol:{ moteur:"Unreal Engine", logo:"images/unreal-engine.png", items:["Producer","4 teams","Varied game genres","4 weeks"] },
        apercu:"For Game Sup's end-of-year project, the whole class developed four games in four weeks, and I was their producer, working with the instructors who acted as publishers. I adapted an **Agile method** to the school's Waterfall milestones, set up Excel tracking for each group and kept the supervisors and teams connected day to day. After an art direction crisis in the second week, I organised two playtest sessions for all four teams, then reset priorities with each of them. All four games were delivered to the jury, with **93% of the 1,387 tasks completed**.",
        contenu:[
          BANDE("I","The project framework",[
            LIGNE([
              T("As every year at Game Sup, each class works in teams on a project lasting three to four weeks. This edition began with several design and selection phases, which produced four projects in different genres.")
            ],[ FICHE("The constraints",["Four games to produce at the same time","Milestones set by the school: Proof of Concept, Alpha, Beta","A single producer for more than fifty people","Four weeks, with no slack to absorb delays"]) ]),
            LIGNE([ KEYART([
                      ["images/fda-castor.jpg","Le Castor et l'Écureuil","A puzzle platformer where animals try to save their endangered environment by neutralising the human infrastructure destroying Anjou's nature."],
                      ["images/fda-glow.jpg","Project GLOW","A third-person action-adventure game in the vein of inFAMOUS Second Son, where a rebel teenager with portal powers must overthrow the corporation that corrupts the gangs and pollutes the city.",1],
                      ["images/fda-insight.jpg","Insight","A married couple solves puzzles and completes trials using new powers granted by the eyes they find, to reach their respective goals in a 1930s manor in northern Massachusetts."],
                      ["images/fda-flowering.jpg","The Flowering Dead","A boss rush where survivors fight for their lives in a post-apocalyptic world overrun by mutant plants and animals."]
                    ]) ])
          ]),
          BANDE("II","Organising four teams in parallel",[
            LIGNE([
              T("With four games and more than fifty people, I knew from the start that I could not be in every room all the time. Yet the instructors' guidelines had to reach every group in the same way. So we **launched production with the whole class**, the day after the selection. Everyone heard the same guidelines at the same time, and we could set the organisation, tools and method together before refining them group by group."),
              T("To keep a direct link with each team, I appointed **two leads per group** together with the instructors, one for the Game Designers and one for the Game Artists. That did not solve everything: when I was in a meeting with one group, the other three moved on without me. **Dailies**, with the leads and the whole team, kept tracking going when I was elsewhere, and I remained the link between the instructors and the teams every day, including between milestones."),
              T("Looking back, these dailies were not enough to give everyone a clear picture of the project's progress. On a future project, I would structure them better, on the Daily Scrum model: fifteen minutes at most, focused on the sprint goal and blockers, to keep meetings short but productive.")
            ],[ SCHEMA("orga") ])
          ]),
          BANDE("III","Planning and tracking production",[
            LIGNE([
              T("The school set each milestone (Proof of Concept, Alpha, Beta) with its expected deliverables, Waterfall style, up to the Vertical Slice at the end of the project. Within this frame, each team worked in **Agile, with sprints and iterations** suited to its project. I had to connect the two, with tracking consistent enough to compare the four groups and spot delays early."),
              T("I built this tracking in Excel, on two levels. For each group, a **macro plan** sets out the sprints and the school's milestones. A **micro plan** then links each task to a sprint, a priority, a difficulty and a status: in total, **1,387 tasks** were tracked. Working documents were shared in a common PowerPoint on OneDrive, and each group had its own Discord space.")
            ],[ IMG(PRO1.macro,"Each group's Excel macro plan: sprints and milestones (Proof of Concept, Alpha, Beta)") ]),
            LIGNE([
              T("Keeping nearly 1,400 statuses up to date took constant attention, but it is what made delays and cuts visible, sprint by sprint. At delivery, **93% of the tasks were done**: the remaining 7% were these delays and cuts. What I lacked, and the first thing I would change, were **more precise end-of-sprint deliverables** for each discipline: progress was sometimes hard to check concretely.")
            ],[ IMG(PRO1.micro,"Excerpt from one group's micro plan: tasks, sprints, priorities, difficulties and statuses") ])
          ]),
          BANDE("IV","Handling the art direction crisis",[
            LIGNE([
              T("In the second week, the same problem appeared in all four groups: **art direction was unclear**, and team members struggled to picture the references. Delays quickly reached two to three days, and I could feel **the risk of crunch** coming."),
              T("We held emergency meetings with each group and **paused production for a day and a half**. That pause helped us understand where the problem came from: references that were too broad and imprecise, and a research pass that was too short at the start, because we thought the selection-phase research would be enough.")
            ],[ SCHEMA("planning","Production calendar: sprints, milestones, mid-course crisis and playtests") ]),
            LIGNE([
              T("Each group experienced the crisis in its own way, so there was no single answer. For one, I decided, in agreement with the discipline leads, **to cut several assets** that were off-brief or no longer a priority. For another, we reworked the Level Art and the atmospheric shader."),
              T("If I had to do it again, I would have **a small reference scene built in the engine** from the start, with a prop at the target quality, the desired textures and the lighting and camera intentions.")
            ],[ IMG(PRO1.kill,"Cut tasks in one group's tracking") ])
          ]),
          BANDE("V","Running playtests and reprioritising",[
            LIGNE([
              T("After the crisis, only two weeks remained. We had to decide where to put the effort, and accept dropping some things, without letting the end of the project weigh on the teams. So I organised **two playtest sessions for all four groups**, aligned with the other classes' schedules so that outside players could come."),
              T("To make the feedback usable, each team prepared **a structured questionnaire**. The one for Le Castor et l'Écureuil, for example, covered the characters, design consistency and controls, with answers rated from 1 to 7, and collected **22 responses**."),
              T("The feedback was plentiful, and often critical, at a time when morale was already low. With each team, we sorted it to keep the most important points, then **I redefined priorities and reorganised the schedules**. Seeing strangers play the projects also gave the teams new energy: despite the criticism, players enjoyed the games.")
            ],[ CAROUSEL([["images/fda-playtest-form.jpg","The playtest feedback form for Le Castor et l'Écureuil: 22 responses"],["images/fda-playtest-perso.jpg","A section of the questionnaire: how players rated the characters"],["images/fda-playtest-coherence.jpg","A section of the questionnaire: design consistency, rated from 1 to 7"]]) ])
          ]),
          BANDE("VI","What I take away",[
            LIGNE([
              T("It was the first time I had been the producer for an entire class. The mid-course crisis taught me to set aside what I thought I knew and **listen to each team's own needs**. I also learned to **delegate**, and to set up clear communication channels from the start, so that no team feels left to fend for itself.")
            ])
          ]),
          BANDE("VII","The teams",[
            LIGNE([
              T("These four games are first and foremost the work of their teams."),
              EQUIPES(EQUIPES_FDA)
            ])
          ])
        ] }),
    P({ title:"Rogue-lite Workshop – February 2026", large:true, nocover:true,
        desc:"Two teams, two animated film licences and fifteen days to deliver two playable rogue-lites in Unity.",
        carte:"Two rogue-lites in Unity in fifteen days, with a shared schedule and daily task tracking for each team.",
        survol:{ moteur:"Unity", logo:"images/unity.svg", items:["Producer","14 people per team","Rogue-lite"] }, img:"images/rogue-thumb.jpg",
        infos:{ "Role":"Producer", "Team":"2 teams of 14 people", "Duration":"2 – 20 February 2026", "Tools":"Excel" },
        apercu:"For this Game Sup workshop, two teams had fifteen days to each deliver a **2.5D rogue-lite in Unity**, based on an assigned licence: *Vampire Hunter D: Bloodlust* for one, *Mad Max: Fury Road* for the other. I was the producer for both. I kept a **shared schedule** aligned with the school's milestones and a daily task tracker for each team. Vampire Hunter E-Cycle and Mad Max Fury Rogue were delivered to the jury with **94% and 92% of tasks completed**, out of 573 tracked tasks.",
        contenu:[
          BANDE("I","The project framework",[
            LIGNE([
              T("The brief was dense for fifteen days: a full \"run, death, upgrade\" loop, a HUB to upgrade your character, at least five combat rooms and three iconic rooms assembled procedurally, a currency economy, a boss and combat with a dash, a combo and an ability. On top of that came the menus, the score screen, the splash screens and all the documentation: High Concept, Level Design, narrative, art direction and production management.")
            ],[ FICHE("Constraints",["Two games to produce at the same time","Five milestones in fifteen days: Intentions, Proof of Concept, Alpha, Beta, Gold","An animated film licence assigned to each team","The school's advice: don't think too big"]) ]),
            LIGNE([
              T("Each team received its licence from a list of animated films and series. Group 3 turned theirs into **Vampire Hunter E-Cycle**, based on *Vampire Hunter D: Bloodlust*, and Group 4 into **Mad Max Fury Rogue**, based on *Mad Max: Fury Road*.")
            ],[ IMG("images/rogue-thumb.jpg","Mad Max Fury Rogue and Vampire Hunter E-Cycle, the two workshop games") ])
          ]),
          BANDE("II","Planning on two levels",[
            LIGNE([
              T("Both teams shared the same calendar: **three one-week sprints**, aligned with the school's milestones. The first set up the blocking and the essential assets. The second pushed modelling and environments towards the final look and finished the attack system, without creating new assets. The last was kept for balancing and polish."),
              T("Underneath, each team had its own **backlog** in Excel: 336 tasks for Vampire Hunter E-Cycle, 237 for Mad Max Fury Rogue. Each task had an owner, a sprint, dates, a difficulty, a priority and a status, and each sprint had its own tab.")
            ],[ CHIFFRES([["573","tasks tracked"],["94% and 92%","tasks completed"],["3","one-week sprints"],["5","milestones in fifteen days"]]) ]),
            LIGNE([
              IMG("images/rogue-planning.png","The production schedule: phases, school milestones and one-week sprints")
            ])
          ]),
          BANDE("III","Preparing the cuts",[
            LIGNE([
              T("In fifteen days, every extra feature puts the game at risk. With each team, I drew up a **list of expendable tasks**, the first to go if time ran short: 28 for Vampire Hunter E-Cycle, 14 for Mad Max Fury Rogue. Most of them never entered the sprints. Only five found a place: the double dash, the sword and the shield on one side, the loading screen on the other were done, and some modular pipes were eventually cut."),
              T("More had to be cut during production: **seven tasks in each team**, without touching the core of the game. For Vampire Hunter E-Cycle, all of them went during sprint 2, the busiest with 137 tasks: the music manager, the merchant mockups, the emotional arc of the narrative document. For Mad Max Fury Rogue, the cuts hit a second enemy, the sand shader and some modular set pieces.")
            ],[ FICHE("The expendable list",["A double jump and a dialogue system","A cursed room and an inventory","A flamethrower enemy and a market","42 tasks listed: 37 never started, 4 done, 1 cut"]) ])
          ]),
          BANDE("IV","Tracking two teams at once",[
            LIGNE([
              T("I built the sprints with each team and cleared blockers as they came up. Each team had two leads, one in Game Design and one in Game Art, who were my day-to-day relays."),
              T("I also reviewed both teams' design documents, mostly to check that scope and feasibility fit into fifteen days.")
            ])
          ]),
          BANDE("V","What I take away",[
            LIGNE([
              T("This workshop taught me to **decide on cuts before I need them**. An expendable list prepared in advance avoids improvising during the crunch: when time runs short, you already know what to leave aside."),
              T("I had written the same sprint goals for both teams. Looking back, each would have benefited from **its own goals**, drawn from its game and its progress: they did not have the same workload, 336 tasks on one side and 237 on the other.")
            ])
          ])
        ] }),
    P({ title:"Fusion Workshop – November 2025", wip:true,
        desc:"An Agile production plan in Excel, weekly reviews and the first dailies for two teams.", carte:"An Agile production plan in Excel, weekly reviews and the first dailies, entrusted to the team leads.",
        survol:{ moteur:"Unreal Engine", logo:"images/unreal-engine.png", items:["Producer","12 to 13 people","Racing · Fusion"] }, img:"images/fusion-thumb.jpg",
        infos:{ "Role":"Producer", "Team":"2 teams of 12 to 13 people", "Duration":"3 weeks", "Tools":"Excel" },
        resume:{ contexte:"Three-week workshop at Game Sup: two teams of 12 to 13 people.",
                 role:"Producer for both teams: production plan, tracking and task distribution.",
                 resultat:"" },
        decisions:[ "An Agile production plan built in Excel, with weekly reviews.",
                    "The first dailies, entrusted to the Art and Design leads.",
                    "Tasks distributed between Game Artists and Game Designers, balancing workloads." ],
        contenu:[
          IMG("", "Production plan")
        ] }),
    P({ title:"End-of-Year Projects: My First Two Productions – June 2025", wip:true,
        desc:"My first time managing two projects in parallel, tracked in Excel and Miro.", carte:"Two teams tracked in parallel in Excel and Miro, with sprint reviews for each.",
        survol:{ moteur:"Unreal / Unity", logos:["images/unreal-engine.png","images/unity.svg"], items:["Producer","12 to 13 people","Varied genres"] }, img:"images/fin-annee-2025-thumb.jpg",
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
    P({ survol:{ items:["Producer","AA action-RPG · 15 people","Simulation","Jira · JQL"] }, cat:"Production management", title:"Jira and Agile Project: A Studio Simulation", large:true, nocover:true,
        desc:"A simulation run on my own: the production of a fictional AA action-RPG structured in Jira, from the boards to the risk register.",
        carte:"A fictional studio run in Jira with Scrum: sprints, bugs, risks and automations.",
        img:"images/jira-vignette.jpg",
        infos:{ "Role":"Producer (simulation, run solo)", "Project":"Fictional AA action-RPG · 15 people + 4 vendors", "Tools":"Jira · JQL", "Period":"October 2026", "Workload":"About 20 hours", "Training":"Agile with Atlassian Jira · Atlassian, via Coursera" },
        apercu:"To learn Jira on a realistic case, I organised the production of a **fictional AA action-RPG** on my own: **15 people and four vendors**, modelled on Ember Lab's setup for Kena: Bridge of Spirits. The space now has five boards, a filter library, five automations and a register of seven risks. **A simulated sprint** let me check that each element answers a production question. I play every role and the data is simulated: the project shows how I structure the tool, without claiming to measure how I lead a team.",
        contenu:[
          BANDE("I","The project framework",[
            LIGNE([
              T("I knew the basics of Jira and wanted to see how a studio organises itself in it, with several teams, vendors and milestones spread over years. I relied on what Ember Lab has made public about the production of Kena: Bridge of Spirits: my fictional game is an AA action-RPG produced over three years by 15 people, outsourcing QA, part of the animation and art, and the music."),
              T("I ran this project alongside the Agile with Atlassian Jira course (Atlassian, via Coursera), whose **certificate I earned on 14 October 2026**."),
              LIEN("Verify the certificate","https://coursera.org/verify/EQE4DN5JX2XG")
            ],[ FICHE("The constraints",["A 15-person team, on a free plan limited to 10 users","Jira cannot backdate a work item: the simulation runs in real time","Work done alone, playing every role"]) ])
          ]),
          BANDE("II","Organising the studio and its vendors",[
            LIGNE([
              T("I split the team into two **squads** of six, Gameplay and World, plus a Transverse group (creative direction, production, tech art). Vendors get their own Squad value, External, and an internal point of contact who approves their deliveries, because their work does not follow a squad's sprint.")
            ],[ SCHEMA("squads","The team: two squads of six, a transverse group and four vendors") ]),
            LIGNE([
              T("Each work item is **sorted along four axes**: where in the game (the component), who does it (the squad), for which phase (the version) and in which cross-cutting category (the label). Every view of the project then becomes a simple query. This is why a tech artist's task belongs to the squad that commits to delivering it: filed under Transverse, it would not appear on any board.")
            ],[ CAROUSEL([["images/jira-versions.png","The project versions, with their exit criteria"],["images/jira-composants.png","Some of the 29 components: systems, disciplines and levels"],["images/jira-squad.png","The Squad field and its four values"],["images/jira-ticket.png","A Vertical Slice Story, sorted along the four axes"]]) ])
          ]),
          BANDE("III","Preparing the Vertical Slice",[
            LIGNE([
              T("I broke the Vertical Slice backlog down into player-value Stories, each split into subtasks with a named owner. This revealed two bottlenecks, the **gameplay animator** and the **sound designer**, involved in more than half of the Stories. It also showed that the **critical path** runs through the vendors: three Stories are waiting on an external delivery, linked to the work item it blocks. I therefore committed the squads cautiously, 21 points for Gameplay and 13 for World, and these findings became the first risks in the register."),
              T("Each sprint starts from a **goal written from the player's point of view** that can be checked in a demo. For Gameplay S01: \"The player can fight: attack, dodge, take damage, with enemies able to follow them\". A Story only enters a sprint once it is estimated and has its acceptance criteria, squad, components and version, with its dependencies cleared or dated (**Definition of Ready**). The **Definition of Done** sets the other end: a Story is only finished once its criteria are checked and it has been reviewed, validated by QA and integrated into the build with no blocking bug.")
            ],[ CHIFFRES([["23","Stories in the Vertical Slice"],["126","Estimated points"],["13 and 15","Stories for the animator and the sound designer"],["3","Vendor deliveries blocking Stories"]]) ])
          ]),
          BANDE("IV","Giving everyone the right visibility",[
            LIGNE([
              T("In Jira, a board is just a view on top of a filter. So I made **one per audience**: a Scrum board per squad, a Kanban board for QA, another for vendor deliveries, which arrive in batches, and a Production board that sees the whole project but on which no sprint is ever started.")
            ],[ CAROUSEL([["images/jira-board-production.png","Production: the overview, with no sprint"],["images/jira-board-gameplay.png","Gameplay: the squad's sprint, grouped by Epic"],["images/jira-board-world.png","World: the squad's sprint, grouped by Epic"],["images/jira-board-vendors.png","Vendors: the deliveries expected from each vendor"]]) ]),
            LIGNE([
              T("For the producer, a **filter library** answers the Monday-morning questions: where the sprint stands, what is blocked or carried over, whether the scope has moved, whether the data can be trusted. These filters feed the dashboard.")
            ],[ IMG("images/jira-filtres.png","The Vertical Slice scope filter and the list of saved filters") ]),
            LIGNE([
              T("Stories follow a short workflow: **a review, then a QA check** before Done. Every step back is a named transition, which makes it countable.")
            ],[ IMG("images/jira-workflow-dev.png","The Story and Task workflow") ])
          ]),
          BANDE("V","The bug pipeline",[
            LIGNE([
              T("I then reworked the bug ticket with its two readers in mind: the QA team, who need every useful detail right there, and the producer, who must be able to read it quickly. Drawing on *The Pocket Mentor for Video Game Testing* by Harún H. Ali, I added **dedicated fields**. The ticket first places the bug: the build number, the version where it was found and the one where it will be fixed, and the Epic it affects. It then describes it through the expected and actual results. Finally, the number of attempts and occurrences gives the **repro rate**, which shows whether the bug comes back every time or only now and then."),
              T("The ticket also separates **severity** from **priority**. Severity says how broken the game is, priority sets the order in which bugs are fixed: a bug can be severe but rare, or minor but permanent, and it is up to the producer to weigh the two. With the assignee, which Jira displays, you can see at a glance **what is broken, how badly, who is handling it and for which version**. In the screenshot I am both reporter and assignee, since I play every role; in a real team, the reporter would be the tester and the assignee the developer fixing the bug.")
            ],[ IMG("images/jira-ticket-bug.png","A blocker bug reproduced 8 times out of 10, fixed and closed: Blocker severity, Highest priority, Very frequent likelihood, and the Story it was blocking") ]),
            LIGNE([
              T("Likelihood is no longer picked by eye, which made it vary from one tester to another for the same bug: an **automation** now derives it from the repro rate. As soon as the number of attempts or occurrences changes, it calculates the rate, writes it into the ticket and picks the option: **Always at 100%, Very frequent from 70 to 99%, Sometimes from 30 to 69%, Rarely below that**. If occurrences exceed attempts, it leaves the likelihood unchanged and flags the error in a comment; at 0%, the decision stays with the tester. The bug in the previous screenshot, reproduced 8 times out of 10, is therefore set to Very frequent automatically.")
            ],[ IMG("images/jira-auto-repro.png","The repro rate rule: calculation, value check, then one branch per likelihood option") ]),
            LIGNE([
              T("On the QA board, **swimlanes** are JQL queries that sort bugs by severity, blockers at the top, and the card shows the priority. Each column has **a work-in-progress limit**: when a column overflows, the team finishes bugs before opening new ones.")
            ],[ CAROUSEL([["images/jira-board-qa.png","The QA-Bugs board: one lane per severity"],["images/jira-colonnes-qa.png","The columns and their work-in-progress limits"]]) ]),
            LIGNE([
              T("The workflow sets one rule: **a bug is never closed without a resolution**. Verified closes a fixed bug with the Done resolution; Rejected, from triage, closes it as Won't Do, Duplicate or Cannot Reproduce. Reopen sends back a bug whose fix does not hold, which lets you count reopened bugs. A control query checks that no closed bug is missing a resolution.")
            ],[ SCHEMA("bugflow","The path of a bug, its ways back and its resolutions") ])
          ]),
          BANDE("VI","Testing the tool with a simulated sprint",[
            LIGNE([
              T("To check that each report answers its question, I ran a first sprint for each squad, compressed to one week, with a **scenario of eleven bugs** written to test the workflows: a blocker fixed the same day, a duplicate, a bug that cannot be reproduced, a reopened bug and a crash added mid-sprint. I closed the sprints early, hence the burndown that drops all at once, since Jira builds its reports from real dates.")
            ],[ IMG("images/jira-sprint-report.png","The Gameplay S01 sprint report: goal, burndown and completed work items, including two bugs added mid-sprint") ]),
            LIGNE([
              T("The **producer dashboard** tracks three things: sprint progress, build quality and upcoming risks. Its **control filter** lists incomplete work items, missing a squad or done without a resolution, which keeps the other figures reliable. The dashboard evolved with the project: after the first sprint, bug tracking and the risk register were added alongside the burndowns.")
            ],[ CAROUSEL([["images/jira-dashboard.png","During the sprint: burndowns, Vertical Slice scope and checks"],["images/jira-dashboard-fin.png","After the first sprint: control filter at zero, eleven bugs created and resolved, risks ranked by score and the probability × impact matrix"]]) ])
          ]),
          BANDE("VII","Automating the repetitive actions",[
            LIGNE([
              T("I also wanted to master Jira's automations. Every rule follows the same logic: **when** an event happens, **only if** a condition is true, **then** an action runs. A subtask inherits its Story's squad, a Story starts with its first subtask, a blocker bug triggers an alert, and a bug's repro rate sets its likelihood. The condition keeps a rule safe: without it, the one that starts a Story would try to restart it with every subtask.")
            ],[ SCHEMA("autoflow","Five rules of the space, read with the same logic") ]),
            LIGNE([
              T("Each rule's **audit log** showed me what was going wrong. One calculation failed because two fields on the site had the same name: I fixed it by calling mine by its ID.")
            ],[ CAROUSEL([["images/jira-automations.png","The rules active on the space"],["images/jira-audit-erreur.png","The audit log: the score calculation fails, impact comes back empty"],["images/jira-audit-correctif.png","The fixed trigger: impact called by its ID, cf[10091]"],["images/jira-flow-story.png","When a subtask starts, its Story moves to In Progress if it is not already"]]) ])
          ]),
          BANDE("VIII","Anticipating with a risk register",[
            LIGNE([
              T("I added a **Risk work type**, built around the questions a producer asks about a risk: how likely it is, how serious it would be, how to see it coming, what to do to avoid it, and what to give up if that is not enough. Each risk therefore has a probability, an impact, a warning signal, a mitigation and a fallback plan, and it is **linked to the work items it threatens**. The first ones come from what the project had revealed: the two bottlenecks, vendor deliveries and scope creep."),
              T("Scope creep became risk R4. Rated possible (3 out of 5) with a major impact (4 out of 5), it scores 12. Its warning signal is measurable: the Vertical Slice scope filter counts more work items during the sprint. The mitigation sets a simple rule, **any addition must be approved by the producer and traded for an equal cut**, and if that is not enough, the fallback plan **freezes the scope two sprints before the milestone**. It is linked to the Combat and Act 1 Epics, and mitigation is under way."),
              T("On the dashboard, a matrix crosses probability and impact next to a list ranked by score: you can see which risks to handle first and which are already being mitigated.")
            ],[ CAROUSEL([["images/jira-risque-r4.png","Risk R4, scope creep: score, warning signal, mitigation, fallback plan and threatened Epics"],["images/jira-risques-liste.png","The seven risks and their status: five being mitigated, two monitored"],["images/jira-risques-matrice.png","The probability × impact matrix"]]) ]),
            LIGNE([
              T("The workflow stays short. An identified risk moves to monitoring, then to mitigation when its warning signal appears, and back to monitoring if the measure worked. Its resolution says what happened (Mitigated, Occurred or Obsolete), and a reopened risk loses it. The score, probability × impact, is **calculated by an automation**, so it cannot contradict its two components.")
            ],[ SCHEMA("riskflow","The path of a risk, its resolutions and how its score is calculated") ])
          ]),
          BANDE("IX","What I take away",[
            LIGNE([
              T("I learned to **think of Jira as a database**: once the work items are well sorted, every team, milestone and quality check is just a query. The tool makes the producer's decisions visible: who is overloaded, what depends on outside partners, what we agree to postpone."),
              T("This space has become a **reusable foundation**: the four sorting axes, a filter library with its control filter, workflows where every closure carries a resolution, a bug ticket that separates measurement from judgement, a risk register and a few tested automations. On another project, all it takes is adapting the values to the team and the game."),
              T("On a real project, I would open **the risk register at kickoff** and simulate two full weeks in real time.")
            ])
          ])
        ] }),
    P({ survol:{ items:["Producer","AA game · 42 people","48-month production","Excel · Coda · ClickUp"] }, cat:"Production management", title:"Wyrdfall", nocover:true, desc:"Production plan for a 48-month AA game: team, budget, schedule, sales estimate and break-even point.", carte:"The production management file for a 48-month AA game: team, schedules, budget, sales and break-even point.", large:true,
        img:PROJECTS_FR.perso[1].img,
        infos:{ "Role":"Producer", "Context":"Production management · Game Sup", "Date":"March 2026", "Project":"AA · 42 people at peak", "Tools":"Excel · Coda · ClickUp", "Workload":"20 hours out of 90 (whole assignment)", "Deliverables":"Team · Planning · Budget · Market Analysis" },
        apercu:"This production exercise was about Wyrdfall, a fictional AA game. I only show the production management part here, where I acted as producer, from building the team to the break-even point. The result: **a €9M budget over 48 months**, a break-even point at around **451,000 sales** and two ROI scenarios, each in three levels, all in an Excel file that updates in one click.",
        contenu:[
          BANDE("I","The brief and my role",[
            LIGNE([
              T("For this exercise, we had to provide a production management document covering several areas: a credible team plan, a macro plan and a micro plan of the production in Coda and ClickUp, a development budget in Excel and a sales estimate (Market Analysis)."),
              T("I chose an AA-scale project comparable to GreedFall: Wyrdfall, with a team of 42 people at peak production, within the usual range for an AA game (30 to 50 people)."),
              T("The High Concept document and the prototype, also required, were produced during the rest of the assignment and are not shown here.")
            ],[ FICHE("Production management · shown here · 20 h",["Team plan","Macro plan and micro plan (Coda, ClickUp)","Development budget (Excel)","Sales estimate (Market Analysis)"]), FICHE("Other deliverables · 70 h",["High Concept document","Prototype"]) ])
          ]),
          BANDE("II","A clear, adjustable production file",[
            LIGNE([
              T("My Excel file had to stay readable, with tabs grouped by colour and a navigation bar, but above all adaptable: **the budget recalculates in one click** when someone joins the studio, changes seniority or is assigned new software.")
            ],[ CAROUSEL([[EX1.nav,"Home page of the production file: buttons and navigation through colour-coded tabs"],[EX1.budget,"Budget overview: team, duration and budget by department"]]) ]),
            LIGNE([
              T("Wyrdfall is a 48-month AA project, comprising 36 months of production and 12 months of live service, for a team of **42 people**, 25 of whom remain on the live phase. The total project budget comes to **€9,033,682**, of which €7,070,677 is salaries (78%), the rest being split between Software, Localisation, Utilities and Outsourcing."),
              T("I built the team by **reasoning in production elements**, drawing on Sandfall Interactive's team for Clair Obscur: Expedition 33. An AA project calls for a lean team, hence 42 people at peak. After release, headcount drops to 25: this simulates the studio starting other projects, and a smaller production dedicated to the expansion.")
            ],[ CHIFFRES([["€9,033,682","Total Budget"],["42","People on the team"],["48 months","36 production · 12 live"],["78%","Share of salaries"]]) ])
          ]),
          BANDE("III","The Market Analysis and the break-even point",[
            LIGNE([
              T("To estimate potential sales on Steam, I started by **analysing the game's competitors**, extracting usable averages for my projection scenarios. To build a large sample, I selected games released over 11 years, from 2014 to 2025: a fairly long period, which would be better narrowed to five years.")
            ],[ IMG(EX1.market,"Competitor analysis: sales, estimated revenue and averages") ]),
            LIGNE([
              T("The extracted data allowed me to propose **two scenarios**, an optimistic one and a more conservative one, each broken down into **three risk levels** (high, average, low), to cover the range of possible outcomes.")
            ],[ CAROUSEL([[EX1.roiCons,"ROI estimate, conservative scenario: 250,000 followers, in high, average and low cases"],[EX1.roiOpti,"ROI estimate, optimistic scenario: average sales from the Market Analysis, in high, average and low cases"]]) ]),
            LIGNE([
              T("To know when the project becomes profitable, I calculated its **break-even point**. From a price of €49.99, I deducted Steam's share, taxes and the Unreal Engine royalty in one go (55%), then refunds. It is a cautious choice: each sale only brings in about €20, a little less than in reality. The budget is covered from about **451,000 sales**. If the project holds up under this assumption, it will hold up under a more favourable one."),
              T("In the average conservative scenario, I estimate sales at 482,000, just above the threshold, for a profit of €616,438, an **ROI of about +6.8%**. The calculation starts from Steam followers: I estimate wishlists at 9.64 times their number, so 2.41 million for 250,000 followers, and a share of those wishlists converts into sales. Everything therefore depends on the **wishlist conversion rate**: 20% in the average case, 26% in the high case and 4.8% in the low case. At the average rate, about 234,000 followers would be enough to reach the threshold, against the 250,000 planned. To stay cautious, I varied the revenue per sale by about €2 from one case to another: about €21.80 in the high cases, €20 in the average cases and €18.70 in the low cases. These estimates only count Steam sales, without the DLC."),
            ],[ TABLEAU("Net profit and ROI by scenario · Total budget: €9,033,682",["Scenario","Estimated sales","Net profit (ROI)"],["Conservative: 250,000 followers", ["High", "626,600", "+ €4,639,128 (+ 51.4%)"], ["Average", "482,000", "+ €616,438 (+ 6.8%)"], ["Low", "115,680", "− €6,873,790 (− 76.1%)"], "Optimistic: average sales from the Market Analysis", ["High", "959,400", "+ €11,901,031 (+ 131.7%)"], ["Average", "738,000", "+ €5,741,809 (+ 63.6%)"], ["Low", "177,120", "− €5,726,628 (− 63.4%)"]]) ])
          ]),
          BANDE("IV","Planning a four-year project",[
            LIGNE([
              T("Finally, I had to plan **a four-year project**, through to the release of the planned DLC, when our school workshops last three weeks."),
              T("To place **Epics and Stories** across the whole production, I had to take every part of the project into account: core features, levels and QA integration.")
            ],[ IMG(EX1.epic,"Macro plan: the production's Epics") ]),
            LIGNE([
              T("I completed this work with a detailed sprint and its tasks: **a pre-production sprint** aimed at preparing the Vertical Slice."),
              T("This part pushed me beyond the sprint logic of our tightly constrained three-week workshops, and made me reason step by step about what each sprint needs from the one before.")
            ],[ IMG(EX1.sprint,"Pre-production sprint: tasks, priorities and story points") ])
          ]),
          BANDE("V","What I take away",[
            LIGNE([
              T("Looking back, **I underestimated the workload of the QA team**: a larger headcount would be needed to avoid a possible crunch. The Sound Design team is understaffed too."),
              T("It would also be useful to study the **funding available** to a studio of this size to round out the plan: regional, national and European grants, bank financing, Kickstarter.")
            ])
          ])
        ] }),
    P({ survol:{ items:["Author of the GDD","Turn-based RPG","90 hours","67 pages"] }, cat:"Game Design and Narrative Design", title:"Castalie's Tears", large:true, nocover:true,
        desc:"Game Design Document for a mythology-inspired turn-based RPG: the core loop and its systems, then their embodiment in the universe, the character and a Narrative Design level.", carte:"The Game Design Document for a turn-based mythological RPG: core loop, systems and their embodiment in the story.",
        img:CT.thumb,
        infos:{ "Role":"Author of the GDD", "Context":"Game Design · Game Sup", "Date":"April 2025", "Workload":"90 hours", "Deliverable":"Game Design Document · 67 pages" },
        apercu:"For this Game Design exercise, we had to design a game based on a mythical creature from an assigned country, and I was given Greece. I wrote the Game Design Document for Castalie's Tears, **a turn-based RPG**, from the concept to a complete level, making sure **every mechanic meant something in the story**.",
        contenu:[
          BANDE("I","The idea and the concept",[
            LIGNE([
              T("Among the Greek mythical creatures, I chose **the Naiads**, goddesses of the waters. From there came a simple idea: a Naiad travels through Greece to save divinities and fight Typhon's armies. The player embodies **Castalie, guardian of the Delphi spring**, and meets heroes and gods along the way, who become her companions."),
              T("Castalie's Tears is a single-player turn-based RPG designed for PC and Nintendo Switch, with a premium model. To place it: **Dragon Quest XI meets Dragon Age: Inquisition** in a universe close to Immortals Fenyx Rising. It is a slow-paced game that rewards thinking and organisation more than reflexes.")
            ],[ CAROUSEL([[CT.pitch,"The core statement: Castalie against Typhon"],[CT.one,"The one-liner and its three references"],[CT.info,"The project information sheet"]]) ])
          ]),
          BANDE("II","Intentions, pillars and core loop",[
            LIGNE([
              T("I started from **values (courage, cooperation, resilience)** and themes: survivor guilt, trust, and the question “what is a hero?”. These intentions become **three gameplay pillars**: fight Typhon's tides, explore a desolate world, and take care of your Source to make it grow."),
              T("I also listed **what the game will not include**, to keep the scope under control: multiplayer, grid-based tactical combat, a skill tree, mini-games, stealth, multiple endings.")
            ],[ CAROUSEL([[CT.pillars,"The three gameplay pillars"],[CT.notdo,"What the game is not"]]) ]),
            LIGNE([
              T("The player manages their base, explores, solves puzzles or fights, gathers resources and levels up, then crafts or trades before returning to base. I labelled each step by its role in the game economy (source, converter, drain, trader) to check that **the loop feeds itself as much as it consumes**."),
              T("The game targets an active adult audience that plays in short sessions: **Achiever first, then Explorer** in Bartle's taxonomy. They want depth and choices, hence a game that bets on story and management rather than puzzles.")
            ],[ IMG(CT.loop,"The core loop of Castalie's Tears") ])
          ]),
          BANDE("III","From mechanics to story",[
            LIGNE([
              T("Typhon has defeated the gods and scattered their powers, **the Divine Graces**. What remains is a barren land, ruins and a few sanctuaries. In this world, **every mechanic is embodied in the story**: managing your base means protecting a sacred fountain, and each new skill is the inherited power of a fallen god."),
              T("Even the loot tells a story: Typhon's beasts devour fragments of Grace to grow stronger, so what the player collects is also what the enemy craves.")
            ],[ CAROUSEL([[CT.realm,"The Realm of Light before the Fall"],[CT.typhon,"Typhon"],[CT.sealed,"A Sealed Temple"]]) ]),
            LIGNE([
              TABLEAU("One mechanic, one embodiment",["Mechanic","Narrative embodiment"],[["The Source (base management)","The sacred fountain of Delphi, which shelters refugees"],["Divine Grace (skills, crafting)","The powers of the fallen gods, scattered by Typhon"],["Companions (recruitment)","Minor deities, heroes and refugees to rescue"],["Sealed Temples (dungeons, bosses)","The ruins where the great gods are held"],["Progression","Castalie regaining confidence, from fragile Naiad to leader"]],true)
            ])
          ]),
          BANDE("IV","Castalie and the Temple of Apollo level",[
            LIGNE([
              T("I built Castalie on **a flaw and an evolution**: she lacks confidence and distrusts her powers and strangers. Over the adventure, she becomes a fighter and a leader, and her voice grows more assured."),
              T("The first level, the ruins of the Temple of Apollo, her mentor, is designed as **a walk through memory**: mosaics tell the past, and Castalie comments on what she remembers. **Intensity rises in steps** between rooms, with breathers, up to the boss waiting where she used to talk with Apollo.")
            ],[ IMG(CT.castalie,"Castalie, the Naiad of the Delphi spring","sm") ]),
            LIGNE([
              CAROUSEL([[CT.moodboard,"Level moodboard"],[CT.ld,"Level layout"],[CT.mol,"Molecular diagram: rooms and their links"],[CT.pacing,"Level intensity curve"]])
            ])
          ]),
          BANDE("V","What I take away",[
            LIGNE([
              T("A GDD must **link intentions to mechanics**, and mechanics to what the player feels. I tried to make that link readable, from pillar to level."),
              T("As a producer, this is what now helps me understand what is being asked of design teams, estimate its scope, and know where the heart of a project lies when choices have to be made.")
            ])
          ])
        ] }),
    P({ survol:{ items:["Author of the study","Market analysis","Source cross-checking","30 slides"] }, cat:"Market analysis", title:"The African Video Game Market: The Case of Nigeria", large:true, nocover:true,
        desc:"A study of the African video game market through the case of Nigeria: a mobile, local model that breaks away from Western AAA, its drivers and its limits.", carte:"A market driven by mobile and a young population, studios that speak to local audiences, and infrastructure that still holds it back.",
        img:NG.thumb,
        infos:{ "Role":"Author of the study", "Context":"Video game culture · Game Sup", "Date":"January 2025 · sources checked in October 2026", "Deliverable":"PowerPoint presentation · 30 slides" },
        apercu:"For this video game culture exercise, I studied the African video game market through the case of Nigeria, cross-checking and critically reviewing my sources. I found **a mobile, local model**, driven by a young population but held back by infrastructure. My production takeaway: budget, schedule, platform and payment method **are decided together**.",
        contenu:[
          BANDE("I","Research question and approach",[
            LIGNE([
              T("The video game market is still dominated by Western and Japanese centres, with the rise of the Chinese market, while Africa is experiencing a recent boom. My research question: **can we see an African model emerging**, and how does it break away from the Western one? I answer it through the case of Nigeria."),
              T("As a producer, I read this market through **its constraints**: network, electricity, purchasing power, access to payment. They are what explain the studios' choices, from platform to business model and even the pace of production.")
            ],[ CITATION("“The rise of the video game industry in Africa is attracting investors' attention, with significant annual growth.”","Nathan Bonnet, Afrikactus, 15 May 2024") ])
          ]),
          BANDE("II","A young, mobile market driven by demographics",[
            LIGNE([
              T("The industry is still young: the first known studio, Celestial Games, was founded in 1994 in South Africa. According to Mordor Intelligence (2024 edition), the African market is expected to grow from $2.14 bn in 2024 to $3.72 bn in 2029, **about 11.6% a year**, against about 9.3% for the world market by my calculation ($272.86 bn → $426.02 bn). Newzoo and Carry1st put the same market at $1.8 bn in 2024: the scopes differ, so I do not mix the two series. Yet Africa accounts for **less than 1%** of the world market.")
            ],[ SCHEMA("marche","The African video game market, 2024-2029 (Mordor Intelligence), compared with the world market"), FICHE("A few pioneering studios",["South Africa: Celestial Games (1994)","Cameroon: Kiro'o Games (project started in 2003, studio founded in 2012)","Ghana: Leti Arts (2009)","Nigeria: Kuluya, Gamsole and Maliyo (around 2012)"]) ]),
            LIGNE([
              T("This market relies on **mobile**: in 2022, 200 million Africans played on their phones, and **about 90% of revenue** came through smartphones (Afrik.com). The number of players across all platforms varies widely between sources (from 349 to over 600 million): these figures do not measure the same thing, so I do not compare them."),
              T("The driver of this growth is demographic: 1.4 billion inhabitants, 2.5 billion expected by 2050, and **over 60% under 25** (World Economic Forum).")
            ],[ CHIFFRES([["200 M","mobile players (2022)"],["90%","of revenue from smartphones"],["> 60%","under 25"],["2.5 bn","inhabitants expected in 2050"]]) ])
          ]),
          BANDE("III","Nigeria: mobile, local studios",[
            LIGNE([
              T("In Nigeria, the industry revolves around **four major studios** founded around 2012: Maliyo Games, ChopUp, Gamsole and Kuluya. All of them focus on mobile, in a country that had 210 million active mobile subscribers in 2022 (NCC)."),
              T("In 2011, Bayo Puddicombe turned the danfo, Lagos' iconic yellow bus, into a game: Danfo passed one million downloads. He then founded Pledge 51 with Zubair Abubakar, the company that launched ChopUp. In 2016, the studio had four employees and released a new game every six weeks.")
            ],[ ETAPES("ChopUp in a few dates",[["2011 · Danfo","Bayo Puddicombe creates the game Danfo: over one million downloads"],["2012 · Pledge 51, then ChopUp","Bayo Puddicombe and Zubair Abubakar found Pledge 51, the company that will launch ChopUp, on the back of Danfo's success"],["2016 · Production pace","4 employees and a new game every 6 weeks"]]) ]),
            LIGNE([
              T("Its business model gets around low banking penetration: in Nigeria, more than half of adults have no bank account (Global Findex 2021). ChopUp therefore partners with mobile operators and gives access to its catalogue for **a small weekly subscription, charged directly to the phone bill**. Chicken Escape and Jagun: Clash of Kingdoms were downloaded 100,000 times within a few months.")
            ],[ IMG(NG.jagun,"Jagun: Clash of Kingdoms, ChopUp, 2015"), IMG(NG.chicken,"Chicken Escape, ChopUp, 2015") ]),
            LIGNE([
              T("These studios turn away from Western AAA to speak to local audiences. For Matteo Maillard (Jeune Afrique, 2024), they have created **an African exception** against AAA games whose stories often revolve around “the American navel or European cultural codes”. Daily life becomes game material, like Lagos traffic jams in Okada Ride (Maliyo, 2012), and so do history and myths: Iwaju: Rising Chef (Maliyo, 2024), Aurion: Legacy of the Kori-Odan (Kiro'o Games, Cameroon)."),
              T("With few suitable university programmes, **studios also provide training**: Maliyo Games offers a free, three-month online course (Game Art Academy).")
            ],[ IMG(NG.okada,"Okada Ride, Maliyo Games, 2012"), IMG(NG.iwaju,"Iwaju: Rising Chef, Maliyo Games, 2024"), IMG(NG.aurion,"Aurion: Legacy of the Kori-Odan, Kiro'o Games, 2016") ])
          ]),
          BANDE("IV","Esports and obstacles to growth",[
            LIGNE([
              T("Young people (70% of Nigerians are under 30) also drive esports. According to PwC (via Agence Ecofin, November 2023), advertising revenue from video games and esports in Nigeria would rise from $111 m in 2022 to $472 m in 2027."),
              T("While cross-checking sources, I noticed **an inconsistency**: the same article announces 7.1% growth a year, which would lead to about $156 m in 2027, not $472 m. More recent PwC editions also give lower figures. I therefore retain **a trend**, double-digit growth driven by the smartphone, rather than an amount.")
            ],[ TABLEAU("Video games and esports in Nigeria according to PwC, by edition",["Source","Period","Revenue"],[["Agence Ecofin, Nov. 2023","2022 → 2027","$111 → 472 m (advertising)"],["Nairametrics, Feb. 2025","2023 → 2024","$192 → 217 m"],["Nairametrics, Feb. 2025","2023 → 2028","$192 → 322 m (+10.9% a year)"]],true) ]),
            LIGNE([
              T("Yet the model remains heavily constrained. I identified **five obstacles**, from the most material to the most structural."),
              TABLEAU("Obstacles to the sector's development",["Obstacle","Finding"],[["Internet","Fragile network, dependent on a limited number of submarine cables (BBC News)."],["Electricity","12 national grid collapses in 2024. 82% of African developers rate an uninterrupted power supply as critical (report by Maliyo Games, Hugo Obi's studio)."],["Purchasing power","Few computers and powerful smartphones: free games, designed for casual players."],["Training","Few long-form video game training programmes, if any."],["Funding","Revenue often tied to foreign donors. Observers quoted by Courrier International find these games “well-meaning”: a perception, not a measured finding."]],true)
            ])
          ]),
          BANDE("V","What I take away",[
            LIGNE([
              T("The African market is growing, driven by a young population, mobile gaming and esports. Its model, close to the Asian market in the place it gives to mobile, turns away from AAA in favour of everyday games and national history, but it remains heavily constrained by infrastructure, purchasing power and funding."),
              T("For production, my takeaway is that **a market is first read through its constraints**. ChopUp chose mobile, built its business model around low banking penetration and set its production pace according to its resources. For a producer, the lesson is that budget, schedule, platform and payment method are decided together, from the start. This study also taught me to **tell an established figure from a projection** before building a plan on it.")
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
Object.entries(PROJECTS_EN).forEach(([key,list])=>list.forEach((p,i)=>{p.id=PROJECTS_FR[key][i].id;p.key=key;}));
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
    { icone:"design", titre:"Game Design", items:["Game Design Documentation","Gameplay loop and systems","Player theories and personas"] },
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
  image: "cv/cv-apercu-v5.jpg",
  pdf: "cv/MERLE_Thibault_CV_PROD_v5.pdf",
  filename: "MERLE_Thibault_CV_PROD.pdf"   // nom du fichier téléchargé
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
