import styled from 'styled-components'
import React from 'react'
import {getAllChains }from "../api/chain"
import { ethers } from 'ethers'
import { generateMnemonic, createWallet } from '../utils/wallets'
import { isCompositeComponentWithType } from 'react-dom/test-utils'
import { mergeBreakpointsInOrder } from '@mui/system'
const _ = require('lodash')

const Container = styled.div``
const Button = styled.button``

const Wallet = () => {

const handleGetAllChains = async () => {
    const wallets = []
    const chains = await getAllChains()
    console.log(chains)
    const refined = chains.reduce(
                                (result,acc) => {
                                    const list = result[(acc.series).toLowerCase()] || []
                                    list.push({
                                        chainName: acc.name,
                                        walletName: (`${acc.description}`).trim(),
                                    })
                                    result[(acc.series).toLowerCase()] = list
                                    return result 
                                     
                                })
    
    console.log(chains[0])
    console.log(refined)
    const mnemonic = await generateMnemonic()
    console.log(mnemonic)
    for (const[key,list] of Object.entries(chains[0])) {
      console.log(key,list)
      const wallet = await createWallet(key, mnemonic)
      console.log(wallet)
      if (!_.isEmpty(wallet)) {
        wallets.push(_.map(list, (it) => _.merge(it,wallet)))
      }
    }
    console.log(_.flatten(wallets))
    return _.flatten(wallets)
    
    // const wallets = createWallet(refined.series, mnemonic)
    // console.log(wallets)
}

  return (
    <Container>
        <Button onClick={() => handleGetAllChains()}>Button</Button>
    </Container>
  )
}

export default Wallet



//    // const [] = 
//     // databaseInstance.open()

//     const Chain = {
//         "chain": "Avax chain", 
//         "name": "ABCD", 
//         "symbol": "A", 
//         "series": "B", 
//         "chainId": 1,
//         "node": 2,
//         "sort": "B",
//         "chain_icon": "ccc",
//         "symbol_icon": "dddd",
//         "tx_url": "http...",
//         "support_nft": 0,
//         "support_dapp": 1,
//         "pin_status": 0,
//         "is_delete" : 0,
//         "coinType": 3
//     }
//     const Wallet = {
//         "chain" : "Eth chain",
//         "name" : "Ethereum",
//         "address" : "abcdefg",
//         "password" : "1234556",
//         "seed" : "qwdwqefge5g",
//         "password_tip" : "Whats your pets name?",
//         "private_key": "12eqedef4t23=",
//         "number" : 1,
//         "timestamp": 12042022,
//         "type" : "special",
//         "is_backup" : 0,
//         "main_id" : 12313243
//     }

// const handleAddChain = async (wallet) => {
//     databaseInstance.open();
//     await addChain(databaseInstance, wallet)
//     console.log("Finished handle click")
// }
// // handleClick(Obj)
// const handleGetChain = async (chainName) => {
//     databaseInstance.open();
//     // await getAllChains(databaseInstance)
//     const res = await getChainDetail(databaseInstance, chainName)
//     console.log(res)
// }

// const handleDelete = async () => {
//     databaseInstance.open()
//     await deleteAllChains(databaseInstance)
//     console.log("All delted!")
// }

// const handleGetChainSymbol = async (chainName) => {
//     databaseInstance.open();
//     // await getAllChains(databaseInstance)
//     const res = await getChainSymbol(databaseInstance, chainName)
//     console.log(res)
// }

// const handleAddWallet = async(wallet) => {
//     databaseInstance.open()
//     await addWallet(databaseInstance,wallet)
// }

// const handleGetChainWallet = async(chainName) => {
//     databaseInstance.open()
//     const res = await getChainWallet(databaseInstance, chainName)
//     console.log(res)
// }

// const handleClearDb = async() => {
//     databaseInstance.open()
//     await clearDatabase(databaseInstance)
// }