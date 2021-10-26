import Axios from './axios';
import {IResCategories,IResRates} from '../Model/IResponse';

export async function getCategories(): Promise<IResCategories> {
  return new Promise((resolve, reject) => {
    Axios.get(`/currencies`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.message || error);
      });
  });
}

export async function getRates(): Promise<IResRates> {
  return new Promise((resolve, reject) => {
    Axios.get(`/latest`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.message || error);
      });
  });
}

export const APIService = {
  getCategories,
  getRates
}

