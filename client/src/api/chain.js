import { requestOfGet, getHeader } from "./utils/helpers.js";
import apiConst from './config/constants.js'
import axios from 'axios'

export async function getAllChains(params = {}) {
    let result = await requestOfGet({
        url: apiConst.GET_CHAIN_LIST,
        params
    })
    return result.data
}

export async function getFocusChains(params) {
    
    params = await requestOfGet(params)
    const config = { 
        method: 'get',
        url: apiConst.BASE_URL + apiConst.GET_FOCUS_CHAINS + "?" + params,
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