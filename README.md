# Portfolio – Thibault Merle

Portfolio de Junior Associate Producer (jeu vidéo), publié avec GitHub Pages :
https://merlethibaultproducer.github.io

## Organisation des fichiers

```
index.html                     la page (structure, aperçu de partage, polices)
favicon.svg                    icône de l'onglet
css/style.css                  mise en forme (couleurs et polices en variables dans :root)
fonts/                         police des titres (Bricolage Grotesque, licence OFL)
js/contenu.js                  ✏️ TOUT LE CONTENU : textes FR/EN, projets, CV, mentions légales
js/app.js                      fonctionnement (navigation, langues, affichage) – rien à modifier
images/                        photos, vignettes et illustrations des projets
images/apercu-partage.jpg      image affichée quand le lien est partagé (LinkedIn, Discord…)
cv/MERLE_Thibault_CV_PROD_v9.pdf     CV couleur proposé au téléchargement
cv/MERLE_Thibault_CV_PROD_v9_NB.pdf  CV noir et blanc, pour l'impression
cv/cv-apercu-v9.jpg                  aperçu du CV affiché sur la page Infos
outils/images-mobiles.py             crée les versions légères des images (-m) et js/images-m.js
outils/verifier.py                   vérifie toutes les pages (voir plus bas)
outils/pages-partage.py              crée les pages de partage des projets (projets/)
```

## Modifier le site

- **Un texte** : ouvrez `js/contenu.js`, cherchez la phrase et modifiez-la (en français puis en anglais).
- **Une image** : déposez le nouveau fichier dans `images/` et indiquez son chemin dans `js/contenu.js`,
  ou remplacez un fichier existant en gardant le même nom.
- **Le CV** : ajoutez les nouveaux PDF (couleur et noir et blanc) et l'aperçu sous un **nouveau nom** (ex. `_v10`), puis mettez à jour `image`, `pdf` et `pdfNB` dans `CV_VISUAL` (js/contenu.js). Un nouveau nom évite que les navigateurs gardent l'ancienne version en cache. Les fichiers téléchargés gardent les noms définis dans `filename` et `filenameNB`.
- **L'accueil** : dans `js/contenu.js`, `VITRINE` décrit le montage vidéo des jeux (`videos/accueil-montage.mp4`) : chaque jeu y dure `seg` secondes, dans l'ordre de `jeux`, et la légende mène à sa page. `FRISE` liste les jalons de la frise (un `go` vide grise le jalon tant que la page n'est pas publiée).
- **La vignette, le bandeau et les réglages d'un projet** (`img`, `bandeau`, `video`, `large`, `nocover`, `wip`, `etiq`) s'écrivent seulement dans la version française : la version anglaise les reprend. Les deux listes doivent garder les projets dans le même ordre.
- **Une nouvelle image** : lancez `python3 outils/images-mobiles.py` pour créer sa version légère pour téléphone.
- **Un projet en cours** : retirez `wip:true` pour le rendre visible.

Un projet sans présentation (`apercu`) peut avoir un résumé (`resume`) et un encadré « Mon rôle et mes décisions » (`decisions`) : ils ne s'affichent pas quand `apercu` est rempli.
L'aide-mémoire des blocs de contenu (texte, image, bandes, tableaux…) se trouve en tête de `js/contenu.js`.

## Partager un projet

Pour partager un projet sur LinkedIn ou par message, utilisez son adresse dans `projets/`, par exemple
https://merlethibaultproducer.github.io/projets/workshop-rogue-lite-fevrier-2026.html : l'aperçu montre le titre,
la description et l'image du projet, puis la page s'ouvre sur le site. Après l'ajout d'un projet ou un changement de titre,
relancez `python3 outils/pages-partage.py`.

## Vérifier avant de publier

`outils/verifier.py` ouvre toutes les pages (français et anglais, jour et nuit, ordinateur et téléphone) et signale les erreurs, les fichiers introuvables, les images cassées et les pages qui débordent. Pour un nettoyage qui ne doit rien changer à l'affichage, capturez avant et après, puis comparez :

```
python3 outils/verifier.py --captures avant
# … modifications …
python3 outils/verifier.py --captures apres --comparer avant
```

Les dossiers `avant/` et `apres/` sont ignorés par git.

Après une modification de `css/` ou `js/`, changez le numéro de version dans `index.html` pour que les visiteurs reçoivent les nouveaux fichiers. Une seule commande le fait aux quatre endroits :

```
sed -i "s/?v=[0-9-]*/?v=$(date +%Y%m%d-%H%M)/g" index.html
```

## Mentions légales

Elles se trouvent dans `js/contenu.js` (`LEGAL_FR`, `LEGAL_EN`, `LEGAL_UPDATED`).
Pensez à les mettre à jour, avec leur date, à chaque changement d'hébergeur ou d'adresse e-mail,
ou si vous ajoutez un formulaire ou des statistiques de visite.

## Droits

© 2026 Thibault Merle – Tous droits réservés.

Le code et le contenu de ce dépôt ne sont pas placés sous licence libre. Les visuels issus
de projets d'équipe, de studios ou d'écoles restent la propriété de leurs ayants droit respectifs.

## Sécurité

- `index.html` déclare une politique de sécurité du contenu (balise `Content-Security-Policy`) : le site n'exécute que ses propres scripts et ne charge que ses propres polices et images.
- Toutes les polices sont hébergées dans `fonts/` (Inter et Bricolage Grotesque, licence OFL) : aucune connexion à un service extérieur.
- Si un jour vous ajoutez une ressource externe (vidéo intégrée, police, script), il faudra l'autoriser dans cette balise, sinon le navigateur la bloquera.
