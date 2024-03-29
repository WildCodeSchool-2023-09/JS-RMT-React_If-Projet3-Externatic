CREATE TABLE role (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  label VARCHAR(50) NOT NULL
);

CREATE TABLE user (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  lastname VARCHAR(100) NULL,
  firstname VARCHAR(100) NULL,
  email VARCHAR(255) NOT NULL unique,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(255),
  phone_number INTEGER(10),
  city VARCHAR(200),
  employment_type VARCHAR(45),
  experience varchar(30),
  diploma varchar(30),
  url VARCHAR(255),
  role_id INTEGER NOT NULL DEFAULT 1,
  FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE
);

CREATE TABLE company (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  city VARCHAR(200) NOT NULL,
  phone_number VARCHAR(10) NOT NULL,
  image_url VARCHAR(450) NOT NULL
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
  working_type VARCHAR(255) NOT NULL,
  starting_date DATE,
  position_category VARCHAR(20) NOT NULL,
  contract_type VARCHAR(10) NOT NULL,
  position_requirements VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (company_id) REFERENCES company(id) ON DELETE CASCADE,
  FOREIGN KEY (consultant_id) REFERENCES user(id) ON DELETE CASCADE
);

CREATE TABLE application_status (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  label VARCHAR(100) NOT NULL
);

CREATE TABLE application (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  user_id INTEGER NOT NULL,
  job_id INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  status_id INTEGER NOT NULL DEFAULT 2,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
  FOREIGN KEY (job_id) REFERENCES job(id) ON DELETE CASCADE,
  FOREIGN KEY (status_id) REFERENCES application_status(id) ON DELETE CASCADE
);
