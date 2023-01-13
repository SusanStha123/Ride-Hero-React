import axios from 'axios'
import { baseUrl } from '../../../Constants/api';

export class AdminDriver {
  getDriver = async () => {
    let response;
    await axios.get(baseUrl + 'get-drivers').then((res) => {
      if (res.data.status === 200) {
        console.log(res.data);
        response = res.data.allDriver;
      } else {
        response = false;
      }
    })
    return response;
  }
}