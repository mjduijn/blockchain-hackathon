var DefaultBuilder = require("truffle-default-builder");

module.exports = {
  build: new DefaultBuilder({
    "index.html": "index.html",
    "javascripts/app.js": [
      "javascripts/app.js"
    ],
    "stylesheets/app.css": [
      "stylesheets/app.css"
    ],
    "images/": "images/"
  }),
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
