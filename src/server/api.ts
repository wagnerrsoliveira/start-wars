import Axios from 'axios';
import { baseApiUrl } from 'utils/env';

const api = Axios.create({
  baseURL: baseApiUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default api;
