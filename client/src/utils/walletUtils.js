


const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

export const Base64 = {
    btoa: (input = '') => {
        let str = input
        let output = ''

        for (let block = 0, charCode, i=0, map = chars;
            str.charAt(i | 0) || (map = '=', i %1);
            output += map.charAt(63 & block >> 8 - i%1 * 8)) {

            charCode = str.charCodeAt(i += 3/4);

            if (charCode > 0xFF) {
                throw new Error(" 'btoa' failed: The string to be encoded contains characters outside of the Latin1 range." )
            }

            block = block << 8 | charCode
            }
            return output
    },

    atob: (input = '') => {
        let str = input.replace(/=+$/, '')
        let output = ''

        if (str.length%4 == 1) {
            throw new Error(" 'atob' failed: The string to be decoded is not correctly encoded.")
        }

        for (let bc=0, bs=0, buffer, i=0;
            buffer = str.charAt(i++);
            
            ~buffer && ( bs = bc%4 ? bs * 64 + buffer : buffer,
                bc ++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
        ) {
        
        buffer = chars.indexOf(buffer)
        }

        return output
    }
}

