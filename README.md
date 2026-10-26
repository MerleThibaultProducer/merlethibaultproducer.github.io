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
cv/MERLE_Thibault_CV_PROD_v5.pdf  CV proposé au téléchargement
cv/cv-apercu-v5.jpg               aperçu du CV affiché sur la page Infos
```

## Modifier le site

- **Un texte** : ouvrez `js/contenu.js`, cherchez la phrase et modifiez-la (en français puis en anglais).
- **Une image** : déposez le nouveau fichier dans `images/` et indiquez son chemin dans `js/contenu.js`,
  ou remplacez un fichier existant en gardant le même nom.
- **Le CV** : ajoutez le nouveau PDF et son aperçu sous un **nouveau nom** (ex. `_v6`), puis mettez à jour `image` et `pdf` dans `CV_VISUAL` (js/contenu.js). Un nouveau nom évite que les navigateurs gardent l'ancienne version en cache. Le fichier téléchargé garde le nom défini dans `filename`.
- **Un projet en cours** : retirez `wip:true` pour le rendre visible.

Un projet sans présentation (`apercu`) peut avoir un résumé (`resume`) et un encadré « Mon rôle et mes décisions » (`decisions`) : ils ne s'affichent pas quand `apercu` est rempli.
L'aide-mémoire des blocs de contenu (texte, image, bandes, tableaux…) se trouve en tête de `js/contenu.js`.

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
