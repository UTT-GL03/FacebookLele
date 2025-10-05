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

---

Ces scénarios seront utilisés et analysés avec **GreenIT Analysis** pour comparer :
- la consommation énergétique des différentes plateformes,  
- les effets du contenu chargé (texte, image, vidéo),  
- et l’impact de fonctionnalités interactives comme la messagerie ou les Reels.
