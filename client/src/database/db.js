import Dexie from 'dexie'

//Create an instance of new Dexie db 
export const databaseInstance = new Dexie('myDatabase')

//Create schemas for tables to be stored in db
databaseInstance.version(1).stores({
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
export async function addWalletDb(db,walletObj) {
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
export async function addChainDb(db, chainObj){
    try{
        await db.chain_list.add(
            {
                chain: chainObj.chain, 
                name: chainObj.name, 
                symbol: chainObj.symbol,
                series:  chainObj.series,
                chain_id: chainObj.chainId,
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
export async function addMappingDb(db, mapObj){
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
export async function getAllWalletsDb(db){
    try{
        const res = await db.wallet_list.toArray()
        return res
    }catch(error){
        console.log(error)
    }   
}
//Get all chains 
export async function getAllChainsDb(db){
    try{
        const res = await db.chain_list.toArray()
        return res
    }catch(error){
        console.log(error)
    }   
}
//Get all not backed up wallets 
export async function getNotBackedUpWalletsDb(db){
    try{
        const res = await db.wallet_list.where("is_backup").equals(0).toArray()
        return res
    }catch(error){
        console.log(error)
    }   
}
//Get wallet for chain 
export async function getChainWalletDb(db, chainName){
    try{
        const res = await db.wallet_list.where("chain").equals(chainName + " chain").toArray()
        return res
    }catch(error){
        console.log(error)
    }   
}
//Get btc mapping 
export async function getBtcMappingDb(db, wid){
    try{
        const res = await db.wallet_list.where("wid").equals(wid + "id").toArray()
        return res
    }catch(error){
        console.log(error)
    }   
}
//Get symbol for chain 
export async function getChainSymbolDb(db, chainName){
    try{
        const res = await db.chain_list.where("chain").equals(chainName + " chain").toArray()
        const symbol = res[0].symbol
        return symbol
    }catch(error){
        console.log(error)
    }   
}
//Get series of chain 
export async function getChainSeriesDb(db, chainName){
    try{
        const res = await db.chain_list.where("chain").equals(chainName + " chain").get("series").toArray()
        return res
    }catch(error){
        console.log(error)
    }   
}
//Get name from chainid 
export async function getChainsFromChainIdDb(db, chainId){
    try{
        const res = await db.chain_list.where("chain_id").equals(chainId).toArray()
        return res
    }catch(error){
        console.log(error)
    }   
}
//get chain detail
export async function getChainDetailDb(db, chainName){
    try{
        const res = await db.chain_list.where("chain").equals(chainName + " chain").toArray()
        return res
    }catch(error){
        console.log(error)
    }   
}
//DELETE
//Delete all chains 
export async function deleteAllChainsDb(db){
    try{
        await db.chain_list.clear()
    }catch(error){
        console.log(error)
    }   
}
//Delete chain 
export async function deleteChainDb(db, chainName){
    try{
        await db.chain_list.where("chain").equals(chainName + " chain").delete()
    }catch(error){
        console.log(error)
    }   
}
//Delete all tables 
export async function clearDatabaseDb(db){
    try{
        await db.delete().then(()=>{
            console.log("Database successfully deleted!")
        })
    }catch(error){
        console.error("Could not delete database")
    }   
}
//UPDATE
//Update backup status 
export async function updateBackUpStatusDb(db, id){
    try{
        await db.wallet_list.where("id").equals(id).modify({is_backup:1})
    }catch(error){
        console.log(error)
    }   
}