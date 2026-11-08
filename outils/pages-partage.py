"""Crée projets/<id>.html : une petite page par projet, avec le titre, la description et l'image
que LinkedIn, Discord ou Google affichent quand on partage son lien. Elle renvoie aussitôt vers la page du site.
À relancer après l'ajout d'un projet ou un changement de titre : python3 outils/pages-partage.py"""
import json, os, subprocess, html
SITE = "https://merlethibaultproducer.github.io/"
data = json.loads(subprocess.run(["node", "-e", """
global.window = {}; const vm = require("vm"); const fs = require("fs");
vm.runInThisContext(fs.readFileSync("js/contenu.js", "utf8"));
const out = [];
for (const [key, list] of Object.entries(PROJECTS_FR)) for (const p of list) if (!p.wip)
  out.push({ key, id: p.id, title: p.title, desc: p.desc, img: p.img || (p.bandeau && p.bandeau[0][0]) || "images/apercu-partage.jpg" });
console.log(JSON.stringify(out));
"""], capture_output=True, text=True, check=True).stdout)
os.makedirs("projets", exist_ok=True)
for f in os.listdir("projets"):
    if f.endswith(".html"): os.remove(os.path.join("projets", f))
for p in data:
    e = lambda s: html.escape(s, quote=True)
    page, cible = f"{SITE}projets/{p['id']}.html", f"../#/{p['key']}/{p['id']}"
    open(f"projets/{p['id']}.html", "w", encoding="utf8").write(f"""<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{e(p['title'])} – Thibault Merle</title>
<meta name="description" content="{e(p['desc'])}">
<link rel="canonical" href="{page}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Thibault Merle – Portfolio">
<meta property="og:title" content="{e(p['title'])}">
<meta property="og:description" content="{e(p['desc'])}">
<meta property="og:url" content="{page}">
<meta property="og:image" content="{SITE}{e(p['img'])}">
<meta name="twitter:card" content="summary_large_image">
<meta http-equiv="refresh" content="0; url={cible}">
</head>
<body><p><a href="{cible}">{e(p['title'])}</a></p></body>
</html>
""")
assert len(os.listdir("projets")) == len(data) > 0
print(len(data), "pages de partage créées dans projets/")
