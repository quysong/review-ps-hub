import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './styles.scss'
import { withTranslation } from 'react-i18next'
import * as validate from 'Utils/validation'
import 'Assets/styles/auth.scss'
let timeOut = null

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfoLogin: {
        username: '',
        password: '',
      },
      checkUserName: '',
      checkPassword: { validateStatus: '', errorMsg: '' },
    }
  }
  handleSetState = (keyName, value) => {
    this.setState({
      [keyName]: value,
    })
  }
  handleUsername = name => {
    const checkUsername = validate.validateUserName(name)
    this.handleSetState('checkUserName', checkUsername)
    return checkUsername
  }
  handlePassword = name => {
    const checkPassword = validate.validatePassword(name)
    this.handleSetState('checkPassword', checkPassword)
    return checkPassword
  }
  handleInputChange = e => {
    const inputName = e.target.name
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState(prev => ({
      userInfoLogin: {
        ...prev.userInfoLogin,
        [inputName]: value,
      },
    }))
    if (timeOut) {
      clearTimeout(timeOut)
    }
    timeOut = setTimeout(() => {
      if (inputName === 'username') {
        this.handleUsername(value)
      }
      if (inputName === 'password') {
        this.handlePassword(value)
      }
    }, 500)
  }
  handleSubmit = e => {
    e.preventDefault()
    const checkUserName = this.handleUsername(this.state.userInfoLogin.username)
    const checkPass = this.handlePassword(this.state.userInfoLogin.password)
    if (checkUserName || checkPass.validateStatus === 'error') {
      console.log('lỗi')
      return false
    }
    console.log('thành công')
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className="login-box">
        <div className="info-wrapper">
          <Form.Item
            validateStatus={this.state.checkUserName ? 'error' : 'success'}
            help={this.props.t(this.state.checkUserName)}>
              <p className="warning-login-username">Sorry your email or password is incorrect please try again.</p>
            <Input
              className="auth-input"
              // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder={this.props.t('auth:username')}
              name="username"
              value={this.state.userInfoLogin.username}
              onChange={this.handleInputChange}
            />
          </Form.Item>
          <Form.Item
            validateStatus={this.state.checkPassword.validateStatus}
            help={this.props.t(this.state.checkPassword.errorMsg)}>
            <Input
              className="auth-input"
              // prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder={this.props.t('auth:password')}
              name="password"
              value={this.state.userInfoLogin.password}
              onChange={this.handleInputChange}
            />
          </Form.Item>
        </div>
        <Form.Item>
          <div className="login-part">
            <span className="login-part-option">
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox className="login-checkbox">
                  {this.props.t('loginForm:rememberMe')}
                </Checkbox>
              )}
              <Link className="login-form-forgot" to="/dashboard">
                {this.props.t('loginForm:forgotPassword')}
              </Link>
            </span>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button" id="login-small-button">
              {this.props.t('loginForm:button')}
            </Button>
          </div>
        </Form.Item>
      </Form>
    )
  }
}
NormalLoginForm.propTypes = {
  t: PropTypes.func.isRequired,
  form: PropTypes.object,
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(
  NormalLoginForm
)

export default withTranslation()(WrappedNormalLoginForm)
