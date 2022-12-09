import axios from "axios"
import apiConst from '../config/constants.js'
import configData from '../config/config.js'

const headers = {
    'Content-Type': 'application/json',
    'Company-ID': configData.COMPANY_ID,
    'Partner-ID': configData.PARTNER_ID
}


export async function keyExchange(email, publicKey) {

    const data = {
        email: email,
        publicKey: publicKey
    }
    var config = {
        method: "post",
        url: apiConst.BASE_URL + apiConst.API_KEY_EXCHANGE,
        data: data,
        headers: headers
    }
    return new Promise(async function(resolve,reject){
        axios(config)
        .then(function(response){
            console.log('apiKeyExchange Response=======================')
            console.log(response.data.data)
            resolve(response.data.data)
        })
        .catch(function(error){
            console.log(error)
            reject(error)
        })
    })
}