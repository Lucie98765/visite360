-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jan 30, 2020 at 06:51 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `visite_360`
--

-- --------------------------------------------------------

--
-- Table structure for table `Couleur`
--

CREATE TABLE `Couleur` (
  `id_couleur` int(11) NOT NULL,
  `couleur` varchar(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Couleur`
--

INSERT INTO `Couleur` (`id_couleur`, `couleur`) VALUES
(1, '#28e43f');

-- --------------------------------------------------------

--
-- Table structure for table `Onglet`
--

CREATE TABLE `Onglet` (
  `id_onglet` int(11) NOT NULL,
  `nom_onglet` varchar(30) NOT NULL,
  `titre_onglet` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Onglet`
--

INSERT INTO `Onglet` (`id_onglet`, `nom_onglet`, `titre_onglet`) VALUES
(1, 'theatre', 'Théâtre'),
(2, 'piscine', 'Piscine'),
(3, 'grenier', 'Grenier'),
(4, 'auvent', 'Auvent'),
(5, 'mediatheque', 'Médiathèque'),
(6, 'ruches', 'Ruches'),
(7, 'halle', 'Halle'),
(8, 'abreuvoir', 'Abreuvoir'),
(9, 'ecuries', 'Écuries'),
(10, 'studio', 'Studio'),
(11, 'arriere_scene', 'Arrière-Scène'),
(12, 'accueil', 'Accueil'),
(13, 'centre_art', 'Centre d\'art'),
(14, 'relais', 'Relais'),
(15, 'jardins', 'Jardins'),
(16, 'caravanserail', 'Caravanserail'),
(17, 'cinema', 'Cinéma');

-- --------------------------------------------------------

--
-- Table structure for table `Page`
--

CREATE TABLE `Page` (
  `id_page` int(11) NOT NULL,
  `titre_page` varchar(20) NOT NULL,
  `texte_page` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Page`
--

INSERT INTO `Page` (`id_page`, `titre_page`, `texte_page`) VALUES
(1, 'Visite 360<br>', 'La Ferme du Buisson est un lieu de patrimoine et d\'innovation unique en son genre. Espaces de plein air, salles de spectacles, cinéma et centre d’art contemporain forment aujourd\'hui un centre de fabrique et de diffusion de l’art, un point de convergence entre les publics et la création. Par ici la visite ! <br>');

-- --------------------------------------------------------

--
-- Table structure for table `Photo`
--

CREATE TABLE `Photo` (
  `id_photo` int(11) NOT NULL,
  `photo` varchar(100) NOT NULL,
  `id_onglet` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Photo`
--

INSERT INTO `Photo` (`id_photo`, `photo`, `id_onglet`) VALUES
(1, 'accueil1.jpg', 12),
(2, 'caravanserail.jpg', 16),
(3, 'cinema1.jpg', 17),
(6, 'ecuries.jpg', 9),
(7, 'halle1.jpg', 7),
(8, 'halle2.jpg', 7),
(9, 'halle3.jpg', 7),
(10, 'halle4.jpg', 7),
(11, 'halle5.jpg', 7),
(12, 'halle6.jpg', 7),
(13, 'halle7.jpg', 7),
(14, 'halle8.jpg', 7),
(15, 'halle9.jpg', 7),
(16, 'halle10.jpg', 7),
(17, 'halle11.jpg', 7),
(18, 'piscine_grenier.jpg', 2),
(19, 'piscine_grenier.jpg', 3),
(20, 'ruches.jpg', 6),
(21, 'theatre1.jpg', 1),
(22, 'theatre2.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `Sous_titre`
--

CREATE TABLE `Sous_titre` (
  `id_sous_titre` int(11) NOT NULL,
  `texte_sous_titre` text NOT NULL,
  `id_onglet` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Sous_titre`
--

INSERT INTO `Sous_titre` (`id_sous_titre`, `texte_sous_titre`, `id_onglet`) VALUES
(1, 'Le Théâtre, emblème du lieu et ancienne grange-étable, représente le plus grand volume du site, tant côté spectateurs que côté scène, et offre l’un des plus grands plateaux franciliens.', 1),
(2, '« Désolé j\'ai piscine ! » C\'est ce qu\'on pourrait dire lorsqu\'on va en réunion. Cette pièce, entre la maison du gardien et les locaux du personnel, doit son nom à son architecture qui lui donne une véritable allure de bassin.', 2),
(3, 'Espace secret, impossible à deviner pour les nouveaux visiteurs, cette petite salle qui fait face à la Médiathèque offre aux spectateurs une intimité rare avec les artistes.', 3),
(4, 'Espace extérieur couvert, l’Auvent est un endroit de passage, prétexte à de nombreux moments artistiques atypiques et éphémères. Sa charpente métallique, autrefois dédiée à abriter des véhicules agricoles, sert maintenant de garage à vélo.', 4),
(5, 'Depuis 2016, la Ferme du Buisson a installé des Ruches dans ses Jardins, mais pour quoi faire ? Venez dire bonjour à nos abeilles, goûter le miel made in Ferme et vous initier à l\'apiculture.', 6),
(6, 'Le caractère brut et industriel de la Halle en fait sa singularité et son intérêt. C’est un espace entièrement modulable qui offre des possibilités illimitées en termes de scénographie.', 7),
(7, '[b] L\'Abreuvoir [/b] , l\'un des espaces les plus anciens du site, garde un caractère brut et originel avec ses murs en briques rouges. Il abreuve maintenant les plus grandes soifs de musiques et de fêtes, mais offre aussi un bel écrin pour les débats ou autres conférences gesticulées.', 8),
(8, 'Les Écuries, au fond de la Ferme du Buisson, peuvent cacher bien des choses. Les box en enfilade étaient à l\'époque dévolus aux animaux.', 9),
(10, 'Le Studio est une petite scène de répétitions, mais aussi de représentations, entre les loges et au-dessus des ateliers. Cet espace permet une vraie proximité entre les artistes et les spectateurs.', 10),
(11, 'Espace confiné entre la scène du Théâtre et les ateliers, en dessous du Studio, cette salle secrète, intimiste, presque imprévue, prévoit pourtant de s’ouvrir pour des moments originaux.', 11),
(12, 'Bienvenue à la Ferme du Buisson ! C\'est ici que se trouve l\'Accueil pour les spectateurs ou tout autre visiteur, et la billetterie des spectacles la plupart du temps. Dans ce pavillon loge également l\'équipe administrative.', 12),
(13, 'Partie intégrante du projet pluridisciplinaire de la Ferme du Buisson, le centre d\'art contemporain est engagé depuis 1991 dans un soutien actif à la création à travers un travail de production, de diffusion et d’édition. Mettant l\'accent sur les artistes émergents ou les artistes internationaux peu représentés en France, le centre d\'art est spécialisé dans la performance, le dialogue entre les disciplines et les formats d\'exposition expérimentaux.', 13),
(14, 'Dans ses murs chargés d’histoire, entouré du Cinéma et du Centre d’art, Le Relais du Buisson offre l’occasion de moments gourmands et privilégiés. Il propose une formule qui allie repas et cinéma.', 14),
(15, 'La Ferme du Buisson est dedans-dehors. Les espaces extérieurs sur le site sont aussi un théâtre où aucun recoin n\'est à l’abri de la curiosité. Entre les ruches, le potager partagé, les poules et les hot pots, les jardins sont aussi un lieu de détente.', 15),
(16, 'Chapiteau permanent dessiné en 2003 par Patrick Bouchain, le Caravansérail est fait de bois et de toiles, déploie un grand parquet et cache des portes relevables pour du semi-plein air. Un lieu de rassemblement par excellence.', 16),
(17, 'Le Cinéma, c’est près de 250 films et 3000 séances chaque année. Classé \"Art et essai\" et labellisé \"Recherche & découverte\", \"Jeune public\" et \"Patrimoine & répertoire\", il offre des films venus de tous les horizons pour tous les âges, des rencontres rares et des événements atypiques.', 17),
(18, 'La Médiathèque de la Ferme du Buisson, membre du réseau des médiathèques de Paris - Vallé de la Marne et de Seine-et-Marne, propose ses services aux curieux. Abritée sous une magnifique verrière, elle dispose d’un fond spécialisé dans le domaine de l’art.\r\n', 5);

-- --------------------------------------------------------

--
-- Table structure for table `Texte`
--

CREATE TABLE `Texte` (
  `id_texte` int(11) NOT NULL,
  `texte` text NOT NULL,
  `id_onglet` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Texte`
--

INSERT INTO `Texte` (`id_texte`, `texte`, `id_onglet`) VALUES
(2, 'Le Théâtre se trouve au cœur du bâtiment central de la Ferme du Buisson. Dans la grande salle de 800 fauteuils sont proposés des spectacles et des concerts. Le Théâtre est prolongé par son arrière-scène, ses dégagements, son entrepôt de décors et son atelier.\r\nLe hall du Théâtre, à la fois vaste et convivial, peut accueillir à son rez-de-chaussée et son étage plusieurs centaines de spectateurs. Point central du site, c’est un lieu d’accueil consacré aux publics, aux équipes et aux artistes. À l’étage, la mezzanine se transforme en bar et restaurant éphémère pendant les festivals et les soirs de spectacles.\r\nui pourrait encore s\'imaginer que, jusqu\'au milieu du siècle dernier, ce bâtiment long de 85 mètres contenait 24 stalles pour écuries, une bouverie-vacherie de 48 places, une bergerie de 400 moutons et une salle de manutention où 100 000 bottes de fourrage pouvaient être manipulées ?', 1),
(6, 'Pas la peine de prendre son maillot de bain : située dans le pavillon côté Ouest, la Piscine doit simplement son nom à sa dénivellation par rapport à la cour pavée. Cela permettait de conserver le lait au frais à l\'époque fermière du lieu. Aujourd\'hui, cette pièce sert à de multiples usages, de l’espace d’exposition (pendant le PULP Festival) à la salle de réunion. La Piscine est entourée de la maison du gardien et de locaux réservés au personnel. Autrefois logements des fermiers, réfectoire, buanderie et maréchalerie, les fonctions de ces espaces sont finalement restées les mêmes. Au-dessus d\'eux, des pièces en enfilade cachent parfois des installations immersives.', 2),
(8, 'Dès les débuts de la réhabilitation de la friche industrielle, cette grange du pavillon Ouest est devenue le berceau des programmations artistiques de la Ferme du Buisson. Le lieu possède un rez-de-chaussée où un bar éphémère s\'anime parfois entre les tapis persans, les cornes de buffles et les meubles de récupération.\r\nC’est son implantation à l’étage, sa confidentialité et son charme qui lui confèrent son appellation. Espace secret, perché, le Grenier peut s’ouvrir sur l’Auvent qui le sépare de l’actuelle Médiathèque. Il accueille les formes les plus hybrides, de la danse à la performance, du salon de musique au plateau de théâtre. Cette salle peut recevoir 80 spectateurs.\r\nLe Grenier est accessible aux personnes à mobilité réduite (un ascenseur permet d\'accéder à la salle qui se trouve à l\'étage).', 3),
(11, 'Cour abritée et située entre le Grenier et la Médiathèque, l’Auvent offre un volume qui est fréquemment utilisé pour des rencontres artistiques qui sortent des sentiers battus. Jonction entre les spectacles en intérieur et les arts de la rue, il accueille de nombreux moments mêlant espaces fondus, interactions physiques et surprises artistiques.\r\nSous cette charpente de ferraille s\'organisent également des marchés alimentaires, des foires aux livres, des bourses aux jouets ou des après-midis de jeux en bois lors de certains événements. L\'Auvent reçoit également La Ruche qui dit Oui de Noisiel le samedi, une communauté qui permet de réunir citoyens et producteurs locaux.', 4),
(13, 'Magnifique bâtiment restauré et situé dans l’aile ouest de la Ferme du Buisson, la Médiathèque a été inaugurée en décembre 2004. Cet équipement public est géré par la Communauté d’Agglomération Paris - Vallé de la Marne. Sous sa grande verrière, la Médiathèque dispose de 73 000 documents dont un fond spécialisé dans le domaine de l’art : livres, revues, CD, textes enregistrés, DVD.', 5),
(15, 'Alors que le destin des abeilles des champs s’est assombri et vire à l’hécatombe – plus de 14 milliards d’abeilles ont disparu en France depuis 1997 – la pollenisation des villes et des espaces péri-urbains est en marche ! Dans un esprit militant et pour participer à la pollenisation de son territoire, la Ferme du Buisson, grâce aux Ruchers de la Bruyère, a installé 3 ruches dans l\'enceinte de ses murs.\r\n\r\nLes Ruchers de la Bruyère produisent du miel et font de l\'élevage de reines et d\'essaims Buckfast, une race d\'abeilles peu agressives, qui butinent dans un rayon de 3 km. La production est artisanale : après la récolte, le miel est décanté naturellement, puis mis en pot de verre. Les miels ne sont ni mélangés, ni chauffés et proviennent exclusivement des ruchers de l\'exploitation.\r\n\r\nNous proposons également, avec nos apiculteurs complices Guy-Noël ou Enora Javaudin, des ateliers pour petits et grands, afin de venir s\'initier et découvrir la vie des abeilles et le fonctionemment de la ruche. Profitez d\'un atelier d\'apiculture pour également faire un tour dans notre jardin partagé juste à côté ou faire un atelier de jardinage.', 6),
(18, 'Ancienne grange-étable, la Halle a gardé le caractère originel du site avec ses charpentes en fer et ses murs à découvert. Faisant face à l\'Abreuvoir, cette immense pièce modulable avec une grande hauteur sous plafond, permet de créer des scénographies multiples. La Halle s’adapte aux différents rendez-vous artistiques : représentations assises en frontal ou multi-frontal, concerts debouts, expositions... Elle permet ainsi de mettre à disposition 210 places assises et jusqu\'à 800 spectateurs debouts.\r\nLa Halle est accessible aux personnes à mobilité réduite.', 7),
(20, 'Autrefois magasin pour les ouvriers de la Cité Menier, l\'Abreuvoir est vêtu de vieilles briques et de colonnes en ferraille. Son plafond bas et ses dimensions modestes en font un lieu chaleureux pour des installations, des concerts, des débats, des cabarets et des soirées. Espace totalement modulable – à l’image de la Halle qui lui fait face –, il peut en effet se prévaloir de pouvoir accueillir de nombreux types de propositions artistiques.\n\nDepuis 2008, l’Abreuvoir à musiques est le rendez-vous des musiques éclectiques de la Ferme du Buisson. Son caractère underground, en forme de friche urbaine, décorée de containers et de braseros, en fait un espace festif et convivial qui fédère un public bigarré autour du meilleur son de la scène musicale actuelle. Espace de concert unique en son genre, il accueille jusqu’à 400 mélomanes debout.\n\nL\'Abreuvoir est accessible aux personnes à mobilité réduite.', 8),
(23, 'Initialement consacré aux répétitions et à la danse, cet espace scénique jouxte les loges au-dessus des ateliers. Situé derrière le Théâtre, il en est un prolongement et permet aux compagnies accueillies de venir s’y échauffer ou s’y délasser avant ou après le spectacle. Le Studio est un endroit intime souvent mobilisé pour les stages de pratique amateur et lors des festivals pour de petites formes artistiques. Il peut accueillir jusqu\'à 90 spectateurs, offrant une forte proximité entre les artistes et les publics.\r\n\r\nLe studio est accessible aux personnes à mobilité réduite.', 10),
(25, 'Brèche artistique pendant les Nuits curieuses, salon de cinéma cosy ou boîte hors du temps pendant les festivals, cet endroit fait disparaître le matériel technique pour y faire apparaître des petites formes de spectacles extraordinaires. Joutes dessinées loufoques, tube d\'eau pour acrobaties ou cérémonies chamaniques ont déjà sévi dans ce petit lieu mystérieux.\r\n\r\nL\'Arrière-scène est accessible aux personnes à mobilité réduite.', 11),
(27, 'À l’origine, ce pavillon côté Est était le bâtiment du régisseur de la ferme et également des poulaillers. Maintenant, les nombreuses poules ont été remplacées par les équipes de la scène nationale, du centre d\'art contemporain et du cinéma. Les bureaux de la direction, de la programmation, de la production, de l\'administration, des relations avec les publics, de la communication et une partie des bureaux de la technique se trouvent dans ce pavillon où les équipes œuvrent ensemble pour faire vivre la Ferme du Buisson dans et hors les murs.\r\n\r\nL\'Accueil et l\'Administration sont accessibles aux personnes à mobilité réduite.', 12),
(29, 'Des expositions </br> Sa programmation s\'attache à faire dialoguer l\'art contemporain avec d\'autres disciplines artistiques (en particulier le théâtre, la danse et le cinéma) ou avec les sciences sociales (économie, philosophie, anthropologie…). Concevant la scène artistique comme partie prenante de la scène sociale, politique et culturelle, elle mêle expositions monographiques et collectives, publications, rencontres, projections et performances. Résolument prospective, cette programmation repose sur une conception performative de l\'art qui met à l\'honneur processus et expérimentation.\r\nPlus que des expositions </br> Parallèlement à la programmation des expositions, le centre d\'art a mis en place un festival de performances et une résidence d\'artiste, dédiés aux relations entre arts visuels et scéniques. Il conçoit des projets en collaboration avec la scène nationale et le cinéma, ainsi qu\'avec de nombreux partenaires, locaux ou internationaux. Il développe des éditions en lien direct avec les artistes et propose également des visites d\'exposition originales imaginées par les médiateurs et médiatrices ou les artistes.\r\nUn lieu atypique </br> Ses projets prennent place dans les sept salles d\'expositions qui se déploient sur une surface totale de 600 m², dans la partie la plus ancienne du site, une ancienne Ferme briarde du milieu du XVIIIe siècle dont il a conservé les spectaculaires charpentes. Mais ils peuvent aussi se déployer sur les plateaux de théâtre, au cinéma, dans les espaces de plein air de la Ferme du Buisson ou hors les murs. \r\n\r\nLe Centre d\'Art Contemporain n\'est que partiellement accessible aux personnes à mobilité réduite (salles du bas uniquement).', 13),
(33, 'Le Relais du Buisson propose une formule vous permettant de profiter d’une soirée entière à la Ferme du Buisson : \r\nPlat + Dessert + Boisson + 1 place de cinéma offerte = 17 € \r\nInvitez vos amis ou votre famille pour une soirée ou un après-midi, au programme : \r\nexpo-ciné-resto ou expo-resto-ciné (ça, c’est vous qui décidez) !\r\n\r\nLe Relais du Buisson est un espace en gestion privée - hors scène nationale -.', 14),
(35, 'La Médiathèque de la Ferme du Buisson est un espace en gestion publique - hors scène nationale -.', 5),
(36, 'Perpendiculaires au bâtiment central et s’étendant sur toute la largeur du site, les Écuries restent un chantier en rénovation, fermé au public. Elles sont un vivant témoignage de l’histoire et de la longue tradition d’innovation véhiculée encore aujourd’hui par la Ferme du Buisson. Espace brut, laissé dans son état d’origine, le couloir principal laisse au sol apparaître des rails, trimbalant autrefois lait et autres produits à travers la ferme.\r\n\r\nLes Écuries sont accessibles aux personnes à mobilité réduite.', 9),
(38, 'En plus de représentations artistiques, dehors on boit un verre, on pique-nique sur les tables de jardin, on se délasse dans les transats, on dit bonjour aux poules, on goûte au miel des Ruches, on se baigne dans les hot pots, on lit des livres et des bandes dessinées empruntés à la Médiathèque, on déambule, on lève le nez vers le ciel et on rêve. La cour pavée et le gazon vert ombragé par de grands marronniers sont complices des musiciens et des dj-set qui se perchent près des arbres, des caravanes des circassiens en résidence, des films projetés en plein air, des chapiteaux arrimés lors d’un week-end à la Ferme.\r\n\r\nEn 2016 a été inauguré le jardin partagé de la Ferme du Buisson en partenariat avec VAVM (Vivre Autrement Val Maubuée) et la Communauté d’agglomération Paris - Vallée de la Marne. C\'est un jardin ouvert à tous ! Les jardiniers réguliers invitent tous les habitants alentours à rejoindre la démarche. Le mot d’ordre c’est l’envie de jardiner ensemble. Une permanence est tenue par VAVM tous les samedis de 10h à 12h.', 15),
(40, 'L\'atmosphère qui règne au Caravansérail dialogue parfaitement avec les espaces extérieurs : feux de camps, repas en plein air, bar forain, tapis et chaises longues complètent et accompagnent dehors la scène artistique qui se déploie dedans. Le Caravansérail, espace original et réversible, a pris toute sa place sur le site de la Ferme du Buisson. Ses fonctions sont multiples : cirque, spectacles, concerts assis ou debout, installations diverses, moments conviviaux et bals… Situé non loin des Écuries, entre le futur Cinéma et le Théâtre, il porte bien son nom en accueillant tous les arts, de tous les horizons. Il évoque parfaitement la traversée, le voyage et l’ouverture sur le monde.\r\n\r\nLe Caravansérail est accessible aux personnes à mobilité réduite.', 16),
(42, 'Inauguré en 1991, c’est dans la partie la plus ancienne de la Ferme du Buisson, arborant un pigeonnier et de belles charpentes en bois du XVIIIe siècle, qu’était aménagées le Cinéma.\r\n\r\nLa Ferme de tous les cinémas </br> Films programmés en sortie nationale, films de jeunes cinéastes ou de réalisateurs confirmés, films courts et longs, films fortement exposés ou de plus discrète diffusion, films documentaires, films en avant-première, films du patrimoine, films d\'animation, films en 3D, sans oublier les films coups de cœur du programmateur : tous les cinémas se croisent chaque jour dès midi (et dès le matin pendant les vacances scolaires) jusqu’à la dernière séance de 21h.</br> Espace convivial, le Salon des Bonus vous attend à l’étage, au plus près des fameuses charpentes centenaires. Vous y trouverez, en accès gratuit, des postes pour visionner seul ou accompagné des films courts professionnels ou amateurs, ainsi que des entretiens et making-of qui enrichiront la programmation du cinéma et plus généralement de la Scène Nationale.\r\n\r\nDes films pour tous </br> Des films en famille (dès 2 ans) aux séances dédiées aux séniors (Ciné Séniors), en passant par les collaborations régulières avec les centres de loisirs, établissements scolaires et associations, le cinéma se pratique à tous les âges. Les dispositifs nationaux d\'éducation à l\'image auxquels la Ferme du Buisson participe offrent à l’élève de la maternelle à l’enseignement secondaire l’occasion d’éveiller sa curiosité, de se constituer une culture cinématographique et d’aiguiser son regard critique. </br> À partir de 2020, les deux salles de cinéma seront également équipées du système Twavox afin de venir en aide aux personnes atteintes de déficiences visuelles et auditives.\r\n\r\nDes films du monde entier </br> Vivons le cinéma à la Ferme comme un voyage à travers les cultures du monde avec des images issues de tous les horizons, en version originale (VO) sous-titrée français pour apprécier la musique des langues et en version française (VF) pour les plus jeunes.\r\n\r\nDes évènements </br> Se rencontrer et débattre : la salle de cinéma est un espace vivant d\'échanges et de dialogues. Des rencontres avec des cinéastes, acteurs ou critiques sont organisées chaque mois pour aller au-delà de la projection et dialoguer avec ceux qui font le cinéma. D’autres événements ponctuent la vie du cinéma : des programmations thématiques et les Nuits du cinéma, pour toute une nuit de films anciens et récents, cultes ou inédits, autour d’une thématique (amour, fantastique, zombie…).\r\n\r\nLe nouveau cinéma est accessible aux personnes à mobilité réduite.', 17);

-- --------------------------------------------------------

--
-- Table structure for table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id_user` int(10) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` char(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `utilisateur`
--

INSERT INTO `utilisateur` (`id_user`, `username`, `password`) VALUES
(1, 'fermedubuisson', '87a4c59294185bd31b66a75339f5f5fd');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Couleur`
--
ALTER TABLE `Couleur`
  ADD PRIMARY KEY (`id_couleur`);

--
-- Indexes for table `Onglet`
--
ALTER TABLE `Onglet`
  ADD PRIMARY KEY (`id_onglet`);

--
-- Indexes for table `Page`
--
ALTER TABLE `Page`
  ADD PRIMARY KEY (`id_page`);

--
-- Indexes for table `Photo`
--
ALTER TABLE `Photo`
  ADD PRIMARY KEY (`id_photo`),
  ADD KEY `id_onglet` (`id_onglet`);

--
-- Indexes for table `Sous_titre`
--
ALTER TABLE `Sous_titre`
  ADD PRIMARY KEY (`id_sous_titre`),
  ADD KEY `id_onglet` (`id_onglet`);

--
-- Indexes for table `Texte`
--
ALTER TABLE `Texte`
  ADD PRIMARY KEY (`id_texte`),
  ADD KEY `id_onglet` (`id_onglet`);

--
-- Indexes for table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Couleur`
--
ALTER TABLE `Couleur`
  MODIFY `id_couleur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Onglet`
--
ALTER TABLE `Onglet`
  MODIFY `id_onglet` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `Page`
--
ALTER TABLE `Page`
  MODIFY `id_page` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Photo`
--
ALTER TABLE `Photo`
  MODIFY `id_photo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `Sous_titre`
--
ALTER TABLE `Sous_titre`
  MODIFY `id_sous_titre` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `Texte`
--
ALTER TABLE `Texte`
  MODIFY `id_texte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id_user` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Photo`
--
ALTER TABLE `Photo`
  ADD CONSTRAINT `photo_ibfk_1` FOREIGN KEY (`id_onglet`) REFERENCES `Onglet` (`id_onglet`);

--
-- Constraints for table `Sous_titre`
--
ALTER TABLE `Sous_titre`
  ADD CONSTRAINT `sous_titre_ibfk_1` FOREIGN KEY (`id_onglet`) REFERENCES `Onglet` (`id_onglet`);

--
-- Constraints for table `Texte`
--
ALTER TABLE `Texte`
  ADD CONSTRAINT `texte_ibfk_1` FOREIGN KEY (`id_onglet`) REFERENCES `Onglet` (`id_onglet`);
