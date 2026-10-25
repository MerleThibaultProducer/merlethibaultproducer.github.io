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
    "Je m'appelle Thibault et je suis en dernière année à Game Sup. Sur quatre productions d'école, j'ai eu l'occasion de planifier et de suivre des projets avec jusqu'à quatre équipes en simultané, des premiers jalons jusqu'aux playtests. J'écoute chacun, j'adapte les méthodes de production à chaque équipe et je m'assure que la communication est claire pour que tout le monde avance ensemble.",
    "Un master d'anthropologie et cinq ans d'enseignement m'ont appris à expliquer et à transmettre. Je recherche aujourd'hui un stage de fin d'études en production à partir de janvier 2027, partout en France ou en télétravail."
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
    "My name is Thibault and I'm in my final year at Game Sup. Across four school productions, I have planned and followed projects with up to four teams in parallel, from the first milestones to the playtests. I listen to everyone, adapt production methods to each team, and make sure communication stays clear so everyone moves forward together.",
    "A master's in anthropology and five years of teaching taught me to explain and pass on knowledge. I am now looking for an end-of-studies production internship starting in January 2027, anywhere in France or remote."
  ],
  legal: [
    "© 2026 Thibault Merle – All rights reserved.",
    "Hosted by GitHub Pages (GitHub, Inc.)."
  ]
};
let SITE = SITE_FR;

/* ---------- AIDE-MÉMOIRE : les blocs de contenu d'un projet ----------
   T("texte")                      paragraphe (séparez plusieurs paragraphes par une ligne vide)
   H("sous-titre")                 intertitre
   IMG("image", "légende")         image pleine largeur (légende facultative)
   GALERIE(["img1","img2"], "lg")  images en vignettes, deux par ligne
   LISTE(["point 1","point 2"])    liste à puces
   CITATION("texte", "auteur")     citation
   LIEN("libellé", "https://...")  bouton-lien
   Les blocs s'affichent dans l'ordre où vous les écrivez.

   MISE EN FORME DU TEXTE (dans T, LISTE, etc.) :
   **mot**  → en gras          ==mot==  → en couleur (doré)

   VIGNETTE : carte:"texte court" s'affiche sous la vignette (sinon desc). La ligne d'infos reprend les 2 premières infos.

   PROJET EN BANDES (page large, comme l'Exercice 1) : ajoutez  large:true  au projet, puis
   BANDE("I", "Titre de la partie", [ LIGNE([blocs de texte], [blocs à droite]), ... ])
     – LIGNE(gauche, droite) : le texte à gauche, les images/tableaux à droite (une LIGNE par paragraphe illustré)
     – à droite : IMG("image","légende"), CHIFFRES([["valeur","libellé"],...]), FICHE("titre",["point",...]),
       TABLEAU("titre",["col1","col2","col3"],[ "Groupe", ["ligne","a","b"], ... ])
     – toute image (IMG) s'agrandit au clic.
     – LIGNE(gauche, droite, "dessous") : les blocs de droite passent sous le texte, côte à côte et à espacement égal
     – EQUIPES(liste) : carrousel des équipes (une diapositive par groupe, voir EQUIPES_FDA).
     – une grande image (IMG) ou un CAROUSEL placé côté texte, dans une LIGNE sans partie droite,
       s'affiche sous le texte, centré sur la page : LIGNE([T("texte"), IMG("image","légende")])

   POUR AJOUTER UN PROJET : copiez un bloc P({ ... }) entier, collez-le dans la
   bonne liste (pro, perso ou exo) et changez les textes. C'est tout : la page
   de détails, le bouton et la navigation gauche/droite se créent tout seuls.
   L'ordre dans la liste = l'ordre sur le site.                              */
const T=text=>({k:"t",text}), H=text=>({k:"h",text}), IMG=(src,cap="",cls="")=>({k:"img",src,cap,cls}),
      GALERIE=(srcs,cap="")=>({k:"gal",srcs,cap}), LISTE=items=>({k:"ul",items}),
      CITATION=(text,by="")=>({k:"q",text,by}), LIEN=(label,url)=>({k:"a",label,url});
const BANDE=(num,titre,lignes)=>({k:"band",num,titre,lignes}), LIGNE=(t,m=[],pos="")=>({t,m,pos}),
      CHIFFRES=items=>({k:"stats",items}), FICHE=(titre,items)=>({k:"fiche",titre,items}),
      TABLEAU=(titre,cols,rows,plain=false)=>({k:"tbl",titre,cols,rows,plain}), SOURCES=items=>({k:"src",items});
const ETAPES=(titre,items)=>({k:"etapes",titre,items}), SCHEMA=(nom,cap="")=>({k:"schema",nom,cap});
const CAROUSEL=items=>({k:"car",items});
const EQUIPES=groupes=>({k:"teams",groupes});
const KEYART=items=>({k:"keyart",items});
const P = o => o;

const PRO1 = { thumb:"images/fin-annee-2026-thumb.jpg", macro:"images/fin-annee-2026-macro.jpg", micro:"images/fin-annee-2026-micro.jpg", kill:"images/fin-annee-2026-kill.jpg" };
const NG = {thumb:"images/nigeria-thumb.jpg", okada:"images/nigeria-okada.jpg", jagun:"images/nigeria-jagun.jpg", chicken:"images/nigeria-chicken.jpg", iwaju:"images/nigeria-iwaju.jpg", aurion:"images/nigeria-aurion.jpg", abena:"images/nigeria-abena.jpg", hp:"images/nigeria-hp.jpg"};
const CT = {thumb:"images/castalie-thumb.jpg",pitch:"images/castalie-pitch.jpg",info:"images/castalie-info.jpg",one:"images/castalie-one.jpg",pillars:"images/castalie-pillars.jpg",notdo:"images/castalie-notdo.jpg",loop:"images/castalie-loop.jpg",manage:"images/castalie-manage.jpg",explore:"images/castalie-explore.jpg",res:"images/castalie-res.jpg",acq:"images/castalie-acq.jpg",fight:"images/castalie-fight.jpg",craft:"images/castalie-craft.jpg",lvl:"images/castalie-lvl.jpg",trade:"images/castalie-trade.jpg",realm:"images/castalie-realm.jpg",typhon:"images/castalie-typhon.jpg",sealed:"images/castalie-sealed.jpg",castalie:"images/castalie-castalie.jpg",moodboard:"images/castalie-moodboard.jpg",ld:"images/castalie-ld.jpg",mol:"images/castalie-mol.jpg",pacing:"images/castalie-pacing.jpg"};
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
    P({ title:"Projets de fin d'année : quatre jeux en parallèle – Mai-juin 2026", large:true, nocover:true,   // nocover:true = pas de grande image en tête de la page de détails
        desc:"Une promotion entière, un seul producer : de la mise en place de la production à la livraison au jury, en passant par une crise à mi-parcours.", carte:"Toute une promotion et un seul producer, avec une méthode Agile intégrée aux jalons Waterfall de l'école.",
        img:PRO1.thumb,
        infos:{ "Rôle":"Producer", "Équipe":"4 équipes · 13 à 14 personnes", "Durée":"27 mai – 24 juin 2026", "Outils":"Excel · PowerPoint (OneDrive) · Discord" },
        survol:{ moteur:"Unreal Engine", logo:"images/unreal-engine.png", items:["Producer","4 équipes","Genres variés","4 semaines"] },
        apercu:"Pour le projet de fin d'année de Game Sup, toute la promotion a développé quatre jeux en quatre semaines, et j'en étais le producer, en lien avec les intervenants qui jouaient le rôle d'éditeurs. J'ai adapté une méthode Agile aux jalons Waterfall de l'école, mis en place un suivi Excel pour chaque groupe et fait le lien entre l'encadrement et les équipes au quotidien. Après une crise de direction artistique en deuxième semaine, j'ai organisé deux sessions de playtest communes aux quatre équipes, puis redéfini les priorités avec chacune. Les quatre jeux ont été livrés au jury, avec 93 % des 1 387 tâches terminées.",
        resume:{ contexte:"Projet de fin d'année à Game Sup, réalisé par toute la promotion en 4 semaines.",
                 role:"Producer des 4 équipes, en lien avec les intervenants dans le rôle d'éditeurs.",
                 resultat:"4 jeux livrés au jury ; 1 387 tâches suivies, dont 93 % terminées, malgré une crise de direction artistique surmontée en deuxième semaine." },
        decisions:[ "**Méthode Agile à l'échelle** : adaptée à 4 projets menés en parallèle, dans le cadre des milestones Waterfall de l'école.",
                    "**Outils de suivi** : un macro-planning et un micro-planning Excel par groupe, soit 1 387 tâches suivies.",
                    "**Alignement** entre l'encadrement et les équipes, des milestones aux difficultés du quotidien.",
                    "**Deux sessions de playtest** communes aux 4 équipes, calées sur le planning des autres promotions.",
                    "**Priorités redéfinies** avec chaque équipe après les retours de playtest." ],
        contenu:[
          BANDE("I","Le cadre du projet",[
            LIGNE([
              T("Comme chaque fin d'année à Game Sup, les promotions travaillent en équipe sur un projet d'environ 3 à 4 semaines. Cette édition se distinguait par plusieurs phases de conception et de sélection des propositions en amont, qui ont abouti à 4 sujets aux genres variés."),
              T("Pour tenir ce cadre, j'ai organisé mon travail en quatre macro-tâches, que je présente ci-dessous.")
            ],[ FICHE("Les contraintes",["Quatre jeux à produire en même temps","Des jalons imposés par l'école : Proof of Concept, Alpha, Bêta","Un seul producer pour plus de cinquante personnes","Quatre semaines, sans marge pour rattraper un retard"]) ]),
            LIGNE([ KEYART([
                      ["images/fda-castor.jpg","Le Castor et l'Écureuil","Un puzzle platformer où des animaux tentent de sauver leur environnement menacé en neutralisant les infrastructures humaines qui détruisent la nature de l'Anjou."],
                      ["images/fda-glow.jpg","Project GLOW","Un jeu d'action-aventure à la troisième personne, dans l'esprit d'inFAMOUS Second Son, où un adolescent rebelle doté de pouvoirs de portail doit renverser la corporation qui corrompt les gangs et pollue la ville.",1],
                      ["images/fda-insight.jpg","Insight","Un couple marié résout des énigmes et relève des épreuves grâce à de nouveaux pouvoirs, les yeux qu'ils découvrent, pour atteindre chacun son objectif dans un manoir des années 1930 au nord du Massachusetts."],
                      ["images/fda-flowering.jpg","The Flowering Dead","Un boss rush où des survivants luttent pour leur vie dans un monde post-apocalyptique envahi de plantes et d'animaux mutants."]
                    ]) ])
          ]),
          BANDE("II","Organiser quatre équipes en parallèle",[
            LIGNE([
              T("Quatre jeux, plus de cinquante personnes et un seul producer : je savais dès le départ que je ne pourrais pas être dans chaque salle en permanence. Il fallait pourtant que les consignes des intervenants arrivent de la même façon à tous les groupes. C'est pour cela que nous avons lancé les productions en promotion entière, le lendemain de la sélection. Tout le monde a entendu les mêmes consignes au même moment, et nous avons pu poser ensemble l'organisation, les outils et la méthode, avant de les affiner groupe par groupe."),
              T("Pour garder un lien direct avec chaque équipe, j'ai désigné avec les intervenants deux référents par groupe, un pour les Game Designers et un pour les Game Artists. Cela n'a pas tout réglé : quand j'étais en réunion avec un groupe, les trois autres avançaient sans moi. Les dailies ont pris le relais pour que le suivi continue en mon absence, et je suis resté l'interlocuteur entre les intervenants et les équipes tout au long des semaines, pas seulement aux milestones."),
              T("Avec le recul, ces points quotidiens ne réunissaient pas toute l'équipe, et tout le monde ne comprenait pas vraiment l'avancée du projet. Sur un prochain projet, je mettrais en place des dailies en équipe entière dès le premier jour.")
            ],[ SCHEMA("orga") ])
          ]),
          BANDE("III","Planifier et suivre la production",[
            LIGNE([
              T("L'école imposait ses jalons Waterfall (Proof of Concept, Alpha, Bêta), mais chaque équipe avait besoin de sprints adaptés à son projet. Il me fallait donc relier les deux, avec un suivi assez homogène pour comparer les quatre groupes et repérer les retards tôt."),
              T("J'ai construit ce suivi sur Excel, à deux niveaux. Pour chaque groupe, un macro-planning pose les sprints et les milestones de l'école. Un micro-planning rattache ensuite chaque tâche à un sprint, une priorité, une difficulté et un statut : au total, **1 387 tâches** ont été suivies. Les documents de travail étaient partagés dans un PowerPoint commun sur OneDrive, et chaque groupe avait son propre espace Discord.")
            ],[ IMG(PRO1.macro,"Macro-planning propre à l'Excel de chaque groupe : sprints et milestones (Proof of Concept, Alpha, Bêta)") ],"dessous"),
            LIGNE([
              T("Tenir près de 1 400 statuts à jour demandait une attention de tous les instants, mais c'est ce qui rendait les retards et les kills visibles, sprint par sprint. Ce qui m'a manqué, ce sont des livrables de fin de sprint plus précis pour chaque spécialité : l'avancée était parfois difficile à vérifier concrètement. C'est la première chose que je changerais.")
            ],[ IMG(PRO1.micro,"Extrait du micro-planning d'un des groupes : tâches, sprints, priorités, difficultés et statuts") ],"dessous")
          ]),
          BANDE("IV","Gérer la crise de direction artistique",[
            LIGNE([
              T("En deuxième semaine, un même problème est apparu dans les quatre groupes : la direction artistique était confuse, et les membres peinaient à se représenter les références. Les retards ont vite atteint deux à trois jours, et je sentais venir le risque de crunch."),
              T("Plutôt que de laisser chaque équipe s'enliser, nous avons organisé des réunions d'urgence avec chaque groupe et suspendu la production pendant une journée et demie. Ce temps de réflexion nous a permis de comprendre d'où venait le problème : des références trop vastes et peu précises, et une passe de recherche trop courte au démarrage, parce que nous pensions que celle de la sélection suffirait.")
            ],[ SCHEMA("planning","Calendrier de la production : sprints, jalons, crise de mi-parcours et playtests") ]),
            LIGNE([
              T("Chaque groupe vivait la crise à sa manière, il n'y avait donc pas de réponse unique. Pour l'un, j'ai tranché, en accord avec les référents des disciplines, sur le kill de plusieurs assets qui sortaient du cadre ou n'étaient plus prioritaires. Pour un autre, nous avons revu le Level Art et le shader atmosphérique."),
              T("Si c'était à refaire, je ferais créer dès le départ une petite scène de référence dans le moteur, avec un prop à la qualité visée, les textures souhaitées et les intentions de lumière et de caméra.")
            ],[ IMG(PRO1.kill,"Tâches supprimées (kills) dans le suivi de l'un des groupes") ],"dessous")
          ]),
          BANDE("V","Organiser les playtests et redéfinir les priorités",[
            LIGNE([
              T("Après la crise, il ne restait que deux semaines. Il fallait décider où mettre l'effort, et accepter d'abandonner certaines choses, sans faire peser la fin du projet sur les équipes. J'ai donc organisé deux sessions de playtest communes aux quatre groupes, calées sur le planning des autres promotions pour que des joueurs extérieurs puissent venir."),
              T("Pour que les retours soient exploitables, chaque équipe a préparé un questionnaire structuré. Celui de Le Castor et l'Écureuil, par exemple, couvrait les personnages, la cohérence du design et la prise en main, avec des réponses notées de 1 à 7, et a recueilli 22 réponses."),
              T("Les retours ont été nombreux, et souvent critiques, à un moment où le moral était déjà entamé. Avec chaque équipe, nous les avons triés pour garder les points les plus importants, puis j'ai redéfini les priorités et réorganisé les plannings. Voir des inconnus jouer aux projets a aussi redonné de l'énergie aux équipes : malgré les critiques, les jeux plaisaient.")
            ],[ CAROUSEL([["images/fda-playtest-form.jpg","Le formulaire de retour du playtest de Le Castor et l'Écureuil : 22 réponses"],["images/fda-playtest-perso.jpg","Une section du questionnaire : l'appréciation des personnages"],["images/fda-playtest-coherence.jpg","Une section du questionnaire : la cohérence du design, notée de 1 à 7"]]) ])
          ]),
          BANDE("VII","Les enseignements",[
            LIGNE([
              T("C'était la première fois que l'on me confiait la production d'une promotion entière, et c'est surtout la crise de mi-parcours qui m'a fait grandir. Elle m'a appris à mettre de côté ce que je croyais savoir pour écouter les besoins propres à chaque équipe, à déléguer, et à poser dès le départ des canaux de communication clairs, pour qu'aucune équipe ne se sente livrée à elle-même.")
            ])
          ]),
          BANDE("VIII","Les équipes",[
            LIGNE([
              T("Ces quatre jeux sont avant tout le travail de leurs équipes. Voici chaque membre, son rôle et son profil LinkedIn, groupe par groupe."),
              EQUIPES(EQUIPES_FDA)
            ])
          ])
        ] }),
    P({ title:"Workshop Rogue-lite – Février 2026", wip:true,   // wip:true = en cours (bandeau WIP, bouton Détails inactif). Supprimez ce mot pour activer le projet.
        desc:"Planification à deux niveaux pour deux équipes sur trois semaines : feuille de route du workshop et tâches quotidiennes.", carte:"Deux équipes sur trois semaines, avec une feuille de route pour le workshop et des tâches quotidiennes pour chaque équipe.",
        survol:{ moteur:"Unity", logo:"images/unity.svg", items:["Producer","12 à 13 personnes","Rogue-lite"] }, img:"images/rogue-thumb.jpg",
        infos:{ "Rôle":"Producer", "Équipe":"2 équipes · 12 à 13 personnes", "Durée":"3 semaines", "Genre":"Rogue-lite" },
        resume:{ contexte:"Workshop de trois semaines à Game Sup : deux équipes de 12 à 13 personnes développent chacune un rogue-lite.",
                 role:"Producer des deux équipes : planification, sprints et arbitrages.",
                 resultat:"" },
        decisions:[ "**Planification à deux niveaux** : une feuille de route pour le workshop et des tâches quotidiennes pour chaque équipe.",
                    "**Sprints adaptés** à chaque équipe, construits après avoir écouté leurs besoins.",
                    "**Arbitrage** des points bloquants remontés par les équipes.",
                    "**Retours constructifs** sur les documents de design, pour garder un périmètre réaliste et faisable." ],
        contenu:[
          IMG("", "Planning de production")
        ] }),
    P({ title:"Workshop Fusion – Novembre 2025", wip:true,   // wip:true = en cours (bandeau WIP, bouton Détails inactif). Supprimez ce mot pour activer le projet.
        desc:"Plan de production agile sur Excel, revues hebdomadaires et premiers dailies pour deux équipes.", carte:"Un plan de production agile sur Excel, des revues hebdomadaires et les premiers dailies, confiés aux référents des équipes.",
        survol:{ moteur:"Unreal Engine", logo:"images/unreal-engine.png", items:["Producer","12 à 13 personnes","Racing · Fusion"] }, img:"images/fusion-thumb.jpg",
        infos:{ "Rôle":"Producer", "Équipe":"2 équipes · 12 à 13 personnes", "Durée":"3 semaines", "Outils":"Excel" },
        resume:{ contexte:"Workshop de trois semaines à Game Sup : deux équipes de 12 à 13 personnes.",
                 role:"Producer des deux équipes : plan de production, suivi et répartition des tâches.",
                 resultat:"" },
        decisions:[ "**Plan de production agile** construit sur Excel, avec des **revues hebdomadaires**.",
                    "**Premiers dailies** mis en place, confiés aux référents Art et Design.",
                    "**Répartition des tâches** entre Game Artists et Game Designers, en équilibrant la charge de travail." ],
        contenu:[
          IMG("", "Plan de production")
        ] }),
    P({ title:"Projets de fin d'année : mes deux premières productions – Juin 2025", wip:true,   // wip:true = en cours (bandeau WIP, bouton Détails inactif). Supprimez ce mot pour activer le projet.
        desc:"Ma première gestion de deux projets en parallèle, suivis sur Excel et Miro.", carte:"Deux équipes suivies en parallèle sur Excel et Miro, avec des sprint reviews pour chacune.",
        survol:{ moteur:"Unreal / Unity", logos:["images/unreal-engine.png","images/unity.svg"], items:["Producer","12 à 13 personnes","Genres variés"] }, img:"images/fin-annee-2025-thumb.jpg",
        infos:{ "Rôle":"Producer", "Équipe":"2 équipes · 12 à 13 personnes", "Durée":"4 semaines", "Outils":"Excel · Miro" },
        resume:{ contexte:"Projet de fin d'année à Game Sup : deux équipes de 12 à 13 personnes, quatre semaines de développement.",
                 role:"Producer des deux projets, menés en parallèle.",
                 resultat:"" },
        decisions:[ "**Deux projets menés en parallèle** pour la première fois, suivis sur Excel et Miro.",
                    "**Sprint reviews** organisées pour chaque équipe.",
                    "**Listes de tâches** construites avec les référents Art et Design." ],
        contenu:[
          IMG("", "Tableau Miro")
        ] })
  ],
  perso: [
    P({ title:"Projet Jira et Agile : un studio en mise en situation – Octobre 2026", large:true, nocover:true,
        desc:"Une mise en situation menée seul : la production d'un action-RPG AA fictif, structurée dans Jira, de l'organisation du studio jusqu'au premier sprint.",
        carte:"La production d'un action-RPG AA fictif structurée dans Jira, avec ses deux goulots et un chemin critique qui passe par les prestataires.",
        img:"",
        infos:{ "Rôle":"Producer (mise en situation, mené seul)", "Projet":"Action-RPG AA fictif · 15 personnes + 4 prestataires", "Outils":"Jira · JQL · Coda", "Période":"Octobre 2026", "Formation":"Agile with Atlassian Jira · Atlassian, via Coursera" },
        apercu:"Pour apprendre Jira sur un cas réaliste, j'ai organisé seul la production d'un action-RPG AA fictif : 15 personnes en interne et quatre prestataires, sur le modèle d'Ember Lab pour Kena: Bridge of Spirits. En préparant la Vertical Slice, j'ai surtout constaté que le rythme ne serait pas fixé par les deux squads, mais par deux personnes : l'animateur gameplay et le sound designer. J'ai aussi vu que le chemin critique passait par les prestataires. J'ai construit le space pour rendre ces risques visibles : des dépendances liées aux tickets, une capacité calculée par squad, un board par public et un dashboard pour le producer. C'est une mise en situation : je joue tous les rôles, et le sprint simulé sert à éprouver l'outil, pas à prouver la conduite d'une équipe.",
        contenu:[
          BANDE("I","Le cadre du projet",[
            LIGNE([
              T("Je connaissais les bases de Jira, mais je voulais comprendre comment un studio s'y organise réellement, avec plusieurs équipes, des prestataires et des jalons sur plusieurs années. J'ai donc construit une **mise en situation complète** plutôt qu'un simple tableau de tâches."),
              T("Pour partir d'une structure crédible, je me suis appuyé sur ce qu'Ember Lab a rendu public de la production de **Kena: Bridge of Spirits** : une petite équipe interne et une partie du travail confiée à des studios partenaires. Mon jeu fictif reprend ce modèle : un action-RPG AA à la troisième personne, produit en trois ans par **15 personnes**, avec l'externalisation de la QA, d'une partie de l'animation et de l'art, et de la musique."),
              T("J'ai mené ce projet en parallèle de la formation **Agile with Atlassian Jira**, proposée par Atlassian sur Coursera, pour mettre en pratique chaque notion sur un cas concret. J'en ai obtenu le certificat le 14 octobre 2026."),
              LIEN("Vérifier le certificat","https://coursera.org/verify/EQE4DN5JX2XG")
            ],[ FICHE("Les contraintes",["Une équipe de 15 personnes, pour une offre gratuite limitée à 10 utilisateurs","Jira ne permet pas d'antidater un ticket : la simulation se fait en temps réel","Un sprint de démonstration compressé à une semaine au lieu de deux","Un travail mené seul, en jouant tous les rôles de l'équipe"]),
                FICHE("Ce que ce projet montre, et ce qu'il ne montre pas",["Il montre : structurer un outil pour une organisation réaliste, planifier sous contraintes et rendre les risques visibles","Il ne montre pas : la conduite d'une vraie équipe. Les données du sprint sont simulées"]) ])
          ]),
          BANDE("II","Organiser le studio et ses prestataires",[
            LIGNE([
              T("J'ai découpé l'équipe en deux **squads** pluridisciplinaires de six personnes, Gameplay et World, avec un groupe Transverse (direction créative, production, tech art). Les prestataires ont leur propre valeur, External, et leur propre suivi, parce que leur travail ne fait pas partie du sprint d'une squad. Chacun a un **référent interne** qui valide ses livraisons : le producer pour la QA, l'animateur gameplay pour le studio d'animation, le lead environment artist pour le studio d'art."),
              T("Dans le space, chaque ticket répond à quatre questions : où se situe le travail dans le jeu (le composant), qui le fait (la squad), pour quelle phase du projet (la version) et à quelle catégorie transverse il appartient (le label). Ce rangement a un but simple : chaque vue dont l'équipe a besoin devient alors une requête.")
            ],[ CAROUSEL([["images/jira-versions.png","Les versions du projet, de la conception à la sortie, avec leurs critères de sortie"],["images/jira-composants.png","Une partie des 29 composants : systèmes, disciplines et niveaux"],["images/jira-squad.png","Le champ Squad et ses quatre valeurs : Gameplay, World, Transverse et External"]]) ]),
            LIGNE([
              T("Avec le recul, c'est cette séparation qui m'a demandé le plus de réflexion. Une tâche faite par le tech artist, par exemple, appartient à la squad qui s'engage à la livrer dans son sprint, et non au groupe Transverse : sinon, elle n'apparaîtrait sur aucun board, et personne ne s'engagerait à la livrer.")
            ],[ IMG("images/jira-ticket.png","Une Story de la Vertical Slice : critères d'acceptation, sous-tâches, squad, composant, version et Epic parent") ])
          ]),
          BANDE("III","Les goulots et le chemin critique",[
            LIGNE([
              T("J'ai découpé le jeu en Epics (combat, compagnons, bestiaire, actes), puis rédigé le backlog de la **Vertical Slice** sous forme de Stories à valeur joueur, chacune découpée en sous-tâches nominatives. « Enemy AI framework » devient ainsi « Enemies perceive, chase and attack the player »."),
              T("Ce découpage a fait apparaître le premier risque du projet. L'**animateur gameplay** intervient dans 13 Stories sur 23, et le **sound designer** dans 15. Ce sont eux qui fixent le rythme, bien plus que la taille des squads. Le deuxième sprint de la squad Gameplay le montre bien : trois de ses Stories demandent de l'animation, et l'animateur y serait saturé. Il y avait deux options : sortir une Story du sprint, ou la garder en signalant le risque dès le planning."),
              T("[À compléter : l'arbitrage que tu as retenu pour Gameplay S02, et pourquoi.]")
            ],[ CHIFFRES([["23","Stories dans la Vertical Slice"],["126","Points estimés"],["13 et 15","Stories pour l'animateur et le sound designer"],["3","Livraisons externes qui bloquent des Stories"]]) ]),
            LIGNE([
              T("Le second risque vient de l'extérieur. Trois Stories de la squad World (l'entrée de la forêt, le PNJ guide et l'ambiance sonore) attendent des **livraisons de prestataires** : un lot de props, un lot d'animations et le thème principal. Dans Jira, chaque livraison est un ticket relié à la Story qu'il bloque, et une Story n'entre en sprint que si ses dépendances sont levées : c'est une condition de ma **Definition of Ready**."),
              T("La conséquence est directe : quelle que soit sa vitesse, la squad World ne peut pas finir la Vertical Slice avant ces livraisons. **Le chemin critique passe par l'externe.** J'ai donc engagé volontairement la squad World sur un premier sprint léger, et réservé le reste de sa capacité à la préproduction : bible artistique, concepts et cahiers des charges des prestataires. Sur un vrai projet, c'est la date de ces livraisons que je suivrais en premier.")
            ],[ IMG("images/jira-backlog-vs.png","Le premier sprint de la squad Gameplay : chaque Story découpée en sous-tâches") ],"dessous")
          ]),
          BANDE("IV","Estimer ce que chaque squad peut tenir",[
            LIGNE([
              T("Avant d'engager un sprint, j'ai calculé la **capacité** de chaque squad : les jours du sprint multipliés par la part du temps réellement consacrée à son travail. J'ai retiré environ 20 % pour les réunions et les imprévus, et compté les leads à mi-temps, parce qu'une partie de leur temps va au management et aux revues."),
              T("Sans historique, on s'engage prudemment. La squad Gameplay part donc sur **21 points**, avec un objectif de sprint clair : le joueur peut se battre, esquiver et subir des dégâts, face à des ennemis qui le poursuivent. La squad World s'engage sur **13 points**, pour les raisons de dépendance vues plus haut. Ensuite, c'est la vélocité moyenne des trois derniers sprints qui sert de référence, et une Story non terminée n'est jamais comptée à moitié : elle passe entière au sprint suivant."),
              T("Les deux squads suivent la même cadence, pour faciliter les revues communes et les dépendances. À l'intérieur d'une Story, une règle simple évite les signaux contradictoires : **une sous-tâche ne dépasse jamais la priorité de sa Story**. Une requête qui classe les sous-tâches par personne et par priorité donne enfin la vue à présenter au premier daily.")
            ],[ IMG("images/jira-sprints.png","Le sprint en cours de la squad Gameplay, et le suivant déjà préparé") ])
          ]),
          BANDE("V","Donner à chacun la bonne visibilité",[
            LIGNE([
              T("Dans Jira, **un board n'est qu'une vue posée sur un filtre**. J'ai donc pensé les boards par public : un board Scrum pour chaque squad, un board Kanban pour la QA, un board Kanban pour les livraisons des prestataires, qui arrivent par lots et ne suivent pas le rythme des sprints, et un board Production qui voit tout le projet mais sur lequel on ne lance jamais de sprint.")
            ],[ CAROUSEL([["images/jira-board-production.png","Production : la vue d'ensemble, sur laquelle on ne lance jamais de sprint"],["images/jira-board-gameplay.png","Gameplay : le sprint en cours de la squad, groupé par Epic"],["images/jira-board-world.png","World : le sprint en cours de la squad, groupé par Epic"],["images/jira-board-qa.png","QA-Bugs : le flux des bugs, avec une ligne réservée aux bloquants"],["images/jira-board-vendors.png","Vendors : les livraisons attendues de chaque prestataire"]]) ]),
            LIGNE([
              T("Sur le board QA, chaque colonne a une **limite de travail en cours** : pas plus de dix bugs en tri, cinq en correction et huit en attente de vérification. Quand une colonne déborde, c'est le signal qu'il faut arrêter d'ouvrir des bugs pour finir ceux qui sont commencés.")
            ],[ IMG("images/jira-colonnes-qa.png","Les colonnes du board QA-Bugs, avec leurs limites de travail en cours") ],"dessous"),
            LIGNE([
              T("Pour le producer, j'ai constitué une **bibliothèque de filtres** qui répond aux questions du lundi matin. Où en est le sprint ? Quels tickets sont bloqués ou reportés ? Le périmètre de la Vertical Slice a-t-il bougé ? Et les données sont-elles fiables, sans ticket sans squad ni ticket terminé sans résolution ? Ce sont eux qui alimentent le dashboard du producer.")
            ],[ IMG("images/jira-filtres.png","Le filtre du périmètre de la Vertical Slice, et la liste des filtres enregistrés") ],"dessous"),
            LIGNE([
              T("Enfin, les deux **workflows** traduisent des choix de qualité. Une Story passe par une revue puis une vérification QA avant d'être terminée. Un bug passe par un tri, doit recevoir une résolution pour être fermé, et peut être rouvert : c'est ce qui permet de compter les correctifs qui ne tiennent pas.")
            ],[ CAROUSEL([["images/jira-workflow-bugs.png","Le workflow des bugs : tri, correction, vérification et réouverture"],["images/jira-workflow-dev.png","Le workflow des Stories et des Tasks : revue, puis vérification QA"]]) ])
          ]),
          BANDE("VI","Éprouver l'outil avec un sprint simulé",[
            LIGNE([
              T("Pour obtenir de vraies données, je fais vivre un premier sprint du 24 au 31 octobre, compressé à une semaine au lieu de deux, car Jira construit ses graphiques à partir des dates réelles. Côté QA, j'ai écrit un **scénario de onze bugs** pour mettre les workflows à l'épreuve : un bloquant corrigé dans la journée, un doublon, un bug non reproductible, une réouverture et un crash ajouté en cours de sprint."),
              T("[À compléter après le 31 octobre : ce qui a été terminé, ce qui a été reporté et pourquoi, et ce que le dashboard a permis de voir.]")
            ],[ IMG("","Capture à ajouter : le dashboard en fin de sprint") ]),
            LIGNE([
              T("[À compléter : un blocage marqué par un drapeau, la façon dont il a été levé, et ce qu'il a changé au sprint.]")
            ],[ IMG("","Capture à ajouter : le burndown ou le sprint report") ])
          ]),
          BANDE("VII","Ce que j'en retiens",[
            LIGNE([
              T("Ce projet m'a surtout appris à penser Jira comme une base de données plutôt que comme un tableau de tâches : une fois les tickets bien rangés, chaque équipe, chaque jalon et chaque contrôle qualité n'est qu'une requête. Il m'a aussi montré que l'outil ne sert qu'à rendre visibles les vraies décisions du producer : qui est saturé, ce qui dépend de l'extérieur et ce qu'on accepte de reporter."),
              T("Pour comparer, j'ai transposé cette organisation dans **Coda**. Certains calculs y sont plus simples, mais Coda ne garde pas l'historique des statuts, qu'il faut donc enregistrer soi-même. Le bon outil dépend de ce que l'équipe a besoin de suivre."),
              T("[À compléter après le sprint : ce que je changerais sur un vrai projet.]")
            ])
          ])
        ] })
  ],
  exo: [
        P({ survol:{ items:["Producer","Jeu AA · 30 à 50 personnes","48 mois de production","Excel · Coda · ClickUp"] }, cat:"Gestion de production", title:"Wyrdfall", nocover:true, desc:"Dossier de production d'un jeu AA de 48 mois : équipe, budget, planning, estimation des ventes et seuil de rentabilité.", carte:"Le dossier de gestion de production d'un jeu AA sur 48 mois : équipe, plannings, budget, ventes et seuil de rentabilité.", large:true,   // large:true = page en bandes ; bg/fit : image affichée en entier sur fond uni
        img:"images/wyrdfall-vignette.jpg",
        cimg:"images/wyrdfall-couverture.jpg", cbg:"#7dad9c",
        infos:{ "Rôle":"Producer", "Projet":"AA · 30 à 50 personnes", "Outils":"Excel · Coda · ClickUp", "Temps de travail":"20 h sur 90 h (épreuve entière)", "Livrables":"Équipe · Planning · Budget · Market Analysis" },
        apercu:"Cet exercice de production portait sur Wyrdfall, un jeu AA fictif. Je ne présente ici que la partie gestion de production, où j'ai tenu le rôle de producer, de la composition de l'équipe jusqu'au seuil de rentabilité. Le résultat : un budget de 9 M€ sur 48 mois, un seuil atteint vers 451 000 ventes et trois scénarios de ROI, le tout dans un fichier Excel qui se met à jour en un clic.",
        resume:{ contexte:"Exercice de production à Game Sup autour d'un jeu AA fictif. Seule la partie gestion de production est présentée ici.",
                 role:"Producer du projet : de la composition de l'équipe au seuil de rentabilité.",
                 resultat:"Un budget de 9 M€ sur 48 mois, un seuil de rentabilité à environ 451 000 ventes et trois scénarios de ROI, dans un fichier Excel modulable en un clic." },
        contenu:[
          BANDE("I","Le sujet et mon rôle",[
            LIGNE([
              T("Dans le cadre de cet exercice, nous devions fournir un document de gestion de production couvrant plusieurs volets : une définition crédible de l'équipe à constituer, un macro-planning et un micro-planning de la production sur Coda et ClickUp, un budget de développement sur Excel et une estimation des ventes (Market Analysis)."),
              T("J'ai choisi un projet d'envergure AA comparable à Greedfall : Wyrdfall, porté par une équipe de 30 à 50 personnes au pic de la production."),
              T("Le High Concept document et le prototype, également demandés, ont été produits pendant le reste de l'épreuve et ne sont pas présentés ici.")
            ],[ FICHE("Gestion de production · présentée ici · 20 h",["Équipe à constituer","Macro-planning et micro-planning (Coda, ClickUp)","Budget de développement (Excel)","Estimation des ventes (Market Analysis)"]), FICHE("Autres livrables · 70 h",["High Concept document","Prototype"]) ])
          ]),
          BANDE("II","Un fichier de production clair et modulable",[
            LIGNE([
              T("En construisant mon fichier Excel général, ma priorité a été la clarté : chaque information devait pouvoir être trouvée rapidement, sans se perdre dans les onglets. J'ai donc travaillé la cohérence des couleurs pour regrouper les pages liées entre elles, et mis au point des boutons ainsi qu'une barre de navigation simple."),
              T("L'organisation des pages et la hiérarchisation des informations au sein de chacune ont également fait l'objet d'une attention particulière."),
              T("Un objectif important de ce travail était l'adaptabilité du fichier : le budget doit se mettre à jour en un clic lors de l'arrivée d'un nouveau membre dans le studio ou d'un changement d'ancienneté."),
              T("Je voulais également que cette souplesse s'étende aux logiciels attribués aux employés, pour que le budget s'ajuste aussitôt (cf. image).")
            ],[ CAROUSEL([[EX1.nav,"Page d'accueil du fichier de production : boutons et navigation par onglets colorés"],[EX1.budget,"Vue d'ensemble du budget : équipe, durée et budget par département"]]) ]),
            LIGNE([
              T("Wyrdfall est un projet AA de 48 mois, comprenant 36 mois de production et 12 mois de live service, pour une équipe de 42 personnes dont 25 restent mobilisées sur la phase de live. Le budget total du projet s'élève à **9 033 682 €**, dont 7 070 677 € de salaires (78 %), le reste se répartissant entre les logiciels, la localisation, les frais de fonctionnement et l'outsourcing.")
            ],[ CHIFFRES([["9 033 682 €","Budget total"],["42","Personnes dans l'équipe"],["48 mois","36 production · 12 live"],["78 %","Part des salaires"]]) ])
          ]),
          BANDE("III","Le Market Analysis et le seuil de rentabilité",[
            LIGNE([
              T("Pour estimer les ventes potentielles sur Steam, j'ai commencé par l'analyse des concurrents du jeu, dont j'ai extrait des moyennes exploitables pour mes scénarios de projection. Pour disposer d'un large panel, j'ai retenu des jeux sortis sur 11 ans, de 2014 à 2025 : une période un peu large, qui gagnerait à être ramenée à 5 ans.")
            ],[ IMG(EX1.market,"Analyse des concurrents : ventes, revenus estimés et moyennes") ],"dessous"),
            LIGNE([
              T("Les données extraites m'ont permis de proposer deux scénarios, un optimiste et un plus conservateur, chacun décliné en trois niveaux de risque (haut, moyen, bas), afin d'envisager l'économie de la production avec le plus de lucidité possible.")
            ],[ CAROUSEL([[EX1.roiCons,"Estimation du ROI, scénario conservateur : 250 000 followers, en cas haut, moyen et bas"],[EX1.roiOpti,"Estimation du ROI, scénario optimiste : moyenne des ventes du Market Analysis, en cas haut, moyen et bas"]]) ]),
            LIGNE([
              T("Pour savoir à partir de quand le projet devient rentable, j'ai calculé son seuil de rentabilité. Sur un prix de 49,99 €, j'ai retiré en une seule fois la part de Steam, les taxes et la royalty d'Unreal Engine (55 %), puis les remboursements. C'est un choix de prudence : une vente ne rapporte ainsi qu'environ 20 €, un peu moins que dans la réalité. Le budget est couvert à partir d'environ **451 000 ventes**. Si le projet tient avec cette hypothèse, il tiendra avec un calcul plus favorable."),
              T("Dans le scénario conservateur moyen, j'estime les ventes à 482 000, juste au-dessus du seuil, pour un bénéfice de 616 438 €, soit un ROI d'environ + 6,8 %. Le tableau montre les autres cas : tout se joue sur le taux de conversion des wishlists. Ces estimations ne comptent que les ventes sur Steam, sans le DLC."),
            ],[ TABLEAU("Bénéfice net et ROI selon les scénarios · Budget total : 9 033 682 €",["Scénario","Ventes estimées","Bénéfice net (ROI)"],["Conservateur : 250 000 followers", ["Haut", "626 600", "+ 4 639 128 € (+ 51,4 %)"], ["Moyen", "482 000", "+ 616 438 € (+ 6,8 %)"], ["Bas", "115 680", "− 6 873 790 € (− 76,1 %)"], "Optimiste : moyenne des ventes du Market Analysis", ["Haut", "959 400", "+ 11 901 031 € (+ 131,7 %)"], ["Moyen", "738 000", "+ 5 741 809 € (+ 63,6 %)"], ["Bas", "177 120", "− 5 726 628 € (− 63,4 %)"]]) ])
          ]),
          BANDE("IV","Planifier quatre ans de production",[
            LIGNE([
              T("Enfin, cet exercice a mis à l'épreuve ma capacité à anticiper et à planifier : il ne s'agissait plus d'un projet de trois semaines, mais d'une production de 4 ans, de la production principale jusqu'à la sortie du DLC prévu."),
              T("Planifier des Epics et des Stories sur l'ensemble d'une production est un véritable défi, qui m'a poussé à prendre en compte tous les aspects du projet : les éléments essentiels, les niveaux, l'intégration de la QA, etc.")
            ],[ IMG(EX1.epic,"Macro-planning : les Epics de la production") ],"dessous"),
            LIGNE([
              T("J'ai complété ce travail par un sprint détaillé avec ses tâches : un sprint de préproduction destiné à préparer la Vertical Slice."),
              T("Cette partie a été exigeante : elle m'a obligé à sortir de la logique des sprints de nos workshops de 3 semaines, très contraints, pour raisonner pas à pas sur les besoins qui font passer d'un sprint à l'autre.")
            ],[ IMG(EX1.sprint,"Sprint de préproduction : tâches, priorités et points de sprint") ],"dessous")
          ]),
          BANDE("V","Ce que j'en retiens",[
            LIGNE([
              T("Ce travail a été extrêmement formateur et m'a permis de porter un regard neuf sur le métier de producer. Avec du recul, j'y vois plusieurs pistes d'amélioration. D'abord, j'ai sous-estimé la charge de l'équipe QA : il faudrait prévoir un effectif plus important pour éviter un éventuel crunch. C'est aussi le cas de l'équipe Sound Design, elle aussi sous-dimensionnée."),
              T("Il serait également utile d'étudier les financements accessibles à un studio de cette taille pour étoffer le dossier : aides régionales, nationales et européennes, solutions bancaires, Kickstarter."),
              T("Je reste néanmoins fier de ce travail, qui a élargi ma vision du périmètre de ce rôle.")
            ],[ FICHE("Pistes d'amélioration",["Renforcer l'équipe QA pour éviter un crunch","Réévaluer l'équipe de Sound Design","Étudier les financements : aides régionales, nationales, européennes, solutions bancaires, Kickstarter"]) ])
          ])
        ] }),
    P({ survol:{ items:["Auteur du GDD","RPG au tour par tour","90 heures","67 pages"] }, cat:"Game Design et Narrative Design", title:"Castalie's Tears", large:true, nocover:true,
        desc:"Game Design Document d'un RPG au tour par tour d'inspiration mythologique : la boucle de jeu et ses systèmes, puis leur incarnation dans l'univers, le personnage et un niveau de Narrative Design.", carte:"Le Game Design Document d'un RPG mythologique au tour par tour : boucle de jeu, systèmes et leur incarnation dans le récit.",
        img:CT.thumb,
        infos:{ "Rôle":"Auteur du GDD", "Cadre":"Game Design · Game Sup", "Date":"Avril 2025", "Temps de travail":"90 h", "Livrable":"Game Design Document · 67 pages" },
        apercu:"Pour cet exercice de Game Design, il fallait concevoir un jeu à partir d'une créature mythique d'un pays imposé, et la Grèce m'a été attribuée. J'ai écrit le Game Design Document de Castalie's Tears, un RPG au tour par tour, du concept jusqu'à un niveau complet, en veillant à ce que chaque mécanique ait un sens dans le récit. Ce travail me sert aujourd'hui en production : je comprends mieux ce que l'on demande aux équipes de design.",
        resume:{ contexte:"Exercice de Game Design à Game Sup (avril 2025) : concevoir un jeu à partir d'une créature mythique d'un pays imposé, la Grèce.",
                 role:"Auteur du Game Design Document : concept, systèmes, univers, personnage et niveau.",
                 resultat:"Un RPG au tour par tour où chaque mécanique trouve son incarnation dans le récit, et une connaissance concrète du travail de design, utile pour dialoguer avec les équipes en production." },
        contenu:[
          BANDE("I","L'idée et le concept",[
            LIGNE([
              T("Parmi les créatures mythiques grecques, j'ai choisi les naïades, divinités des eaux. De là est née une idée simple : une naïade parcourt la Grèce pour sauver des divinités et combattre les armées de Typhon. Le joueur incarne Castalie, gardienne de la fontaine de Delphes, et rencontre au fil du jeu des héros et des dieux qui deviennent ses compagnons."),
              T("Castalie's Tears est un RPG au tour par tour en solo, pensé pour PC et Nintendo Switch, avec un modèle premium. Pour le situer : Dragon Quest XI rencontre Dragon Age : Inquisition dans un univers proche d'Immortals Fenyx Rising. C'est un jeu posé, qui récompense la réflexion et l'organisation plus que les réflexes.")
            ],[ CAROUSEL([[CT.pitch,"L'énoncé central : Castalie face à Typhon"],[CT.one,"Le one-liner et ses trois références"],[CT.info,"La fiche d'information du projet"]]) ])
          ]),
          BANDE("II","Intentions, piliers et boucle de gameplay",[
            LIGNE([
              T("Je suis parti de valeurs (courage, coopération, résilience) et de thèmes : la culpabilité du survivant, la confiance, et la question « qu'est-ce qu'un héros ? ». Ces intentions se traduisent en trois piliers de gameplay : combattre les marées de Typhon, explorer un monde désolé, et prendre soin de sa Source pour la faire grandir."),
              T("J'ai aussi listé ce que le jeu ne sera pas : multijoueur, combat tactique sur grille, arbre de compétences, mini-jeux, infiltration, fins multiples. C'est ce qui garde le périmètre sous contrôle.")
            ],[ CAROUSEL([[CT.pillars,"Les trois piliers de gameplay"],[CT.notdo,"Ce que le jeu n'est pas"]]) ]),
            LIGNE([
              T("Le joueur gère sa base, explore, résout des énigmes ou combat, acquiert des ressources et progresse, puis fabrique ou échange avant de revenir à sa base. J'ai qualifié chaque étape selon son rôle dans l'économie du jeu (source, convertisseur, drain, marchand) pour vérifier que la boucle se nourrit autant qu'elle consomme."),
              T("Le jeu vise un public adulte et actif, qui joue par sessions courtes : d'abord Achiever, puis Explorer selon la typologie de Bartle. Il cherche de la profondeur et des choix, d'où un jeu qui mise sur l'histoire et la gestion plutôt que sur l'énigme.")
            ],[ IMG(CT.loop,"La boucle de gameplay de Castalie's Tears") ])
          ]),
          BANDE("III","De la mécanique au récit",[
            LIGNE([
              T("Typhon a vaincu les dieux et dispersé leurs pouvoirs, les Grâces divines. Il ne reste qu'une terre aride, des ruines et quelques sanctuaires. Dans cet univers, chaque mécanique a son incarnation dans le récit : on ne gère pas un menu, on protège une fontaine sacrée ; on ne débloque pas une compétence, on hérite du pouvoir d'un dieu déchu."),
              T("Même le butin raconte quelque chose : les bêtes de Typhon dévorent les fragments de Grâce pour gagner en puissance, si bien que ce que le joueur ramasse est aussi ce que l'ennemi convoite.")
            ],[ CAROUSEL([[CT.realm,"Le Royaume de Lumière avant la Chute"],[CT.typhon,"Typhon"],[CT.sealed,"Un Temple scellé"]]) ]),
            LIGNE([
              TABLEAU("Une mécanique, une incarnation",["Mécanique","Incarnation narrative"],[["La Source (gestion de la base)","La fontaine sacrée de Delphes, qui accueille les réfugiés"],["La Grâce divine (compétences, craft)","Les pouvoirs des dieux déchus, dispersés par Typhon"],["Les compagnons (recrutement)","Divinités mineures, héros et réfugiés à sauver"],["Les Temples scellés (donjons, boss)","Les ruines où sont retenus les grands dieux"],["La progression","Castalie qui reprend confiance, de naïade fragile à cheffe"]],true)
            ])
          ]),
          BANDE("IV","Castalie et le niveau du Temple d'Apollon",[
            LIGNE([
              T("J'ai construit Castalie sur un défaut et une évolution : elle manque de confiance, se méfie de ses pouvoirs et des inconnus. Au fil de l'aventure, elle devient une combattante et une cheffe, et sa voix s'affirme. C'est par elle que passent les thèmes du jeu."),
              T("Le premier niveau, les ruines du temple d'Apollon, son mentor, est pensé comme un chemin dans la mémoire : des mosaïques racontent le passé, et Castalie commente ce dont elle se souvient. L'intensité monte par paliers entre les salles, avec des respirations, jusqu'au boss qui l'attend là où elle conversait avec Apollon.")
            ],[ IMG(CT.castalie,"Castalie, la naïade de la fontaine de Delphes","sm") ]),
            LIGNE([
              CAROUSEL([[CT.moodboard,"Moodboard du niveau"],[CT.ld,"Plan du niveau (layout)"],[CT.mol,"Diagramme moléculaire : les salles et leurs liens"],[CT.pacing,"Courbe d'intensité du niveau"]])
            ])
          ]),
          BANDE("V","Ce que j'en retiens",[
            LIGNE([
              T("Un GDD ne se limite pas à lister des features : il doit relier les intentions aux mécaniques, et les mécaniques à ce que le joueur ressent. C'est cette chaîne que j'ai cherché à rendre lisible, du pilier jusqu'au niveau."),
              T("Comme producer, c'est ce qui me permet aujourd'hui de comprendre ce que l'on demande aux équipes de design, d'en estimer la portée et de savoir où se trouve le cœur d'un projet quand il faut arbitrer.")
            ])
          ])
        ] }),
    P({ survol:{ items:["Auteur de l'étude","Analyse de marché","Recoupement des sources","30 diapositives"] }, cat:"Analyse de marché", title:"Le marché africain du jeu vidéo : le cas du Nigéria", large:true, nocover:true,
        desc:"Étude du marché du jeu vidéo en Afrique à travers le cas du Nigéria : un modèle mobile, local et affranchi du AAA occidental, ses moteurs et ses limites.", carte:"Un marché porté par le mobile et une population jeune, des studios qui parlent au local, et des infrastructures qui freinent encore son essor.",
        img:NG.thumb,
        infos:{ "Rôle":"Auteur de l'étude", "Cadre":"Culture vidéoludique · Game Sup", "Date":"Janvier 2025 · mise à jour 2025", "Livrable":"Présentation PowerPoint · 30 diapositives" },
        apercu:"Pour cet exercice de culture vidéoludique, j'ai étudié le marché du jeu vidéo en Afrique à travers le cas du Nigéria, en recoupant et en critiquant mes sources. J'y ai trouvé un modèle mobile et local, porté par une population jeune mais freiné par les infrastructures. J'en retiens une leçon de production : le budget, le calendrier, la plateforme et le mode de paiement se décident ensemble.",
        resume:{ contexte:"Exercice de culture vidéoludique à Game Sup (janvier 2025) : analyser le marché du jeu vidéo en Afrique.",
                 role:"Auteur de l'étude : recherche documentaire, recoupement et critique des sources.",
                 resultat:"Un modèle africain mobile et local, porté par une population jeune mais freiné par les infrastructures, et une leçon de production : budget, calendrier, plateforme et paiement se décident ensemble." },
        contenu:[
          BANDE("I","Problématique et angle d'étude",[
            LIGNE([
              T("Le marché du jeu vidéo reste dominé par les centres occidentaux et japonais, avec la montée du marché chinois, alors que l'Afrique connaît un essor récent. Ma problématique : peut-on constater le développement d'un modèle africain, et en quoi s'affranchit-il du modèle occidental ? J'y réponds à travers le cas du Nigéria."),
              T("En tant que producer, j'ai lu ce marché à travers ses contraintes : réseau, électricité, pouvoir d'achat, accès au paiement. Ce sont elles qui expliquent les choix des studios, de la plateforme au modèle économique, jusqu'au rythme de production.")
            ],[ CITATION("« L'essor de l'industrie du jeu vidéo en Afrique attire l'attention des investisseurs avec une croissance annuelle significative. »","Nathan Bonnet, Afrikactus, 15 mai 2024") ])
          ]),
          BANDE("II","Un marché jeune, mobile et porté par la démographie",[
            LIGNE([
              T("L'industrie est encore jeune : en 1994, l'Afrique ne comptait qu'un seul studio, Celestial Games, en Afrique du Sud. Selon Mordor Intelligence (édition 2024), le marché africain passerait de 2,14 Md$ en 2024 à 3,72 Md$ en 2029, soit environ 11,6 % par an, contre environ 9,3 % pour le marché mondial d'après mon calcul (272,86 → 426,02 Md$). L'Afrique pèse pourtant **moins de 1 %** du marché mondial.")
            ],[ SCHEMA("marche","Le marché africain du jeu vidéo, 2024-2029 (Mordor Intelligence), comparé au marché mondial"), FICHE("Quelques studios pionniers",["Afrique du Sud : Celestial Games (1994)","Cameroun : Kiro'o Games (2003)","Ghana : Leti Arts (2009)","Nigéria : Kuluya, Gamsole et Maliyo (vers 2012)"]) ]),
            LIGNE([
              T("Ce marché repose sur le mobile : en 2022, 200 millions d'Africains jouaient sur leur téléphone, et environ 90 % des revenus passaient par le smartphone (Afrik.com). Le nombre de joueurs tous supports varie fortement selon les sources (de 349 à plus de 600 millions) : ces chiffres ne mesurent pas la même chose, et je ne les compare pas entre eux."),
              T("Le moteur de cette croissance est démographique : 1,4 milliard d'habitants, 2,5 milliards attendus en 2050, et plus de 60 % de moins de 25 ans (Forum économique mondial).")
            ],[ CHIFFRES([["200 M","joueurs sur mobile (2022)"],["90 %","des revenus via smartphone"],["> 60 %","de moins de 25 ans"],["2,5 Md","d'habitants prévus en 2050"]]) ])
          ]),
          BANDE("III","Le Nigéria : des studios mobiles et locaux",[
            LIGNE([
              T("Au Nigéria, l'industrie tourne autour de quatre studios majeurs créés vers 2012 : Maliyo Games, ChopUp, Gamsole et Kuluya. Tous sont tournés vers le mobile, dans un pays qui compte 150 millions d'abonnés à la téléphonie mobile."),
              T("En 2011, Bayo Puddicombe adapte en jeu le danfo, le bus jaune emblématique de Lagos : Danfo dépasse le million de téléchargements. Il fonde ensuite ChopUp avec Zubair Abubakar. En 2016, le studio compte 4 employés et sort un nouveau jeu toutes les 6 semaines.")
            ],[ ETAPES("ChopUp en quelques dates",[["2011 · Danfo","Bayo Puddicombe crée le jeu Danfo : plus d'un million de téléchargements"],["2012 · Création de ChopUp","Fondation à Lagos avec Zubair Abubakar, dans la foulée du succès de Danfo"],["2016 · Rythme de production","4 employés et un nouveau jeu toutes les 6 semaines"]]) ]),
            LIGNE([
              T("Son modèle économique contourne la faible bancarisation : au Nigéria, plus de la moitié des adultes n'ont pas de compte bancaire (Global Findex 2021). ChopUp s'associe donc aux opérateurs mobiles et donne accès à son catalogue contre un petit abonnement hebdomadaire, prélevé directement sur la facture de téléphone. Chicken Escape et Jagun : Clash of Kingdoms ont ainsi été téléchargés 100 000 fois en quelques mois.")
            ],[ IMG(NG.jagun,"Jagun : Clash of Kingdoms, ChopUp, 2017"), IMG(NG.chicken,"Chicken Escape, ChopUp, 2015") ]),
            LIGNE([
              T("Ces studios se détournent du triple A occidental pour parler au local. Pour Matteo Maillard (Jeune Afrique, 2024), ils ont créé une exception africaine face à des AAA dont les scénarios tournent souvent autour « du nombril américain ou de codes culturels européens ». Le quotidien devient matière de jeu, comme les embouteillages de Lagos dans Okada Ride (Maliyo, 2012), tout comme l'histoire et les mythes : Iwaju : Rising Chef (Maliyo, 2024), Aurion : L'héritage des Kori-Odan (Kiro'o Games, Cameroun)."),
              T("Faute d'universités adaptées, les studios assurent aussi la formation : Maliyo Games propose un cursus gratuit, en ligne et de 3 mois (Game Art Academy).")
            ],[ IMG(NG.okada,"Okada Ride, Maliyo Games, 2012"), IMG(NG.iwaju,"Iwaju : Rising Chef, Maliyo Games, 2024"), IMG(NG.aurion,"Aurion : L'héritage des Kori-Odan, Kiro'o Games, 2016") ])
          ]),
          BANDE("IV","L'e-sport et les freins au développement",[
            LIGNE([
              T("La jeunesse (70 % des Nigérians ont moins de 30 ans) porte aussi l'e-sport. Selon PwC (via Agence Ecofin, novembre 2023), les revenus publicitaires des jeux vidéo et de l'e-sport au Nigéria passeraient de 111 M$ en 2022 à 472 M$ en 2027. Les initiatives se multiplient : la confédération africaine CASE (fondée à Dakar en 2023), les tournois AfriGamers ou ABENA Tournaments, qui met en avant les joueuses."),
              T("En recoupant les sources, j'ai relevé une incohérence : le même article annonce 7,1 % de croissance par an, ce qui mènerait à environ 156 M$ en 2027, et non 472 M$. Les éditions plus récentes de PwC donnent d'ailleurs des chiffres plus bas. Je retiens donc une tendance, une croissance à deux chiffres portée par le smartphone, plutôt qu'un montant.")
            ],[ TABLEAU("Jeux vidéo et e-sport au Nigéria selon PwC, selon l'édition",["Source","Période","Revenus"],[["Agence Ecofin, nov. 2023","2022 → 2027","111 → 472 M$ (publicité)"],["Nairametrics, fév. 2025","2023 → 2024","192 → 217 M$"],["Nairametrics, fév. 2025","2024 → 2028","217 → 322 M$ (+ 10,9 % par an)"]],true) ]),
            LIGNE([
              T("Le modèle reste pourtant fortement limité. J'ai relevé cinq freins, du plus matériel au plus structurel."),
              TABLEAU("Les freins au développement du secteur",["Frein","Constat"],[["Internet","Réseau fragile, dépendant d'un nombre limité de câbles sous-marins (BBC News)."],["Électricité","12 effondrements du réseau national en 2024. 82 % des développeurs africains jugent l'électrification primordiale (rapport d'Hugo Obi)."],["Pouvoir d'achat","Peu d'ordinateurs et de smartphones puissants : des jeux gratuits, pensés pour des joueurs occasionnels."],["Formation","Peu, voire pas, de formations longues au jeu vidéo."],["Financement","Des revenus souvent liés à des bailleurs de fonds étrangers. Des observateurs cités par Courrier International jugent ces jeux « bien-pensants » : un ressenti, pas un constat chiffré."]],true)
            ])
          ]),
          BANDE("V","Conclusion et ce que j'en retiens",[
            LIGNE([
              T("L'Afrique s'inscrit dans un marché en progression grâce à une population jeune, un marché mobile en très forte croissance et un e-sport en plein essor. Son modèle, proche du marché asiatique par la place du mobile, se détourne des AAA au profit de jeux du quotidien et de l'histoire nationale, mais il reste fortement limité par les infrastructures, le pouvoir d'achat et le financement."),
              T("Ce que j'en retiens côté production. Un marché se lit d'abord par ses contraintes. ChopUp n'a pas seulement choisi le mobile : le studio a construit son modèle économique autour de la faible bancarisation et calé son rythme de production sur ses ressources. Pour un producer, la leçon est que le budget, le calendrier, la plateforme et le mode de paiement se décident ensemble, dès la conception. Cette étude m'a aussi appris à distinguer un chiffre établi d'une projection avant de bâtir un plan dessus.")
            ],[ FICHE("Ce que je retiens",["Lire un marché par ses contraintes","Construire le modèle économique autour de l'accès au paiement","Caler le rythme de production sur les ressources","Distinguer un chiffre établi d'une projection"]) ])
          ]),
          BANDE("VI","Sources",[ LIGNE([ SOURCES([["Agence Ecofin · Nigéria en 2027, les jeux vidéo généreront plus de revenus publicitaires que le streaming (PwC)", "https://www.agenceecofin.com/communication/1311-113619-nigeria-en-2027-les-jeux-video-genereront-plus-de-revenus-publicitaires-que-le-streaming-l-affichage-exterieur-et-la-presse-ecrite-pwc"], ["Afrik.com · Le gaming en Afrique, une révolution silencieuse", "https://www.afrik.com/le-gaming-en-afrique-une-revolution-silencieuse"], ["Jeune Afrique · L'Afrique, nouvel eldorado des jeux vidéo", "https://www.jeuneafrique.com/1526043/culture/lafrique-nouvel-eldorado-des-jeux-video/"], ["Sigma · Gaming in Nigeria is on the rise", "https://sigma.world/fr/news/gaming-in-nigeria-is-on-the-rise/"], ["Agence Ecofin · Le marché africain des jeux vidéo devrait croître de 11,62 % par an d'ici 2029", "https://www.agenceecofin.com/innovation/0810-122265-le-marche-africain-des-jeux-video-devrait-croitre-de-11-62-par-an-d-ici-2029-rapport"], ["Jeune Afrique · Le Nigeria part à la conquête du marché africain des jeux vidéo", "https://www.jeuneafrique.com/depeches/20777/politique/le-nigeria-part-a-la-conquete-du-marche-africain-des-jeux-video/"], ["Jeune Afrique · Les recettes du succès de ChopUp", "https://www.jeuneafrique.com/315910/economie-entreprises/reussite-les-recettes-du-succes-de-chopup-le-studio-de-jeux-videos-100-nigerian/"], ["Toonmed (blog) · Reportage : les recettes du succès de ChopUp", "https://toonmed.blogspot.com/2016/04/reportage-les-recettes-du-succes-de.html"], ["Agence Ecofin · Le Nigeria et l'Égypte, pays où la moitié des adultes sont non bancarisés", "https://www.agenceecofin.com/finance/0407-99376-le-nigeria-et-l-egypte-font-partie-des-7-pays-au-monde-dans-lesquels-la-moitie-des-adultes-sont-non-bancarises-rapport"], ["Banque de France · Afrique subsaharienne, la fracture financière entre hommes et femmes", "https://www.banque-france.fr/fr/publications-et-statistiques/publications/afrique-subsaharienne-la-fracture-financiere-entre-hommes-et-femmes"], ["Sport News Africa · Vers la naissance de la Confédération africaine du sport en ligne", "https://sportnewsafrica.com/articles/e-sport-vers-la-naissance-de-la-confederation-africaine-du-sport-en-ligne"], ["Mordor Intelligence · Marché mondial du jeu vidéo", "https://www.mordorintelligence.com/fr/industry-reports/global-gaming-market"], ["Courrier International · Comment le jeu vidéo se développe en Afrique", "https://www.courrierinternational.com/article/tendance-comment-le-jeu-video-se-developpe-en-afrique"], ["Africavox · L'Afrique, nouveau berceau de l'e-sport", "https://africavox.easybroadcast.fr/articles/l-afrique-nouveau-berceau-du-e-sports"], ["Afrikactus · L'essor du gaming africain sur la scène mondiale", "https://afrikactus.com/essor-du-gaming-africain-sur-la-scene-mondiale/"], ["ADF Magazine · Des start-ups nigérianes pénètrent le marché des jeux vidéo", "https://adf-magazine.com/fr/2014/10/des-start-ups-nigerianes-penetrent-le-marche-des-jeux-video/"], ["Smart Africa", "https://smartafrica.org/fr/page-daccueil/"], ["AfriGamers", "https://afrigamers.com/a-propos-afrigamers/"], ["Tribune Online · 12 times national grid collapsed in 2024", "https://tribuneonlineng.com/updated-12-times-national-grid-collapsed-in-2024/"], ["Nairametrics · PwC lists 10 fastest-growing entertainment and media sectors in Nigeria 2024-2028", "https://nairametrics.com/2025/02/09/pwc-lists-10-fastest-growing-entertainment-and-media-sectors-in-nigeria-2024-2028/"],["World Economic Forum · How will Africa's youth population drive global growth?", "https://www.weforum.org/stories/youth/africa-youth-global-growth-digital-economy/"],["ONU · Youth population trends (fact sheet)", "https://www.un.org/esa/socdev/documents/youth/fact-sheets/YouthPOP.pdf"],["Afrik.com · L'Afrique, avenir du gaming mondial ?", "https://www.afrik.com/l-afrique-avenir-du-gaming-mondial"],["Le360 · À Kigali, l'Afrique se cherche un modèle économique pour l'e-sport", "https://afrique.le360.ma/sports/des-millions-de-gamers-a-la-manette-a-kigali-lafrique-se-cherche-un-modele-economique-pour-le-sport_OLMQPD7RONHW3MNIOV3TPTZBWI/"],["AFJV · Abena Tournaments", "https://afjv.com/news/11374_abena-tournaments-tournoi-feminin-afrocaribeen-tekken8.htm"],["Linda Ikeji · Mobo Game Jam (Edu360 et Kucheza Gaming)", "https://www.lindaikejisblog.com/2020/12/mobo-game-jam-edu360-kucheza-drive-social-impact-through-gaming.html"],["Maliyo Games · Programmes de formation", "https://www.maliyo.com/programme/"],["Stuff South Africa · GameOn with HP, hackathon", "https://stuff.co.za/2024/10/11/get-your-gameon-with-hps-new-hackathon/"],["HP Gaming Garage", "https://www.hpgaminggarage.com/"],["Game Camp Cities · La CASE signe avec HP", "https://www.gamecampcities.pro/post/la-conf%C3%A9d%C3%A9ration-esport-africaine-signe-son-premier-partenaire-strat%C3%A9gique-continental-le-groupe-h?lang=fr"],["Pulse Nigeria · TCN restores power in Kaduna, Kano, Bauchi and Gombe", "https://www.pulse.ng/articles/news/local/tcn-restores-power-in-kaduna-kano-bauchi-and-gombe-after-prolonged-blackout-2024111910462282759"]]) ]) ])
        ] })
  ]
};
const PROJECTS_EN = {
  pro: [
    P({ title:"End-of-Year Projects: Four Games in Parallel – May–June 2026", large:true, nocover:true,
        desc:"A whole class, a single producer: from setting up production to delivery to the jury, through a mid-course crisis.", carte:"A whole class and a single producer, with an Agile method embedded in the school's Waterfall milestones.",
        img:PRO1.thumb,
        infos:{ "Role":"Producer", "Team":"4 teams · 13 to 14 people", "Duration":"27 May – 24 June 2026", "Tools":"Excel · PowerPoint (OneDrive) · Discord" },
        survol:{ moteur:"Unreal Engine", logo:"images/unreal-engine.png", items:["Producer","4 Teams","Varied Game Genres","4 Weeks"] },
        apercu:"For Game Sup's end-of-year project, the whole class developed four games in four weeks, and I was their producer, working with the instructors who acted as publishers. I adapted an Agile method to the school's Waterfall milestones, set up Excel tracking for each group and kept the supervisors and teams connected day to day. After an art direction crisis in the second week, I organised two playtest sessions for all four teams, then reset priorities with each of them. All four games were delivered to the jury, with 93% of the 1,387 tasks completed.",
        resume:{ contexte:"Game Sup end-of-year project, carried out by the whole class in 4 weeks.",
                 role:"Producer for the 4 teams, working with the instructors acting as publishers.",
                 resultat:"4 games delivered to the jury; 1,387 tasks tracked, 93% completed, despite an art-direction crisis overcome in the second week." },
        decisions:[ "**Agile at scale**: adapted to 4 projects run in parallel, within the school's Waterfall milestones.",
                    "**Tracking tools**: a macro-planning and a micro-planning in Excel for each group, 1,387 tasks tracked.",
                    "**Alignment** between the supervisors and the teams, from milestones to day-to-day issues.",
                    "**Two playtest sessions** shared by the 4 teams, fitted to the other classes' schedules.",
                    "**Priorities reset** with each team after playtest feedback." ],
        contenu:[
          BANDE("I","The project framework",[
            LIGNE([
              T("As every year at Game Sup, classes work in teams on a project lasting about 3 to 4 weeks. This edition stood out for several upstream design and selection phases, which led to 4 topics of varied genres."),
              T("To work within this framework, I organised my work into four macro-tasks, presented below.")
            ],[ FICHE("The constraints",["Four games to produce at the same time","Milestones set by the school: Proof of Concept, Alpha, Beta","A single producer for more than fifty people","Four weeks, with no margin to catch up on delays"]) ]),
            LIGNE([ KEYART([
                      ["images/fda-castor.jpg","Le Castor et l'Écureuil","A puzzle platformer where animals try to save their endangered environment by neutralising the human infrastructure destroying Anjou's nature."],
                      ["images/fda-glow.jpg","Project GLOW","A third-person action-adventure game in the vein of inFAMOUS Second Son, where a rebel teenager with portal powers must overthrow the corporation that corrupts the gangs and pollutes the city.",1],
                      ["images/fda-insight.jpg","Insight","A married couple solves puzzles and completes trials using newfound powers, the eyes they find, to reach their respective goals in a 1930s manor in Northern Massachusetts."],
                      ["images/fda-flowering.jpg","The Flowering Dead","A boss rush where survivors fight for their lives in a post-apocalyptic world overrun by mutant plants and animals."]
                    ]) ])
          ]),
          BANDE("II","Organising four teams in parallel",[
            LIGNE([
              T("Four games, more than fifty people and a single producer: I knew from the start that I could not be in every room all the time. Yet the instructors' guidelines had to reach every group in the same way. That is why we launched the productions with the whole class together, the day after the selection. Everyone heard the same guidelines at the same time, and we could set the organisation, tools and method together before refining them group by group."),
              T("To keep a direct link with each team, I appointed two leads per group with the instructors, one for the Game Designers and one for the Game Artists. That did not solve everything: when I was in a meeting with one group, the other three moved on without me. Dailies took over so that tracking continued in my absence, and I remained the link between the instructors and the teams throughout the weeks, not only at milestones."),
              T("Looking back, those daily check-ins did not bring the whole team together, and not everyone truly understood the project's progress. On a future project, I would set up whole-team dailies from day one.")
            ],[ SCHEMA("orga") ])
          ]),
          BANDE("III","Planning and tracking production",[
            LIGNE([
              T("The school set its Waterfall milestones (Proof of Concept, Alpha, Beta), but each team needed sprints suited to its project. I had to connect the two, with tracking consistent enough to compare the four groups and spot delays early."),
              T("I built this tracking in Excel, on two levels. For each group, a macro-planning sets out the sprints and the school's milestones. A micro-planning then links each task to a sprint, a priority, a difficulty and a status: in total, **1,387 tasks** were tracked. Working documents were shared in a common PowerPoint on OneDrive, and each group had its own Discord space.")
            ],[ IMG(PRO1.macro,"Each group's own Excel macro-planning: sprints and milestones (Proof of Concept, Alpha, Beta)") ],"dessous"),
            LIGNE([
              T("Keeping nearly 1,400 statuses up to date took constant attention, but it is what made delays and kills visible, sprint by sprint. What I lacked were more precise end-of-sprint deliverables for each discipline: progress was sometimes hard to check concretely. That is the first thing I would change.")
            ],[ IMG(PRO1.micro,"Excerpt from one group's micro-planning: tasks, sprints, priorities, difficulties and statuses") ],"dessous")
          ]),
          BANDE("IV","Handling the art direction crisis",[
            LIGNE([
              T("In the second week, the same problem appeared in all four groups: art direction was unclear, and team members struggled to picture the references. Delays quickly reached two to three days, and I could feel the risk of crunch coming."),
              T("Rather than let each team get bogged down, we held emergency meetings with each group and paused production for a day and a half. That time to step back helped us understand where the problem came from: references that were too broad and imprecise, and a research pass that was too short at the start, because we thought the selection-phase research would be enough.")
            ],[ SCHEMA("planning","Production calendar: sprints, milestones, mid-course crisis and playtests") ]),
            LIGNE([
              T("Each group experienced the crisis in its own way, so there was no single answer. For one, I decided, in agreement with the discipline leads, to kill several assets that were off-brief or no longer a priority. For another, we reworked the Level Art and the atmospheric shader."),
              T("If I had to do it again, I would have a small reference scene built in the engine from the start, with a prop at the target quality, the desired textures and the lighting and camera intentions.")
            ],[ IMG(PRO1.kill,"Removed tasks (kills) in one group's tracking") ],"dessous")
          ]),
          BANDE("V","Running playtests and reprioritising",[
            LIGNE([
              T("After the crisis, only two weeks remained. We had to decide where to put the effort, and accept dropping some things, without letting the end of the project weigh on the teams. So I organised two playtest sessions for all four groups, aligned with the other classes' schedules so that outside players could come."),
              T("To make the feedback usable, each team prepared a structured questionnaire. The one for Le Castor et l'Écureuil, for example, covered the characters, design consistency and controls, with answers rated from 1 to 7, and collected 22 responses."),
              T("The feedback was plentiful, and often critical, at a time when morale was already low. With each team, we sorted it to keep the most important points, then I redefined priorities and reorganised the schedules. Seeing strangers play the projects also gave the teams new energy: despite the criticism, the games appealed.")
            ],[ CAROUSEL([["images/fda-playtest-form.jpg","The playtest feedback form for Le Castor et l'Écureuil: 22 responses"],["images/fda-playtest-perso.jpg","A section of the questionnaire: how players rated the characters"],["images/fda-playtest-coherence.jpg","A section of the questionnaire: design consistency, rated from 1 to 7"]]) ])
          ]),
          BANDE("VII","Lessons learned",[
            LIGNE([
              T("It was the first time I had been entrusted with producing for an entire class, and it was above all the mid-course crisis that made me grow. It taught me to set aside what I thought I knew and listen to each team's own needs, to delegate, and to set up clear communication channels from the start, so that no team feels left to fend for itself.")
            ])
          ]),
          BANDE("VIII","The teams",[
            LIGNE([
              T("These four games are first and foremost the work of their teams. Here is every member, their role and their LinkedIn profile, group by group."),
              EQUIPES(EQUIPES_FDA)
            ])
          ])
        ] }),
    P({ title:"Rogue-lite Workshop – February 2026", wip:true,
        desc:"Two-level planning for two teams over three weeks: a workshop roadmap and daily tasks.", carte:"Two teams over three weeks, with a roadmap for the workshop and daily tasks for each team.",
        survol:{ moteur:"Unity", logo:"images/unity.svg", items:["Producer","12 to 13 people","Rogue-lite"] }, img:"images/rogue-thumb.jpg",
        infos:{ "Role":"Producer", "Team":"2 teams · 12 to 13 people", "Duration":"3 weeks", "Genre":"Rogue-lite" },
        resume:{ contexte:"Three-week workshop at Game Sup: two teams of 12 to 13 people, each developing a rogue-lite.",
                 role:"Producer for both teams: planning, sprints and decisions.",
                 resultat:"" },
        decisions:[ "**Two-level planning**: a roadmap for the workshop and daily tasks for each team.",
                    "**Sprints fitted** to each team, built after listening to their needs.",
                    "**Made the call** on blockers raised by the teams.",
                    "**Constructive feedback** on design documents, to keep the scope realistic and feasible." ],
        contenu:[
          IMG("", "Production schedule")
        ] }),
    P({ title:"Fusion Workshop – November 2025", wip:true,
        desc:"An agile production plan in Excel, weekly reviews and first dailies for two teams.", carte:"An agile production plan in Excel, weekly reviews and the first dailies, entrusted to the team leads.",
        survol:{ moteur:"Unreal Engine", logo:"images/unreal-engine.png", items:["Producer","12 to 13 people","Racing · Fusion"] }, img:"images/fusion-thumb.jpg",
        infos:{ "Role":"Producer", "Team":"2 teams · 12 to 13 people", "Duration":"3 weeks", "Tools":"Excel" },
        resume:{ contexte:"Three-week workshop at Game Sup: two teams of 12 to 13 people.",
                 role:"Producer for both teams: production plan, tracking and task distribution.",
                 resultat:"" },
        decisions:[ "**Agile production plan** built in Excel, with **weekly reviews**.",
                    "**First dailies** set up, entrusted to the Art and Design leads.",
                    "**Tasks distributed** between Game Artists and Game Designers, balancing workloads." ],
        contenu:[
          IMG("", "Production plan")
        ] }),
    P({ title:"End-of-Year Projects: My First Two Productions – June 2025", wip:true,
        desc:"My first time managing two projects in parallel, tracked in Excel and Miro.", carte:"Two teams tracked in parallel in Excel and Miro, with sprint reviews for each.",
        survol:{ moteur:"Unreal / Unity", logos:["images/unreal-engine.png","images/unity.svg"], items:["Producer","12 to 13 people","Varied genres"] }, img:"images/fin-annee-2025-thumb.jpg",
        infos:{ "Role":"Producer", "Team":"2 teams · 12 to 13 people", "Duration":"4 weeks", "Tools":"Excel · Miro" },
        resume:{ contexte:"Game Sup end-of-year project: two teams of 12 to 13 people, four weeks of development.",
                 role:"Producer for both projects, run in parallel.",
                 resultat:"" },
        decisions:[ "**Two projects run in parallel** for the first time, tracked in Excel and Miro.",
                    "**Sprint reviews** held for each team.",
                    "**Task lists** built together with the Art and Design leads." ],
        contenu:[
          IMG("", "Miro board")
        ] })
  ],
  perso: [
    P({ title:"Jira and Agile Project: A Studio Simulation – October 2026", large:true, nocover:true,
        desc:"A simulation run on my own: the production of a fictional AA action-RPG, structured in Jira, from organising the studio to the first sprint.",
        carte:"The production of a fictional AA action-RPG structured in Jira, with its two bottlenecks and a critical path that runs through the vendors.",
        img:"",
        infos:{ "Role":"Producer (simulation, run solo)", "Project":"Fictional AA action-RPG · 15 people + 4 vendors", "Tools":"Jira · JQL · Coda", "Period":"October 2026", "Training":"Agile with Atlassian Jira · Atlassian, via Coursera" },
        apercu:"To learn Jira on a realistic case, I organised on my own the production of a fictional AA action-RPG: 15 people in-house and four vendors, modelled on Ember Lab's setup for Kena: Bridge of Spirits. While preparing the Vertical Slice, my main finding was that the pace would not be set by the two squads, but by two people: the gameplay animator and the sound designer. I also saw that the critical path ran through the vendors. I built the space to make these risks visible: dependencies linked to work items, a capacity calculated per squad, one board per audience and a dashboard for the producer. It is a simulation: I play every role, and the simulated sprint tests the tool, it does not prove I can lead a team.",
        contenu:[
          BANDE("I","The project framework",[
            LIGNE([
              T("I knew the basics of Jira, but I wanted to understand how a studio really organises itself in it, with several teams, vendors and milestones spread over years. So I built a **complete simulation** rather than a simple task board."),
              T("To start from a credible structure, I relied on what Ember Lab has made public about the production of **Kena: Bridge of Spirits**: a small in-house team, with part of the work handed to partner studios. My fictional game follows this model: a third-person AA action-RPG, produced over three years by **15 people**, with QA, part of the animation and art, and the music outsourced."),
              T("I ran this project alongside the **Agile with Atlassian Jira** course, offered by Atlassian on Coursera, to put each concept into practice on a concrete case. I earned its certificate on 14 October 2026."),
              LIEN("Verify the certificate","https://coursera.org/verify/EQE4DN5JX2XG")
            ],[ FICHE("The constraints",["A 15-person team, on a free plan limited to 10 users","Jira cannot backdate a work item: the simulation runs in real time","A demo sprint compressed to one week instead of two","Work done alone, playing every role on the team"]),
                FICHE("What this project shows, and what it does not",["It shows: structuring a tool for a realistic organisation, planning under constraints and making risks visible","It does not show: leading a real team. The sprint data is simulated"]) ])
          ]),
          BANDE("II","Organising the studio and its vendors",[
            LIGNE([
              T("I split the team into two cross-disciplinary **squads** of six, Gameplay and World, with a Transverse group (creative direction, production, tech art). Vendors have their own value, External, and their own tracking, because their work is not part of a squad's sprint. Each one has an **internal referent** who approves its deliveries: the producer for QA, the gameplay animator for the animation studio, the lead environment artist for the art studio."),
              T("In the space, each work item answers four questions: where the work sits in the game (the component), who does it (the squad), for which phase of the project (the version) and which cross-cutting category it belongs to (the label). This sorting has a simple goal: every view the team needs then becomes a query.")
            ],[ CAROUSEL([["images/jira-versions.png","The project's versions, from concept to release, with their exit criteria"],["images/jira-composants.png","Some of the 29 components: systems, disciplines and levels"],["images/jira-squad.png","The Squad field and its four values: Gameplay, World, Transverse and External"]]) ]),
            LIGNE([
              T("Looking back, this separation is what took the most thought. A task done by the tech artist, for instance, belongs to the squad that commits to delivering it in its sprint, not to the Transverse group: otherwise it would appear on no board, and nobody would commit to delivering it.")
            ],[ IMG("images/jira-ticket.png","A Vertical Slice Story: acceptance criteria, sub-tasks, squad, component, version and parent Epic") ])
          ]),
          BANDE("III","The bottlenecks and the critical path",[
            LIGNE([
              T("I broke the game down into Epics (combat, companions, bestiary, acts), then wrote the **Vertical Slice** backlog as player-value Stories, each split into sub-tasks assigned to a person. “Enemy AI framework” thus becomes “Enemies perceive, chase and attack the player”."),
              T("This breakdown revealed the project's first risk. The **gameplay animator** works on 13 Stories out of 23, and the **sound designer** on 15. They set the pace, far more than the size of the squads. The Gameplay squad's second sprint shows it well: three of its Stories need animation, and the animator would be overloaded. There were two options: take one Story out of the sprint, or keep it and flag the risk from sprint planning onwards."),
              T("[To complete: the call you made for Gameplay S02, and why.]")
            ],[ CHIFFRES([["23","Stories in the Vertical Slice"],["126","Estimated points"],["13 and 15","Stories for the animator and the sound designer"],["3","Vendor deliveries blocking Stories"]]) ]),
            LIGNE([
              T("The second risk comes from outside. Three World Stories (the forest entrance, the guide NPC and the forest soundscape) are waiting on **vendor deliveries**: a batch of props, a batch of animations and the main theme. In Jira, each delivery is a work item linked to the Story it blocks, and a Story only enters a sprint once its dependencies are cleared: it is a condition of my **Definition of Ready**."),
              T("The consequence is direct: however fast it goes, the World squad cannot finish the Vertical Slice before these deliveries. **The critical path runs through outsourcing.** So I deliberately gave the World squad a light first sprint, and kept the rest of its capacity for preproduction: art bible, concepts and vendor briefs. On a real project, the dates of these deliveries are what I would track first.")
            ],[ IMG("images/jira-backlog-vs.png","The Gameplay squad's first sprint: each Story broken down into sub-tasks") ],"dessous")
          ]),
          BANDE("IV","Estimating what each squad can hold",[
            LIGNE([
              T("Before committing to a sprint, I calculated each squad's **capacity**: the days in the sprint multiplied by the share of time really spent on its work. I took off about 20% for meetings and the unexpected, and counted leads at half time, because part of their time goes to management and reviews."),
              T("Without history, you commit cautiously. The Gameplay squad therefore starts with **21 points**, with a clear sprint goal: the player can fight, dodge and take damage, against enemies that chase them. The World squad commits to **13 points**, for the dependency reasons above. After that, the average velocity of the last three sprints becomes the reference, and an unfinished Story is never half-counted: it moves whole to the next sprint."),
              T("Both squads follow the same cadence, to make joint reviews and dependencies easier. Within a Story, one simple rule avoids mixed signals: **a sub-task never has a higher priority than its Story**. Finally, a query that sorts sub-tasks by person and priority gives the view to show at the first daily.")
            ],[ IMG("images/jira-sprints.png","The Gameplay squad's current sprint, with the next one already prepared") ])
          ]),
          BANDE("V","Giving everyone the right visibility",[
            LIGNE([
              T("In Jira, **a board is just a view on top of a filter**. So I designed the boards by audience: a Scrum board for each squad, a Kanban board for QA, a Kanban board for vendor deliveries, which arrive in batches and do not follow the sprint rhythm, and a Production board that sees the whole project but on which no sprint is ever started.")
            ],[ CAROUSEL([["images/jira-board-production.png","Production: the overview, on which no sprint is ever started"],["images/jira-board-gameplay.png","Gameplay: the squad's current sprint, grouped by Epic"],["images/jira-board-world.png","World: the squad's current sprint, grouped by Epic"],["images/jira-board-qa.png","QA-Bugs: the bug flow, with a lane reserved for blockers"],["images/jira-board-vendors.png","Vendors: the deliveries expected from each vendor"]]) ]),
            LIGNE([
              T("On the QA board, each column has a **work-in-progress limit**: no more than ten bugs in triage, five being fixed and eight awaiting verification. When a column overflows, it is the signal to stop opening bugs and finish the ones already started.")
            ],[ IMG("images/jira-colonnes-qa.png","The QA-Bugs board columns, with their work-in-progress limits") ],"dessous"),
            LIGNE([
              T("For the producer, I built a **library of filters** that answers the Monday-morning questions. Where is the sprint at? Which work items are blocked or carried over? Has the Vertical Slice scope moved? And is the data reliable, with no item missing a squad and none done without a resolution? They are what feed the producer's dashboard.")
            ],[ IMG("images/jira-filtres.png","The Vertical Slice scope filter, and the list of saved filters") ],"dessous"),
            LIGNE([
              T("Finally, the two **workflows** reflect quality choices. A Story goes through a review and then a QA check before it is done. A bug goes through triage, needs a resolution to be closed, and can be reopened: this is what makes it possible to count fixes that do not hold.")
            ],[ CAROUSEL([["images/jira-workflow-bugs.png","The bug workflow: triage, fix, verification and reopening"],["images/jira-workflow-dev.png","The Story and Task workflow: review, then QA check"]]) ])
          ]),
          BANDE("VI","Testing the tool with a simulated sprint",[
            LIGNE([
              T("To get real data, I am running a first sprint from 24 to 31 October, compressed to one week instead of two, because Jira builds its charts from real dates. On the QA side, I wrote a **scenario of eleven bugs** to put the workflows to the test: a blocker fixed the same day, a duplicate, a bug that cannot be reproduced, a reopened bug and a crash added mid-sprint."),
              T("[To complete after 31 October: what was finished, what was carried over and why, and what the dashboard made visible.]")
            ],[ IMG("","Screenshot to add: the dashboard at the end of the sprint") ]),
            LIGNE([
              T("[To complete: a blocker marked with a flag, how it was lifted, and what it changed in the sprint.]")
            ],[ IMG("","Screenshot to add: the burndown or sprint report") ])
          ]),
          BANDE("VII","What I take away",[
            LIGNE([
              T("Above all, this project taught me to think of Jira as a database rather than a task board: once the work items are well sorted, every team, milestone and quality check is just a query. It also showed me that the tool is only there to make the producer's real decisions visible: who is overloaded, what depends on outside partners and what we agree to postpone."),
              T("To compare, I transposed this organisation into **Coda**. Some calculations are simpler there, but Coda does not keep the status history, which you have to record yourself. The right tool depends on what the team needs to track."),
              T("[To complete after the sprint: what I would change on a real project.]")
            ])
          ])
        ] })
  ],
  exo: [
    P({ survol:{ items:["Producer","AA game · 30 to 50 people","48-month production","Excel · Coda · ClickUp"] }, cat:"Production management", title:"Wyrdfall", nocover:true, desc:"Production dossier for a 48-month AA game: team, budget, planning, sales estimate and break-even point.", carte:"The production management file for a 48-month AA game: team, schedules, budget, sales and break-even point.", large:true,
        img:PROJECTS_FR.exo[0].img, cimg:PROJECTS_FR.exo[0].cimg, cbg:"#7dad9c",
        infos:{ "Role":"Producer", "Project":"AA · 30 to 50 people", "Tools":"Excel · Coda · ClickUp", "Workload":"20 hours out of 90 (whole assignment)", "Deliverables":"Team · Planning · Budget · Market Analysis" },
        apercu:"This production exercise was about Wyrdfall, a fictional AA game. I only show the production management part here, where I acted as producer, from building the team to the break-even point. The result: a €9M budget over 48 months, a break-even point at around 451,000 sales and three ROI scenarios, all in an Excel file that updates in one click.",
        resume:{ contexte:"Game Sup production exercise around a fictional AA game. Only the production management part is shown here.",
                 role:"Producer of the project: from team composition to break-even point.",
                 resultat:"A €9M budget over 48 months, a break-even point at about 451,000 sales and three ROI scenarios, in an Excel file that updates in one click." },
        contenu:[
          BANDE("I","The brief and my role",[
            LIGNE([
              T("For this exercise, we had to provide a production management document covering several areas: a credible definition of the team to assemble, a macro-planning and a micro-planning of the production in Coda and ClickUp, a development budget in Excel and a sales estimate (Market Analysis)."),
              T("I chose an AA-scale project comparable to Greedfall: Wyrdfall, carried by a team of 30 to 50 people at peak production."),
              T("The High Concept document and the prototype, also required, were produced during the rest of the assignment and are not shown here.")
            ],[ FICHE("Production management · shown here · 20 h",["Team to assemble","Macro-planning and micro-planning (Coda, ClickUp)","Development budget (Excel)","Sales estimate (Market Analysis)"]), FICHE("Other deliverables · 70 h",["High Concept document","Prototype"]) ])
          ]),
          BANDE("II","A clear, adjustable production file",[
            LIGNE([
              T("When building my general Excel file, my priority was clarity: every piece of information had to be found quickly, without getting lost among the tabs. So I worked on colour consistency to group related pages, and built buttons and a simple navigation bar."),
              T("The organisation of the pages and the hierarchy of information within each one were also given particular attention."),
              T("A key goal of this work was the adaptability of the file: the budget must update in one click when a new member joins the studio or when seniority changes."),
              T("I also wanted this flexibility to extend to the software assigned to employees, so that the budget adjusts immediately (see image).")
            ],[ CAROUSEL([[EX1.nav,"Home page of the production file: buttons and navigation through colour-coded tabs"],[EX1.budget,"Budget overview: team, duration and budget by department"]]) ]),
            LIGNE([
              T("Wyrdfall is a 48-month AA project, comprising 36 months of production and 12 months of live service, for a team of 42 people, 25 of whom remain on the live phase. The total project budget comes to **€9,033,682**, of which €7,070,677 is salaries (78%), the rest being split between Software, Localization, Utilities and Outsourcing.")
            ],[ CHIFFRES([["€9,033,682","Total Budget"],["42","People on the team"],["48 months","36 production · 12 live"],["78%","Share of salaries"]]) ])
          ]),
          BANDE("III","The Market Analysis and the break-even point",[
            LIGNE([
              T("To estimate potential sales on Steam, I started by analysing the game's competitors, extracting usable averages for my projection scenarios. To build a wide panel, I selected games released over 11 years, from 2014 to 2025: a rather wide period that would benefit from being narrowed to 5 years.")
            ],[ IMG(EX1.market,"Competitor analysis: sales, estimated revenue and averages") ],"dessous"),
            LIGNE([
              T("The extracted data allowed me to propose two scenarios, an optimistic one and a more conservative one, each broken down into three risk levels (high, average, low), so that the production's economics could be considered as clearly as possible.")
            ],[ CAROUSEL([[EX1.roiCons,"ROI estimate, conservative scenario: 250,000 followers, in high, average and low cases"],[EX1.roiOpti,"ROI estimate, optimistic scenario: average sales from the Market Analysis, in high, average and low cases"]]) ]),
            LIGNE([
              T("To know when the project becomes profitable, I calculated its break-even point. From a price of €49.99, I removed Steam's share, taxes and the Unreal Engine royalty in one go (55%), then refunds. It is a cautious choice: each sale only brings in about €20, a little less than in reality. The budget is covered from about **451,000 sales**. If the project holds up under this assumption, it will hold up under a more favourable one."),
              T("In the average conservative scenario, I estimate sales at 482,000, just above the threshold, for a profit of €616,438, an ROI of about +6.8%. The table shows the other cases: everything depends on the wishlist conversion rate. These estimates only count Steam sales, without the DLC."),
            ],[ TABLEAU("Net profit and ROI by scenario · Total budget: €9,033,682",["Scenario","Estimated sales","Net profit (ROI)"],["Conservative: 250,000 followers", ["High", "626,600", "+ €4,639,128 (+ 51.4%)"], ["Average", "482,000", "+ €616,438 (+ 6.8%)"], ["Low", "115,680", "− €6,873,790 (− 76.1%)"], "Optimistic: average sales from the Market Analysis", ["High", "959,400", "+ €11,901,031 (+ 131.7%)"], ["Average", "738,000", "+ €5,741,809 (+ 63.6%)"], ["Low", "177,120", "− €5,726,628 (− 63.4%)"]]) ])
          ]),
          BANDE("IV","Planning four years of production",[
            LIGNE([
              T("Finally, this exercise tested my ability to anticipate and plan: it was no longer a three-week project but a 4-year production, from the main production through to the release of the planned DLC."),
              T("Planning Epics and Stories across an entire production is a real challenge, which pushed me to take every aspect of the project into account: the essential elements, the levels, QA integration, and so on.")
            ],[ IMG(EX1.epic,"Macro-planning: the production's Epics") ],"dessous"),
            LIGNE([
              T("I completed this work with a detailed sprint and its tasks: a pre-production sprint aimed at preparing the Vertical Slice."),
              T("This part was demanding: it forced me out of the logic of the sprints in our very constrained 3-week workshops, to reason step by step about the needs that lead from one sprint to the next.")
            ],[ IMG(EX1.sprint,"Pre-production sprint: tasks, priorities and sprint points") ],"dessous")
          ]),
          BANDE("V","What I take away",[
            LIGNE([
              T("This work was extremely formative and gave me a fresh perspective on the producer role. In hindsight, I see several ways to improve it. First, I underestimated the workload of the QA team: a larger headcount would be needed to avoid a possible crunch. The same goes for the Sound Design team, which is also understaffed."),
              T("It would also be useful to study the funding available to a studio of this size to flesh out the dossier: regional, national and European grants, bank financing, Kickstarter."),
              T("I nonetheless remain proud of this work, which broadened my view of the scope of this role.")
            ],[ FICHE("Areas for improvement",["Strengthen the QA team to avoid a crunch","Re-evaluate the Sound Design team","Study funding: regional, national and European grants, bank solutions, Kickstarter"]) ])
          ])
        ] }),
    P({ survol:{ items:["Author of the GDD","Turn-based RPG","90 hours","67 pages"] }, cat:"Game Design and Narrative Design", title:"Castalie's Tears", large:true, nocover:true,
        desc:"Game Design Document for a mythology-inspired turn-based RPG: the core loop and its systems, then their embodiment in the universe, the character and a Narrative Design level.", carte:"The Game Design Document for a turn-based mythological RPG: core loop, systems and their embodiment in the story.",
        img:CT.thumb,
        infos:{ "Role":"Author of the GDD", "Context":"Game Design · Game Sup", "Date":"April 2025", "Workload":"90 hours", "Deliverable":"Game Design Document · 67 pages" },
        apercu:"For this Game Design exercise, we had to design a game based on a mythical creature from an assigned country, and I was given Greece. I wrote the Game Design Document for Castalie's Tears, a turn-based RPG, from the concept to a complete level, making sure every mechanic meant something in the story. This work helps me in production today: I better understand what is being asked of design teams.",
        resume:{ contexte:"Game Design exercise at Game Sup (April 2025): design a game from a mythical creature of an assigned country, Greece.",
                 role:"Author of the Game Design Document: concept, systems, world, character and level.",
                 resultat:"A turn-based RPG where every mechanic is embodied in the story, and hands-on knowledge of design work, useful for working with design teams in production." },
        contenu:[
          BANDE("I","The idea and the concept",[
            LIGNE([
              T("Among the Greek mythical creatures, I chose the Naiads, goddesses of the waters. From there came a simple idea: a Naiad travels through Greece to save divinities and fight Typhon's armies. The player embodies Castalie, guardian of the Delphi spring, and meets heroes and gods along the way who become her companions."),
              T("Castalie's Tears is a single-player turn-based RPG designed for PC and Nintendo Switch, with a premium model. To place it: Dragon Quest XI meets Dragon Age: Inquisition in a universe close to Immortals Fenyx Rising. It is a measured game that rewards thinking and organisation more than reflexes.")
            ],[ CAROUSEL([[CT.pitch,"The core statement: Castalie against Typhon"],[CT.one,"The one-liner and its three references"],[CT.info,"The project information sheet"]]) ])
          ]),
          BANDE("II","Intentions, pillars and core loop",[
            LIGNE([
              T("I started from values (courage, cooperation, resilience) and themes: survivor guilt, trust, and the question “what is a hero?”. These intentions become three gameplay pillars: fight Typhon's tides, explore a desolate world, and take care of your Source to make it grow."),
              T("I also listed what the game will not be: multiplayer, grid-based tactical combat, a skill tree, mini-games, stealth, multiple endings. That is what keeps the scope under control.")
            ],[ CAROUSEL([[CT.pillars,"The three gameplay pillars"],[CT.notdo,"What the game is not"]]) ]),
            LIGNE([
              T("The player manages their base, explores, solves puzzles or fights, gathers resources and levels up, then crafts or trades before returning to base. I qualified each step by its role in the game economy (source, converter, drain, trader) to check that the loop feeds itself as much as it consumes."),
              T("The game targets an active adult audience who plays in short sessions: Achiever first, then Explorer in Bartle's taxonomy. They want depth and choices, hence a game that bets on story and management rather than puzzles.")
            ],[ IMG(CT.loop,"The core loop of Castalie's Tears") ])
          ]),
          BANDE("III","From mechanics to story",[
            LIGNE([
              T("Typhon has defeated the gods and scattered their powers, the Divine Graces. What remains is a barren land, ruins and a few sanctuaries. In this world, every mechanic is embodied in the story: you don't manage a menu, you protect a sacred fountain; you don't unlock a skill, you inherit the power of a fallen god."),
              T("Even the loot tells a story: Typhon's beasts devour fragments of Grace to grow stronger, so what the player collects is also what the enemy craves.")
            ],[ CAROUSEL([[CT.realm,"The Realm of Light before the Fall"],[CT.typhon,"Typhon"],[CT.sealed,"A Sealed Temple"]]) ]),
            LIGNE([
              TABLEAU("One mechanic, one embodiment",["Mechanic","Narrative embodiment"],[["The Source (base management)","The sacred fountain of Delphi, which shelters refugees"],["Divine Grace (skills, crafting)","The powers of the fallen gods, scattered by Typhon"],["Companions (recruitment)","Minor deities, heroes and refugees to rescue"],["Sealed Temples (dungeons, bosses)","The ruins where the great gods are held"],["Progression","Castalie regaining confidence, from fragile Naiad to leader"]],true)
            ])
          ]),
          BANDE("IV","Castalie and the Temple of Apollo level",[
            LIGNE([
              T("I built Castalie on a flaw and an evolution: she lacks confidence and distrusts her powers and strangers. Over the adventure, she becomes a fighter and a leader, and her voice grows more assured. The game's themes run through her."),
              T("The first level, the ruins of the temple of Apollo, her mentor, is designed as a walk through memory: mosaics tell the past, and Castalie comments on what she remembers. Intensity rises in steps between rooms, with breathers, up to the boss waiting where she used to talk with Apollo.")
            ],[ IMG(CT.castalie,"Castalie, the Naiad of the Delphi spring","sm") ]),
            LIGNE([
              CAROUSEL([[CT.moodboard,"Level moodboard"],[CT.ld,"Level layout"],[CT.mol,"Molecular diagram: rooms and their links"],[CT.pacing,"Level intensity curve"]])
            ])
          ]),
          BANDE("V","What I take away",[
            LIGNE([
              T("A GDD is not just a list of features: it must link intentions to mechanics, and mechanics to what the player feels. That chain is what I tried to make readable, from pillar to level."),
              T("As a producer, this is what now helps me understand what is being asked of design teams, estimate its scope, and know where the heart of a project lies when choices have to be made.")
            ])
          ])
        ] }),
    P({ survol:{ items:["Author of the study","Market analysis","Source cross-checking","30 slides"] }, cat:"Market analysis", title:"The African Video Game Market: The Case of Nigeria", large:true, nocover:true,
        desc:"A study of the African video game market through the case of Nigeria: a mobile, local model that breaks away from Western AAA, its drivers and its limits.", carte:"A market driven by mobile and a young population, studios that speak to local audiences, and infrastructure that still holds it back.",
        img:NG.thumb,
        infos:{ "Role":"Author of the study", "Context":"Video game culture · Game Sup", "Date":"January 2025 · updated 2025", "Deliverable":"PowerPoint presentation · 30 slides" },
        apercu:"For this video game culture exercise, I studied the African video game market through the case of Nigeria, cross-checking and critically reviewing my sources. I found a mobile, local model, driven by a young population but held back by infrastructure. My production takeaway: budget, schedule, platform and payment method are decided together.",
        resume:{ contexte:"Video game culture exercise at Game Sup (January 2025): analyse the video game market in Africa.",
                 role:"Author of the study: desk research, cross-checking and critical review of sources.",
                 resultat:"An African model that is mobile and local, driven by a young population but held back by infrastructure, and a production lesson: budget, schedule, platform and payment are decided together." },
        contenu:[
          BANDE("I","Research question and approach",[
            LIGNE([
              T("The video game market is still dominated by Western and Japanese centres, with the rise of the Chinese market, while Africa is going through a recent boom. My research question: can we see an African model emerging, and how does it break away from the Western one? I answer it through the case of Nigeria."),
              T("As a producer, I read this market through its constraints: network, electricity, purchasing power, access to payment. They are what explain the studios' choices, from platform to business model and even production pace.")
            ],[ CITATION("“The rise of the video game industry in Africa is attracting investors' attention, with significant annual growth.”","Nathan Bonnet, Afrikactus, 15 May 2024") ])
          ]),
          BANDE("II","A young, mobile market driven by demographics",[
            LIGNE([
              T("The industry is still young: in 1994, Africa had only one studio, Celestial Games, in South Africa. According to Mordor Intelligence (2024 edition), the African market would grow from $2.14 bn in 2024 to $3.72 bn in 2029, about 11.6 % a year, against about 9.3 % for the world market by my calculation ($272.86 bn → $426.02 bn). Yet Africa accounts for **less than 1 %** of the world market.")
            ],[ SCHEMA("marche","The African video game market, 2024-2029 (Mordor Intelligence), compared with the world market"), FICHE("A few pioneering studios",["South Africa: Celestial Games (1994)","Cameroon: Kiro'o Games (2003)","Ghana: Leti Arts (2009)","Nigeria: Kuluya, Gamsole and Maliyo (around 2012)"]) ]),
            LIGNE([
              T("This market relies on mobile: in 2022, 200 million Africans played on their phones, and about 90 % of revenue came through smartphones (Afrik.com). The number of players across all platforms varies widely between sources (from 349 to over 600 million): these figures do not measure the same thing, so I do not compare them."),
              T("The driver of this growth is demographic: 1.4 billion inhabitants, 2.5 billion expected by 2050, and over 60 % under 25 (World Economic Forum).")
            ],[ CHIFFRES([["200 M","mobile players (2022)"],["90 %","of revenue from smartphones"],["> 60 %","under 25"],["2.5 bn","inhabitants expected in 2050"]]) ])
          ]),
          BANDE("III","Nigeria: mobile, local studios",[
            LIGNE([
              T("In Nigeria, the industry revolves around four major studios founded around 2012: Maliyo Games, ChopUp, Gamsole and Kuluya. All of them focus on mobile, in a country with 150 million mobile subscribers."),
              T("In 2011, Bayo Puddicombe turns the danfo, Lagos' iconic yellow bus, into a game: Danfo passes one million downloads. He then founds ChopUp with Zubair Abubakar. In 2016, the studio has 4 employees and releases a new game every 6 weeks.")
            ],[ ETAPES("ChopUp in a few dates",[["2011 · Danfo","Bayo Puddicombe creates the game Danfo: over one million downloads"],["2012 · ChopUp founded","Founded in Lagos with Zubair Abubakar, on the back of Danfo's success"],["2016 · Production pace","4 employees and a new game every 6 weeks"]]) ]),
            LIGNE([
              T("Its business model gets around low banking penetration: in Nigeria, more than half of adults have no bank account (Global Findex 2021). ChopUp therefore partners with mobile operators and gives access to its catalogue for a small weekly subscription, charged directly to the phone bill. Chicken Escape and Jagun: Clash of Kingdoms were downloaded 100,000 times within a few months.")
            ],[ IMG(NG.jagun,"Jagun: Clash of Kingdoms, ChopUp, 2017"), IMG(NG.chicken,"Chicken Escape, ChopUp, 2015") ]),
            LIGNE([
              T("These studios turn away from Western triple-A to speak to the local. For Matteo Maillard (Jeune Afrique, 2024), they have created an African exception against AAA games whose stories often revolve around “the American navel or European cultural codes”. Daily life becomes game material, like Lagos traffic jams in Okada Ride (Maliyo, 2012), and so do history and myths: Iwaju: Rising Chef (Maliyo, 2024), Aurion: Legacy of the Kori-Odan (Kiro'o Games, Cameroon)."),
              T("For lack of suitable universities, studios also provide training: Maliyo Games offers a free, 3-month online course (Game Art Academy).")
            ],[ IMG(NG.okada,"Okada Ride, Maliyo Games, 2012"), IMG(NG.iwaju,"Iwaju: Rising Chef, Maliyo Games, 2024"), IMG(NG.aurion,"Aurion: Legacy of the Kori-Odan, Kiro'o Games, 2016") ])
          ]),
          BANDE("IV","Esports and obstacles to growth",[
            LIGNE([
              T("Young people (70 % of Nigerians are under 30) also drive esports. According to PwC (via Agence Ecofin, November 2023), advertising revenue from video games and esports in Nigeria would rise from $111 m in 2022 to $472 m in 2027. Initiatives are multiplying: the African confederation CASE (founded in Dakar in 2023), AfriGamers tournaments and ABENA Tournaments, which highlights women players."),
              T("Cross-checking sources, I noticed an inconsistency: the same article announces 7.1 % growth a year, which would lead to about $156 m in 2027, not $472 m. More recent PwC editions also give lower figures. I therefore retain a trend, double-digit growth driven by the smartphone, rather than an amount.")
            ],[ TABLEAU("Video games and esports in Nigeria according to PwC, by edition",["Source","Period","Revenue"],[["Agence Ecofin, Nov. 2023","2022 → 2027","$111 → 472 m (advertising)"],["Nairametrics, Feb. 2025","2023 → 2024","$192 → 217 m"],["Nairametrics, Feb. 2025","2024 → 2028","$217 → 322 m (+10.9 % a year)"]],true) ]),
            LIGNE([
              T("Yet the model remains strongly limited. I identified five obstacles, from the most material to the most structural."),
              TABLEAU("Obstacles to the sector's development",["Obstacle","Finding"],[["Internet","Fragile network, dependent on a limited number of submarine cables (BBC News)."],["Electricity","12 national grid collapses in 2024. 82 % of African developers see electrification as essential (Hugo Obi's report)."],["Purchasing power","Few computers and powerful smartphones: free games, designed for casual players."],["Training","Few, if any, long training courses in video games."],["Funding","Revenue often tied to foreign donors. Observers quoted by Courrier International find these games “well-meaning”: a perception, not a measured finding."]],true)
            ])
          ]),
          BANDE("V","Conclusion and what I take away",[
            LIGNE([
              T("Africa is part of a growing market thanks to a young population, a fast-growing mobile market and booming esports. Its model, close to the Asian market in the place it gives to mobile, turns away from AAA in favour of everyday games and national history, but it remains strongly limited by infrastructure, purchasing power and funding."),
              T("What I take away for production. A market is first read through its constraints. ChopUp did not just choose mobile: it built its business model around low banking penetration and set its production pace according to its resources. For a producer, the lesson is that budget, schedule, platform and payment method are decided together, from the start. This study also taught me to tell an established figure from a projection before building a plan on it.")
            ],[ FICHE("What I take away",["Read a market through its constraints","Build the business model around access to payment","Set the production pace according to resources","Tell an established figure from a projection"]) ])
          ]),
          BANDE("VI","Sources",[ LIGNE([ SOURCES([["Agence Ecofin · Nigéria en 2027, les jeux vidéo généreront plus de revenus publicitaires que le streaming (PwC)", "https://www.agenceecofin.com/communication/1311-113619-nigeria-en-2027-les-jeux-video-genereront-plus-de-revenus-publicitaires-que-le-streaming-l-affichage-exterieur-et-la-presse-ecrite-pwc"], ["Afrik.com · Le gaming en Afrique, une révolution silencieuse", "https://www.afrik.com/le-gaming-en-afrique-une-revolution-silencieuse"], ["Jeune Afrique · L'Afrique, nouvel eldorado des jeux vidéo", "https://www.jeuneafrique.com/1526043/culture/lafrique-nouvel-eldorado-des-jeux-video/"], ["Sigma · Gaming in Nigeria is on the rise", "https://sigma.world/fr/news/gaming-in-nigeria-is-on-the-rise/"], ["Agence Ecofin · Le marché africain des jeux vidéo devrait croître de 11,62 % par an d'ici 2029", "https://www.agenceecofin.com/innovation/0810-122265-le-marche-africain-des-jeux-video-devrait-croitre-de-11-62-par-an-d-ici-2029-rapport"], ["Jeune Afrique · Le Nigeria part à la conquête du marché africain des jeux vidéo", "https://www.jeuneafrique.com/depeches/20777/politique/le-nigeria-part-a-la-conquete-du-marche-africain-des-jeux-video/"], ["Jeune Afrique · Les recettes du succès de ChopUp", "https://www.jeuneafrique.com/315910/economie-entreprises/reussite-les-recettes-du-succes-de-chopup-le-studio-de-jeux-videos-100-nigerian/"], ["Toonmed (blog) · Reportage : les recettes du succès de ChopUp", "https://toonmed.blogspot.com/2016/04/reportage-les-recettes-du-succes-de.html"], ["Agence Ecofin · Le Nigeria et l'Égypte, pays où la moitié des adultes sont non bancarisés", "https://www.agenceecofin.com/finance/0407-99376-le-nigeria-et-l-egypte-font-partie-des-7-pays-au-monde-dans-lesquels-la-moitie-des-adultes-sont-non-bancarises-rapport"], ["Banque de France · Afrique subsaharienne, la fracture financière entre hommes et femmes", "https://www.banque-france.fr/fr/publications-et-statistiques/publications/afrique-subsaharienne-la-fracture-financiere-entre-hommes-et-femmes"], ["Sport News Africa · Vers la naissance de la Confédération africaine du sport en ligne", "https://sportnewsafrica.com/articles/e-sport-vers-la-naissance-de-la-confederation-africaine-du-sport-en-ligne"], ["Mordor Intelligence · Marché mondial du jeu vidéo", "https://www.mordorintelligence.com/fr/industry-reports/global-gaming-market"], ["Courrier International · Comment le jeu vidéo se développe en Afrique", "https://www.courrierinternational.com/article/tendance-comment-le-jeu-video-se-developpe-en-afrique"], ["Africavox · L'Afrique, nouveau berceau de l'e-sport", "https://africavox.easybroadcast.fr/articles/l-afrique-nouveau-berceau-du-e-sports"], ["Afrikactus · L'essor du gaming africain sur la scène mondiale", "https://afrikactus.com/essor-du-gaming-africain-sur-la-scene-mondiale/"], ["ADF Magazine · Des start-ups nigérianes pénètrent le marché des jeux vidéo", "https://adf-magazine.com/fr/2014/10/des-start-ups-nigerianes-penetrent-le-marche-des-jeux-video/"], ["Smart Africa", "https://smartafrica.org/fr/page-daccueil/"], ["AfriGamers", "https://afrigamers.com/a-propos-afrigamers/"], ["Tribune Online · 12 times national grid collapsed in 2024", "https://tribuneonlineng.com/updated-12-times-national-grid-collapsed-in-2024/"], ["Nairametrics · PwC lists 10 fastest-growing entertainment and media sectors in Nigeria 2024-2028", "https://nairametrics.com/2025/02/09/pwc-lists-10-fastest-growing-entertainment-and-media-sectors-in-nigeria-2024-2028/"],["World Economic Forum · How will Africa's youth population drive global growth?", "https://www.weforum.org/stories/youth/africa-youth-global-growth-digital-economy/"],["ONU · Youth population trends (fact sheet)", "https://www.un.org/esa/socdev/documents/youth/fact-sheets/YouthPOP.pdf"],["Afrik.com · L'Afrique, avenir du gaming mondial ?", "https://www.afrik.com/l-afrique-avenir-du-gaming-mondial"],["Le360 · À Kigali, l'Afrique se cherche un modèle économique pour l'e-sport", "https://afrique.le360.ma/sports/des-millions-de-gamers-a-la-manette-a-kigali-lafrique-se-cherche-un-modele-economique-pour-le-sport_OLMQPD7RONHW3MNIOV3TPTZBWI/"],["AFJV · Abena Tournaments", "https://afjv.com/news/11374_abena-tournaments-tournoi-feminin-afrocaribeen-tekken8.htm"],["Linda Ikeji · Mobo Game Jam (Edu360 et Kucheza Gaming)", "https://www.lindaikejisblog.com/2020/12/mobo-game-jam-edu360-kucheza-drive-social-impact-through-gaming.html"],["Maliyo Games · Programmes de formation", "https://www.maliyo.com/programme/"],["Stuff South Africa · GameOn with HP, hackathon", "https://stuff.co.za/2024/10/11/get-your-gameon-with-hps-new-hackathon/"],["HP Gaming Garage", "https://www.hpgaminggarage.com/"],["Game Camp Cities · La CASE signe avec HP", "https://www.gamecampcities.pro/post/la-conf%C3%A9d%C3%A9ration-esport-africaine-signe-son-premier-partenaire-strat%C3%A9gique-continental-le-groupe-h?lang=fr"],["Pulse Nigeria · TCN restores power in Kaduna, Kano, Bauchi and Gombe", "https://www.pulse.ng/articles/news/local/tcn-restores-power-in-kaduna-kano-bauchi-and-gombe-after-prolonged-blackout-2024111910462282759"]]) ]) ])
        ] })
  ]
};
/* Identifiants créés automatiquement à partir des titres */
Object.entries(PROJECTS_FR).forEach(([key,list])=>{const seen={};list.forEach(p=>{
  let b=p.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"projet";
  seen[b]=(seen[b]||0)+1;p.id=seen[b]>1?b+"-"+seen[b]:b;p.key=key;});});
Object.entries(PROJECTS_EN).forEach(([key,list])=>list.forEach((p,i)=>{p.id=PROJECTS_FR[key][i].id;p.key=key;}));
let PROJECTS = PROJECTS_FR;

const SECTIONS_FR = [
  {key:"pro",  label:"Projets Professionnels", route:"#/pro",  intro:"Les productions que j'ai menées comme producer à Game Sup : workshops et projets de fin d'année."},
  {key:"perso",label:"Projets Personnels",     route:"#/perso",intro:"Les projets menés en dehors du cadre professionnel."},
  {key:"exo",  label:"Exercices",              route:"#/exo",  intro:"Mes exercices de production, de game design et d'analyse de marché."}
];
const SECTIONS_EN = [
  {key:"pro",  label:"Professional Projects", route:"#/pro",  intro:"The productions I led as a producer at Game Sup: workshops and end-of-year projects."},
  {key:"perso",label:"Personal Projects",     route:"#/perso",intro:"Projects carried out outside a professional setting."},
  {key:"exo",  label:"Exercises",             route:"#/exo",  intro:"My production, game design and market-analysis exercises."}
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
    { icone:"planning", titre:"Production", items:["Production Agile et Scrum","Planification des milestones et des sprints","Coordination de plusieurs équipes","Suivi de production et listes de tâches","Budget et prévisions"] },
    { icone:"design", titre:"Game Design", items:["Game Design Document","Boucle de gameplay et systèmes","Théories du joueur et personas"] },
    { icone:"narration", titre:"Narrative Design", items:["Worldbuilding","Écriture de personnages","Quest Design","Lien entre mécaniques et récit"] },
    { icone:"analyse", titre:"Analyse", items:["Market Analysis et estimation des ventes","Seuil de rentabilité et ROI","Recherche documentaire et critique des sources"] },
    { icone:"equipe", titre:"Communication et encadrement", items:["Communication intra et inter-équipes","Gestion d\'événements","Transmission des savoirs et accompagnement","Adaptation du discours aux interlocuteurs"] }
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
    { icone:"langues", titre:"Langues", items:["Français : langue maternelle","Anglais : courant","Espagnol : notions","Grec moderne : en apprentissage"] },
    { icone:"diplome", titre:"Diplômes et certifications", items:["Certification Conception et Game Design, Game Sup (2023‑2027)","Certificat Agile with Atlassian Jira, Atlassian via Coursera (2026)","Master d'anthropologie religieuse de la Méditerranée antique, École Pratique des Hautes Études (2018‑2020)"] }
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
    { icone:"diplome", titre:"Degrees and certificates", items:["Certification in Conception and Game Design, Game Sup (2023‑2027)","Agile with Atlassian Jira certificate, Atlassian via Coursera (2026)","Master's in Religious Anthropology of the Ancient Mediterranean, École Pratique des Hautes Études (2018‑2020)"] }
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
const LEGAL_UPDATED = { fr: "10 octobre 2026", en: "10 October 2026" };
const LEGAL_FR = [
  ["Éditeur du site", [
    "Ce site est le portfolio personnel de **Thibault Merle**, édité à titre non professionnel et sans activité commerciale.",
    "Contact : [merle.thibault@orange.fr](mailto:merle.thibault@orange.fr)",
    "Directeur de la publication : Thibault Merle."
  ]],
  ["Hébergeur", [
    "**GitHub, Inc.** (service GitHub Pages)",
    "88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis",
    "Téléphone : +1 877 448 4820 – Site : [github.com](https://github.com)"
  ]],
  ["Propriété intellectuelle", [
    "Les textes, la mise en page et les visuels créés pour ce site sont la propriété de Thibault Merle. Toute reproduction sans autorisation est interdite.",
    "Les visuels issus de projets d'équipe, de studios ou d'écoles (dont Game Sup) restent la propriété de leurs ayants droit respectifs et sont présentés à titre de démonstration professionnelle. Les marques et jeux cités appartiennent à leurs propriétaires.",
    "Si vous êtes titulaire de droits sur un contenu et souhaitez son retrait, écrivez-moi : il sera retiré rapidement.",
    "Les noms, rôles et liens LinkedIn des membres des équipes sont publiés pour créditer leur travail. Toute personne citée peut demander la modification ou le retrait de ses informations en m'écrivant."
  ]],
  ["Données personnelles et cookies", [
    "Ce site ne comporte ni formulaire, ni compte, ni outil de mesure d'audience, ni publicité. Il ne dépose aucun cookie.",
    "Vos choix de langue (FR / EN) et d'affichage (mode clair ou mode nuit) sont seulement enregistrés dans votre navigateur, sur votre appareil. Ils ne sont transmis à personne.",
    "**Hébergement :** comme tout hébergeur, GitHub enregistre des données techniques de connexion (dont l'adresse IP) pour la sécurité du service. Voir la [déclaration de confidentialité de GitHub](https://docs.github.com/fr/site-policy/privacy-policies/github-general-privacy-statement).",
    "**Polices de caractères :** la police Inter est chargée depuis Google Fonts, ce qui transmet votre adresse IP à Google. Voir les [règles de confidentialité de Google](https://policies.google.com/privacy). La police des titres, Bricolage Grotesque, est hébergée sur ce site.",
    "**Contact par e-mail :** si vous m'écrivez, votre message sert uniquement à vous répondre et n'est pas partagé.",
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
    "Phone: +1 877 448 4820 – Website: [github.com](https://github.com)"
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
    "**Fonts:** the Inter font is loaded from Google Fonts, which sends your IP address to Google. See [Google's privacy policy](https://policies.google.com/privacy). The heading font, Bricolage Grotesque, is hosted on this site.",
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
