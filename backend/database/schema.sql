CREATE TABLE role (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  label VARCHAR(50) NOT NULL
);

INSERT INTO role (label) VALUES ("candidat"),("consultant"),("admin");

CREATE TABLE user (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  firstname VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role_id INTEGER NOT NULL,
  FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE
);
INSERT INTO user (lastName, firstName, email, password, role_id)
VALUES("MAAMIR", "Hipticem", "maamir.hipticem@gmail.com","hipticem",2);


CREATE TABLE company (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  city VARCHAR(200) NOT NULL,
  phone_number VARCHAR(10) NOT NULL,
  image_url VARCHAR(450) NOT NULL
);

INSERT INTO company (name, email, city, phone_number, image_url)
VALUES ("orange", "orange@orange.com", "Paris", "0404040404", "https://www.1min30.com/wp-content/uploads/2017/07/Orange-logo-500x407.jpg");
INSERT INTO company (name, email, city, phone_number, image_url)
VALUES ("iAdvize", "iadvize@iadvize.com", "Lyon", "0404040404", "https://i0.wp.com/www.frenchweb.fr/wp-content/uploads/2023/01/LOGO-850-iadvize-1.png?w=850&ssl=1");
INSERT INTO company (name, email, city, phone_number, image_url)
VALUES ("Iris", "iris@iris.com", "Bordeaux", "0404040404", "https://nantes.tilt.events/community/wp-content/uploads/2017/01/U-IRIS-300x300.jpg");
INSERT INTO company (name, email, city, phone_number, image_url)
VALUES ("maisons du monde", "maisonsdumonde@maisonsdumonde.com", "Paris", "0404040404", "https://www.proxice.eu/wp-content/uploads/2022/03/MAISON-DU-MONDE.jpg");
INSERT INTO company (name, email, city, phone_number, image_url)
VALUES ("Nickel", "nickel@nickel.com", "Lyon", "0404040404", "https://lebureaudecom.fr/wp-content/uploads/2019/02/nickel-1200x485.jpg" );
INSERT INTO company (name, email, city, phone_number, image_url)
VALUES ("showroomprivee", "showroomprivee@showroomprivee.com", "Bordeaux", "0404040404", "https://www.blog-ventes-privees.com/data/medias/logos/showroomprive.png" );



CREATE TABLE candidat ( 
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  user_id INTEGER NOT NULL,
  status VARCHAR(255),
  phone_number VARCHAR(10),
  city VARCHAR(200),
  employment_type VARCHAR(45),
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
  starting_date DATE,
  position_category VARCHAR(20) NOT NULL,
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
  candidat_id INTEGER NOT NULL,
  job_id INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  status_id INTEGER NOT NULL,
  FOREIGN KEY (candidat_id) REFERENCES candidat(id) ON DELETE CASCADE,
  FOREIGN KEY (job_id) REFERENCES job(id) ON DELETE CASCADE,
  FOREIGN KEY (status_id) REFERENCES application_status(id) ON DELETE CASCADE
);

CREATE TABLE file (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  candidat_id INTEGER NOT NULL,
  name VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL,
  FOREIGN KEY (candidat_id) REFERENCES candidat(id) ON DELETE CASCADE
);

CREATE TABLE diploma (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  label VARCHAR(255) NOT NULL,
  year DATE NOT NULL,
  candidat_id INTEGER NOT NULL,
  FOREIGN KEY (candidat_id) REFERENCES candidat(id) ON DELETE CASCADE
);

CREATE TABLE experience (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  label VARCHAR(255) NOT NULL,
  years INTEGER NOT NULL,
  candidat_id INTEGER NOT NULL,
  FOREIGN KEY (candidat_id) REFERENCES candidat(id) ON DELETE CASCADE
);
