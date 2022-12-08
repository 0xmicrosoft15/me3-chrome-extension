async function saveAuthData(key, value) {
    try{
        await localStorage.setItem(
            key,
            value
        )
    } catch(error){
        console.log("error", error)
    }
}

async function retrieveAuthData(key) {
    try{
        await localStorage.getItem(key)
    } catch(error){
        console.log("error", error)
    }
}

async function clearAuthData() {
    try{
        await localStorage.clear()
    } catch(error){
        console.log("error", error)
    }
}

async function removeAuthData(key) {
    try{
        await localStorage.removeItem(key)
    } catch(error){
        console.log("error", error)
    }
}

export {saveAuthData, retrieveAuthData, clearAuthData, removeAuthData}