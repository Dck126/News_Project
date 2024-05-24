const routes = require('./routes');
const AuthHandler = require('./handler');

module.exports = {
  name: 'Auth',
  version: '1.0.0',
  register: async (server, { service, adminNewsService, jwtManager }) => {
    const authHandler = new AuthHandler(service, adminNewsService, jwtManager);

    server.route(routes(authHandler));
  },
};
