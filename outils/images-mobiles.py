"""Crée une version légère (-m, 900 px de large) des grandes images fixes et met à jour js/images-m.js.
À relancer après l'ajout d'une image : python3 outils/images-mobiles.py"""
import os, json
from PIL import Image
D, W = "images", 900
taille = {}
IGNORE = {"accueil-fond-jira.jpg", "apercu-partage.jpg"}   # fond CSS et image de partage : jamais dans une balise <img>
for f in sorted(os.listdir(D)):
    base, ext = os.path.splitext(f)
    if f in IGNORE or base.endswith("-m") or ext.lower() not in (".jpg", ".jpeg", ".png", ".webp"): continue
    src = os.path.join(D, f); im = Image.open(src)
    if getattr(im, "n_frames", 1) > 1 or im.width <= 1100: continue   # les animations et petites images restent telles quelles
    dst = os.path.join(D, base + "-m" + ext)
    petit = im.resize((W, round(im.height * W / im.width)), Image.LANCZOS)
    if ext.lower() == ".png": petit.save(dst, optimize=True)
    else: petit.convert("RGB").save(dst, quality=82, optimize=True, progressive=True) if ext.lower() != ".webp" else petit.save(dst, quality=80)
    if os.path.getsize(dst) < 0.75 * os.path.getsize(src): taille[src] = im.width
    else: os.remove(dst)   # pas assez de gain : on garde l'original seul
open("js/images-m.js", "w").write("/* Généré par outils/images-mobiles.py : largeur des images qui ont une version -m */\nconst IMG_M = " + json.dumps(taille, indent=0) + ";\n")
print(len(taille), "images allégées")
