import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import BackgroundLogin from 'Assets/images/bgr_login.jpg'
import Logo from 'Assets/images/Logo.png'
import LoginForm from 'Components/organisms/LoginForm'

const Login = props => {
  return (
    <>
      <div
        className="page-login"
        style={{
          backgroundImage: 'url(' + BackgroundLogin + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}>
        <div className="wrapper-img">
          <img src={Logo} alt="" className="PageLogin-img" />
        </div>
        <LoginForm />
      </div>
    </>
  )
}

Login.propTypes = {}

export default Login
