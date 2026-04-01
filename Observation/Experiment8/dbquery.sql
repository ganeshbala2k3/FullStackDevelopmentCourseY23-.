CREATE DATABASE testdb;

USE testdb;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);

INSERT INTO users (name, email) VALUES
('user1', 'user1@gmail.com'),
('user2', 'user2@gmail.com');