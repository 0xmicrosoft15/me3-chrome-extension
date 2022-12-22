import { getHeader } from "../utils/helpers.js";
import axios from 'axios'
import apiConst from '../config/constants.js'

export async function getTotalAssets(params) {

    const header = getHeader()
    var config = {
        method: 'get',
        url: apiConst.BASE_URL + apiConst.GET_TOTAL_ASSETS,
        headers: header
    }
    return new Promise(async function(resolve, reject){
        axios(config)
        .then(function(response){
            console.log("Total Assets: ", response.data)
            resolve(response.data.data)})
    })
    .catch(function(error){
        resolve(error)
    })
}