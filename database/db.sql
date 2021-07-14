-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 14 juil. 2021 à 04:06
-- Version du serveur :  10.4.18-MariaDB
-- Version de PHP : 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `story`
--

-- --------------------------------------------------------

--
-- Structure de la table `usersfeed`
--

CREATE TABLE `usersfeed` (
  `id` int(11) NOT NULL,
  `username` varchar(52) NOT NULL,
  `feedback` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `usersfeed`
--

INSERT INTO `usersfeed` (`id`, `username`, `feedback`) VALUES
(1, 'azdzad', 'zadazd'),
(2, '', ''),
(3, 'MH15O', 'this website is good'),
(4, 'MH16O', 'this website is great , i\'ve added some stories and i totally enjoy it !'),
(5, 'MH16O', 'this website is great , i\'ve added some stories and i totally enjoy it !'),
(6, 'MH16O', 'This Website is awesome'),
(7, 'dazzadazd', 'azdzadzadazdazd');

-- --------------------------------------------------------

--
-- Structure de la table `userstory`
--

CREATE TABLE `userstory` (
  `id` int(11) NOT NULL,
  `username` varchar(52) NOT NULL,
  `email` varchar(52) NOT NULL,
  `title` varchar(52) NOT NULL,
  `story` text NOT NULL,
  `link` varchar(52) NOT NULL,
  `votes` int(200) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `userstory`
--

INSERT INTO `userstory` (`id`, `username`, `email`, `title`, `story`, `link`, `votes`) VALUES
(1, 'jack', 'jack@gmail.com', 'Lorem ipsum dolor sit amet, consectetur', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh turpis, ultricies id urna et, rutrum convallis leo. Phasellus ornare vulputate vulputate. Ut fermentum venenatis blandit. Etiam sit amet porttitor urna. Proin a metus sem. Proin consequat a lacus nec faucibus. Proin ac risus nec neque efficitur pulvinar. Fusce lorem nunc, mollis aliquet dolor eget, varius molestie dolor.\n\nPraesent porta, turpis nec semper scelerisque, orci nulla commodo lacus, et porttitor nulla turpis nec lectus. In id sem lacinia, malesuada mauris et, mattis dolor. Nam purus nisi, accumsan id dolor ac, condimentum pretium enim. Suspendisse rutrum porttitor arcu, ut gravida tellus. Nam odio sapien, rutrum sit amet malesuada consequat, facilisis et orci. Nunc imperdiet rutrum erat ac suscipit. Vestibulum in risus vel magna gravida scelerisque. Donec malesuada purus neque, ac congue sapien semper ac.', 'lorem-ipsum-dolor-sit-amet-consectetur', 0),
(2, 'george', 'jack@gmail.com', ' amet, consectetur', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh turpis, ultricies id urna et, rutrum convallis leo. Phasellus ornare vulputate vulputate. Ut fermentum venenatis blandit. Etiam sit amet porttitor urna. Proin a metus sem. Proin consequat a lacus nec faucibus. Proin ac risus nec neque efficitur pulvinar. Fusce lorem nunc, mollis aliquet dolor eget, varius molestie dolor.\n\nPraesent porta, turpis nec semper scelerisque, orci nulla commodo lacus, et porttitor nulla turpis nec lectus. In id sem lacinia, malesuada mauris et, mattis dolor. Nam purus nisi, accumsan id dolor ac, condimentum pretium enim. Suspendisse rutrum porttitor arcu, ut gravida tellus. Nam odio sapien, rutrum sit amet malesuada consequat, facilisis et orci. Nunc imperdiet rutrum erat ac suscipit. Vestibulum in risus vel magna gravida scelerisque. Donec malesuada purus neque, ac congue sapien semper ac.', 'amet-consectetur', 0),
(3, 'vanessa', 'jack@gmail.com', 'The day I met my Soulmate', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh turpis, ultricies id urna et, rutrum convallis leo. Phasellus ornare vulputate vulputate. Ut fermentum venenatis blandit. Etiam sit amet porttitor urna. Proin a metus sem. Proin consequat a lacus nec faucibus. Proin ac risus nec neque efficitur pulvinar. Fusce lorem nunc, mollis aliquet dolor eget, varius molestie dolor.\n\nPraesent porta, turpis nec semper scelerisque, orci nulla commodo lacus, et porttitor nulla turpis nec lectus. In id sem lacinia, malesuada mauris et, mattis dolor. Nam purus nisi, accumsan id dolor ac, condimentum pretium enim. Suspendisse rutrum porttitor arcu, ut gravida tellus. Nam odio sapien, rutrum sit amet malesuada consequat, facilisis et orci. Nunc imperdiet rutrum erat ac suscipit. Vestibulum in risus vel magna gravida scelerisque. Donec malesuada purus neque, ac congue sapien semper ac.', 'the-day-i-met-my-soulmate', 0),
(4, 'victor', 'jack@gmail.com', 'How to sell frogs online fast(Film)', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh turpis, ultricies id urna et, rutrum convallis leo. Phasellus ornare vulputate vulputate. Ut fermentum venenatis blandit. Etiam sit amet porttitor urna. Proin a metus sem. Proin consequat a lacus nec faucibus. Proin ac risus nec neque efficitur pulvinar. Fusce lorem nunc, mollis aliquet dolor eget, varius molestie dolor.\n\nPraesent porta, turpis nec semper scelerisque, orci nulla commodo lacus, et porttitor nulla turpis nec lectus. In id sem lacinia, malesuada mauris et, mattis dolor. Nam purus nisi, accumsan id dolor ac, condimentum pretium enim. Suspendisse rutrum porttitor arcu, ut gravida tellus. Nam odio sapien, rutrum sit amet malesuada consequat, facilisis et orci. Nunc imperdiet rutrum erat ac suscipit. Vestibulum in risus vel magna gravida scelerisque. Donec malesuada purus neque, ac congue sapien semper ac.', 'how-to-sell-frogs-online-fastfilm', 0),
(5, 'hugo', 'jack@gmail.com', 'So Excited', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh turpis, ultricies id urna et, rutrum convallis leo. Phasellus ornare vulputate vulputate. Ut fermentum venenatis blandit. Etiam sit amet porttitor urna. Proin a metus sem. Proin consequat a lacus nec faucibus. Proin ac risus nec neque efficitur pulvinar. Fusce lorem nunc, mollis aliquet dolor eget, varius molestie dolor.\n\nPraesent porta, turpis nec semper scelerisque, orci nulla commodo lacus, et porttitor nulla turpis nec lectus. In id sem lacinia, malesuada mauris et, mattis dolor. Nam purus nisi, accumsan id dolor ac, condimentum pretium enim. Suspendisse rutrum porttitor arcu, ut gravida tellus. Nam odio sapien, rutrum sit amet malesuada consequat, facilisis et orci. Nunc imperdiet rutrum erat ac suscipit. Vestibulum in risus vel magna gravida scelerisque. Donec malesuada purus neque, ac congue sapien semper ac.', 'so-excited', 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `usersfeed`
--
ALTER TABLE `usersfeed`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `userstory`
--
ALTER TABLE `userstory`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `usersfeed`
--
ALTER TABLE `usersfeed`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `userstory`
--
ALTER TABLE `userstory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
