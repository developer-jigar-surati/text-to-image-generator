import { STABILITY_AI_URL, STABILITY_AI_KEY } from '../global'
import axios from 'axios';

export const postRequest = (url, data) => {
    console.log(`${STABILITY_AI_URL}${url}`);
  return new Promise((resolve, reject) => {
    axios.post(`${STABILITY_AI_URL}${url}`, data, { headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${STABILITY_AI_KEY}`,
    }})
    .then((response) => {
        console.log('response', response);
    //   const responseJson = JSON.parse(response.data);
      resolve(response);
    }).catch((error) => {
        console.log('error', error);
    //   const responseError = JSON.parse(error);
      reject(error);
    });
  });
}