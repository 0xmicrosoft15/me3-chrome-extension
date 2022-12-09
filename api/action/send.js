import { getHeader, getRequestParams } from "../utils/helpers.js"
import axios from 'axios'
import apiConst from '../config/constants.js'

export async function send(params) {

    const header = getHeader()
    params = await getRequestParams(params)
    var config = {
        method: 'post',
        url: apiConst.BASE_URL + apiConst.SEND_BTC_TRANSACTION + "?" + params,
        headers: header
    }
    return new Promise(async function(resolve,reject){
        axios(config)
        .then(function(response){
            console.log("txn: ", response.data)
            resolve(response.data)
        })
        .catch(function(error){
            console.log(error)
            resolve(error)
        })
    })
}