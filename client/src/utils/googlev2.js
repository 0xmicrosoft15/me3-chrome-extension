// // import gapi from 'gapi'
// //Set credentials from google cloud console 
// const CLIENT_ID = '481242808170-q83c0q6apdgi7oedo1gv9dv1fmn3m09j.apps.googleusercontent.com'
// const API_KEY = ''

// //Discovery URL for APIs used by quickstart 
// const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'

// //Set API access scope before proceeding with authorization request 
// const SCOPES = 'https://www.googleapis.com/auth/drive.file'
// let tokenClient 
// let gapiInited = false
// let gisInited = false

// //Callback after api.js is loaded
// export function gapiLoaded() {
//     gapiInited.load('client', initGapiClient)
// }

// //Callback after API client is loaded. 
// async function initGapiClient() {
//     await gapiInited.client.init({
//         apiKey: API_KEY,
//         discoveryDocs: [DISCOVERY_DOC]
//     })
//     gapiInited = true
//     maybeEnableButtons()
// }

// //Callback after Google Identity Services are loaded
// export function gisLoaded() {
//     /* global google */
//     tokenClient = google.accounts.oauth2.initTokenClient({
//         client_id: CLIENT_ID,
//         scope: SCOPES,
//         callback: '', //defined later
//     })
//     gisInited = true
//     maybeEnableButtons()
// }

// //Enables user interaction after all libraries are loaded
// function maybeEnableButtons(){
//     if (gapiInited && gisInited) {
//         document.getElementById('authorize_button').style.visibility = 'visible'
//     }
// }

// //Sign in the user upon button click 
// export function handleAuthClick() {
//     tokenClient.callback = async(resp) =>{
//         if (resp.error !== undefined) {
//             throw(resp)
//         }
//         document.getElementById('authorize_button').value = 'Refresh'
//         await uploadFile()
//     }

//     if (gapiInited.client.getToken() === null) {
//         //Prompt the user to select a Google Account and ask for consent to share their data 
//         //when establishing a new session
//         tokenClient.requestAccessToken({prompt: 'consent'})
//     } else {
//         //skip display of account chooser and consent dialog for an existing session
//         tokenClient.requestAccessToken({prompt: ''})
//     }
// }

// //Upload file to Google Drive 
// async function uploadFile() {
//     var fileContent = 'Hello world'
//     var file = new Blob([fileContent], {type: 'text/plain'})
//     var metdata = {
//         'name' : 'sample-file-via-js', // Filename at Google Drive 
//         'mimeType': 'text/plain'
//     }
//     /* global gapi */
//     var accessToken = gapi.auth.getToken().access_token
//     var form = new FormData()
//     form.append('metadata', new Blob([JSON.stringify(metdata)], {type:'application/json'}))
//     form.append('file', file)

//     var xhr = new XMLHttpRequest()
//     xhr.open('post', 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id')
//     xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken)
//     xhr.responseType = 'json'
//     xhr.onload = () => {
//         console.log('File uploaded successfully. The Google file id is <b>' + xhr.response.id + '</b>')
//     }
// }



