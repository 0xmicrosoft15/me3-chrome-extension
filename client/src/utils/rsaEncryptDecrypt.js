import JSEncrypt from "./jsencrypt.js"

function setEncrypt(publicKey, data) {
    const encrypt = new JSEncrypt()
    encrypt.setPublicKey(publicKey)

    return encrypt.encrypt(data)
}

function setDecrypt(privateKey, data) {
    const encrypt = new JSEncrypt()
    encrypt.setPrivateKey(privateKey)

    return encrypt.decrypt(data)
}

function rsaDecryptLong(privateKey, data) {
    const encrypt = new JSEncrypt()
    encrypt.setPrivateKey(privateKey)
    
    return encrypt.decryptLong(data)
}

export { setEncrypt, setDecrypt, rsaDecryptLong}