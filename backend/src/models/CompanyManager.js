const AbstractManager = require("./AbstractManager");

class CompanyManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "company" as configuration
    super({ table: "company" });
  }

  // The C of CRUD - Create operation

  async create(company) {
    // Execute the SQL INSERT query to add a new company to the "company" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name, email, city, phone_number, image_url)  values (?, ?, ?, ?, ?)`,
      [
        company.name,
        company.email,
        company.city,
        company.phone_number,
        company.image_url,
      ]
    );

    // Return the ID of the newly inserted company
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all companys from the "company" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of companys
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing company

  async update(id, company) {
    // Execute the SQL SELECT query to retrieve a specific company by its ID
    const [result] = await this.database.query(
      `UPDATE ${this.table} set ? WHERE id = ?`,
      [company, id]
    );

    // Return the first row of the result, which represents the item
    return result;
  }

  // The D of CRUD - Delete operation
  async delete(id) {
    const result = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return result;
  }

  // async delete(id) {
  //   ...
  // }
}

module.exports = CompanyManager;
