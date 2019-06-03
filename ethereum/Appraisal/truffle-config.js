
const HDWalletProvider = require('truffle-hdwallet-provider')
var mnemonic = "bone upset eager profit net adapt fold bone clever music vague voyage"
module.exports = {
  migrations_directory: './migrations',
  networks: {
    test: {
      host: 'localhost',
      port: 8545,
      network_id: '*'
    },
    ropsten: {
      network_id: 3,
      gas: 6.5e6,
      gasPrice: 5e9,
      provider: () => {
        const ropstenProvider = new HDWalletProvider(
          // rinkebyWallet,
          process.env['ROPSTEN_PASSPHRASE'],
          'https://ropsten.infura.io/'
        )

        var nonceTracker = new NonceTrackerSubprovider()
        ropstenProvider.engine._providers.unshift(nonceTracker)
        nonceTracker.setEngine(ropstenProvider.engine)

        return ropstenProvider
      }
    },
    rinkeby: {
      network_id: 4,
      gas: 6.5e6,
      gasPrice: 5e9,
      provider: () => {
        const rinkebyProvider = new HDWalletProvider(
          // rinkebyWallet,
            mnemonic,
          'https://rinkeby.infura.io/01430c533dcd4c42bd9cc98cff3eb0a4'
        )

        var nonceTracker = new NonceTrackerSubprovider()
        rinkebyProvider.engine._providers.unshift(nonceTracker)
        nonceTracker.setEngine(rinkebyProvider.engine)

        return rinkebyProvider
      }
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 500
    }
  },
  mocha: {
    reporter: 'mocha-multi-reporters',
    useColors: true,
    enableTimeouts: false,
    reporterOptions: {
      configFile: './mocha-smart-contracts-config.json'
    }
  }
}