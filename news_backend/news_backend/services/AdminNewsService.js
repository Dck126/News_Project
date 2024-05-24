const { Pool } = require('pg');
const bcrypt = require('bcrypt');

class AdminNewsService {
  constructor() {
    this._pool = new Pool();
  }

  async postAdminService({
    id_admin,
    username_admin,
    password_admin,
    email_admin,
  }) {
    try {
      const hashedPasswordAdmin = await bcrypt.hash(password_admin, 10);
      const query = {
        text: 'insert into admin (id_admin, username_admin, password_admin, email_admin) values($1, $2, $3, $4) returning id_admin',
        values: [id_admin, username_admin, hashedPasswordAdmin, email_admin],
      };
      const resultAdmin = await this._pool.query(query);
      return resultAdmin.rows[0].id_admin;
    } catch (error) {
      // Log the error for debugging
      console.error('Error in postNewsAdminService:', error);
      // You can also throw an error here if needed
      throw new Error('Failed to insert admin record');
    }
  }

  async getAdminIdService(id_admin) {
    try {
      const query = {
        text: 'select id_admin, password_admin, email_admin from admin where id_admin = $1',
        values: [id_admin],
      };

      const resultAdmin = await this._pool.query(query);
      return resultAdmin.rows[0];
    } catch (error) {
      // Log the error for debugging
      console.error('Error in getAdminIdService:', error);
      // You can also throw an error here if needed
      throw new Error('Failed to get admin Id record');
    }
  }

  // verify Admin API
  async verifyAdminCredential(password_admin, email_admin) {
    const query = {
      text: 'select id_admin, password_admin from admin where email_admin = $1 ',
      values: [email_admin],
    };

    const resultAdmin = await this._pool.query(query);

    if (!resultAdmin.rows.length) {
      console.log('Failed to verify Admin Credential');
    }

    const { id_admin, password_admin: hashedPasswordAdmin } =
      resultAdmin.rows[0];

    const match = await bcrypt.compare(password_admin, hashedPasswordAdmin);

    if (!match) {
      throw new Error('Failed to verify Admin Credential');
    }
    return id_admin;
  }
}

module.exports = AdminNewsService;
