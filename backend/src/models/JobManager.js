const AbstractManager = require("./AbstractManager");

class JobManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "job" as configuration
    super({ table: "job" });
  }

  // The C of CRUD - Create operation

  async create(job) {
    // Execute the SQL INSERT query to add a new job to the "job" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title) values (?)`,
      [job.title]
    );

    // Return the ID of the newly inserted job
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific job by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the job
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all jobs from the "job" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of jobs
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing job

  // async update(job) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an job by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = JobManager;
