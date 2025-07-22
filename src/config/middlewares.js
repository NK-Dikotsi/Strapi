// src/config/middlewares.js
module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors', // Enable CORS
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];