const adminHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'admin',
  version: '1.0.0',
  register: async (server, { service }) => {
    const getAdmin = new adminHandler(service);
    server.route(routes(getAdmin));
  },
};
