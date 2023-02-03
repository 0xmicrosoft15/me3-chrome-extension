import {
    cryptoIsReady,
    cryptoWaitReady,
    encodeAddress,
    mnemonicToMiniSecret,
    sr25519PairFromSeed,
}from "@polkadot/util-crypto"
import {u8aToHex} from "@polkadot/util"
import { ethers } from "ethers"
import * as bip39 from "bip39"
import * as bitcoin from "bitcoinjs-lib"
import * as bitcoincash from "@pefish/bch-bitcoinjs-lib"
// import {fromSeed} from "bip32"

// import ecc from '@bitcoinerlab/secp256k1'
import {keyPairFromPrivateKey} from "@nodefactory/filecoin-address"
// import { Buffer } from "buffer"

// const bip32 = BIP32Factory(ecc)
// console.log(Buffer)

  export async function createWallet(series, mnemonic){

        switch(series) {
            case "btc": {
                const network = bitcoin.networks.testnet
                createBtcWallet(mnemonic, network)            
            }
            case "ltc": {
                const network = {
                    messagePrefix: '\x19Litecoin Signed Message:\n',
                    bip32: {
                        public: 0x019da462,
                        private: 0x019d9cfe
                    },
                    pubKeyHash: 0x30,
                    scriptHash: 0x32,
                    wif: 0xb0
                }
                createBtcWallet(mnemonic, network)   
            }
                
            case "bch": {
                try{
                    const network = bitcoincash.networks.testnet
                    createBtcWallet(mnemonic, network)
                }catch(error){
                    console.log(error)
                }
            }

            case "eth": {
                const wallet = ethers.Wallet.fromMnemonic(mnemonic)
                return {
                    walletAddress: wallet.address,
                    secretRaw: wallet.privateKey
                }
            }
            case "dot": {
                if (!cryptoIsReady()) {
                    await cryptoWaitReady()
                }
                const mini = mnemonicToMiniSecret(mnemonic)
                const { publicKey, secretKey } = sr25519PairFromSeed(mini)
                return {
                    walletAddress: encodeAddress(publicKey),
                    secretRaw: u8aToHex(secretKey)
                }
            }
            // case "fil": {
            //     const network = "mainnet"
            //     createFilWallet(mnemonic, network)
            // }
            default: {
                console.log("wrong input for creeating wallet")
                break
            }
        }
}

  export async function generateMnemonic() {
    return ethers.utils.entropyToMnemonic(ethers.utils.randomBytes(16))
}

  async function createBtcWallet(mnemonic, network) {
    try{
        const wallets = []
        const seed = await bip39.mnemonicToSeedAsync(mnemonic)
        const root = bitcoin.bip32.fromSeed(seed, network)

        const path = "m/44'/3'/0'/0/0"
        const child = root.derivePath(path).toWIF()
        const keyPair = bitcoin.ECPair.fromWIF(child, network)

        const addP2PKH = genP2PKHAdd(keyPair, network)
        const addP2WPKH = genP2WPKHAdd(keyPair, network)

        wallets.push({
            address: addP2PKH,
            type: "P2PKH",
            address_P2PKH: addP2PKH,
            address_P2WPKH: addP2WPKH,
            privateKey: child
        })

        return {
            "seed": mnemonic,
            "list": wallets
        }
    }catch(error){
        console.log('error: ', error)
    }
  }

function genP2WPKHAdd(keyPair, network) {
    const p2wpkh =  bitcoin.payments.p2sh({
        redeem: bitcoin.payments.p2wpkh({
            pubkey: keyPair.publicKey,
            network: network,
        }),
        network: network
    })
    const address = p2wpkh.address
    return address
}

function genP2PKHAdd(keyPair, network) {
    const p2pkh = bitcoin.payments.p2pkh({
        pubkey: keyPair.publicKey,
        network
    })
    const address = p2pkh.address
    return address
}

// // function createFilWallet(mnemonic, network) {
// //     try{
// //         let wallets = []
// //         const seed = bip39.mnemonicToSeedAsync(mnemonic)
// //         const root = fromSeed(seed)

// //         const path = "m/44'/461'/0'/0/0"
// //         const child = root.derivePath(path)
// //         const privateKey = Buffer.from(child.privateKey).toString("hex")

// //         const result = keyPairFromPrivateKey(privateKey, network)

// //         wallets.push({
// //             "address": result.address,
// //             "privateKey": result.privateKey
// //         })

// //         return {
// //             "seed": mnemonic,
// //             "list": wallets
// //         }
// //     }catch(error){
// //         console.log(error)
// //     }

// }
