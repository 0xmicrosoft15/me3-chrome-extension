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

export {RSA2text}