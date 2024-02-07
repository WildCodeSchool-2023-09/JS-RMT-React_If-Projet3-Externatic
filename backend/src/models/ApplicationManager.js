const AbstractManager = require("./AbstractManager");

class ApplicationManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "application" as configuration
    super({ table: "application" });
  }

  // The C of CRUD - Create operation

  async create(application) {
    // Execute the SQL INSERT query to add a new application to the "application" table
    const [result] = await this.database.query(
      `insert into ${this.table} (user_id, job_id) values (?, ?)`,
      [application.user_id, application.job_id]
    );

    // Return the ID of the newly inserted application
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific application by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the application
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all applications from the "application" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of applications
    return rows;
  }

  async getProfileApplications(userId) {
    const [rows] = await this.database.query(
      `SELECT 
        application.id, 
        application.job_id,
        application.status_id,
        job.title AS job_title, 
        job.consultant_id, 
        consultant.email AS consultant_email,
        application_status.label as status_label
      FROM ${this.table} AS application
      INNER JOIN job ON application.job_id = job.id
      INNER JOIN user AS consultant ON job.consultant_id = consultant.id
      INNER JOIN user ON application.user_id = user.id
      INNER JOIN application_status ON application.status_id = application_status.id
      WHERE user.id = ?`,
      [userId]
    );
    return rows;
  }

  async getConsultantApplications(consultantId) {
    const [rows] = await this.database.query(
      `SELECT 
        application.id AS application_id, 
        application.job_id,
        application.status_id,
        job.title AS job_title, 
        consultant.id AS consultant_id,
        consultant.email AS consultant_email,
        user.id AS candidate_id,
        user.email AS candidate_email,
        application_status.label AS status_label,
        company.name AS company_name
      FROM ${this.table} AS application
      INNER JOIN job ON application.job_id = job.id
      INNER JOIN user AS consultant ON job.consultant_id = consultant.id
      INNER JOIN user ON application.user_id = user.id
      INNER JOIN application_status ON application.status_id = application_status.id
      INNER JOIN company ON job.company_id = company.id
      WHERE consultant.id = ?
      ORDER BY company.name`,
      [consultantId]
    );
    return rows;
  }

  // The U of CRUD - Update operation
  async update(id, application) {
    // Execute the SQL SELECT query to retrieve a specific application by its ID
    const [result] = await this.database.query(
      `UPDATE ${this.table} set ? WHERE id = ?`,
      [application, id]
    );

    // Return the first row of the result, which represents the item
    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an application by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = ApplicationManager;
