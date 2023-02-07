import storageConst from "../../../api/config/storage.js"
import { keyExchange, registerUser, setFileId, uploadFileGdrive } from "../../../api/login"
import { Encrypt, getRandomString } from "../../../utils/EncryptDecrpyt.js"
import { logger } from "../../../utils/Log.js"
// import { getAllWallets } from "../../../database/sql.js"
import apiConst from '../../../api/config/constants'
import { getSupportCurrency } from "../../../api/getSupportCurrency.js"
import {useDispatch} from 'react-redux'
import { setCurrentCurrency } from "../../../redux/Action/CurrencyAction.js"
import { uploadFileToDrive } from "../../../api/uploadFileToDrive.js"
import {pki, asn1, util} from 'node-forge'
import * as stableHex from '@stablelib/hex'
import * as stable64 from '@stablelib/base64'
import * as stableUtf8 from '@stablelib/utf8'
import {ChaCha20Poly1305, NONCE_LENGTH} from '@stablelib/chacha20poly1305'

async function encryption(email, accessToken) {
    
    const rsaKeyPair = genKeyPair()
    const {privateKey, publicKey} = rsaKeyPair
    const priKey = encodedPriKey(privateKey)
    const pubKey = encodedPubKey(publicKey)
    localStorage.setItem(storageConst.CLIENT_PUBLICKEY, pubKey)
    localStorage.setItem(storageConst.CLIENT_PRIVATEKEY, priKey)
    try {
        const data = await keyExchange(email, pubKey);

        if (!data) {
            return null;
        }
        localStorage.setItem(storageConst.SERVER_PUBLICKEY, data);
        const registerRes = await registerUser(email);
        const chachaKey = getChaChaKey(privateKey, registerRes.data.secret)
        const decrypted = decryptChaChaKey(chachaKey, registerRes.data.data)
        console.info('decrypted', JSON.parse(decrypted))
        const isExistingUser = Object.keys(JSON.parse(decrypted)).length === 1
        if (!isExistingUser) {
            const fileToUploadToDrive = await extractNewUserData(decrypted)
            console.log(fileToUploadToDrive)
            uploadFileToGDrive(accessToken, fileToUploadToDrive)        
        } else {
            console.log("existing user function is working")    
        } 
    } catch (error) {
        console.error(error);
    };    
}

function genKeyPair(){
    const rsaKeyPair = pki.rsa.generateKeyPair({
        bits: 1024,
        e: 0x10001,
    })
    return rsaKeyPair
}

function encodedPriKey(privateKey){
    const priKey = util.encode64(
        asn1.toDer(pki.privateKeyToAsn1(privateKey)).getBytes(),
    )
    return priKey
}

function encodedPubKey(publicKey){
    const pubKey = util.encode64(
        asn1.toDer(pki.publicKeyToAsn1(publicKey)).getBytes(),
        )
    return pubKey
}

function getChaChaKey(privateKey, secret){
    const chachaKey = stableHex.decode(
        util.bytesToHex(
          (privateKey).decrypt(util.decode64(secret), 'RSA-OAEP'),
        ),
    );
    return chachaKey
}

function decryptChaChaKey(chaChaKey, registerResData) {
    const decipher = new ChaCha20Poly1305(chaChaKey)
    const array = stable64.decode(registerResData)
    const decrypted = stableUtf8.decode(
        decipher.open(array.slice(0, NONCE_LENGTH), array.slice(NONCE_LENGTH)),
    )
    return decrypted
}

async function extractNewUserData(decrypted){
    const obj = JSON.parse(decrypted)
    console.log(obj.password)
    var token = obj.token
    var password = obj.password
    var salt = obj.salt
    var uid = obj.uid
    localStorage.setItem(storageConst.LIGHT_TOKEN, token)
    localStorage.setItem(storageConst.CLIENT_SALT, salt)
    return Encrypt(getRandomString(40) + new Date().getTime(), password)
        .then(data => {
            const fileObject = {
                uid: uid,
                password: password,
                salt: salt,
                key: data
            }
            console.log(fileObject)
            return fileObject
        })
    
}

 const uploadFileToGDrive = async (accessToken, file) => {
    console.log(file)
    const uploadFile = new Blob([JSON.stringify(file)], {type: 'text/plain'})
    const metdata = {
        'name' : 'ME3_KEY_DEV.json', // Filename at Google Drive 
        'mimeType': 'text/plain'
    }
    var form = new FormData()
    form.append('metadata', new Blob([JSON.stringify(metdata)], {type:'application/json'}))
    form.append('file', uploadFile)

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