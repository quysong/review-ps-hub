import React, { useState } from 'react'
import { createBrowserHistory } from 'history'
import PropTypes from 'prop-types'
import ResetPassword from 'Components/pages/ResetPassword'
import { checkEmail } from 'Utils/validation'
import { withRouter } from 'react-router-dom'
const ResetPasswordContainer = ({ history }) => {
  const [email, setEmail] = useState(null)
  const [message, setMessage] = useState(null)
  const [showFormEmail, setShowFormEmail] = useState(true)
  const handleResetPassword = e => {
    e.preventDefault()
    const result = handleValidateEmail(email)
    if (result) return false
    setShowFormEmail(false)
    // history.push('/confirm-reset-password')
  }
  const handleValidateEmail = val => {
    setEmail(val)
    const result = checkEmail(val)
    setMessage(result)
    return result
  }
  return (
    <>
      <ResetPassword
        email={email}
        message={message}
        showFormEmail={showFormEmail}
        handleResetPassword={handleResetPassword}
        handleValidateEmail={handleValidateEmail}
      />
    </>
  )
}

ResetPasswordContainer.propTypes = {
  history: PropTypes.object,
}

export default withRouter(ResetPasswordContainer)
