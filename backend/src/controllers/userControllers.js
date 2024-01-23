// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const getConsultant = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const consultants = await tables.user.readAllConsultant();

    // Respond with the items in JSON format
    res.status(200).json(consultants);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
// const read = async (req, res, next) => {
//   try {
//     //     // Fetch a specific item from the database based on the provided ID
//     const consultant = await tables.consultant.read(req.params.id);

//     //     // If the item is not found, respond with HTTP 404 (Not Found)
//     //     // Otherwise, respond with the item in JSON format
//     if (consultant == null) {
//       res.sendStatus(404);
//     } else {
//       res.status(200).json(consultant);
//     }
//   } catch (err) {
//     //     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
// const add = async (req, res, next) => {
//   // Extract the item data from the request body
//   const item = req.body;

//   try {
//     // Insert the item into the database
//     const insertId = await tables.item.create(item);

//     // Respond with HTTP 201 (Created) and the ID of the newly inserted item
//     res.status(201).json({ insertId });
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  getConsultant,
  // read,
  // edit,
  // add,
  // destroy,
};
