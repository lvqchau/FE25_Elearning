import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  test: {
    color: 'red',
    '&.MuiPaper-elevation1': {
      boxShadow: 'none'
    }
  }
})


const CourseItem = (props) => {
  const { classes } = props;
  const { hinhAnh, tenKhoaHoc, moTa, maKhoaHoc } = props.course;
  return (
    <div className="card">
      <img
        src={hinhAnh}
        style={{
          height: 300,
        }}
      />
      <Paper className={classes.test}>{tenKhoaHoc}</Paper>
      <p>{moTa}</p>
      <Link to={`/detail/${maKhoaHoc}`} className="btn btn-success">
        Detail
      </Link>
    </div>
  );
};

export default withStyles(styles)(CourseItem);
