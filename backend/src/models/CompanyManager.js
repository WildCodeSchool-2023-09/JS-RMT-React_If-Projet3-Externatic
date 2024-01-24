const AbstractManager = require("./AbstractManager");

class CompanyManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "company" as configuration
    super({ table: "company" });
  }

  // The C of CRUD - Create operation

  // async create(company) {
  //   // Execute the SQL INSERT query to add a new company to the "company" table
  //   const [result] = await this.database.query(
  //     `insert into ${this.table} (title) values (?)`,
  //     [company.title]
  //   );

  //   // Return the ID of the newly inserted company
  //   return result.insertId;
  // }

  // The Rs of CRUD - Read operations

  // async read(id) {
  //   // //Execute the SQL SELECT query to retrieve a specific company by its ID
  //   const [rows] = await this.database.query(
  //     `select company.id, company.name, company.email, company.city, company.phone_number, company.image_url, JSON_ARRAYAGG(JSON_OBJECT(job.id, job.consultant_id, job.title, job.description_mission, job.description_about_candidate, job.description_position, job.description_advantages, job.description_process, job.language, job.salary, job.location, job.working_type, job.starting_date, job.position_category, job.contract_type, job.position_requirements)) from ${this.table} inner join job on job.company_id = ${this.table}.id where ${this.table}.id = ?`,
  //     [id]
  //   );

  //   // Return the first row of the result, which represents the company
  //   return rows[0];
  // }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all companys from the "company" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of companys
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing company

  // async update(company) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an company by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = CompanyManager;
