import { getHeader, getRequestParams } from "./utils/helpers.js"
import axios from 'axios'
import apiConst from './config/constants.js'

export const getCoins = async(params) => {

    params = await getRequestParams(params)
    const config = {
        method: 'get',
        url: apiConst.BASE_URL + apiConst.GET_COIN + params,
        headers: getHeader()
    }
    return new Promise(async function(resolve,reject){
        axios(config)
        .then(function(response){
            if (response.data.code > 0 ) {
                reject(response.data.msg)
            }else
                resolve(response.data.data)
        })
        .catch(function(error){
            console.log(error)
            reject(error)
        })
    })
}

export const getCoinDetail = async(params) => {

    params = await getRequestParams(params)
    const config = {
        method: 'get',
        url: apiConst.BASE_URL + apiConst.GET_COIN_DETAIL + "?" + params,
        headers: getHeader()
    }
    return new Promise(async function(resolve,reject){
        axios(config)
        .then(function(response) {
            console.log("Coin details:", response.data.data)
            resolve(response.data.data)
        })
        .catch(function(error) {
            console.log(error)
            reject(error)
        })
    })
}

