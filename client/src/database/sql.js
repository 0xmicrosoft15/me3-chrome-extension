import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });
import { logger } from '../utils/Log.js';

let tablelist = [
	// block chain list
	`create table if not exists tb_chain(
	"id" INTEGER PRIMARY KEY AUTOINCREMENT,
	"chain" TEXT,
	"name" TEXT,
	"symbol" TEXT,
	"series" TEXT,
	"chainId" INTEGER,
	"node" TEXT,
	"sort" INTEGER,
	"chain_icon" TEXT,
	"symbol_icon" TEXT,
	"tx_url" TEXT,
	"support_nft" INTEGER,
	"support_dapp" INTEGER,
	"pin_status" INTEGER,
	"is_delete" INTEGER,
	"coinType" INTEGER)`,
	// wallet list
	`create table if not exists tb_wallet(
	"id" INTEGER PRIMARY KEY AUTOINCREMENT,
	"chain" TEXT,
	"name" TEXT,
	"address" TEXT,
	"password" TEXT,
	"seed" TEXT,
	"passwordTip" TEXT,
	"privateKey" TEXT,
	"number" INTEGER,
	"timestamp" INTEGER,
	"type" TEXT,
	"is_backup" INTEGER,
	"mainId" INTEGER)`,
	// wallet currently in use
	`create table if not exists tb_default(
	"id" INTEGER PRIMARY KEY AUTOINCREMENT,
	"chain" TEXT,
	"name" TEXT,
	"address" TEXT,
	"password" TEXT,
	"seed" TEXT,
	"passwordTip" TEXT,
	"privateKey" TEXT,
	"number" INTEGER,
	"timestamp" INTEGER,
	"type" TEXT,
	"is_backup" INTEGER,
	"mainId" INTEGER,
	"wid" INTEGER)`,
	// btc witness and common address 
	`CREATE TABLE IF NOT EXISTS tb_btcMapping(
	"id" INTEGER PRIMARY KEY AUTOINCREMENT,
	"wid" INTEGER,
	"type" TEXT,
	"P2PKH" TEXT,
	"P2WPKH" TEXT)`,
	// tx hash list
	`CREATE TABLE IF NOT EXISTS tb_hash(
	"id" INTEGER PRIMARY KEY AUTOINCREMENT,
	"chain" TEXT,
	"hash" TEXT)`,
	// address note list
	`CREATE TABLE IF NOT EXISTS tb_address(
	"id" INTEGER PRIMARY KEY AUTOINCREMENT,
	"chain" TEXT,
	"address" TEXT,
	"name" TEXT,
	"memo" TEXT)`,
	// 
	`CREATE TABLE IF NOT EXISTS tb_backUp(
	"id" INTEGER PRIMARY KEY AUTOINCREMENT,
	"chain" TEXT,
	"seed" TEXT,
	"privateKey" TEXT,
	"status" INTEGER)`,
	// import token list
	`CREATE TABLE IF NOT EXISTS tb_token(
	"id" INTEGER PRIMARY KEY AUTOINCREMENT,
	"chain" TEXT,
	"symbol" TEXT,
	"address" TEXT,
	"isMain" INTEGER,
	"symbol_icon" TEXT,
	"sort" INTEGER,
	"decimal" INTEGER)`,
	// import nft list
	`CREATE TABLE IF NOT EXISTS tb_nft(
	"id" INTEGER PRIMARY KEY AUTOINCREMENT,
	"chain" TEXT,
	"contract_name" TEXT,
	"belong_contract" TEXT,
	"nft_url" TEXT,
	"nft_name" TEXT,
	"tokenId" TEXT,
	"tokenUri" TEXT,
	"sort" INTEGER,
	"tokenType" TEXT)`
]



let deleteTablesData = [
	// block chain list
	`DELETE FROM tb_chain`,
	// wallet list
	`DELETE FROM tb_wallet`,
	// wallet currently in use
	`DELETE FROM tb_default`,
	// btc witness and common address 
	`DELETE FROM tb_btcMapping`,
	// address note list
	`DELETE FROM tb_address`,
	// 
	`DELETE FROM tb_backUp`,
	// import token list
	`DELETE FROM tb_token`
]

function createTables() {
	for (i = 0; i < tablelist.length; i++) {
		result = executeQuery(tablelist[i], [])
	}
}

function insertWallet(walletObj) {
	let sql = `INSERT INTO tb_wallet (
        "chain","name","address","password","seed","passwordTip",
        "privateKey","number","timestamp","type","mainId","is_backup") 
        VALUES (
        "${walletObj.chain}","${walletObj.name}","${walletObj.address}","${walletObj.password}","${walletObj.seed}","${walletObj.passwordTip}",
        "${walletObj.privateKey}",${walletObj.number},${walletObj.timestamp},"${walletObj.type}",
        ${walletObj.mainId},${walletObj.is_backup})`
	let result = executeQuery(sql, []);
	return result;
}
function InsertChain(Obj) {
	let sql = `INSERT INTO tb_chain (
	"chain","name","symbol","series","chainId",
	"node","coinType","sort","symbol_icon","tx_url","chain_icon","support_nft","support_dapp","pin_status","is_delete") 
	VALUES (
	"${Obj.chain}","${Obj.name}","${Obj.symbol}","${Obj.series}",${Obj.chainId},
	"${Obj.node}",${Obj.coinType},${Obj.sort},"${Obj.symbol_icon}","${Obj.tx_url}","${Obj.chain_icon}",
	${Obj.support_nft},${Obj.support_dapp},${Obj.pin_status},${Obj.is_delete})`
	let result = executeQuery(sql, []);
	return result;
}
function insertMapping(Obj) {
	let sql = `INSERT INTO tb_btcMapping ("wid","type","P2PKH","P2WPKH") VALUES ("${Obj.wid}","${Obj.type}","${Obj.P2PKH}","${Obj.P2WPKH}")`
	let result = executeQuery(sql, []);
	return result;
}
async function getAllWallets() {
	let result = await executeQuery("SELECT * FROM tb_wallet", []);
	return result;
}

async function getAllNotBackedUpWallets() {
	let result = await executeQuery("SELECT * FROM tb_wallet where is_backup=0",);
	return result;
}
// get particular chain wallet
async function getWalletForChain(chain) {
	let query = `SELECT * FROM tb_wallet where chain="` + chain + `"`;
	let result = await executeQuery(query)
	return result;
}
async function getAllChains() {
	let result = await executeQuery("SELECT * FROM tb_chain", []);
	return result;
}

async function getBTCMapping(id) {
	let result = await executeQuery(`SELECT * FROM tb_btcMapping where wid=` + id, []);
	return result;
}

async function updateBackupStatus(id) {
	var query = "UPDATE tb_wallet set is_backup=1 where id=" + id
	let result = await executeQuery(query)
	return result;
}
async function getSymbolForChain(chain) {
	var query = `SELECT symbol FROM tb_chain where chain="` + chain + `"`
	return await executeQuery(query)
}

async function getSeriesOfChain(chain) {
	var query = `SELECT series FROM tb_chain where chain="` + chain + `"`
	return await executeQuery(query)
}

async function getNameFromChainId(chainId) {
	var query = `SELECT * FROM tb_chain where chainId=` + chainId + ``
	return await executeQuery(query)
}
async function getChainDetail(chain) {
	var query = `SELECT * FROM tb_chain where chain="` + chain + `"`
	return await executeQuery(query)
}
async function deleteAllChains() {
	let query = "DELETE FROM tb_chain"
	return await executeQuery(query);
}
function clearDatabase() {
	for (i = 0; i < deleteTablesData.length; i++) {
		result = executeQuery(deleteTablesData[i], [])
	}
}
const executeQuery = (sql, params = []) => new Promise((resolve, reject) => {
	db.transaction((trans) => {
		trans.executeSql(sql, params, (trans, results) => {
			resolve(results);
		},
			(error) => {
				logger("Error")
				reject(error);
			});
	});
});

async function checkAddressExist(address, chain) {
	let query = `SELECT * FROM tb_wallet where address="` + address + `" and chain="` + chain + `"`
	return await executeQuery(query)
}

export {
	executeQuery, createTables, insertWallet, clearDatabase, getAllWallets, deleteAllChains, InsertChain, getAllChains, getSymbolForChain,
	getAllNotBackedUpWallets, updateBackupStatus, getWalletForChain, getSeriesOfChain, getChainDetail, insertMapping, getBTCMapping, checkAddressExist, getNameFromChainId
}