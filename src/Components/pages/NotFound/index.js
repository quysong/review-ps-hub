import React from 'react'
import { any } from 'prop-types'

const Link = React.forwardRef((props, ref) => (
  <a ref={ref} {...props}>
    {props.children}
  </a>
))

const NotFound = () => {
  return <>Not found</>
}

Link.propTypes = {
  children: any,
}
export default NotFound
