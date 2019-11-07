import React from 'react'
import { Button, Form, Input } from 'antd'
import PropTypes from 'prop-types'
import BackgroundLogin from 'Assets/images/bgr_login.jpg'
import Logo from 'Assets/images/Logo.png'
import 'Assets/styles/auth.scss'
import './styles.scss'

const NewPassword = ({
  password,
  confirmPassword,
  messageNewPassword,
  messageConfirmPassword,
  typeRules,
  classPassword,
  classConfirmPassword,
  handleValidateNewPassword,
  handleValidateConfirmPassword,
  handleSubmit,
}) => {
  return (
    <>
      <div
        className="page-login new-password"
        style={{
          backgroundImage: 'url(' + BackgroundLogin + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}>
        <div className="wrapper-img">
          <img src={Logo} alt="" className="PageLogin-img" />
        </div>
        <Form onSubmit={handleSubmit} className="login-box">
          <div className="title">Please type in your new password.</div>
          <Form.Item>
            <Input
              placeholder="Password"
              name="newPassword"
              autoComplete="off"
              className={`auth-input ${classPassword || ''}`}
              value={password}
              onChange={e => handleValidateNewPassword(e.target.value)}
            />
            <div className="wrapper-error">
              <div>{messageNewPassword}</div>
              <div>{typeRules}</div>
            </div>
          </Form.Item>

          <Form.Item>
            <Input
              placeholder="Confirm Password"
              name="confirmPassword"
              autoComplete="off"
              className={`auth-input ${classConfirmPassword || ''}`}
              value={confirmPassword}
              onChange={e => handleValidateConfirmPassword(e.target.value)}
            />
            <div className="wrapper-error">{messageConfirmPassword}</div>
          </Form.Item>
          <div className="wrapper-button">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button">
              OK
            </Button>
          </div>
        </Form>
      </div>
    </>
  )
}
NewPassword.propTypes = {
  typeRules: PropTypes.string,
  password: PropTypes.string,
  messageNewPassword: PropTypes.string,
  messageConfirmPassword: PropTypes.string,
  confirmPassword: PropTypes.string,
  classPassword: PropTypes.string,
  classConfirmPassword: PropTypes.string,
  handleValidateNewPassword: PropTypes.func.isRequired,
  handleValidateConfirmPassword: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}
export default NewPassword
