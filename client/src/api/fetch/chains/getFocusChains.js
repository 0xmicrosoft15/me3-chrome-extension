import { getHeader, requestOfGet } from "../utils/helpers.js";
import axios from 'axios'
import apiConst from '../config/constants.js'

export async function getFocusChains(params) {
    
    const header = getHeader()
    params = await requestOfGet(params)
    var config = { 
        method: 'get',
        url: apiConst.BASE_URL + apiConst.GET_FOCUS_CHAINS + "?" + params,
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