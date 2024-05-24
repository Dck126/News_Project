const { Pool } = require('pg');

class AuthNewsService {
  constructor() {
    this._pool = new Pool();
  }

  async postRefreshToken(token) {
    try {
      const query = {
        text: 'insert into authentications values ($1)',
        values: [token],
      };

      const resultToken = await this._pool.query(query);
      return resultToken;
    } catch (error) {
      // Log the error for debugging
      console.error('Error in postRefreshToken:', error);
      // You can also throw an error here if needed
      throw new Error('Failed to insert Auth');
    }
  }

  async verifyRefreshToken(token) {
    try {
      const query = {
        text: 'select token from authentications where token = $1',
        values: [token],
      };

      const resultToken = await this._pool.query(query);
      return resultToken;
    } catch (error) {
      // Log the error for debugging
      console.error('Error in verifyRefreshToken:', error);
      // You can also throw an error here if needed
      throw new Error('Failed to verify token');
    }
  }

  async deleteRefreshToken(token) {
    try {
      const query = {
        text: 'delete from authentications where token = $1',
        values: [token],
      };

      const resultToken = await this._pool.query(query);
      return resultToken;
    } catch (error) {
      // Log the error for debugging
      console.error('Error in deleteRefreshToken:', error);
      // You can also throw an error here if needed
      throw new Error('Failed to delete token');
    }
  }
}
module.exports = AuthNewsService;
