import Dexie from 'dexie'

//Create an instance of new Dexie db 
export const db = new Dexie('myDatabase')

//Create schemas for tables to be stored in db
db.version.stores({
    chain_list: "++id, chain, name, symbol, series, chain_id, node, sort, chain_icon, symbol_icon, tx_url, support_nft, support_dapp, pin_status, is_delete, coin_type", //blockchain list 
    wallet_list: "++id, chain, name, address, password, seed, password_tip, private_key, number, timestamp, type, is_backup, main_id", // wallet list 
    current_wallet: "++id, chain, name, address, password, seed, password_tip, private_key, number, timestamp, type, is_backup, main_id, wid", // current wallet 
    btc_mapping: "++id, wid, type, P2PKH, P2WPKH", // btc witness and common address 
    tx_hash_list: "++id, chain, hash", // tx hash list 
    address_note_list: "++id, chain, address, name, memo", // address note list 
    backup_list: "++id, chain, seed, private_key, status", // backup list 
    token_list: "++id, chain, symbol, address, is_main, symbol_icon, sort, decimal", //token list 
    nft_list: "++id, chain, contract_name, belong_contract, nft_url, nft_name, token_id, token_uri, sort, token_type" //nft list 
})

//Create methods to interact with table 

//ADD
//Add wallet 
export async function addWallet(walletObj) {
    try{
        await db.wallet_list.add(
            {
                chain: walletObj.chain, 
                name: walletObj.name, 
                address: walletObj.address, 
                password: walletObj.password, 
                seed: walletObj.seed, 
                password_tip: walletObj.passwordTip, 
                private_key: walletObj.privateKey, 
                number: walletObj.number, 
                timestamp: walletObj.timestamp, 
                type: walletObj.type, 
                is_backup: walletObj.is_backup, 
                main_id: walletObj.mainId
            }
        )
    }catch(error){
        console.log(error)
    }   
}
//Add chain 
export async function addChain(chainObj){
    try{
        await db.chain_list.add(
            {
                chain: chainObj.chain, 
                name: chainObj.name, 
                symbol: chainObj.symbol,
                series:  chainObj.series,
                chain_id: chainObj.chainI,
                node: chainObj.node,
                sort: chainObj.sort,
                chain_icon: chainObj.chain_icon,
                symbol_icon: chainObj.symbol_icon,
                tx_url: chainObj.tx_url,
                support_nft: chainObj.support_nft,
                support_dapp: chainObj.support_dapp,
                pin_status: chainObj.pin_status,
                is_delete: chainObj.is_delete,
                coin_type: chainObj.coinType,
            }
        )
    }catch(error){
        console.log(error)
    }   
}
//Add Mapping 
export async function addMapping(mapObj){
    try{
        await db.chain_list.add(
            {
                wid: mapObj.wid, 
                type: mapObj.type, 
                P2PKH: mapObj.P2PKH,
                P2WPKH:  mapObj.P2WPKH,
            }
        )
    }catch(error){
        console.log(error)
    }   
}
//GET
//Get all wallets 
export async function getAllWallets(){
    try{
        await db.wallet_list.toArray()
    }catch(error){
        console.log(error)
    }   
}
//Get all chains 
export async function getAllChains(){
    try{
        await db.chain_list.toArray()
    }catch(error){
        console.log(error)
    }   
}
//Get all not backed up wallets 
export async function getNotBackedUpWallets(){
    try{
        await db.wallet_list.where("is_backup").equals(0).toArray()
    }catch(error){
        console.log(error)
    }   
}
//Get wallet for chain 
export async function getChainWallet(chainName){
    try{
        await db.wallet_list.where("chain").equals(chainName + " chain").toArray()
    }catch(error){
        console.log(error)
    }   
}
//Get btc mapping 
export async function getBtcMapping(wid){
    try{
        await db.wallet_list.where("wid").equals(wid + "id").toArray()
    }catch(error){
        console.log(error)
    }   
}
//Get symbol for chain 
export async function getChainSymbol(chainName){
    try{
        await db.chain_list.where("chain").equals(chainName + " chain").get("symbol")
    }catch(error){
        console.log(error)
    }   
}
//Get series of chain 
export async function getChainSeries(chainName){
    try{
        await db.chain_list.where("chain").equals(chainName + " chain").get("series")
    }catch(error){
        console.log(error)
    }   
}
//Get name from chainid 
export async function getChainsFromChainId(chainId){
    try{
        await db.chain_list.where("chain_id").equals(chainId)
    }catch(error){
        console.log(error)
    }   
}
//get chain detail
export async function getChainDetail(chainName){
    try{
        await db.chain_list.where("chain").equals(chainName + " chain")
    }catch(error){
        console.log(error)
    }   
}
//DELETE
//Delete all chains 
export async function deleteAllChains(){
    try{
        await db.chain_list.clear()
    }catch(error){
        console.log(error)
    }   
}
//Delete chain 
export async function deleteChain(chainName){
    try{
        await db.chain_list.where("chain").equals(chainName + " chain").delete()
    }catch(error){
        console.log(error)
    }   
}
//Delete all tables 
export async function clearDatabase(){
    try{
        await db.clear()
    }catch(error){
        console.log(error)
    }   
}
//UPDATE
//Update backup status 
export async function updateBackUpStatus(id){
    try{
        await db.wallet_list.where("id").equals(id).modify({is_backup:1})
    }catch(error){
        console.log(error)
    }   
}