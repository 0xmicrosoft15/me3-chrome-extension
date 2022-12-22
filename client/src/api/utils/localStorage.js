async function saveAuthData(key, value) {
    try{
        localStorage.setItem(
            key,
            value
        )
    } catch(error){
        console.log("error", error)
    }
}

async function retrieveAuthData(key) {
    try{
        localStorage.getItem(key)
    } catch(error){
        console.log("error", error)
    }
}

async function clearAuthData() {
    try{
        localStorage.clear()
    } catch(error){
        console.log("error", error)
    }
}

async function removeAuthData(key) {
    try{
        localStorage.removeItem(key)
    } catch(error){
        console.log("error", error)
    }
}

export {saveAuthData, retrieveAuthData, clearAuthData, removeAuthData}