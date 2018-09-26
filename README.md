# Talk "Capitaine flemme" • Conférence ParisWeb 2018

Comment automatiser et améliorer l'expérience de développement et le travail produit avec le moins d'effort possible ?

## Autour de l'édition des fichiers

- Automatiser certains mécanismes lors du développement, au sein de l'éditeur
  - SAST / Lint
  - Formatage
- Partager ces mécanismes au sein même du projet
  - installation simplifiée avec npm et le `package.json` du projet (_dev dependencies_)
  - recommandations d'extensions (shared extensions)
  - configuration de ces extension et de l'éditeur (shared settings)

## Autour du partage des sources

Grâce aux hooks Git.

On automatise la mise en œuvre avec npm et ses "dev dependencies" (`package.json`), en installant _Husky_, surcouche aux hooks Git.

### Avant le commit

Prévenir d'oublis ou de défauts des mécanismes précédents, avant la création du commit (hook de `pre-commit`)

- repasse du lint + formatage automatique (module npm `precise-commit`) ;
- branche courante interdite (`master`) ;
- arbitrages mal gérés ;
- mots clés interdits ;
- vulnérabilités critiques ;
- …

### Au moment du commit

Fiabiliser la saisie du commit à sa création (hook de `commit-msg`).
Ceci nécessite l'utilisation d'un standard à respecter pour les messages de commit (ici `conventional-changelog`).

- en amont, avec un assistant type `git commitizen` (`git cz` au lieu de `git commit`) ;
- en aval, avec la vérification de la saisie (message), type `commit-lint`.

### Au moment du partage

Pour fiabiliser le lot de développements/commits qui va être partagé.

- relance des tests ;
- non régression de la couverture de tests
