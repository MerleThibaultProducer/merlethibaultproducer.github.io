"""Vérifie toutes les pages du site : français et anglais, jour et nuit, ordinateur et téléphone.

Signale les erreurs JavaScript, les fichiers introuvables, les images cassées et les pages
qui débordent en largeur.

    python3 outils/verifier.py                    # vérification seule
    python3 outils/verifier.py --captures avant   # garde une capture de chaque page dans avant/
    python3 outils/verifier.py --captures apres --comparer avant
                                                  # liste les pages dont le rendu a changé

Besoin : pip install playwright pillow, puis python3 -m playwright install chromium
"""
import sys, os, argparse, functools, threading, http.server
from playwright.sync_api import sync_playwright

ap = argparse.ArgumentParser()
ap.add_argument("--captures", help="dossier où enregistrer une capture de chaque page")
ap.add_argument("--comparer", help="dossier de captures de référence à comparer")
a = ap.parse_args()
RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

class Silencieux(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *_): pass
srv = http.server.ThreadingHTTPServer(("127.0.0.1", 0), functools.partial(Silencieux, directory=RACINE))
threading.Thread(target=srv.serve_forever, daemon=True).start()
BASE = f"http://127.0.0.1:{srv.server_address[1]}/"

PROBLEMES = r"""() => [
  ...[...document.images].filter(i => i.getAttribute('src') && i.complete && !i.naturalWidth).map(i => 'image cassée ' + i.getAttribute('src')),
  ...(document.documentElement.scrollWidth > innerWidth + 1 ? ['déborde de ' + (document.documentElement.scrollWidth - innerWidth) + ' px en largeur'] : [])]"""

problemes, pages = [], 0
if a.captures: os.makedirs(a.captures, exist_ok=True)
with sync_playwright() as p:
    nav = p.chromium.launch()
    for theme in ("light", "dark"):
        for largeur in (1440, 390):
            ctx = nav.new_context(viewport={"width": largeur, "height": 900}, color_scheme=theme, reduced_motion="reduce",
                                  is_mobile=largeur < 500, has_touch=largeur < 500)
            pg = ctx.new_page(); ici = ["?"]
            pg.on("pageerror", lambda e: problemes.append(f"{ici[0]} : erreur JavaScript {e}"))
            pg.on("console", lambda m: m.type == "error" and problemes.append(f"{ici[0]} : console {m.text[:150]}"))
            pg.on("response", lambda r: r.status >= 400 and problemes.append(f"{ici[0]} : {r.status} {r.url.replace(BASE, '')}"))
            pg.goto(BASE); pg.wait_for_timeout(300)
            for langue in ("fr", "en"):
                pg.click(f"[data-lang={langue}]"); pg.wait_for_timeout(100)
                routes = ["#/", "#/infos", "#/mentions", "#/pro", "#/perso", "#/exo"] + pg.evaluate(
                    "Object.entries(PROJECTS).flatMap(([k,l]) => l.filter(x => !x.wip).map(x => '#/'+k+'/'+x.id))")
                for r in routes:
                    ici[0] = f"{theme} {largeur} {langue} {r}"
                    pg.evaluate(f"goTo('{r}')"); pg.wait_for_timeout(100)
                    pg.evaluate("Promise.race([Promise.all([...document.images].map(i => { i.loading = 'eager'; return i.decode().catch(() => 0) })), new Promise(f => setTimeout(f, 3000))])")
                    problemes += [f"{ici[0]} : {x}" for x in pg.evaluate(PROBLEMES)]
                    if a.captures:
                        pg.evaluate("document.querySelectorAll('.rv').forEach(e => e.classList.add('in'))")
                        pg.screenshot(path=os.path.join(a.captures, ici[0].replace(" ", "_").replace("#/", "").replace("/", "-") + ".png"), full_page=True)
                    pages += 1
            ctx.close()
    nav.close()

if a.comparer:
    from PIL import Image, ImageChops
    for f in sorted(os.listdir(a.captures)):
        ref = os.path.join(a.comparer, f)
        if not os.path.exists(ref): problemes.append(f"{f} : pas de capture de référence"); continue
        x, y = Image.open(ref).convert("RGB"), Image.open(os.path.join(a.captures, f)).convert("RGB")
        if x.size != y.size: problemes.append(f"{f} : hauteur changée {x.size[1]} → {y.size[1]} px")
        elif (zone := ImageChops.difference(x, y).getbbox()): problemes.append(f"{f} : rendu changé dans la zone {zone}")

print(f"{pages} pages vérifiées, {len(problemes)} problème(s)")
print("\n".join(problemes))
sys.exit(1 if problemes else 0)
