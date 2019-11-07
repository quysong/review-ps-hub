import React, { useState } from 'react'
import NewPassword from '../Components/pages/NewPassword'
import {
  validateNewPassword,
  validateComparePassword,
} from '../Utils/validation'
import 'Assets/styles/auth.scss'

const NewPasswordContainer = () => {
  const [password, setPassword] = useState(null)
  const [messageNewPassword, setMessageNewPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [messageConfirmPassword, setMessageConfirmPassword] = useState(null)
  const [typeRules, setTypeRules] = useState(null)
  const [classPassword, setClassPassword] = useState(null)
  const [classConfirmPassword, setClassConfirmPassword] = useState(null)
  const handleValidateNewPassword = value => {
    setPassword(value)
    const result = updateStatePassword(value)
    // validate compare password
    if (result.errorMsg) return setMessageConfirmPassword(null)
    if (!confirmPassword) return false
    let resultCompare = validateComparePassword(value, confirmPassword)
    setMessageConfirmPassword(resultCompare.errorMsg)
  }
  const handleValidateConfirmPassword = value => {
    setConfirmPassword(value)
    updateStateConfirmPassword(password, value)
  }
  const updateStatePassword = value => {
    const result = validateNewPassword(value)
    setTypeRules(result.typeRules)
    setMessageNewPassword(result.errorMsg)
    setClassPassword(result.class)
    return result
  }
  const updateStateConfirmPassword = (password, confirmPassword) => {
    const comparePassword = validateComparePassword(password, confirmPassword)
    setMessageConfirmPassword(comparePassword.errorMsg)
    setClassConfirmPassword(comparePassword.class)
    return comparePassword
  }
  const handleSubmit = e => {
    e.preventDefault()
    const resultPassword = updateStatePassword(password)
    const resultConfirmPassword = updateStateConfirmPassword(
      password,
      confirmPassword
    )
    if (resultPassword.errorMsg || resultConfirmPassword.errorMsg) return false
    console.log('you can submit')
  }
  return (
    <NewPassword
      password={password}
      confirmPassword={confirmPassword}
      messageNewPassword={messageNewPassword}
      messageConfirmPassword={messageConfirmPassword}
      typeRules={typeRules}
      classPassword={classPassword}
      classConfirmPassword={classConfirmPassword}
      handleValidateNewPassword={handleValidateNewPassword}
      handleValidateConfirmPassword={handleValidateConfirmPassword}
      handleSubmit={handleSubmit}
    />
  )
}
export default NewPasswordContainer
