-- MySQL dump 10.13  Distrib 8.0.16, for macos10.14 (x86_64)
--
-- Host: 127.0.0.1    Database: fs_bnb
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `listing_imgurl_mapping`
--

DROP TABLE IF EXISTS `listing_imgurl_mapping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `listing_imgurl_mapping` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `listingImgId` int(6) unsigned NOT NULL,
  `imageUrl` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `listingImgId_idx` (`listingImgId`),
  CONSTRAINT `listingImgId` FOREIGN KEY (`listingImgId`) REFERENCES `listing` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listing_imgurl_mapping`
--

LOCK TABLES `listing_imgurl_mapping` WRITE;
/*!40000 ALTER TABLE `listing_imgurl_mapping` DISABLE KEYS */;
INSERT INTO `listing_imgurl_mapping` VALUES (9,10,'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/4847914a-original-1532623339.jpg?crop=0.446xw:1.00xh;0.0743xw,0&resize=980:*'),(10,11,'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/774fd085-original-1532623760.jpg?crop=0.446xw:1.00xh;0.252xw,0&resize=980:*'),(12,10,'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/airbnb-atlanta-treehouse-1532623340.jpg?crop=0.446xw:1.00xh;0.273xw,0&resize=980:*'),(13,13,'https://image.shutterstock.com/image-illustration/bright-cozy-modern-bedroom-dressing-600w-560973166.jpg'),(14,13,'https://image.shutterstock.com/image-photo/real-estate-luxury-interior-exterior-600w-660324757.jpg'),(15,13,'https://image.shutterstock.com/image-photo/view-hotel-evening-sky-260nw-272628785.jpg'),(29,62,'https://s3.entegral.net/p/1096721_42f3d521-57d6-4108-8413-7e3c60eca9c41.jpg');
/*!40000 ALTER TABLE `listing_imgurl_mapping` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-02 17:37:03
