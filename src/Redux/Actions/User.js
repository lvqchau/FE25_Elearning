import { FETCH_CREDENTIALS } from './ActionType';
import { restConnector } from '../../Services/Index';
import UserService from '../../Services/User';
//async action
export const fetchCredential = (value, history) => {
  return dispatch => {
    UserService.login(value)
      .then(res => {
        localStorage.setItem('userLogin', JSON.stringify(res.data));
        dispatch(actFetchCredentials(res.data));
        restConnector.defaults.headers[
          'Authorization'
        ] = `Bearer ${res.data.accessToken}`;
        console.log(res.data);
        if (res.data.maLoaiNguoiDung === 'GV') {
          history.replace('/admin');
        } else {
          history.replace('/');
        }
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
};

//action creator
export const actFetchCredentials = credetials => ({
  type: FETCH_CREDENTIALS,
  payload: credetials,
});
