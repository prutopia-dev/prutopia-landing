# Marque Pr'UtopIA — dossier à publier sur la landing

Tous les éléments de l'identité Pr'UtopIA, utilisables **dans n'importe quelle
teinte** et **à n'importe quelle taille**.

## Où le mettre

Copie le dossier `marque/` tel quel à la racine du site de la landing. Il
sera alors en ligne à **https://prutopia.net/marque/**. Claude Pr'UtopIA peut
le pousser sur le repo de la landing, après ton accord.

La page `index.html` porte la balise `noindex` : Google ne la référence pas,
mais toute personne qui a le lien peut l'ouvrir.

## Contenu

```
marque/
├─ index.html          ← la page kit : aperçu, teintes, export SVG ou PNG à la taille voulue
├─ LISEZMOI.md
├─ svg/                ← les fichiers maîtres (couleurs réglables, textes vectorisés)
│  ├─ logo-arbre.svg              l'arbre seul
│  ├─ logo-prutopia.svg           l'arbre et PR'UTOPIA
│  ├─ logo-designed-by.svg        l'arbre, DESIGNED BY et PR'UTOPIA
│  ├─ logo-horizontal.svg         l'arbre, PR'UTOPIA et « Conseil & solutions numériques »
│  ├─ entete-logo.svg             en-tête : logo, slogan, bande de 0 et de 1
│  ├─ entete-branche.svg          en-tête : la branche et son halo de 0 et de 1
│  ├─ entete-branche-degrade.svg  en-tête : la branche sur dégradé
│  ├─ entete-arbre.svg            en-tête : l'arbre à droite
│  └─ entete-arbre-degrade.svg    en-tête : l'arbre à droite, sur dégradé
├─ png/                ← les mêmes, en ambre, prêts à l'emploi (factures, profils…)
└─ signature/          ← la signature mail (voir signature/INSTALLATION.md)
```

## Trois façons de s'en servir

1. **Besoin d'une image tout de suite** (facture, profil, document) : prends
   le fichier voulu dans `png/`. Les logos ont un fond transparent.
2. **Une autre teinte ou une autre taille** : ouvre la page kit
   (`https://prutopia.net/marque/`, ou `index.html` d'un double-clic). Choisis
   une teinte prédéfinie ou tes propres couleurs, puis télécharge en SVG ou en
   PNG à la largeur voulue.
3. **Dans un site ou une appli** : intègre le SVG directement dans la page. Il
   prend alors les couleurs du site par cinq variables CSS :

| Variable | Ce qu'elle colore | Valeur par défaut |
|---|---|---|
| `--prutopia-principal` | l'arbre, les chiffres, « PR'UTOP » | `#C17A2A` ambre |
| `--prutopia-fonce` | « IA », « DESIGNED BY » | `#8B5A1A` |
| `--prutopia-clair` | les fonds ambrés clairs | `#FAEEDA` |
| `--prutopia-fond` | le crème | `#FBF7F0` |
| `--prutopia-doux` | le slogan | `#7A7468` |

```css
.mon-site {
  --prutopia-principal: var(--accent);
  --prutopia-fonce: var(--texte);
}
```

Utilisé en `<img src="…svg">`, un fichier reste en ambre : le CSS de la page
n'entre pas dans une image. Pour une autre teinte dans ce cas, exporte-la
depuis la page kit.

## Bon à savoir

- **Textes vectorisés** : PR'UTOPIA, DESIGNED BY et le slogan sont des formes,
  pas du texte. Les fichiers s'affichent pareil partout, sans la police DM Sans.
  Les 0 et les 1 viennent de la police DejaVu Sans Mono Bold.
- **Fidélité** : les SVG ont été comparés aux images validées ensemble. L'écart
  moyen est inférieur à 2 % sur chaque en-tête.
- **Les deux en-têtes « branche »** utilisent un masque flou pour le halo de 0 et
  de 1. Les navigateurs, Inkscape et Illustrator l'affichent, mais certains
  outils en ligne (Canva, par exemple) peuvent l'ignorer. Dans ce cas, prends
  le PNG.
- **Le dessin de l'arbre** vient du kit v3 (`Identité PRUTOPIA/prutopia_kit_v3.html`)
  : il n'a pas été retouché.
