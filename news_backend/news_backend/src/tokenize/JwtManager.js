const Jwt = require('@hapi/jwt');

const JwtManager = {
  generateAccessToken(payload) {
    return Jwt.token.generate(payload, process.env.ACCESS_TOKEN_JWT);
  },
  generateRefreshToken(payload) {
    return Jwt.token.generate(payload, process.env.REFRESH_TOKEN_JWT);
  },
  verifyRefreshToken(refreshToken) {
    try {
      const verifyToken = Jwt.token.decode(refreshToken);
      Jwt.token.verifySignature(verifyToken, process.env.REFRESH_TOKEN_JWT);
      const { payload } = verifyToken.decoded;
      return payload;
    } catch (error) {
      // Log the error for debugging
      console.error('Error in verifyRefreshToken:', error);
      // You can also throw an error here if needed
      throw new Error('Failed to verify refresh token');
    }
  },
};

module.exports = JwtManager;
