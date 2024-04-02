const JWT = require("jsonwebtoken");

const createTokenPair = async (payload, publicKey, privateKey) => {
  try {
    // access token
    const accessToken = await JWT.sign(payload, privateKey, {
      expiresIn: "1 day",
      algorithm: "RS256",
    });

    const refreshTokenToken = await JWT.sign(payload, privateKey, {
      expiresIn: "2 days",
      algorithm: "RS256",
    });

    return { accessToken, refreshTokenToken };
  } catch (error) {}
};

module.exports = { createTokenPair };
