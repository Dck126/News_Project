/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.addColumn('admin', {
    email: {
      type: 'varchar(150)',
      notNull: true,
      unique: true,
    },
  });
};
