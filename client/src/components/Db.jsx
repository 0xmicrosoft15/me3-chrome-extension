import styled from 'styled-components'
import React, { useEffect } from 'react'
import { addChain, addWallet, databaseInstance, deleteAllChains, getAllChains, getChainDetail } from '../utils/db/db'

const Container = styled.div``
const Button = styled.button``

// chain, name, symbol, series, chain_id, node, sort, chain_icon, symbol_icon, tx_url, support_nft, support_dapp, pin_status, is_delete, coin_type

const Db = () => {

    // const [] = 
    // databaseInstance.open()

    const Obj = {
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

const handleAdd = async (wallet) => {
    databaseInstance.open();
    await addChain(databaseInstance, wallet)
    console.log("Finished handle click")
}
// handleClick(Obj)
const handleGet = async (chainName) => {
    databaseInstance.open();
    // await getAllChains(databaseInstance)
    const res = await getChainDetail(databaseInstance, chainName)
    console.log(res)
}

const handleDelete = async () => {
    databaseInstance.open()
    await deleteAllChains(databaseInstance)
    console.log("All delted!")
}

  return (
    <Container>
        <Button onClick={() => handleGet("Avax")}>Button</Button>
    </Container>
  )
}

export default Db