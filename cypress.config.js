const { defineConfig } = require('cypress')

module.exports = defineConfig({
  allowCypressEnv: false,
  video: false,
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    supportFile: false,
    baseUrl: 'http://127.0.0.1:4173',
  }
})
