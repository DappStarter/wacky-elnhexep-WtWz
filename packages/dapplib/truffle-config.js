require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz arch suspect venture stone renew rifle arrow journey clog army gaze'; 
let testAccounts = [
"0xe264ec05f423523b5087de27523bd0bd7c93ffa00a35625725043388df8e1e59",
"0x347d8971c82cacd9a17951ea82679d7192d3d22bf718cd28196c5c3e0e565b15",
"0xc6cf61823678e7f8c65ef1aa878e19f79e3e01fc85dc6f1f7119e94c8bd838f1",
"0x84a75e005369982d28df8981bdfa1d0b2191f7cc3a6b2d4c87c6a69a210ecc9d",
"0x790d30a15b36e9cc1e65a1e80a582fb85982b9a3e70a3ca8633a9ba18d42e07b",
"0xa55317cd2ceb6a883e77da960e7222037981dc1ecb99f721fbc053386754d325",
"0x69cc576d9a3a688d99286078655f462091972f19b236512e1b6ea0f5d918e8b6",
"0x86341a1a46d8ac07312c30d3f595b99237ed1a226b3365185f63574da838daa6",
"0xef57e9cc1b638d99c3c75ffaebb656ca543248e994d6e6ef400b7f5b138aba3f",
"0x14dab72f4b0849e9a0c0f8459f84e5887de925ac1515e45e8d0c0592a6dc08ef"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


