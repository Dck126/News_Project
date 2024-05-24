require('dotenv').config();

const Hapi = require('@hapi/hapi');

const news = require('./api/news');
const NewsService = require('../services/NewsService');

const admin = require('./api/admin');
const AdminNewsService = require('../services/AdminNewsService');

const auth = require('./api/auth');
const AuthNewsService = require('../services/AuthNewsService');
const JwtManager = require('./tokenize/JwtManager');

const init = async () => {
  const newsServices = new NewsService();
  const adminNewsService = new AdminNewsService();
  const authNewsService = new AuthNewsService();

  const server = Hapi.server({
    host: process.env.HOST,
    port: process.env.PORT,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register([
    {
      plugin: news,
      options: {
        service: newsServices,
      },
    },
    {
      plugin: admin,
      options: {
        service: adminNewsService,
      },
    },
    {
      plugin: auth,
      options: {
        service: authNewsService,
        adminNewsService,
        jwtManager: JwtManager,
      },
    },
  ]);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

init();
