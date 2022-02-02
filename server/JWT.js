const { sign, verify } = require("jsonwebtoken");
const authConfig = require('./config/auth');

const createTokens = (user) => {
    
  const accessToken = sign(
    
    { user: user }, authConfig.secret, {
        expiresIn: authConfig.expires
    }
    
  );

  return accessToken;
};

const validateToken = (req, res, next) => {
  const accessToken = req.cookies["access-token"];

  if (!accessToken)
    return res.status(400).json({ error: "User not Authenticated!" });

  try {
    const validToken = verify(accessToken, authConfig.secret);
    if (validToken) {
      req.authenticated = true;
      return next();
    }
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

module.exports = { createTokens, validateToken };
