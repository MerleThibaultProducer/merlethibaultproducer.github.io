/* =====================================================
   ✏️  CONTENU DU SITE – c'est le seul fichier à modifier
   Textes (FR et EN), projets, CV et mentions légales.
   Les images se trouvent dans le dossier images/ :
   pour en changer une, remplacez le fichier ou modifiez son chemin ici.
   ===================================================== */
const SITE_FR = {
  prenom: "Thibault", nom: "Merle",
  titre: "Junior Associate Producer",
  devise: "",   // phrase courte sous le titre de l'accueil (vide = masquée)
  photo: "images/portrait.jpg",   // fichier dans le dossier images/. Vide = initiales.
  intro: [
    "Je suis Thibault, Junior Associate Producer dans le jeu vidéo, en dernière année à Game Sup. Sur quatre productions d'école, j'ai eu l'occasion de planifier et de suivre des projets avec jusqu'à quatre équipes en simultané, des premiers jalons jusqu'aux playtests. J'écoute chacun, j'adapte les méthodes de production à chaque équipe et je m'assure que la communication est claire pour que tout le monde avance ensemble. Un master d'anthropologie et cinq ans d'enseignement m'ont appris à expliquer et à transmettre. Je recherche aujourd'hui un stage de fin d'études en production à partir de janvier 2027, partout en France ou en télétravail."
  ],
  email: "merle.thibault@orange.fr", ville: "",
  linkedin: "https://www.linkedin.com/in/thibault-merle-946187311",
  legal: [
    "© 2026 Thibault Merle – Tous droits réservés.",
    "Site hébergé par GitHub Pages (GitHub, Inc.)."
  ]
};
const SITE_EN = {...SITE_FR,
  intro: [
    "I'm Thibault, a Junior Associate Producer in video games, in my final year at Game Sup. Across four school productions, I have planned and followed projects with up to four teams in parallel, from the first milestones to the playtests. I listen to everyone, adapt production methods to each team, and make sure communication stays clear so everyone moves forward together. A master's in anthropology and five years of teaching taught me to explain and pass on knowledge. I am now looking for an end-of-studies production internship starting in January 2027, anywhere in France or remote."
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
            ],[ IMG(PRO1.macro,"Macro-planning propre à l'Excel de chaque groupe : sprints et milestones (Proof of Concept, Alpha, Bêta)") ]),
            LIGNE([
              T("Tenir près de 1 400 statuts à jour demandait une attention de tous les instants, mais c'est ce qui rendait les retards et les kills visibles, sprint par sprint. Ce qui m'a manqué, ce sont des livrables de fin de sprint plus précis pour chaque spécialité : l'avancée était parfois difficile à vérifier concrètement. C'est la première chose que je changerais.")
            ],[ IMG(PRO1.micro,"Extrait du micro-planning d'un des groupes : tâches, sprints, priorités, difficultés et statuts") ])
          ]),
          BANDE("IV","Gérer la crise de direction artistique",[
            LIGNE([
              T("En deuxième semaine, un même problème est apparu dans les quatre groupes : la direction artistique était confuse, et les membres peinaient à se représenter les références. Les retards ont vite atteint deux à trois jours, et je sentais venir le risque de crunch."),
              T("Plutôt que de laisser chaque équipe s'enliser, nous avons organisé des réunions d'urgence avec chaque groupe et suspendu la production pendant une journée et demie. Ce temps de réflexion nous a permis de comprendre d'où venait le problème : des références trop vastes et peu précises, et une passe de recherche trop courte au démarrage, parce que nous pensions que celle de la sélection suffirait.")
            ],[ SCHEMA("planning","Calendrier de la production : sprints, jalons, crise de mi-parcours et playtests") ]),
            LIGNE([
              T("Chaque groupe vivait la crise à sa manière, il n'y avait donc pas de réponse unique. Pour l'un, j'ai tranché, en accord avec les référents des disciplines, sur le kill de plusieurs assets qui sortaient du cadre ou n'étaient plus prioritaires. Pour un autre, nous avons revu le Level Art et le shader atmosphérique."),
              T("Si c'était à refaire, je ferais créer dès le départ une petite scène de référence dans le moteur, avec un prop à la qualité visée, les textures souhaitées et les intentions de lumière et de caméra.")
            ],[ IMG(PRO1.kill,"Tâches supprimées (kills) dans le suivi de l'un des groupes") ])
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
    P({ title:"Projet Jira et Agile", wip:true, desc:"Un projet personnel pour approfondir Jira et la gestion de projet Agile.", img:"",
        infos:{ "Rôle":"Producer", "Outils":"Jira · Agile" },
        contenu:[ T("Projet en cours.") ] })
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
              T("L'exercice demandait un dossier de gestion de production complet : l'équipe à constituer, un macro-planning et un micro-planning sur Coda et ClickUp, un budget de développement sur Excel et une estimation des ventes. J'ai choisi un projet AA comparable à Greedfall, Wyrdfall, porté par 30 à 50 personnes au pic de la production."),
              T("Seule cette partie, environ 20 heures de travail, est présentée ici. Le High Concept document et le prototype ont été réalisés pendant le reste de l'épreuve.")
            ],[ FICHE("Livrables présentés ici · 20 h",["Équipe à constituer","Macro-planning et micro-planning (Coda, ClickUp)","Budget de développement (Excel)","Estimation des ventes (Market Analysis)"]) ])
          ]),
          BANDE("II","Ce que j'ai produit",[
            LIGNE([
              T("Le cœur du dossier est un fichier Excel pensé pour la clarté : des onglets regroupés par couleur, des boutons et une barre de navigation pour trouver chaque information rapidement. Le budget se met à jour en un clic à l'arrivée d'un nouveau membre, à un changement d'ancienneté ou à l'attribution d'un logiciel. Il s'élève à **9 033 682 €** sur 48 mois (36 de production, 12 de live service), pour une équipe de 42 personnes, dont 78 % de salaires."),
              T("Pour le planning, j'ai découpé les quatre années en Epics, jusqu'à la sortie du DLC, puis détaillé un sprint de préproduction destiné à préparer la Vertical Slice.")
            ],[ CAROUSEL([[EX1.nav,"Page d'accueil du fichier de production : boutons et navigation par onglets colorés"],[EX1.budget,"Vue d'ensemble du budget : équipe, durée et budget par département"],[EX1.epic,"Macro-planning : les Epics de la production"],[EX1.sprint,"Sprint de préproduction : tâches, priorités et points de sprint"]]) ]),
            LIGNE([
              T("Pour estimer les ventes, j'ai analysé des jeux concurrents sortis sur Steam afin d'en tirer des moyennes, puis construit deux scénarios, conservateur et optimiste, chacun décliné en trois niveaux de risque. Avec un calcul volontairement prudent, une vente à 49,99 € rapporte environ 20 € : le budget est couvert à partir d'environ **451 000 ventes**. Dans le scénario conservateur moyen, le projet dégage 616 438 €, soit un ROI d'environ + 6,8 %.")
            ],[ TABLEAU("Bénéfice net et ROI selon les scénarios · Budget total : 9 033 682 €",["Scénario","Ventes estimées","Bénéfice net (ROI)"],["Conservateur : 250 000 followers", ["Haut", "626 600", "+ 4 639 128 € (+ 51,4 %)"], ["Moyen", "482 000", "+ 616 438 € (+ 6,8 %)"], ["Bas", "115 680", "− 6 873 790 € (− 76,1 %)"], "Optimiste : moyenne des ventes du Market Analysis", ["Haut", "959 400", "+ 11 901 031 € (+ 131,7 %)"], ["Moyen", "738 000", "+ 5 741 809 € (+ 63,6 %)"], ["Bas", "177 120", "− 5 726 628 € (− 63,4 %)"]]) ])
          ]),
          BANDE("III","Ce que j'en retiens",[
            LIGNE([
              T("Planifier une production de quatre ans m'a obligé à sortir de la logique de nos workshops de trois semaines, pour raisonner sur ce qui fait passer d'une étape à la suivante. Avec du recul, j'ai sous-estimé deux équipes, la QA et le Sound Design, et le dossier gagnerait à étudier les financements accessibles à un studio de cette taille.")
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
          BANDE("I","Le sujet et mon rôle",[
            LIGNE([
              T("L'exercice demandait de concevoir un jeu à partir d'une créature mythique d'un pays imposé : la Grèce m'a été attribuée. J'ai choisi les naïades, divinités des eaux. Le joueur incarne Castalie, gardienne de la fontaine de Delphes, qui parcourt la Grèce pour sauver les dieux et combattre les armées de Typhon."),
              T("Castalie's Tears est un RPG au tour par tour en solo, pour PC et Nintendo Switch, au modèle premium : Dragon Quest XI rencontre Dragon Age : Inquisition dans un univers proche d'Immortals Fenyx Rising. J'en ai écrit le Game Design Document, 67 pages en 90 heures.")
            ],[ CAROUSEL([[CT.one,"Le one-liner et ses trois références"],[CT.info,"La fiche d'information du projet"]]) ])
          ]),
          BANDE("II","Ce que j'ai produit",[
            LIGNE([
              T("Le GDD part de trois piliers : combattre les marées de Typhon, explorer un monde désolé et faire grandir sa Source. Ils structurent une boucle de jeu (gérer, explorer, combattre, acquérir, fabriquer) dont j'ai vérifié qu'elle se nourrit autant qu'elle consomme. J'ai aussi listé ce que le jeu ne sera pas, pour garder le périmètre sous contrôle."),
              T("Chaque mécanique a ensuite son incarnation dans le récit : on ne gère pas un menu, on protège une fontaine sacrée ; on ne débloque pas une compétence, on hérite du pouvoir d'un dieu déchu. Le premier niveau, les ruines du temple d'Apollon, est pensé comme un chemin dans la mémoire de Castalie, avec une intensité qui monte par paliers jusqu'au boss.")
            ],[ CAROUSEL([[CT.pillars,"Les trois piliers de gameplay"],[CT.loop,"La boucle de gameplay de Castalie's Tears"],[CT.ld,"Plan du niveau du Temple d'Apollon (layout)"],[CT.pacing,"Courbe d'intensité du niveau"]]) ])
          ]),
          BANDE("III","Ce que j'en retiens",[
            LIGNE([
              T("Un GDD ne se limite pas à lister des features : il doit relier les intentions aux mécaniques, et les mécaniques à ce que le joueur ressent. C'est cette chaîne que j'ai cherché à rendre lisible, du pilier jusqu'au niveau."),
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
          BANDE("I","Le sujet et mon angle",[
            LIGNE([
              T("L'exercice demandait d'analyser le marché du jeu vidéo en Afrique. Ma problématique : voit-on émerger un modèle africain, et en quoi s'affranchit-il du modèle occidental ? J'y ai répondu à travers le cas du Nigéria, dans une présentation de 30 diapositives."),
              T("En tant que producer, j'ai lu ce marché à travers ses contraintes : réseau, électricité, pouvoir d'achat, accès au paiement. Ce sont elles qui expliquent les choix des studios, de la plateforme au modèle économique.")
            ],[ SCHEMA("marche","Le marché africain du jeu vidéo, 2024-2029 (Mordor Intelligence), comparé au marché mondial") ])
          ]),
          BANDE("II","Ce que l'étude montre",[
            LIGNE([
              T("Le marché africain est jeune, mobile et porté par la démographie : 200 millions de joueurs sur téléphone en 2022, environ 90 % des revenus passant par le smartphone, et plus de 60 % de la population âgée de moins de 25 ans. Il pèse pourtant **moins de 1 %** du marché mondial.")
            ],[ CHIFFRES([["200 M","joueurs sur mobile (2022)"],["90 %","des revenus via smartphone"],["> 60 %","de moins de 25 ans"],["< 1 %","du marché mondial"]]) ]),
            LIGNE([
              T("Au Nigéria, les studios en ont tiré un modèle propre. ChopUp contourne la faible bancarisation, plus de la moitié des adultes n'ayant pas de compte bancaire, en proposant son catalogue contre un petit abonnement prélevé sur la facture de téléphone. Ces studios se détournent aussi des AAA occidentaux pour parler au local : les embouteillages de Lagos dans Okada Ride, l'histoire et les mythes dans Iwaju : Rising Chef."),
              T("Ce modèle reste freiné par les infrastructures (réseau fragile, 12 effondrements du réseau électrique en 2024), le pouvoir d'achat, le manque de formations et la dépendance aux financements étrangers.")
            ],[ CAROUSEL([[NG.jagun,"Jagun : Clash of Kingdoms, ChopUp, 2017"],[NG.okada,"Okada Ride, Maliyo Games, 2012"],[NG.iwaju,"Iwaju : Rising Chef, Maliyo Games, 2024"]]) ])
          ]),
          BANDE("III","Ce que j'en retiens",[
            LIGNE([
              T("Un marché se lit d'abord par ses contraintes. ChopUp n'a pas seulement choisi le mobile : le studio a construit son modèle économique autour de l'accès au paiement et calé son rythme de production sur ses ressources. Pour un producer, la leçon est que le budget, le calendrier, la plateforme et le mode de paiement se décident ensemble, dès la conception."),
              T("En recoupant les sources, j'ai aussi relevé des chiffres incohérents entre deux éditions d'une même étude PwC. J'ai appris à distinguer un chiffre établi d'une projection avant de bâtir un plan dessus.")
            ],[ FICHE("Ce que je retiens",["Lire un marché par ses contraintes","Construire le modèle économique autour de l'accès au paiement","Caler le rythme de production sur les ressources","Distinguer un chiffre établi d'une projection"]) ])
          ]),
          BANDE("IV","Sources",[ LIGNE([ SOURCES([["Agence Ecofin · Nigéria en 2027, les jeux vidéo généreront plus de revenus publicitaires que le streaming (PwC)", "https://www.agenceecofin.com/communication/1311-113619-nigeria-en-2027-les-jeux-video-genereront-plus-de-revenus-publicitaires-que-le-streaming-l-affichage-exterieur-et-la-presse-ecrite-pwc"], ["Afrik.com · Le gaming en Afrique, une révolution silencieuse", "https://www.afrik.com/le-gaming-en-afrique-une-revolution-silencieuse"], ["Jeune Afrique · L'Afrique, nouvel eldorado des jeux vidéo", "https://www.jeuneafrique.com/1526043/culture/lafrique-nouvel-eldorado-des-jeux-video/"], ["Sigma · Gaming in Nigeria is on the rise", "https://sigma.world/fr/news/gaming-in-nigeria-is-on-the-rise/"], ["Agence Ecofin · Le marché africain des jeux vidéo devrait croître de 11,62 % par an d'ici 2029", "https://www.agenceecofin.com/innovation/0810-122265-le-marche-africain-des-jeux-video-devrait-croitre-de-11-62-par-an-d-ici-2029-rapport"], ["Jeune Afrique · Le Nigeria part à la conquête du marché africain des jeux vidéo", "https://www.jeuneafrique.com/depeches/20777/politique/le-nigeria-part-a-la-conquete-du-marche-africain-des-jeux-video/"], ["Jeune Afrique · Les recettes du succès de ChopUp", "https://www.jeuneafrique.com/315910/economie-entreprises/reussite-les-recettes-du-succes-de-chopup-le-studio-de-jeux-videos-100-nigerian/"], ["Toonmed (blog) · Reportage : les recettes du succès de ChopUp", "https://toonmed.blogspot.com/2016/04/reportage-les-recettes-du-succes-de.html"], ["Agence Ecofin · Le Nigeria et l'Égypte, pays où la moitié des adultes sont non bancarisés", "https://www.agenceecofin.com/finance/0407-99376-le-nigeria-et-l-egypte-font-partie-des-7-pays-au-monde-dans-lesquels-la-moitie-des-adultes-sont-non-bancarises-rapport"], ["Banque de France · Afrique subsaharienne, la fracture financière entre hommes et femmes", "https://www.banque-france.fr/fr/publications-et-statistiques/publications/afrique-subsaharienne-la-fracture-financiere-entre-hommes-et-femmes"], ["Sport News Africa · Vers la naissance de la Confédération africaine du sport en ligne", "https://sportnewsafrica.com/articles/e-sport-vers-la-naissance-de-la-confederation-africaine-du-sport-en-ligne"], ["Mordor Intelligence · Marché mondial du jeu vidéo", "https://www.mordorintelligence.com/fr/industry-reports/global-gaming-market"], ["Courrier International · Comment le jeu vidéo se développe en Afrique", "https://www.courrierinternational.com/article/tendance-comment-le-jeu-video-se-developpe-en-afrique"], ["Africavox · L'Afrique, nouveau berceau de l'e-sport", "https://africavox.easybroadcast.fr/articles/l-afrique-nouveau-berceau-du-e-sports"], ["Afrikactus · L'essor du gaming africain sur la scène mondiale", "https://afrikactus.com/essor-du-gaming-africain-sur-la-scene-mondiale/"], ["ADF Magazine · Des start-ups nigérianes pénètrent le marché des jeux vidéo", "https://adf-magazine.com/fr/2014/10/des-start-ups-nigerianes-penetrent-le-marche-des-jeux-video/"], ["Smart Africa", "https://smartafrica.org/fr/page-daccueil/"], ["AfriGamers", "https://afrigamers.com/a-propos-afrigamers/"], ["Tribune Online · 12 times national grid collapsed in 2024", "https://tribuneonlineng.com/updated-12-times-national-grid-collapsed-in-2024/"], ["Nairametrics · PwC lists 10 fastest-growing entertainment and media sectors in Nigeria 2024-2028", "https://nairametrics.com/2025/02/09/pwc-lists-10-fastest-growing-entertainment-and-media-sectors-in-nigeria-2024-2028/"],["World Economic Forum · How will Africa's youth population drive global growth?", "https://www.weforum.org/stories/youth/africa-youth-global-growth-digital-economy/"],["ONU · Youth population trends (fact sheet)", "https://www.un.org/esa/socdev/documents/youth/fact-sheets/YouthPOP.pdf"],["Afrik.com · L'Afrique, avenir du gaming mondial ?", "https://www.afrik.com/l-afrique-avenir-du-gaming-mondial"],["Le360 · À Kigali, l'Afrique se cherche un modèle économique pour l'e-sport", "https://afrique.le360.ma/sports/des-millions-de-gamers-a-la-manette-a-kigali-lafrique-se-cherche-un-modele-economique-pour-le-sport_OLMQPD7RONHW3MNIOV3TPTZBWI/"],["AFJV · Abena Tournaments", "https://afjv.com/news/11374_abena-tournaments-tournoi-feminin-afrocaribeen-tekken8.htm"],["Linda Ikeji · Mobo Game Jam (Edu360 et Kucheza Gaming)", "https://www.lindaikejisblog.com/2020/12/mobo-game-jam-edu360-kucheza-drive-social-impact-through-gaming.html"],["Maliyo Games · Programmes de formation", "https://www.maliyo.com/programme/"],["Stuff South Africa · GameOn with HP, hackathon", "https://stuff.co.za/2024/10/11/get-your-gameon-with-hps-new-hackathon/"],["HP Gaming Garage", "https://www.hpgaminggarage.com/"],["Game Camp Cities · La CASE signe avec HP", "https://www.gamecampcities.pro/post/la-conf%C3%A9d%C3%A9ration-esport-africaine-signe-son-premier-partenaire-strat%C3%A9gique-continental-le-groupe-h?lang=fr"],["Pulse Nigeria · TCN restores power in Kaduna, Kano, Bauchi and Gombe", "https://www.pulse.ng/articles/news/local/tcn-restores-power-in-kaduna-kano-bauchi-and-gombe-after-prolonged-blackout-2024111910462282759"]]) ]) ])
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
            ],[ IMG(PRO1.macro,"Each group's own Excel macro-planning: sprints and milestones (Proof of Concept, Alpha, Beta)") ]),
            LIGNE([
              T("Keeping nearly 1,400 statuses up to date took constant attention, but it is what made delays and kills visible, sprint by sprint. What I lacked were more precise end-of-sprint deliverables for each discipline: progress was sometimes hard to check concretely. That is the first thing I would change.")
            ],[ IMG(PRO1.micro,"Excerpt from one group's micro-planning: tasks, sprints, priorities, difficulties and statuses") ])
          ]),
          BANDE("IV","Handling the art direction crisis",[
            LIGNE([
              T("In the second week, the same problem appeared in all four groups: art direction was unclear, and team members struggled to picture the references. Delays quickly reached two to three days, and I could feel the risk of crunch coming."),
              T("Rather than let each team get bogged down, we held emergency meetings with each group and paused production for a day and a half. That time to step back helped us understand where the problem came from: references that were too broad and imprecise, and a research pass that was too short at the start, because we thought the selection-phase research would be enough.")
            ],[ SCHEMA("planning","Production calendar: sprints, milestones, mid-course crisis and playtests") ]),
            LIGNE([
              T("Each group experienced the crisis in its own way, so there was no single answer. For one, I decided, in agreement with the discipline leads, to kill several assets that were off-brief or no longer a priority. For another, we reworked the Level Art and the atmospheric shader."),
              T("If I had to do it again, I would have a small reference scene built in the engine from the start, with a prop at the target quality, the desired textures and the lighting and camera intentions.")
            ],[ IMG(PRO1.kill,"Removed tasks (kills) in one group's tracking") ])
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
    P({ title:"Jira and Agile Project", wip:true, desc:"A personal project to deepen my use of Jira and Agile project management.", img:"",
        infos:{ "Role":"Producer", "Tools":"Jira · Agile" },
        contenu:[ T("Project in progress.") ] })
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
              T("The exercise required a complete production management dossier: the team to assemble, a macro-planning and a micro-planning in Coda and ClickUp, a development budget in Excel and a sales estimate. I chose an AA project comparable to Greedfall, Wyrdfall, carried by 30 to 50 people at peak production."),
              T("Only this part, about 20 hours of work, is shown here. The High Concept document and the prototype were produced during the rest of the assignment.")
            ],[ FICHE("Deliverables shown here · 20 h",["Team to assemble","Macro-planning and micro-planning (Coda, ClickUp)","Development budget (Excel)","Sales estimate (Market Analysis)"]) ])
          ]),
          BANDE("II","What I produced",[
            LIGNE([
              T("The core of the dossier is an Excel file built for clarity: tabs grouped by colour, buttons and a navigation bar so every piece of information can be found quickly. The budget updates in one click when a new member joins, when seniority changes or when software is assigned. It comes to **€9,033,682** over 48 months (36 of production, 12 of live service), for a team of 42 people, 78% of it in salaries."),
              T("For the schedule, I broke the four years down into Epics, up to the DLC release, then detailed a pre-production sprint aimed at preparing the Vertical Slice.")
            ],[ CAROUSEL([[EX1.nav,"Home page of the production file: buttons and navigation through colour-coded tabs"],[EX1.budget,"Budget overview: team, duration and budget by department"],[EX1.epic,"Macro-planning: the production's Epics"],[EX1.sprint,"Pre-production sprint: tasks, priorities and sprint points"]]) ]),
            LIGNE([
              T("To estimate sales, I analysed competing games released on Steam to extract averages, then built two scenarios, conservative and optimistic, each broken down into three risk levels. With a deliberately cautious calculation, a sale at €49.99 brings in about €20: the budget is covered from about **451,000 sales**. In the average conservative scenario, the project makes €616,438, an ROI of about +6.8%.")
            ],[ TABLEAU("Net profit and ROI by scenario · Total budget: €9,033,682",["Scenario","Estimated sales","Net profit (ROI)"],["Conservative: 250,000 followers", ["High", "626,600", "+ €4,639,128 (+ 51.4%)"], ["Average", "482,000", "+ €616,438 (+ 6.8%)"], ["Low", "115,680", "− €6,873,790 (− 76.1%)"], "Optimistic: average sales from the Market Analysis", ["High", "959,400", "+ €11,901,031 (+ 131.7%)"], ["Average", "738,000", "+ €5,741,809 (+ 63.6%)"], ["Low", "177,120", "− €5,726,628 (− 63.4%)"]]) ])
          ]),
          BANDE("III","What I take away",[
            LIGNE([
              T("Planning a four-year production forced me out of the logic of our three-week workshops, to reason about what leads from one stage to the next. In hindsight, I underestimated two teams, QA and Sound Design, and the dossier would benefit from studying the funding available to a studio of this size.")
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
          BANDE("I","The brief and my role",[
            LIGNE([
              T("The exercise was to design a game based on a mythical creature from an assigned country, and I was given Greece. I chose the Naiads, goddesses of the waters. The player embodies Castalie, guardian of the Delphi spring, who travels through Greece to save the gods and fight Typhon's armies."),
              T("Castalie's Tears is a single-player turn-based RPG for PC and Nintendo Switch, with a premium model: Dragon Quest XI meets Dragon Age: Inquisition in a universe close to Immortals Fenyx Rising. I wrote its Game Design Document, 67 pages in 90 hours.")
            ],[ CAROUSEL([[CT.one,"The one-liner and its three references"],[CT.info,"The project information sheet"]]) ])
          ]),
          BANDE("II","What I produced",[
            LIGNE([
              T("The GDD starts from three pillars: fight Typhon's tides, explore a desolate world and grow your Source. They shape a core loop (manage, explore, fight, acquire, craft) that I checked feeds itself as much as it consumes. I also listed what the game will not be, to keep the scope under control."),
              T("Each mechanic is then embodied in the story: you don't manage a menu, you protect a sacred fountain; you don't unlock a skill, you inherit the power of a fallen god. The first level, the ruins of the temple of Apollo, is designed as a walk through Castalie's memory, with intensity rising in steps up to the boss.")
            ],[ CAROUSEL([[CT.pillars,"The three gameplay pillars"],[CT.loop,"The core loop of Castalie's Tears"],[CT.ld,"Layout of the Temple of Apollo level"],[CT.pacing,"Level intensity curve"]]) ])
          ]),
          BANDE("III","What I take away",[
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
          BANDE("I","The brief and my approach",[
            LIGNE([
              T("The exercise was to analyse the video game market in Africa. My research question: can we see an African model emerging, and how does it break away from the Western one? I answered it through the case of Nigeria, in a 30-slide presentation."),
              T("As a producer, I read this market through its constraints: network, electricity, purchasing power, access to payment. They are what explain the studios' choices, from platform to business model.")
            ],[ SCHEMA("marche","The African video game market, 2024-2029 (Mordor Intelligence), compared with the world market") ])
          ]),
          BANDE("II","What the study shows",[
            LIGNE([
              T("The African market is young, mobile and driven by demographics: 200 million players on phones in 2022, about 90% of revenue coming through smartphones, and over 60% of the population under 25. Yet it accounts for **less than 1%** of the world market.")
            ],[ CHIFFRES([["200 M","mobile players (2022)"],["90 %","of revenue from smartphones"],["> 60 %","under 25"],["< 1 %","of the world market"]]) ]),
            LIGNE([
              T("In Nigeria, studios have built their own model. ChopUp gets around low banking penetration, with more than half of adults lacking a bank account, by offering its catalogue for a small subscription charged to the phone bill. These studios also turn away from Western AAA to speak to the local: Lagos traffic jams in Okada Ride, history and myths in Iwaju: Rising Chef."),
              T("This model is still held back by infrastructure (a fragile network, 12 national grid collapses in 2024), purchasing power, a lack of training and dependence on foreign funding.")
            ],[ CAROUSEL([[NG.jagun,"Jagun: Clash of Kingdoms, ChopUp, 2017"],[NG.okada,"Okada Ride, Maliyo Games, 2012"],[NG.iwaju,"Iwaju: Rising Chef, Maliyo Games, 2024"]]) ])
          ]),
          BANDE("III","What I take away",[
            LIGNE([
              T("A market is first read through its constraints. ChopUp did not just choose mobile: it built its business model around access to payment and set its production pace according to its resources. For a producer, the lesson is that budget, schedule, platform and payment method are decided together, from the start."),
              T("Cross-checking sources, I also found inconsistent figures between two editions of the same PwC study. I learned to tell an established figure from a projection before building a plan on it.")
            ],[ FICHE("What I take away",["Read a market through its constraints","Build the business model around access to payment","Set the production pace according to resources","Tell an established figure from a projection"]) ])
          ]),
          BANDE("IV","Sources",[ LIGNE([ SOURCES([["Agence Ecofin · Nigéria en 2027, les jeux vidéo généreront plus de revenus publicitaires que le streaming (PwC)", "https://www.agenceecofin.com/communication/1311-113619-nigeria-en-2027-les-jeux-video-genereront-plus-de-revenus-publicitaires-que-le-streaming-l-affichage-exterieur-et-la-presse-ecrite-pwc"], ["Afrik.com · Le gaming en Afrique, une révolution silencieuse", "https://www.afrik.com/le-gaming-en-afrique-une-revolution-silencieuse"], ["Jeune Afrique · L'Afrique, nouvel eldorado des jeux vidéo", "https://www.jeuneafrique.com/1526043/culture/lafrique-nouvel-eldorado-des-jeux-video/"], ["Sigma · Gaming in Nigeria is on the rise", "https://sigma.world/fr/news/gaming-in-nigeria-is-on-the-rise/"], ["Agence Ecofin · Le marché africain des jeux vidéo devrait croître de 11,62 % par an d'ici 2029", "https://www.agenceecofin.com/innovation/0810-122265-le-marche-africain-des-jeux-video-devrait-croitre-de-11-62-par-an-d-ici-2029-rapport"], ["Jeune Afrique · Le Nigeria part à la conquête du marché africain des jeux vidéo", "https://www.jeuneafrique.com/depeches/20777/politique/le-nigeria-part-a-la-conquete-du-marche-africain-des-jeux-video/"], ["Jeune Afrique · Les recettes du succès de ChopUp", "https://www.jeuneafrique.com/315910/economie-entreprises/reussite-les-recettes-du-succes-de-chopup-le-studio-de-jeux-videos-100-nigerian/"], ["Toonmed (blog) · Reportage : les recettes du succès de ChopUp", "https://toonmed.blogspot.com/2016/04/reportage-les-recettes-du-succes-de.html"], ["Agence Ecofin · Le Nigeria et l'Égypte, pays où la moitié des adultes sont non bancarisés", "https://www.agenceecofin.com/finance/0407-99376-le-nigeria-et-l-egypte-font-partie-des-7-pays-au-monde-dans-lesquels-la-moitie-des-adultes-sont-non-bancarises-rapport"], ["Banque de France · Afrique subsaharienne, la fracture financière entre hommes et femmes", "https://www.banque-france.fr/fr/publications-et-statistiques/publications/afrique-subsaharienne-la-fracture-financiere-entre-hommes-et-femmes"], ["Sport News Africa · Vers la naissance de la Confédération africaine du sport en ligne", "https://sportnewsafrica.com/articles/e-sport-vers-la-naissance-de-la-confederation-africaine-du-sport-en-ligne"], ["Mordor Intelligence · Marché mondial du jeu vidéo", "https://www.mordorintelligence.com/fr/industry-reports/global-gaming-market"], ["Courrier International · Comment le jeu vidéo se développe en Afrique", "https://www.courrierinternational.com/article/tendance-comment-le-jeu-video-se-developpe-en-afrique"], ["Africavox · L'Afrique, nouveau berceau de l'e-sport", "https://africavox.easybroadcast.fr/articles/l-afrique-nouveau-berceau-du-e-sports"], ["Afrikactus · L'essor du gaming africain sur la scène mondiale", "https://afrikactus.com/essor-du-gaming-africain-sur-la-scene-mondiale/"], ["ADF Magazine · Des start-ups nigérianes pénètrent le marché des jeux vidéo", "https://adf-magazine.com/fr/2014/10/des-start-ups-nigerianes-penetrent-le-marche-des-jeux-video/"], ["Smart Africa", "https://smartafrica.org/fr/page-daccueil/"], ["AfriGamers", "https://afrigamers.com/a-propos-afrigamers/"], ["Tribune Online · 12 times national grid collapsed in 2024", "https://tribuneonlineng.com/updated-12-times-national-grid-collapsed-in-2024/"], ["Nairametrics · PwC lists 10 fastest-growing entertainment and media sectors in Nigeria 2024-2028", "https://nairametrics.com/2025/02/09/pwc-lists-10-fastest-growing-entertainment-and-media-sectors-in-nigeria-2024-2028/"],["World Economic Forum · How will Africa's youth population drive global growth?", "https://www.weforum.org/stories/youth/africa-youth-global-growth-digital-economy/"],["ONU · Youth population trends (fact sheet)", "https://www.un.org/esa/socdev/documents/youth/fact-sheets/YouthPOP.pdf"],["Afrik.com · L'Afrique, avenir du gaming mondial ?", "https://www.afrik.com/l-afrique-avenir-du-gaming-mondial"],["Le360 · À Kigali, l'Afrique se cherche un modèle économique pour l'e-sport", "https://afrique.le360.ma/sports/des-millions-de-gamers-a-la-manette-a-kigali-lafrique-se-cherche-un-modele-economique-pour-le-sport_OLMQPD7RONHW3MNIOV3TPTZBWI/"],["AFJV · Abena Tournaments", "https://afjv.com/news/11374_abena-tournaments-tournoi-feminin-afrocaribeen-tekken8.htm"],["Linda Ikeji · Mobo Game Jam (Edu360 et Kucheza Gaming)", "https://www.lindaikejisblog.com/2020/12/mobo-game-jam-edu360-kucheza-drive-social-impact-through-gaming.html"],["Maliyo Games · Programmes de formation", "https://www.maliyo.com/programme/"],["Stuff South Africa · GameOn with HP, hackathon", "https://stuff.co.za/2024/10/11/get-your-gameon-with-hps-new-hackathon/"],["HP Gaming Garage", "https://www.hpgaminggarage.com/"],["Game Camp Cities · La CASE signe avec HP", "https://www.gamecampcities.pro/post/la-conf%C3%A9d%C3%A9ration-esport-africaine-signe-son-premier-partenaire-strat%C3%A9gique-continental-le-groupe-h?lang=fr"],["Pulse Nigeria · TCN restores power in Kaduna, Kano, Bauchi and Gombe", "https://www.pulse.ng/articles/news/local/tcn-restores-power-in-kaduna-kano-bauchi-and-gombe-after-prolonged-blackout-2024111910462282759"]]) ]) ])
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
   PAGE INFOS : compétences, puis langues, diplômes et loisirs.
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
  autresTitre: "Langues et diplômes",
  autres: [
    { icone:"langues", titre:"Langues", items:["Français : langue maternelle","Anglais : courant","Espagnol : notions","Grec moderne : en apprentissage"] },
    { icone:"diplome", titre:"Diplômes", items:["Certification Conception et Game Design, Game Sup (2023‑2027)","Master d'anthropologie religieuse de la Méditerranée antique, École Pratique des Hautes Études (2018‑2020)"] }
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
  autresTitre: "Languages and degrees",
  autres: [
    { icone:"langues", titre:"Languages", items:["French: native","English: fluent","Spanish: basic","Modern Greek: learning"] },
    { icone:"diplome", titre:"Degrees", items:["Certification in Conception and Game Design, Game Sup (2023‑2027)","Master's in Religious Anthropology of the Ancient Mediterranean, École Pratique des Hautes Études (2018‑2020)"] }
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
