/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import database client
const database = require("./database/client");
const user = require("./database/data/user.json");
const role = require("./database/data/role.json");
const company = require("./database/data/company.json");
const applicationStatus = require("./database/data/applicationStatus.json");
const job = require("./database/data/job.json");

const seed = async () => {
  try {
    const roleQuery = [];
    for (let i = 0; i < role.length; i += 1) {
      roleQuery.push(
        database.query("insert into role(label) values (?)", [role[i].label])
      );
    }
    await Promise.all(roleQuery);

    const applicationStatusQuery = [];
    for (let i = 0; i < applicationStatus.length; i += 1) {
      applicationStatusQuery.push(
        database.query("insert into application_status(label) values (?)", [
          applicationStatus[i].label,
        ])
      );
    }
    await Promise.all(applicationStatusQuery);

    const userQuery = [];
    for (let i = 0; i < user.length; i += 1) {
      userQuery.push(
        database.query(
          "insert into user(lastname, firstname, email, password, role_id) values (?, ?, ?, ?, ?)",
          [
            user[i].lastname,
            user[i].firstname,
            user[i].email,
            user[i].password,
            user[i].role_id,
          ]
        )
      );
    }
    await Promise.all(userQuery);

    const companyQuery = [];
    for (let i = 0; i < company.length; i += 1) {
      companyQuery.push(
        database.query(
          "insert into company(name, email, city, phone_number, image_url) values (?, ?, ?, ?, ?)",
          [
            company[i].name,
            company[i].email,
            company[i].city,
            company[i].phone_number,
            company[i].image_url,
          ]
        )
      );
    }
    await Promise.all(companyQuery);

    const jobQuery = [];
    for (let i = 0; i < job.length; i += 1) {
      jobQuery.push(
        database.query(
          "insert into job(company_id, consultant_id, company_title, title, description_mission, description_about_candidate, description_position, description_advantages, description_process, language, salary, location, working_type, starting_date, position_category, contract_type, position_requirements) values (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [
            job[i].company_id,
            job[i].consultant_id,
            job[i].company_title,
            job[i].title,
            job[i].description_mission,
            job[i].description_about_candidate,
            job[i].description_position,
            job[i].description_advantages,
            job[i].description_process,
            job[i].language,
            job[i].salary,
            job[i].location,
            job[i].working_type,
            job[i].starting_date,
            job[i].position_category,
            job[i].contract_type,
            job[i].position_requirements,
          ]
        )
      );
    }
    await Promise.all(jobQuery);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
