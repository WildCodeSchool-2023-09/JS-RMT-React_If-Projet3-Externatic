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
  phone_number VARCHAR(10) NOT NULL,
  image_url VARCHAR(450) NOT NULL
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


INSERT INTO user (lastname, firstname, email, password, role_id) VALUES
  ('Doe', 'John', 'john.doe@email.com', 'password123', 1),
  ('Smith', 'Alice', 'alice.smith@email.com', 'securepwd456', 2),
  ('Admin', 'Super', 'super.admin@email.com', 'adminpass789', 3);

INSERT INTO job (company_id, consultant_id, title, description_mission, description_about_candidate, description_position, description_advantages, description_process, language, salary, location, working_type, starting_date, position_category, contract_type, position_requirements) VALUES
  (1, 3, 'Software Engineer', 'Developing cutting-edge software applications.', 'Looking for a skilled developer to join our team.', 'Full-time position for a Software Engineer.', 'Competitive salary, great benefits.', 'Interview process includes technical assessments and interviews.', 'English', '$80,000', 'Paris', '40 hours/week', '2023-01-15', 'Cadre', 'CDI', "Bac +3"),
  (2, 3, 'Management Consultant', 'Providing strategic advice to clients.', 'Seeking a consultant with strong analytical skills.', 'Consultant role for Management Consulting.', 'Attractive compensation package.', 'Selection process involves case interviews and client scenarios.', 'English', '$100,000', 'Bordeaux', '35 hours/week', '2023-02-01', 'Cadre', 'CDI', "Bac +3"),
  (2, 3, 'Management Consultant', 'Providing strategic advice to clients.', 'Seeking a consultant with strong analytical skills.', 'Consultant role for Management Consulting.', 'Attractive compensation package.', 'Selection process involves case interviews and client scenarios.', 'English', '$100,000', 'Toulouse', '35 hours/week', '2023-02-01', 'Cadre', 'CDI', "Bac +3"),
  (1, 3, 'Management Consultant', 'Providing strategic advice to clients.', 'Seeking a consultant with strong analytical skills.', 'Consultant role for Management Consulting.', 'Attractive compensation package.', 'Selection process involves case interviews and client scenarios.', 'English', '$100,000', 'Lyon', '35 hours/week', '2023-02-01', 'Cadre', 'CDI', "Bac +3"),
  (2, 3, 'Management Consultant', 'Providing strategic advice to clients.', 'Seeking a consultant with strong analytical skills.', 'Consultant role for Management Consulting.', 'Attractive compensation package.', 'Selection process involves case interviews and client scenarios.', 'English', '$100,000', 'Lille', '35 hours/week', '2023-02-01', 'Cadre', 'CDI', "Bac +3"),
  (1, 3, 'Management Consultant', 'Providing strategic advice to clients.', 'Seeking a consultant with strong analytical skills.', 'Consultant role for Management Consulting.', 'Attractive compensation package.', 'Selection process involves case interviews and client scenarios.', 'English', '$100,000', 'Strasbourg', '35 hours/week', '2023-02-01', 'Cadre', 'CDI', "Bac +3"),
  (2, 3, 'Management Consultant', 'Providing strategic advice to clients.', 'Seeking a consultant with strong analytical skills.', 'Consultant role for Management Consulting.', 'Attractive compensation package.', 'Selection process involves case interviews and client scenarios.', 'English', '$100,000', 'Amiens', '35 hours/week', '2023-02-01', 'Cadre', 'CDI', "Bac +3"),
  (1, 3, 'Management Consultant', 'Providing strategic advice to clients.', 'Seeking a consultant with strong analytical skills.', 'Consultant role for Management Consulting.', 'Attractive compensation package.', 'Selection process involves case interviews and client scenarios.', 'English', '$100,000', 'Brest', '35 hours/week', '2023-02-01', 'Cadre', 'CDI', "Bac +3"),
  (2, 3, 'Management Consultant', 'Providing strategic advice to clients.', 'Seeking a consultant with strong analytical skills.', 'Consultant role for Management Consulting.', 'Attractive compensation package.', 'Selection process involves case interviews and client scenarios.', 'English', '$100,000', 'Nantes', '35 hours/week', '2023-02-01', 'Cadre', 'CDI', "Bac +3"),
  (2, 3, 'Management Consultant', 'Providing strategic advice to clients.', 'Seeking a consultant with strong analytical skills.', 'Consultant role for Management Consulting.', 'Attractive compensation package.', 'Selection process involves case interviews and client scenarios.', 'English', '$100,000', 'Rennes', '35 hours/week', '2023-02-01', 'Cadre', 'CDI', "Bac +3"),
  (3, 3, 'Management Consultant', 'Providing strategic advice to clients.', 'Seeking a consultant with strong analytical skills.', 'Consultant role for Management Consulting.', 'Attractive compensation package.', 'Selection process involves case interviews and client scenarios.', 'English', '$100,000', 'Marseille', '35 hours/week', '2023-02-01', 'Cadre', 'CDI', "Bac +3"),
  (3, 3, 'Management Consultant', 'Providing strategic advice to clients.', 'Seeking a consultant with strong analytical skills.', 'Consultant role for Management Consulting.', 'Attractive compensation package.', 'Selection process involves case interviews and client scenarios.', 'English', '$100,000', 'Paris', '35 hours/week', '2023-02-01', 'Cadre', 'CDI', "Bac +3"),
  (2, 3, 'Management Consultant', 'Providing strategic advice to clients.', 'Seeking a consultant with strong analytical skills.', 'Consultant role for Management Consulting.', 'Attractive compensation package.', 'Selection process involves case interviews and client scenarios.', 'English', '$100,000', 'Paris', '35 hours/week', '2023-02-01', 'Cadre', 'CDI', "Bac +3"),
  (3, 3, 'Management Consultant', 'Providing strategic advice to clients.', 'Seeking a consultant with strong analytical skills.', 'Consultant role for Management Consulting.', 'Attractive compensation package.', 'Selection process involves case interviews and client scenarios.', 'English', '$100,000', 'Paris', '35 hours/week', '2023-02-01', 'Cadre', 'CDI', "Bac +3"),
  (4, 3, 'Management Consultant', 'Providing strategic advice to clients.', 'Seeking a consultant with strong analytical skills.', 'Consultant role for Management Consulting.', 'Attractive compensation package.', 'Selection process involves case interviews and client scenarios.', 'English', '$100,000', 'Paris', '35 hours/week', '2023-02-01', 'Cadre', 'CDI', "Bac +3"),
  (2, 3, 'Management Consultant', 'Providing strategic advice to clients.', 'Seeking a consultant with strong analytical skills.', 'Consultant role for Management Consulting.', 'Attractive compensation package.', 'Selection process involves case interviews and client scenarios.', 'English', '$100,000', 'Paris', '35 hours/week', '2023-02-01', 'Cadre', 'CDI', "Bac +3"),
  (4, 3, 'Management Consultant', 'Providing strategic advice to clients.', 'Seeking a consultant with strong analytical skills.', 'Consultant role for Management Consulting.', 'Attractive compensation package.', 'Selection process involves case interviews and client scenarios.', 'English', '$100,000', 'Paris', '35 hours/week', '2023-02-01', 'Cadre', 'CDI', "Bac +3"),
  (4, 3, 'Management Consultant', 'Providing strategic advice to clients.', 'Seeking a consultant with strong analytical skills.', 'Consultant role for Management Consulting.', 'Attractive compensation package.', 'Selection process involves case interviews and client scenarios.', 'English', '$100,000', 'Paris', '35 hours/week', '2023-02-01', 'Cadre', 'CDI', "Bac +3"),
  (2, 3, 'Management Consultant', 'Providing strategic advice to clients.', 'Seeking a consultant with strong analytical skills.', 'Consultant role for Management Consulting.', 'Attractive compensation package.', 'Selection process involves case interviews and client scenarios.', 'English', '$100,000', 'Paris', '35 hours/week', '2023-02-01', 'Cadre', 'CDI', "Bac +3"),
  (2, 3, 'Management Consultant', 'Providing strategic advice to clients.', 'Seeking a consultant with strong analytical skills.', 'Consultant role for Management Consulting.', 'Attractive compensation package.', 'Selection process involves case interviews and client scenarios.', 'English', '$100,000', 'Paris', '35 hours/week', '2023-02-01', 'Cadre', 'CDI', "Bac +3"),
  (6, 3, 'Management Consultant', 'Providing strategic advice to clients.', 'Seeking a consultant with strong analytical skills.', 'Consultant role for Management Consulting.', 'Attractive compensation package.', 'Selection process involves case interviews and client scenarios.', 'English', '$100,000', 'Paris', '35 hours/week', '2023-02-01', 'Cadre', 'CDI', "Bac +3"),
  (6, 3, 'Management Consultant', 'Providing strategic advice to clients.', 'Seeking a consultant with strong analytical skills.', 'Consultant role for Management Consulting.', 'Attractive compensation package.', 'Selection process involves case interviews and client scenarios.', 'English', '$100,000', 'Paris', '35 hours/week', '2023-02-01', 'Cadre', 'CDI', "Bac +3"),
  (2, 3, 'Management Consultant', 'Providing strategic advice to clients.', 'Seeking a consultant with strong analytical skills.', 'Consultant role for Management Consulting.', 'Attractive compensation package.', 'Selection process involves case interviews and client scenarios.', 'English', '$100,000', 'Paris', '35 hours/week', '2023-02-01', 'Cadre', 'CDI', "Bac +3"),
  (5, 3, 'Management Consultant', 'Providing strategic advice to clients.', 'Seeking a consultant with strong analytical skills.', 'Consultant role for Management Consulting.', 'Attractive compensation package.', 'Selection process involves case interviews and client scenarios.', 'English', '$100,000', 'Paris', '35 hours/week', '2023-02-01', 'Cadre', 'CDI', "Bac +3"),
  (2, 3, 'Management Consultant', 'Providing strategic advice to clients.', 'Seeking a consultant with strong analytical skills.', 'Consultant role for Management Consulting.', 'Attractive compensation package.', 'Selection process involves case interviews and client scenarios.', 'English', '$100,000', 'Paris', '35 hours/week', '2023-02-01', 'Cadre', 'CDI', "Bac +3"),
  (4, 3, 'Management Consultant', 'Providing strategic advice to clients.', 'Seeking a consultant with strong analytical skills.', 'Consultant role for Management Consulting.', 'Attractive compensation package.', 'Selection process involves case interviews and client scenarios.', 'English', '$100,000', 'Paris', '35 hours/week', '2023-02-01', 'Cadre', 'CDI', "Bac +3");
