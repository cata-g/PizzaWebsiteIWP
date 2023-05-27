-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 27, 2023 at 02:14 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `iwp_pizza`
--

-- --------------------------------------------------------

--
-- Table structure for table `footer_item`
--

CREATE TABLE `footer_item` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `href` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `footer_item`
--

INSERT INTO `footer_item` (`id`, `name`, `href`) VALUES
(1, 'Menu', '#'),
(2, 'Nutritionals', '#'),
(3, 'Allergens', '#'),
(4, 'Locations', '#'),
(5, 'Our Story', '#'),
(6, 'Contact', '#'),
(7, 'Address', '#'),
(8, 'Hours', '#'),
(9, 'Phone', '#');

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `nameFrom` varchar(100) NOT NULL,
  `emailFrom` varchar(100) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `message` text NOT NULL,
  `submitedOn` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`id`, `nameFrom`, `emailFrom`, `subject`, `message`, `submitedOn`) VALUES
(2, 'tes32t', 'test@em2ail.com', 'Hey2', 'hsadhasdashdashdahsdhashdh', '2023-05-26'),
(3, 'nameTest', 'barabas.catalin@gmail.com', 'subiect', 'wwdasdasd', '2023-05-26');

-- --------------------------------------------------------

--
-- Table structure for table `navbar_item`
--

CREATE TABLE `navbar_item` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `href` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `navbar_item`
--

INSERT INTO `navbar_item` (`id`, `name`, `href`) VALUES
(1, 'Home', '/'),
(2, 'Menu', '/menu'),
(3, 'Create Your Own', '/create-your-own'),
(4, 'Gallery', '/gallery'),
(5, 'Contact Us', '/contact');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `phoneNumber` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `pizzaName` text NOT NULL,
  `pizzaSize` varchar(10) NOT NULL,
  `deliveryLocation` text NOT NULL,
  `additionalInfo` text NOT NULL,
  `dateCreated` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`id`, `name`, `phoneNumber`, `email`, `pizzaName`, `pizzaSize`, `deliveryLocation`, `additionalInfo`, `dateCreated`) VALUES
(1, 'Cătălin Gabriel Barabaș', '0730138995', 'barabas.catalin@gmail.com', 'Pizza Formaggi Pepperoni( undefined )\n', 'M, ', 'sdasdasdadadas', '', '2023-05-27'),
(2, 'Barabas Catalin Gabriel', '0730138995', 'barabas.catalin@gmail.com', 'Pizza Hawaiana( mozzarella,tomato sauce,pineapple,ham,corn )\nPizza Quattro Formaggi( mozzarella,vege', 'M, M, M, L', 'Strada asdas das das das das da da dsd', 'info info ', '2023-05-27'),
(3, 'Cătălin Gabriel Barabaș', '0730138995', 'barabas.catalin@gmail.com', 'Pizza Hawaiana( mozzarella,tomato sauce,pineapple,ham,corn )\nPizza Capricciosa( mozzarella,tomato sauce,chicken breast,chorizo,bell peppers,fresh mushrooms )\nPizza Capricciosa( mozzarella,tomato sauce,chicken breast,chorizo,bell peppers,fresh mushrooms )\nPizza Prosciutto Funghi( mozzarella,tomato sauce,ham,fresh mushrooms )\nPizza Quattro Formaggi( mozzarella,vegetable cream,brie,emmental,blue cheese )\nCustom Pizza( Ham,Mushrooms,Olives,Tomatoes, )\n', 'M, M, M, M', 'blaaaaaaaaaaaaaaaaa', 'vlaaaaaaaaaaaaaaaaaaaa', '2023-05-27');

-- --------------------------------------------------------

--
-- Table structure for table `pizza`
--

CREATE TABLE `pizza` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `size` varchar(10) NOT NULL,
  `ingredients` text NOT NULL,
  `imageSource` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pizza`
--

INSERT INTO `pizza` (`id`, `name`, `size`, `ingredients`, `imageSource`) VALUES
(1, 'Pizza Hawaiana', 'M', 'mozzarella,tomato sauce,pineapple,ham,corn', 'pizza_hawaiana.jpg'),
(2, 'Pizza Formaggi Pepperoni', 'M', 'mozzarella,pepperoni,cheese,fresh tomatoes', 'pizza_formaggi_pepperoni.jpg'),
(3, 'Pizza Suprema', 'M', 'mozzarella,tomato sauce,chorizo,bacon,sausages,blue cheese,bell peppers', 'pizza_suprema.jpg'),
(4, 'Pizza Quattro Formaggi', 'M', 'mozzarella,vegetable cream,brie,emmental,blue cheese', 'pizza_quattro_formaggi.jpg'),
(5, 'Pizza Diavola', 'M', 'mozzarella,tomato sauce,chorizo,sausages,chili peppers', 'pizza_diavola.jpg'),
(6, 'Pizza Quattro Stagioni', 'M', 'mozzarella,tomato sauce,ham,chorizo,black olives,fresh mushrooms', 'pizza_quattro_stagioni.jpg'),
(7, 'Pizza Capricciosa', 'M', 'mozzarella,tomato sauce,chicken breast,chorizo,bell peppers,fresh mushrooms', 'pizza_capricciosa.jpg'),
(8, 'Pizza Carnivora', 'M', 'mozzarella,tomato sauce,ham,chorizo,bacon,bell peppers', 'pizza_carnivora.jpg'),
(9, 'Pizza Pepperoni Clasic', 'M', 'mozarella,tomato sauce,pepperoni', 'pizza_pepperoni_clasic.jpg'),
(10, 'Pizza Quattro Stagioni Mixed', 'M', 'mozzarella,tomato sauce,ham,chorizo,black olives,fresh mushrooms', 'pizza_quattro_stagioni_amestecata.jpg'),
(11, 'Pizza Picantina', 'M', 'mozzarella,tomato sauce,chorizo,jalapeno peppers,sausages,smoked cheese,blue cheese', 'pizza_picantina.jpg'),
(12, 'Pizza Bianca d\'Oro', 'M', 'mozzarella,cream,chicken breast,brie,corn,fresh mushrooms,bell peppers', 'pizza_bianca_doro.jpg'),
(13, 'Pizza Prosciutto Funghi', 'M', 'mozzarella,tomato sauce,ham,fresh mushrooms', 'pizza_prosciutto_funghi.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `dateCreated` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `dateCreated`) VALUES
(2, 'admin', '', 'newpass', '2023-05-25'),
(3, 'admin', '', 'admin', '2023-05-26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `footer_item`
--
ALTER TABLE `footer_item`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `navbar_item`
--
ALTER TABLE `navbar_item`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pizza`
--
ALTER TABLE `pizza`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `footer_item`
--
ALTER TABLE `footer_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `navbar_item`
--
ALTER TABLE `navbar_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pizza`
--
ALTER TABLE `pizza`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
