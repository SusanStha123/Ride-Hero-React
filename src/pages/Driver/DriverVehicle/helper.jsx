import axios from 'axios'
import { baseUrl } from '../../../Constants/api';

export class VehicleHelper {
  getVehicle = async () => {
    let response;
    await axios.get(baseUrl + 'get-vehicles').then((res) => {
      if (res.data.status === 200) {
        response = res.data.allVehicle;
      } else {
        response = false;
      }
    })
    return response;
  }
}