# Fichiers
pas de fichiers trop volumineux

# Code dupliqué
- appel HTTP identique dans les deux composants.
- calculs, manipulation des données, affichage presque identique dans les composants.
  -> logique métier dans les composants, difficile à maintenir. Remplacer par un service
- gestion d'erreur
  -> pattern de gestion d'erreur répété, pourrait être factorisé dans un service de gestion d'erreur.

# Appels HTTP
- dans le composant home.component.ts l.22
- dans le composant country.component.ts l.27

# Typage : utilisation excessive de any
- dans le composant home.component.ts
- dans le composant country.component.ts

# Code à supprimer 
- console.log laissés l.24 et l.35 dans home.component.ts

# Gestion des observables
- utilisation de subscribe sans unsubscribe, risque de fuite mémoire

# Données
- utilisation directe de private olympicUrl = './assets/mock/olympic.json'; 
    home.component.ts l.12
    country.component.ts l.13
  -> doit être remplacé, pas prêt pour une API

- données manipulées directement dans un composant, doit être remplacé par un service

# Manipulation directe de composants Chart
- buildPieChart dans home.component.ts l.41
- buildChart dans country.component.ts l.48
  manipulation directe du DOM, sans destion du cycle de vie, risque fuite mémoire 
  -> à utiliser au sein d'un service, avec gestion destroy


Absence de couche Service
Absence de couche Model
Fort couplage composant ↔ données