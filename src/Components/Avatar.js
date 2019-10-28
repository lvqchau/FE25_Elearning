import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Link from './Link';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  avatar: props => ({
    width: props.size,
    height: props.size,
    display: 'inline-block'
  })
})

const CustomAvatar = (props) => {
  const { size, ...other } = props
  const classes = useStyles(props);

  return (
    <Link to='/profile'>
      <Avatar className={classes.avatar} {...other} />  
    </Link>
  );
};

export default CustomAvatar;