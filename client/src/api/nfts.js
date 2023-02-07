import { getHeader, getRequestParams } from "./utils/helpers.js";
import axios from "axios"
import apiConst from './config/constants.js'

export async function getNFTDetail(params) {

    params = await getRequestParams(params)
    const config = {
        method: 'get',
        url: apiConst.BASE_URL + apiConst.GET_NFT_DETAIL + "?" + params,
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

export async function getNFTList(params){

    params = await getRequestParams(params)
    const config = {
        method: 'get',
        url: apiConst.BASE_URL + apiConst.GET_NFT_LIST + "?" + params,
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