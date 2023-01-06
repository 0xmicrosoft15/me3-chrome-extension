import { retrieveAuthData } from "./localStorage.js";
import storageConst from "../config/storage.js"
import configData from '../config/config.js'
import apiConst from '../config/constants.js'
import axios from "axios";

async function getHeader() {

    let lightToken = await localStorage.getItem(storageConst.LIGHT_TOKEN)  
    let currency = await localStorage.getItem(storageConst.LEGAL_DETAIL)

    return {
        'Company-ID': configData.COMPANY_ID,
        'Partner-ID': configData.PARTNER_ID,
        'Light-token': lightToken,
        'Content-Type': 'application/json',
        'Currency': JSON.parse(currency) && JSON.parse(currency).fiat ? JSON.parse(currency).fiat : 'USD'
    }
}

async function requestOfGet({url, params}) {
    try {
        params = await getRequestParams(params)
        console.log(`GET ${url}?${params}`)
        let lightToken = localStorage.getItem(storageConst.LIGHT_TOKEN)
        var config = {
            method: 'get',
            url: apiConst.BASE_URL + url,
            headers: {
                        'Content-Type': 'application/json',
                        'Company-ID': configData.COMPANY_ID,
                        'Partner-ID': configData.PARTNER_ID,
                        'Light-token': lightToken,
            },
        };
    
        return new Promise(async function (resolve, reject){
            axios(config)
                .then(function(response) {
                    let success = response && response.data.code == 0
                    console.log("Success", success)
                    if (success)
                        resolve(response.data)
                    else reject("No data")
                }).catch(function(error){
                    console.log("error:", error)
                    reject(error)
                })
        })
    }catch(err){
        console.log(err)
    }
}

async function getRequestParams(obj) {
    return new Promise(async function(resolve,reject){
        let temp = []
        Object.keys(obj).forEach(item => {
            temp.push(`${item}=${obj[item]}`)
        })
        resolve(temp.join('&'))
    })
} 

export {getHeader, requestOfGet, getRequestParams}