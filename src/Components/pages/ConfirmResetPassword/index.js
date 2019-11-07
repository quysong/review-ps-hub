import React from 'react'
import { Button, Form, Input } from 'antd'
import BackgroundLogin from 'Assets/images/bgr_login.jpg'
import Logo from 'Assets/images/Logo.png'
import 'Assets/styles/auth.scss'
import './styles.scss'

const ConfirmResetPassword = props => {
  return (
    <>
      <div
        className="page-login confirm-password"
        style={{
          backgroundImage: 'url(' + BackgroundLogin + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}>
        <div className="wrapper-img">
          <img src={Logo} alt="" className="PageLogin-img" />
        </div>
        <div className="wrapper-content">
          <p>Password reset instructions have been sent to your email.</p>
          <div>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button">
              Log in
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConfirmResetPassword
