import { getHeader } from "../utils/helpers.js";
import axios from "axios"
import apiConst from '../config/constants.js'

export async function setFileId(fileId){

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