exports.up = (pgm) => {
  // Step 1: Drop the foreign key constraint from 'komentar'
  pgm.dropConstraint('komentar', 'komentar_id_berita_fkey');
  // Step 2: Change the data type of 'id_berita' in 'berita' and 'komentar' to VARCHAR(50)
  pgm.alterColumn('berita', 'id_berita', {
    type: 'VARCHAR(50)',
  });
  pgm.alterColumn('komentar', 'id_berita', {
    type: 'VARCHAR(50)',
  });
};
