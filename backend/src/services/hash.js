const argon2 = require("argon2");

// Getting ARGON_SECRET from environment variable
const secret = Buffer.from(process.env.ARGON_SECRET);

// we create our hashing options
const options = {
  type: argon2.argon2d,
  hashLength: 50,
  secret,
};

const hash = async (password) => {
  try {
    // replace password with hashed password
    return await argon2.hash(password, options);
  } catch (err) {
    console.error(err);
    throw new Error("Une erreur est survenue lors du hachage du mot de passe");
  }
};

const verify = async (password, hashed) => {
  // check a password against a given hash
  try {
    return await argon2.verify(hashed, password, options);
  } catch (error) {
    console.error(error);
    throw new Error(
      "Une erreur est survenue lors de la vérification du mot de passe"
    );
  }
};

module.exports = { hash, verify };
