-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Generation Time: Jan 15, 2025 at 09:28 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `express_covid_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `address` text NOT NULL,
  `status` enum('posotive','recovered','dead') NOT NULL,
  `in_date_at` date NOT NULL,
  `out_date_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`id`, `name`, `phone`, `address`, `status`, `in_date_at`, `out_date_at`) VALUES
(1, 'John Doe', '1234567890', 'Jl. Merdeka No. 1, Jakarta', '', '2025-01-01', NULL),
(2, 'Jane Smith', '0987654321', 'Jl. Sudirman No. 10, Jakarta', 'recovered', '2025-01-02', '2025-01-05'),
(3, 'Alice Johnson', '1122334455', 'Jl. Raya No. 15, Bandung', 'dead', '2025-01-03', '2025-01-04'),
(4, 'Bob Brown', '2233445566', 'Jl. Alamsyah No. 8, Surabaya', '', '2025-01-04', NULL),
(5, 'Charlie White', '3344556677', 'Jl. Pahlawan No. 20, Yogyakarta', 'recovered', '2025-01-05', '2025-01-10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
