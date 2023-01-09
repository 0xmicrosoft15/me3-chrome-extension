import { retrieveAuthData, saveAuthData } from "../../../api/config/storage.js"
import storageConst from "../../../api/config/storage.js"
import { keyExchange, registerUser, setFileId, uploadFileGdrive } from "../../../api/login/loginApis.js"
import { Encrypt, getRandomString } from "../../../utils/EncryptDecrpyt.js"
import { logger } from "../../../utils/Log.js"
// import { getAllWallets } from "../../../database/sql.js"
import apiConst from '../../../api/config/constants'
import { getSupportCurrency } from "../../../api/fetch/getSupportCurrency.js"
import {useDispatch} from 'react-redux'
import { setCurrentCurrency } from "../../../redux/Action/CurrencyAction.js"
import { uploadFileToDrive } from "../../../api/fetch/uploadFileToDrive.js"
import {pki, asn1, util} from 'node-forge'
import * as stableHex from '@stablelib/hex'
import * as stable64 from '@stablelib/base64'
import * as stableUtf8 from '@stablelib/utf8'
import {ChaCha20Poly1305, NONCE_LENGTH} from '@stablelib/chacha20poly1305'

async function encryption(email, accessToken) {
    
    const rsaKeyPair =  
        pki.rsa.generateKeyPair({
        bits: 1024,
        e: 0x10001,
    })
    
    const {privateKey, publicKey} = rsaKeyPair

    const priKey = util.encode64(
        asn1.toDer(pki.privateKeyToAsn1(privateKey)).getBytes(),
    )
    
    const pubKey = util.encode64(
    asn1.toDer(pki.publicKeyToAsn1(publicKey)).getBytes(),
    )

    localStorage.setItem(storageConst.CLIENT_PUBLICKEY, pubKey)
    localStorage.setItem(storageConst.CLIENT_PRIVATEKEY, priKey)

    keyExchange(email, pubKey)
        .then(data => {
            localStorage.setItem(storageConst.SERVER_PUBLICKEY, data)
            registerUser(email)
                .then(registerData => {
                    console.log(registerData.data.secret, typeof registerData.data.secret)
                    const chachaKey = stableHex.decode(
                        util.bytesToHex(
                          privateKey.decrypt(util.decode64(registerData.data.secret), 'RSA-OAEP'),
                        ),
                    )
                    console.log(chachaKey)
                    const decipher = new ChaCha20Poly1305(chachaKey)
                    const array = stable64.decode(registerData.data.data)
                    const decrypted = stableUtf8.decode(
                        decipher.open(array.slice(0, NONCE_LENGTH), array.slice(NONCE_LENGTH)),
                      )
                    console.log(decrypted)
                    // const check = Object.keys(decrypted).length
                    //check for existing user 
                    const isExistingUser = Object.keys(decrypted).length === 1
                    if(!isExistingUser) {
                        const fileToUploadToDrive = extractNewUserData(decrypted)
                        uploadFileToGDrive(accessToken, fileToUploadToDrive)
                    }        
                })
        })
    
}

function extractNewUserData(decrypted){
    console.log(decrypted)
    var token = obj.token
    var password = obj.password
    var salt = obj.salt
    var uid = obj.uid
    localStorage.setItem(storageConst.LIGHT_TOKEN, token)
    localStorage.setItem(storageConst.CLIENT_SALT, salt)
    Encrypt(getRandomString(40) + new Date().getTime(), password)
        .then(data => {
            const fileObject = {
                uid: uid,
                password: password,
                salt: salt,
                key: data
            }
            return fileObject
        })
    
}

async function uploadFileToGDrive(accessToken, file) {
    var fileContent = file
    var file = new Blob([JSON.stringify(fileContent)], {type: 'text/plain'})
    var metdata = {
        'name' : 'ME3_KEY_DEV.json', // Filename at Google Drive 
        'mimeType': 'text/plain'
    }
    var accessToken = accessToken
    var form = new FormData()
    form.append('metadata', new Blob([JSON.stringify(metdata)], {type:'application/json'}))
    form.append('file', file)

    var xhr = new XMLHttpRequest()
    xhr.open('post', 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart')
    xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken)
    xhr.responseType = 'json'
    xhr.onload = () => {
        console.log('File uploaded successfully. The Google file id is <b>' + xhr.response.id + '</b>')
    }
    xhr.send(form)
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

export {setCurrency, encryption}




// if (check !== 1) {
                    //     const obj = JSON.parse(decrypted)
                    //     var token = obj.token
                    //     console.log(token)
                    //     var password = obj.password
                    //     var salt = obj.salt
                    //     var uid = obj.uid

                    //     localStorage.setItem(storageConst.LIGHT_TOKEN, token)
                    //     localStorage.setItem(storageConst.CLIENT_SALT, salt)

                    //     Encrypt(getRandomString(40) + new Date().getTime(), password)
                    //     .then(data => {
                    //         const fileObject = {
                    //             uid: uid,
                    //             password: password,
                    //             salt: salt,
                    //             key: data
                    //         }
                    //         uploadFileToDrive(url,token,fileObject)
                    //     })
                    //     .catch(error => {
                    //         logger('error', error)
                    //     })   
                    // }else{
                    //     var token = decrypted.token
                    //     if (token != undefined){
                    //         localStorage.setItem(storageConst.LIGHT_TOKEN, token)
                    //     }
                    // }
                    // if (key != undefined) {
                    //     var token = registerData.data.token
                    //     // var output = setDecrypt(privateKey, registerData.data.key)
                    //     // let responseData = JSON.parse(output)
                    //     localStorage.setItem(storageConst.LIGHT_TOKEN, token)
                    //     localStorage.setItem(storageConst.CLIENT_SALT, responseData.salt)

                    //     var password = responseData.password
                    //     var salt = responseData.salt
                    //     var uid = responseData.uid

                        // Encrypt(getRandomString(40) + new Date().getTime(), password)
                        //     .then(data => {
                        //         const fileObject = {
                        //             uid: uid,
                        //             password: password,
                        //             salt: salt,
                        //             key: data
                        //         }
                        //         uploadFileToDrive(url,fileObject,token)
                        //     })
                        //     .catch(error => {
                        //         logger('error', error)
                        //     })
                    // }else {
                    //     var token = registerData.data.data
                    //     console.log(token)
                    //     if (token != undefined) {
                    //         localStorage.setItem(storageConst.LIGHT_TOKEN, token)
                    //         // setFileId()
                    //         // getAllWallets()
                    //     }
                    // }


// async function uploadFile(file) {
//     var accessToken = await retrieveAuthData(storageConst.ACCESS_TOKEN)
//     let fileName = 'ME3_KEY.json'
//     if (apiConst.BASE_URL === 'https://avarta-official-dev.avarta.io/me3-api'){
//         fileName = 'ME3_KEY_DEV.json'
//     }else if (apiConst.BASE_URL === 'https://pre-wallet-prod.me3.io/me3-api'){
//         fileName = 'ME3_KEY_PRE_PROD.json'
//     }else{
//         fileName = 'ME3_KEY.json' 
//     }
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
// }