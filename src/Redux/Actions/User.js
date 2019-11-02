import { FETCH_CREDENTIALS, FETCH_USERS } from './ActionType';
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

export const fetchUsers = (pageIndex, itemsPerPage) => {
  return dispatch => {
    UserService.fetchUsers(pageIndex, itemsPerPage)
      .then(res => {
        dispatch(actFetchUsers(res.data));
      })
      .catch(e => {
        console.log(e);
      });
  };
};


//action creator
export const actFetchCredentials = credetials => ({
  type: FETCH_CREDENTIALS,
  payload: credetials,
});

export const actFetchUsers = users => {
  return {
    type: FETCH_USERS,
    payload: users,
  };
};
