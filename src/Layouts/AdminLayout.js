import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Sidebar from '../Components/Sidebar';

import colors from '../constants/colors';
import { actFetchCredentials } from '../Redux/Actions/User';
import { restConnector } from '../Services/Index';

const styles = theme => ({
  menuButton: {
    '&.MuiButtonBase-root': {
      outline: 'none'
    }
  },
  toolbar: {
    '&.MuiToolbar-root': {
      background: colors.primary
    }
  },
  drawer: {
    '& .MuiPaper-root': {
      width: 300
    }
  }
});

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const AdminLayout = props => {
  const { classes } = props
  useEffect(() => {
    let credentials = localStorage.getItem('userLogin');
    if (credentials) {
      let credetialsObj = JSON.parse(credentials);
      props.dispatch(actFetchCredentials(credetialsObj));
      restConnector.defaults.headers[
        'Authorization'
      ] = `Bearer ${credetialsObj.accessToken}`;
      console.log(restConnector.defaults)
    }
    //clean up component
    // return () => {

    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const [isOpen, openDrawer] = useState(false);

  return (
    <div>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={()=>openDrawer(!isOpen)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
        {props.children}
      </Container>
      <Drawer
        className={classes.drawer}
        open={isOpen}
        anchor="left"
      >
        <Sidebar role='admin' openDrawer={openDrawer}/>
      </Drawer>
    </div>
  );
};

export default connect()(withStyles(styles)(AdminLayout));
