/* eslint-disable camelcase */

// exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('kategori', {
    id_kategori: {
      type: 'varchar(50)',
      primaryKey: true,
    },
    kategori: {
      type: 'varchar(50)',
    },
  });
};

// exports.down = (pgm) => {
//   pgm.dropTable('kategori');
// };
