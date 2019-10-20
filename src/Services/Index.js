import Axios from 'axios';

export const restConnector = Axios.create({
  baseURL:
    process.env.REACT_APP_BASE_API || 'http://elearning0706.cybersoft.edu.vn',
});
