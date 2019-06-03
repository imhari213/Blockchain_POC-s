-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 192.168.99.100    Database: ucc
-- ------------------------------------------------------
-- Server version	5.7.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Documents`
--

USE `ucc`;
DROP TABLE IF EXISTS `Documents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Documents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `PDF_Hash` varchar(255) NOT NULL,
  `Pdf_Path` varchar(95) NOT NULL,
  `Transaction_ID` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Documents`
--

LOCK TABLES `Documents` WRITE;
/*!40000 ALTER TABLE `Documents` DISABLE KEYS */;
INSERT INTO `Documents` VALUES (1,'35f7bd12636049e94dbd2c7dd6d80900dda1c4066762057b2c9b222e680b9711','../certificateddocs/hari@rahuldocument.pdf',NULL),(2,'e7e2cc4fd07cf542935e3de709709e10baae9897e727365d23bd3812be9146ae','../certificateddocs/hello@evoke.comdocument.pdf',NULL),(3,'a414ec2d017a7f2ef0cb9cf1cf6ba0e5875ed590d0b25acbbd7f6316bc37729e','../certificateddocs/h34ari@rahuldocument.pdf',NULL),(4,'90fec63fd2e2433a3032d6837493c67105ad9b853b18fcc13b8a1521e68cca62','../certificateddocs/CHryu6document.pdf',NULL),(5,'c64c2a882563c29828c7f25669364818d47a7de64f87e8a4bb4dd81a4ea6259e','../certificateddocs/CHD34555document.pdf',NULL),(6,'4ced1bb342d3143f6f51762a3386c8907d068091cf03a93eb14fab0b2373d872','../certificateddocs/document.pdf',NULL),(7,'7f60c1bdff8b4ad3f6448e199e54e1a7b0d02320d0e139291123b2cc2bc4016c','../certificateddocs/CHDsdfgdocument.pdf',NULL),(8,'b6739fa934a783cd3c2014ca98e4101902fc3fba13598b57d8ea27601776044c','../certificateddocs/MADHAPURdocument.pdf',NULL),(9,'876543e7ed59a7746575dd6d2b452d67db0d96ae6ec7956de734037c49c87e13','../certificateddocs/MADHAPUR21document.pdf',NULL),(10,'4d50ee1fdd57c7ddb9c4b874cd8673e05f8a3e1a08b559ebb2928b0d5b358329','../certificateddocs/Hitechdocument.pdf',NULL),(11,'e50d9030c1fd4c61fce3fa873b257e23c307e425e2dd448d3055b9069b2ab534','../certificateddocs/CHDascdocument.pdf',NULL),(12,'b4323d07d9540e0b96ffc42318ec55df46230fbf7e02588011ee6cba7e309657','../certificateddocs/346asffdocument.pdf',NULL),(13,'f257631160bbd079359ef286d962d5eba81dc66bb139069c4ccdd050751d6285','../certificateddocs/346sdfsdfdocument.pdf',NULL),(14,'876e1ec9e10f51f23b763d1a2dfa2a68c49699d993eafe3b226b5ba28b58a545','../certificateddocs/CHDadfgdocument.pdf',NULL),(15,'c3065b9e1818a7ae3e0c1bd6e63ea8ce22f613066840644abb26655f19313541','../certificateddocs/346dsgghhdocument.pdf',NULL);
/*!40000 ALTER TABLE `Documents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Drop_downs`
--

DROP TABLE IF EXISTS `Drop_downs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Drop_downs` (
  `id` int(11) NOT NULL DEFAULT '0',
  `country` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `jurisdiction` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Drop_downs`
--

LOCK TABLES `Drop_downs` WRITE;
/*!40000 ALTER TABLE `Drop_downs` DISABLE KEYS */;
INSERT INTO `Drop_downs` VALUES (0,'USA','california','Civil appeals'),(1,'USA','Alabama','Financial appeals'),(2,'CANADA','Ontario','Civil Appeals'),(3,'CANADA','Alberta','Financial Appeals');
/*!40000 ALTER TABLE `Drop_downs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Participants`
--

DROP TABLE IF EXISTS `Participants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Participants` (
  `Debtor` varchar(45) NOT NULL,
  `Collaterol` varchar(45) NOT NULL,
  `Seuredparty` varchar(45) NOT NULL,
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Debtor_UNIQUE` (`Debtor`),
  UNIQUE KEY `Collaterol_UNIQUE` (`Collaterol`),
  UNIQUE KEY `Seuredparty_UNIQUE` (`Seuredparty`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Participants`
--

LOCK TABLES `Participants` WRITE;
/*!40000 ALTER TABLE `Participants` DISABLE KEYS */;
INSERT INTO `Participants` VALUES ('Jp Morgan ','Home','HSBC',1),('Synchrony','Land','CITI',2),('R & B Firms','Shops','Wells Fargo',3);
/*!40000 ALTER TABLE `Participants` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-08-08 13:56:42
