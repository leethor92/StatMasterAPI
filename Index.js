'use strict';

const Hapi = require('hapi');

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
});

const dotenv = require('dotenv');

const result = dotenv.config();
if (result.error) {
  console.log(result.error.message);
  process.exit(1);
}

require('./app/models/db');

async function init() {
  await server.register(require('hapi-auth-cookie'));
  await server.register(require('inert'));
  await server.register(require('vision'));
  require('dotenv').config();


  server.views({
    engines: {
      hbs: require('handlebars')
    },
    relativeTo: __dirname,
    path: './app/views',
    layoutPath: './app/views/layouts',
    partialsPath: './app/views/partials',
    layout: true,
    isCached: false,
  });

  server.auth.strategy('standard', 'cookie', {
    cookie: {
      password: process.env.cookie_password,
      isSecure: false,
      ttl: 24 * 60 * 60 * 1000,
    },
    redirectTo: '/'
  });

  server.auth.default({
    mode: 'required',
    strategy: 'standard',
  });

  server.route(require('./routes'));
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
}

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();