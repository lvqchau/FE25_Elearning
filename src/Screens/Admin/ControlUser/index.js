import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import { bindActionCreators } from "redux";
import get from "lodash/get";

import Table from '@material-ui/core/Table'
import TablePagination from '@material-ui/core/TablePagination'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Create'
import DeleteIcon from '@material-ui/icons/Delete'
import CloseIcon from '@material-ui/icons/Close'
import BackIcon from '@material-ui/icons/KeyboardBackspace'
import { fetchUsers, addUser, getWaitingCourses, getCurrentCourses } from '../../../Redux/Actions/User';
import AddUser from './components.js/AddUser';
import RegisterCourse from "./components.js/RegisterCourse";

const styles = theme => ({
  addButton: {
    "&.MuiButtonBase-root": {
      outline: "none",
      background: "#007efc",
      color: "white",
      float: "left",
      margin: "0 10px 0 0"
    }
  },
  addButtonRed: {
    "&.MuiButtonBase-root": {
      background: "#FF5B46"
    }
  },
  addButtonBlue: {
    "&.MuiButtonBase-root": {
      background: "#007efc"
    }
  },
  editButton: {
    "&.MuiSvgIcon-root": {
      cursor: "pointer",
      fill: "black",
      transition: "0.3s",
      "&:hover": {
        fill: "#007efc"
      }
    }
  },
  root: {
    "&.MuiPaper-elevation1": {
      overflowX: "scroll"
    }
  },
  table: {
    "& .MuiTableRow-head": {
      backgroundColor: "#007efc"
    },
    "& .MuiTableCell-head": {
      color: "white",
      fontWeight: 600
    }
  },
  registerContainer: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column'
  },
  closeIcon: {
    marginBottom: 10,
    cursor: 'pointer',
    '&.MuiSvgIcon-root': {
      alignSelf: 'flex-end'
    }
  }
});

const ControlUser = (props) => {
  const { classes, users, addUserHandler, fetchUsersHandler, pageIndex, waitingCourses, currentCourses, getCurrentCoursesHandler, getWaitingCoursesHandler } = props
  const totalCount = get(users, 'totalCount', 0)
  const items = get(users, 'items', [])
  const [page, setPage] = React.useState(0);
  const [adding, setAdd] = React.useState(false);
  const [register, setRegister] = React.useState(false);
  const [username, setUsername] = React.useState('');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    fetchUsersHandler(newPage + 1, 5);
  };

  const registering = (taiKhoan) => {
    setUsername(taiKhoan)
    setRegister(true)
  }

  useEffect(() => {
    const { fetchUsersHandler, pageIndex } = props;
    fetchUsersHandler(pageIndex, 5);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIndex]);

  return (
    <div style={{ margin: "30px auto" }}>
      <IconButton
        edge="start"
        className={
          adding
            ? `${classes.addButton} ${classes.addButtonRed}`
            : `${classes.addButton} ${classes.addButtonBlue}`
        }
        color="inherit"
        aria-label="add a user"
        onClick={() => setAdd(!adding)}
      >
        {adding ? <BackIcon /> : <AddIcon />}
      </IconButton>
      {
        adding &&
        <AddUser addUserHandler={addUserHandler} />
      }
      {
        !adding && !register &&
          <Paper className={classes.root}>
            <h3 style={{ margin: 10 }}>Danh sách người dùng</h3>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Tài khoản</TableCell>
                  <TableCell>Tên</TableCell>
                  <TableCell>SĐT</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Mã loại</TableCell>
                  <TableCell>Thao tác</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  items.map((item, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {item.taiKhoan}
                        </TableCell>
                        <TableCell >{item.hoTen}</TableCell>
                        <TableCell>{item.soDT}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>{item.maLoaiNguoiDung}</TableCell>
                        <TableCell>
                          <IconButton
                            edge="start"
                            className={`${classes.addButton} ${classes.addButtonBlue}`}
                            size='small'
                            color="inherit"
                            aria-label="register a course"
                            onClick={() => registering(item.taiKhoan)}>
                            <AddIcon />
                          </IconButton>
                          <IconButton
                            edge="start"
                            className={`${classes.addButton} ${classes.addButtonBlue}`}
                            size='small'
                            color="inherit"
                            aria-label="edit a user"
                            onClick={() => console.log('open edit')}>
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            edge="start"
                            className={`${classes.addButton} ${classes.addButtonRed}`}
                            size='small'
                            color="inherit"
                            aria-label="inactive a user"
                            onClick={() => console.log('open delete')}>
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>

                      </TableRow>
                    )
                  })
                }
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5]}
              component="div"
              count={totalCount}
              rowsPerPage={5}
              page={page}
              backIconButtonProps={{
                'aria-label': 'previous page',
              }}
              nextIconButtonProps={{
                'aria-label': 'next page',
              }}
              onChangePage={handleChangePage}
            />
          </Paper>
      }
      {
        !adding && register &&
        <Paper className={classes.registerContainer}>
          <CloseIcon className={classes.closeIcon} onClick={() => setRegister(false)} />
          <RegisterCourse
            getCurrentCoursesHandler={getCurrentCoursesHandler}
            getWaitingCoursesHandler={getWaitingCoursesHandler}
            // registerACourseHandler={registerACourseHandler}
            // deleteUserFromCourseHandler={deleteUserFromCourseHandler}
            waitingCourses={waitingCourses}
            currentCourses={currentCourses}
            taiKhoan={username}
          />
        </Paper>
      }
      </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.user.users,
    pageIndex: state.user.pageIndex,
    waitingCourses: state.course.waitingCourses,
    currentCourses: state.course.currentCourses
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchUsersHandler: fetchUsers,
  addUserHandler: addUser,
  getWaitingCoursesHandler: getWaitingCourses,
  getCurrentCoursesHandler: getCurrentCourses
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ControlUser));
