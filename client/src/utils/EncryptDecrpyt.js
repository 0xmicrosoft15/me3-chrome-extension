import aesjs from 'aes-js';
import pbkdf2 from 'pbkdf2';
import base64 from 'base-64';
import utf8 from 'utf8';
import CryptoJS from './crypto-js.min.js';
import { retrieveAuthData } from '../api/utils/localStorage.js';
import storageConst from '../api/config/storage.js';
import { logger } from './Log.js';

function spaceSupply(text) {
    let len = text.length
    let supply = 16 - (len % 16)
    let supplyStr = new Array(supply).fill(" ").join("")
    return text + supplyStr
}

async function Encrypt(text, pwd="") {
    var salt = localStorage.getItem(storageConst.CLIENT_SALT);
    var password = localStorage.getItem(storageConst.EXTERNAL_DB_REF_ID)
    let faceId = pwd ? pwd : password
    console.log(faceId)
    if (salt == null) {
        throw "salt not null"
    }

    var key_256 = pbkdf2.pbkdf2Sync(faceId, salt, 1, 256 / 8, 'sha512');
    var key_128 = pbkdf2.pbkdf2Sync(faceId, salt, 1, 128 / 8, 'sha512');
    text = spaceSupply(text)
    var textBytes = aesjs.utils.utf8.toBytes(text);
    var aesCbc = new aesjs.ModeOfOperation.cbc(key_256, key_128);
    var encryptedBytes = aesCbc.encrypt(textBytes);
    var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    var bytes = utf8.encode(encryptedHex);
    var encoded = base64.encode(bytes);
    return encoded
}

async function Decrypt(encoded, pwd = "") {
    try {
        var salt = await retrieveAuthData(storageConst.CLIENT_SALT);
        var password = await retrieveAuthData(storageConst.EXTERNAL_DB_REF_ID)
        let faceId = pwd ? pwd : password
        if (salt == null) {
            throw "salt not null"
        }

        var key_256 = pbkdf2.pbkdf2Sync(faceId, salt, 1, 256 / 8, 'sha512');
        var key_128 = pbkdf2.pbkdf2Sync(faceId, salt, 1, 128 / 8, 'sha512');

        var bytes = base64.decode(encoded);
        var text = utf8.decode(bytes);

        var encryptedBytes = aesjs.utils.hex.toBytes(text);
        var aesCbc = new aesjs.ModeOfOperation.cbc(key_256, key_128);
        var decryptedBytes = aesCbc.decrypt(encryptedBytes);

        var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
        return decryptedText.trim()
    } catch (err) {
        logger(err)
        throw "解密失败"
    }
}


const DecryptEcb = (decryptString, key) => {
    try {
        var key = CryptoJS.enc.Utf8.parse(key);
        var decrypt = CryptoJS.AES.decrypt(decryptString, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
        });
        return CryptoJS.enc.Utf8.stringify(decrypt).toString();
    } catch (error) {
        logger(error)
        return ''
    }
}

function RandomIndex(min, max, i) {
    const _charStr = 'abacdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789';
    let index = Math.floor(Math.random() * (max - min + 1) + min),
        numStart = _charStr.length - 10;
    if (i == 0 && index >= numStart) {
        index = this.RandomIndex(min, max, i);
    }
    return index;
}

function getRandomString(len) {
    const _charStr = 'abacdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789';
    let min = 0, max = _charStr.length - 1, _str = '';
    len = len || 15;
    for (var i = 0, index; i < len; i++) {
        index = RandomIndex(min, max, i)
        _str += _charStr[index];
    }
    return _str;
}

export { Encrypt, Decrypt, getRandomString, DecryptEcb }
