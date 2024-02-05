const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "user" as configuration
    super({ table: "user" });
  }

  // The C of CRUD - Create operation

  // async create(consultant/user) {
  //   // Execute the SQL INSERT query to add a new consultant/user to the "consultant/user" table
  //   const [result] = await this.database.query(
  //     `insert into ${this.table} (title) values (?)`,
  //     [consultant/user.title]
  //   );

  //   // Return the ID of the newly inserted consultant/user
  //   return result.insertId;
  // }

  // The Rs of CRUD - Read operations

  // async read(id) {
  //   // //Execute the SQL SELECT query to retrieve a specific consultant/user by its ID
  //   const [rows] = await this.database.query(
  //     `select * from ${this.table} where id = ?`,
  //     [id]
  //   );

  //   // Return the first row of the result, which represents the consultant/user
  //   return rows[0];
  // }

  async readAllConsultant() {
    // Execute the SQL SELECT query to retrieve all consultant/users from the "consultant/user" table
    const [rows] = await this.database.query(
      `select * from ${this.table} where role_id = 2`
    );

    // Return the array of consultant/users
    return rows;
  }

  async readAllCandidates() {
    const [rows] = await this.database.query(
      `select * from ${this.table} where role_id = 1`
    );

    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing consultant/user

  // async update(consultant/user) {
  async create(email, hashPassword, firstname, lastname) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (email, password, firstname, lastname) VALUES (?, ?, ?, ?)`,
      [email, hashPassword, firstname, lastname]
    );

    // Return the ID of the newly inserted user
    return result.insertId;
  }

  // The Rs of CRUD - Read operations
  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    // Return the first row of the result, which represents the user
    return rows[0];
  }

  async readByEmail(email) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  async readProfile(id) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await this.database.query(
      `select id, firstname, lastname, email, city, employment_type, phone_number, experience, diploma, status, url, role_id from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  async update(id, userData) {
    // Execute the SQL UPDATE query to update the user in the "user" table
    await this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, phone_number = ?, city = ?, employment_type = ?, experience = ?, diploma = ?, status = ? , url = ? where id = ?`,
      [
        userData.firstname,
        userData.lastname,
        userData.email,
        userData.phone_number,
        userData.city,
        userData.employment_type,
        userData.experience,
        userData.diploma,
        userData.status,
        userData.url,
        id,
      ]
    );
  }

  async updateCV(userId, filePath) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET url = ? WHERE id = ?`,
      [filePath, userId]
    );

    return result.affectedRows;
  }

  /*
  async readAll() {
    // Execute the SQL SELECT query to retrieve all users from the "user" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of users
    return rows;
  } */

  // The U of CRUD - Update operation
  async update(userData) {
    // Execute the SQL UPDATE query to update the user in the "user" table
    await this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, role_id = ?,  phone_number = ?, city = ?, employment_type = ?, experience = ?, diploma = ?, status = ? , url = ? where id = ?`,
      [
        userData.firstname,
        userData.lastname,
        userData.email,
        userData.role_id,
        userData.phone_number,
        userData.city,
        userData.employment_type,
        userData.experience,
        userData.diploma,
        userData.status,
        userData.url,
        userData.id,
      ]
    );
  }

  // async update(user) {
  //   ...
  // }

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

module.exports = UserManager;
