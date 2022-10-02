import axios from 'axios';
import Url from 'http://www.whatyouwant.somee.com/api/Games/GamesList';

const anxios = axios.create({
  baseURL: 'http://www.whatyouwant.somee.com/api/Games/GamesList',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default anxios;
