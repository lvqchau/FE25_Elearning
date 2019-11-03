import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles'
import { bindActionCreators } from '../../../../../../Library/Caches/typescript/3.6/node_modules/redux';
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
import { fetchUsers } from '../../../Redux/Actions/User';

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

const ControlUser = (props) => {
  const { classes, users, fetchUsersHandler, pageIndex } = props
  const totalCount = get(users, 'totalCount', 0)
  const items = get(users, 'items', [])
  const [page, setPage] = React.useState(0);
  const [adding, setAdd] = React.useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    fetchUsersHandler(newPage+1, 5)
  };

  useEffect(() => {
    const { fetchUsersHandler, pageIndex } = props
    fetchUsersHandler(pageIndex, 5)
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
          <p>AddUser</p>
          :
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
                  <TableCell>Sửa</TableCell>
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
    users: state.user.users,
    pageIndex: state.user.pageIndex
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchUsersHandler: fetchUsers
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ControlUser));