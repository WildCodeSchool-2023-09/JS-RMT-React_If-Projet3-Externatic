CREATE TABLE role (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  label VARCHAR(50) NOT NULL
);

CREATE TABLE user (
  id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  firstname VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role_id INTEGER NOT NULL,
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
INSERT INTO role (label) VALUES("candidat"),("consultant"),("admin");

INSERT INTO user (lastname, firstname, email, password, role_id) VALUES ('Signoret','Maxim','maxim.signoret@outlook.fr','ouioui36',2);
INSERT INTO user (lastname, firstname, email, password, role_id) VALUES ('Pasquier','Antonin','antonin.pasquier@outlook.fr','tibocbo51',2);
INSERT INTO user (lastname, firstname, email, password, role_id) VALUES ('Morin','Olivier','olivier.morin@outlook.fr','cfortenchocolat45',2);


INSERT INTO company (name, email, city, phone_number) VALUES ('Orange','Orange@Orange.fr','Paris',0332455440);
INSERT INTO company (name, email, city, phone_number) VALUES ('Free','FREE@Free.fr','Lille',0344587656);
INSERT INTO company (name, email, city, phone_number) VALUES ('SFR','SFR@Sfr.fr','toulouse',0323986058);
INSERT INTO company (name, email, city, phone_number) VALUES ('Leclerc','Leclerc@Leclerc.fr','Marseille',0330457067);



INSERT INTO job (company_id,consultant_id,title,description_mission,description_about_candidate,description_position,description_advantages,description_process,language,salary,location,working_hours,starting_date,position_category) VALUES 
('1','2','Developpeur Web FullStack H/F','Vous aurez notamment en charge D_être force de proposition sur les choix technologiques, méthodologiques et organisationnels, Concevoir, développer et maintenir des applications web et des API performantes et sécurisées, Optimiser les performances des applications et des services pour offrir une expérience utilisateur optimale, Contribuer à la définition de l_architecture technique (Microservices), Garantir les meilleures pratiques de développement (Tests, TDD, DDD, ...) Technos principales / environnement : NodeJS, React, Javascript, Typescript, RabbitMQ, Socket.io, AWS, ...','Ce que vous apportez De formation supérieure en informatique. Vous disposez d_une première expérience réussie en sur Node et un framework front (React, Angular, Vue, Svelte, ...). Vous maîtrisez JS/TS. La maîtrise des aspects clouds (AWS, Azure, GCP, ...) sont des atouts supplémentaires à votre candidature. Les candidats attendus seront idéalement "force de proposition", notamment sur l_architecture. Si possible, être capable de sortir du “cadre” afin d_apporter des solutions innovantes (R&D).','Entreprise innovante avec du sens Environnement technique challengeant (IA, volumétrie de données, ...) Rémunération attractive Évolution en interne Équipe dynamique Hyper centre de Lille','Remote : 2 jours / semaine possible. Conditions de travail très agréables : Distribution de fruits et légumes, locaux neufs et lumineux, espace de restauration, bons d_achat sur les produits du groupe, etc Projet en construction Participation / intéressement','Traitement candidature et RDV avec notre consultant RDV avec le lead tech RDV avec le CTO','React Js et Javascript','35 000€ à 38 000€ par an en fonction du profil','Localisation : Montaigu','8h/12h 13h/17h','2024-01-23','oui');
INSERT INTO job (company_id,consultant_id,title,description_mission,description_about_candidate,description_position,description_advantages,description_process,language,salary,location,working_hours,starting_date,position_category) VALUES ('1','2','3','4','5','6','7','8','9','10','11','12','2023-03-24','14');
INSERT INTO job (company_id,consultant_id,title,description_mission,description_about_candidate,description_position,description_advantages,description_process,language,salary,location,working_hours,starting_date,position_category) VALUES ('1','2','3','4','5','6','7','8','9','10','11','12','2023-03-24','14');
INSERT INTO job (company_id,consultant_id,title,description_mission,description_about_candidate,description_position,description_advantages,description_process,language,salary,location,working_hours,starting_date,position_category) VALUES ('1','2','3','4','5','6','7','8','9','10','11','12','2023-03-24','14');
INSERT INTO job (company_id,consultant_id,title,description_mission,description_about_candidate,description_position,description_advantages,description_process,language,salary,location,working_hours,starting_date,position_category) VALUES ('1','2','3','4','5','6','7','8','9','10','11','12','2023-03-24','14');
INSERT INTO job (company_id,consultant_id,title,description_mission,description_about_candidate,description_position,description_advantages,description_process,language,salary,location,working_hours,starting_date,position_category) VALUES ('1','2','3','4','5','6','7','8','9','10','11','12','2023-03-24','14');
INSERT INTO job (company_id,consultant_id,title,description_mission,description_about_candidate,description_position,description_advantages,description_process,language,salary,location,working_hours,starting_date,position_category) VALUES ('1','2','3','4','5','6','7','8','9','10','11','12','2023-03-24','14');

