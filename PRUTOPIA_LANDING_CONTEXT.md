# Pr'Utopia Landing — Contexte technique

> 📌 **Ce doc doit être mis à jour à chaque modification du site.** Olivier travaille par conversations successives (sessions séparées) — ce fichier est la mémoire persistante du projet entre les sessions. Toute session qui modifie le site doit ajouter une entrée au Journal des modifications ci-dessous et corriger les sections au-dessus si elles deviennent obsolètes.

---

## Le site
Landing page vitrine pour l'agence **Pr'Utopia** — conseil et solutions numériques (EURL solo, Olivier).
Positionnement : "partir du besoin des gens", anti-corporate, humain avant tout.
URL live : **https://prutopia.net/** (pas encore déployé — en cours)

Stack : **HTML/CSS/JS vanilla**, servi via un **Cloudflare Worker** (pas Cloudflare Pages — pivot effectué en août 2026, voir Déploiement).
Polices via Google Fonts CDN : Playfair Display + DM Sans.
Icônes : **Lucide Icons** (SVG inline, récupérés depuis `raw.githubusercontent.com/lucide-icons/lucide/main/icons/`).

---

## Identité visuelle
- **Palette** : ambre (`#C17A2A`, `#BA7517`, `#F5E6C8`), vert (`#3B6D11`), brun (`#412402`, `#633806`), crème (`#FDFAF5`)
- **Typographie** : Playfair Display (titres, serif élégant) + DM Sans (corps, lisible)
- **Logo** : SVG de l'arbre celtique avec couronne de 0 et 1 binaires (`prutopia_final_ambre.svg`) — embarqué inline dans la nav
- **Icônes de services** (Lucide, stroke ambre/vert/brun) :
  - Conseil & stratégie IA → `ear` (l'écoute avant tout) en ambre `#BA7517`
  - Applications web & mobile → `smartphone` en vert `#3B6D11`
  - Transformation numérique → `sprout` en brun `#633806`
- **Icônes de réalisations** (Lucide, sur fond coloré propre à chaque projet) :
  - Boulangerie à Votre Porte → `croissant` en ambre sur fond `ib-amber`
  - Club Arts Martiaux → `hand-fist` (poing fermé) en ambre `#f5a623` sur fond noir `#0a0a0b` — a remplacé `swords` (épées croisées) qui ressemblait à une haltère en petite taille

---

## Déploiement

**⚠️ Pivot important (août 2026)** : le projet a été initialement pensé pour Cloudflare **Pages**, mais Olivier a créé un **Worker** (produit Cloudflare différent, pas Pages) via le dashboard. Un upload direct de fichiers statiques sur un Worker **ne supporte pas** le dossier `functions/` façon Pages Functions (message d'erreur Cloudflare explicite : "Les fonctions Pages ne sont pas prises en charge"). Le projet a donc été restructuré en conséquence :

- **Produit Cloudflare : Worker** (pas Pages) — dashboard : Workers & Pages → `prutopia-landing`
- **Assets statiques** servis via la clé `assets` de `wrangler.jsonc` (dossier `public/`)
- **Route API** (`/api/contact`) gérée directement dans le script Worker (`src/index.js`), pas via un dossier `functions/` auto-détecté (ça, c'était le mécanisme Pages — inapplicable ici)
- Déploiement : intégration Git native "Workers Builds" — connecter le repo une fois (Settings → Builds → Connect), chaque push redéploie automatiquement. Aucune commande locale ni GitHub Actions nécessaire (même fonctionnement que le projet PAM)
- Domaine `prutopia.net` à attacher manuellement : Worker → Settings → Domains & Routes → Add Custom Domain
- Email de contact public : `prutopia.conseil@gmail.com`

**Historique** : un premier essai d'upload direct de fichiers statiques (`index.html` + `functions/`) sur le Worker a échoué avec l'avertissement Cloudflare ci-dessus — c'est ce qui a révélé le mauvais produit utilisé et déclenché la bascule vers une vraie structure de projet Worker avec `wrangler.jsonc`.

**404 après déploiement (session du 22/08/2026)** : un déploiement précédent fonctionnait, un déploiement ultérieur a donné une erreur 404 sur `prutopia.net`. Cause exacte non confirmée dans cette session (le fichier `index.html` lui-même a été vérifié comme structurellement valide — pas de balises orphelines). Reste à vérifier en priorité à la prochaine session : le domaine personnalisé est-il bien attaché au **bon** Worker (celui où le dernier `index.html` a été effectivement uploadé) ? Voir Questions ouvertes.

---

## Structure des fichiers de déploiement

Projet Worker complet préparé le 22/08/2026 (`prutopia-worker/`), prêt à pousser sur GitHub :

```
prutopia-worker/
├── public/
│   └── index.html            ← landing complète (démos boulangerie + PAM injectées dans le DOM)
├── src/
│   └── index.js               ← Worker : sert public/ (binding ASSETS) + route POST /api/contact
├── wrangler.jsonc               ← config : name "prutopia-landing", assets.directory "./public"
├── package.json                 ← devDependency wrangler (optionnel, dev local uniquement)
├── .gitignore                   ← node_modules/, .wrangler/, .dev.vars
└── README.md                    ← instructions de connexion Git
```

**Déploiement — 100% via GitHub, aucune étape locale requise** (même fonctionnement que le projet PAM) :
1. Pousser ce dossier sur un repo GitHub
2. Dans le dashboard Cloudflare : Workers & Pages → le Worker `prutopia-landing` → **Settings → Builds → Connect** → sélectionner le repo (ou, si le Worker n'existe pas encore, **Create application → Import a repository** pour le créer directement connecté)
3. Attacher le domaine personnalisé une seule fois : **Settings → Domains & Routes → Add Custom Domain** → `prutopia.net`

Ensuite, chaque `git push` sur la branche principale redéploie automatiquement via l'intégration Git native de Cloudflare ("Workers Builds", équivalent Worker de ce que fait Cloudflare Pages) — **pas de GitHub Actions, pas de token API à gérer en secret, pas de `wrangler deploy` manuel** pour l'usage courant.

L'ancienne structure `functions/api/contact.js` (format Pages Functions) a été abandonnée au profit du handler intégré dans `src/index.js` — **ne pas la recréer**, elle ne fonctionne pas sur un Worker.

---

## Structure du site (sections du HTML)

**Nav** (sticky, fond crème semi-transparent, backdrop-filter) → logo SVG arbre à gauche, liens nav au centre, bouton "Parlons de votre projet ↗" à droite (scroll vers `#contact`)

**Hero** → 2 colonnes : texte accroche à gauche, arbre SVG avec couronne 0/1 à droite. Un seul bouton "Voir nos réalisations" (scroll vers `#realisations`)

**Services** → grille 3 cartes : Conseil & stratégie IA (oreille) / Apps web & mobile (smartphone) / Transformation numérique (pousse)

**Approche** → 4 étapes : écoute → proposition → construction → autonomie

**Réalisations** → grille 3 cartes compactes :
  - Carte "Boulangerie à Votre Porte" → ouvre `#demo-overlay` avec démo interactive (voir ci-dessous)
  - Carte "Club Arts Martiaux" → ouvre `#pam-overlay` avec démo interactive (voir ci-dessous)
  - Carte "Votre projet" (en pointillés, CTA implicite)

**Contact** (`#contact`) → titre "Votre projet mérite une vraie conversation", texte "Laissez-nous une brève description de votre projet, vos coordonnées et nous vous répondons en personne.", adresse email cliquable (`mailto:prutopia.conseil@gmail.com`) en grand format Playfair Display

**Footer** → nom `Pr'Utopia` + copyright 2025

---

## Démo interactive "Boulangerie à Votre Porte"

### Contenu de la démo boulangerie
- Lock screen avec choix Client / Admin
- Vue Client : catalogue (Croissant + Baguette tradition), mini-panier, formulaire de commande
- Vue Admin : onglets Récap (stats + liste de courses + 3 commandes fictives) / Produits / Indispos
- Bandeau démo en haut avec switch vue Client ↔ Admin
- Icônes Lucide `croissant` et emoji 🥖 pour les produits (Lucide n'a pas d'icône baguette)
- Vélo 🚲 comme avatar de livraison (pas de scooter)
- Noms personnels supprimés (Loane/Lloris → "Service de livraison")
- Bottom nav `position: sticky` (pas `fixed`) pour rester dans le contexte modal
- Modale `#demo-overlay`, contenu injecté dans `.demo-scope`

---

## Démo interactive "Club Arts Martiaux" (PAM)

Basée sur le vrai site `clubartsmartiaux_21.html` (projet séparé, voir son propre doc de contexte technique dédié). Version démo anonymisée pour la landing Pr'Utopia :

### Anonymisation appliquée
- Coachs → **Bruce Lee** (Judo) et **Chuck Norris** (Judo/Ju-Jitsu/MMA/Taïso/Self-défense), initiales badges mises à jour (`BL`, `CN`)
- Nom du club → "Club Arts Martiaux" (générique, plus "Plessé Arts Martiaux")
- Adresse, téléphone, ville, code postal → remplacés par des valeurs génériques (`Rue du Dojo`, `44000 Ville`, `+33000000000`) — **partout** : footer, `<title>`, meta tags (description, og:, twitter:), JSON-LD schema.org (`streetAddress`, `addressLocality`, `postalCode`, `telephone`, `areaServed`, `sameAs`)
- Liens externes réels (Kalisport, HelloAsso, PDF décharge) → boutons avec `alert('🎯 Démo — ...')`
- **Logo conservé intact** (le vrai SVG/PNG), c'est la seule chose qu'Olivier a explicitement demandé de ne pas toucher
- 13 photos (galerie + actus + presse) → remplacées par des placeholders SVG **gris variés** (13 nuances différentes entre `#232327` et `#2e2e32`, pas une teinte unique) pour un effet moins "bloc uniforme"

### Fichier standalone
`pam-demo.html` — même structure que le site réel (nav, hero, marquee, disciplines, valeurs, équipe, club/galerie/actus/événements, horaires filtrables, inscription, footer), bandeau démo ajouté en haut.

---

## Principe d'intégration des démos (méthode validée, à réutiliser telle quelle)

**Jamais d'iframe** — casse le touch sur mobile. Le HTML de la démo est injecté directement dans le DOM de la landing, dans une modale overlay (`#demo-overlay` pour la boulangerie, `#pam-overlay` pour PAM, etc. — un id unique par démo).

### Pièges CSS rencontrés et corrections à appliquer systématiquement

La démo boulangerie était simple (CSS écrit à la main pour cette intégration). La démo PAM venait d'un vrai site autonome complexe, ce qui a révélé plusieurs pièges qui **doivent être vérifiés/corrigés à chaque nouvelle démo intégrée à partir d'un site existant** :

1. **Variables CSS (`--xxx`) déclarées sur `:root`** → `:root` cible toujours `<html>` globalement, impossible à scoper avec un sélecteur parent (`.demo-scope :root` ne fonctionne pas). Si la démo et la landing définissent des variables avec les **mêmes noms** (`--amber`, `--ink`...), elles s'écrasent mutuellement dans tout le document. **Fix** : renommer toutes les variables de la démo avec un préfixe unique (`--pam-amber`, `--pam-ink`...) et les déclarer sur la classe scope (`.pam-scope{...}`) au lieu de `:root`.

2. **Règles CSS ciblant `body{...}`** → une fois le contenu extrait de `<body>...</body>` et injecté dans un `<div class="scope">`, il n'y a plus de vraie balise `<body>` à l'intérieur de ce div. `.scope body{color:...}` ne matche donc jamais rien. **Fix** : fusionner ces règles directement dans `.scope{...}`.

3. **`@media(max-width:...)`** se base sur la largeur de la **fenêtre du navigateur**, pas sur celle de la modale (qui fait ~440-480px). Le CSS "mobile" du site d'origine ne se déclenche donc jamais correctement dans le contexte modale. **Fix** : convertir chaque `@media(max-width:Npx)` en `@container nom-container (max-width:Npx)`, et donner au conteneur scrollable de la modale `container-type: inline-size; container-name: nom-container;`.

4. **Unités `vw`/`vh`** dans des `clamp()` ou tailles de police → se basent aussi sur la fenêtre réelle, pas sur la modale. Un `clamp(2.9rem, 7.5vw, 6.2rem)` peut donner un texte énorme qui déborde sur un grand écran alors qu'il a l'air correct dans un aperçu réduit. **Fix** : convertir `vw` → `cqw` et `vh` → `cqh` (container query units), qui se basent sur le même conteneur que le point 3.

5. **`position: fixed`** (nav sticky, barres de boutons bas de page, lightbox) s'accroche toujours à la vraie fenêtre du navigateur et peut fuir hors de la modale (barre de boutons qui apparaît en bas de la vraie landing après scroll, débordement horizontal qui décentre toute la page). **Fix** : **ne pas** convertir en `absolute` (ça casse le comportement "reste visible au scroll"). À la place, garder `position:fixed` tel quel dans le CSS de la démo, et ajouter `transform: translateZ(0)` (ou toute autre transform neutre) sur le **conteneur extérieur de la modale**. Une règle CSS peu connue : un ancêtre avec `transform` devient le "containing block" de ses descendants `fixed`, qui se comportent alors comme si cet ancêtre était le viewport. Tous les éléments fixed de la démo (nav, barres, lightbox) restent alors confinés et correctement positionnés à l'intérieur de la modale.

6. **Reset universel `*{margin:0;padding:0;...}`** → le script de préfixage CSS doit explicitement gérer le sélecteur `*` (souvent ignoré par erreur car il "commence par un caractère spécial"), sinon il reste global et non scopé — accessoirement inoffensif si la landing a son propre reset identique, mais à corriger par principe (`.scope *{...}`).

### Structure de la modale (gabarit)
```html
<div id="[nom]-overlay" style="display:none;position:fixed;inset:0;z-index:500;background:rgba(0,0,0,.75);backdrop-filter:blur(4px);align-items:center;justify-content:center;padding:0;">
  <div style="background:#...;border-radius:18px;overflow:hidden;width:100%;height:100%;max-width:480px;max-height:100vh;display:flex;flex-direction:column;position:relative;margin:auto;transform:translateZ(0);">
    <!-- barre faux-browser : dots rouge/jaune/vert + titre + bouton × -->
    <div id="[nom]-scroll-container" style="flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;position:relative;height:0;container-type:inline-size;container-name:[nom]-container;">
      <div class="[nom]-scope" id="[nom]-root"><!-- body de la démo injecté ici, script retiré du HTML brut pour éviter double exécution --></div>
    </div>
  </div>
</div>
<style>
  @media (max-width: 600px) { /* fullscreen mobile : border-radius:0, height:100%, max-width:100% */ }
  /* CSS de la démo, préfixé .{nom}-scope, variables renommées, :root et body{} fusionnés dans .{nom}-scope, @media→@container, vw/vh→cqw/cqh */
</style>
<script>(function(){ /* JS de la démo, extrait UNE SEULE FOIS (pas depuis le body_content ET séparément — ça duplique et fait tourner les listeners deux fois) */ })();</script>
```

**Piège d'implémentation à éviter** : si on extrait le `body` brut de la démo (qui contient encore sa balise `<script>`) ET qu'on réinjecte séparément le JS extrait, le script s'exécute deux fois (listeners dupliqués, comportements erratiques). Toujours retirer les `<script>` du HTML du body avant de l'injecter, et n'ajouter le JS qu'une seule fois, à la fin.

---

## Contact / Formulaire

Actuellement : adresse email en clair (`mailto:`), pas de formulaire.

La route `/api/contact` (dans `src/index.js` du projet Worker) est prête mais **pas encore branchée** côté HTML (formulaire retiré au profit du lien mailto simple). Elle envoie via MailChannels (gratuit, natif Cloudflare Workers) vers `prutopia.conseil@gmail.com`, depuis `landing@prutopia.net`.

### DNS à configurer avant de rebrancher le formulaire
Ajouter sur `prutopia.net` dans Cloudflare DNS :
```
Type: TXT  |  Name: @  |  Content: v=spf1 include:relay.mailchannels.net ~all
Type: TXT  |  Name: _mailchannels  |  Content: v=mc1 cfid=TON-SOUS-DOMAINE.workers.dev
```
(le `cfid` est le sous-domaine `.workers.dev` du Worker, visible dans le dashboard après déploiement)

---

## ⚠️ Règles impératives pour toute session future

**Règle n°1 — Intégration des démos : toujours DOM injection, jamais iframe.**
Les iframes cassent les événements touch sur mobile. Méthode canonique détaillée dans la section "Principe d'intégration des démos" ci-dessus — suivre impérativement les 6 pièges CSS listés (variables `:root`, `body{}`, `@media`→`@container`, `vw/vh`→`cqw/cqh`, `position:fixed`+`transform:translateZ(0)`, reset universel `*`) à chaque nouvelle démo basée sur un site existant complexe.

**Règle n°2 — Ne jamais supprimer la route `/api/contact` dans `src/index.js` du projet Worker.**
Elle sera rebranchée côté HTML quand le DNS SPF sera configuré. Ne pas recréer de dossier `functions/api/contact.js` façon Pages Functions — ce format ne fonctionne pas sur un Worker (voir section Déploiement).

**Règle n°3 — Cohérence de l'identité visuelle.**
- Icônes : toujours Lucide Icons, récupérés en SVG depuis GitHub raw
- Pas d'emojis pour les icônes de services (sauf si Lucide n'a vraiment pas d'équivalent)
- Palette : ambre/vert/brun/crème — jamais de bleu corporate
- Nom de l'agence : toujours **Pr'Utopia** (avec apostrophe, pas "PrUtopIA" ni "Pr'UtopIA")

**Règle n°4 — Philosophie de copy.**
- Pas de "sous 24h" ni de toute autre mention d'urgence
- Pas de "pas pour vous" mais "avec vous, pour vous"
- Ton humain, chaleureux, anti-jargon

---

## Questions ouvertes / à trancher
- **404 sur prutopia.net après le dernier déploiement direct** (voir Déploiement) : à investiguer en priorité — vérifier que le domaine personnalisé est attaché au bon Worker dans le dashboard, et/ou basculer sur le déploiement Git/Wrangler préparé (`prutopia-worker/`) qui est plus fiable et traçable
- **Repo GitHub pour `prutopia-worker/`** : projet préparé (dossier complet avec wrangler.jsonc) mais pas encore poussé sur un repo réel ni connecté au Worker via Workers Builds
- **Email Routing Cloudflare** : à activer sur `prutopia.net` pour pouvoir utiliser `landing@prutopia.net` comme FROM
- **SPF + MailChannels lockdown** : DNS à configurer après récupération du sous-domaine `.workers.dev`
- **Section Réalisations** : 2 démos en place (Boulangerie, Club Arts Martiaux) ; prévoir d'autres projets à ajouter (Ludo / le générateur SoC ?)
- **EURL** : statuts à faire valider par comptable/avocat avant dépôt

---

## Journal des modifications

- **Juin 2025 (session initiale)** — Création de la landing depuis zéro : hero avec arbre SVG, 3 cartes services, approche 4 étapes, contact, footer. Palette ambre/vert/brun, Playfair Display + DM Sans.
- **Juin 2025** — Intégration du vrai SVG logo (`prutopia_final_ambre.svg`) inline dans la nav et le hero.
- **Juin 2025** — Responsive mobile : hero en colonne, nav compacte, cartes empilées.
- **Juin 2025** — Remplacement des icônes emojis services par Lucide Icons : `ear` (ambre), `smartphone` (vert), `sprout` (brun).
- **Juin 2025** — Ajout section Réalisations : carte "Boulangerie à Votre Porte" + carte "Votre projet", positionnée après "Notre approche".
- **Juin 2025** — Intégration démo boulangerie : injection DOM directe (pas iframe), modale overlay fullscreen mobile / centrée desktop. Démo nettoyée (retrait Loane/Lloris, retrait chocolatine/pain aux raisins/finger, icônes Lucide pour les produits restants, vélo 🚲).
- **Juin 2025** — Formulaire de contact remplacé par adresse email mailto simple. `functions/api/contact.js` conservé pour usage futur (MailChannels, `prutopia.conseil@gmail.com`, `landing@prutopia.net`).
- **Juin 2025** — Bouton "Parlons de votre projet ↗" (nav) branché sur scroll vers `#contact`.
- **Juin 2025** — Texte contact mis à jour : "Laissez-nous une brève description de votre projet, vos coordonnées et nous vous répondons en personne."
- **Juin 2025** — Bouton "Décrire mon besoin ↗" retiré du hero (seul "Voir nos réalisations" reste).
- **Juin 2025** — Titre réalisations : "Ce que l'on a construit ensemble" (correction de "Ce qu'on a").
- **Août 2026** — Déploiement prévu via GitHub → Cloudflare Pages. Taille logo nav ajustée à `78px` desktop / `62px` mobile. Padding nav réduit à `.6rem 3rem` pour compenser.
- **Août 2026** — Ajout de la démo "Club Arts Martiaux" (basée sur le vrai site PAM, anonymisée : coachs → Bruce Lee/Chuck Norris, club → "Club Arts Martiaux", adresse/téléphone génériques, logo conservé, 13 photos → placeholders gris variés, liens externes → alertes démo). Grille Réalisations passée de 2 à 3 cartes.
- **Août 2026** — Plusieurs itérations pour corriger l'intégration de la démo PAM (couleurs qui changeaient sur toute la landing, menu mobile qui ne se déclenchait pas, texte débordant sur grand écran, boutons bas de page qui fuyaient hors modale, page décentrée). Cause racine : conflits de variables CSS `:root`, règles `body{}` orphelines, `@media`/`vw` basés sur la fenêtre au lieu de la modale, `position:fixed` non contenu. Voir section "Principe d'intégration des démos" pour la méthode corrigée, à appliquer dès la prochaine démo.
- **Août 2026** — Icône carte "Club Arts Martiaux" changée de `swords` (épées croisées, ressemblait à une haltère en petit format) à `hand-fist` (poing fermé), plus clairement identifiable comme arts martiaux.
- **Août 2026** — Tentative de déploiement direct (upload statique `index.html` + `functions/`) sur ce qui s'est avéré être un **Worker** Cloudflare (pas Pages) : échec, "Les fonctions Pages ne sont pas prises en charge" sur ce produit. Un déploiement direct antérieur (sans doute sans `functions/`) fonctionnait ; après le dernier déploiement, `prutopia.net` renvoie une erreur 404 — cause exacte non confirmée, à investiguer en priorité à la prochaine session.
- **Août 2026** — Préparation complète d'un projet Worker propre en parallèle (`prutopia-worker/`) avec `wrangler.jsonc`, `src/index.js` (sert les assets + route `/api/contact` réécrite en handler Worker natif), `package.json`, `.gitignore`, `README.md`. Pas encore poussé sur un repo Git réel.
- **Août 2026** — Simplification du déploiement : abandon de l'approche GitHub Actions + token API en secret (complexité inutile) au profit de l'intégration Git native Cloudflare "Workers Builds" (Settings → Builds → Connect), qui fonctionne pour les Workers exactement comme la connexion Git de Cloudflare Pages utilisée pour PAM — connecter le repo une fois, chaque push redéploie automatiquement, zéro étape locale.
