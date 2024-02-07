const AbstractManager = require("./AbstractManager");

class ApplicationStatusManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "application_status" as configuration
    super({ table: "application_status" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all status from the "application_status" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of status
    return rows;
  }
}

module.exports = ApplicationStatusManager;
