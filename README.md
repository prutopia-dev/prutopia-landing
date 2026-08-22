# Pr'Utopia Landing — Worker

## Structure

```
prutopia-worker/
├── public/
│   └── index.html          ← landing complète (démos boulangerie + PAM intégrées)
├── src/
│   └── index.js             ← Worker : sert public/ + route /api/contact
├── wrangler.jsonc             ← config Cloudflare Worker
└── package.json
```

## Déploiement — 100% via GitHub, aucune étape locale

Cloudflare propose une intégration Git native pour les Workers ("Workers Builds"),
comme pour Pages : on connecte le repo une seule fois, et chaque push déploie
automatiquement. Pas de `npm install`, pas de `wrangler login`, pas de token API
à gérer en secret GitHub.

### 1. Pousser ce dossier sur un repo GitHub
Créer un repo (ex. `prutopia-landing`) et y pousser tout ce dossier tel quel.

### 2. Connecter le repo au Worker dans le dashboard Cloudflare

**Si le Worker `prutopia-landing` existe déjà** (créé précédemment via upload direct) :
- Workers & Pages → sélectionner le Worker → **Settings → Builds → Connect**
- Choisir le repo GitHub `prutopia-landing`
- Sauvegarder

**Sinon, en créer un nouveau connecté directement au repo :**
- Workers & Pages → **Create application → Import a repository**
- Sélectionner le compte GitHub, puis le repo `prutopia-landing`
- Cloudflare détecte automatiquement `wrangler.jsonc` → **Save and Deploy**

À partir de là, chaque `git push` sur la branche principale redéploie le site
automatiquement — exactement le même fonctionnement que le projet PAM.

### 3. Attacher le domaine personnalisé (une seule fois)
Dashboard → le Worker → **Settings → Domains & Routes → Add Custom Domain** → `prutopia.net`

## Formulaire de contact

La route `/api/contact` (dans `src/index.js`) envoie un email via MailChannels vers
`prutopia.conseil@gmail.com`. Actuellement **non utilisée** par la landing (le
formulaire a été remplacé par un simple lien `mailto:`), mais prête si on veut
la réactiver plus tard.

**Avant de la réactiver**, ajouter ces enregistrements DNS sur `prutopia.net` :
```
TXT  @              v=spf1 include:relay.mailchannels.net ~all
TXT  _mailchannels   v=mc1 cfid=TON-SOUS-DOMAINE.workers.dev
```
