export const checkResponseError = res => {
  if (res.result === 'fail') {
    throw new Error(res.errorMessage)
  }
}
