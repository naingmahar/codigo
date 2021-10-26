import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://forex.cbm.gov.mm/api',
  timeout: 300000,
  headers: {
    'access-control-allow-origin': '*',
  },
});

export default instance;
