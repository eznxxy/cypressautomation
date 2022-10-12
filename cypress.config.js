const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
    baseUrl: 'https://rsk-web-revamp.vercel.app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push("--incognito");
          return launchOptions
        }

        if (browser.name === 'electron') {
          launchOptions.preferences.incognito = true
          return launchOptions
        }
      })
    },
  },
});
