import axios from 'axios'
import apiConst from '../config/constants.js'
import { getHeader } from '../utils/helpers.js'

export const addToken = async (params) => {

    const header = await getHeader()
    var data = JSON.stringify(params)
    var config = {
        method: 'post',
        url: apiConst.BASE_URL + apiConst.ADD_SYMBOL_ADDRESS_NOTE,
        headers: header,
        data: data
    }
    return new Promise(async function (resolve,reject){
        axios(config)
        .then(function(response) {
            resolve(response.data)
        })
        .catch(function(error) {
            reject(error)
        })
    })
}