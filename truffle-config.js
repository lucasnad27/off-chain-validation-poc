const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777",
      from: "0x7D1D78c36d6aBCeF68546e343ee206A568079308"
    }
  },
  compilers: {
    solc: {
      version: "0.8.10",
    }
  }
};
