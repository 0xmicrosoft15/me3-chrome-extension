import { getHeader } from "../utils/helpers"
import apiConst from '../config/constants.js'
import axios from "axios"

export async function getSupportCurrency(params) {
    const header = getHeader()
    var config = {
        method: 'get',
        url: apiConst.BASE_URL + apiConst.GET_SUPPORT_CURRENCY,
        headers: header
    }
    return new Promise(async function(resolve,reject){
        axios(config)
            .then(function(response){
                let data = response.data.data
                resolve(data)
            })
            .catch(function(error){
                console.log('Error currency', error)
                resolve(error)
            })
    })
} 