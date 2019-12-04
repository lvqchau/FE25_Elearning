import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/styles';

import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'

const styles = theme => ({
  addButton: {
    '&.MuiButtonBase-root': {
      outline: 'none',
      background: '#007efc',
      color: 'white',
      float: 'left',
      margin: '0 10px 0 0'
    }
  },
  addButtonRed: {
    '&.MuiButtonBase-root': {
      background: '#FF5B46'
    }
  },
  addButtonBlue: {
    '&.MuiButtonBase-root': {
      background: '#007efc'
    }
  },
  editButton: {
    '&.MuiSvgIcon-root': {
      cursor: 'pointer',
      fill: 'black',
      transition: '0.3s',
      '&:hover': {
        fill: '#007efc',
      }
    }
  },
  root: {
    '&.MuiPaper-elevation1': {
      overflowX: 'scroll'
    }
  },
  table: {
    '& .MuiTableRow-head': {
      backgroundColor: '#007efc'
    },
    '& .MuiTableCell-head': {
      color: 'white',
      fontWeight: 600
    }
  }
})

const RegisterUser = (props) => {
  const { classes, deleteUserFromCourseHandler, registerACourseHandler, getWaitingStudentsHandler, getCurrentStudentsHandler, waitingStudents, currentStudents, courseId } = props;

  useEffect(() => {
    getWaitingStudentsHandler(courseId);
    getCurrentStudentsHandler(courseId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId])

  const ActionCourse = (courseId, taiKhoan, type, deleteType) => {
    const value = {
      maKhoaHoc: courseId,
      taiKhoan
    }
    switch (type) {
      case 'register': registerACourseHandler(value); break;
      case 'delete': deleteUserFromCourseHandler(value, deleteType); break;
      default: break;
    } 
  }


  return (
    <div>
      {/* Chờ xác thực */}
      <div>
        <Paper className={classes.root} style={{marginBottom: 20}}>
          <h3 style={{ margin: 10 }}>Học viên chờ xác thực</h3>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Tài khoản</TableCell>
                <TableCell>Họ tên</TableCell>
                <TableCell>Chờ xác nhận</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                waitingStudents && waitingStudents.map((item, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {index+1}
                      </TableCell>
                      <TableCell>
                        <div style={{ whiteSpace: 'nowrap' }}>
                          {item.taiKhoan}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div style={{ whiteSpace: 'nowrap' }}>
                          {item.hoTen}
                        </div>
                      </TableCell>
                      <TableCell>
                        <IconButton
                          edge="start"
                          className={`${classes.addButton} ${classes.addButtonBlue}`}
                          size='small'
                          color="inherit"
                          aria-label="register a user"
                          onClick={() => ActionCourse(courseId, item.taiKhoan, 'register')}>
                          <AddIcon />
                        </IconButton>
                        <IconButton
                          edge="start"
                          className={`${classes.addButton} ${classes.addButtonRed}`}
                          size='small'
                          color="inherit"
                          aria-label="inactive a course"
                          onClick={() => ActionCourse(courseId, item.taiKhoan, 'delete', 'wait')}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        </Paper>
      </div>
      {/* Đã tham gia khoá học */}
      <div>
        <Paper className={classes.root}>
          <h3 style={{ margin: 10 }}>Học viên đã tham gia khoá học</h3>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Tài khoản</TableCell>
                <TableCell>Họ tên</TableCell>
                <TableCell>Chờ xác nhận</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                currentStudents && currentStudents.map((item, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell>
                        <div style={{ whiteSpace: 'nowrap' }}>
                          {item.taiKhoan}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div style={{ whiteSpace: 'nowrap' }}>
                          {item.hoTen}
                        </div>
                      </TableCell>
                      <TableCell>
                        <IconButton
                          edge="start"
                          className={`${classes.addButton} ${classes.addButtonRed}`}
                          size='small'
                          color="inherit"
                          aria-label="inactive a course"
                          onClick={() => ActionCourse(courseId, item.taiKhoan, 'delete', 'cur')}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        </Paper>
      </div>
    </div>
  );
};

export default withStyles(styles)(RegisterUser);