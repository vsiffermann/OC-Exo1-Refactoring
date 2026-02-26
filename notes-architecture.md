# Etape 1

## Fichiers
pas de fichiers trop volumineux

## Code dupliqué
- appel HTTP identique dans les deux composants.
- calculs, manipulation des données, affichage presque identique dans les composants.
  -> logique métier dans les composants, difficile à maintenir. Remplacer par un service
- gestion d'erreur
  -> pattern de gestion d'erreur répété, pourrait être factorisé dans un service de gestion d'erreur.

## Appels HTTP
- dans le composant home.component.ts l.22
- dans le composant country.component.ts l.27

## Typage : utilisation excessive de any
- dans le composant home.component.ts
- dans le composant country.component.ts

## Code à supprimer 
- console.log laissés l.24 et l.35 dans home.component.ts

## Gestion des observables
- utilisation de subscribe sans unsubscribe, risque de fuite mémoire

## Données
- utilisation directe de private olympicUrl = './assets/mock/olympic.json'; 
    home.component.ts l.12
    country.component.ts l.13
  -> doit être remplacé, pas prêt pour une API

- données manipulées directement dans un composant, doit être remplacé par un service

## Manipulation directe de composants Chart
- buildPieChart dans home.component.ts l.41
- buildChart dans country.component.ts l.48
  manipulation directe du DOM, sans destion du cycle de vie, risque fuite mémoire 
  -> à utiliser au sein d'un service, avec gestion destroy


Absence de couche Service
Absence de couche Model
Fort couplage composant ↔ données

# Etape 2

## Schéma
src/app/
  ├── core/
  │   ├── services/
  │   │   └── olympic.service.ts (singleton)
  │   ├── models/
  │   │   ├── olympic.model.ts
  │   │   └── participation.model.ts
  │   ├── components/
  │   │    ├── header/
  │   │    │   ├── header.component.ts
  │   │    │   ├── header.component.html
  │   │    │   └── header.component.scss
  │   │    ├── medal-chart/
  │   │    │   ├── medal-chart.component.ts
  │   │    │   ├── medal-chart.component.html
  │   │    │   └── medal-chart.component.scss
  │   │    └── country-chart/
  │   │         ├── country-chart.component.ts
  │   │         ├── country-chart.component.html
  │   │         └── country-chart.component.scss
  │   └── app.constants.ts
  ├── pages/
  │   ├── home/
  │   │   ├── home.component.ts
  │   │   ├── home.component.html
  │   │   └── home.component.scss
  │   ├── country/
  │   │   ├── country.component.ts
  │   │   ├── country.component.html
  │   │   └── country.component.scss
  │   └── not-found/
  │       ├── not-found.component.ts
  │       ├── not-found.component.html
  │       └── not-found.component.scss
  ├── app.component.ts
  ├── app.component.html
  └── app.component.scss

## Détail propositions d'amélioration :

Centraliser la gestion des données dans olympic.service.ts :
- une seule source d'appels HTTP
- préparer l’intégration d’une API REST.

Supprimer totalement les any et utiliser les interfaces définies dans models/

Factoriser la gestion graphiques dans des composants (header, medal-chart, country-chart)

Clarifier l'architecture :
- pages/ → composants conteneurs
- components/ → composants UI (idéalement réutilisables)
- services/ → accès aux données

## Conclusion
La nouvelle architecture introduit une séparation claire entre présentation, logique métier et accès aux données.
L’ajout d’un service central (Singleton) permet de préparer l’application à une API REST réelle
L'ajout de composants réutilisables permet d’améliorer la maintenabilité.
Cette structure servira de base solide pour les prochaines implémentations.