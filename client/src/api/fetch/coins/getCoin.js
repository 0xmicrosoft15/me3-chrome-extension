import { getHeader, getRequestParams } from "../utils/helpers.js"
import axios from 'axios'
import apiConst from '../config/constants.js'

export const getCoinDetail = async(params) => {

    const header = getHeader()
    params = await getRequestParams(params)
    var config = {
        method: 'get',
        url: apiConst.BASE_URL + apiConst.GET_COIN_DETAIL + "?" + params,
        headers: header
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