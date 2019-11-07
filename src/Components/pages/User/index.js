import React, { useState, useEffect } from 'react'
import { func } from 'prop-types'
import './styles.scss'
import ControlUser from 'Components/organisms/ControlUser'
import UploadFile from "Components/atoms/UploadFile";

const User = ({ t }) => {
  let [varA, setVarA] = useState(0)

  useEffect(() => {
    console.log('varA', varA)
  })

  return (
    <div className="font50">
      <ControlUser />
      <span>pages User: {varA}</span>
      <button onClick={() => setVarA(varA + 1)}>OK</button>
      <hr />
      <UploadFile />
    </div>
  )
}

User.propTypes = {
  t: func,
}

export default User
