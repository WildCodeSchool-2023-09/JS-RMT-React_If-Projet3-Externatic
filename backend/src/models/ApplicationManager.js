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
      [application.job_id, application.user_id]
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

  async getApplications(userId) {
    const [rows] = await this.database.query(
      `SELECT job_id from ${this.table} INNER JOIN user ON user.id = ?`,
      [userId]
    );
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing application

  // async update(application) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an application by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = ApplicationManager;
