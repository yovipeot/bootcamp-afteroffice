const { defineConfig } = require('cypress');
const dotenvPlugin = require('cypress-dotenv');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config = dotenvPlugin(config);
      return config;
    },
    // baseUrl: process.env.BASE_URL || 'https://www.saucedemo.com',
    baseUrl: process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    viewportHeight: 1080,
    viewportWidth: 1920,
    
    env: {
      username: process.env.USERNAME,
      password: process.env.PASSWORD
    },
    video: false,  
  },
});