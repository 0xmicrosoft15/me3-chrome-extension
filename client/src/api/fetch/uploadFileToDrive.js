import axios from 'axios'

export async function uploadFileToDrive(url,accessToken,file) {
    return new Promise(async function(resolve, reject){
        axios
      .post(
        url,
        {
          data: `---------314159265358979323846 Content-Type: application/json {"name":"ME3_KEY_DEV.json","mimeType":"application/json"} ---------314159265358979323846 Content-Type: application/json  ${JSON.stringify(
            file,
          )} ---------314159265358979323846--`,
        },
        {
          header: {
            'Content-Type':
              'multipart/related; boundary="-------314159265358979323846"',
            authorization: 'Bearer ' + accessToken,
          },
        },
      )
      .then(response => {
        resolve(response);
      })
      .catch(async error => {
        reject(error);
      });
  });
};
