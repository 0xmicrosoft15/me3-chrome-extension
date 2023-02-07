import { getHeader, getRequestParams } from "./utils/helpers.js";
import axios from 'axios'
import apiConst from './config/constants.js'

export async function getTotalAssets(params) {

    const config = {
        method: 'get',
        url: apiConst.BASE_URL + apiConst.GET_TOTAL_ASSETS,
        headers: getHeader()
    }
    return new Promise(async function(resolve, reject){
        axios(config)
        .then(function(response){
            console.log("Total Assets: ", response.data)
            resolve(response.data.data)})
    })
    .catch(function(error){
        resolve(error)
    })
}

export async function getChainAssets(params) {

    params = await getRequestParams(params)
    const config = {
        method: 'get',
        url: apiConst.BASE_URL + apiConst.GET_CHAIN_ASSETS + '?' + params,
        headers: getHeader()
    }
    return new Promise(async function(resolve,reject){
        axios(config)
        .then(function(response){
            resolve(response.data.data)
        })
        .catch(function(error){
            resolve(error)
        })
    })
 } 