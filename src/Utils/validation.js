import * as configs from './enum'
export function validateUserName(name) {
  if (!name) {
    return 'validate:required'
  }
  if (!validateEmail(name)) {
    return 'validate:invalidEmail'
  }
  return null
}

export function validatePassword(password) {
  if (!password) {
    return {
      validateStatus: 'error',
      errorMsg: 'validate:required',
    }
  }
  const pattenPass = new RegExp('^.{6,64}$') // min length 6, max length 64
  if (!pattenPass.test(password)) {
    return {
      validateStatus: 'error',
      errorMsg: 'validate:invalidPassword',
    }
  }
  return {
    validateStatus: 'success',
    errorMsg: null,
  }
}

/**
 * validate email
 * @param email
 * @returns {boolean}
 */
export function validateEmail(email) {
  // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const re = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/g
  return re.test(email)
}

export function validatePhone(phone) {
  // const patternPhone = new RegExp('^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$')
  // const patternPhone1 = new RegExp('\\+?((84[1])+(\\d{9})|(84[98])+(\\d{8})|(09|08|07|05|03|01[2689])+(\\d{8}))\\b') // [2689] is start 01 have to 11 numbers
  const patternPhone = new RegExp(
    '\\+?((84[1])+(\\d{9})|(84[98])+(\\d{8})|(09|08|07|05|03|01)+(\\d{8}))\\b'
  )
  return patternPhone.test(phone)
}

export function checkEmail(email) {
  const validate = validateEmail(email)
  if (!email) {
    return 'Field is required.'
  }
  if (!validate) {
    return 'Email is invalid.'

  }
  return null
}

function checkInvalidLength(password) {
  return /^.{6,20}$/.test(password)
}

function caseNewPassword(password) {
  const config = {
    UPPER_CASE: 'UPPER_CASE',
    LOWER_CASE: 'LOWER_CASE',
    NUMBER: 'NUMBER',
    SPECIAL_CHARACTER: 'SPECIAL_CHARACTER',
  }
  let resultTmp = []
  let result = []
  const regUpperCase = /(?=.*?[A-Z])/.test(password) ? config.UPPER_CASE : null
  const regLowerCase = /(?=.*?[a-z])/.test(password) ? config.LOWER_CASE : null
  const regNumber = /(?=.*?[0-9])/.test(password) ? config.NUMBER : null
  const regSpecialCharacter = /(?=.*?[#?!@$%^&*-])/.test(password)
    ? config.SPECIAL_CHARACTER
    : null
  resultTmp = [regUpperCase, regLowerCase, regNumber, regSpecialCharacter]
  for (let i = 0; i < resultTmp.length; i++) {
    if (resultTmp[i]) {
      result.push(resultTmp[i])
    }
  }
  return result
}

export function validateNewPassword(password) {
  if (!password) {
    return {
      validateStatus: 'error',
      errorMsg: 'Field is required.',
      typeRules: null,
      class: 'required',
    }
  }
  if (!checkInvalidLength(password)) {
    return {
      validateStatus: 'error',
      errorMsg: 'Field is invalid.',
      typeRules: null,
      class: null,
    }
  }
  let result = caseNewPassword(password)
  let resultLength = result.length
  let dataReturn = null
  switch (resultLength) {
    case configs.LEVEL_PASSWORD.WEAK.key:
      dataReturn = {
        validateStatus: 'success',
        errorMsg: null,
        typeRules: configs.LEVEL_PASSWORD.WEAK.text,
        class: 'weak',
      }
      break
    case configs.LEVEL_PASSWORD.OK.key:
      dataReturn = {
        validateStatus: 'success',
        errorMsg: null,
        typeRules: configs.LEVEL_PASSWORD.OK.text,
        class: 'ok',
      }
      break
    case configs.LEVEL_PASSWORD.STRONG.key:
      dataReturn = {
        validateStatus: 'success',
        errorMsg: null,
        typeRules: configs.LEVEL_PASSWORD.STRONG.text,
        class: 'strong',
      }
      break
    default:
      dataReturn = {
        validateStatus: 'success',
        errorMsg: '',
        typeRules: configs.LEVEL_PASSWORD.VERY_WEAK.text,
        class: 'very-weak',
      }
      break
  }
  return dataReturn
}

export function validateComparePassword(password, confirmPassword) {
  let dataReturn = null
  if (!confirmPassword) {
    dataReturn = {
      validateStatus: 'error',
      errorMsg: 'Field is required.',
      typeRules: null,
      class: 'required',
    }
    return dataReturn
  }
  if (!checkInvalidLength(password)) {
    dataReturn = {
      validateStatus: 'error',
      errorMsg: null,
    }
    return dataReturn
  }
  if (password !== confirmPassword) {
    dataReturn = {
      validateStatus: 'error',
      errorMsg: 'The new password does not match the old password',
    }
    return dataReturn
  }
  dataReturn = {
    validateStatus: 'success',
    errorMsg: null,
  }
  return dataReturn
}

// export function validatePasswordRequired(password) {
//
// }
