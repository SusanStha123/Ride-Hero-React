import axios from 'axios'
import { baseUrl } from '../../../Constants/api';

export class AdminPassenger {
  getPassenger = async () => {
    let response;
    await axios.get(baseUrl + 'get-passengers').then((res) => {
      if (res.data.status === 200) {
        response = res.data.allPassenger;
      } else {
        response = false;
      }
    })
    return response;
  }
}