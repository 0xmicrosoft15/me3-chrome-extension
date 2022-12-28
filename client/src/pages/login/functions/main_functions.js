import { retrieveAuthData, saveAuthData } from "../../../api/config/storage.js"
import {decrypted, RSA2text, decryptMessage, importRsaKey, str2ab, b642ab} from "./helper_functions.js"
import storageConst from "../../../api/config/storage.js"
import { keyExchange, registerUser, setFileId, uploadFileGdrive } from "../../../api/login/loginApis.js"
import { setDecrypt } from "../../../utils/rsaEncryptDecrypt.js"
import { Encrypt, getRandomString } from "../../../utils/EncryptDecrpyt.js"
import { logger } from "../../../utils/Log.js"
// import { getAllWallets } from "../../../database/sql.js"
import apiConst from '../../../api/config/constants'
import { getSupportCurrency } from "../../../api/fetch/getSupportCurrency.js"
import {useDispatch} from 'react-redux'
import { setCurrentCurrency } from "../../../redux/Action/CurrencyAction.js"
import { uploadFileToDrive } from "../../../api/fetch/uploadFileToDrive.js"


var url = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart'

async function encryption(email) {
    let Key = await window.crypto.subtle.generateKey({
        name: 'RSA-OAEP',
        modulusLength: 1024,
        publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
        hash: 'SHA-512'
    },
    true,
    ['encrypt', 'decrypt']
    )

    let keydata1 = await window.crypto.subtle.exportKey(
        'pkcs8',
        Key.privateKey
    )

    let keydata2 = await window.crypto.subtle.exportKey(
        'spki',
        Key.publicKey
    )

    var privateKey = RSA2text(keydata1,1)
    var publicKey = RSA2text(keydata2)

    localStorage.setItem(storageConst.CLIENT_PUBLICKEY, publicKey)
    localStorage.setItem(storageConst.CLIENT_PRIVATEKEY, privateKey)

    keyExchange(email, publicKey)
        .then(data => {
            localStorage.setItem(storageConst.SERVER_PUBLICKEY, data)
            registerUser(email)
                .then(registerData => {
                    console.log(Key.privateKey)
                    console.log(typeof registerData.data.secret)
                    // console.log(typeof b642ab(registerData.data.secret))
                    var chaKey = decryptMessage(Key.privateKey, registerData.data.secret)
                    console.log(chaKey)
                    // console.log(registerData.data.secret)
                    var key = registerData.data.key
                    if (key != undefined) {
                        var token = registerData.data.token
                        var output = setDecrypt(privateKey, registerData.data.key)
                        let responseData = JSON.parse(output)
                        localStorage.setItem(storageConst.LIGHT_TOKEN, token)
                        localStorage.setItem(storageConst.CLIENT_SALT, responseData.salt)

                        var password = responseData.password
                        var salt = responseData.salt
                        var uid = responseData.uid

                        Encrypt(getRandomString(40) + new Date().getTime(), password)
                            .then(data => {
                                const fileObject = {
                                    uid: uid,
                                    password: password,
                                    salt: salt,
                                    key: data
                                }
                                uploadFileToDrive(url,fileObject,token)
                            })
                            .catch(error => {
                                logger('error', error)
                            })
                    }else {
                        var token = registerData.data.data
                        console.log(token)
                        if (token != undefined) {
                            localStorage.setItem(storageConst.LIGHT_TOKEN, token)
                            // setFileId()
                            // getAllWallets()
                        }
                    }        
                })
        })
    
}


async function uploadFile(file) {
    var accessToken = await retrieveAuthData(storageConst.ACCESS_TOKEN)
    let fileName = 'ME3_KEY.json'
    if (apiConst.BASE_URL === 'https://avarta-official-dev.avarta.io/me3-api'){
        fileName = 'ME3_KEY_DEV.json'
    }else if (apiConst.BASE_URL === 'https://pre-wallet-prod.me3.io/me3-api'){
        fileName = 'ME3_KEY_PRE_PROD.json'
    }else{
        fileName = 'ME3_KEY.json' 
    }



    // return new Promise(async function(resolve,reject){
    //     gdrive.files
    //         .newMultipartUploader()
    //         .setData(file, MimeTypes.json)
    //         .setRequestBody({
    //             name: fileName
    //         })
    //         .execute()
    //         .then(data =>{
    //             saveAuthData(storageConst.FILE_ID, data.id)
    //         })
    // })
}

async function setCurrency() {
    let savedCurrency = localStorage.getItem(storageConst.LEGAL_DETAIL)
    if (savedCurrency == null) {
        getSupportCurrency()
            .then(currencyList => {
                let result = currencyList.find(item => {
                    return item.fiat == 'IDR' && item
                })
                if (result == undefined) result = currencyList.data[0]
                localStorage.setItem(storageConst.LEGAL_DETAIL, JSON.stringify(result))
                console.log(currencyList)
            })
            .catch(function(error){
                logger('error supoortCurrency', error)
            })
    }else {
        return 
    }
}

export {setCurrency, uploadFile, encryption}