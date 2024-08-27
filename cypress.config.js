const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    // retries: 1, // con retries le deicmo que cuando un caso de prueba falla, intenta de nuevo

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
