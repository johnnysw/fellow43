/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 100410
 Source Host           : localhost:3306
 Source Schema         : myblog

 Target Server Type    : MySQL
 Target Server Version : 100410
 File Encoding         : 65001

 Date: 19/01/2021 18:26:31
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_blog
-- ----------------------------
DROP TABLE IF EXISTS `t_blog`;
CREATE TABLE `t_blog` (
  `blog_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_bin NOT NULL,
  `content` text COLLATE utf8_bin DEFAULT NULL,
  `post_time` timestamp NULL DEFAULT current_timestamp(),
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`blog_id`),
  KEY `fk_user_blog_user_id` (`user_id`),
  CONSTRAINT `fk_user_blog_user_id` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`user_id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of t_blog
-- ----------------------------
BEGIN;
INSERT INTO `t_blog` VALUES (2, 'ccc', 'ddd', '2020-10-23 20:08:45', 2);
INSERT INTO `t_blog` VALUES (4, 'aaa', 'bbb', '2020-10-23 20:11:04', 5);
INSERT INTO `t_blog` VALUES (6, 'eee', 'fff', '2021-01-18 10:10:26', 2);
INSERT INTO `t_blog` VALUES (7, 'ggg', 'kkkk', '2021-01-18 10:14:08', 5);
COMMIT;

-- ----------------------------
-- Table structure for t_comment
-- ----------------------------
DROP TABLE IF EXISTS `t_comment`;
CREATE TABLE `t_comment` (
  `comm_id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `post_time` timestamp NULL DEFAULT current_timestamp(),
  `blog_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`comm_id`),
  KEY `fk_blog_comment_blog_id` (`blog_id`),
  KEY `fk_user_comment_user_id` (`user_id`),
  CONSTRAINT `fk_blog_comment_blog_id` FOREIGN KEY (`blog_id`) REFERENCES `t_blog` (`blog_id`),
  CONSTRAINT `fk_user_comment_user_id` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of t_comment
-- ----------------------------
BEGIN;
INSERT INTO `t_comment` VALUES (1, 'haha', '2021-01-19 13:06:03', 2, 2);
INSERT INTO `t_comment` VALUES (2, 'hehe', '2021-01-19 13:06:58', 4, 5);
INSERT INTO `t_comment` VALUES (3, 'hoho', '2021-01-19 13:09:57', 2, 21);
COMMIT;

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) COLLATE utf8_bin NOT NULL COMMENT '用户名',
  `nickname` varchar(20) COLLATE utf8_bin DEFAULT NULL COMMENT '昵称',
  `password` varchar(20) COLLATE utf8_bin NOT NULL COMMENT '密码',
  `create_date` timestamp NULL DEFAULT current_timestamp() COMMENT '创建时间',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='用户名';

-- ----------------------------
-- Records of t_user
-- ----------------------------
BEGIN;
INSERT INTO `t_user` VALUES (2, 'wangwu', '王五', '123456', '2020-10-23 19:53:47');
INSERT INTO `t_user` VALUES (5, 'lisi', '李四', '123456', '2020-10-23 20:23:59');
INSERT INTO `t_user` VALUES (6, 'zhaoliu', '赵六', '123456', '2020-10-23 20:24:09');
INSERT INTO `t_user` VALUES (21, '111', '3333', '2222', '2021-01-18 16:25:37');
INSERT INTO `t_user` VALUES (22, 'aaa', 'cccc', 'bbb', '2021-01-18 16:32:55');
INSERT INTO `t_user` VALUES (23, 'aaa333', '3333', '333', '2021-01-18 16:38:51');
INSERT INTO `t_user` VALUES (24, 'aaa333666', '3333444', '4444', '2021-01-18 16:39:53');
INSERT INTO `t_user` VALUES (25, '89888', '777', '888', '2021-01-19 09:44:58');
INSERT INTO `t_user` VALUES (26, '9999', '999', '999', '2021-01-19 10:54:27');
INSERT INTO `t_user` VALUES (27, '5454545', '4545', '4545', '2021-01-19 11:15:04');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
