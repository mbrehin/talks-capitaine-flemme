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

Exemples :

- relance des tests ;
- non régression de la couverture de tests

## Côté serveur

Automatisation de la chaine de livraison avec GitLab auto devops.

## Lexique

Les valeurs entre crochets tentent d'indiquer l'expression phonétique des termes désignés.

- VSCode (VS code) : éditeur de code ;
- Extensions VSCode : outils complémentaires installable et configurable dans l'éditeur ;
- Lint [/lɪnt/] ou linting [ˈ/lɪntɪŋ/] : analyse automatisée du code de manière statique (texte) ;
- Linter [/ˈlɪntə/] : outil de gestion du "lint" ;
- Formater [/ˈfɔːmætə/] : remet en forme le code automatiquement ;
- ESLint : outil de lint dédié à JavaScript ;
- npm (prononcer distinctement les lettres) ou "Node Package Manager" : gestionnaire de dépendances JavaScript ;
- package.json [/ˈpækɪdʒ/ /ˈdʒeɪˌsən/] : fichier décrivant les dépendances nécessaires et à installer dans un projet ;
- dev dependency [/dɪˈpɛndənsɪ/] : dépendances utiles uniquement en environnement de développement (ne seront pas utilisées en production) ;
- Jest [/dʒɛst/] : outils de gestion des tests en JavaScript, autrement appelé "harnais" de test ;
- a11y pour accessibility (mais je ne sais pas si c'est bien utile de le préciser ici 😀) ;
- axe : outil de test d'accessibilité ;
- puppeteer [/ˌpʌpɪˈtɪə/] : outil pour simuler le navigateur web sans fenêtre, utile pour les tests ;
- Git [/ɡɪt/] : système permettant de gérer les versions successives des sources/du code d'un projet ;
- Historique Git : histoire du projet (chaque ligne désigne une version par une clé technique et une première ligne de description) ;
- commit [/kəˈmɪt/](Git) : désigne aussi bien la commande que son résultat permettant d'ajouter une version à l'historique Git ;
- push [/pʊʃ/](Git) : mécanisme d'envoi, de partage des commits ;
- Git hooks [/hʊks/] : scripts pouvant être injectés autours de certains évènements de gestion d'historique Git ;
- pre-commit : hook s’exécutant avant la procédure de commit ;
- commit-msg : hook s’exécutant une fois le message saisie du commit renseigné par le développeur ;
- pre-push : hook s’exécutant avant le partage/l'envoi des nouvelles version du développeur vers le serveur ;
- husky [/ˈhʌskɪ/] : librairie JavaScript gérant les hooks de manière centralisée depuis la configuration (fichier "package.json") ;
- commit-lint : outil de vérification des messages de commit ;
- conventional changelog [/kənˈvɛnʃənəl/ /tʃeɪndʒlɒɡ/] : convention/norme attendue dans la rédaction des messages de commit ;
- commitizen [/kəˈmɪtɪzən/] : assistant en ligne de commande pour saisir les différentes parties attendues dans un message de commit ;
- SAST ou Static Analysis Security Testing : terme technique désignant un sur-ensemble du "lint" ;
- DAST ou Dynamic Analysis Security Testing : analyse automatisée du code autour de son exécution ;
- GitLab : système de serveur permettant de stocker l'historique Git ;
- GitHub : concurrent de GitLab ;
- auto devops [/dɪˈvɒps/] : automatisation de l'analyse et du déploiement côté serveur, proposé uniquement par GitLab ;
- build [/bɪld/] : préparation et optimisation des éléments nécessaires à la production ;
- staging [/ˈsteɪdʒɪŋ/] : environnement de recette ou pré-production (utiles généralement pour des tests en situation réelle) ;
- monitoring [/ˈmɒnɪtərɪŋ/] : analyse des problèmes sur une application en production (erreurs, lenteurs, etc.).
