import {
    cryptoIsReady,
    cryptoWaitReady,
    encodeAddress,
    mnemonicToMiniSecret,
    sr25519PairFromSeed,
  } from "@polkadot/util-crypto"
  import { u8aToHex } from "@polkadot/util"
  import { ethers } from "ethers"

  export default async function createWallet(series, mnemonic){

        switch(series) {
            case "btc":
            case "ltc":
            case "bch":
                return 

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