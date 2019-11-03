import React from 'react'
import { Link } from 'react-router-dom'

const CustomLink = (props) => {
  const { ...other } = props
  return (
    <Link style={{ 
      display: 'inline-block',
      color: 'inherit',
      textDecoration: 'none',
      lineHeight: 1
     }} {...other} />
  )
}

export default CustomLink;