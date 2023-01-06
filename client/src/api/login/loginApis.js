import axios from "axios"
import apiConst from '../config/constants.js'
import configData from '../config/config.js'
import { getHeader } from "../utils/helpers.js";

const headers = {
    'Content-Type': 'application/json',
    'Company-ID': configData.COMPANY_ID,
    'Partner-ID': configData.PARTNER_ID
}

async function keyExchange(email, publicKey) {

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

async function registerUser(email) {

    return new Promise(async function (resolve,reject){
        axios.post(apiConst.BASE_URL + apiConst.API_REGISTER + '?faceId=' + email, {}, {
            headers:headers
        })
            .then((response) => {
                console.log('=======================Register Response=======================')
                console.log(response.data)
                resolve(response.data)
            })
            .catch((error) => {
                console.log("error", error)
                reject(error)
            })
    })
}

async function setFileId(fileId){

    const header = await getHeader()
    return new Promise(async function(resolve,reject){
        var url
        if (fileId == undefined) {
            url = apiConst.BASE_URL + apiConst.SET_GET_DRIVE_FILE_ID + "?fileId="
        }else{
            url = apiConst.BASE_URL + apiConst.SET_GET_DRIVE_FILE_ID + `?fileId=${fileId}`
        }
        var config = {
            method: 'post',
            url: url,
            headers: header
        }
        axios(config)
        .then(function(response){
            console.log('=======================fileid Responce=======================')
            console.log(response.data)
            resolve(response.data)
        })
        .catch(function(error){
            console.log(error)
            reject(error)
        })
    })
}

async function uploadFileGdrive(url, accessToken, file) {
    
    return new Promise(async function(resolve,reject){
        axios
        .post(url, {
            data: `---------314159265358979323846 Content-Type: application/json {"name":"test.json","mimeType":"application/json"} ---------314159265358979323846 Content-Type: application/json  ${JSON.stringify(file)} ---------314159265358979323846--`,
        }, {
            header: {
                'Content-Type': 'multipart/related; boundary="-------314159265358979323846"',
                "authorization": 'Bearer ' + accessToken
            }
        })
        .then(function(response){
            resolve(response)
        })
        .catch(function(error){
            reject(error)
        })
    })
}

export {keyExchange, registerUser, setFileId, uploadFileGdrive}