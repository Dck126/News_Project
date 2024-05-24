/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('komentar', {
    id_komentar: {
      type: 'varchar(30)',
      primaryKey: true,
    },

    id_berita: {
      type: 'integer',
      references: 'berita',
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },

    nama: {
      type: 'varchar(50)',
    },

    komentar: {
      type: 'text',
    },

    tanggal: {
      type: 'text',
    },
  });
};

// exports.down = (pgm) => {
//   pgm.dropTable('komentar');
// };
