import axios from 'axios'
import apiConst from '../config/constants.js'
import configData from '../config/config.js'

const headers = {
    'Content-Type': 'application/json',
    'Company-ID': configData.COMPANY_ID,
    'Partner-ID': configData.PARTNER_ID
}


export const registerUser = async(email) => {

    return new Promise(async function (resolve,reject){
        axios.post(apiConst.BASE_URL + apiConst.API_REGISTER + '?faceId=' + email, {}, {
            headers:headers
        })
            .then((response) => {
                console.log('=======================Register Responce=======================')
                console.log(response.data)
                resolve(response.data)
            })
            .catch((error) => {
                console.log(error)
                reject(error)
            })
    })
}