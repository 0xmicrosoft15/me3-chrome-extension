import { getHeader, getRequestParams } from "../utils/helpers.js"
import axios from 'axios'
import apiConst from '../config/constants.js'

export const addwallet = async(params) => {

    params = await getRequestParams(params)
    const header = await getHeader()
    var config = {
        method: 'post',
        url: apiConst.BASE_URL + apiConst.ADD_WALLET + "?" + params,
        headers: header
    }
    return new Promise(async function(resolve,reject){
        axios(config)
        .then(function(response) {
            console.log('=======================add wallet Response=======================')
            console.log(response.data)
            resolve(response.data)
        })
        .catch(function(error) {
            console.log(error)
            reject(error)
        })
    })

}