const AbstractManager = require("./AbstractManager");

class JobManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "job" as configuration
    super({ table: "job" });
  }

  // The C of CRUD - Create operation

  /* async create(job) {
    // Execute the SQL INSERT query to add a new job to the "job" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title) values (?)`,
      [job.title]
    );

    // Return the ID of the newly inserted job
    return result.insertId;
  } */

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

  async readAll(page, jobsPerPage, selectedLocations, selectedLanguages) {
    const offset = (page - 1) * jobsPerPage;
    let where = "";

    if (selectedLocations) {
      const locations = selectedLocations
        .split("|^|")
        .map((location) => `'${location}'`)
        .join(",");
      where += where
        ? ` AND location IN (${locations})`
        : `WHERE location IN (${locations})`;
    }

    if (selectedLanguages) {
      const languages = selectedLanguages
        .split("|^|")
        .map((language) => `'${language}'`)
        .join(",");
      where += where
        ? ` AND language IN (${languages})`
        : `WHERE language IN (${languages})`;
    }

    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} ${where} LIMIT ${jobsPerPage} OFFSET ${offset}`
    );

    // Return the array of jobs
    return rows;
  }

  async getTotalJobs(selectedLocations, selectedLanguages) {
    let where = "";

    if (selectedLocations) {
      const locations = selectedLocations
        .split("|^|")
        .map((location) => `'${location}'`)
        .join(",");
      /* where += `WHERE location IN (${locations})`; */
      where += where
        ? ` AND location IN (${locations})`
        : `WHERE location IN (${locations})`;
    }
    if (selectedLanguages) {
      const languages = selectedLanguages
        .split("|^|")
        .map((language) => `'${language}'`)
        .join(",");
      where += where
        ? ` AND language IN (${languages})`
        : `WHERE language IN (${languages})`;
    }

    const [rows] = await this.database.query(
      `SELECT COUNT(*) as count FROM ${this.table} ${where}`
    );
    return rows[0].count;
  }

  async getLocationsList() {
    const [rows] = await this.database.query(
      `SELECT DISTINCT(location) FROM ${this.table}`
    );
    return rows.map((row) => row.location);
  }

  async getLanguagesList() {
    const [rows] = await this.database.query(
      `SELECT DISTINCT(language) FROM ${this.table}`
    );
    return rows.map((row) => row.language);
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
