import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles'
import { bindActionCreators } from '../../../../../../Library/Caches/typescript/3.6/node_modules/redux';
import { fetchCourses } from '../../../Redux/Actions/Course';
import get from 'lodash/get'

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
import BackIcon from '@material-ui/icons/KeyboardBackspace'

import AddCourse from '../AddCourse'

const styles = theme => ({
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
  },
  addButton: {
    '&.MuiButtonBase-root': {
      outline: 'none',
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
  overflow: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  image: {
    width: 40, 
    height: 40, 
    borderRadius: 5,
    fontSize: 8
  }
})

const ControlCourse = (props) => {
  const { classes, fetchCoursesHandler, courses, pageIndex } = props
  const totalCount = get(courses, 'totalCount', 0)
  const items = get(courses, 'items', [])
  const [page, setPage] = React.useState(0);
  const [adding, setAdd] = React.useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    fetchCoursesHandler(newPage+1, 5)
  };

  useEffect(() => {
    const { fetchCoursesHandler, pageIndex } = props
    fetchCoursesHandler(pageIndex, 5)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIndex])

  return (
    <div style={{ margin: '30px auto' }}>
      <IconButton
        edge="start"
        className={adding ? `${classes.addButton} ${classes.addButtonRed}` : `${classes.addButton} ${classes.addButtonBlue}`}
        color="inherit"
        aria-label="add a user"
        onClick={() => setAdd(!adding)}
      >
        {
          adding ?
            <BackIcon />
            :
            <AddIcon />
        }
      </IconButton>
      {
        adding ?
          <AddCourse />
          :
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
                  <TableCell>Sửa</TableCell>
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
                          <EditIcon
                            className={classes.editButton}
                            aria-label="add a user"
                            onClick={() => console.log('open add')}
                          />
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
      
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    courses: state.course.courses || {items : []},
    pageIndex: state.course.pageIndex
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchCoursesHandler: fetchCourses
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ControlCourse));