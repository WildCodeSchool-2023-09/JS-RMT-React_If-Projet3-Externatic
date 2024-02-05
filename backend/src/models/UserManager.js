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

  async read(email) {
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
      `select id, firstname, lastname, email, role_id from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  /*
  async readAll() {
    // Execute the SQL SELECT query to retrieve all users from the "user" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of users
    return rows;
  } */

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing user

  // async update(user) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an consultant/user by its ID
  // TODO: Implement the delete operation to remove an user by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = UserManager;
