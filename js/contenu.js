/* =====================================================
   ✏️  CONTENU DU SITE – c'est le seul fichier à modifier
   Textes (FR et EN), projets, CV et mentions légales.
   Les images se trouvent dans le dossier images/ :
   pour en changer une, remplacez le fichier ou modifiez son chemin ici.
   ===================================================== */
const SITE_FR = {
  prenom: "Thibault", nom: "Merle",
  titre: "Associate Producer",
  devise: "",   // phrase courte sous le titre de l'accueil (vide = masquée)
  photo: "images/portrait.jpg",   // fichier dans le dossier images/. Vide = initiales.
  intro: [
    "Bonjour, je suis Thibault, ==Associate Producer== dans le jeu vidéo. J'organise le travail des équipes pour transformer une idée en ==un jeu livré dans les délais==.",
    "Formé à la conception et au game design à ==Game Sup==, j'ai mené depuis 2025 ==quatre productions==, workshops et projets de fin d'année, avec des équipes de 12 à 14 personnes : ==planification agile==, ==outils de suivi== sur Excel et Miro, coordination entre Game Artists et Game Designers, et ==communication== entre les équipes et l'encadrement.",
    "Ce portfolio rassemble mes productions, mes projets personnels et mes exercices."
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
    "Hello, I'm Thibault, an ==Associate Producer== in video games. I organise teams' work to turn an idea into ==a game shipped on schedule==.",
    "Trained in design and game design at ==Game Sup==, I have led ==four productions== since 2025, workshops and end-of-year projects, with teams of 12 to 14 people: ==agile planning==, ==tracking tools== in Excel and Miro, coordination between Game Artists and Game Designers, and ==communication== between the teams and the supervisors.",
    "This portfolio gathers my productions, my personal projects and my exercises."
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
const P = o => o;

const PRO1 = { thumb:"images/fin-annee-2026-thumb.jpg", macro:"images/fin-annee-2026-macro.jpg", micro:"images/fin-annee-2026-micro.jpg", kill:"images/fin-annee-2026-kill.jpg" };
const NG = {thumb:"images/nigeria-thumb.jpg", okada:"images/nigeria-okada.jpg", jagun:"images/nigeria-jagun.jpg", chicken:"images/nigeria-chicken.jpg", iwaju:"images/nigeria-iwaju.jpg", kidnapped:"images/nigeria-kidnapped.jpg", aurion:"images/nigeria-aurion.jpg", academy:"images/nigeria-academy.jpg", mobo:"images/nigeria-mobo.jpg", abena:"images/nigeria-abena.jpg", gamrx:"images/nigeria-gamrx.jpg", enav:"images/nigeria-enav.jpg", hp:"images/nigeria-hp.jpg"};
const CT = {thumb:"images/castalie-thumb.jpg",pitch:"images/castalie-pitch.jpg",info:"images/castalie-info.jpg",one:"images/castalie-one.jpg",pillars:"images/castalie-pillars.jpg",notdo:"images/castalie-notdo.jpg",loop:"images/castalie-loop.jpg",manage:"images/castalie-manage.jpg",explore:"images/castalie-explore.jpg",res:"images/castalie-res.jpg",acq:"images/castalie-acq.jpg",fight:"images/castalie-fight.jpg",craft:"images/castalie-craft.jpg",lvl:"images/castalie-lvl.jpg",trade:"images/castalie-trade.jpg",gui:"images/castalie-gui.jpg",keys:"images/castalie-keys.jpg",pad:"images/castalie-pad.jpg",realm:"images/castalie-realm.jpg",typhon:"images/castalie-typhon.jpg",sealed:"images/castalie-sealed.jpg",castalie:"images/castalie-castalie.jpg",moodboard:"images/castalie-moodboard.jpg",ld:"images/castalie-ld.jpg",mol:"images/castalie-mol.jpg",pacing:"images/castalie-pacing.jpg"};
const EX1 = { nav:"images/wyrdfall-nav.jpg", market:"images/wyrdfall-market.jpg", scen:"images/wyrdfall-scen.jpg", budget:"images/wyrdfall-budget.jpg", epic:"images/wyrdfall-epic.jpg", sprint:"images/wyrdfall-sprint.jpg" };

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
    P({ title:"Projets de fin d'année – Mai-juin 2026", large:true, nocover:true,   // nocover:true = pas de grande image en tête de la page de détails
        desc:"Quatre jeux aux genres variés produits en parallèle, de la mise en place de la production à la gestion d'une crise à mi-parcours.", carte:"Quatre jeux produits en parallèle par une promotion entière, avec une méthode agile intégrée aux jalons en cascade de l'école.",
        img:PRO1.thumb,
        infos:{ "Rôle":"Producer", "Équipe":"4 équipes · 13 à 14 personnes", "Durée":"27 mai – 24 juin 2026", "Outils":"Excel · PowerPoint Share · Discord" },
        resume:{ contexte:"Projet de fin d'année à Game Sup, réalisé par toute la promotion en 4 semaines.",
                 role:"Producer des 4 équipes, en lien avec les intervenants dans le rôle d'éditeurs.",
                 resultat:"4 jeux livrés au jury ; 1 387 tâches suivies, dont 93 % terminées, malgré une crise de direction artistique surmontée en deuxième semaine." },
        decisions:[ "**Méthode agile à l'échelle** : adaptée à 4 projets menés en parallèle, dans le cadre des milestones en cascade de l'école.",
                    "**Outils de suivi** : un macro-planning et un micro-planning Excel par groupe, soit 1 387 tâches suivies.",
                    "**Alignement** entre l'encadrement et les équipes, des milestones aux difficultés du quotidien.",
                    "**Date de playtest commune** aux 4 équipes, calée sur le planning des autres promotions.",
                    "**Priorités redéfinies** avec chaque équipe après les retours de playtest." ],
        contenu:[
          BANDE("I","Le cadre du projet",[
            LIGNE([
              T("Comme chaque fin d'année à Game Sup, les promotions travaillent en équipe sur un projet d'environ **3 à 4 semaines**. Cette édition se distinguait par plusieurs phases de conception et de sélection des propositions en amont, qui ont abouti à ==4 sujets aux genres variés==."),
              T("La contrainte : produire ces ==4 jeux en parallèle== dans le cadre des **jalons en cascade** de l'école (Proof of Concept, Alpha, Bêta), tout en laissant à chaque équipe une **organisation agile** adaptée à son projet.")
            ],[ FICHE("Les quatre projets",["**Le Castor et l'Écureuil** : un jeu de plateforme narratif","**Project GLOW** : un jeu d'action-aventure basé sur une mécanique de shoot et de portail","**Insight** : un jeu d'énigmes et d'horreur lovecraftien","**The Flowering Dead** : une proposition de boss rush post-apocalyptique"]) ])
          ]),
          BANDE("II","Mise en place de la production",[
            LIGNE([
              T("Les productions ont été lancées le lendemain de la sélection. Nous avons choisi de le faire en ==promotion entière==, et non, comme d'habitude, chaque groupe dans sa salle. En tant que producer, je pouvais ainsi être présent auprès de tous les groupes lors de la lecture des consignes de développement."),
              T("Second avantage : nous avons pu aborder collectivement l'**organisation générale**, les **outils** et la **méthode de production** à appliquer, avant d'affiner l'organisation propre à chaque groupe.")
            ],[ SCHEMA("orga","Organisation mise en place : quatre groupes, deux référents par groupe, les intervenants et le producteur") ]),
            LIGNE([
              T("Pour faciliter la communication avec les groupes, les intervenants, qui jouaient le rôle d'éditeurs, et moi-même avons désigné ==deux référents par groupe== : un pour les **Game Designers**, un pour les **Game Artists**."),
              T("Nous avons également décidé collectivement de mettre en place des ==dailies== pour suivre l'avancée des projets au quotidien, y compris lorsque j'étais retenu en réunion avec un autre groupe."),
              T("J'avais par ailleurs la charge de la **communication entre les intervenants et les équipes**, au-delà des retours de milestones et tout au long des semaines, notamment lorsqu'un membre d'une équipe rencontrait des difficultés.")
            ],[ IMG(PRO1.macro,"Macro-planning propre à l'Excel de chaque groupe : sprints et milestones (Proof of Concept, Alpha, Bêta)") ]),
            LIGNE([
              T("Le suivi de production reposait sur ==Excel== : un **macro-planning** propre à chaque groupe, posant les sprints et les milestones, puis un **micro-planning** où chaque tâche est rattachée à un sprint, une priorité, une difficulté et un statut. Au total, ==1 387 tâches== ont été suivies sur l'ensemble des groupes."),
              T("Les documents de travail étaient partagés sur ==PowerPoint Share==, et chaque groupe disposait de son propre espace ==Discord==.")
            ],[ IMG(PRO1.micro,"Extrait du micro-planning d'un des groupes : tâches, sprints, priorités, difficultés et statuts") ])
          ]),
          BANDE("III","Une crise à mi-parcours",[
            LIGNE([
              T("Malgré nos efforts pour anticiper les problèmes, une ==difficulté commune à tous les groupes== est apparue lors de la **deuxième semaine** de production : les informations sur la **direction artistique** de chaque projet étaient confuses, et les membres peinaient à se représenter les références. Cela a entraîné des **retards de production**.")
            ],[ SCHEMA("planning","Calendrier de la production : sprints, jalons, crise de mi-parcours et playtests") ]),
            LIGNE([
              T("Avec le recul, nous avons identifié deux causes : des ==références trop vastes== et pas assez précises, et un ==temps trop court== consacré à une nouvelle phase de recherche en début de développement, car nous pensions que les recherches menées pendant la sélection suffiraient.")
            ],[ ETAPES("Comment la crise s'est installée",[["Références trop vastes et peu précises"],["Passe de recherche trop courte au démarrage","Les recherches de la sélection étaient jugées suffisantes"],["Direction artistique confuse selon les groupes"],["Retards de production","Deuxième semaine, pour l'ensemble des groupes","warn"]]) ]),
            LIGNE([
              T("Avec chaque groupe, et selon ses spécificités, nous avons organisé des ==réunions d'urgence== et **suspendu temporairement la production** afin de rétablir une vision d'ensemble claire."),
              T("Pour un groupe, cela s'est traduit par le **kill** de plusieurs assets prévus qui, après réflexion, sortaient du cadre de la direction artistique ou, faute de temps, n'étaient pas assez prioritaires pour être conservés. Pour un autre, par des changements dans le **Level Art** et des modifications du **shader atmosphérique**.")
            ],[ IMG(PRO1.kill,"Tâches supprimées (kills) dans le suivi de l'un des groupes") ])
          ]),
          BANDE("IV","S'adapter rapidement",[
            LIGNE([
              T("Cette situation nous a poussés à repenser en équipe notre organisation et notre communication, avec deux objectifs : un ==résultat cohérent et satisfaisant==, fidèle à la vision de chaque projet, et la **prévention de la surcharge de travail** pour éviter tout ==crunch== au sein des équipes."),
              T("Les sessions de ==playtests== organisées durant les deux dernières semaines nous ont permis de nous adapter rapidement. Les retours ont fait ressortir les points les plus saillants, sur lesquels nous avons concentré nos efforts, et ont aidé à identifier ce qui n'était pas prioritaire pour réorganiser les plannings."),
              T("Enfin, les playtests ont apporté un ==regain de moral== aux équipes après cette passe difficile. Voir des inconnus jouer aux projets, malgré les nombreuses critiques, nous a montré que les jeux plaisaient et que le travail était accueilli avec enthousiasme.")
            ],[ ETAPES("La boucle d'adaptation",[["Playtest","Des inconnus jouent aux projets"],["Retours","Les points les plus saillants ressortent"],["Priorisation","Ce qui n'est pas prioritaire est identifié"],["Plannings réorganisés","Le travail se concentre sur l'essentiel"],["Moral des équipes","Le travail plaît : regain d'enthousiasme"]]) ])
          ]),
          BANDE("V","Résultat",[
            LIGNE([
              T("Au final, les ==4 jeux ont été livrés== et ont **convaincu le jury**."),
              T("Côté suivi, **1 387 tâches** ont été planifiées sur l'ensemble des groupes, dont **1 289 terminées (93 %)**. 57 ont été supprimées (4 %) : des kills assumés pour préserver la cohérence de chaque projet. Seules 36 sont restées en retard.")
            ],[ CHIFFRES([["4 / 4","jeux livrés au jury"],["1 387","tâches suivies"],["93 %","tâches terminées"],["57","tâches supprimées (kills)"]]), SCHEMA("bilan","Statut des tâches par sprint, tous groupes confondus (hors 3 tâches sans sprint ; 2 tâches du sprint 4 étaient encore en cours)") ])
          ]),
          BANDE("VI","Les enseignements",[
            LIGNE([
              T("Ce projet a été extrêmement enrichissant, sur le plan personnel comme professionnel. C'était la première fois que l'on me confiait la ==supervision de la production d'une promotion entière==, et travailler avec des profils aussi variés, sur des projets aussi différents, a été une expérience marquante."),
              T("Mais ce sont surtout les difficultés qui m'ont fait grandir. La crise de mi-parcours m'a poussé à repenser l'organisation des groupes et à mettre de côté ce que je pensais savoir pour ==écouter davantage les besoins spécifiques== des équipes. Ce fut aussi une précieuse leçon sur l'importance de **déléguer** et d'établir des ==canaux de communication== clairs, pour que le développement reste transparent et qu'aucune équipe ne se sente perdue ou livrée à elle-même.")
            ],[ ETAPES("Ce que nous mettrions en place dès le départ",[["Des dailies en équipe entière","Pour que tout le monde comprenne vraiment l'avancée du projet"],["Des milestones d'équipe avant les sprint reviews","Pour présenter l'avancée aux moments clés, par exemple lors d'une réunion dédiée à la direction artistique où chacun exprime sa vision, afin de vérifier qu'elle est bien partagée"],["Une petite scène de référence dans le moteur","Mise en place rapidement, avec un prop à la qualité visée, les textures souhaitées et les intentions de lumière et de caméra"],["Des livrables plus détaillés et plus précis par spécialité à la fin de chaque sprint","Pour que chaque spécialité sache exactement ce qui est attendu d'elle et que l'avancée puisse être vérifiée concrètement"]]) ])
          ]),
          BANDE("VII","Les équipes",[
            LIGNE([
              T("Ces quatre jeux sont avant tout le travail de leurs équipes. Voici chaque membre, son rôle et son profil LinkedIn, groupe par groupe."),
              EQUIPES(EQUIPES_FDA)
            ])
          ])
        ] }),
    P({ title:"Workshop Rogue-lite – Février 2026", wip:true,   // wip:true = en cours (bandeau WIP, bouton Détails inactif). Supprimez ce mot pour activer le projet.
        desc:"Planification à deux niveaux pour deux équipes sur trois semaines : feuille de route du workshop et tâches quotidiennes.", carte:"Deux équipes sur trois semaines, avec une feuille de route pour le workshop et des tâches quotidiennes pour chaque équipe.",
        img:"",
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
        img:"",
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
    P({ title:"Projets de fin d'année – Juin 2025", wip:true,   // wip:true = en cours (bandeau WIP, bouton Détails inactif). Supprimez ce mot pour activer le projet.
        desc:"Ma première gestion de deux projets en parallèle, suivis sur Excel et Miro.", carte:"Mes deux premiers projets menés en parallèle, suivis sur Excel et Miro, avec des sprint reviews pour chaque équipe.",
        img:"",
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
    P({ title:"Projet personnel 1", wip:true, desc:"Court descriptif du projet.", img:"",
        infos:{ "Rôle":"Chef de projet", "Équipe":"5 personnes", "Durée":"3 mois" },
        contenu:[ T("Décrivez ici le projet.") ] }),
    P({ title:"Projet personnel 2", wip:true, desc:"Court descriptif du projet.", img:"",
        infos:{ "Rôle":"Producer", "Équipe":"Solo", "Durée":"2 mois" },
        contenu:[ T("Décrivez ici le projet.") ] })
  ],
  exo: [
        P({ title:"Exercice 1 – Wyrdfall", desc:"Dossier de production d'un jeu AA de 48 mois : équipe, budget, planning, estimation des ventes et seuil de rentabilité.", carte:"Le dossier de gestion de production d'un jeu AA sur 48 mois : équipe, plannings, budget, ventes et seuil de rentabilité.", large:true,   // large:true = page en bandes ; bg/fit : image affichée en entier sur fond uni
        img:"images/wyrdfall-vignette.jpg",
        cimg:"images/wyrdfall-couverture.jpg", cbg:"#7dad9c",
        infos:{ "Rôle":"Producer", "Projet":"AA · 30 à 50 personnes", "Outils":"Excel · Coda · ClickUp", "Temps de travail":"20 h sur 90 h (épreuve entière)", "Livrables":"Équipe · Planning · Budget · Market Analysis" },
        resume:{ contexte:"Exercice de production à Game Sup autour d'un jeu AA fictif. Seule la partie gestion de production est présentée ici.",
                 role:"Producer du projet : de la composition de l'équipe au seuil de rentabilité.",
                 resultat:"Un budget de 9 M€ sur 48 mois, un seuil de rentabilité à environ 451 000 ventes et trois scénarios de ROI, dans un fichier Excel modulable en un clic." },
        contenu:[
          BANDE("I","Contraintes de l'exercice",[
            LIGNE([
              T("Dans le cadre de cet exercice, nous devions fournir un **document de gestion de production** couvrant plusieurs volets : une définition crédible de **l'équipe** à constituer, un **macro-planning** et un **micro-planning** de la production sur ==Coda== et ==ClickUp==, un **budget** de développement sur ==Excel== et une estimation des ventes (**Market Analysis**)."),
              T("J'ai choisi un ==projet d'envergure AA== comparable à **Greedfall** : **Wyrdfall**, porté par une équipe de **30 à 50 personnes** au pic de la production."),
              T("Ce dossier représente **20 heures** de travail. Le ==High Concept document== et le ==prototype==, également demandés, ont été produits pendant les **70 heures restantes** de l'épreuve et ne sont pas présentés ici.")
            ],[ FICHE("Gestion de production · présentée ici · 20 h",["Équipe à constituer","Macro-planning et micro-planning (Coda, ClickUp)","Budget de développement (Excel)","Estimation des ventes (Market Analysis)"]), FICHE("Autres livrables · 70 h",["High Concept document","Prototype"]) ])
          ]),
          BANDE("II","Synthèse chiffrée et seuil de rentabilité",[
            LIGNE([
              T("Avant de détailler chaque partie du travail, voici les chiffres sur lesquels repose l'ensemble du projet. Wyrdfall est un ==projet AA de 48 mois==, comprenant **36 mois de production** et **12 mois de live service**, pour une **équipe de 42 personnes** dont 25 restent mobilisées sur la phase de live. Le budget total du projet s'élève à **9 033 682 €**, dont 7 070 677 € de salaires (78 %), le reste se répartissant entre les logiciels, la localisation, les frais de fonctionnement et l'outsourcing.")
            ],[ CHIFFRES([["9 033 682 €","Budget total"],["42","Personnes dans l'équipe"],["48 mois","36 production · 12 live"],["78 %","Part des salaires"]]) ]),
            LIGNE([
              T("Afin de savoir à partir de quand le projet devient rentable, j'ai calculé son ==seuil de rentabilité==, c'est-à-dire le nombre de ventes nécessaire pour couvrir ce budget. Pour cela, je me suis appuyé sur les paramètres vus en cours : un prix de **49,99 €**, un taux de remboursement de **11 %** dans le cas moyen, puis la part de Steam (30 %), les taxes (20 %) et la royalty d'Unreal Engine (5 %). Une vente rapporte ainsi environ **20 € nets**, soit 40 % de son prix, ce qui correspond bien à la part de 35 à 45 % qui revient au développeur sur Steam. Le budget est donc couvert à partir d'environ ==451 000 ventes== (entre 414 000 et 484 000 suivant le taux de remboursement retenu, de 3 % à 17 %)."),
              T("Dans le scénario conservateur moyen, ce seuil est dépassé de peu : **482 000 ventes** estimées, soit environ 7 % au-dessus, pour un ROI de **616 438 €**. Il faudrait pour cela réunir environ 234 000 followers avec un taux de conversion moyen (20 %), contre les 250 000 prévus. Dans le scénario optimiste, le seuil ne représente que 61 % de la moyenne des ventes des jeux étudiés (738 000). À l'inverse, les scénarios bas ne couvrent que 24 % (conservateur) et 37 % (optimiste) du budget : la ==rentabilité de Wyrdfall dépend donc avant tout du taux de conversion des wishlists==. Ces estimations ne prennent en compte que les ventes du jeu sur Steam, hors revenus du DLC.")
            ],[ TABLEAU("ROI estimé selon les scénarios · Budget total : 9 033 682 €",["Scénario","Ventes estimées","ROI estimé"],["Conservateur : 250 000 followers", ["Haut", "626 600", "+ 4 639 128 €"], ["Moyen", "482 000", "+ 616 438 €"], ["Bas", "115 680", "− 6 873 790 €"], "Optimiste : moyenne des ventes du Market Analysis", ["Haut", "959 400", "+ 11 901 031 €"], ["Moyen", "738 000", "+ 5 741 809 €"], ["Bas", "177 120", "− 5 726 628 €"]]) ])
          ]),
          BANDE("III","Un fichier de production pensé pour la clarté",[
            LIGNE([
              T("En construisant mon **fichier Excel général**, ma priorité a été la ==clarté== : chaque information devait pouvoir être **trouvée rapidement**, sans se perdre dans les onglets. J'ai donc travaillé la ==cohérence des couleurs== pour regrouper les pages liées entre elles, et mis au point des ==boutons== ainsi qu'une ==barre de navigation== simple."),
              T("L'organisation des pages et la **hiérarchisation des informations** au sein de chacune ont également fait l'objet d'une attention particulière.")
            ],[ IMG(EX1.nav,"Page d'accueil du fichier de production : boutons et navigation par onglets colorés") ])
          ]),
          BANDE("IV","L'approche du Market Analysis",[
            LIGNE([
              T("Pour estimer les ventes potentielles sur Steam, j'ai commencé par l'==analyse des concurrents== du jeu, dont j'ai extrait des **moyennes** exploitables pour mes scénarios de projection. Pour disposer d'un large panel, j'ai retenu des jeux sortis sur **11 ans**, de 2014 à 2025 : une période un peu large, qui gagnerait à être ramenée à **5 ans**.")
            ],[ IMG(EX1.market,"Analyse des concurrents : ventes, revenus estimés et moyennes") ]),
            LIGNE([
              T("Les données extraites m'ont permis de proposer **deux scénarios**, un ==optimiste== et un plus ==conservateur==, chacun décliné en **trois niveaux de risque** (haut, moyen, bas), afin d'envisager l'économie de la production avec le plus de lucidité possible.")
            ],[ IMG(EX1.scen,"Estimation du ROI : scénario conservateur et scénario optimiste, en cas haut, moyen et bas") ])
          ]),
          BANDE("V","Un budget clair et facilement modulable",[
            LIGNE([
              T("Un objectif important de ce travail était l'==adaptabilité== du fichier : le budget doit se mettre à jour **en un clic** lors de l'arrivée d'un nouveau membre dans le studio ou d'un changement d'ancienneté."),
              T("Je voulais également que cette souplesse s'étende aux **logiciels** attribués aux employés, pour que le budget s'ajuste aussitôt (cf. image).")
            ],[ IMG(EX1.budget,"Vue d'ensemble du budget : équipe, durée et budget par département") ])
          ]),
          BANDE("VI","Planifier l'ensemble du projet",[
            LIGNE([
              T("Enfin, cet exercice a mis à l'épreuve ma capacité à ==anticiper et à planifier== : il ne s'agissait plus d'un projet de trois semaines, mais d'une **production de 4 ans**, de la production principale jusqu'à la sortie du DLC prévu."),
              T("Planifier des **Epics** et des **Stories** sur l'ensemble d'une production est un véritable défi, qui m'a poussé à prendre en compte tous les aspects du projet : les éléments essentiels, les niveaux, l'intégration de la QA, etc.")
            ],[ IMG(EX1.epic,"Macro-planning : les Epics de la production") ]),
            LIGNE([
              T("J'ai complété ce travail par un ==sprint== détaillé avec ses tâches : un sprint de ==préproduction== destiné à préparer la **Vertical Slice**."),
              T("Cette partie a été exigeante : elle m'a obligé à sortir de la logique des sprints de nos workshops de 3 semaines, très contraints, pour raisonner **pas à pas** sur les besoins qui font passer d'un sprint à l'autre.")
            ],[ IMG(EX1.sprint,"Sprint de préproduction : tâches, priorités et points de sprint") ])
          ]),
          BANDE("VII","Pour aller plus loin",[
            LIGNE([
              T("Ce travail a été extrêmement formateur et m'a permis de porter un regard neuf sur le métier de **producer**. Avec du recul, j'y vois plusieurs pistes d'amélioration. D'abord, j'ai sous-estimé la charge de l'==équipe QA== : il faudrait prévoir un effectif plus important pour éviter un éventuel **crunch**. C'est aussi le cas de l'équipe ==Sound Design==, elle aussi sous-dimensionnée."),
              T("Il serait également utile d'étudier les **financements** accessibles à un studio de cette taille pour étoffer le dossier : aides régionales, nationales et européennes, solutions bancaires, Kickstarter."),
              T("Je reste néanmoins fier de ce travail, qui a élargi ma vision du périmètre de ce rôle.")
            ],[ FICHE("Pistes d'amélioration",["Renforcer l'équipe QA pour éviter un crunch","Réévaluer l'équipe de Sound Design","Étudier les financements : aides régionales, nationales, européennes, solutions bancaires, Kickstarter"]) ])
          ])
        ] }),
    P({ title:"Exercice 2 – Castalie's Tears – Game Design et Narrative Design", large:true, nocover:true,
        desc:"Game Design Document d'un RPG au tour par tour d'inspiration mythologique : la boucle de jeu et ses systèmes, puis leur incarnation dans l'univers, le personnage et un niveau de Narrative Design.", carte:"Le Game Design Document d'un RPG mythologique au tour par tour : boucle de jeu, systèmes et leur incarnation dans le récit.",
        img:CT.thumb,
        infos:{ "Rôle":"Auteur du GDD", "Cadre":"Game Design 1 (GD1)", "Date":"Avril 2025", "Temps de travail":"90 h", "Livrable":"Game Design Document · 67 pages" },
        resume:{ contexte:"Exercice de Game Design 1 à Game Sup (avril 2025) : concevoir un jeu à partir d'une créature mythique d'un pays imposé, la Grèce.",
                 role:"Auteur du Game Design Document : concept, systèmes, univers, personnage et niveau.",
                 resultat:"Un RPG au tour par tour où chaque mécanique trouve son incarnation dans le récit, et une connaissance concrète du travail de design, utile pour dialoguer avec les équipes en production." },
        contenu:[
          BANDE("I","Introduction",[
            LIGNE([
              T("La contrainte de l'exercice m'a attribué la **Grèce**. Parmi ses créatures mythiques, je me suis tourné vers les **naïades**, divinités des eaux, pour incarner l'héroïne du projet : ==Castalie, gardienne de la fontaine de Delphes==."),
              T("De là est née une idée simple : ==une naïade parcourt la Grèce pour recruter et sauver des divinités== afin de combattre les armées de Typhon. Le joueur incarne Castalie et rencontre, au fil du jeu, d'autres héros et divinités qui deviennent ses compagnons. C'est son histoire qui m'a permis de bâtir un **gameplay de RPG**."),
              T("Ce dossier montre comment j'ai pensé ==l'histoire et les mécaniques ensemble==, en suivant l'ordre du travail. Je présente d'abord le **Game Design** : le concept, les intentions, la boucle de jeu, le joueur visé et l'interface. J'en montre ensuite l'**incarnation en Narrative Design** : l'univers, le personnage de Castalie et un niveau qui fait vivre les deux.")
            ],[ IMG(CT.pitch,"L'énoncé central : Castalie face à Typhon") ])
          ]),
          BANDE("II","Game Design · Le concept",[
            LIGNE([
              T("**Castalie's Tears** est un ==RPG au tour par tour== en solo, en vue à la troisième personne, pensé pour **PC et consoles nouvelle génération**, avec un modèle premium et des DLC. Il s'adresse aux fans de RPG et aux passionnés de mythologie."),
              T("Pour le situer, Dragon Quest XI rencontre Dragon Age : Inquisition dans un univers proche d'Immortals Fenyx Rising."),
              T("Reste l'effort demandé au joueur. C'est un jeu ==posé et riche en systèmes== : il récompense la réflexion, l'organisation et la patience plus que les réflexes.")
            ],[ IMG(CT.one,"Le one-liner et ses trois références"), IMG(CT.info,"La fiche d'information du projet") ])
          ]),
          BANDE("III","Game Design · Intentions et piliers",[
            LIGNE([
              T("Je pars de **valeurs** (courage, coopération, résilience) et d'**intentions** (exploration, solitude, don de soi, travail d'équipe, mystère). Les **thèmes** : la culpabilité du survivant, la confiance, la confiance en soi, et la question « qu'est-ce qu'un héros ? ». Côté design, cela donne de la ==personnalisation==, du **crafting**, de la **gestion** et du **leadership**, ainsi que la conquête du pouvoir."),
              T("Ces intentions se traduisent en ==trois piliers== de gameplay : **combattre les marées de Typhon**, **explorer un monde désolé** et **prendre soin de sa Source et la faire grandir**. J'ai aussi listé ce que le jeu ne sera pas : multijoueur coopératif, combat tactique, arbre de compétences, mini-jeux, infiltration et fins multiples. Cela garde le périmètre sous contrôle.")
            ],[ IMG(CT.pillars,"Les trois piliers de gameplay"), IMG(CT.notdo,"Ce que le jeu n'est pas") ])
          ]),
          BANDE("IV","Game Design · La boucle de gameplay",[
            LIGNE([
              T("Le joueur ==gère== sa base, ==explore==, puis ==résout== des énigmes ou ==combat==, ==acquiert== des ressources et ==progresse==, avant de ==fabriquer== ou d'==échanger== et de revenir à sa base."),
              T("J'ai qualifié chaque étape selon son rôle dans l'économie du jeu : **source** (explorer, acquérir, progresser), **convertisseur** (gérer, résoudre), **drain** (combattre) et **marchand** (fabriquer, échanger). Cela permet de vérifier que la boucle se nourrit autant qu'elle consomme.")
            ],[ IMG(CT.loop,"La boucle de gameplay de Castalie's Tears") ]),
            LIGNE([
              CAROUSEL([[CT.manage,"Gérer"],[CT.explore,"Explorer"],[CT.res,"Résoudre"],[CT.acq,"Acquérir"],[CT.fight,"Combattre"],[CT.craft,"Fabriquer"],[CT.lvl,"Progresser"],[CT.trade,"Échanger"]])
            ])
          ]),
          BANDE("V","Game Design · Le joueur cible",[
            LIGNE([
              T("Le jeu s'adresse à un **public adulte et actif**, qui joue sur **PC et sur Switch** par **sessions courtes**. Selon la typologie de Bartle, ce joueur est d'abord ==Killer==, puis ==Explorer== : il cherche du défi, de la détente, de l'accomplissement et des émotions, porté par une histoire profonde, des mécaniques de RPG et une dimension de gestion."),
              T("Ses attentes guident mes choix. Il rejette le manque de profondeur et de narration, la condescendance, les énigmes trop complexes et l'absence de choix. C'est pourquoi le jeu mise sur ==l'histoire et la gestion== plutôt que sur l'énigme.")
            ],[ CHIFFRES([["1 h","sessions sur PC"],["25-35 min","sessions sur Switch"],["Killer","profil principal"],["Explorer","profil secondaire"]]) ])
          ]),
          BANDE("VI","Game Design · Interface et commandes",[
            LIGNE([
              T("J'ai maquetté l'==interface== : nom de la région, quête en cours et pensées du personnage à l'écran. J'ai aussi pensé les **commandes** pour deux supports, clavier-souris et manette, avec les mêmes actions : déplacement, caméra, interaction, esquive, carte, menu et capacité divine en combat.")
            ],[ IMG(CT.gui,"Maquette de l'interface"), IMG(CT.keys,"Commandes au clavier et à la souris"), IMG(CT.pad,"Commandes à la manette") ])
          ]),
          BANDE("VII","Narrative Design · De la mécanique au récit",[
            LIGNE([
              T("Le Narrative Design commence là où les systèmes cherchent leur sens. Dans Castalie's Tears, ==chaque mécanique a son incarnation dans le récit== : on ne gère pas un menu, on protège une fontaine sacrée ; on ne débloque pas une compétence, on hérite du pouvoir d'un dieu déchu."),
              TABLEAU("Une mécanique, une incarnation",["Mécanique","Incarnation narrative"],[["La Source (gestion de la base)","La fontaine sacrée de Delphes, sanctuaire de Castalie, qui accueille les réfugiés"],["La Grâce divine (compétences, craft)","Les pouvoirs des dieux déchus, fragmentés et dispersés par Typhon"],["Les compagnons (recrutement)","Divinités mineures, héros et réfugiés à sauver"],["Les Temples scellés (donjons, boss)","Les ruines où Typhon et ses Baros retiennent les grands dieux"],["Les ressources (butin, craft)","Les dépouilles des bêtes de Typhon : peaux, griffes, organes"],["La progression","Castalie qui reprend confiance, de naïade fragile à cheffe"]],true)
            ])
          ]),
          BANDE("VIII","Narrative Design · Un univers en deuil",[
            LIGNE([
              T("L'histoire se déroule à l'==Âge des Légendes==, en Grèce, le **Royaume de Lumière** : un havre doré où les humains vivent en harmonie avec les dieux. Puis vient la **Chute**. ==Typhon==, fils de Gaïa et du Tartare, brise ses chaînes, détruit l'Olympe et vainc les dieux, tués ou scellés, leurs Grâces divines dispersées. Il ne reste qu'une terre aride, des ruines et quelques sanctuaires, dont la fontaine de Castalie à Delphes."),
              T("Typhon et Échidna ont engendré des armées de harpies, de chimères et de manticores, et cinq calamités, les **Baros**. Les bêtes sont attirées par les fragments de Grâce, qu'elles dévorent pour gagner en puissance : le butin du joueur est donc aussi ce que l'ennemi convoite.")
            ],[ IMG(CT.realm,"Le Royaume de Lumière avant la Chute"), IMG(CT.typhon,"Typhon"), FICHE("Les cinq Baros, du plus faible au plus fort",["Nosos, le Cheval pestilentiel","Aétès, le Vent des ombres","La Gorgone, la sorcière serpentine","Le Colchien, le Dragon doré","Charybde, le Dévoreur des mers"]) ]),
            LIGNE([
              T("La ==Grâce divine== est le cœur de l'univers comme du gameplay : la source du pouvoir des dieux, nourrie par la vénération. Un dieu peut en offrir un fragment à un humain ou à un autre dieu, au risque de le consumer. Dispersée, elle attise la convoitise de tous."),
              T("Les humains survivent dans des sanctuaires cachés. Certains, les **héros**, ont fusionné avec des fragments de Grâce pour combattre. La technologie a régressé, mais de petits éclats de Grâce permettent d'enchanter outils et armes. Les **Temples scellés**, enfin, sont les ruines où les grands dieux sont retenus prisonniers : des lieux de pouvoir, gardés par les Baros.")
            ],[ IMG(CT.sealed,"Un Temple scellé") ])
          ]),
          BANDE("IX","Narrative Design · Castalie, un personnage qui évolue",[
            LIGNE([
              T("Castalie est une ==naïade crénienne==, fille du dieu-fleuve Achéloos, élève d'Apollon à Delphes où elle veille sur la fontaine sacrée. À la Chute, Apollon lui demande de rester protéger Delphes. Elle pleure chaque mort qu'elle ressent : ses larmes lui laissent des cicatrices sur les joues et, disent les témoins, capturent les souvenirs de cette guerre. Blessé, Apollon la cache avant de fuir et lui fait promettre de survivre."),
              T("Je l'ai construite sur un ==défaut et une évolution== : elle manque de confiance, se méfie de ses pouvoirs comme des inconnus et craint le changement. Au fil de l'aventure, elle trouve sa force, comme déesse, comme cheffe et comme amie, devient une combattante, une héroïne, et sa voix s'affirme. Elle parle d'abord le moins possible, d'une voix grave, calme et méfiante. C'est par elle que passent les thèmes du jeu : la culpabilité du survivant, la confiance, et ce qu'est un héros.")
            ],[ IMG(CT.castalie,"Castalie, la naïade de la fontaine de Delphes","sm"), FICHE("Castalie en bref",["Naïade crénienne de la fontaine de Delphes","Voix grave, calme, méfiante, peu de mots","Défauts : manque de confiance, peur du changement","Évolution : de la solitude au leadership"]) ])
          ]),
          BANDE("X","Narrative Design · Le niveau du Temple d'Apollon",[
            LIGNE([
              T("J'ai décliné ces intentions dans un niveau : le ==premier Temple scellé==, les ruines du temple principal d'Apollon à Delphes. Castalie y cherche un fragment de Grâce divine et sent le pouvoir endormi de son mentor. Il lui faut trouver le passage vers la partie profonde du temple, se battre contre la marée de bêtes, puis affronter une créature enragée qui s'est gorgée de ce pouvoir."),
              T("Le niveau est pensé comme un ==chemin dans la mémoire==. Des mosaïques racontent le passé et le lore au fil du parcours, et Castalie commente ce dont elle se souvient. Le boss attend dans le naos, là où elle conversait avec Apollon : une cinématique où elle laisse enfin éclater sa colère et sa détermination. Le niveau allume la flamme de Castalie.")
            ],[ IMG(CT.moodboard,"Moodboard du niveau"), IMG(CT.ld,"Plan du niveau (layout)") ]),
            LIGNE([
              T("Le décor s'inspire d'un temple grec avec quelques libertés : plus vaste, plusieurs salles, mais avec les trois pièces principales, le pronaos, le naos et l'opisthodome qui abritait le trésor. Les colonnes sont plus ou moins détruites. L'ambiance sonore reste sobre : une musique grave et mystérieuse, des pas qui résonnent dans les couloirs."),
              T("Côté gameplay : des **petits ennemis** que l'on peut fuir, un **mini-boss** qui garde la clé du naos, un **boss** à vaincre pour obtenir la Grâce d'Apollon, deux **portes secrètes** qui raccourcissent le trajet, et des **coffres** de souvenirs d'avant la Chute. Une seule énigme : trouver la clé. L'==intensité monte par paliers== entre les salles, avec des respirations dans les antichambres, jusqu'au point culminant dans le naos.")
            ],[ IMG(CT.mol,"Diagramme moléculaire : les salles et leurs liens"), IMG(CT.pacing,"Courbe d'intensité du niveau") ])
          ]),
          BANDE("XI","Conclusion",[
            LIGNE([
              T("Castalie's Tears cherche à tenir ensemble ==un système et une émotion==. Côté Game Design, une boucle de gestion, d'exploration et de combat où chaque étape nourrit la suivante. Côté Narrative Design, un univers en deuil où chacune de ces étapes devient un geste : protéger une fontaine, recueillir la Grâce d'un dieu déchu, sauver des réfugiés."),
              T("Le joueur incarne Castalie : sa progression est la sienne. À mesure que sa Source et ses pouvoirs grandissent, et qu'elle rencontre d'autres héros, elle reprend confiance. Le niveau du Temple d'Apollon est le premier moment où gameplay et émotion se rejoignent : le joueur franchit un seuil de gameplay, et Castalie, qu'il incarne, un seuil émotionnel."),
              T("Ce que je retiens : un GDD ne se limite pas à lister des features. Il doit relier les ==intentions== aux ==mécaniques==, et les mécaniques à ce que le joueur ressent. C'est cette chaîne que j'ai cherché à rendre lisible, du pilier jusqu'au niveau. Comme producer, c'est aussi ce qui me permet de comprendre ce que l'on demande aux équipes de design, et d'en estimer la portée.")
            ],[ FICHE("Ce que je retiens",["Une boucle de jeu où chaque étape nourrit la suivante","Une mécanique, une incarnation narrative","Une héroïne incarnée par le joueur, dont l'évolution suit la progression","Un niveau qui sert à la fois le gameplay et l'émotion"]) ])
          ]),
          BANDE("XII","Références",[
            LIGNE([
              T("Ma base de références couvre jeux vidéo, rétro-gaming, jeux de plateau, livres, séries et musiques, chacune choisie pour un usage précis : l'interface, les quêtes, la gestion d'équipe, les mythes ou l'esthétique grecque.")
            ],[ FICHE("Jeux vidéo",["Dragon Quest XI : l'interface","Baldur's Gate III : les interactions avec les PNJ","Octopath Traveler II : le combat au tour par tour","Fire Emblem : Three Houses : les relations entre compagnons","Expeditions : Rome : le design des quêtes","Dragon Age : Inquisition : la gestion de l'avant-poste","Immortals Fenyx Rising : l'esthétique grecque"]), FICHE("Rétro-gaming et plateau",["Chrono Trigger : relations entre personnages et combat","Final Fantasy VI : arcs narratifs des compagnons","Suikoden II : gestion d'équipe","Golden Sun : magie et environnement","Glory of Heracles : dieux, humains et héros","Gloomhaven et Aeon's End : tour par tour et travail d'équipe","Theomachy et Pantheon : pouvoirs divins"]), FICHE("Mythologie et autres médias",["Hésiode, La Théogonie : dieux et mythes","Ovide, Les Métamorphoses : les mythes sur Castalie","Pierre Lévêque, Le Livre des Nymphes","Bernard Sergent, Les Nymphes et les Néréides","Princesse Mononoké : désolation et restauration","Blood of Zeus : la mort des dieux et la puissance divine","Children of the Whales : survivre face à des forces supérieures"]) ], "dessous")
          ])
        ] }),
    P({ title:"Exercice 3 – The Nigerian Video Game Market", large:true, nocover:true,
        desc:"Étude du marché du jeu vidéo en Afrique à travers le cas du Nigéria : un modèle mobile, local et affranchi du AAA occidental, ses moteurs et ses limites.", carte:"Le marché africain du jeu vidéo à travers le cas du Nigéria : un modèle mobile et local, ses moteurs et ses limites.",
        img:NG.thumb,
        infos:{ "Rôle":"Auteur de l'étude", "Cadre":"Culture vidéoludique · Game Sup", "Date":"Janvier 2025", "Livrable":"Présentation PowerPoint · 30 diapositives" },
        resume:{ contexte:"Exercice de culture vidéoludique à Game Sup (janvier 2025) : analyser le marché du jeu vidéo en Afrique.",
                 role:"Auteur de l'étude : recherche documentaire, recoupement et critique des sources.",
                 resultat:"Un modèle africain mobile et local, porté par une population jeune mais freiné par les infrastructures, et une leçon de production : budget, calendrier, plateforme et paiement se décident ensemble." },
        contenu:[
          BANDE("I","Problématique et périmètre",[
            LIGNE([
              T("Le marché du jeu vidéo reste ==dominé par les centres occidentaux et japonais==, avec la montée du **marché chinois**, et demeure **très hermétique** à d'autres modèles. L'Afrique, elle, connaît un ==essor récent==. Cette étude cherche à comprendre comment elle s'inscrit dans ce marché."),
              T("Ma problématique : ==peut-on constater le développement d'un modèle africain== et en quoi s'affranchit-il du modèle occidental ? Pour y répondre, je me suis appuyé sur le **cas du Nigéria**.")
            ],[ CITATION("« L'essor de l'industrie du jeu vidéo en Afrique attire l'attention des investisseurs avec une croissance annuelle significative. »","Nathan Bonnet, Afrikactus, 15 mai 2024"), FICHE("Le plan de l'étude",["Un état des lieux de la situation en Afrique","Une étude de cas : l'industrie nigériane","L'e-sport, porteur de dynamisme économique","Des obstacles au développement","Des investisseurs qui se manifestent"]) ])
          ]),
          BANDE("II","Un marché jeune, en forte accélération",[
            LIGNE([
              T("L'industrie est **encore jeune** : en ==1994==, il n'existait qu'**un seul studio** en Afrique, Celestial Games, en Afrique du Sud. Trente ans plus tard, des studios sont apparus dans plusieurs pays, et le marché accélère depuis le début du XXIe siècle."),
              T("Selon Mordor Intelligence (édition 2024), le marché africain passerait de ==2,14 Md$ en 2024== à ==3,72 Md$ en 2029==, soit une croissance annuelle d'environ **11,6 %**. J'ai calculé que le marché mondial progresse, lui, d'environ **9,3 %** par an (272,86 → 426,02 Md$). Malgré cette dynamique, l'Afrique pèse **moins de 1 %** du marché mondial.")
            ],[ SCHEMA("marche","Le marché africain du jeu vidéo, 2024-2029 (Mordor Intelligence), comparé au marché mondial"), FICHE("Quelques studios pionniers",["Afrique du Sud : Celestial Games (1994)","Cameroun : Kiro'o Games (2003)","Ghana : Leti Arts (2009)","Nigéria : Kuluya, Gamsole et Maliyo (vers 2012)"]) ]),
            LIGNE([
              T("Ce marché repose surtout sur le ==mobile==. En 2022, selon Afrik.com, **200 millions d'Africains** jouaient sur leur téléphone, pour **862,8 M$** de revenus, dont **778,6 M$** via les smartphones, soit environ **90 %**."),
              T("Il faut distinguer ce chiffre de celui des **joueurs tous supports confondus** : plus de **600 millions** de gamers selon Afrik.com (2021). Ce chiffre varie beaucoup selon les sources (349 millions de joueurs en 2024 d'après Le360). Les chiffres ne mesurent pas la même chose, et les revenus d'Afrik.com ne sont pas directement comparables à ceux de Mordor Intelligence (sources et périmètres différents).")
            ],[ CHIFFRES([["200 M","joueurs sur mobile (2022)"],["≈ 600 M","joueurs tous supports (2021)"],["90 %","des revenus via smartphone"],["< 1 %","du marché mondial (2024)"]]) ]),
            LIGNE([
              T("Le moteur de cette croissance est ==démographique==. L'Afrique compte **1,4 milliard d'habitants**, attendus à **2,5 milliards en 2050**, et plus de **60 %** d'entre eux ont moins de 25 ans (Forum économique mondial). Comme l'indique Servan Ahougno, avec une population jeune et la progression rapide des smartphones, l'industrie du gaming au Nigéria peut croître rapidement.")
            ],[ CHIFFRES([["1,4 Md","habitants aujourd'hui"],["2,5 Md","prévus en 2050"],["> 60 %","ont moins de 25 ans"],["≈ 320 M","de 15 à 24 ans en 2030 (ONU)"]]) ])
          ]),
          BANDE("III","Étude de cas : l'industrie nigériane",[
            LIGNE([
              T("Au Nigéria, l'industrie tourne autour de ==quatre studios majeurs== : **Maliyo Games**, **ChopUp**, **Gamsole** et **Kuluya**, tous créés autour de 2012 et tournés vers le ==mobile==."),
              T("Le pays compte **150 millions d'abonnés** à la téléphonie mobile, dont 40 % ont accès à internet, et le parc de smartphones devrait atteindre **143 millions** d'ici la fin de 2025. La croissance est soutenue par des smartphones et des tablettes de plus en plus abordables.")
            ],[ IMG(NG.thumb,"Les quatre studios majeurs : Maliyo Games, ChopUp, Gamsole et Kuluya") ]),
            LIGNE([
              T("Tout commence en ==2011== : **Bayo Puddicombe**, jeune informaticien, a l'idée de décliner en jeu le **danfo**, ce bus jaune qui est le moyen de transport le plus populaire de Lagos. **Danfo** dépasse **1 million de téléchargements**."),
              T("C'est sur ce succès que naît ensuite **ChopUp**, fondée à Lagos avec son co-fondateur **Zubair Abubakar**. Elle est ==pionnière de l'industrie du jeu vidéo au Nigéria==, avec une focalisation sur le marché mobile. En 2016, l'équipe ne compte que **4 employés** et sort **un nouveau jeu toutes les 6 semaines**.")
            ],[ ETAPES("ChopUp en quelques dates",[["2011 · Danfo","Bayo Puddicombe crée le jeu Danfo, avant de fonder ChopUp : plus d'un million de téléchargements depuis sa sortie"],["2012 · Création de ChopUp","Fondation à Lagos avec Zubair Abubakar, dans la foulée du succès de Danfo"],["2016 · Rythme de production","4 employés et un nouveau jeu toutes les 6 semaines"]]) ]),
            LIGNE([
              T("Son modèle économique contourne la ==faible bancarisation== grâce à une collaboration avec les **opérateurs mobiles** : un accès complet au catalogue contre **100 francs CFA par semaine**, déduits directement de la facture de téléphone de l'utilisateur."),
              T("Ses jeux s'appuient sur des ==références locales==, comme les **danfos**. Chicken Escape et Jagun : Clash of Kingdoms ont été téléchargés **100 000 fois** en quelques mois.")
            ],[ IMG(NG.jagun,"Jagun : Clash of Kingdoms, ChopUp, 2017"), IMG(NG.chicken,"Chicken Escape, ChopUp, 2015") ])
          ]),
          BANDE("IV","Un modèle qui s'affranchit du AAA occidental",[
            LIGNE([
              T("Ces studios refusent le modèle du ==triple A occidental== et veulent **parler au local** : aux populations nationales, à leur **histoire** et à leur **quotidien**. Pour Matteo Maillard (Jeune Afrique, 2024), leur tour de force est d'avoir créé une ==exception africaine== en se détournant de l'occidentalocentrisme des AAA, dont les scénarios tournent souvent autour « du nombril américain ou de codes culturels européens »."),
              T("Le **quotidien** devient matière de jeu. Dans Okada Ride (Maliyo, 2012), il s'agit de « slalomer entre les vendeurs à la sauvette, les barrages et les policiers dans les embouteillages monstres de Lagos ». Pour Chucks Olloh, ce qui plaît dans les jeux vidéo nigérians, c'est leur touche de quotidien.")
            ],[ IMG(NG.okada,"Okada Ride, Maliyo Games, 2012") ]),
            LIGNE([
              T("Les studios se **réapproprient aussi l'histoire** africaine et nationale, et réinvestissent la richesse culturelle : dans **Kidnapped** (Maliyo, 2016), on libère les otages d'un gang de Lagos ; dans **Iwaju : Rising Chef** (Maliyo, 2024), on incarne un chef nigérian à Lagos ; **L'héritage de Kori-Odan** (Kiro'o Games, Cameroun) emploie les mythes africains pour proposer un univers fantastique immersif et unique.")
            ],[ IMG(NG.iwaju,"Iwaju : Rising Chef, Maliyo Games, 2024"), IMG(NG.kidnapped,"Kidnapped, Maliyo Games, 2016"), IMG(NG.aurion,"Aurion : L'héritage de Kori-Odan, Kiro'o Games, 2016") ]),
            LIGNE([
              T("Faute d'universités adaptées, les studios sont aussi **au cœur de la formation**. Maliyo Games propose un cursus **gratuit, en ligne et de seulement 3 mois** (Game Art Academy). Dans la même logique, la **Mobo Game Jam**, lancée par Union Bank (Edu360) avec Kucheza Gaming, initie des jeunes de 8 à 18 ans à la création de jeux : première édition en 2020-2021, puis une édition 2.0 en 2022.")
            ],[ IMG(NG.academy,"Le cursus de formation de Maliyo Games"), IMG(NG.mobo,"Affiche de la Mobo Game Jam") ])
          ]),
          BANDE("V","L'e-sport, porteur de dynamisme économique",[
            LIGNE([
              T("Le deuxième moteur est la ==jeune génération== : **70 %** des Nigérians ont moins de 30 ans (Sigma). Elle porte le développement de l'e-sport et des paris sportifs. Selon PwC (via Agence Ecofin, novembre 2023), les revenus publicitaires liés aux jeux vidéo et à l'e-sport au Nigéria passeraient de **111 M$ en 2022** à **472 M$ en 2027**, soit plus que le streaming (86 M$), l'affichage extérieur (135 M$) et la presse écrite (165 M$) réunis.")
            ],[ CHIFFRES([["111 M$","2022 · publicité jeux vidéo et e-sport"],["472 M$","2027 · prévision PwC"],["70 %","des Nigérians ont moins de 30 ans"],["220 M","d'habitants au Nigéria"]]) ]),
            LIGNE([
              T("En recoupant les sources, j'ai relevé une **incohérence** : le même article indique une croissance de **7,1 % par an** entre 2018 et 2022, « maintenue jusqu'en 2027 ». Or, à ce rythme, 111 M$ donneraient environ **156 M$** en 2027, et non 472 M$. Je présente donc ce chiffre comme une ==projection annoncée==, pas comme un fait établi."),
              T("Les publications plus récentes de PwC donnent des ordres de grandeur plus bas pour l'ensemble des jeux vidéo et de l'e-sport au Nigéria. Les périmètres peuvent différer (publicité seule ou revenus totaux) : je retiens surtout la **tendance**, une croissance soutenue à deux chiffres, portée par le smartphone.")
            ],[ TABLEAU("Jeux vidéo et e-sport au Nigéria selon PwC, selon l'édition",["Source","Période","Revenus"],[["Agence Ecofin, nov. 2023","2022 → 2027","111 → 472 M$ (publicité)"],["Nairametrics, fév. 2025","2023 → 2024","192 → 217 M$"],["Nairametrics, fév. 2025","2024 → 2028","217 → 322 M$ (+ 10,9 % par an)"]],true) ]),
            LIGNE([
              T("Au-delà des chiffres, l'e-sport **stimule l'économie numérique** : production de contenu, diffusion en ligne, gestion d'événements, marketing, et il encourage l'accès au haut débit. Les initiatives se multiplient : la confédération ==CASE== (Confédération africaine du sport électronique, fondée à Dakar en septembre 2023), les tournois d'**AfriGamers** (Lenovo Gaming Tournament, Afrigamer Champions League) et **ABENA Tournaments** (Afrogameuses), qui met en avant les talents féminins de l'e-sport en France et en Afrique, avec un premier tournoi sur Tekken 8 aux Gamers Assembly de Poitiers en 2024."),
              T("Pour Lord Alaji Man, la culture et l'e-sport pourraient aussi devenir un ==facteur d'unification== entre les peuples d'Afrique.")
            ],[ IMG(NG.abena,"ABENA Tournaments, Gamers Assembly de Poitiers, 2024"), IMG(NG.gamrx,"GAMR X"), IMG(NG.enav,"E-Navétanes") ])
          ]),
          BANDE("VI","Des obstacles encore nombreux",[
            LIGNE([
              T("Le modèle reste ==fortement limité==. J'ai relevé six obstacles, du plus matériel (le réseau et l'électricité) au plus structurel (le financement). Sur le dernier, je rapporte un **ressenti** : ce sont des observateurs cités par Courrier International qui décrivent ces jeux comme « bien-pensants », pas un constat chiffré."),
              TABLEAU("Les obstacles au développement du secteur",["Obstacle","Constat"],[["Internet","Réseau fragile, dépendant d'un nombre limité de câbles sous-marins (BBC News). Pour le joueur nigérian Chukwudi Okoli, « le plus grand défi est la connectivité »."],["Électricité","12 pannes du réseau national en 2024, dont la douzième en décembre, et des coupures de plusieurs semaines dans le nord du pays en octobre 2024 (Kaduna, Kano, Bauchi, Gombe). Selon le rapport d'Hugo Obi, 82 % des développeurs africains jugent l'électrification primordiale, 76 % un accès internet abordable et 75 % une connexion haut débit."],["Pouvoir d'achat","Un public jeune au pouvoir d'achat limité (ordinateurs, smartphones puissants), des déplacements d'équipes e-sport difficiles à financer, et des jeux pensés pour des joueurs occasionnels, téléchargeables gratuitement."],["Formation","Peu, voire pas, de formations longues dans l'industrie du jeu vidéo."],["Bancarisation","Le Nigéria et l'Égypte font partie des 7 pays au monde où plus de la moitié des adultes n'ont pas de compte bancaire (Chamberline Moko, 2022, d'après le Global Findex 2021)."],["Financement","Selon des observateurs cités par Courrier International, l'essentiel des revenus provient d'actions caritatives avec des bailleurs de fonds étrangers. Ces jeux seraient ressentis comme « bien-pensants », entre culpabilité de l'Occident et condescendance : « Dès qu'on fait un jeu en Afrique, les gens vous demandent : Ça parle du paludisme ? C'est éducatif ? »"]],true)
            ])
          ]),
          BANDE("VII","Des investisseurs qui commencent à se manifester",[
            LIGNE([
              T("Les investissements restent insuffisants, mais des acteurs commencent à se manifester : **HP** avec le **Gaming Garage** (académie d'e-sport et de développement de jeux, partenaire de la CASE depuis mai 2025), l'**UNESCO**, **Smart Africa** et **Orange Middle East**, ou encore des banques comme **Union Bank of Nigeria**, à l'origine de la Mobo Game Jam."),
              T("Autre initiative : un ==hackathon== lancé par HP avec RGB Gaming en Afrique du Sud à l'occasion de l'Heritage Day (24 septembre 2024), autour du patrimoine et des histoires locales, avec une finale au rAge en novembre 2024.")
            ],[ IMG(NG.hp,"GameOn with HP Gaming Garage : esports management et game development academy") ])
          ]),
          BANDE("VIII","Conclusion",[
            LIGNE([
              T("L'Afrique s'inscrit dans un marché en pleine progression en s'appuyant sur une **population jeune** et en très forte croissance, un **marché du mobile** en croissance exponentielle, un **développement intense de l'e-sport** et un ==renoncement aux AAA==."),
              T("Le modèle qui en découle ressemble, par l'attention portée au **mobile**, au marché asiatique. Il se détourne des AAA pour proposer des **jeux du quotidien** ou qui explorent l'**histoire nationale**, mais il reste ==encore fortement limité== par les obstacles d'infrastructure, de pouvoir d'achat et de financement."),
              T("**Ce que j'en retiens côté production.** Cette étude m'a montré qu'un marché se lit d'abord par ses contraintes. Au Nigéria, ChopUp n'a pas seulement choisi le mobile : le studio a conçu son modèle économique autour de la ==faible bancarisation==, avec un abonnement facturé par l'opérateur. Avec 4 employés et un jeu toutes les 6 semaines, il a aussi calé son **rythme de production** sur ses ressources. Pour un producer, la leçon est que le budget, le calendrier, la plateforme et le mode de paiement se décident ensemble, dès la conception, et non après coup. Elle m'a aussi appris à **distinguer un chiffre établi d'une projection** avant de bâtir un plan dessus.")
            ],[ FICHE("Ce que je retiens",["Une population jeune, en très forte croissance","Un marché du mobile en croissance exponentielle","Un e-sport en plein développement","Un modèle local qui s'affranchit du AAA","Un modèle encore fortement limité"]) ])
          ]),
          BANDE("IX","Sources",[ LIGNE([ SOURCES([["Agence Ecofin · Nigéria en 2027, les jeux vidéo généreront plus de revenus publicitaires que le streaming (PwC)", "https://www.agenceecofin.com/communication/1311-113619-nigeria-en-2027-les-jeux-video-genereront-plus-de-revenus-publicitaires-que-le-streaming-l-affichage-exterieur-et-la-presse-ecrite-pwc"], ["Afrik.com · Le gaming en Afrique, une révolution silencieuse", "https://www.afrik.com/le-gaming-en-afrique-une-revolution-silencieuse"], ["Jeune Afrique · L'Afrique, nouvel eldorado des jeux vidéo", "https://www.jeuneafrique.com/1526043/culture/lafrique-nouvel-eldorado-des-jeux-video/"], ["Sigma · Gaming in Nigeria is on the rise", "https://sigma.world/fr/news/gaming-in-nigeria-is-on-the-rise/"], ["Agence Ecofin · Le marché africain des jeux vidéo devrait croître de 11,62 % par an d'ici 2029", "https://www.agenceecofin.com/innovation/0810-122265-le-marche-africain-des-jeux-video-devrait-croitre-de-11-62-par-an-d-ici-2029-rapport"], ["Jeune Afrique · Le Nigeria part à la conquête du marché africain des jeux vidéo", "https://www.jeuneafrique.com/depeches/20777/politique/le-nigeria-part-a-la-conquete-du-marche-africain-des-jeux-video/"], ["Jeune Afrique · Les recettes du succès de ChopUp", "https://www.jeuneafrique.com/315910/economie-entreprises/reussite-les-recettes-du-succes-de-chopup-le-studio-de-jeux-videos-100-nigerian/"], ["Toonmed (blog) · Reportage : les recettes du succès de ChopUp", "https://toonmed.blogspot.com/2016/04/reportage-les-recettes-du-succes-de.html"], ["Agence Ecofin · Le Nigeria et l'Égypte, pays où la moitié des adultes sont non bancarisés", "https://www.agenceecofin.com/finance/0407-99376-le-nigeria-et-l-egypte-font-partie-des-7-pays-au-monde-dans-lesquels-la-moitie-des-adultes-sont-non-bancarises-rapport"], ["Banque de France · Afrique subsaharienne, la fracture financière entre hommes et femmes", "https://www.banque-france.fr/fr/publications-et-statistiques/publications/afrique-subsaharienne-la-fracture-financiere-entre-hommes-et-femmes"], ["Sport News Africa · Vers la naissance de la Confédération africaine du sport en ligne", "https://sportnewsafrica.com/articles/e-sport-vers-la-naissance-de-la-confederation-africaine-du-sport-en-ligne"], ["Mordor Intelligence · Marché mondial du jeu vidéo", "https://www.mordorintelligence.com/fr/industry-reports/global-gaming-market"], ["Courrier International · Comment le jeu vidéo se développe en Afrique", "https://www.courrierinternational.com/article/tendance-comment-le-jeu-video-se-developpe-en-afrique"], ["Africavox · L'Afrique, nouveau berceau de l'e-sport", "https://africavox.easybroadcast.fr/articles/l-afrique-nouveau-berceau-du-e-sports"], ["Afrikactus · L'essor du gaming africain sur la scène mondiale", "https://afrikactus.com/essor-du-gaming-africain-sur-la-scene-mondiale/"], ["ADF Magazine · Des start-ups nigérianes pénètrent le marché des jeux vidéo", "https://adf-magazine.com/fr/2014/10/des-start-ups-nigerianes-penetrent-le-marche-des-jeux-video/"], ["Smart Africa", "https://smartafrica.org/fr/page-daccueil/"], ["AfriGamers", "https://afrigamers.com/a-propos-afrigamers/"], ["Tribune Online · 12 times national grid collapsed in 2024", "https://tribuneonlineng.com/updated-12-times-national-grid-collapsed-in-2024/"], ["Nairametrics · PwC lists 10 fastest-growing entertainment and media sectors in Nigeria 2024-2028", "https://nairametrics.com/2025/02/09/pwc-lists-10-fastest-growing-entertainment-and-media-sectors-in-nigeria-2024-2028/"],["World Economic Forum · How will Africa's youth population drive global growth?", "https://www.weforum.org/stories/youth/africa-youth-global-growth-digital-economy/"],["ONU · Youth population trends (fact sheet)", "https://www.un.org/esa/socdev/documents/youth/fact-sheets/YouthPOP.pdf"],["Afrik.com · L'Afrique, avenir du gaming mondial ?", "https://www.afrik.com/l-afrique-avenir-du-gaming-mondial"],["Le360 · À Kigali, l'Afrique se cherche un modèle économique pour l'e-sport", "https://afrique.le360.ma/sports/des-millions-de-gamers-a-la-manette-a-kigali-lafrique-se-cherche-un-modele-economique-pour-le-sport_OLMQPD7RONHW3MNIOV3TPTZBWI/"],["AFJV · Abena Tournaments", "https://afjv.com/news/11374_abena-tournaments-tournoi-feminin-afrocaribeen-tekken8.htm"],["Linda Ikeji · Mobo Game Jam (Edu360 et Kucheza Gaming)", "https://www.lindaikejisblog.com/2020/12/mobo-game-jam-edu360-kucheza-drive-social-impact-through-gaming.html"],["Maliyo Games · Programmes de formation", "https://www.maliyo.com/programme/"],["Stuff South Africa · GameOn with HP, hackathon", "https://stuff.co.za/2024/10/11/get-your-gameon-with-hps-new-hackathon/"],["HP Gaming Garage", "https://www.hpgaminggarage.com/"],["Game Camp Cities · La CASE signe avec HP", "https://www.gamecampcities.pro/post/la-conf%C3%A9d%C3%A9ration-esport-africaine-signe-son-premier-partenaire-strat%C3%A9gique-continental-le-groupe-h?lang=fr"],["Pulse Nigeria · TCN restores power in Kaduna, Kano, Bauchi and Gombe", "https://www.pulse.ng/articles/news/local/tcn-restores-power-in-kaduna-kano-bauchi-and-gombe-after-prolonged-blackout-2024111910462282759"]]) ]) ])
        ] })
  ]
};
const PROJECTS_EN = {
  pro: [
    P({ title:"End-of-Year Projects – May–June 2026", large:true, nocover:true,
        desc:"Four games of varied genres produced in parallel, from setting up production to handling a mid-course crisis.", carte:"Four games produced in parallel by an entire class, with an agile method embedded in the school's waterfall milestones.",
        img:PRO1.thumb,
        infos:{ "Role":"Producer", "Team":"4 teams · 13 to 14 people", "Duration":"27 May – 24 June 2026", "Tools":"Excel · PowerPoint Share · Discord" },
        resume:{ contexte:"Game Sup end-of-year project, carried out by the whole class in 4 weeks.",
                 role:"Producer for the 4 teams, working with the instructors acting as publishers.",
                 resultat:"4 games delivered to the jury; 1,387 tasks tracked, 93% completed, despite an art-direction crisis overcome in the second week." },
        decisions:[ "**Agile at scale**: adapted to 4 projects run in parallel, within the school's Waterfall milestones.",
                    "**Tracking tools**: a macro-planning and a micro-planning in Excel for each group, 1,387 tasks tracked.",
                    "**Alignment** between the supervisors and the teams, from milestones to day-to-day issues.",
                    "**A shared playtest deadline** for the 4 teams, fitted to the other classes' schedules.",
                    "**Priorities reset** with each team after playtest feedback." ],
        contenu:[
          BANDE("I","The project framework",[
            LIGNE([
              T("As at the end of every school year at Game Sup, the classes work in teams on a project lasting about **3 to 4 weeks**. This edition stood out for several upstream phases of design and proposal selection, which led to ==4 subjects of varied genres==."),
              T("The constraint: produce these ==4 games in parallel== within the school's **waterfall milestones** (Proof of Concept, Alpha, Beta), while giving each team an **agile organisation** suited to its project.")
            ],[ FICHE("The four projects",["**Le Castor et l'Écureuil**: a narrative platformer","**Project GLOW**: an action-adventure game built on a shooting and portal mechanic","**Insight**: a Lovecraftian puzzle and horror game","**The Flowering Dead**: a post-apocalyptic boss rush proposal"]) ])
          ]),
          BANDE("II","Setting up production",[
            LIGNE([
              T("Production was launched the day after the selection. We chose to do it with the ==whole class== together rather than, as usual, each group in its own room. As the producer, I could thus be present with every group during the reading of the development briefs."),
              T("A second advantage: we could address the **overall organisation**, the **tools** and the **production method** together, before refining each group's own organisation.")
            ],[ SCHEMA("orga","Organisation put in place: four groups, two leads per group, the instructors and the producer") ]),
            LIGNE([
              T("To ease communication with the groups, the instructors, who acted as publishers, and I appointed ==two leads per group==: one for the **Game Designers**, one for the **Game Artists**."),
              T("We also decided collectively to hold ==dailies== to follow each project's progress day to day, including when I was tied up in a meeting with another group."),
              T("I was also in charge of **communication between the instructors and the teams**, beyond milestone feedback and throughout the weeks, especially when a team member was struggling.")
            ],[ IMG(PRO1.macro,"Macro-planning in each group's Excel: sprints and milestones (Proof of Concept, Alpha, Beta)") ]),
            LIGNE([
              T("Production tracking relied on ==Excel==: a **macro-planning** for each group, laying out the sprints and milestones, then a **micro-planning** in which each task is tied to a sprint, a priority, a difficulty and a status. In total, ==1,387 tasks== were tracked across all the groups."),
              T("Working documents were shared on ==PowerPoint Share== and each group had its own ==Discord== space.")
            ],[ IMG(PRO1.micro,"Excerpt of one group's micro-planning: tasks, sprints, priorities, difficulties and statuses") ])
          ]),
          BANDE("III","A mid-course crisis",[
            LIGNE([
              T("Despite our efforts to anticipate problems, ==a difficulty shared by every group== emerged in the **second week** of production: the information about each project's **art direction** was unclear, and team members struggled to picture the references. This led to **production delays**.")
            ],[ SCHEMA("planning","Production calendar: sprints, milestones, mid-course crisis and playtests") ]),
            LIGNE([
              T("Looking back, we identified two causes: ==references that were too broad== and not precise enough, and ==too little time== given to a new research pass at the start of development, because we thought the research done during selection would be enough.")
            ],[ ETAPES("How the crisis set in",[["References too broad and imprecise"],["Research pass too short at the start","The selection-phase research was deemed sufficient"],["Confusing art direction across the groups"],["Production delays","Second week, across all the groups","warn"]]) ]),
            LIGNE([
              T("With each group, and according to its specific needs, we held ==emergency meetings== and **temporarily paused production** to restore a clear overall vision."),
              T("For one group, this meant **killing** several planned assets which, on reflection, fell outside the art direction or, given the time available, were not a high enough priority to keep. For another, it meant changes to the **Level Art** and adjustments to the **atmospheric shader**.")
            ],[ IMG(PRO1.kill,"Tasks removed (kills) in one of the groups' tracking") ])
          ]),
          BANDE("IV","Adapting quickly",[
            LIGNE([
              T("This situation pushed us to rethink our organisation and communication as a team, with two goals: a ==consistent and satisfying result==, true to each project's vision, and **preventing overwork** to avoid any ==crunch== within the teams."),
              T("The ==playtest== sessions held during the last two weeks allowed us to adapt quickly. The feedback highlighted the most salient points, which we focused on, and helped us identify what was not a priority so we could reorganise our schedules."),
              T("Finally, the playtests gave the teams a ==boost in morale== after this difficult stretch. Seeing strangers play the projects, despite the many criticisms, showed us that the games appealed and that the work was welcomed with enthusiasm.")
            ],[ ETAPES("The adaptation loop",[["Playtest","Strangers play the projects"],["Feedback","The most salient points emerge"],["Prioritisation","What is not a priority is identified"],["Schedules reorganised","Work focuses on the essentials"],["Team morale","The work appeals: renewed enthusiasm"]]) ])
          ]),
          BANDE("V","Result",[
            LIGNE([
              T("In the end, the ==4 games were delivered== and **won over the jury**."),
              T("On the tracking side, **1,387 tasks** were planned across all the groups, of which **1,289 were completed (93%)**. 57 were removed (4%): deliberate kills to preserve the consistency of each project. Only 36 remained late.")
            ],[ CHIFFRES([["4 / 4","games delivered to the jury"],["1,387","tasks tracked"],["93%","tasks completed"],["57","tasks removed (kills)"]]), SCHEMA("bilan","Task status by sprint, all groups combined (excluding 3 tasks without a sprint; 2 sprint 4 tasks were still in progress)") ])
          ]),
          BANDE("VI","Lessons learned",[
            LIGNE([
              T("This project was extremely rewarding, both personally and professionally. It was the first time I was entrusted with ==overseeing the production of an entire class==, and working with such varied profiles on such different projects was a memorable experience."),
              T("But above all, it was the difficulties that made me grow. The mid-course crisis pushed me to rethink how the groups were organised and to set aside what I thought I knew in order to ==listen more closely to each team's specific needs==. It was also a valuable lesson in the importance of **delegating** and of establishing clear ==communication channels==, so that development stays transparent and no team ever feels lost or left on its own.")
            ],[ ETAPES("What we would put in place from the start",[["Dailies with the whole team","So that everyone truly understands the project's progress"],["Team milestones before sprint reviews","To present progress at key moments, for example in a meeting dedicated to art direction where everyone shares their vision, to check that it is truly shared"],["A small reference scene in the engine","Set up early, with a prop at the target quality, the intended textures and the lighting and camera intentions"],["More detailed and more precise deliverables per discipline at the end of each sprint","So that each discipline knows exactly what is expected of it and progress can be checked concretely"]]) ])
          ]),
          BANDE("VII","The teams",[
            LIGNE([
              T("These four games are first and foremost the work of their teams. Here is each member, their role and their LinkedIn profile, group by group."),
              EQUIPES(EQUIPES_FDA)
            ])
          ])
        ] }),
    P({ title:"Rogue-lite Workshop – February 2026", wip:true,
        desc:"Two-level planning for two teams over three weeks: a workshop roadmap and daily tasks.", carte:"Two teams over three weeks, with a roadmap for the workshop and daily tasks for each team.",
        img:"",
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
        img:"",
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
    P({ title:"End-of-Year Projects – June 2025", wip:true,
        desc:"My first time managing two projects in parallel, tracked in Excel and Miro.", carte:"My first two projects run in parallel, tracked in Excel and Miro, with sprint reviews for each team.",
        img:"",
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
    P({ title:"Personal Project 1", wip:true, desc:"Short description of the project.", img:"",
        infos:{ "Role":"Project lead", "Team":"5 people", "Duration":"3 months" },
        contenu:[ T("Describe the project here.") ] }),
    P({ title:"Personal Project 2", wip:true, desc:"Short description of the project.", img:"",
        infos:{ "Role":"Producer", "Team":"Solo", "Duration":"2 months" },
        contenu:[ T("Describe the project here.") ] })
  ],
  exo: [
    P({ title:"Exercise 1 – Wyrdfall", desc:"Production dossier for a 48-month AA game: team, budget, planning, sales estimate and break-even point.", carte:"The production management file for a 48-month AA game: team, schedules, budget, sales and break-even point.", large:true,
        img:PROJECTS_FR.exo[0].img, cimg:PROJECTS_FR.exo[0].cimg, cbg:"#7dad9c",
        infos:{ "Role":"Producer", "Project":"AA · 30 to 50 people", "Tools":"Excel · Coda · ClickUp", "Workload":"20 hours out of 90 (whole assignment)", "Deliverables":"Team · Planning · Budget · Market Analysis" },
        resume:{ contexte:"Game Sup production exercise around a fictional AA game. Only the production management part is shown here.",
                 role:"Producer of the project: from team composition to break-even point.",
                 resultat:"A €9M budget over 48 months, a break-even point at about 451,000 sales and three ROI scenarios, in an Excel file that updates in one click." },
        contenu:[
          BANDE("I","Constraints of the exercise",[
            LIGNE([
              T("For this exercise, we had to provide a **production management document** covering several areas: a credible definition of the **team** to assemble, a **macro-planning** and a **micro-planning** of the production in ==Coda== and ==ClickUp==, a development **budget** in ==Excel== and a sales estimate (**Market Analysis**)."),
              T("I chose an ==AA-scale project== comparable to **Greedfall**: **Wyrdfall**, carried by a team of **30 to 50 people** at peak production."),
              T("This file represents **20 hours** of work. The ==High Concept document== and the ==prototype==, also required, were produced during the **remaining 70 hours** of the assignment and are not shown here.")
            ],[ FICHE("Production management · shown here · 20 h",["Team to assemble","Macro-planning and micro-planning (Coda, ClickUp)","Development budget (Excel)","Sales estimate (Market Analysis)"]), FICHE("Other deliverables · 70 h",["High Concept document","Prototype"]) ])
          ]),
          BANDE("II","Key figures and break-even point",[
            LIGNE([
              T("Before detailing each part of the work, here are the figures the whole project rests on. Wyrdfall is a ==48-month AA project==, comprising **36 months of production** and **12 months of live service**, for a **team of 42 people**, 25 of whom remain on the live phase. The total project budget comes to **€9,033,682**, of which €7,070,677 is salaries (78%), the rest being split between Software, Localization, Utilities and Outsourcing.")
            ],[ CHIFFRES([["€9,033,682","Total Budget"],["42","People on the team"],["48 months","36 production · 12 live"],["78%","Share of salaries"]]) ]),
            LIGNE([
              T("To know when the project becomes profitable, I calculated its ==break-even point==, that is, the number of sales needed to cover this budget. For this, I relied on the parameters seen in class: a price of **€49.99**, a refund rate of **11%** in the average case, then Steam's share (30%), taxes (20%) and the Unreal Engine royalty (5%). Each sale thus brings in about **€20 net**, or 40% of its price, which matches the 35 to 45% that goes to the developer on Steam. The budget is therefore covered from about ==451,000 sales== (between 414,000 and 484,000 depending on the refund rate used, from 3% to 17%)."),
              T("In the average conservative scenario, this threshold is exceeded by a small margin: **482,000 estimated sales**, about 7% above, for an ROI of **€616,438**. For this, we would need to gather about 234,000 followers with an average conversion rate (20%), against the 250,000 planned. In the optimistic scenario, the threshold represents only 61% of the average sales of the games studied (738,000). Conversely, the low scenarios cover only 24% (conservative) and 37% (optimistic) of the budget: ==Wyrdfall's profitability therefore depends above all on the wishlist conversion rate==. These estimates only take into account the game's sales on Steam, excluding DLC revenue.")
            ],[ TABLEAU("Estimated ROI by scenario · Total Budget: €9,033,682",["Scenario","Estimated sales","Estimated ROI"],["Conservative: 250,000 followers", ["High", "626,600", "+ €4,639,128"], ["Average", "482,000", "+ €616,438"], ["Low", "115,680", "− €6,873,790"], "Optimistic: average sales from the Market Analysis", ["High", "959,400", "+ €11,901,031"], ["Average", "738,000", "+ €5,741,809"], ["Low", "177,120", "− €5,726,628"]]) ])
          ]),
          BANDE("III","A production file built for clarity",[
            LIGNE([
              T("When building my **general Excel file**, my priority was ==clarity==: every piece of information had to be **found quickly**, without getting lost among the tabs. So I worked on ==colour consistency== to group related pages, and built ==buttons== and a simple ==navigation bar==."),
              T("The organisation of the pages and the **hierarchy of information** within each one were also given particular attention.")
            ],[ IMG(EX1.nav,"Home page of the production file: buttons and navigation through colour-coded tabs") ])
          ]),
          BANDE("IV","The Market Analysis approach",[
            LIGNE([
              T("To estimate potential sales on Steam, I started by ==analysing the game's competitors==, extracting usable **averages** for my projection scenarios. To build a wide panel, I selected games released over **11 years**, from 2014 to 2025: a rather wide period that would benefit from being narrowed to **5 years**.")
            ],[ IMG(EX1.market,"Competitor analysis: sales, estimated revenue and averages") ]),
            LIGNE([
              T("The extracted data allowed me to propose **two scenarios**, an ==optimistic== one and a more ==conservative== one, each broken down into **three risk levels** (high, average, low), so that the production's economics could be considered as clearly as possible.")
            ],[ IMG(EX1.scen,"ROI estimate: conservative and optimistic scenarios, in high, average and low cases") ])
          ]),
          BANDE("V","A clear, easily adjustable budget",[
            LIGNE([
              T("A key goal of this work was the ==adaptability== of the file: the budget must update **in one click** when a new member joins the studio or when seniority changes."),
              T("I also wanted this flexibility to extend to the **software** assigned to employees, so that the budget adjusts immediately (see image).")
            ],[ IMG(EX1.budget,"Budget overview: team, duration and budget by department") ])
          ]),
          BANDE("VI","Planning the whole project",[
            LIGNE([
              T("Finally, this exercise tested my ability to ==anticipate and plan==: it was no longer a three-week project but a **4-year production**, from the main production through to the release of the planned DLC."),
              T("Planning **Epics** and **Stories** across an entire production is a real challenge, which pushed me to take every aspect of the project into account: the essential elements, the levels, QA integration, and so on.")
            ],[ IMG(EX1.epic,"Macro-planning: the production's Epics") ]),
            LIGNE([
              T("I completed this work with a detailed ==sprint== and its tasks: a **pre-production** sprint aimed at preparing the **Vertical Slice**."),
              T("This part was demanding: it forced me out of the logic of the sprints in our very constrained 3-week workshops, to reason **step by step** about the needs that lead from one sprint to the next.")
            ],[ IMG(EX1.sprint,"Pre-production sprint: tasks, priorities and sprint points") ])
          ]),
          BANDE("VII","Going further",[
            LIGNE([
              T("This work was extremely formative and gave me a fresh perspective on the **producer** role. In hindsight, I see several ways to improve it. First, I underestimated the workload of the ==QA team==: a larger headcount would be needed to avoid a possible **crunch**. The same goes for the ==Sound Design== team, which is also understaffed."),
              T("It would also be useful to study the **funding** available to a studio of this size to flesh out the dossier: regional, national and European grants, bank financing, Kickstarter."),
              T("I nonetheless remain proud of this work, which broadened my view of the scope of this role.")
            ],[ FICHE("Areas for improvement",["Strengthen the QA team to avoid a crunch","Re-evaluate the Sound Design team","Study funding: regional, national and European grants, bank solutions, Kickstarter"]) ])
          ])
        ] }),
    P({ title:"Exercise 2 – Castalie's Tears – Game Design and Narrative Design", large:true, nocover:true,
        desc:"Game Design Document for a mythology-inspired turn-based RPG: the core loop and its systems, then their embodiment in the universe, the character and a Narrative Design level.", carte:"The Game Design Document for a turn-based mythological RPG: core loop, systems and their embodiment in the story.",
        img:CT.thumb,
        infos:{ "Role":"Author of the GDD", "Context":"Game Design 1 (GD1)", "Date":"April 2025", "Workload":"90 hours", "Deliverable":"Game Design Document · 67 pages" },
        resume:{ contexte:"Game Design 1 exercise at Game Sup (April 2025): design a game from a mythical creature of an assigned country, Greece.",
                 role:"Author of the Game Design Document: concept, systems, world, character and level.",
                 resultat:"A turn-based RPG where every mechanic is embodied in the story, and hands-on knowledge of design work, useful for working with design teams in production." },
        contenu:[
          BANDE("I","Introduction",[
            LIGNE([
              T("The exercise constraint assigned me **Greece**. Among its mythical creatures, I turned to the **Naiads**, goddesses of the waters, to embody the project's heroine: ==Castalie, guardian of the Delphi spring==."),
              T("From there came a simple idea: ==a Naiad travels through Greece recruiting and saving divinities== to fight Typhon's armies. The player embodies Castalie and meets, as the game goes on, other heroes and deities who become her companions. Her story is what allowed me to build **RPG gameplay**."),
              T("This document shows how I designed ==the story and the mechanics together==, following the order of the work. I first present the **Game Design**: the concept, the intentions, the core loop, the target player and the interface. I then show its **embodiment in Narrative Design**: the universe, the character of Castalie and a level that brings both to life.")
            ],[ IMG(CT.pitch,"The core statement: Castalie facing Typhon") ])
          ]),
          BANDE("II","Game Design · The concept",[
            LIGNE([
              T("**Castalie's Tears** is a single-player, third-person ==turn-based RPG== designed for **PC and next-gen consoles**, with a premium model and DLC. It targets RPG fans and mythology enthusiasts."),
              T("To place it, Dragon Quest XI meets Dragon Age: Inquisition in a universe similar to Immortals Fenyx Rising."),
              T("What remains is the effort asked of the player. It is a ==measured, system-rich game==: it rewards thinking, organisation and patience more than reflexes.")
            ],[ IMG(CT.one,"The one-liner and its three references"), IMG(CT.info,"The project information sheet") ])
          ]),
          BANDE("III","Game Design · Intentions and pillars",[
            LIGNE([
              T("I start from **values** (courage, cooperation, resilience) and **intentions** (exploration, loneliness, selflessness, teamwork, mystery). The **themes**: survivor guilt, trust, self-confidence, and the question “what is a hero?”. On the design side, this means ==customisation==, **crafting**, **management** and **leadership**, and power claiming."),
              T("These intentions become ==three gameplay pillars==: **fight Typhon's tides**, **explore a desolate world** and **take care of your Source and make it grow**. I also listed what the game will not be: cooperative multiplayer, tactical combat, a skill tree, mini-games, stealth and multiple endings. This keeps the scope under control.")
            ],[ IMG(CT.pillars,"The three gameplay pillars"), IMG(CT.notdo,"What the game is not") ])
          ]),
          BANDE("IV","Game Design · The core loop",[
            LIGNE([
              T("The player ==manages== their base, ==explores==, then ==resolves== puzzles or ==fights==, ==acquires== resources and ==levels up==, before ==crafting== or ==trading== and returning to the base."),
              T("I qualified each step by its role in the game economy: **source** (explore, acquire, level up), **converter** (manage, resolve), **drain** (fight) and **trader** (craft, trade). This lets me check that the loop feeds itself as much as it consumes.")
            ],[ IMG(CT.loop,"The core loop of Castalie's Tears") ]),
            LIGNE([
              CAROUSEL([[CT.manage,"Manage"],[CT.explore,"Explore"],[CT.res,"Resolve"],[CT.acq,"Acquire"],[CT.fight,"Fight"],[CT.craft,"Craft"],[CT.lvl,"Level up"],[CT.trade,"Trade"]])
            ])
          ]),
          BANDE("V","Game Design · The target player",[
            LIGNE([
              T("The game targets an **active adult audience** who plays on **PC and Switch** in **short sessions**. In Bartle's taxonomy, this player is first a ==Killer==, then an ==Explorer==: they look for challenge, relaxation, achievement and emotions, carried by a deep story, RPG mechanics and a management dimension."),
              T("Their expectations guide my choices. They reject shallowness and a lack of narrative, condescension, over-complicated puzzles and a lack of choice. That is why the game bets on ==story and management== rather than on puzzles.")
            ],[ CHIFFRES([["1 h","sessions on PC"],["25-35 min","sessions on Switch"],["Killer","main profile"],["Explorer","secondary profile"]]) ])
          ]),
          BANDE("VI","Game Design · Interface and controls",[
            LIGNE([
              T("I mocked up the ==interface==: region name, current quest and the character's thoughts on screen. I also designed the **controls** for two platforms, keyboard and mouse and controller, with the same actions: movement, camera, interaction, dash, map, menu and divine ability in combat.")
            ],[ IMG(CT.gui,"Interface mockup"), IMG(CT.keys,"Keyboard and mouse controls"), IMG(CT.pad,"Controller controls") ])
          ]),
          BANDE("VII","Narrative Design · From mechanics to story",[
            LIGNE([
              T("Narrative Design begins where systems look for meaning. In Castalie's Tears, ==every mechanic has its embodiment in the story==: you don't manage a menu, you protect a sacred fountain; you don't unlock a skill, you inherit the power of a fallen god."),
              TABLEAU("One mechanic, one embodiment",["Mechanic","Narrative embodiment"],[["The Source (base management)","The sacred fountain of Delphi, Castalie's sanctuary, which shelters refugees"],["Divine Grace (skills, crafting)","The powers of the fallen gods, fragmented and scattered by Typhon"],["Companions (recruitment)","Minor deities, heroes and refugees to save"],["Sealed Temples (dungeons, bosses)","The ruins where Typhon and his Bares hold the great gods"],["Resources (loot, crafting)","The remains of Typhon's beasts: hides, claws, organs"],["Progression","Castalie regaining confidence, from fragile Naiad to leader"]],true)
            ])
          ]),
          BANDE("VIII","Narrative Design · A universe in mourning",[
            LIGNE([
              T("The story takes place in the ==Age of Legend==, in Greece, the **Realm of Light**: a golden haven where humans live in harmony with the gods. Then comes the **Fall**. ==Typhon==, son of Gaia and Tartarus, breaks his chains, destroys Olympus and defeats the gods, killed or sealed away, their Divine Graces scattered. What remains is a barren land, ruins and a few sanctuaries, including Castalie's fountain at Delphi."),
              T("Typhon and Echidna bred armies of harpies, chimeras and manticores, and five calamities, the **Bares**. The beasts are drawn to fragments of Grace, which they devour to grow stronger: the player's loot is also what the enemy craves.")
            ],[ IMG(CT.realm,"The Realm of Light before the Fall"), IMG(CT.typhon,"Typhon"), FICHE("The five Bares, from weakest to strongest",["Nosos, the Pestilential Horse","Aetès, the Wind of Shadows","Gorgon, the Serpentine Witch","Colchian, the Golden Dragon","Charybdis, the Sea Devourer"]) ]),
            LIGNE([
              T("==Divine Grace== is the heart of the universe as well as of the gameplay: the source of the gods' power, fed by veneration. A god can gift a fragment to a human or another god, at the risk of consuming them. Scattered, it stirs everyone's greed."),
              T("Humans survive in hidden sanctuaries. Some, the **heroes**, have fused with fragments of Grace to fight. Technology has regressed, but small splinters of Grace can enchant tools and weapons. The **Sealed Temples**, finally, are the ruins where the great gods are held prisoner: places of power, guarded by the Bares.")
            ],[ IMG(CT.sealed,"A Sealed Temple") ])
          ]),
          BANDE("IX","Narrative Design · Castalie, a character who evolves",[
            LIGNE([
              T("Castalie is a ==Crenian Naiad==, daughter of the river god Achelous, a student of Apollo at Delphi where she watches over the sacred fountain. At the Fall, Apollo tells her to stay and protect Delphi. She weeps for every death she feels: her tears leave scars on her cheeks and, witnesses say, capture the memories of that war. Wounded, Apollo hides her before fleeing and makes her promise to survive."),
              T("I built her on a ==flaw and an evolution==: she lacks confidence, distrusts her own powers as much as strangers, and fears change. Over the adventure, she finds her strength, as a goddess, as a leader and as a friend, becomes a fighter, a hero, and her voice grows more assured. At first she speaks as little as possible, in a low, calm, suspicious voice. The game's themes run through her: survivor guilt, trust, and what a hero is.")
            ],[ IMG(CT.castalie,"Castalie, the Naiad of the fountain of Delphi","sm"), FICHE("Castalie at a glance",["Crenian Naiad of the fountain of Delphi","Low, calm, suspicious voice, few words","Flaws: lack of confidence, fear of change","Evolution: from solitude to leadership"]) ])
          ]),
          BANDE("X","Narrative Design · The Temple of Apollo level",[
            LIGNE([
              T("I applied these intentions to a level: the ==first Sealed Temple==, the ruins of Apollo's main temple at Delphi. Castalie looks for a fragment of Divine Grace there and feels the dormant power of her mentor. She must find the way to the deeper part of the temple, fight through the tide of beasts, then face an enraged creature that has gorged itself on that power."),
              T("The level is designed as a ==walk through memory==. Mosaics tell the past and the lore along the way, and Castalie comments on what she remembers. The boss waits in the naos, where she used to talk with Apollo: a cinematic where she finally lets her anger and determination burst out. The level kindles Castalie's flame.")
            ],[ IMG(CT.moodboard,"Level moodboard"), IMG(CT.ld,"Level layout") ]),
            LIGNE([
              T("The setting is inspired by a Greek temple with a few liberties: larger, with several rooms, but keeping the three main chambers, the pronaos, the naos and the opisthodomos that housed the treasury. Columns are more or less destroyed. The sound stays restrained: a low, mysterious music and footsteps echoing in the corridors."),
              T("On the gameplay side: **minor enemies** you can run from, a **mini-boss** guarding the key to the naos, a **boss** to defeat to obtain Apollo's Grace, two **secret doors** that shorten the way, and **chests** of memorabilia from before the Fall. One puzzle only: finding the key. The ==intensity rises in steps== between rooms, with breathers in the antechambers, up to the peak in the naos.")
            ],[ IMG(CT.mol,"Molecular diagram: the rooms and their links"), IMG(CT.pacing,"The level's intensity curve") ])
          ]),
          BANDE("XI","Conclusion",[
            LIGNE([
              T("Castalie's Tears tries to hold ==a system and an emotion== together. On the Game Design side, a loop of management, exploration and combat where each step feeds the next. On the Narrative Design side, a universe in mourning where each of these steps becomes a gesture: protecting a fountain, gathering the Grace of a fallen god, saving refugees."),
              T("The player embodies Castalie: her progression is theirs. As her Source and powers grow, and as she meets other heroes, she regains confidence. The Temple of Apollo level is the first moment where gameplay and emotion meet: the player crosses a gameplay threshold, and Castalie, whom they embody, an emotional one."),
              T("What I take away: a GDD is not just a list of features. It must link ==intentions== to ==mechanics==, and mechanics to what the player feels. That chain is what I tried to make readable, from pillar to level. As a producer, it also helps me understand what is being asked of design teams, and estimate its scope.")
            ],[ FICHE("What I take away",["A core loop where each step feeds the next","One mechanic, one narrative embodiment","A heroine embodied by the player, whose evolution follows the progression","A level that serves both gameplay and emotion"]) ])
          ]),
          BANDE("XII","References",[
            LIGNE([
              T("My reference base covers video games, retro gaming, board games, books, series and music, each chosen for a precise use: interface, quests, team management, myths or Greek aesthetics.")
            ],[ FICHE("Video games",["Dragon Quest XI: the interface","Baldur's Gate III: NPC interactions","Octopath Traveler II: turn-based combat","Fire Emblem: Three Houses: companion relationships","Expeditions: Rome: quest design","Dragon Age: Inquisition: outpost management","Immortals Fenyx Rising: Greek aesthetics"]), FICHE("Retro gaming and board games",["Chrono Trigger: character relationships and combat","Final Fantasy VI: companion narrative arcs","Suikoden II: team management","Golden Sun: magic and environment","Glory of Heracles: gods, humans and heroes","Gloomhaven and Aeon's End: turn-based and teamwork","Theomachy and Pantheon: divine powers"]), FICHE("Mythology and other media",["Hesiod, Theogony: gods and myths","Ovid, Metamorphoses: the myths about Castalie","Pierre Lévêque, Le Livre des Nymphes","Bernard Sergent, Les Nymphes et les Néréides","Princess Mononoke: desolation and restoration","Blood of Zeus: the gods' deaths and divine power","Children of the Whales: surviving against greater forces"]) ], "dessous")
          ])
        ] }),
    P({ title:"Exercise 3 – The Nigerian Video Game Market", large:true, nocover:true,
        desc:"A study of the African video game market through the case of Nigeria: a mobile, local model that breaks away from Western AAA, its drivers and its limits.", carte:"The African video game market through the case of Nigeria: a mobile, local model, its drivers and its limits.",
        img:NG.thumb,
        infos:{ "Role":"Author of the study", "Context":"Video game culture · Game Sup", "Date":"January 2025", "Deliverable":"PowerPoint presentation · 30 slides" },
        resume:{ contexte:"Video game culture exercise at Game Sup (January 2025): analyse the video game market in Africa.",
                 role:"Author of the study: desk research, cross-checking and critical review of sources.",
                 resultat:"An African model that is mobile and local, driven by a young population but held back by infrastructure, and a production lesson: budget, schedule, platform and payment are decided together." },
        contenu:[
          BANDE("I","Research question and scope",[
            LIGNE([
              T("The video game market is still ==dominated by Western and Japanese centres==, with the rise of the **Chinese market**, and remains **very closed** to other models. Africa, for its part, is going through a ==recent boom==. This study tries to understand how it fits into that market."),
              T("My research question: ==can we see an African model emerging==, and how does it break away from the Western one? To answer it, I relied on the **case of Nigeria**.")
            ],[ CITATION("“The rise of the video game industry in Africa is attracting investors' attention, with significant annual growth.”","Nathan Bonnet, Afrikactus, 15 May 2024"), FICHE("Outline of the study",["An overview of the situation in Africa","A case study: the Nigerian industry","Esports as a driver of economic momentum","Obstacles to development","Investors starting to step in"]) ])
          ]),
          BANDE("II","A young market, accelerating fast",[
            LIGNE([
              T("The industry is **still young**: in ==1994==, there was only **one studio** in Africa, Celestial Games, in South Africa. Thirty years later, studios have appeared in several countries, and the market has been accelerating since the early 21st century."),
              T("According to Mordor Intelligence (2024 edition), the African market would grow from ==$2.14 bn in 2024== to ==$3.72 bn in 2029==, about **11.6 %** a year. I calculated that the world market grows by about **9.3 %** a year ($272.86 bn → $426.02 bn). Despite this momentum, Africa accounts for **less than 1 %** of the world market.")
            ],[ SCHEMA("marche","The African video game market, 2024-2029 (Mordor Intelligence), compared with the world market"), FICHE("A few pioneering studios",["South Africa: Celestial Games (1994)","Cameroon: Kiro'o Games (2003)","Ghana: Leti Arts (2009)","Nigeria: Kuluya, Gamsole and Maliyo (around 2012)"]) ]),
            LIGNE([
              T("This market relies mostly on ==mobile==. In 2022, according to Afrik.com, **200 million Africans** played on their phones, generating **$862.8 m** in revenue, of which **$778.6 m** came from smartphones, about **90 %**."),
              T("This figure must be distinguished from the number of **players across all platforms**: more than **600 million** gamers according to Afrik.com (2021). This figure varies a lot between sources (349 million players in 2024 according to Le360). The figures do not measure the same thing, and Afrik.com's revenue is not directly comparable with Mordor Intelligence's (different sources and scopes).")
            ],[ CHIFFRES([["200 M","mobile players (2022)"],["≈ 600 M","players, all platforms (2021)"],["90 %","of revenue from smartphones"],["< 1 %","of the world market (2024)"]]) ]),
            LIGNE([
              T("The driver of this growth is ==demographic==. Africa has **1.4 billion inhabitants**, expected to reach **2.5 billion by 2050**, and over **60 %** of them are under 25 (World Economic Forum). As Servan Ahougno points out, with a young population and the fast spread of smartphones, the gaming industry in Nigeria can grow quickly.")
            ],[ CHIFFRES([["1.4 bn","inhabitants today"],["2.5 bn","expected in 2050"],["> 60 %","are under 25"],["≈ 320 M","aged 15 to 24 in 2030 (UN)"]]) ])
          ]),
          BANDE("III","Case study: the Nigerian industry",[
            LIGNE([
              T("In Nigeria, the industry revolves around ==four major studios==: **Maliyo Games**, **ChopUp**, **Gamsole** and **Kuluya**, all founded around 2012 and focused on ==mobile==."),
              T("The country has **150 million** mobile subscribers, 40 % of whom have internet access, and the smartphone base should reach **143 million** by the end of 2025. Growth is supported by increasingly affordable smartphones and tablets.")
            ],[ IMG(NG.thumb,"The four major studios: Maliyo Games, ChopUp, Gamsole and Kuluya") ]),
            LIGNE([
              T("It all starts in ==2011==: **Bayo Puddicombe**, a young computer scientist, has the idea of turning the **danfo**, the yellow bus that is the most popular means of transport in Lagos, into a game. **Danfo** passes **1 million downloads**."),
              T("**ChopUp** is then born from this success, founded in Lagos with co-founder **Zubair Abubakar**. It is a ==pioneer of the video game industry in Nigeria==, focused on the mobile market. In 2016, the team has only **4 employees** and releases **a new game every 6 weeks**.")
            ],[ ETAPES("ChopUp in a few dates",[["2011 · Danfo","Bayo Puddicombe creates the game Danfo, before founding ChopUp: over 1 million downloads since release"],["2012 · ChopUp founded","Founded in Lagos with Zubair Abubakar, on the back of Danfo's success"],["2016 · Production pace","4 employees and a new game every 6 weeks"]]) ]),
            LIGNE([
              T("Its business model gets around the ==low banking penetration== through a partnership with **mobile operators**: full access to the catalogue for **100 CFA francs a week**, deducted directly from the user's phone bill."),
              T("Its games rely on ==local references==, such as **danfos**. Chicken Escape and Jagun: Clash of Kingdoms were downloaded **100,000 times** within a few months.")
            ],[ IMG(NG.jagun,"Jagun: Clash of Kingdoms, ChopUp, 2017"), IMG(NG.chicken,"Chicken Escape, ChopUp, 2015") ])
          ]),
          BANDE("IV","A model that breaks away from Western AAA",[
            LIGNE([
              T("These studios reject the ==Western triple-A model== and want to **speak to the local**: national audiences, their **history** and their **daily life**. For Matteo Maillard (Jeune Afrique, 2024), their feat is to have created an ==African exception== by turning away from the Western-centrism of AAA games, whose stories often revolve around “the American navel or European cultural codes”."),
              T("**Daily life** becomes game material. In Okada Ride (Maliyo, 2012), the goal is to “weave between street vendors, roadblocks and police in Lagos' huge traffic jams”. For Chucks Olloh, what appeals in Nigerian video games is their touch of everyday life.")
            ],[ IMG(NG.okada,"Okada Ride, Maliyo Games, 2012") ]),
            LIGNE([
              T("Studios also **reclaim African and national history** and reinvest cultural wealth: in **Kidnapped** (Maliyo, 2016), you free the hostages of a Lagos gang; in **Iwaju: Rising Chef** (Maliyo, 2024), you play a Nigerian chef in Lagos; **Aurion: Legacy of the Kori-Odan** (Kiro'o Games, Cameroon) uses African myths to offer an immersive and unique fantasy world.")
            ],[ IMG(NG.iwaju,"Iwaju: Rising Chef, Maliyo Games, 2024"), IMG(NG.kidnapped,"Kidnapped, Maliyo Games, 2016"), IMG(NG.aurion,"Aurion: Legacy of the Kori-Odan, Kiro'o Games, 2016") ]),
            LIGNE([
              T("For lack of suitable universities, studios are also **at the heart of training**. Maliyo Games offers a **free, online course lasting only 3 months** (Game Art Academy). In the same spirit, the **Mobo Game Jam**, launched by Union Bank (Edu360) with Kucheza Gaming, introduces 8 to 18-year-olds to game creation: first edition in 2020-2021, then a 2.0 edition in 2022.")
            ],[ IMG(NG.academy,"Maliyo Games' training course"), IMG(NG.mobo,"Mobo Game Jam poster") ])
          ]),
          BANDE("V","Esports as a driver of economic momentum",[
            LIGNE([
              T("The second driver is the ==young generation==: **70 %** of Nigerians are under 30 (Sigma). It drives the growth of esports and sports betting. According to PwC (via Agence Ecofin, November 2023), advertising revenue linked to video games and esports in Nigeria would rise from **$111 m in 2022** to **$472 m in 2027**, more than streaming ($86 m), outdoor advertising ($135 m) and print ($165 m) combined.")
            ],[ CHIFFRES([["$111 m","2022 · video game and esports advertising"],["$472 m","2027 · PwC forecast"],["70 %","of Nigerians are under 30"],["220 M","inhabitants in Nigeria"]]) ]),
            LIGNE([
              T("Cross-checking sources, I noticed an **inconsistency**: the same article states growth of **7.1 % a year** between 2018 and 2022, “maintained until 2027”. At that pace, $111 m would give about **$156 m** in 2027, not $472 m. I therefore present this figure as an ==announced projection==, not an established fact."),
              T("More recent PwC publications give lower orders of magnitude for video games and esports as a whole in Nigeria. Scopes may differ (advertising only or total revenue): what I mainly retain is the **trend**, sustained double-digit growth driven by the smartphone.")
            ],[ TABLEAU("Video games and esports in Nigeria according to PwC, by edition",["Source","Period","Revenue"],[["Agence Ecofin, Nov. 2023","2022 → 2027","$111 → 472 m (advertising)"],["Nairametrics, Feb. 2025","2023 → 2024","$192 → 217 m"],["Nairametrics, Feb. 2025","2024 → 2028","$217 → 322 m (+10.9 % a year)"]],true) ]),
            LIGNE([
              T("Beyond the figures, esports **stimulates the digital economy**: content production, online broadcasting, event management, marketing, and it encourages access to broadband. Initiatives are multiplying: the ==CASE== confederation (African Esports Confederation, founded in Dakar in September 2023), **AfriGamers** tournaments (Lenovo Gaming Tournament, Afrigamer Champions League) and **ABENA Tournaments** (Afrogameuses), which highlights female esports talent in France and Africa, with a first Tekken 8 tournament at Gamers Assembly in Poitiers in 2024."),
              T("For Lord Alaji Man, culture and esports could also become a ==unifying factor== among the peoples of Africa.")
            ],[ IMG(NG.abena,"ABENA Tournaments, Gamers Assembly Poitiers, 2024"), IMG(NG.gamrx,"GAMR X"), IMG(NG.enav,"E-Navétanes") ])
          ]),
          BANDE("VI","Obstacles that are still numerous",[
            LIGNE([
              T("The model remains ==strongly limited==. I identified six obstacles, from the most material (network and electricity) to the most structural (funding). On the last one, I report a **perception**: it is observers quoted by Courrier International who describe these games as “well-meaning”, not a measured finding."),
              TABLEAU("Obstacles to the sector's development",["Obstacle","Finding"],[["Internet","Fragile network, dependent on a limited number of submarine cables (BBC News). For Nigerian player Chukwudi Okoli, “the biggest challenge is connectivity”."],["Electricity","12 national grid collapses in 2024, the twelfth in December, and blackouts lasting several weeks in the north of the country in October 2024 (Kaduna, Kano, Bauchi, Gombe). According to Hugo Obi's report, 82 % of African developers see electrification as essential, 76 % affordable internet access and 75 % a broadband connection."],["Purchasing power","A young audience with limited purchasing power (computers, powerful smartphones), esports team travel that is hard to fund, and games designed for casual players, downloadable for free."],["Training","Few, if any, long training courses in the video game industry."],["Banking access","Nigeria and Egypt are among the 7 countries in the world where more than half of adults have no bank account (Chamberline Moko, 2022, based on the 2021 Global Findex)."],["Funding","According to observers quoted by Courrier International, most revenue comes from charitable actions with foreign donors. These games are perceived as “well-meaning”, somewhere between Western guilt and condescension: “As soon as you make a game in Africa, people ask: Is it about malaria? Is it educational?”"]],true)
            ])
          ]),
          BANDE("VII","Investors starting to step in",[
            LIGNE([
              T("Investment remains insufficient, but players are starting to step in: **HP** with the **Gaming Garage** (esports and game development academy, a CASE partner since May 2025), **UNESCO**, **Smart Africa** and **Orange Middle East**, as well as banks such as **Union Bank of Nigeria**, behind the Mobo Game Jam."),
              T("Another initiative: a ==hackathon== launched by HP with RGB Gaming in South Africa around Heritage Day (24 September 2024), about heritage and local stories, with a final at rAge in November 2024.")
            ],[ IMG(NG.hp,"GameOn with HP Gaming Garage: esports management and game development academy") ])
          ]),
          BANDE("VIII","Conclusion",[
            LIGNE([
              T("Africa is part of a fast-growing market, relying on a **young population** growing very fast, an exponentially growing **mobile market**, an **intense development of esports** and a ==renunciation of AAA==."),
              T("The resulting model resembles the Asian market in its focus on **mobile**. It turns away from AAA to offer **everyday games** or games that explore **national history**, but it remains ==strongly limited== by infrastructure, purchasing power and funding obstacles."),
              T("**What I take away for production.** This study showed me that a market is first read through its constraints. In Nigeria, ChopUp did not just choose mobile: it built its business model around ==low banking penetration==, with a subscription billed by the operator. With 4 employees and a new game every 6 weeks, it also set its **production pace** according to its resources. For a producer, the lesson is that budget, schedule, platform and payment method are decided together from the start, not afterwards. It also taught me to **tell an established figure from a projection** before building a plan on it.")
            ],[ FICHE("What I take away",["A young, fast-growing population","An exponentially growing mobile market","Esports in full development","A local model that breaks away from AAA","A model that is still strongly limited"]) ])
          ]),
          BANDE("IX","Sources",[ LIGNE([ SOURCES([["Agence Ecofin · Nigéria en 2027, les jeux vidéo généreront plus de revenus publicitaires que le streaming (PwC)", "https://www.agenceecofin.com/communication/1311-113619-nigeria-en-2027-les-jeux-video-genereront-plus-de-revenus-publicitaires-que-le-streaming-l-affichage-exterieur-et-la-presse-ecrite-pwc"], ["Afrik.com · Le gaming en Afrique, une révolution silencieuse", "https://www.afrik.com/le-gaming-en-afrique-une-revolution-silencieuse"], ["Jeune Afrique · L'Afrique, nouvel eldorado des jeux vidéo", "https://www.jeuneafrique.com/1526043/culture/lafrique-nouvel-eldorado-des-jeux-video/"], ["Sigma · Gaming in Nigeria is on the rise", "https://sigma.world/fr/news/gaming-in-nigeria-is-on-the-rise/"], ["Agence Ecofin · Le marché africain des jeux vidéo devrait croître de 11,62 % par an d'ici 2029", "https://www.agenceecofin.com/innovation/0810-122265-le-marche-africain-des-jeux-video-devrait-croitre-de-11-62-par-an-d-ici-2029-rapport"], ["Jeune Afrique · Le Nigeria part à la conquête du marché africain des jeux vidéo", "https://www.jeuneafrique.com/depeches/20777/politique/le-nigeria-part-a-la-conquete-du-marche-africain-des-jeux-video/"], ["Jeune Afrique · Les recettes du succès de ChopUp", "https://www.jeuneafrique.com/315910/economie-entreprises/reussite-les-recettes-du-succes-de-chopup-le-studio-de-jeux-videos-100-nigerian/"], ["Toonmed (blog) · Reportage : les recettes du succès de ChopUp", "https://toonmed.blogspot.com/2016/04/reportage-les-recettes-du-succes-de.html"], ["Agence Ecofin · Le Nigeria et l'Égypte, pays où la moitié des adultes sont non bancarisés", "https://www.agenceecofin.com/finance/0407-99376-le-nigeria-et-l-egypte-font-partie-des-7-pays-au-monde-dans-lesquels-la-moitie-des-adultes-sont-non-bancarises-rapport"], ["Banque de France · Afrique subsaharienne, la fracture financière entre hommes et femmes", "https://www.banque-france.fr/fr/publications-et-statistiques/publications/afrique-subsaharienne-la-fracture-financiere-entre-hommes-et-femmes"], ["Sport News Africa · Vers la naissance de la Confédération africaine du sport en ligne", "https://sportnewsafrica.com/articles/e-sport-vers-la-naissance-de-la-confederation-africaine-du-sport-en-ligne"], ["Mordor Intelligence · Marché mondial du jeu vidéo", "https://www.mordorintelligence.com/fr/industry-reports/global-gaming-market"], ["Courrier International · Comment le jeu vidéo se développe en Afrique", "https://www.courrierinternational.com/article/tendance-comment-le-jeu-video-se-developpe-en-afrique"], ["Africavox · L'Afrique, nouveau berceau de l'e-sport", "https://africavox.easybroadcast.fr/articles/l-afrique-nouveau-berceau-du-e-sports"], ["Afrikactus · L'essor du gaming africain sur la scène mondiale", "https://afrikactus.com/essor-du-gaming-africain-sur-la-scene-mondiale/"], ["ADF Magazine · Des start-ups nigérianes pénètrent le marché des jeux vidéo", "https://adf-magazine.com/fr/2014/10/des-start-ups-nigerianes-penetrent-le-marche-des-jeux-video/"], ["Smart Africa", "https://smartafrica.org/fr/page-daccueil/"], ["AfriGamers", "https://afrigamers.com/a-propos-afrigamers/"], ["Tribune Online · 12 times national grid collapsed in 2024", "https://tribuneonlineng.com/updated-12-times-national-grid-collapsed-in-2024/"], ["Nairametrics · PwC lists 10 fastest-growing entertainment and media sectors in Nigeria 2024-2028", "https://nairametrics.com/2025/02/09/pwc-lists-10-fastest-growing-entertainment-and-media-sectors-in-nigeria-2024-2028/"],["World Economic Forum · How will Africa's youth population drive global growth?", "https://www.weforum.org/stories/youth/africa-youth-global-growth-digital-economy/"],["ONU · Youth population trends (fact sheet)", "https://www.un.org/esa/socdev/documents/youth/fact-sheets/YouthPOP.pdf"],["Afrik.com · L'Afrique, avenir du gaming mondial ?", "https://www.afrik.com/l-afrique-avenir-du-gaming-mondial"],["Le360 · À Kigali, l'Afrique se cherche un modèle économique pour l'e-sport", "https://afrique.le360.ma/sports/des-millions-de-gamers-a-la-manette-a-kigali-lafrique-se-cherche-un-modele-economique-pour-le-sport_OLMQPD7RONHW3MNIOV3TPTZBWI/"],["AFJV · Abena Tournaments", "https://afjv.com/news/11374_abena-tournaments-tournoi-feminin-afrocaribeen-tekken8.htm"],["Linda Ikeji · Mobo Game Jam (Edu360 et Kucheza Gaming)", "https://www.lindaikejisblog.com/2020/12/mobo-game-jam-edu360-kucheza-drive-social-impact-through-gaming.html"],["Maliyo Games · Programmes de formation", "https://www.maliyo.com/programme/"],["Stuff South Africa · GameOn with HP, hackathon", "https://stuff.co.za/2024/10/11/get-your-gameon-with-hps-new-hackathon/"],["HP Gaming Garage", "https://www.hpgaminggarage.com/"],["Game Camp Cities · La CASE signe avec HP", "https://www.gamecampcities.pro/post/la-conf%C3%A9d%C3%A9ration-esport-africaine-signe-son-premier-partenaire-strat%C3%A9gique-continental-le-groupe-h?lang=fr"],["Pulse Nigeria · TCN restores power in Kaduna, Kano, Bauchi and Gombe", "https://www.pulse.ng/articles/news/local/tcn-restores-power-in-kaduna-kano-bauchi-and-gombe-after-prolonged-blackout-2024111910462282759"]]) ]) ])
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
const CV_VISUAL = {
  image: "cv/cv-apercu.jpg",
  pdf: "cv/MERLE_Thibault_CV_PROD.pdf",
  filename: "MERLE_Thibault_CV_PROD.pdf"   // nom du fichier téléchargé
};

/* Page « Mentions légales et confidentialité » (lien en pied de page).
   À METTRE À JOUR si vous changez d'hébergeur, d'adresse e-mail, ou si vous ajoutez
   un formulaire, des statistiques de visite ou un service externe.
   Chaque section : [titre, [paragraphes]]. Les liens s'écrivent [libellé](https://...). */
const LEGAL_UPDATED = { fr: "8 octobre 2026", en: "8 October 2026" };
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
    "Votre choix de langue (FR / EN) est seulement enregistré dans votre navigateur, sur votre appareil. Il n'est transmis à personne.",
    "**Hébergement :** comme tout hébergeur, GitHub enregistre des données techniques de connexion (dont l'adresse IP) pour la sécurité du service. Voir la [déclaration de confidentialité de GitHub](https://docs.github.com/fr/site-policy/privacy-policies/github-general-privacy-statement).",
    "**Polices de caractères :** les polices sont chargées depuis Google Fonts, ce qui transmet votre adresse IP à Google. Voir les [règles de confidentialité de Google](https://policies.google.com/privacy).",
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
    "Your language choice (FR / EN) is only stored in your browser, on your device. It is not sent to anyone.",
    "**Hosting:** like any host, GitHub records technical connection data (including IP addresses) for security purposes. See [GitHub's privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).",
    "**Fonts:** fonts are loaded from Google Fonts, which sends your IP address to Google. See [Google's privacy policy](https://policies.google.com/privacy).",
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
