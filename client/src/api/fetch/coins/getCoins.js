import { getHeader, getRequestParams } from "../utils/helpers.js"
import axios from 'axios'
import apiConst from '../config/constants.js'

export const getCoins = async(params) => {

    params = await getRequestParams(params)
    const header = await getHeader()
    var config = {
        method: 'get',
        url: apiConst.BASE_URL + apiConst.GET_COIN + params,
        headers: header
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