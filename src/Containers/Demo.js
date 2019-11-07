import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import 'Stores/Demo/Reducers'
import 'Stores/Demo/Sagas'
import PropTypes from 'prop-types'
import { DemoActions } from 'Stores/Demo/Actions'
import { DemoSelectors } from 'Stores/Demo/Selectors'
import { Link } from 'react-router-dom'

const DemoContainer = ({ getListDemo, clearListDemo, items, ...props }) => {
  useEffect(() => {
    getListDemo()
    console.log('items', items)
    return () => clearListDemo()
  }, [])

  const getDemo = () => {
    console.log('getDemo')
  }

  const handleToLogin = () => {
    console.log('handleToLogin')
  }

  const raiseError = () => {
    throw new Error('crashed!')
  }

  return (
    <>
      <div>Demo</div>
      <button onClick={getDemo}>OK</button>
      <button onClick={handleToLogin}>handleToLogin</button>
      <Link to="login">Link to login</Link>
      <hr />
      <button onClick={raiseError}>Raise Error!</button>
    </>
  )
}

const mapStateToProps = state => ({
  items: DemoSelectors.getItems(state),
})

const mapDispatchToProps = dispatch => ({
  getListDemo: () => dispatch(DemoActions.getItemsRequest()),
  clearListDemo: () => dispatch(DemoActions.clearItems()),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

DemoContainer.propTypes = {
  getListDemo: PropTypes.func.isRequired,
  clearListDemo: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired,
}

// export default DemoContainer
export default compose(withConnect)(DemoContainer)
