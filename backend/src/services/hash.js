const argon2 = require("argon2");

const secret = Buffer.from(process.env.ARGON_SECRET);

const options = {
  type: argon2.argon2d,
  hashLength: 50,
  secret,
};

const verify = async (password, hashed) => {
  try {
    return await argon2.verify(hashed, password, options);
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong verifying the password");
  }
};

module.exports = { verify };
