import { retrieveAuthData, saveAuthData } from "../../../../../api/utils/localStorage.js"
import {RSA2text} from "./helper_functions.js"
import storageConst from "../../../../../api/config/storage.js"
import { keyExchange, registerUser, uploadFileGdrive } from "../../../../../api/login/loginApis.js"
import { setDecrypt } from "../../../utils/rsaEncryptDecrypt.js"
import { Encrypt, getRandomString } from "../../../utils/EncryptDecrpyt.js"


async function encryption(email) {
    let key = await window.crypto.subtle.generateKey({
        name: 'RSA-OEAP',
        modulusLength: 1024,
        publicExponent: new Uint8Array([0x01, 0x00, 0x01])
    },
    true,
    ['encrypt', 'decrypt']
    )

    let keydata1 = await window.crypto.subtle.exportKey(
        'pkcs8',
        key.privateKey
    )

    let keydata2 = await window.crypto.subtle.exportKey(
        'spki',
        key.publicKey
    )

    var privateKey = RSA2text(keydata1,1)
    var publicKey = RSA2text(keydata2)

    saveAuthData(storageConst.CLIENT_PUBLICKEY, publicKey)
    saveAuthData(storageConst.CLIENT_PRIVATEKEY, privateKey)

    keyExchange(email, publicKey)
        .then(data => {
            saveAuthData(storageConst.SERVER_PUBLICKEY, data)
            registerUser(email)
                .then(registerData => {
                    var key = registerData.data.key
                    if (key != undefined) {
                        var token = registerData.data.token
                        var output = setDecrypt(privateKey, registerData.data.key)
                        let responseData = JSON.parse(output)
                        saveAuthData(storageConst.LIGHT_TOKEN, token)
                        saveAuthData(storageConst.CLIENT_SALT, responseData.salt)

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
                                uploadFile(fileObject)
                            })
                    }
                })
        })
    
}


async function uploadFile(file) {
    var accessToken = await retrieveAuthData(storageConst.ACCESS_TOKEN)
    gdrive.accessToken = accessToken
}