import { FETCH_CREDENTIALS, FETCH_USERS, ADD_USER, GET_WAITING_STUDENTS, GET_CURRENT_STUDENTS, SIGN_UP_USER, FETCH_USER_INFO, GET_CURRENT_COURSES, GET_WAITING_COURSES, REMOVE_USER } from './ActionType';
import { restConnector } from '../../Services/Index';
import UserService from '../../Services/User';
import { successAlert, errorAlert } from '../../Components/ToastMessage';

//async action
export const fetchCredential = (value, history) => {
  return dispatch => {
    UserService.login(value)
      .then(res => {
        localStorage.setItem("userLogin", JSON.stringify(res.data));
        dispatch(actFetchCredentials(res.data));
        restConnector.defaults.headers[
          "Authorization"
        ] = `Bearer ${res.data.accessToken}`;
        if (res.data.maLoaiNguoiDung === "GV") {
          history.replace("/admin");
        } else {
          history.replace("/");
        }
        successAlert("Đăng nhập thành công!");
      })
      .catch(err => {
        switch (err.response.status) {
          case 500:
            errorAlert(err.response.data);
            break;
          default:
            errorAlert("Đăng nhập lỗi!");
            break;
        }
      });
  };
};

export const addUser = user => {
  return dispatch => {
    UserService.addUser(user)
      .then(res => {
        successAlert("Thêm người dùng thành công");
        dispatch.actAddUser(res.data);
      })
      .catch(err => {
        errorAlert(err.response.data);
      });
  };
};

export const getWaitingStudents = courseId => {
  return dispatch => {
    UserService.getWaitingStudents({ maKhoaHoc: courseId })
      .then(res => {
        dispatch(actGetWaitingStudents(res.data));
      })
      .catch(err => {
        errorAlert(err.response.data);
      });
  };
};

export const getCurrentStudents = courseId => {
  return dispatch => {
    UserService.getCurrentStudents({ maKhoaHoc: courseId })
      .then(res => {
        dispatch(actGetCurrentStudents(res.data));
      })
      .catch(err => {
        errorAlert(err.response.data);
      });
  };
};


export const getWaitingCourses = (taiKhoan) => {
  return dispatch => {
    UserService.getWaitingCourses({ taiKhoan })
      .then(res => {
        dispatch(actGetWaitingCourses(res.data));
      })
      .catch(err => {
        errorAlert(err.response.data);
      });
  };
};

export const getCurrentCourses = (taiKhoan) => {
  return dispatch => {
    UserService.getCurrentCourses({ taiKhoan })
      .then(res => {
        dispatch(actGetCurrentCourses(res.data));
      })
      .catch(err => {
        errorAlert(err.response.data);
      });
  };
};

export const signupUser = (value, history) => {
  return dispatch => {
    UserService.signup(value)
      .then(res => {
        history.push("/signin", {
          taiKhoan: value.taiKhoan,
          matKhau: value.matKhau
        });
        successAlert("Đăng ký thành công");
      })
      .catch(err => {
        switch (err.response.status) {
          case 500:
            errorAlert(err.response.data);
            break;
          default:
            errorAlert("Đăng ký lỗi!");
            break;
        }
      });
  };
};

export const fetchUserInfo = value => {
  return dispatch => {
    UserService.fetchUserInfo(value)
      .then(res => {
        dispatch(actFetchUserInfo(res.data));
      })
      .catch(err => {
        errorAlert(err.response.data);
      });
  };
};

export const removeUser = taiKhoan => {
  return dispatch => {
    UserService.removeAUser(taiKhoan)
      .then(res => {
        successAlert("Xoá người dùng thành công")
        dispatch(actRemoveUser(taiKhoan));
      })
      .catch(err => {
        errorAlert(err.response.data);
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
      });
  };
};

//action creator
export const actFetchCredentials = credetials => ({
  type: FETCH_CREDENTIALS,
  payload: credetials
});

export const actFetchUsers = users => {
  return {
    type: FETCH_USERS,
    payload: users
  };
};

export const actAddUser = user => {
  return {
    type: ADD_USER,
    payload: user
  };
};

export const actGetWaitingStudents = students => {
  return {
    type: GET_WAITING_STUDENTS,
    payload: students,
  };
};

export const actGetCurrentStudents = students => {
  return {
    type: GET_CURRENT_STUDENTS,
    payload: students,
  };
};

export const actGetWaitingCourses = courses => {
  return {
    type: GET_WAITING_COURSES,
    payload: courses,
  };
};

export const actGetCurrentCourses = courses => {
  return {
    type: GET_CURRENT_COURSES,
    payload: courses,
  };
};

export const actSignupUser = user => {
  return {
    type: SIGN_UP_USER,
    payload: user
  };
};

export const actFetchUserInfo = user => {
  return {
    type: FETCH_USER_INFO,
    payload: user
  };
};

export const actRemoveUser = deletedUser => {
  return {
    type: REMOVE_USER,
    payload: deletedUser
  };
};
