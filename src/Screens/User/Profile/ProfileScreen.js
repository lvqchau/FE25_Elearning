import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Container, Paper, Grid, Button } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchUserCourses } from "../../../Redux/Actions/Course";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const ProfileScreen = props => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { user } = props;

  useEffect(() => {
    if (user) {
      let value = {
        taiKhoan: user.taiKhoan
      };
      props.fetchUserCoursesHandler(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div>
      <Container maxWidth="lg">
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="THÔNG TIN CÁ NHÂN" {...a11yProps(0)} />
            <Tab label="KHÓA HỌC CỦA TÔI" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <Paper>
          <TabPanel value={value} index={0}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Typography gutterBottom>
                  Email: {user && user.email}
                </Typography>
                <Typography gutterBottom>
                  Họ tên: {user && user.hoTen}
                </Typography>
                <Typography gutterBottom>
                  Số điện thoại: {user && user.soDT}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography gutterBottom>
                  Tài khoản: {user && user.taiKhoan}
                </Typography>
                <Typography gutterBottom>
                  Mật khẩu: {user && user.matKhau}
                </Typography>
                <Button variant="contained" color="primary">
                  Cập Nhật
                </Button>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
        </Paper>
      </Container>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user.credentials
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchUserCoursesHandler: fetchUserCourses
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);
