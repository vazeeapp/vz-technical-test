# vz-technical-test

## Introduction

Notre marque Eazee Link propose un ensemble de services à destination de l'univers CHR (café, hotel, restaurants).

Un des produits que l'on propose permet l'affichage d'une **carte menu interactive** pour les consommateurs sur les points de vente.

Cette application web permet entre autre, à l'utilisateur de naviguer à travers différentes catégories du menu de l'établissement, de présenter ses produits et leurs informations associées (description, prix, labels de prix). L'affichage de la carte est sous forme d'arborescence où chaque catégorie peut s'ouvrir et afficher son contenu. Les catégories peuvent avoir plusieurs niveaux de profondeur et avoir elles même des sous catégories.

## But

Le but de ce test technique sera de construire une version simplifiée d'un menu. La démarche attendue doit être orientée "données" et le style aura peu d'importance. Ce test n'est pas éliminatoire. Il vise à tester les capacités du candidat et son organisation face à une problématique nouvelle.

## Fonctionnement

Pour chaque exercice créer une branche à part:

```bash
git checkout -b feat/exercice-1
```

Les exercices sont inter dépendants et leur difficulté incrémentale. Les branches devront être dépendantes entre elles.

### Exercice 1: Afficher une catégorie

Soit une entité `category` exposée par une API dont l'interface est la suivante:

```ts
interface Category {
  categoryId: number;
  parentId: number | null;
  description: string;
  order: number;
  enabled: boolean;
}
```

Créer un composant présentationnel `Category` qui accepte en paramètre une structure de donnée de type `API.Category` et qui affiche les informations suivantes:

- un bouton qui contient la description
- un indicateur d'état d'ouverture de la catégorie (l'indicateur est fourni dans le dossier de l'exercice)
- si la propriété `enabled` est à `false` modifier le style du bouton, la valeur de sa propriété `opacity` doit être égal à `0.5`

Ce composant devra gérer un changement d'état quand on clique sur le bouton et afficher ses enfants si la propriété `isOpen` est à `true`:

- les enfants seront affichés en dessous du bouton

### Exercice 2: Implémenter un custom hook

Soit la structure de donnée suivante:

```ts
interface PriceType {
  price1: number;
  price2: number | null;
  price3: number | null;
  price4: number | null;
  price5: number | null;
  price1Label: string | null;
  price2Label: string | null;
  price3Label: string | null;
  price4Label: string | null;
  price5Label: string | null;
}
```

Créer un custom hook `usePrices` qui permet de filtrer les prix. On gardera seulement les prix dont la valeur `price{x}` est définie.

### Exercice 3: Afficher un produit

Soit une entité `Product` exposée par une API dont l'interface est la suivante:

```ts
interface Product {
  productId: number;
  categoryId: number;
  label: string;
  description: string | null;
  enabled: boolean;
  order: number;
  price1: number;
  price2: number | null;
  price3: number | null;
  price4: number | null;
  price5: number | null;
  price1Label: string | null;
  price2Label: string | null;
  price3Label: string | null;
  price4Label: string | null;
  price5Label: string | null;
  pictogramUrl: string | null;
}
```

Créer un composant présentationnel `Product` qui accepte en paramètre une structure de donnée de type `API.Product` et qui affiche les informations suivantes :

- le label
- le pictogramme
- la description

On utilisera `usePrices` pour obtenir les prix sous forme de tableau. On bouclera sur `prices` et on utilisera pour chaque élément le composant Price pour afficher un prix.

### Exercice 4: Afficher un menu

Dans un terminal taper la commande suivante à la racine du projet et attendre la fin de l'execution du script:

`npm run api`

Récupérer la resource `menu` à l'aide de `fetch`, le type de la réponse est le suivant:

```ts
interface Menu {
  menuId: number;
  categories: Category[];
  products: Product[];
}
```

Utiliser les composants fait dans les exercices précédents et afficher le menu !
