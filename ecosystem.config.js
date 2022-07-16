module.exports = {
  apps: [
    {
      name: "Backend - API",
      script: "dist/index.js",
      autorestart: true,
      env_production: {
        NODE_ENV: "production",
      },
    },
    {
      name: "Backend - API II",
      script: "dist/index.js",
      autorestart: true,
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
