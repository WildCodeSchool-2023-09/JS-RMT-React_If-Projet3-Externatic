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

  async readAll(
    page,
    jobsPerPage,
    selectedLocations,
    selectedLanguages,
    searchedJob
  ) {
    const offset = (page - 1) * jobsPerPage;
    const query = `SELECT * FROM ${this.table}`;
    const whereValues = [];
    const values = [];

    if (selectedLocations) {
      const locations = selectedLocations.split("|^|");
      whereValues.push(`location IN (?)`);
      values.push(locations);
    }

    if (selectedLanguages) {
      const languages = selectedLanguages.split("|^|");
      whereValues.push(`language IN (?)`);
      values.push(languages);
    }

    if (searchedJob) {
      whereValues.push(`title LIKE ?`);
      values.push(`%${searchedJob}%`);
    }

    const where =
      whereValues.length > 0 ? ` WHERE ${whereValues.join(" AND ")}` : "";
    values.push(jobsPerPage, offset);

    const [rows] = await this.database.query(
      `${query}${where} LIMIT ? OFFSET ?`,
      values
    );

    // Return the array of jobs
    return rows;
  }

  async readAllJobs(selectedLocations, selectedLanguages, searchedJob) {
    const whereValues = [];
    const values = [];

    if (selectedLocations) {
      const locations = selectedLocations.split("|^|");
      whereValues.push(`location IN (?)`);
      values.push(locations);
    }

    if (selectedLanguages) {
      const languages = selectedLanguages.split("|^|");
      whereValues.push(`language IN (?)`);
      values.push(languages);
    }

    if (searchedJob) {
      whereValues.push(`title LIKE ?`);
      values.push(`%${searchedJob}%`);
    }

    const where =
      whereValues.length > 0 ? ` WHERE ${whereValues.join(" AND ")}` : "";

    const [rows] = await this.database.query(
      `SELECT COUNT(*) as count FROM ${this.table}${where}`,
      values
    );

    return rows[0].count;
  }

  async readAllLocations() {
    const [rows] = await this.database.query(
      `SELECT DISTINCT(location) FROM ${this.table}`
    );
    return rows.map((row) => row.location);
  }

  async readAllLanguages() {
    const [rows] = await this.database.query(
      `SELECT DISTINCT(language) FROM ${this.table}`
    );
    return rows.map((row) => row.language);
  }

  async readLatest() {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} ORDER BY created_at DESC LIMIT 10`
    );

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
