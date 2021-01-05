require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remember unit inflict person flip senior'; 
let testAccounts = [
"0x45f30c9639576f06a03c96207fee147e1ef3bca60ec90880a4d9751a66f8dec6",
"0x187503715f80a41cc49c7fceabd0eb4c67f7e3a39fba38e0c368382363c4e0f0",
"0x85f4f30632cb4a6ae586de1b3e91d8d100e911df8d372779ed74baf320c47340",
"0x228fe22d5a77dbc780b5bc277887086a5edc8fddaa364e0824e1cad80438c083",
"0xc8348d0d865813f28b1a7802118b3872a7f94c5ac7d0b6af1cc9291e01d6cac9",
"0xcfe2a2a4ff8e373df2187d827435a669ba9c70217cb995abbba8707cb584bb6d",
"0x516957708368d16a5bd05aa57c1e97a84830fdcfa1c4677aa0e11ea2255dd79d",
"0x5279fe86598037076b52a8ce48d89e1ed3950c549a7ff2baa7d273c18806431a",
"0x77d16f03088363b784280294b7c91223ab610b7801c38f0851e22d43db0041df",
"0x3fe5516f6f65ae26c3434ecda11ab80ed0c0775acbd3cc51a91284ec970d74a7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
