import { getHeader, getRequestParams } from "../utils/helpers.js";
import axios from 'axios'
import apiConst from '../config/constants.js'

export async function getGoogleAccessToken(params) {

    const header = await getHeader()
    params = await  getRequestParams(params)
    var config = {
        method: 'get',
        url: apiConst.BASE_URL + apiConst.GET_ACCESS_TOKEN + '?' + params,
        headers: header
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