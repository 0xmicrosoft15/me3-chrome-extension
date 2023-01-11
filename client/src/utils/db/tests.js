import { db, addWallet } from "./db.js"

walletObj = {"chain": "Avax", "name": "Avalanche"}

async function addWalletTest(walletObj){
    await db.open()
    console.log("Could open db!")

    addWallet(walletObj)
    console.log(db.wallet_list)
}

addWalletTest(walletObj)

