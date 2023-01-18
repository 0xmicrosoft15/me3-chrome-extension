import { uploadFileGdrive } from "../../../api/onboarding/loginApis";

let obj = {
  uid: "325",
  password: "7fe3249e-3af7-4f08-862f-9d582a1f713f",
  salt: "c1355012-d4a7-4a2d-86d5-f9b9ef91138a",
  token: "e71328a6e9dd906a6328a443e7ecda6a",
};

const fileObj = JSON.parse(object);
var token = fileObj.token;
console.log(token);

// var url = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart'

// async function gdriveUpload(object) {
//     const fileObj = JSON.parse(object)
//     var token = fileObj.token
//     console.log(token)
//     // uploadFileGdrive(obj, accessToken, file)
// }

// gdriveUpload(obj)
