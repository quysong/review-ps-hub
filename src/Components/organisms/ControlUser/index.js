// import React, { Component } from 'react'
// import './stylesModule.scss'

// class ControlUser extends Component {
//   render() {
//     return <div className="user-organisms">ControlUser organisms</div>
//   }
// }

// export default ControlUser

import React, { useState, useEffect } from 'react'

const ControlUser = () => {
  let [varX, setVarX] = useState(0)

  useEffect(() => {
    console.log('varX', varX)
  })

  return (
    <>
      <div>ControlUser: {varX}</div>
      <button onClick={() => setVarX(varX + 1)}>OK</button>
      <hr />
    </>
  )
}

export default ControlUser
