CREATE DATABASE IF NOT EXISTS SIB;
USE SIB;

CREATE TABLE userdata
( userID CHAR(4) NOT NULL PRIMARY KEY,
  id CHAR(6) NOT NULL,
  pw VARCHAR(20) NOT NULL,
  major VARCHAR(30) NOT NULL ,
  e_mail VARCHAR(30),
  club VARCHAR(20),
  clubadmin BOOLEAN DEFAULT FALSE,
  fulladmin BOOLEAN DEFAULT FALSE
);

CREATE TABLE clubdata
( clubID CHAR(4) NOT NULL PRIMARY KEY,
  club_name VARCHAR(30) NOT NULL,
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
  clubID CHAR(4) NOT NULL,
  score FLOAT,
  reason TEXT,
  FOREIGN KEY(club_name) REFERENCES clubdata(club_name),
  FOREIGN KEY(clubID) REFERENCES clubdata(clubID)
);
