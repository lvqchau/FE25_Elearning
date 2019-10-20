import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  myPaper: {
    backgroundColor: '#678',
    color: '#fff',
  },
  myButtonLabel: {
    color: 'yellow',
  },
});

const AdminLayout = props => {
  const myClass = useStyle();
  return (
    <div className="d-flex">
      {/* <Drawer
        classes={{ paper: myClass.myPaper }}
        variant="permanent"
        anchor="left"
      >
        <p>Danh Sach Nguoi Dung</p>
        <p>Danh Sach Khoa Hoc</p>
        <Button
          classes={{ label: myClass.myButtonLabel }}
          color="secondary"
          size="small"
        >
          Click
        </Button>
      </Drawer> */}
      {props.children}
    </div>
  );
};

export default AdminLayout;
