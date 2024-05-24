/* eslint-disable camelcase */

exports.up = (pgm) => {
  // Step 3: Re-create the foreign key constraint
  pgm.addConstraint('komentar', 'komentar_id_berita_fkey', {
    foreignKeys: {
      columns: 'id_berita',
      references: 'berita',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  });
};
