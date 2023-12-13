CREATE TABLE role (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  label VARCHAR(50)
);

CREATE TABLE user (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  firstname VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role_id INTEGER,
  FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE
);

CREATE TABLE company (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  city VARCHAR(200) NOT NULL,
  phone_number VARCHAR(10) NOT NULL
);

CREATE TABLE candidat (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  user_id INTEGER NOT NULL,
  status VARCHAR(255),
  phone_number VARCHAR(10),
  city VARCHAR(200),
  experience INTEGER,
  employment_type VARCHAR(10),
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);

CREATE TABLE job (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  company_id INTEGER NOT NULL,
  consultant_id INTEGER NOT NULL,
  title VARCHAR(255) NOT NULL,
  description_mission TEXT NOT NULL,
  description_about_candidate TEXT NOT NULL,
  description_position TEXT NOT NULL,
  description_advantages TEXT NOT NULL,
  description_process TEXT NOT NULL,
  language VARCHAR(100) NOT NULL,
  salary VARCHAR(255) NOT NULL,
  location VARCHAR(200) NOT NULL,
  working_hours VARCHAR(20) NOT NULL,
  starting_date VARCHAR(30) NOT NULL,
  position_category VARCHAR(20) NOT NULL,
  publication_date DATE NOT NULL,
  FOREIGN KEY (company_id) REFERENCES company(id) ON DELETE CASCADE,
  FOREIGN KEY (consultant_id) REFERENCES user(id) ON DELETE CASCADE
);

CREATE TABLE application_status (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  label VARCHAR(100) NOT NULL
);

CREATE TABLE application (
  application_id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  candidat_id INTEGER NOT NULL,
  consultant_id INTEGER NOT NULL,
  job_id INTEGER NOT NULL,
  date DATE NOT NULL,
  status_id INTEGER NOT NULL,
  FOREIGN KEY (candidat_id) REFERENCES candidat(id) ON DELETE CASCADE,
  FOREIGN KEY (consultant_id) REFERENCES user(id) ON DELETE CASCADE,
  FOREIGN KEY (job_id) REFERENCES job(id) ON DELETE CASCADE,
  FOREIGN KEY (status_id) REFERENCES application_status(id) ON DELETE CASCADE
);

CREATE TABLE file (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  candidat_id INTEGER,
  name VARCHAR(255),
  url VARCHAR(255),
  FOREIGN KEY (candidat_id) REFERENCES candidat(id) ON DELETE CASCADE
);

CREATE TABLE diploma (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  label VARCHAR(255),
  year DATE,
  candidat_id INTEGER,
  FOREIGN KEY (candidat_id) REFERENCES candidat(id) ON DELETE CASCADE
);

CREATE TABLE experience (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  label VARCHAR(255),
  years INTEGER,
  candidat_id INTEGER,
  FOREIGN KEY (candidat_id) REFERENCES candidat(id) ON DELETE CASCADE
);
