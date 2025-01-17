CREATE DATABASE IF NOT EXISTS tasksdb;

USE tasksdb;

CREATE TABLE IF NOT EXISTS tasks(
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT
);

INSERT INTO
  tasks (title, description)
VALUES
  ('task 1', 'some description'), ('task 2', 'some description 2');