import React, { useEffect } from "react";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Container, Paper, Grid, Button } from "@material-ui/core";
// import { fetchUserInfo } from "../../../Redux/Actions/User";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

const ProfileScreen = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    props.fetchUserInfoHandler(
      JSON.parse(localStorage.getItem("userLogin")).taiKhoan
    );
    console.log(JSON.parse(localStorage.getItem("userLogin")).taiKhoan);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                <Typography gutterBottom>Email:</Typography>
                <Typography gutterBottom>Họ tên:</Typography>
                <Typography gutterBottom>Số điện thoại:</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography gutterBottom>Tài khoản:</Typography>
                <Typography gutterBottom>Mật khẩu:</Typography>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // fetchUserInfoHandler: fetchUserInfo
    },
    dispatch
  );

export default connect(mapDispatchToProps)(ProfileScreen);
