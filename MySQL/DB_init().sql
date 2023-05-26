CREATE DATABASE IF NOT EXISTS SIB;
USE SIB;

CREATE TABLE userdata
( userID CHAR(4) NOT NULL PRIMARY KEY,
  id CHAR(6) NOT NULL,
  pw VARCHAR(20) NOT NULL,
  major VARCHAR(30) NOT NULL ,
  email VARCHAR(30),
  club VARCHAR(20),
  clubadmin BOOLEAN DEFAULT FALSE,
  fulladmin BOOLEAN DEFAULT FALSE
);

CREATE TABLE clubdata
( club_name VARCHAR(30) NOT NULL PRIMARY KEY,
  category TEXT,
  count_mem INT NOT NULL,
  description TEXT,
  recent_date DATE,
  club_score FLOAT,
  created_date DATE,
  LocationX FLOAT,
  LocationY FLOAT
);

CREATE TABLE clubscore
( club_name VARCHAR(30) NOT NULL,
  score FLOAT,
  reason TEXT,
  FOREIGN KEY(club_name) REFERENCES clubdata(club_name)
);

CREATE TABLE postdata
( post_num INT AUTO_INCREMENT PRIMARY KEY,   
  postname VARCHAR(50) NOT NULL,
  contents TEXT,
  writer VARCHAR(30) NOT NULL,
  category CHAR(5) NOT NULL, --이건 프론트만 이용해도 구현 될 것 같아요
  recommend INT DEFAULT 0
  FOREIGN KEY(writer) REFERENCES userdata(e_mail)
);