import {Base64} from "../../../utils/walletUtils.js"

function RSA2text(buffer, isPrivate=0) {
    var binary = ''
    var bytes = new Uint8Array(buffer)
    var len = bytes.byteLength

    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i])
    }

    var base64 = Base64.btoa(binary)

    return base64
}

function b642ab(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  }

function str2ab(str) {
const buf = new ArrayBuffer(str.length * 2);
const bufView = new Uint16Array(buf);
for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
}
return buf;
}



async function decrypted(privateKey, secret) {
    var privateKeyRsa = importRsaKey(privateKey)
    // var secret = b642ab(secret)
    var decrypted = await decryptMessage(privateKeyRsa, secret)
    var decryptedStr = new TextDecoder().decode(decrypted)
    console.log(decryptedStr)
}

function decryptMessage(privateKey, secret) {
    var secret = str2ab(secret)

    return window.crypto.subtle.decrypt(
        { name: "RSA-OAEP" },
        privateKey,
        secret
        )
}

function importRsaKey(privateKey) {
    // const binaryDerString = window.atob(privateKey)
    const pkBuffer = str2ab(privateKey)

    return window.crypto.subtle.importKey(
        "pkcs8",
        pkBuffer,
        {
            name: "RSA-OAEP",
            hash: "SHA-512"
        },
        true,
        ["decrypt"]
    )
}
 
  


export {RSA2text, b642ab, str2ab, decrypted, decryptMessage, importRsaKey}