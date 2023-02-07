import { getHeader, getRequestParams } from "./utils/helpers.js";
import axios from 'axios'
import apiConst from './config/constants.js'

export async function getGoogleAccessToken(params) {

    params = await  getRequestParams(params)
    const config = {
        method: 'get',
        url: apiConst.BASE_URL + apiConst.GET_ACCESS_TOKEN + '?' + params,
        headers: getHeader()
    }
    return new Promise(async function(resolve,reject){
        axios(config)
        .then(function(response){
            console.log('=======================google access token=======================')
            console.log(response.data)
            resolve(response.data)
        })
        .catch(function(error){
            console.log(error)
            reject(error)
        })
    })

}