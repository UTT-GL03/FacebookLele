# FacebookLele
# Réduction de l’impact écologique d’un réseau social de communication interpersonnelle

## Choix du sujet

L’utilisation quotidienne des réseaux sociaux représente aujourd’hui une part considérable du temps d’écran de nombreux utilisateurs, plus de 60% de la population mondiale en 2023 les utilisait [(source : Libération)](https://www.liberation.fr/lifestyle/plus-de-60-de-la-population-mondiale-utilise-les-reseaux-sociaux-20230727_JLXQN6EVX5GBVLO2CI6VZY4YLM/).  
Pour notre part, la consultation de **Facebook** (ou de services similaires) sur smartphone et ordinateur portable représente environ **3 à 4 heures par semaine**.  
Il nous a donc semblé pertinent de réfléchir à la manière de **concevoir un réseau social plus sobre et plus respectueux de l’environnement**.

Au-delà de nos cas personnels, **Facebook compte plus de 3 milliards d’utilisateurs actifs mensuels** [(source : Meta, 2024 via FranceInfo)](https://www.franceinfo.fr/internet/reseaux-sociaux/facebook/de-facebook-a-meta-cinq-chiffres-qui-montrent-comment-le-reseau-de-mark-zuckerberg-est-devenu-un-geant-economique_6325794.html).  
En **France**, plus de **75% de la population** utilise au moins un réseau social chaque jour [(source : We Are Social)](https://wearesocial.com/fr/blog/2025/02/digital-report-france-2025-%F0%9F%87%AB%F0%9F%87%B7/).  

L’impact environnemental d’une telle infrastructure numérique est colossal :  
- serveurs,  
- transferts de données,  
- affichage d’images et de vidéos en continu,  
- notifications,  
- stockage massif.  

Autant d’éléments qu’il est crucial d’optimiser et d'étudier.  

---

## Utilité sociale

Les réseaux sociaux ont profondément transformé notre manière de **communiquer**, de **s’informer** et de **maintenir nos liens sociaux**.  
Ils jouent un rôle important dans :
- la diffusion d’informations,  
- la mobilisation citoyenne,  
- le maintien des relations à distance,  
- la création de communautés d’intérêts.  

Cependant, leur **utilité sociale** ne doit pas masquer certaines dérives :  
- désinformation,  
- addiction,  
- atteinte à la vie privée,  
- surconsommation numérique.  

Le défi est donc de **préserver les fonctions sociales essentielles** comme la communication, partage, entraide, expression, tout en **réduisant l’impact environnemental** et les **effets négatifs sur les comportements**.  

---

## Effets de la numérisation

La généralisation des réseaux sociaux a entraîné une **explosion du trafic Internet mondial**.  
En 2025, le **streaming vidéo**, les **photos** et les **échanges de données sociales** représentaient presque **la moitié du trafic global** [(source : ARCEP)](https://www.arcep.fr/actualites/actualites-et-communiques/detail/n/numerique-040725.html).  

Le poids écologique de ces usages est loin d’être négligeable :  
- Chaque minute passée sur un réseau social génère **plusieurs grammes d’équivalent CO₂**.  
- L’**hébergement des données**, les **serveurs de recommandation** et le **chargement permanent** des flux d’images/vidéos sont particulièrement énergivores.  
- Les **notifications** et **algorithmes d’engagement** favorisent une **augmentation du temps d’écran**, ce qui accentue un impact global **non nécessaire**.  


Nous serons particulièrement attentifs à ces différents points lors de la conception et du prototypage :  
- **Éviter la surconsommation de données**  
- **Encourager une utilisation raisonnée et éthique**  
- **Réduire la charge énergétique liée au stockage et au calcul côté serveur**  


Notre ambition n’est pas simplement de “refaire Facebook”, mais de **proposer une alternative plus sobre, plus éthique et plus durable**, sans sacrifier la fonction première : **relier les gens**.  

---

# Scénarios d’usage et impacts

Nous allons maintenant passer à l'étude de scénarios pour avoir une base d'étude, nous allons faire différents scénarios réalistes au maximum. L'utilisateur consulte son réseau social plusieurs fois par jours, à tout moment lorsqu'il a une petite pause. 
Ces scénarios cherchent à représenter **des usages typiques** permettant d’évaluer l’impact environnemental du service numérique.  

Chaque scénario correspond à **une suite d’actions réalistes**, effectuées sur le site principal ou sur des fonctionnalités populaires comme les Reels, les groupes ou la messagerie.  
Ils permettront de comparer les impacts de différentes plateformes sociales (Facebook, Instagram, X/Twitter) dans des conditions d’usage similaires.

---

## Application principale : Facebook

### Scénario 1 — Consultation de contenus courts et groupes communautaires

**Pages concernées :**  
- Main website : (https://www.facebook.com/)  
- Reels page : (https://www.facebook.com/reel/)  
- Groups feed : (https://www.facebook.com/groups/feed/)

**Description du scénario :**
1. L’utilisateur ouvre Facebook via un favori (sans passer par un moteur de recherche).  
2. Il consulte son fil d’actualité principal pendant quelques minutes (scroll continu).  
3. Il clique sur l’onglet **Reels**, regarde deux vidéos de quelques secondes chacune.  
4. Il revient à la page principale, puis se rend sur la section **Groupes**.  
5. Il parcourt les publications de plusieurs groupes auxquels il est abonné.  

Ce scénario permet d’observer **l’impact du défilement de flux dynamiques** et **du chargement de contenus vidéo courts**.

---

### Scénario 2 — Navigation personnelle et messagerie instantanée

**Pages concernées :**  
- Main website : (https://www.facebook.com/)
- Personal page : (https://www.facebook.com/remi.tourneau.9/)
- Chatbox page : (https://www.facebook.com/messages)

**Description du scénario :**
1. L’utilisateur ouvre Facebook via un favori.  
2. Il visite son **profil personnel** pour vérifier ou modifier une publication.  
3. Il ouvre ensuite la **messagerie instantanée**, échange 1 ou 2 messages textuels.
4. Il revient à la page d’accueil avant de fermer la session.  

Ce scénario vise à mesurer l’impact des **interactions sociales directes** et de la **messagerie en ligne**.

---

### Scénario 3 — Publication et interaction sociale

**Pages concernées :**  
- Main website : (https://www.facebook.com/)  
- Create post : (https://www.facebook.com/compose/post)  
- Notifications page : (https://www.facebook.com/notifications)  

**Description du scénario :**
1. L’utilisateur ouvre Facebook via un favori.    
2. Il décide de **publier une photo** accompagnée d’un court texte.  
3. Après publication, il clique sur une **publication d’un ami**, y laisse un commentaire, puis quitte la plateforme.  

Ce scénario permet d’analyser l’impact énergétique lié à :
- l’**envoi (upload)** d’un média (photo ou vidéo),  
- et les **interactions actives** (commentaires, réactions, notifications).  

Il illustre un **usage participatif** typique d’un réseau social, plus énergivore que la simple consultation passive.

Ces scénarios seront utilisés et analysés avec **GreenIT Analysis** pour comparer :
- la consommation énergétique des différentes plateformes,  
- les effets du contenu chargé (texte, image, vidéo),  
- et l’impact de fonctionnalités interactives comme la messagerie ou les Reels.

---
# Analyse environnementale de Facebook — GreenIT

### Pourquoi GreenIT Analysis ?
Le service EcoIndex.fr, bien qu’efficace pour mesurer la performance environnementale des pages web, n’est pas compatible avec Facebook.  
En effet, Facebook bloque les robots d’analyse automatiques, empêchant toute collecte directe des données nécessaires (nombre de requêtes, taille des pages, etc.).

Pour contourner cette limite, nous avons utilisé l’extension navigateur GreenIT Analysis, qui permet de :
- réaliser des mesures manuelles en conditions réelles d’usage,  
- capturer les données de performance environnementale d’une page visitée,  
- et obtenir une estimation de l’impact carbone et hydrique liée à l’affichage.

Cette méthode garantit des résultats représentatifs des scénarios définis, tout en respectant les contraintes techniques imposées par Facebook.

L'EcoIndex d'une page (de A à G) est calculé (sources : EcoIndex, Octo, GreenIT) en fonction du positionnement de cette page parmi les pages mondiales concernant :

 - le nombre de requêtes lancées,
 - le poids des téléchargements,
 - le nombre d'éléments du document.

## Résultats obtenus (via GreenIT Analysis)

| Scénario | Moyenne requêtes | Taille moyenne (Ko) | EcoIndex | Note | Émissions GES (gCO₂e) | Eau (cl) | Détail |
|-----------|------------------|---------------------|-----------|--------|-----------------------|----------|-----------|
| 1 — Consultation et Reels | ~600 | 25 000–50 000 | 4.7 | G 🟥 | 2.9 | 4.3 |[Voir le fichier](./data/Scénario%201%20GreenIT.csv) |
| 2 — Navigation & Messagerie | ~250 | 3 000–9 000 | 9.5 | F-G 🟪 | 2.8 | 4.2 |[Voir le fichier](./data/Scénario%202%20GreenIT.csv) |
| 3 — Publication & Interaction | ~700 | 7 000–35 000 | 5.0 | G 🟥 | 2.9 | 4.4 |[Voir le fichier](./data/Scénario%203%20GreenIT.csv) |

## Analyse et interprétation

Les résultats montrent des différences notables selon le type d’usage :

- 🔴 **Scénario 1** (Reels et groupes) est le plus énergivore : les vidéos courtes entraînent de lourds téléchargements (>30 Mo) et un grand nombre de requêtes (>900).
- 🟠 **Scénario 3** (publication et interactions) présente également un impact important, principalement lié à l’upload d’images et au rechargement du flux.
- 🟡 **Scénario 2** (messagerie) est le moins impactant, les échanges textuels générant moins de transferts de données.

Globalement, Facebook obtient une note moyenne entre F et G, ce qui indique une faible performance environnementale.  
Les pages les plus lourdes contiennent de nombreux scripts, traqueurs et contenus vidéo, qui augmentent à la fois le poids des pages et la consommation d’énergie lors du rendu.

## Comparaison qualitative avec d’autres réseaux sociaux

| Plateforme | Type de contenu dominant | Impact estimé | Commentaire |
|-------------|--------------------------|----------------|--------------|
| **Facebook** | Mix texte, images, vidéos | 🔴 Élevé (E–G) | Nombreuses requêtes, scripts et traqueurs |
| **Instagram** | Photos et Reels | 🔴 Très élevé (F–G) | Contenu vidéo et image très lourd |
| **X / Twitter** | Texte + images légères | 🟠 Moyen (C–D) | Interface plus légère, peu de vidéos |

---

# Modèle économique

## Introduction

Le modèle économique d’un service numérique influence directement son impact environnemental, sa viabilité et sa relation avec les utilisateurs.  
Dans le cas d’un réseau social, ces choix conditionnent non seulement la consommation de ressources techniques (hébergement, stockage, calcul), mais aussi la manière dont les données personnelles sont traitées.  
Notre objectif est de concevoir un réseau social **sobre**, **éthique** et **respectueux de l’identité numérique**, en rupture avec les pratiques dominantes du secteur.

---

## Analyse des modèles existants

| Service | Type de financement principal | Données collectées | Caractéristiques principales |
|----------|-------------------------------|--------------------|------------------------------|
| **Facebook / Instagram (Meta)** | Publicité ciblée (régie intégrée) | Très importante (profils, interactions, comportements) | Gratuit, dépend fortement du suivi et de la personnalisation algorithmique |
| **X (ex-Twitter)** | Publicité ciblée + Abonnement “Premium” | Importante | Contenu promu, options supplémentaires pour abonnés |
| **LinkedIn** | Publicité ciblée + Services payants | Importante (professionnelle) | Contenu sponsorisé, outils premium |
| **Mastodon** | Dons / financement participatif | Aucune | Gratuit, sans publicité, décentralisé |
| **Diaspora*** | Dons / auto-hébergement | Aucune | Gratuit, sans publicité, contrôle local des données |

**Tableau 1 : Comparaison synthétique des modèles économiques de réseaux sociaux.**

Deux tendances majeures se dégagent :

1. **Le modèle publicitaire basé sur la collecte de données**  
   - Financement par la vente d’espaces publicitaires ciblés.  
   - Gratuité apparente pour l’utilisateur, mais forte exploitation des données personnelles.  
   - Très énergivore : collecte, stockage et analyse de données massives.

2. **Le modèle participatif ou communautaire**  
   - Financement par dons, hébergement mutualisé ou services complémentaires.  
   - Aucun suivi ni publicité, mais dépendance à une base d’utilisateurs engagés.  
   - Modèle plus transparent, mais souvent limité en visibilité et en revenus.

---

## Modèle économique proposé

Notre réseau social s’inscrit dans une logique de **sobriété technologique** et de **transparence économique**.  
Il repose sur quatre principes :

### 1. Aucune collecte ni revente de données
- Aucune donnée personnelle n’est exploitée à des fins commerciales.  
- Pas de cookies tiers, ni de traçage, ni de profilage.  
- Cette approche réduit la charge serveur et renforce la confiance des utilisateurs.

### 2. Publicités simples et non ciblées
- Publicités **statiques** et **non intrusives**.  
- Diffusion aléatoire ou contextuelle (jamais comportementale).  
- Pas de scripts externes, pas d’appels à des services de tracking.  
- Objectif : assurer un revenu de base sans compromettre la confidentialité.

### 3. Accès gratuit pour tous
- Le service est **entièrement gratuit** afin de favoriser l’accessibilité et la participation.  
- La publicité intégrée sert uniquement à financer l’hébergement, la maintenance et le développement.

### 4. Financement complémentaire par dons
- Les utilisateurs peuvent soutenir le projet par des **dons volontaires** (mensuels ou ponctuels).  
- Ce financement communautaire renforce l’indépendance du projet vis-à-vis des régies publicitaires.

---

## Estimation des sources de revenus

| Source de revenu | Montant unitaire estimé | Volume nécessaire pour financer un poste à plein temps* |
|------------------|--------------------------|----------------------------------------------------------|
| Publicité non ciblée (régie interne) | ~0,001 € / affichage | ~3 000 000 affichages/mois |
| Don volontaire (moyenne) | 5 € / don | ~480 dons/an |

\* Estimations basées sur un salaire brut annuel de 28 000 €.

**Tableau 2 : Simulation simplifiée des revenus potentiels.**

Sources :
https://www.statista.com/topics/5063/online-advertising-metrics/?srsltid=AfmBOopj3k6h5mKiE7X7YOaHoswBVkd_kfaQgUihLxLwHkek8PPbNQgj#statisticChapter
https://joinmastodon.org/reports/Mastodon%20Annual%20Report%202023.pdf

---

## Synthèse

Le modèle retenu se caractérise par :

- **Indépendance vis-à-vis des régies publicitaires externes** ;  
- **Simplicité technique et sobriété énergétique** ;  
- **Respect total de la vie privée des utilisateurs** ;  
- **Transparence du financement** (publicités internes + dons).  

Ce modèle se veut durable, équilibré et compatible avec une approche plus responsable du numérique.  
Il permet de maintenir un service social en ligne sans exploitation des données ni recours à des infrastructures lourdes ou opaques.

---

