/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.renameColumn('admin', 'id', 'id_admin');
  pgm.renameColumn('admin', 'nama', 'username_admin');
  pgm.renameColumn('admin', 'password', 'password_admin');
  pgm.renameColumn('admin', 'email', 'email_admin');
};
