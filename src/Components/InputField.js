import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import FormHelperText from '@material-ui/core/FormHelperText'

import colors from '../constants/colors'

const styles = (theme => ({
  icon: {
    height: 20,
    width: 17
  },
  input: {
    fontFamily: 'Montserrat',
    marginTop: 5,
    width: '100%',
    '& label.Mui-focused': {
      color: colors.textPrimary,
    },
    '& .MuiFormLabel-filled': {
      color: colors.textPrimary,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: colors.textPrimary,
    }
  },
  hidden: {
    visibility: 'hidden'
  }
}))

const InputField = (props) => {
  const {
    classes, id, label, name, value, touched, error, type, Icon,
    placeholder, handleChange, handleBlur, handleIconClick
  } = props
  let isError = false
  if (error && touched) {
    isError = true
  }

  return (
    <FormControl error={isError} className={classes.input}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        aria-describedby={`${id}-error`}
        endAdornment={Icon &&
          <InputAdornment position='end'>
            <IconButton
              onClick={handleIconClick}
            >
              <Icon className={classes.icon} />
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText
        id={`${id}-error`}
        className={(!(touched && error) && classes.hidden) || ''}
      >
        {error}
      </FormHelperText>
    </FormControl>
  )
}
export default withStyles(styles)(InputField)