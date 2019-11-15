import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles'
import { bindActionCreators } from 'redux';
import { fetchCourses, addCourse, fetchCourseType, registerACourse, deleteUserFromCourse } from '../../../Redux/Actions/Course';
import get from 'lodash/get';

import Table from '@material-ui/core/Table'
import TablePagination from '@material-ui/core/TablePagination'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'
import EditIcon from '@material-ui/icons/Create'
import BackIcon from '@material-ui/icons/KeyboardBackspace'

// import AddCourse from '../AddCourse'
import AddCourse from './components/AddCourse'
import RegisterUser from './components/RegisterUser';
import { getWaitingStudents, getCurrentStudents } from '../../../Redux/Actions/User';

const styles = theme => ({
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
  addButton: {
    "&.MuiButtonBase-root": {
      outline: "none",
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
  overflow: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 5,
    fontSize: 7,
    display: "block"
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


const ControlCourse = (props) => {
  const { classes, courseType, deleteUserFromCourseHandler, registerACourseHandler, fetchCoursesHandler, addCourseHandler, fetchCourseTypeHandler, getWaitingStudentsHandler, getCurrentStudentsHandler, waitingStudents, currentStudents, courses, pageIndex } = props
  const totalCount = get(courses, 'totalCount', 0)
  const items = get(courses, 'items', [])
  const [page, setPage] = React.useState(0);
  const [adding, setAdd] = React.useState(false);
  const [register, setRegister] = React.useState(false);
  const [courseId, setCourseId] = React.useState('');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    fetchCoursesHandler(newPage + 1, 5);
  };

  const registering = (maKhoaHoc) => {
    setCourseId(maKhoaHoc)
    setRegister(true)
  }

  useEffect(() => {
    
  }, [waitingStudents, currentStudents])

  useEffect(() => {
    const { fetchCoursesHandler, pageIndex } = props
    fetchCoursesHandler(pageIndex, 5)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIndex]);

  return (
    <div style={{margin: '30px auto'}}>
      <div>
        {/* <AsyncSelect
          onChange={handleChange}
          loadOptions={handleLoad}
          defaultOptions
        /> */}
      </div>
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
        <AddCourse courseType={courseType} addCourseHandler={addCourseHandler} fetchCourseTypeHandler={fetchCourseTypeHandler} />
      }
      {
        !adding && !register &&
          <Paper className={classes.root}>
            <h3 style={{ margin: 10 }}>Danh sách khoá học</h3>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Id</TableCell>
                  <TableCell>Tên</TableCell>
                  <TableCell>Mô tả</TableCell>
                  <TableCell>Người tạo</TableCell>
                  <TableCell>Thao tác</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  items.map(item => {
                    return (
                      <TableRow key={item.maKhoaHoc}>
                        <TableCell component="th" scope="row">
                          <img src={item.hinhAnh} alt={item.tenKhoaHoc} className={classes.image}/>
                        </TableCell>
                        <TableCell>
                          <div style={{ whiteSpace: 'nowrap' }}>
                            {item.maKhoaHoc}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div style={{ whiteSpace: 'nowrap' }}>
                            {item.tenKhoaHoc}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className={classes.overflow} style={{ width: '35vw' }}>
                            {item.moTa}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div style={{ whiteSpace: 'nowrap' }}>
                            {item.nguoiTao.hoTen}
                          </div>
                        </TableCell>
                        <TableCell>
                          <IconButton
                            edge="start"
                            className={`${classes.addButton} ${classes.addButtonBlue}`}
                            size='small'
                            color="inherit"
                            aria-label="register a user"
                            onClick={() => registering(item.maKhoaHoc)}>
                              <AddIcon/>
                          </IconButton>
                          <IconButton
                            edge="start"
                            className={`${classes.addButton} ${classes.addButtonBlue}`}
                            size='small'
                            color="inherit"
                            aria-label="edit a course"
                            onClick={() => console.log('open edit')}>
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            edge="start"
                            className={`${classes.addButton} ${classes.addButtonRed}`}
                            size='small'
                            color="inherit"
                            aria-label="inactive a course"
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
          <CloseIcon className={classes.closeIcon} onClick={() => setRegister(false)}/>
          <RegisterUser
            getCurrentStudentsHandler={getCurrentStudentsHandler}
            getWaitingStudentsHandler={getWaitingStudentsHandler}
            registerACourseHandler={registerACourseHandler}
            deleteUserFromCourseHandler={deleteUserFromCourseHandler}
            waitingStudents={waitingStudents}
            currentStudents={currentStudents}
            courseId={courseId} />
        </Paper>
      }
    </div>
  );
};

//lấy
const mapStateToProps = (state) => {
  return {
    courses: state.course.courses || { items: [] },
    courseType: state.course.courseType,
    pageIndex: state.course.pageIndex,
    waitingStudents: state.user.waitingStudents,
    currentStudents: state.user.currentStudents
  }
}

//gửi
const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchCoursesHandler: fetchCourses,
  addCourseHandler: addCourse,
  fetchCourseTypeHandler: fetchCourseType,
  getWaitingStudentsHandler: getWaitingStudents,
  getCurrentStudentsHandler: getCurrentStudents,
  registerACourseHandler: registerACourse,
  deleteUserFromCourseHandler: deleteUserFromCourse
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ControlCourse));
