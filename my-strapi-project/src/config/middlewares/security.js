// src/config/middlewares/security.js
module.exports = {
  contentSecurityPolicy: {
    directives: {
      'connect-src': ["'self'", 'http:', 'https:'],
      'img-src': ["'self'", 'data:', 'blob:', 'http://localhost:1337'], // Allow Strapi media
    },
  },
};