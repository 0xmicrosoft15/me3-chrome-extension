import styled from 'styled-components'
import React from 'react'
import { addChainDb, addWalletDb, clearDatabaseDb, databaseInstance, deleteAllChainsDb, getAllChainsDb, getChainDetailDb, getChainSymbolDb, getChainWalletDb } from '../database/db.js'

const Container = styled.div``
const Button = styled.button``

// chain, name, symbol, series, chain_id, node, sort, chain_icon, symbol_icon, tx_url, support_nft, support_dapp, pin_status, is_delete, coin_type

const Db = () => {

    // const [] = 
    // databaseInstance.open()

    const Chain = {
        "chain": "Avax chain", 
        "name": "ABCD", 
        "symbol": "A", 
        "series": "B", 
        "chainId": 1,
        "node": 2,
        "sort": "B",
        "chain_icon": "ccc",
        "symbol_icon": "dddd",
        "tx_url": "http...",
        "support_nft": 0,
        "support_dapp": 1,
        "pin_status": 0,
        "is_delete" : 0,
        "coinType": 3
    }
    const Wallet = {
        "chain" : "Eth chain",
        "name" : "Ethereum",
        "address" : "abcdefg",
        "password" : "1234556",
        "seed" : "qwdwqefge5g",
        "password_tip" : "Whats your pets name?",
        "private_key": "12eqedef4t23=",
        "number" : 1,
        "timestamp": 12042022,
        "type" : "special",
        "is_backup" : 0,
        "main_id" : 12313243
    }

const handleAddChain = async (wallet) => {
    databaseInstance.open();
    await addChainDb(databaseInstance, wallet)
    console.log("Finished handle click")
}
// handleClick(Obj)
const handleGetChain = async (chainName) => {
    databaseInstance.open();
    // await getAllChains(databaseInstance)
    const res = await getChainDetailDb(databaseInstance, chainName)
    console.log(res)
}

const handleDelete = async () => {
    databaseInstance.open()
    await deleteAllChainsDb(databaseInstance)
    console.log("All delted!")
}

const handleGetChainSymbol = async (chainName) => {
    databaseInstance.open();
    // await getAllChains(databaseInstance)
    const res = await getChainSymbolDb(databaseInstance, chainName)
    console.log(res)
}

const handleAddWallet = async(wallet) => {
    databaseInstance.open()
    await addWalletDb(databaseInstance,wallet)
}

const handleGetChainWallet = async(chainName) => {
    databaseInstance.open()
    const res = await getChainWalletDb(databaseInstance, chainName)
    console.log(res)
}

const handleClearDb = async() => {
    databaseInstance.open()
    await clearDatabaseDb(databaseInstance)
}
  return (
    <Container>
        <Button onClick={() => handleAddChain(Wallet)}>Button</Button>
    </Container>
  )
}

export default Db