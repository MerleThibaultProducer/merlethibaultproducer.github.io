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
cv/MERLE_Thibault_CV_PROD.pdf  CV proposé au téléchargement
cv/cv-apercu.jpg               aperçu du CV affiché sur la page Infos
```

## Modifier le site

- **Un texte** : ouvrez `js/contenu.js`, cherchez la phrase et modifiez-la (en français puis en anglais).
- **Une image** : déposez le nouveau fichier dans `images/` et indiquez son chemin dans `js/contenu.js`,
  ou remplacez un fichier existant en gardant le même nom.
- **Le CV** : remplacez `cv/MERLE_Thibault_CV_PROD.pdf` (et `cv/cv-apercu.jpg` pour l'aperçu) en gardant les mêmes noms.
- **Un projet en cours** : retirez `wip:true` pour le rendre visible.

Chaque projet peut avoir un résumé (`resume`) et un encadré « Mon rôle et mes décisions » (`decisions`).
L'aide-mémoire des blocs de contenu (texte, image, bandes, tableaux…) se trouve en tête de `js/contenu.js`.

## Mentions légales

Elles se trouvent dans `js/contenu.js` (`LEGAL_FR`, `LEGAL_EN`, `LEGAL_UPDATED`).
Pensez à les mettre à jour, avec leur date, à chaque changement d'hébergeur ou d'adresse e-mail,
ou si vous ajoutez un formulaire ou des statistiques de visite.

## Droits

© 2026 Thibault Merle – Tous droits réservés.

Le code et le contenu de ce dépôt ne sont pas placés sous licence libre. Les visuels issus
de projets d'équipe, de studios ou d'écoles restent la propriété de leurs ayants droit respectifs.
