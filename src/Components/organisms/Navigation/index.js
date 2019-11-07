import React from 'react'
import { Menu, Icon } from 'antd'
import PropTypes from 'prop-types'
import * as styles from './styles.module.scss'
import LogoMenu from 'Assets/images/Logo-menu.png'

const Navigation = props => {
  return (
    <>
      <div className={styles.nav}>
        <div className="leftNav">
          <img src={LogoMenu} alt="" />
        </div>
        <div className="midleNav" />
        <div className="rightNav" />
      </div>
    </>
  )
}

Navigation.propTypes = {
  t: PropTypes.func,
}

export default Navigation
