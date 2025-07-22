// src/config/middlewares/cors.js
module.exports = ({ env }) => ({
  enabled: true,
  origin: [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://localhost:1337', // Add Strapi's own origin
  ],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
  headers: '*', // Allow all headers
  expose: ['WWW-Authenticate', 'Server-Authorization'],
  credentials: true, // Enable cookies if needed
  maxAge: 3600,
});