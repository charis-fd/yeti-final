module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['https://car-oil-tracker.onrender.com'],
      credentials: true,
    },
  },
  // ... rest of middlewares
];