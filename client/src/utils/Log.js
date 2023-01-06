export function logger(string, value) {
    const letLogsDisplayInConsole = false
    if (letLogsDisplayInConsole) {
        if(value == undefined) {
            return console.log(`logger => ${JSON.stringify(string)}`)
        }else{
            return console.log(`logger => ${JSON.stringify(string)}`, value)
        }
    } else {
        return
    }
}