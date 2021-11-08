import { BASE_PATH } from "../utils/constants";
import axios from 'axios'

export async function registerUser(formData) {
  try {
    const url = `${BASE_PATH}/auth/local/register`;
    const {data} = await axios.post(url, formData)
    return data
  } catch (error) {
    console.log(error);
    return;
  }
}

export async function loginUserAPI(formData){
    try {
        const url = `${BASE_PATH}/auth/local`
        const {data} = await axios.post(url, formData)
        return data
    } catch (error) {
        console.log(error)
        return
    }
}
