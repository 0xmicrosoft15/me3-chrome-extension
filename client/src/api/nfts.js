import { getHeader, getRequestParams } from "./utils/helpers.js";
import axios from "axios"
import apiConst from './config/constants.js'

export async function getNFTDetail(params) {

    const header = getHeader()
    params = await getRequestParams(params)
    var config = {
        method: 'get',
        url: apiConst.BASE_URL + apiConst.GET_NFT_DETAIL + "?" + params,
        headers: header
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

    const header = await getHeader()
    params = await getRequestParams(params)
    var config = {
        method: 'get',
        url: apiConst.BASE_URL + apiConst.GET_NFT_LIST + "?" + params,
        headers: header
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