import {
    cryptoIsReady,
    cryptoWaitReady,
    encodeAddress,
    mnemonicToMiniSecret,
    sr25519PairFromSeed,
  } from "@polkadot/util-crypto"
  import { u8aToHex } from "@polkadot/util"
  import { ethers } from "ethers"
  import bitcoin from "bitcoinjs-lib"
  import bip39 from "bip39"
  import bitcoincash from "@pefish/bch-bitcoinjs-lib"

  export default async function createWallet(series, mnemonic){

        switch(series) {
            case "btc": {
                const network = bitcoin.networks.testnet
                createBtcWallet(mnemonic, network)
            }
            case "ltc": {
                
            }
            case "bch": {
                const network = bitcoincash.networks.testnet
                createBtcWallet(mnemonic, network)
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
            case "fil": {

            }
            default:
                break
        }
        return undefined

  }

  function createBtcWallet(mnemonic, network) {

    const seed = bip39.mnemonicToSeedSync(mnemonic)
    const root = bitcoin.bip32.fromSeed(seed)

    const path = "m/44'/3'/0'/0/0"
    const child = root.derivePath(seed)

    const {address} = bitcoin.payments.p2sh({
        redeem: bitcoin.payments.p2wpkh({
            pubkey: child.pubkey,
            network: network,
        }),
        network: network
    })
    return address 
  }


async function createBTCSeed(count, index, mnemonic, seed, testnet = true,) {
    try {
        let network;
        if (testnet) {
            network = bitcoinlib.networks.testnet;
        } else {
            network = bitcoinlib.networks.bitcoin;
        }

        let wallets = [];
        let currentSeed;
        if (mnemonic) {
            currentSeed = seed;
        } else {
            mnemonic = generateMnemonic();
            currentSeed = await getSeedFromMnemonic(mnemonic);
        }

        const root = bitcoin.bip32.fromSeed(currentSeed, network);
        let path = chooseBipSeed('44', index, testnet);
        let wif = root.derivePath(path).toWIF();
        const keyPair = bitcoin.ECPair.fromWIF(wif, network);
        // 普通地址
        let address_P2PKH = generateAddress('P2PKH', keyPair, network);
        // 隔离见证地址
        let witness_P2WPKH = generateAddress('P2WPKH', keyPair, network);
        wallets.push({
            "address": witness_P2WPKH,
            "type": "P2PKH",
            "address_P2PKH": address_P2PKH,
            "address_P2WPKH": witness_P2WPKH,
            "privateKey": wif
        });

        return {
            "seed": mnemonic,
            "list": wallets
        };

    } catch (error) {
        logger("Error", error)
    }
}
