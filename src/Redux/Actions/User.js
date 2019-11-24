import { FETCH_CREDENTIALS, FETCH_USERS, ADD_USER } from './ActionType';
import { restConnector } from '../../Services/Index';
import UserService from '../../Services/User';
import { successAlert, errorAlert } from '../../Components/ToastMessage';

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

export const addUser = user => {
  return (dispatch) => {
    UserService.addUser(user)
      .then(res => {
        successAlert("Thêm người dùng thành công")
        dispatch.actAddUser(res.data)
      })
      .catch(err => {
        console.log(err.response)
        if (err.response!==undefined)
          errorAlert("Thêm người dùng không thành công")
      });
  };
};

//action creators
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

export const actAddUser = user => {
  return {
    type: ADD_USER,
    payload: user,
  };
};
