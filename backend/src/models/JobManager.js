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
      `insert into ${this.table} (company_id, consultant_id, title, description_mission , description_about_candidate , description_position, description_advantages, description_process, language, salary, location, working_type, starting_date, position_category, contract_type, position_requirements) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        job.company_id,
        job.consultant_id,
        job.title,
        job.description_mission,
        job.description_about_candidate,
        job.description_position,
        job.description_advantages,
        job.description_process,
        job.language,
        job.salary,
        job.location,
        job.working_type,
        job.starting_date,
        job.position_category,
        job.contract_type,
        job.position_requirements,
      ]
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

  async readByCompany(id) {
    // Execute the SQL SELECT query to retrieve all jobs for a specific company by its ID
    const [rows] = await this.database.query(
      `SELECT 
         job.company_id , job.consultant_id , job.id AS job_id, job.title, job.description_mission, job.description_about_candidate, job.description_position, job.description_advantages, job.description_process, job.language, job.salary, job.location, job.working_type, job.starting_date, job.position_category, job.contract_type, job.position_requirements, company.name FROM ${this.table} INNER JOIN company ON company.id = ${this.table}.company_id WHERE company.id = ?`,
      [id]
    );

    // Return the result rows, which represent all jobs associated with the specified company
    return rows;
  }

  async readByCompanyJob(id) {
    // Execute the SQL SELECT query to retrieve a specific job by its ID
    const [rows] = await this.database.query(
      `SELECT 
         job.company_id , job.consultant_id , job.id AS job_id, job.title, job.description_mission, job.description_about_candidate, job.description_position, job.description_advantages, job.description_process, job.language, job.salary, job.location, job.working_type, job.starting_date, job.position_category, job.contract_type, job.position_requirements, company.id, company.name FROM job INNER JOIN company ON company.id = ${this.table}.company_id WHERE job.id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the job
    return rows;
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

  async update(id, job) {
    // Execute the SQL SELECT query to retrieve a specific job by its ID
    // eslint-disable-next-line no-param-reassign
    delete job.created_at;
    const [result] = await this.database.query(
      `UPDATE ${this.table} set ? WHERE id = ?`,
      [job, id]
    );

    // Return the first row of the result, which represents the item
    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an job by its ID

  async delete(id) {
    const result = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return result;
  }
}

module.exports = JobManager;
