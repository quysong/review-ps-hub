import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import PropTypes from 'prop-types'
import './styles.scss'
import { validateEmail } from 'Utils/validation'
import { createBrowserHistory } from 'history'
import { withRouter } from 'react-router'
import BackgroundLogin from 'Assets/images/bgr_login.jpg'
import Logo from 'Assets/images/Logo.png'
import 'Assets/styles/auth.scss'

const ResetPassword = ({
  email,
  message,
  showFormEmail,
  handleResetPassword,
  handleValidateEmail,
}) => {
  return (
    <>
      <div
        className="page-login reset-password"
        style={{
          backgroundImage: 'url(' + BackgroundLogin + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}>
        <div className="wrapper-img">
          <img src={Logo} alt="" className="PageLogin-img" />
        </div>

        {showFormEmail ? (
          <Form onSubmit={handleResetPassword} className="login-box">
            <div className="title">Forgot password?</div>
            <div className="wrapper-error error-email" />
            <Form.Item>
              <Input
                placeholder="Email"
                name="email"
                className={`auth-input ${message ? 'error-filed' : ''}`}
                autoComplete="off"
                value={email}
                onChange={e => handleValidateEmail(e.target.value)}
              />
              <div className="wrapper-error">{message}</div>
            </Form.Item>
            <div className="wrapper-button">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button">
                Reset Password
              </Button>
            </div>
          </Form>
        ) : (
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
        )}
      </div>
    </>
  )
}

ResetPassword.propTypes = {
  handleResetPassword: PropTypes.func.isRequired,
  handleValidateEmail: PropTypes.func.isRequired,
  showFormEmail: PropTypes.bool,
  email: PropTypes.string,
  message: PropTypes.string,
}

export default ResetPassword
